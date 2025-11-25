import { test, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import logindata from '../testData/logindata.json'
test("Page Object Model login", async({page})=>{
const Login2=new LoginPage(page)
await Login2.Loginfunction()
//  await Login2.Login1('standard_user', 'secret_sauce')
await Login2.Login1(logindata.username, logindata.password)
await Login2.Addcart()
 

})

