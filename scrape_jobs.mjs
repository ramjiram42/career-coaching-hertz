import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log("Navigating to Hertz jobs portal...");
  await page.goto('https://jobs.hertzcareers.com/#en/sites/CX_1/jobs', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(5000);

  console.log("Executing bulk fetch via browser context...");
  
  const allJobs = await page.evaluate(async () => {
    const fetchBatch = async (offset) => {
        const url = `https://jobs.hertzcareers.com/hcmRestApi/resources/latest/recruitingJobRequisitions?site=CX_1&limit=100&offset=${offset}&onlyData=true`;
        const res = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'ora-irc-language': 'en'
            }
        });
        return await res.json();
    };

    let results = [];
    let offset = 0;
    while (offset < 1200) {
        console.log(`Fetching offset ${offset}...`);
        const data = await fetchBatch(offset);
        if (!data.items || data.items.length === 0) break;
        results.push(...data.items);
        offset += data.items.length;
        if (data.items.length < 100) break;
        await new Promise(r => setTimeout(r, 500));
    }
    return results;
  });

  console.log(`Fetched ${allJobs.length} job stubs. Now fetching full details for each...`);

  // To speed this up for 1113 jobs, we'll fetch details in batches of 10
  const detailedJobs = [];
  const batchSize = 10;
  for (let i = 0; i < allJobs.length; i += batchSize) {
    const batch = allJobs.slice(i, i + batchSize);
    console.log(`Detail Batch ${i/batchSize + 1}/${Math.ceil(allJobs.length/batchSize)}...`);
    
    const batchDetails = await page.evaluate(async (jobBatch) => {
        const fetchDetail = async (id) => {
            const url = `https://jobs.hertzcareers.com/hcmRestApi/resources/latest/recruitingJobRequisitions/${id}?site=CX_1&onlyData=true`;
            const res = await fetch(url, { headers: { 'Accept': 'application/json', 'ora-irc-language': 'en' } });
            return await res.json();
        };
        return await Promise.all(jobBatch.map(j => fetchDetail(j.Id).catch(e => ({ Id: j.Id, error: e.message }))));
    }, batch);

    detailedJobs.push(...batchDetails);
    
    // Intermediate save
    if (detailedJobs.length % 50 === 0 || detailedJobs.length === allJobs.length) {
        fs.writeFileSync('hertz_jobs_extracted.json', JSON.stringify(detailedJobs, null, 2));
    }
  }

  console.log(`Final extraction complete. Saved ${detailedJobs.length} jobs to hertz_jobs_extracted.json`);
  await browser.close();
})();
