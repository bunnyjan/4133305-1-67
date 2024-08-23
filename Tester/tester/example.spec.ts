import { test, expect } from '@playwright/test';
import path from 'path';

const authFile = path.resolve(__dirname,'../playwright/.auth/user.json');

test('Test Login', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByRole('button',{name: 'Google logo เข้าสู่ระบบด้วย'}).click();
  await page.getByLabel('Email or phone').fill('650112418074@bru.ac.th');
  await page.getByRole('button',{name: 'Next', exact: true}).click();
  await page.getByLabel('Enter your password').fill('bunny0201');
  await page.getByRole('button',{name: 'Next'}).click();
  await page.getByRole('button',{name: 'ดำเนินการต่อ'}).click();

  await page.context().storageState({ path: authFile });


  await page.getByRole('button',{name: 'Open user menu User Profile'}).click();
  await page.getByRole('button',{name: 'ออกจากระบบ'}).click();
 
  
  
  await expect(page).toHaveTitle(/Playwright/);
});


test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.locator('section').click();
  await page.locator('section').click();
  await page.getByRole('button', { name: 'Google Logo เข้าสู่ระบบด้วย' }).click();
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('Email / ชื่อผู้ใช้').click();
  await page.getByPlaceholder('Email / ชื่อผู้ใช้').fill('650112418074@bru.ac.th');
  await page.getByPlaceholder('รหัสผ่าน').click();
  await page.getByPlaceholder('รหัสผ่าน').fill('bububunny');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ', exact: true }).click();
  await page.locator('section').click({
    button: 'right'
  });
  await page.locator('section').click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'เข้าสู่ระบบ', exact: true }).click();
  await page.getByRole('button', { name: 'Google Logo เข้าสู่ระบบด้วย' }).click();
  await page.locator('div').filter({ hasText: 'Sign in with GoogleSign into' }).nth(1).click();
  await page.getByLabel('Email or phone').click();
  await page.goto('http://localhost:3000/login');
  await page.getByText('เข้าสู่ระบบเข้าสู่ระบบลืมรหัสผ่านหรือเข้าสู่ระบบด้วย Google').click();
  await page.getByRole('button', { name: 'Google Logo เข้าสู่ระบบด้วย' }).click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('650112418074@');
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('650112418074@bru.ac.th');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByLabel('Enter your password').fill('bububunny');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').fill('bunny0201');
  await page.getByLabel('Enter your password').press('Enter');
  await page.locator('div').filter({ hasText: 'ลงชื่อเข้าใช้ด้วย Googleลงชื่อเข้าใช้งานใน Next Auth Project650112418074@bru.ac' }).first().click();
  await page.getByRole('button', { name: 'ดำเนินการต่อ' }).click();
  await page.getByRole('button', { name: 'Open user menu User Profile' }).click();
  await page.getByLabel('Open user menu').click();
  await page.getByRole('main').click();
  await page.getByRole('main').click();
  await page.getByRole('main').click();
});

