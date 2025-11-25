import {test, expect} from '@playwright/test';

test ('URL Visit', async ({page})=>{
    
await page.goto('https://playwright.dev')

await expect(page).toHaveTitle(/Playwright/);

const docsLink = await page.locator('a[href="/docs/intro"]');
await docsLink.click();

await expect(page).toHaveTitle(/Docs/);

await page.screenshot({ path: 'playwright-docs.png' });

await page.close();

})