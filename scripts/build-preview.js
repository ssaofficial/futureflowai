const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const head = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Opt-in page preview — Future Flow</title>
</head>
<body>
`;
const tail = `
</body>
</html>
`;

const body = fs.readFileSync(path.join(root, "optinpage"), "utf8");
fs.writeFileSync(
  path.join(root, "optinpage-preview.html"),
  head + body + tail,
  "utf8"
);
console.log("Built optinpage-preview.html");
