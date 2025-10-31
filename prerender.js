/*
Prerender script using Puppeteer:
- Install puppeteer first: npm i -D puppeteer@latest
- Run: npm run build:prerender
This script will:
1) Serve the `dist/` folder on localhost:5000 (simple static server using `http-server` if available)
   If http-server is not installed globally, install: npm i -D http-server
2) Launch Puppeteer, visit routes defined in `routes` array, and save rendered HTML snapshots into dist/
   (e.g., index.html, intro.html)
3) These snapshots are crawler-friendly static HTML files for each route.
*/

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const puppeteer = require('puppeteer');

async function serveDist() {
  return new Promise((resolve, reject) => {
    // try to use npx http-server to serve dist at 5000
    const cmd = 'npx http-server dist -p 5000 -c-1';
    const proc = child_process.exec(cmd, {cwd: process.cwd()}, (err, stdout, stderr) => {
      if (err) {
        console.error('http-server failed to start via npx. Make sure http-server is installed.');
        reject(err);
      }
    });
    // give server 800ms to start
    setTimeout(() => resolve(proc), 800);
  });
}

async function prerender() {
  const routes = ['/', '/intro.html']; // add routes you need (e.g., '/introduce', etc.)
  console.log('Starting prerender...');
  const serverProc = await serveDist();
  const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  for (const route of routes) {
    const url = 'http://127.0.0.1:5000' + route;
    console.log('Rendering', url);
    await page.goto(url, {waitUntil: 'networkidle2', timeout: 60000});
    // Wait a bit for client JS to render
    await page.waitForTimeout(500);
    const html = await page.content();
    // Determine output file name
    let outName = 'index.html';
    if (route !== '/') {
      outName = route.replace(/^\//, '');
      if (!outName.endsWith('.html')) outName += '.html';
    }
    const outPath = path.join(process.cwd(), 'dist', outName);
    fs.writeFileSync(outPath, html, 'utf-8');
    console.log('Saved', outPath);
  }
  await browser.close();
  // kill server
  if (serverProc && serverProc.kill) serverProc.kill();
  console.log('Prerender complete.');
}

prerender().catch(err => { console.error(err); process.exit(1); });