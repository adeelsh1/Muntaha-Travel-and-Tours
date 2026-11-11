const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const logoPath = path.resolve('src/assets/images/muntaha-logo.png');
  
  // 1. Generate 32x32, 16x16, 64x64, 180x180 PNGs with subtle padding
  await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon-32x32.png');
    
  await sharp(logoPath)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon-16x16.png');

  await sharp(logoPath)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon.png');

  await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 250, g: 247, b: 242, alpha: 1 } })
    .png()
    .toFile('public/apple-touch-icon.png');

  const pngBuffer = await sharp(logoPath)
    .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
    
  const b64 = pngBuffer.toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <image href="data:image/png;base64,${b64}" width="128" height="128" preserveAspectRatio="xMidYMid meet" />
</svg>`;
  fs.writeFileSync('public/favicon.svg', svg, 'utf8');

  console.log('SUCCESS: All favicons generated from official Muntaha logo!');
}

run().catch(console.error);

