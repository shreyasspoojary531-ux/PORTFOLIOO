/**
 * compress-assets.mjs
 * Compresses all JPG/PNG assets in public/assets/ using sharp.
 * JPGs → quality 78, progressive, mozjpeg
 * PNGs → quality 75-90, palette reduction
 * Run: node scripts/compress-assets.mjs
 */

import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import { join, extname, basename } from 'path';

const ASSETS_DIR = new URL('../public/assets/', import.meta.url).pathname;
const JPEG_QUALITY = 78;
const PNG_QUALITY = { quality: 80, compressionLevel: 9 };

const files = readdirSync(ASSETS_DIR).filter(f => {
  const ext = extname(f).toLowerCase();
  return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
});

let totalSaved = 0;

for (const file of files) {
  const fullPath = join(ASSETS_DIR, file);
  const ext = extname(file).toLowerCase();
  const tmpPath = fullPath + '.tmp';
  const before = statSync(fullPath).size;

  try {
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(fullPath)
        .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true })
        .toFile(tmpPath);
    } else if (ext === '.png') {
      await sharp(fullPath)
        .png({ ...PNG_QUALITY, adaptiveFiltering: true })
        .toFile(tmpPath);
    }

    const after = statSync(tmpPath).size;
    const savedKb = ((before - after) / 1024).toFixed(1);
    const pct = (((before - after) / before) * 100).toFixed(1);
    totalSaved += before - after;

    renameSync(tmpPath, fullPath);
    console.log(`✓ ${file.padEnd(40)} ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${savedKb}KB / -${pct}%)`);
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log(`\n✅ Total saved: ${(totalSaved / 1024).toFixed(0)} KB`);
