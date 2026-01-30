import { test, expect } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' })
    .fill('mama gedhara yanavaa.');

  await expect(
    page.getByText('මම ගෙදර යනවා.')
  ).toBeVisible();
});


test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api kaeema kanavaa saha passe nidhaa gannavaa ');
  await page.getByText('අපි කෑම කනවා සහ පස්සෙ නිදා ගන්නවා').click();
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oya enavanam mama balan innavaa.');
  await page.getByText('ඔය එනවනම් මම බලන් ඉන්නවා.').click();
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa kohomadha inne?');
  await page.getByText('ඔයා කොහොමද ඉන්නේ?').click();
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('issarahata yanna.');
  await page.getByText('ඉස්සරහට යන්න.').click();
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api heta yamu.');
  await page.getByText('අපි හෙට යමු.').click();
});

test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api heta yanne naehae.');
  await page.getByText('අපි හෙට යන්නෙ නැහැ.').click();
});


test('Pos_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata kammaeLi');
  await page.getByText('මට කම්මැළි').click();
});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama paasalee inne');
  await page.getByText('මම පාසලේ ඉන්නේ').click();
});


test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karunaakaralaa mata udhavu karanna puluvandha?');
  await page.getByText('කරුනාකරලා මට උදවු කරන්න පුලුවන්ද?').click();
});



test('Pos_Fun_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ehema karapan.');
  await page.getByText('එහෙම කරපන්.').click();
});


test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ela machan, adha supiri!');
  await page.getByText('එල මචන්, අද සුපිරි!').click();
});

test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata oona poddak inna.');
  await page.getByText('මට ඕන පොඩ්ඩක් ඉන්න').click();
});


test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata paan kanna oonee.');
  await page.getByText('මට පාන් කන්න ඕනේ').click();
});

test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari hari ivara velaa');
  await page.getByText('හරි හරි ඉවර වෙලා').click();
});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama iiyee gedhara giyaa.');
  await page.getByText('මම ඊයේ ගෙදර ගියා.').click();
});


test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama heta enavoo');
  await page.getByText('මම හෙට එනවෝ').click();
});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaalaa enavadha?');
  await page.getByText('ඔයාලා එනවද?').click();
});

test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('eyaalaa gedhara yanavaa.');
  await page.getByText('එයාලා ගෙදර යනවා.').click();
});

test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha Zoom meeting ekak thiyenavaa.');
  await page.getByText('අද Zoom meeting එකක් තියෙනවා.').click();
});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Documents tika email ekak evanna.');
  await page.getByText('Documents ටික email එකක් එවන්න.').click();
});

test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata mudhal 2500 gevanna thiyenavaa.');
  await page.getByText('මට මුදල් 2500 ගෙවන්න තියෙනවා.').click();
});


test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('meeting eka 7.30 AM patan gannavaa.');
  await page.getByText('meeting එක 7.30 AM පටන් ගන්නවා.').click();
});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('harima dhukayi');
  await page.getByText('හරිම දුකයි').click();
});


test('neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedharayanavaa');
  await page.getByText('මම ගෙදර යනවා').click();
});


test('neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('elaa machn adha supiriii');
  await page.getByText('එලා මච්න් අද සුපිරීඉ').click();
});

test('neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('asdjkl qweoiu zxCmN');
  await page.getByText('අස්ඩ්ජ්ක්ල් qwඑඔඉඋ zxCම්න්').click();
});


test('neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('E110!!!F1');
  await page.getByText('එ110!!!ෆ්1').click();
});

test('neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('');
  await page.getByText('').click();
});

test('neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('நான் வீட்டுக்கு போகிறேன்');
  await page.getByText('நான் வீட்டுக்கு போகிறேன').click();
});

test('neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('I am going home');
  await page.getByText('ඉ am goinghome').click();
});

test('neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama 😊😊 gedhara 😎');
  await page.getByText('mama 😊😊 gedhara😎').click();
});

test('neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mmmaaa geddrrraa yannvvaa');
  await page.getByText('ම්ම්මාඅ ගෙඩ්ඩ්‍රර්‍රා යන්න්ව්වා').click();
});

test('neg_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama qwerty asdf ghjk');
  await page.getByText('මම qwerty අස්ඩ්ෆ් ග්හ්ජ්ක්').click();
});


