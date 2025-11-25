import {test, expect} from "playwright/test";

test ('Assertions', async ({page})=>{
 /*   await page.goto('https://www.saucedemo.com')
    //expect(page).toHaveURL() — Page has URL
    await expect(page).toHaveURL('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Login' }).click();

//expect(page).toHaveTitle() — Page has title
    await expect(page).toHaveTitle('Swag Labs')
    await page.waitForTimeout(3000)

    //expect(locator).toBeVisible() — Element is visible
    const Logo=await page.locator('.app_logo')
    await expect(Logo).toBeVisible()

 //OR await expect(await page.locator('.app_logo')).toBeVisible()

 //expect(locator).toBeEnabled() — Control is enabled
 await page.goto('https://www.saucedemo.com/'); 
  const loginButton = page.locator('#login-button');
    await expect(loginButton).toBeEnabled();
*/

//expect(locator).toBeChecked() — Radio/Checkbox is checked
await page.goto('https://dotesthere.com')
await page.waitForTimeout(3000)

await page.getByRole('link', { name: 'Checkboxes' }).click();
await expect(page.locator('input#checkbox1')).not.toBeChecked()
await expect(page.locator('input#checkbox2')).toBeChecked()


await page.waitForTimeout(3000)

//expect(locator).toHaveText() — Element matches text

const Text = page.locator('div[data-element="checkboxes"] h3')
await expect(Text).toHaveText('Checkboxes')

})