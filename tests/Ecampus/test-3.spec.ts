import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://web-dev.nonprod.ecampus.com/');
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByRole('link', { name: 'Addresses' }).click();
  await page.getByRole('main').click();
  await page.getByText('Add New Address').click();
  await page.locator('#firstName').click();
  await page.locator('#firstName').fill('hello');
  await page.locator('#lastName').click();
  await page.locator('#lastName').fill('user');
  await page.locator('#address1').click();
  await page.locator('#address1').fill('suhefuhdsov');
  await page.locator('#address2').click();
  await page.locator('#address2').fill('vdfsvilsfudg');
  await page.locator('#city').click();
  await page.locator('#city').fill('ysifisd');
  await page.locator('#state').selectOption('KY');
  await page.locator('#addressForm').getByText('ZIP Code*').click();
  await page.locator('#zip').click();
  await page.locator('#zip').click();
  await page.locator('#zip').fill('22334');
  await page.locator('#country').selectOption('UK');
  await page.getByRole('textbox', { name: '(000) 000-' }).click();
  await page.getByRole('textbox', { name: '(000) 000-' }).fill('(235) 346-45766');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Your information has been').click();
  await page.getByText('hello user').click();
})