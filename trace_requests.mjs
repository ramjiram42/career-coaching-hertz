import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const interceptedRequests = [];

  page.on('request', request => {
    if (request.url().includes('requisitions') || request.url().includes('jobs')) {
        interceptedRequests.push({
            url: request.url(),
            headers: request.headers(),
            method: request.method()
        });
    }
  });

  console.log("Navigating and waiting for network activity...");
  await page.goto('https://jobs.hertzcareers.com/#en/sites/CX_1/jobs', { waitUntil: 'networkidle', timeout: 60000 });
  
  // Wait even longer for background APIs
  await page.waitForTimeout(10000);

  fs.writeFileSync('intercepted_requests.json', JSON.stringify(interceptedRequests, null, 2));
  console.log(`Captured ${interceptedRequests.length} candidate requests. Check intercepted_requests.json`);

  await browser.close();
})();
