import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  let apiUrl = null;
  let headers = null;

  page.on('request', request => {
    if (request.url().includes('recruitingCEJobRequisitions') && request.method() === 'GET') {
      apiUrl = request.url();
      headers = request.headers();
    }
  });

  console.log("Navigating to jobs portal...");
  await page.goto('https://jobs.hertzcareers.com/#en/sites/CX_1/jobs', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  if (apiUrl) {
    console.log("Intercepted API: " + apiUrl);
    let allJobs = [];
    let offset = 0;
    
    // Try to fetch up to 1000 jobs by paging 25 at a time
    while(allJobs.length < 1000) {
        let pagedUrl = apiUrl;
        if(pagedUrl.includes('offset=')) {
           pagedUrl = pagedUrl.replace(/offset=\d+/, `offset=${offset}`);
        } else {
           pagedUrl += `&offset=${offset}`;
        }
        
        console.log("Evaluating fetch on page for offset " + offset);
        try {
          const res = await page.evaluate(async ({url, headers}) => {
            // Delete standard forbidden headers that might break the cross-origin fetch if evaluated weirdly, though we are in same origin
            const safeHeaders = { ...headers };
            delete safeHeaders['content-length'];
            
            const req = await fetch(url, { headers: safeHeaders });
            return await req.json();
          }, {url: pagedUrl, headers});
          
          let fetchedJobs = [];
          
          if (res.items && res.items[0] && res.items[0].requisitionList) {
            fetchedJobs = res.items[0].requisitionList;
          } else if (res.items) {
            fetchedJobs = res.items;
          } else if (Array.isArray(res)) {
            fetchedJobs = res;
          }

          if(fetchedJobs.length === 0) {
            console.log("No more jobs returned.");
            break; 
          }
          
          // Map to cleaner format
          const cleanJobs = fetchedJobs.map(j => ({
            id: j.Id,
            title: j.Title,
            category: j.SecondaryCategory || j.Category || "General",
            location: j.PrimaryLocation || "Multiple",
            date: j.PostedDate,
            reqId: j.RequisitionId
          }));

          allJobs.push(...cleanJobs);
          console.log(`Fetched ${fetchedJobs.length}. Total so far: ${allJobs.length}`);
          
          offset += 25; 
          await page.waitForTimeout(500); 
        } catch (e) {
          console.log("Error fetching API: " + e.message);
          break;
        }
    }
    
    fs.writeFileSync('hertz_jobs_extracted.json', JSON.stringify(allJobs, null, 2));
    console.log("Written " + allJobs.length + " jobs to hertz_jobs_extracted.json");
    
  } else {
    console.log("Failed to trace Oracle API endpoint.");
    // Fallback: visual scraping if API fails
    const jobNodes = await page.$$eval('.job-title', nodes => nodes.map(n => n.innerText));
    console.log("Visual Jobs: ", jobNodes);
  }
  
  await browser.close();
})();
