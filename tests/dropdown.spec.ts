import {test, expect} from 'playwright/test';

/*
test('Dropdowns handling by label', async ({page})=>{
await page.goto('https://www.appviewx.com/products/avx-one-clm-for-kubernetes-ppc/?utm_source=googleads&utm_medium=cpc&utm_campaign=[google_ppc_non-brand-demo-india]&utm_content=183900273585&utm_term=best%20devops%20tools&b=b&gad_source=1&gad_campaignid=22944173162&gbraid=0AAAAADi24qAkrp3mU8NMUrZYf3a8Y24Hs&gclid=CjwKCAiA_dDIBhB6EiwAvzc1cNe1iNFTJxp1iX-Gbo_vWUqGnIwMICwQ3_H9hMDklRxvZ3URQL0UsxoCYA8QAvD_BwE')
   await page.locator('#onetrust-accept-btn-handler').click();

//BY Lablel
await page.locator('#HQ_Country__c').selectOption({label:'Afghanistan'})
await page.waitForTimeout(2000)
})

test('Dropdowns handling by text', async ({page})=>{
//By Text
await page.goto('https://www.appviewx.com/products/avx-one-clm-for-kubernetes-ppc/?utm_source=googleads&utm_medium=cpc&utm_campaign=[google_ppc_non-brand-demo-india]&utm_content=183900273585&utm_term=best%20devops%20tools&b=b&gad_source=1&gad_campaignid=22944173162&gbraid=0AAAAADi24qAkrp3mU8NMUrZYf3a8Y24Hs&gclid=CjwKCAiA_dDIBhB6EiwAvzc1cNe1iNFTJxp1iX-Gbo_vWUqGnIwMICwQ3_H9hMDklRxvZ3URQL0UsxoCYA8QAvD_BwE')
await page.locator('#onetrust-accept-btn-handler').click();
await page.locator('#HQ_Country__c').selectOption('Antigua and Barbuda')
await page.waitForTimeout(3000)

})

test('Dropdowns handling by value', async ({page})=>{
//By value
await page.goto('https://www.appviewx.com/products/avx-one-clm-for-kubernetes-ppc/?utm_source=googleads&utm_medium=cpc&utm_campaign=[google_ppc_non-brand-demo-india]&utm_content=183900273585&utm_term=best%20devops%20tools&b=b&gad_source=1&gad_campaignid=22944173162&gbraid=0AAAAADi24qAkrp3mU8NMUrZYf3a8Y24Hs&gclid=CjwKCAiA_dDIBhB6EiwAvzc1cNe1iNFTJxp1iX-Gbo_vWUqGnIwMICwQ3_H9hMDklRxvZ3URQL0UsxoCYA8QAvD_BwE')
await page.locator('#onetrust-accept-btn-handler').click();
await page.locator('#HQ_Country__c').selectOption({value:'Bangladesh'})
await page.waitForTimeout(3000)

})

test('Dropdowns handling by index', async ({page})=>{
//By index
await page.goto('https://www.appviewx.com/products/avx-one-clm-for-kubernetes-ppc/?utm_source=googleads&utm_medium=cpc&utm_campaign=[google_ppc_non-brand-demo-india]&utm_content=183900273585&utm_term=best%20devops%20tools&b=b&gad_source=1&gad_campaignid=22944173162&gbraid=0AAAAADi24qAkrp3mU8NMUrZYf3a8Y24Hs&gclid=CjwKCAiA_dDIBhB6EiwAvzc1cNe1iNFTJxp1iX-Gbo_vWUqGnIwMICwQ3_H9hMDklRxvZ3URQL0UsxoCYA8QAvD_BwE')
await page.locator('#onetrust-accept-btn-handler').click();
await page.locator('#HQ_Country__c').selectOption({index:3})
await page.waitForTimeout(3000)

})

test('Dropdowns handling by selectoption direct', async ({page})=>{
//By direct select option
await page.goto('https://www.appviewx.com/products/avx-one-clm-for-kubernetes-ppc/?utm_source=googleads&utm_medium=cpc&utm_campaign=[google_ppc_non-brand-demo-india]&utm_content=183900273585&utm_term=best%20devops%20tools&b=b&gad_source=1&gad_campaignid=22944173162&gbraid=0AAAAADi24qAkrp3mU8NMUrZYf3a8Y24Hs&gclid=CjwKCAiA_dDIBhB6EiwAvzc1cNe1iNFTJxp1iX-Gbo_vWUqGnIwMICwQ3_H9hMDklRxvZ3URQL0UsxoCYA8QAvD_BwE')
await page.locator('#onetrust-accept-btn-handler').click();
await page.selectOption('#HQ_Country__c','India')
await page.waitForTimeout(3000)



})
*/

test('diffrenet assertion', async({page})=>{

    await page.goto('https://www.appviewx.com/products/avx-one-clm-for-kubernetes-ppc/?utm_source=googleads&utm_medium=cpc&utm_campaign=[google_ppc_non-brand-demo-india]&utm_content=183900273585&utm_term=best%20devops%20tools&b=b&gad_source=1&gad_campaignid=22944173162&gbraid=0AAAAADi24qAkrp3mU8NMUrZYf3a8Y24Hs&gclid=CjwKCAiA_dDIBhB6EiwAvzc1cNe1iNFTJxp1iX-Gbo_vWUqGnIwMICwQ3_H9hMDklRxvZ3URQL0UsxoCYA8QAvD_BwE')
await page.locator('#onetrust-accept-btn-handler').click();
 //   const OptionsCount: any= await page.locator('#HQ_Country__c option')
 // console.log('optionscount total:', OptionsCount.length)
    //    await expect(OptionsCount).toHaveCount(244)
    const OptionsCount=await page.$$('#HQ_Country__c option')
 await expect(OptionsCount.length).toBe(244)
})