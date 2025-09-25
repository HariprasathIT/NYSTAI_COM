const fs = require("fs");
const path = require("path");

// Root folder of src
const srcRoot = path.resolve("src");

// Walk all files
function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

// Replace imports
function fixImports(filePath) {
  let data = fs.readFileSync(filePath, "utf8");
  let changed = false;

  // Replace relative imports from src → public
  data = data.replace(
    /(['"])(\.\/|\.\.\/)+NYSTAI-WEBSITE\/IMAGES-VIDEOS\/([^'"]+)\.(png|jpe?g|webp)\1/gi,
    (match, quote, rel, filePathInside, ext) => {
      changed = true;
      // always replace extension with .webp
      return `${quote}/IMAGES-VIDEOS/${filePathInside}.webp${quote}`;
    }
  );

  if (changed) {
    fs.writeFileSync(filePath, data, "utf8");
    console.log("✅ Fixed imports in:", filePath);
  }
}

// Run for all JS/JSX/TS/TSX files
walk(srcRoot, file => {
  if (/\.(js|jsx|ts|tsx)$/.test(file)) {
    fixImports(file);
  }
});
