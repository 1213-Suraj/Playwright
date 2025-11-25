import{test, expect} from 'playwright/test'
/*
test('Login', async({page})=>{
    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Login' }).click();


})

test('Add to Cart', async({page})=>{
    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
    await page.waitForTimeout(5000)


})

test('Logout',async({page})=>{
    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.waitForTimeout(5000)
    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator('[id="react-burger-menu-btn"]').click()
    await page.getByText('Logout').click()

})

*/

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Login' }).click();

})
 test.afterEach(async ({page}) => {
    await page.locator('[id="react-burger-menu-btn"]').click()
    await page.getByText('Logout').click()
 })

 test('Login', async({page})=>{
 }) 
 test('Add to Cart', async({page})=>{
    
    await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
    await page.waitForTimeout(5000)
 })
 test('Logout', async({page})=>{


 })
 
 