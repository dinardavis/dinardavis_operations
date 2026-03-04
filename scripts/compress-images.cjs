/**
 * Compress images in public/imgs for faster loading.
 * Run: npm run compress-images
 * Only overwrites a file when the compressed version is smaller (PNGs are often left unchanged).
 * Commit first if you want a backup.
 */

const path = require('path');
const fs = require('fs');

const IMGS_DIR = path.join(__dirname, '..', 'public', 'imgs');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const PNG_COMPRESSION = 8;

const SKIP_EXTENSIONS = new Set(['.svg', '.gif']);
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function getAllImagePaths(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const ext = path.extname(e.name).toLowerCase();
    if (e.isDirectory()) getAllImagePaths(full, files);
    else if (IMAGE_EXTENSIONS.has(ext) && !SKIP_EXTENSIONS.has(ext)) files.push(full);
  }
  return files;
}

async function compressImage(filePath) {
  const sharp = require('sharp');
  const ext = path.extname(filePath).toLowerCase();
  const before = fs.statSync(filePath).size;

  let pipeline = sharp(filePath);
  const meta = await pipeline.metadata();
  const needsResize = meta.width > MAX_WIDTH;

  if (needsResize) pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
  if (ext === '.png') pipeline = pipeline.png({ compressionLevel: PNG_COMPRESSION });
  else if (ext === '.jpg' || ext === '.jpeg') pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  else if (ext === '.webp') pipeline = pipeline.webp({ quality: JPEG_QUALITY });
  else return null;

  const tmpPath = filePath + '.tmp.' + ext.replace('.', '');
  await pipeline.toFile(tmpPath);
  const after = fs.statSync(tmpPath).size;
  if (after < before) {
    fs.renameSync(tmpPath, filePath);
    return { before, after };
  }
  fs.unlinkSync(tmpPath);
  return null;
}

async function main() {
  const sharp = require('sharp');
  const files = getAllImagePaths(IMGS_DIR);
  if (files.length === 0) {
    console.log('No images found in public/imgs');
    return;
  }

  console.log(`Compressing ${files.length} image(s)…`);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const filePath of files) {
    try {
      const result = await compressImage(filePath);
      if (result) {
        totalBefore += result.before;
        totalAfter += result.after;
        const pct = ((1 - result.after / result.before) * 100).toFixed(1);
        console.log(`  ${path.relative(IMGS_DIR, filePath)}: ${(result.before / 1024).toFixed(0)}KB → ${(result.after / 1024).toFixed(0)}KB (-${pct}%)`);
      }
    } catch (err) {
      console.warn(`  Skip ${filePath}: ${err.message}`);
    }
  }

  if (totalBefore > 0) {
    const saved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
    console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (-${saved}%)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
