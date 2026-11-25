const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const outDir = 'C:/Users/Usuario/.gemini/antigravity/brain/22c5d6f4-36ce-4618-8bad-da342f6f5f02/verification_kintsugi';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: 'C:/Users/Usuario/AppData/Local/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('file:///C:/Users/Usuario/Desktop/promoci%C3%B3n/index.html', { waitUntil: 'networkidle0' });
  await sleep(1500);
  await page.screenshot({ path: path.join(outDir, '01_portada_fiesta.png') });

  await page.click('#btnAbrirSobre');
  await sleep(4500);
  await page.screenshot({ path: path.join(outDir, '02_hero_kintsugi.png') });

  await page.evaluate(() => window.scrollBy(0, 900));
  await sleep(800);
  await page.screenshot({ path: path.join(outDir, '03_player_countdown.png') });

  await page.evaluate(() => window.scrollBy(0, 900));
  await sleep(800);
  await page.screenshot({ path: path.join(outDir, '04_fecha_hora.png') });

  await page.evaluate(() => window.scrollBy(0, 900));
  await sleep(800);
  await page.screenshot({ path: path.join(outDir, '05_rsvp_footer.png') });

  try {
    await page.evaluate(() => document.getElementById('btnAbrirRsvp').click());
    await sleep(1000);
    await page.screenshot({ path: path.join(outDir, '06_modal_fiesta.png') });
  } catch(e) { console.error('Modal error:', e.message); }

  await browser.close();
  console.log('Done!');
})();
