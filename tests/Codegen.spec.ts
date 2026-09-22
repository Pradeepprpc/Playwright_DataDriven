import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/register');
  await expect(page.getByRole('heading', { name: 'Register Form' })).toBeVisible();
  //await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Raj');
 //await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).click();
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).fill('Singh');
  //await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('042323232');
  await page.locator('#countries_dropdown_menu').selectOption('Australia');
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.locator('#countries_dropdown_menu').selectOption('Republic of Montenegro');
  await page.getByRole('textbox', { name: 'Enter email' }).fill('aaj@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('A1234');
  await page.getByRole('checkbox', { name: 'I agree with the terms and' }).check();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('The account has been')).toBeVisible();
});


test('sample codegen',async({page})=>{
   await page.goto('https://qa-practice.netlify.app/register')
   await page.getByRole('textbox', { name: 'First Name' }).fill('Akhil');
   await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).click();
   await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).fill('Ra');
   await page.getByRole('textbox', { name: 'Enter phone number' }).click();
   await page.getByRole('textbox', { name: 'Enter phone number' }).fill('32323232');
   await page.locator('#countries_dropdown_menu').selectOption('Australia');
   await page.getByRole('textbox', { name: 'Enter email' }).click();
   await page.getByRole('textbox', { name: 'Enter email' }).fill('ak@gmailcom');
   await page.getByRole('textbox', { name: 'Enter email' }).press('ArrowLeft');
   await page.getByRole('textbox', { name: 'Enter email' }).press('ArrowLeft');
   await page.getByRole('textbox', { name: 'Enter email' }).press('ArrowLeft');
   await page.getByRole('textbox', { name: 'Enter email' }).fill('ak@gmail.com');
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill('Ak2121');
   await page.getByRole('checkbox', { name: 'I agree with the terms and' }).check();
   await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
   await expect(page.locator('#registerBtn')).toContainText('Register');
   await page.getByRole('button', { name: 'Register' }).click();
   await expect(page.getByText('The account has been')).toBeVisible();
  
  
})


// test flight 

test('test11', async ({ page }) => {
  await page.goto('https://flights.qedgetech.com/');
  await page.getByRole('textbox', { name: 'Email ID' }).click();
  await page.getByRole('textbox', { name: 'Email ID' }).fill('pradeep.prpc@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password@009');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Select Date' }).click();
 // await page.getByRole('link', { name: '30' }).click();
  await page.getByRole('combobox').first().selectOption('1');
  await page.getByRole('combobox').nth(1).selectOption('4');
  await page.waitForTimeout(3000)
});




test('test2121', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/');
  await page.getByRole('link', { name: 'Datepicker' }).click();
  await page.locator('iframe').contentFrame().locator('#datepicker').click();
  await page.locator('iframe').contentFrame().getByRole('link', { name: '17' }).click();
  await page.getByRole('link', { name: 'Menu', exact: true }).click();
  await page.locator('iframe').contentFrame().getByRole('menuitem', { name: 'Clothing' }).click();
  await page.locator('iframe').contentFrame().getByRole('menuitem', { name: 'Electronics' }).click();
  await page.locator('iframe').contentFrame().getByRole('menuitem', { name: 'Utilities' }).click();
  await page.locator('iframe').contentFrame().getByRole('menuitem', { name: 'Music' }).click();
  //await page.locator('iframe').contentFrame().getByRole('menuitem', { name: 'Freejazz' }).click();
  await page.getByRole('link', { name: 'Draggable' }).click();
  await page.locator('iframe').contentFrame().locator('#draggable').click();
  await page.getByRole('link', { name: 'Checkboxradio' }).click();
  await page.locator('iframe').contentFrame().locator('span').first().click();
  await page.locator('iframe').contentFrame().locator('fieldset:nth-child(5) > label:nth-child(6) > .ui-checkboxradio-icon').click();
  await page.locator('iframe').contentFrame().locator('fieldset:nth-child(5) > label:nth-child(4) > .ui-checkboxradio-icon').click();
  await page.locator('iframe').contentFrame().locator('label:nth-child(3) > .ui-checkboxradio-icon').click();
  await page.locator('iframe').contentFrame().locator('fieldset:nth-child(7) > label:nth-child(4) > .ui-checkboxradio-icon').click();
});




test('test212121', async ({ page }) => {
  await page.goto('https://www.qantas.com/en-au');
  await page.getByRole('combobox', { name: 'Departure location' }).click();
  await page.getByText('Sydney (Kingsford Smith),').click();
  await page.getByRole('combobox', { name: 'Arrival location' }).click();
  await page.getByRole('combobox', { name: 'Arrival location' }).fill('Melbourne');
  await page.getByText('Melbourne (Avalon), Australia').click();
  await page.getByRole('button', { name: 'Travel dates' }).click();
  await page.getByTestId('2026-09-16').click();
  await page.getByTestId('2026-09-23').click();
  await page.getByRole('button', { name: 'close date selector' }).click();
  //await page.getByRole('button', { name: 'Search flights' }).click();
});




test('test090', async ({ page }) => {
  await page.goto('https://members.medibank.com.au/');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pradeep.prpc@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Summer@09');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByTestId('mfa-sms-otp-request-code-button').click();
  await page.getByTestId('mfa-sms-otp-verify-code-input').click();
  await page.getByTestId('mfa-sms-otp-verify-code-input').fill('232465');
  await page.getByTestId('mfa-sms-otp-verify-code-button').click();
});




test('test2121212', async ({ page }) => {
  await page.goto('http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login');
  await page.locator('#txtUsername').click();
  await page.locator('#txtUsername').fill('Admin');
  await page.locator('#txtUsername').press('Tab');
  await page.locator('#txtPassword').fill('Qedge123!@#');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('link', { name: 'Leave', exact: true }).click();
  await page.getByRole('link', { name: 'Welcome Suresh' }).click();
  //await page.getByRole('link', { name: 'Logout', exact: true }).click();
});