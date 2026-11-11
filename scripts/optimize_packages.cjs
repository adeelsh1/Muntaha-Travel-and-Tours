const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizePackages() {
  const imgDir = path.resolve('src/assets/images');
  
  const files = [
    { name: 'pkg-baku', width: 480, height: 320 },
    { name: 'pkg-iraq', width: 480, height: 320 },
    { name: 'pkg-madinah', width: 480, height: 320 }
  ];

  for (const f of files) {
    const inputPath = path.join(imgDir, `${f.name}.jpg`);
    const outputPath = path.join(imgDir, `${f.name}.webp`);

    const info = await sharp(inputPath)
      .resize(f.width, f.height, { fit: 'cover', position: 'center' })
      .webp({ quality: 82, effort: 6 })
      .toFile(outputPath);

    console.log(`Optimized ${f.name}.webp -> ${info.size} bytes (${(info.size / 1024).toFixed(1)} KB)`);
  }
}

optimizePackages().catch(console.error);
