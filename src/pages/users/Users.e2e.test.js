import puppeteer from 'puppeteer'

it('/users 路由e2e测试', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000')
  await page.click('.ant-menu-item:nth-of-type(2)')
  await page.screenshot({path: 'screenshot/01.跳转到用户列表.png'})
  await page.click('.ant-btn-primary');
  await page.screenshot({path: 'screenshot/02.新增用户.png'})
  await page.click('.ant-modal-close')
  await page.click('.ant-pagination-item-3')
  await page.waitFor(1000)
  await page.screenshot({path: 'screenshot/03.跳转到第三页.png'})
  browser.close();
});