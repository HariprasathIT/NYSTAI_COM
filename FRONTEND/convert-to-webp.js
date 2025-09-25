const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Correct root folder (inside your project "public/IMAGES-VIDEOS")
const root = path.join(__dirname, "public", "IMAGES-VIDEOS");

// Clean filenames (SEO & URL safe)
function cleanFileName(name) {
  return name
    .replace(/\s+/g, "-")        // spaces → dashes
    .replace(/[()]/g, "")        // remove ( )
    .replace(/-+/g, "-")         // multiple dashes → single
    .toLowerCase();              // make lowercase
}

function convertFolder(folderPath) {
  fs.readdirSync(folderPath).forEach(file => {
    const fullPath = path.join(folderPath, file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      convertFolder(fullPath); // recursion for subfolders
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      // Skip already webp
      if (file.endsWith(".webp")) return;

      // Clean filename
      const dir = path.dirname(fullPath);
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const cleanName = cleanFileName(base) + ".webp";

      const output = path.join(dir, cleanName);

      console.log(`Converting: ${fullPath} → ${output}`);

      sharp(fullPath)
        .webp({ quality: 70 })
        .toFile(output)
        .then(() => {
          console.log(`✅ Done: ${output}`);
          // Delete the original jpg/png
          fs.unlinkSync(fullPath);
          console.log(`🗑️ Removed: ${fullPath}`);
        })
        .catch(err => console.error("❌ Error:", err));
    }
  });
}

// Start conversion
convertFolder(root);
