import { test, expect } from "@playwright/test";

test('Yatra flow', async ({page})=>{
 await page.goto('https://www.yatra.com/react-home?utm_source=google&utm_medium=search&utm_campaign=brand&_gcl&utm_source=google&utm_medium=cpc&utm_campaign=&gad_source=1&gad_campaignid=21579793373&gbraid=0AAAAAD4ZB-Oaexg4wyjFae4ElrMNiKrdh&gclid=Cj0KCQiArOvIBhDLARIsAPwJXOau3wHqRqJhdG5g1igFHx4TaZma7y-oBuH3Wihqge0Eu-5lGYb54S0aAgXqEALw_wcB')
 await page.waitForTimeout(2000)
 
 expect( await page.locator('//h4[text()="One Way"]')).toBeChecked()

await page.waitForSelector('//h4[text()="Round Trip"]')
 await page.locator('//h4[text()="Round Trip"]').check()
await page.waitForTimeout(2000)
await page.locator('(//p[@class="MuiTypography-root MuiTypography-body1  css-j7m7g0"])[1]').click()
await page.waitForTimeout(2000)
await page.fill('#input-with-icon-adornment','Pune')
await page.getByText('Pune').first().click()
await page.waitForTimeout(2000)
await page.locator('(//p[@class="MuiTypography-root MuiTypography-body1  css-j7m7g0"])[2]').click()
await page.waitForTimeout(2000)
await page.fill('#input-with-icon-adornment','Bangalore')
await page.getByText('Bangalore').first().click()
await page.waitForTimeout(2000)
await page.locator('//button[text()="Search"]').click()
await page.waitForTimeout(2000)
const ValidMsg = page.getByText('Please enter return date')
await expect(ValidMsg).toHaveText('Please enter return date')
await page.getByText('Book Round Trip ').click()
await page.waitForTimeout(2000)

await page.getByLabel('Choose Sunday, November 30th, 2025').click()

await page.waitForTimeout(2000)


})