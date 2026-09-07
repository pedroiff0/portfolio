const { chromium, devices } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const brainDir = '/home/pedro/.gemini/antigravity-cli/brain/b35586d9-82ae-48d0-97ab-99cbbec4a6c1';
  
  try {
    // Desktop
    const contextDesktop = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    const pageDesktop = await contextDesktop.newPage();
    console.log('Loading desktop page...');
    await pageDesktop.goto('http://localhost:8085');
    
    // Wait for intro or skip it
    try {
      const skipBtn = await pageDesktop.locator('.btn-skip-intro');
      await skipBtn.waitFor({ state: 'visible', timeout: 5000 });
      await skipBtn.click();
    } catch(e) {}
    
    await pageDesktop.waitForTimeout(3000); // wait for 3d to load
    await pageDesktop.screenshot({ path: `${brainDir}/desktop_hub.png` });
    console.log('Took desktop hub screenshot');
    
    // Go to contact
    await pageDesktop.goto('http://localhost:8085/#contato');
    await pageDesktop.waitForTimeout(3000);
    await pageDesktop.screenshot({ path: `${brainDir}/desktop_contato.png` });
    console.log('Took desktop contato screenshot');

    // Mobile
    const mobileDevice = devices['Pixel 5'];
    const contextMobile = await browser.newContext({
      ...mobileDevice
    });
    const pageMobile = await contextMobile.newPage();
    console.log('Loading mobile page...');
    await pageMobile.goto('http://localhost:8085');
    
    try {
      const skipBtnMob = await pageMobile.locator('.btn-skip-intro');
      await skipBtnMob.waitFor({ state: 'visible', timeout: 5000 });
      await skipBtnMob.click();
    } catch(e) {}

    await pageMobile.waitForTimeout(3000);
    await pageMobile.screenshot({ path: `${brainDir}/mobile_hub.png` });
    console.log('Took mobile hub screenshot');
    
    await pageMobile.goto('http://localhost:8085/#contato');
    await pageMobile.waitForTimeout(3000);
    await pageMobile.screenshot({ path: `${brainDir}/mobile_contato.png`, fullPage: true });
    console.log('Took mobile contato screenshot');

  } catch(e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();
