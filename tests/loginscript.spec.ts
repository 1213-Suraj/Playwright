import {test, expect } from "@playwright/test";

test ('Login', async ({page})=> {

    await page.goto('https://staging.proctoru.com/session/new')

    await page.fill('id=username', 'nonstop@meazurelearning.com')
    await page.fill('id=password', 'Weteststuff1!')
    await page.click('//input[@value="Log in"]')

    await page.click('id=institutionsDropdown')
    await page.waitForSelector('text=All Institutions', { state: 'visible' });
    await page.click('text=All Institutions');
    await expect(page).toHaveURL(/.*institutions/);

    await page.waitForTimeout(3000)


        await page.click('#select2-select2-institution-container');
        await page.waitForTimeout(2000)
        await page.locator('//span[@class="select2-search select2-search--dropdown"]/input').fill('BlackBoard Ultra Staging Univer')
        await page.waitForTimeout(3000)
        const option = page.getByRole('option', { name: 'BlackBoard Ultra Staging Univer' });
        await option.waitFor({ state: 'visible' });
        await option.click();
    
                        await page.waitForTimeout(2000)
                        await page.click('input[value="Search"]');
                        await page.waitForTimeout(2000)
                        await page.getByRole('link', { name: 'BlackBoard Ultra Staging Univer' }).click();
                        await page.waitForTimeout(2000)
       
                        await expect(page.getByRole('heading', { name: /BlackBoard Ultra Staging/i })).toBeVisible();
                                 await page.screenshot({ path: 'institution-page.png'})
})