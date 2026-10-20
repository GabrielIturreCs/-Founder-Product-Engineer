// Genera los PDF de la guía a partir de los HTML de esta carpeta.
// Uso: node docs/guia/render.cjs   (necesita Playwright y Google Chrome instalados)
const path = require('path');
let pw;
try { pw = require('playwright'); } catch { pw = require(path.join(process.env.APPDATA || '', 'npm/node_modules/@playwright/cli/node_modules/playwright')); }
const out = path.join(__dirname, '../../public/guia');
const files = [
  ['guia-es.html', 'automatizar-tu-negocio-con-ia-en-7-dias.pdf'],
  ['guia-en.html', 'automate-your-business-with-ai-in-7-days.pdf'],
];
(async () => {
  require('fs').mkdirSync(out, { recursive: true });
  const b = await pw.chromium.launch({ channel: 'chrome' });
  const p = await b.newPage();
  for (const [src, dst] of files) {
    const file = path.join(__dirname, src);
    if (!require('fs').existsSync(file)) continue;
    await p.goto(require('url').pathToFileURL(file).href);
    await p.pdf({ path: path.join(out, dst), format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('ok', dst);
  }
  await b.close();
})();
