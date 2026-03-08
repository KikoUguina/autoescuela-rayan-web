import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname } from "path";

const GALLERY_DIR = "public/galeria";
const MEDIA_DIR = "public/media/png";
const MAX_WIDTH = 1920;
const QUALITY = 78;

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".webp", ".jpg", ".jpeg", ".png"].includes(ext)) return null;

  const before = (await stat(filePath)).size;
  const tempPath = filePath + ".tmp";

  try {
    const pipeline = sharp(filePath).resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });

    if (ext === ".webp") {
      await pipeline.webp({ quality: QUALITY }).toFile(tempPath);
    } else if (ext === ".png") {
      await pipeline.png({ quality: QUALITY, compressionLevel: 9 }).toFile(tempPath);
    } else {
      await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toFile(tempPath);
    }

    const after = (await stat(tempPath)).size;

    // Only replace if we actually saved space
    if (after < before) {
      await rename(tempPath, filePath);
      const saved = ((1 - after / before) * 100).toFixed(1);
      const beforeMB = (before / 1024 / 1024).toFixed(2);
      const afterMB = (after / 1024 / 1024).toFixed(2);
      console.log(`✓ ${filePath} — ${beforeMB}MB → ${afterMB}MB (${saved}% saved)`);
      return { before, after };
    } else {
      // Compressed is larger, keep original
      const { unlink } = await import("fs/promises");
      await unlink(tempPath);
      console.log(`- ${filePath} — already optimized, skipped`);
      return { before, after: before };
    }
  } catch (err) {
    console.error(`✗ ${filePath} — ${err.message}`);
    try {
      const { unlink } = await import("fs/promises");
      await unlink(tempPath);
    } catch {}
    return null;
  }
}

async function processDirectory(dir) {
  let totalBefore = 0;
  let totalAfter = 0;

  try {
    const files = await readdir(dir);
    for (const file of files) {
      const filePath = join(dir, file);
      const fileStat = await stat(filePath);

      if (fileStat.isDirectory()) continue;

      const result = await compressImage(filePath);
      if (result) {
        totalBefore += result.before;
        totalAfter += result.after;
      }
    }
  } catch (err) {
    console.error(`Error reading ${dir}: ${err.message}`);
  }

  return { totalBefore, totalAfter };
}

async function main() {
  console.log("Compressing gallery images...\n");
  const gallery = await processDirectory(GALLERY_DIR);

  console.log("\nCompressing media images...\n");
  const media = await processDirectory(MEDIA_DIR);

  const totalBefore = gallery.totalBefore + media.totalBefore;
  const totalAfter = gallery.totalAfter + media.totalAfter;

  console.log("\n========================================");
  console.log(
    `Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB`
  );
  console.log(`Saved: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
  console.log("========================================");
}

main();
