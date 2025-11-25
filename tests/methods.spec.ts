import {test, expect } from "@playwright/test";

test('methods', async ({page})=>{

    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.waitForTimeout(5000)
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByAltText 



})