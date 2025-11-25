import { Page } from '@playwright/test';
 
 export class LoginPage {
page: Page;
 username: string;
 password: string;
 login: string;
 addcart: any;
 logout: string;
    constructor(page){
        this.page = page;
        this.username='#user-name'
        this.password='#password'
        this.login='#login-button'
        this.addcart='[id="react-burger-menu-btn"]'
        this.logout='Logout'

    }
    async Loginfunction(){
        await this.page.goto('https://www.saucedemo.com')
    }
    async Login1(username, password){
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.login);
    }
async Addcart(){

await this.page.click(this.addcart)
await this.page.getByText(this.logout).click()
 }
}
