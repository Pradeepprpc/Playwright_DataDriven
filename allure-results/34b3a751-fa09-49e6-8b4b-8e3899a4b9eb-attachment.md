# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Codegen.spec.ts >> test
- Location: tests\Codegen.spec.ts:3:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByTitle('Next')

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - banner [ref=f1e2]:
    - banner [ref=f1e3]:
      - generic [ref=f1e4]:
        - link [ref=f1e6] [cursor=pointer]:
          - /url: https://flights.qedgetech.com/user/dashboard.html
          - img "Flight Reservation" [ref=f1e7]
        - list [ref=f1e10]:
          - listitem [ref=f1e11]:
            - generic [ref=f1e12]: 
            - text: Welcome
            - link "Pradeep narendra" [ref=f1e13] [cursor=pointer]:
              - /url: https://flights.qedgetech.com/user/pradeep-narendra.html
          - listitem [ref=f1e14]:
            - generic [ref=f1e15]:
              - link "" [ref=f1e16] [cursor=pointer]:
                - /url: "#"
              - text:    
  - generic [ref=f1e20]:
    - heading "User Dashboard" [level=2] [ref=f1e22]
    - generic [ref=f1e24]:
      - generic [ref=f1e26]:
        - generic [ref=f1e29]: Pradeep Narendra
        - list [ref=f1e32]:
          - listitem [ref=f1e33]:
            - link " Flight Reservation" [ref=f1e34] [cursor=pointer]:
              - /url: https://flights.qedgetech.com/user/pradeep-narendra.html
              - generic [ref=f1e35]: 
              - text: Flight Reservation
          - listitem [ref=f1e36]:
            - link " Flight Bookings" [ref=f1e37] [cursor=pointer]:
              - /url: https://flights.qedgetech.com/user/flight-bookings.html
              - generic [ref=f1e38]: 
              - text: Flight Bookings
      - generic [ref=f1e39]:
        - generic [ref=f1e41]:
          - heading "Book Flight " [level=3] [ref=f1e42]:
            - generic [ref=f1e43]:
              - text: Book Flight
              - generic [ref=f1e44]: 
          - generic [ref=f1e45]:
            - generic [ref=f1e46]:
              - generic [ref=f1e47]: Date of Flight
              - textbox "Select Date" [active] [ref=f1e48]
            - generic [ref=f1e49]:
              - generic [ref=f1e50]: Fly From
              - combobox [ref=f1e51]:
                - option "Fly From" [selected]
                - option "Chennai"
                - option "Hyderabad"
                - option "Kolkatha"
            - generic [ref=f1e52]:
              - generic [ref=f1e53]: Fly To
              - combobox [ref=f1e54]:
                - option "Fly To" [selected]
                - option "Chennai"
                - option "Hyderabad"
                - option "Kolkatha"
            - button " Search Flights" [ref=f1e56]:
              - generic [ref=f1e57]: 
              - text: Search Flights
            - generic [ref=f1e60]:
              - heading "Order Information" [level=4] [ref=f1e61]
              - generic [ref=f1e62]:
                - generic [ref=f1e63]:
                  - generic [ref=f1e64]: Flight No
                  - textbox "Flight No" [ref=f1e65]
                - generic [ref=f1e66]:
                  - generic [ref=f1e67]: Departure Time
                  - textbox "Departure Time" [ref=f1e68]
                - generic [ref=f1e69]:
                  - generic [ref=f1e70]: Arrival Time
                  - textbox "Arrival Time" [ref=f1e71]
                - generic [ref=f1e72]:
                  - generic [ref=f1e73]: Airline
                  - textbox "Airline" [ref=f1e74]
              - generic [ref=f1e75]:
                - generic [ref=f1e76]:
                  - generic [ref=f1e77]: Name
                  - textbox "Name" [ref=f1e78]
                - generic [ref=f1e79]:
                  - generic [ref=f1e80]: Class
                  - generic [ref=f1e81]:
                    - generic [ref=f1e82]:
                      - radio [ref=f1e83]
                      - text: First Class
                    - generic [ref=f1e84]:
                      - radio [ref=f1e85]
                      - text: Business
                    - generic [ref=f1e86]:
                      - radio [checked] [ref=f1e87]
                      - text: Economy
              - generic [ref=f1e88]:
                - generic [ref=f1e89]:
                  - generic [ref=f1e90]: Tickets
                  - spinbutton "Tickets" [ref=f1e91]: "1"
                - generic [ref=f1e92]:
                  - generic [ref=f1e93]: Price
                  - spinbutton "Price" [ref=f1e94]
                - generic [ref=f1e95]:
                  - generic [ref=f1e96]: Total
                  - spinbutton "Total" [ref=f1e97]
              - generic [ref=f1e99]:
                - button "Insert Order" [disabled]
        - text: 
  - contentinfo [ref=f1e101]:
    - generic [ref=f1e104]:
      - text: © 2026
      - link "Flight Reservation" [ref=f1e105] [cursor=pointer]:
        - /url: https://flights.qedgetech.com
      - text: . All Rights Reserved.
  - text: 
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://flights.qedgetech.com/login.html');
  5  |   await page.getByRole('textbox', { name: 'Email ID' }).click();
  6  |   await page.getByRole('textbox', { name: 'Email ID' }).fill('pradeep.prpc@gmail.com');
  7  |   await page.getByRole('textbox', { name: 'Password' }).click();
  8  |   await page.getByRole('textbox', { name: 'Password' }).fill('Password@009');
  9  |   await page.getByRole('button', { name: 'Sign In' }).click();
  10 |   await page.getByRole('textbox', { name: 'Select Date' }).click();
> 11 |   await page.getByTitle('Next').click();
     |                                 ^ Error: locator.click: Test timeout of 60000ms exceeded.
  12 |   await page.getByRole('link', { name: '11' }).click();
  13 |   await page.getByRole('combobox').first().selectOption('2');
  14 |   await page.getByRole('combobox').nth(1).selectOption('1');
  15 |   await page.getByRole('button', { name: ' Search Flights' }).click();
  16 |   await expect(page.getByText('Sorry No Flights Found')).toBeVisible();
  17 | 
  18 | });
```