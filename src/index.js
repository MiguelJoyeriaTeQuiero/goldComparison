const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://joyeriascanarias.com/');
    await page.locator('#k4').screenshot({path: 'screenshots/joyeriasCanariasGold18KPrice.png'});
    await page.locator('#k2').screenshot({path: 'screenshots/joyeriasCanariasGold22KPrice.png'});
    await browser.close()
})() 
