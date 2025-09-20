const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "src");

function replaceImgTags(filePath) {
  let data = fs.readFileSync(filePath, "utf8");

  // 1️⃣ Replace <img ... /> with <AsyncImage ... /> and fix class -> className
  let newData = data.replace(/<img([\s\S]*?)\/?>/gi, (match, attrs) => {
    let cleanedAttrs = attrs
      .replace(/\s+/g, " ")               // remove extra whitespace/newlines
      .replace(/\bclass=/gi, "className=") // fix React className
      .trim();
    const space = cleanedAttrs ? " " : "";
    return `<AsyncImage${space}${cleanedAttrs} />`;
  });

  // 2️⃣ Fix malformed AsyncImage tags (extra spaces, newlines, class -> className)
  newData = newData.replace(/<AsyncImage([\s\S]*?)\/>/gi, (match, attrs) => {
    const cleanedAttrs = attrs
      .replace(/\s+/g, " ")
      .replace(/\bclass=/gi, "className=")
      .trim();
    const space = cleanedAttrs ? " " : "";
    return `<AsyncImage${space}${cleanedAttrs} />`;
  });

  // 3️⃣ Fix import: default export
  if (newData.includes("<AsyncImage")) {
    const importRegex = /import\s+AsyncImage\s+from\s+['"].*['"]/;
    const namedImportRegex = /import\s+{?\s*AsyncImage\s*}?\s+from\s+['"].*['"]/;
    if (!importRegex.test(newData)) {
      // Remove any previous incorrect named import
      newData = newData.replace(namedImportRegex, "");
      // Add correct default import at top
      newData = `import AsyncImage from "react-async-image";\n${newData}`;
    }
  }

  if (newData !== data) {
    fs.writeFileSync(filePath, newData, "utf8");
    console.log(`✅ Fixed: ${filePath}`);
  } else {
    console.log(`ℹ️ No changes in: ${filePath}`);
  }
}

function scanDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      scanDirectory(filePath);
    } else if (filePath.endsWith(".js") || filePath.endsWith(".jsx")) {
      replaceImgTags(filePath);
    }
  });
}

// Start scanning
scanDirectory(directoryPath);
