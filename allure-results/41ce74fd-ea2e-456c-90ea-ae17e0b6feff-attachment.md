# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Codegen.spec.ts >> test2121
- Location: tests\Codegen.spec.ts:69:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe').contentFrame().getByRole('menuitem', { name: 'Freejazz' })

```

# Page snapshot

```yaml
- generic [active] [ref=f4e1]:
  - banner [ref=f4e2]:
    - navigation [ref=f4e4]:
      - generic:
        - list [ref=f4e5]:
          - listitem [ref=f4e6] [cursor=pointer]:
            - link "jQuery" [ref=f4e7]:
              - /url: https://jquery.com/
          - listitem [ref=f4e8] [cursor=pointer]:
            - link "jQuery UI" [ref=f4e9]:
              - /url: https://jqueryui.com/
          - listitem [ref=f4e10] [cursor=pointer]:
            - link "jQuery Mobile" [ref=f4e11]:
              - /url: https://jquerymobile.com/
          - listitem [ref=f4e12] [cursor=pointer]:
            - link "Sizzle" [ref=f4e13]:
              - /url: https://sizzlejs.com/
          - listitem [ref=f4e14] [cursor=pointer]:
            - link "QUnit" [ref=f4e15]:
              - /url: https://qunitjs.com/
        - list [ref=f4e16]:
          - listitem [ref=f4e17] [cursor=pointer]:
            - link "Plugins" [ref=f4e18]:
              - /url: https://plugins.jquery.com/
          - listitem [ref=f4e19] [cursor=pointer]:
            - link "Contribute" [ref=f4e20]:
              - /url: https://contribute.jquery.org/
          - listitem [ref=f4e21] [cursor=pointer]:
            - link "Events" [ref=f4e22]:
              - /url: https://events.jquery.org/
          - listitem [ref=f4e23] [cursor=pointer]:
            - link "Support" [ref=f4e24]:
              - /url: https://jquery.com/support/
          - listitem [ref=f4e25] [cursor=pointer]:
            - link "OpenJS Foundation" [ref=f4e26]:
              - /url: https://openjsf.org/
  - generic [ref=f4e27]:
    - heading [level=2] [ref=f4e29]:
      - link "jQuery UI" [ref=f4e30] [cursor=pointer]:
        - /url: /
    - navigation [ref=f4e31]:
      - menu "Navigation" [ref=f4e32]:
        - listitem [ref=f4e33]:
          - link "Demos" [ref=f4e34] [cursor=pointer]:
            - /url: https://jqueryui.com/demos/
        - listitem [ref=f4e35]:
          - link "Download" [ref=f4e36] [cursor=pointer]:
            - /url: https://jqueryui.com/download/
        - listitem [ref=f4e37]:
          - link "API Documentation" [ref=f4e38] [cursor=pointer]:
            - /url: https://api.jqueryui.com/
        - listitem [ref=f4e39]:
          - link "Themes" [ref=f4e40] [cursor=pointer]:
            - /url: https://jqueryui.com/themeroller/
        - listitem [ref=f4e41]:
          - link "Development" [ref=f4e42] [cursor=pointer]:
            - /url: https://jqueryui.com/development/
        - listitem [ref=f4e43]:
          - link "Support" [ref=f4e44] [cursor=pointer]:
            - /url: https://jqueryui.com/support/
        - listitem [ref=f4e45]:
          - link "Blog" [ref=f4e46] [cursor=pointer]:
            - /url: https://blog.jqueryui.com/
        - listitem [ref=f4e47]:
          - link "About" [ref=f4e48] [cursor=pointer]:
            - /url: https://jqueryui.com/about/
      - search [ref=f4e49]:
        - searchbox "Search jQuery UI" [ref=f4e50]
        - button [ref=f4e51] [cursor=pointer]
        - text: /
    - generic [ref=f4e53]:
      - generic [ref=f4e54]:
        - heading "Menu" [level=1] [ref=f4e55]
        - separator [ref=f4e56]
        - paragraph [ref=f4e57]: Themeable menu with mouse and keyboard interactions for navigation.
        - generic [ref=f4e58]:
          - heading "Examples" [level=2] [ref=f4e59]
          - list [ref=f4e60]:
            - listitem [ref=f4e61]:
              - link "Default functionality" [ref=f4e62] [cursor=pointer]:
                - /url: /resources/demos/menu/default.html
            - listitem [ref=f4e63]:
              - link "Categories" [ref=f4e64] [cursor=pointer]:
                - /url: /resources/demos/menu/categories.html
            - listitem [ref=f4e65]:
              - link "Icons" [ref=f4e66] [cursor=pointer]:
                - /url: /resources/demos/menu/icons.html
        - iframe [ref=f4e67]:
          - menu [ref=f5e2]:
            - listitem:
              - menuitem "Toys (n/a)" [disabled]
            - listitem [ref=f5e3] [cursor=pointer]:
              - menuitem "Books" [ref=f5e4]
            - listitem [ref=f5e5] [cursor=pointer]:
              - menuitem "Clothing" [ref=f5e6]
            - listitem [ref=f5e7] [cursor=pointer]:
              - menuitem "Electronics" [ref=f5e8]
            - listitem [ref=f5e10] [cursor=pointer]:
              - menuitem "Movies" [ref=f5e11]
            - listitem [ref=f5e12] [cursor=pointer]:
              - menuitem "Music" [ref=f5e13]
            - listitem:
              - menuitem "Specials (n/a)" [disabled]
        - paragraph [ref=f4e69]: A menu with the default configuration, disabled items and nested menus. A list is transformed, adding theming, mouse and keyboard navigation support. Try to tab to the menu then use the cursor keys to navigate.
        - generic [ref=f4e71] [cursor=pointer]:
          - generic [ref=f4e72]: 
          - text: view source
        - paragraph [ref=f4e73]:
          - text: Want to learn more about the menu widget? Check out the
          - link "API documentation" [ref=f4e74] [cursor=pointer]:
            - /url: https://api.jqueryui.com/menu/
          - text: .
      - complementary [ref=f4e75]:
        - complementary [ref=f4e76]:
          - heading "Interactions" [level=3] [ref=f4e77]
          - list [ref=f4e78]:
            - listitem [ref=f4e79]:
              - link "Draggable" [ref=f4e80] [cursor=pointer]:
                - /url: https://jqueryui.com/draggable/
            - listitem [ref=f4e81]:
              - link "Droppable" [ref=f4e82] [cursor=pointer]:
                - /url: https://jqueryui.com/droppable/
            - listitem [ref=f4e83]:
              - link "Resizable" [ref=f4e84] [cursor=pointer]:
                - /url: https://jqueryui.com/resizable/
            - listitem [ref=f4e85]:
              - link "Selectable" [ref=f4e86] [cursor=pointer]:
                - /url: https://jqueryui.com/selectable/
            - listitem [ref=f4e87]:
              - link "Sortable" [ref=f4e88] [cursor=pointer]:
                - /url: https://jqueryui.com/sortable/
        - complementary [ref=f4e89]:
          - heading "Widgets" [level=3] [ref=f4e90]
          - list [ref=f4e91]:
            - listitem [ref=f4e92]:
              - link "Accordion" [ref=f4e93] [cursor=pointer]:
                - /url: https://jqueryui.com/accordion/
            - listitem [ref=f4e94]:
              - link "Autocomplete" [ref=f4e95] [cursor=pointer]:
                - /url: https://jqueryui.com/autocomplete/
            - listitem [ref=f4e96]:
              - link "Button" [ref=f4e97] [cursor=pointer]:
                - /url: https://jqueryui.com/button/
            - listitem [ref=f4e98]:
              - link "Checkboxradio" [ref=f4e99] [cursor=pointer]:
                - /url: https://jqueryui.com/checkboxradio/
            - listitem [ref=f4e100]:
              - link "Controlgroup" [ref=f4e101] [cursor=pointer]:
                - /url: https://jqueryui.com/controlgroup/
            - listitem [ref=f4e102]:
              - link "Datepicker" [ref=f4e103] [cursor=pointer]:
                - /url: https://jqueryui.com/datepicker/
            - listitem [ref=f4e104]:
              - link "Dialog" [ref=f4e105] [cursor=pointer]:
                - /url: https://jqueryui.com/dialog/
            - listitem [ref=f4e106]:
              - link "Menu" [ref=f4e107] [cursor=pointer]:
                - /url: https://jqueryui.com/menu/
            - listitem [ref=f4e108]:
              - link "Progressbar" [ref=f4e109] [cursor=pointer]:
                - /url: https://jqueryui.com/progressbar/
            - listitem [ref=f4e110]:
              - link "Selectmenu" [ref=f4e111] [cursor=pointer]:
                - /url: https://jqueryui.com/selectmenu/
            - listitem [ref=f4e112]:
              - link "Slider" [ref=f4e113] [cursor=pointer]:
                - /url: https://jqueryui.com/slider/
            - listitem [ref=f4e114]:
              - link "Spinner" [ref=f4e115] [cursor=pointer]:
                - /url: https://jqueryui.com/spinner/
            - listitem [ref=f4e116]:
              - link "Tabs" [ref=f4e117] [cursor=pointer]:
                - /url: https://jqueryui.com/tabs/
            - listitem [ref=f4e118]:
              - link "Tooltip" [ref=f4e119] [cursor=pointer]:
                - /url: https://jqueryui.com/tooltip/
        - complementary [ref=f4e120]:
          - heading "Effects" [level=3] [ref=f4e121]
          - list [ref=f4e122]:
            - listitem [ref=f4e123]:
              - link "Add Class" [ref=f4e124] [cursor=pointer]:
                - /url: https://jqueryui.com/addClass/
            - listitem [ref=f4e125]:
              - link "Color Animation" [ref=f4e126] [cursor=pointer]:
                - /url: https://jqueryui.com/animate/
            - listitem [ref=f4e127]:
              - link "Easing" [ref=f4e128] [cursor=pointer]:
                - /url: https://jqueryui.com/easing/
            - listitem [ref=f4e129]:
              - link "Effect" [ref=f4e130] [cursor=pointer]:
                - /url: https://jqueryui.com/effect/
            - listitem [ref=f4e131]:
              - link "Hide" [ref=f4e132] [cursor=pointer]:
                - /url: https://jqueryui.com/hide/
            - listitem [ref=f4e133]:
              - link "Remove Class" [ref=f4e134] [cursor=pointer]:
                - /url: https://jqueryui.com/removeClass/
            - listitem [ref=f4e135]:
              - link "Show" [ref=f4e136] [cursor=pointer]:
                - /url: https://jqueryui.com/show/
            - listitem [ref=f4e137]:
              - link "Switch Class" [ref=f4e138] [cursor=pointer]:
                - /url: https://jqueryui.com/switchClass/
            - listitem [ref=f4e139]:
              - link "Toggle" [ref=f4e140] [cursor=pointer]:
                - /url: https://jqueryui.com/toggle/
            - listitem [ref=f4e141]:
              - link "Toggle Class" [ref=f4e142] [cursor=pointer]:
                - /url: https://jqueryui.com/toggleClass/
        - complementary [ref=f4e143]:
          - heading "Utilities" [level=3] [ref=f4e144]
          - list [ref=f4e145]:
            - listitem [ref=f4e146]:
              - link "Position" [ref=f4e147] [cursor=pointer]:
                - /url: https://jqueryui.com/position/
            - listitem [ref=f4e148]:
              - link "Widget Factory" [ref=f4e149] [cursor=pointer]:
                - /url: https://jqueryui.com/widget/
        - complementary [ref=f4e150]:
          - heading "Meta" [level=3] [ref=f4e151]
          - list [ref=f4e152]:
            - listitem [ref=f4e153]:
              - link "About jQuery UI" [ref=f4e154] [cursor=pointer]:
                - /url: https://jqueryui.com/about/
            - listitem [ref=f4e155]:
              - link "Browser Support" [ref=f4e156] [cursor=pointer]:
                - /url: https://jqueryui.com/browser-support/
            - listitem [ref=f4e157]:
              - link "Development Center" [ref=f4e158] [cursor=pointer]:
                - /url: https://jqueryui.com/development/
            - listitem [ref=f4e159]:
              - link "jQuery UI Changelogs" [ref=f4e160] [cursor=pointer]:
                - /url: https://jqueryui.com/changelog/
            - listitem [ref=f4e161]:
              - link "jQuery UI Upgrade Guides" [ref=f4e162] [cursor=pointer]:
                - /url: https://jqueryui.com/upgrade-guide/
            - listitem [ref=f4e163]:
              - link "Support Center" [ref=f4e164] [cursor=pointer]:
                - /url: https://jqueryui.com/support/
  - contentinfo [ref=f4e165]:
    - generic [ref=f4e166]:
      - generic [ref=f4e168]:
        - heading "Books" [level=3] [ref=f4e169]
        - list [ref=f4e171]:
          - listitem [ref=f4e172]:
            - link "jQuery UI in Action by TJ VanToll jQuery UI in Action TJ VanToll" [ref=f4e173] [cursor=pointer]:
              - /url: https://www.manning.com/books/jquery-ui-in-action
              - img "jQuery UI in Action by TJ VanToll" [ref=f4e175]
              - strong [ref=f4e176]: jQuery UI in Action
              - generic [ref=f4e177]: TJ VanToll
          - listitem [ref=f4e178]:
            - link "jQuery UI Themes by Adam Boduch jQuery UI Themes Adam Boduch" [ref=f4e179] [cursor=pointer]:
              - /url: https://www.packtpub.com/web-development/jquery-ui-themes-beginners-guide
              - img "jQuery UI Themes by Adam Boduch" [ref=f4e180]
              - text: jQuery UI Themes
              - generic [ref=f4e181]: Adam Boduch
          - listitem [ref=f4e182]:
            - link "jQuery UI Cookbook by Adam Boduch jQuery UI Cookbook Adam Boduch" [ref=f4e183] [cursor=pointer]:
              - /url: https://www.packtpub.com/web-development/jquery-ui-cookbook
              - img "jQuery UI Cookbook by Adam Boduch" [ref=f4e184]
              - text: jQuery UI Cookbook
              - generic [ref=f4e185]: Adam Boduch
      - generic [ref=f4e186]:
        - list [ref=f4e187]:
          - listitem [ref=f4e188]:
            - link " Learning Center" [ref=f4e189] [cursor=pointer]:
              - /url: https://learn.jquery.com/
          - listitem [ref=f4e190]:
            - link " Chat" [ref=f4e191] [cursor=pointer]:
              - /url: https://jquery.com/support/
          - listitem [ref=f4e192]:
            - link " Twitter" [ref=f4e193] [cursor=pointer]:
              - /url: https://twitter.com/jqueryui
          - listitem [ref=f4e194]:
            - link " GitHub" [ref=f4e195] [cursor=pointer]:
              - /url: https://github.com/jquery
        - paragraph [ref=f4e196]:
          - text: Copyright 2026
          - link "OpenJS Foundation" [ref=f4e197] [cursor=pointer]:
            - /url: https://openjsf.org/
          - text: and jQuery contributors. All rights reserved. See
          - link "jQuery License" [ref=f4e198] [cursor=pointer]:
            - /url: https://jquery.com/license/
          - text: for more information. The
          - link "OpenJS Foundation" [ref=f4e199] [cursor=pointer]:
            - /url: https://openjsf.org/
          - text: has registered trademarks and uses trademarks. For a list of trademarks of the
          - link "OpenJS Foundation" [ref=f4e200] [cursor=pointer]:
            - /url: https://openjsf.org/
          - text: ", please see our"
          - link "Trademark Policy" [ref=f4e201] [cursor=pointer]:
            - /url: https://trademark-policy.openjsf.org/
          - text: and
          - link "Trademark List" [ref=f4e202] [cursor=pointer]:
            - /url: https://trademark-list.openjsf.org/
          - text: . Trademarks and logos not indicated on the
          - link "list of OpenJS Foundation trademarks" [ref=f4e203] [cursor=pointer]:
            - /url: https://trademark-list.openjsf.org/
          - text: are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them. OpenJS Foundation
          - link "Terms of Use" [ref=f4e204] [cursor=pointer]:
            - /url: https://terms-of-use.openjsf.org/
          - text: ","
          - link "Privacy" [ref=f4e205] [cursor=pointer]:
            - /url: https://privacy-policy.openjsf.org/
          - text: ","
          - link "Code of Conduct" [ref=f4e206] [cursor=pointer]:
            - /url: https://code-of-conduct.openjsf.org/
          - text: ", and"
          - link "Cookie" [ref=f4e207] [cursor=pointer]:
            - /url: https://www.linuxfoundation.org/cookies
          - text: Policies also apply.
        - paragraph [ref=f4e208]:
          - link "Web hosting by Digital Ocean" [ref=f4e209] [cursor=pointer]:
            - /url: https://www.digitalocean.com/?refcode=aa1a2e950a73&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge
          - text: "|"
          - link "CDN by Fastly" [ref=f4e210] [cursor=pointer]:
            - /url: https://www.fastly.com/
          - text: "|"
          - link "Powered by WordPress" [ref=f4e211] [cursor=pointer]:
            - /url: https://wordpress.org/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://qa-practice.netlify.app/register');
  5  |   await expect(page.getByRole('heading', { name: 'Register Form' })).toBeVisible();
  6  |   //await page.getByRole('textbox', { name: 'First Name' }).click();
  7  |   await page.getByRole('textbox', { name: 'First Name' }).fill('Raj');
  8  |  //await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).click();
  9  |   await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).fill('Singh');
  10 |   //await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  11 |   await page.getByRole('textbox', { name: 'Enter phone number' }).fill('042323232');
  12 |   await page.locator('#countries_dropdown_menu').selectOption('Australia');
  13 |   await page.getByRole('textbox', { name: 'Enter email' }).click();
  14 |   await page.locator('#countries_dropdown_menu').selectOption('Republic of Montenegro');
  15 |   await page.getByRole('textbox', { name: 'Enter email' }).fill('aaj@gmail.com');
  16 |   await page.getByRole('textbox', { name: 'Password' }).click();
  17 |   await page.getByRole('textbox', { name: 'Password' }).fill('A1234');
  18 |   await page.getByRole('checkbox', { name: 'I agree with the terms and' }).check();
  19 |   await page.getByRole('button', { name: 'Register' }).click();
  20 |   await expect(page.getByText('The account has been')).toBeVisible();
  21 | });
  22 | 
  23 | 
  24 | test('sample codegen',async({page})=>{
  25 |    await page.goto('https://qa-practice.netlify.app/register')
  26 |    await page.getByRole('textbox', { name: 'First Name' }).fill('Akhil');
  27 |    await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).click();
  28 |    await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).fill('Ra');
  29 |    await page.getByRole('textbox', { name: 'Enter phone number' }).click();
  30 |    await page.getByRole('textbox', { name: 'Enter phone number' }).fill('32323232');
  31 |    await page.locator('#countries_dropdown_menu').selectOption('Australia');
  32 |    await page.getByRole('textbox', { name: 'Enter email' }).click();
  33 |    await page.getByRole('textbox', { name: 'Enter email' }).fill('ak@gmailcom');
  34 |    await page.getByRole('textbox', { name: 'Enter email' }).press('ArrowLeft');
  35 |    await page.getByRole('textbox', { name: 'Enter email' }).press('ArrowLeft');
  36 |    await page.getByRole('textbox', { name: 'Enter email' }).press('ArrowLeft');
  37 |    await page.getByRole('textbox', { name: 'Enter email' }).fill('ak@gmail.com');
  38 |    await page.getByRole('textbox', { name: 'Password' }).click();
  39 |    await page.getByRole('textbox', { name: 'Password' }).fill('Ak2121');
  40 |    await page.getByRole('checkbox', { name: 'I agree with the terms and' }).check();
  41 |    await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
  42 |    await expect(page.locator('#registerBtn')).toContainText('Register');
  43 |    await page.getByRole('button', { name: 'Register' }).click();
  44 |    await expect(page.getByText('The account has been')).toBeVisible();
  45 |   
  46 |   
  47 | })
  48 | 
  49 | 
  50 | // test flight 
  51 | 
  52 | test('test11', async ({ page }) => {
  53 |   await page.goto('https://flights.qedgetech.com/');
  54 |   await page.getByRole('textbox', { name: 'Email ID' }).click();
  55 |   await page.getByRole('textbox', { name: 'Email ID' }).fill('pradeep.prpc@gmail.com');
  56 |   await page.getByRole('textbox', { name: 'Password' }).click();
  57 |   await page.getByRole('textbox', { name: 'Password' }).fill('Password@009');
  58 |   await page.getByRole('button', { name: 'Sign In' }).click();
  59 |   await page.getByRole('textbox', { name: 'Select Date' }).click();
  60 |  // await page.getByRole('link', { name: '30' }).click();
  61 |   await page.getByRole('combobox').first().selectOption('1');
  62 |   await page.getByRole('combobox').nth(1).selectOption('4');
  63 |   await page.waitForTimeout(3000)
  64 | });
  65 | 
  66 | 
  67 | 
  68 | 
  69 | test('test2121', async ({ page }) => {
  70 |   await page.goto('https://jqueryui.com/droppable/');
  71 |   await page.getByRole('link', { name: 'Datepicker' }).click();
  72 |   await page.locator('iframe').contentFrame().locator('#datepicker').click();
  73 |   await page.locator('iframe').contentFrame().getByRole('link', { name: '17' }).click();
  74 |   await page.getByRole('link', { name: 'Menu', exact: true }).click();
  75 |   await page.locator('iframe').contentFrame().getByRole('menuitem', { name: 'Clothing' }).click();
  76 |   await page.locator('iframe').contentFrame().getByRole('menuitem', { name: 'Electronics' }).click();
  77 |   await page.locator('iframe').contentFrame().getByRole('menuitem', { name: 'Utilities' }).click();
  78 |   await page.locator('iframe').contentFrame().getByRole('menuitem', { name: 'Music' }).click();
> 79 |   await page.locator('iframe').contentFrame().getByRole('menuitem', { name: 'Freejazz' }).click();
     |                                                                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  80 |   await page.getByRole('link', { name: 'Draggable' }).click();
  81 |   await page.locator('iframe').contentFrame().locator('#draggable').click();
  82 |   await page.getByRole('link', { name: 'Checkboxradio' }).click();
  83 |   await page.locator('iframe').contentFrame().locator('span').first().click();
  84 |   await page.locator('iframe').contentFrame().locator('fieldset:nth-child(5) > label:nth-child(6) > .ui-checkboxradio-icon').click();
  85 |   await page.locator('iframe').contentFrame().locator('fieldset:nth-child(5) > label:nth-child(4) > .ui-checkboxradio-icon').click();
  86 |   await page.locator('iframe').contentFrame().locator('label:nth-child(3) > .ui-checkboxradio-icon').click();
  87 |   await page.locator('iframe').contentFrame().locator('fieldset:nth-child(7) > label:nth-child(4) > .ui-checkboxradio-icon').click();
  88 | });
```