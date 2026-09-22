import { test, expect } from '@playwright/test'; 
 
test('OrangeHRM Login', async ({ page }) => { 
 
    await test.step('Open Login Page', async () => { 
 
        await page.goto('http://orangehrm.qedgetech.com/'); 
 
    });  
    await test.step('Enter Username', async () => { 
 
        await page.fill('#txtUsername','Admin'); 
 
    });  
    await test.step('Enter Password', async () => { 
 
        await page.fill('#txtPassword','Qedge123!@#'); 
 
    });  
    await test.step('Click Login Button', async () => { 
 
        await page.click('#btnLogin'); 
 
    });  
    await test.step('Verify Dashboard', async () => { 
 
        await expect(page).toHaveURL(/dashboard/); 
 
    }); 
 
}); 

//Describe 

test.describe('OrangeHRM Login Module', () => { 
 
    test('Valid Login', async ({ page }) => { 
 
        await page.goto('http://orangehrm.qedgetech.com/'); 
    });  
    test('Invalid Login', async ({ page }) => { 
 
        await page.goto('http://orangehrm.qedgetech.com/'); 
    });  
    test('Forgot Password', async ({ page }) => { 
 
        await page.goto('http://orangehrm.qedgetech.com/'); 
    }); 
 
}); 
