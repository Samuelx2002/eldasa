const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function convertToWebp(filename) {
  const ext = path.extname(filename);
  const basename = path.basename(filename, ext);
  const inputPath = path.join(publicDir, filename);
  const outputPath = path.join(publicDir, `${basename}.webp`);
  
  if (fs.existsSync(inputPath)) {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Converted ${filename} to ${basename}.webp`);
  }
}

async function run() {
  await convertToWebp('hero-eldasa.jpg');
  await convertToWebp('logo-eldasa.jpg');
  await convertToWebp('hero.png');
}

run().catch(console.error);
