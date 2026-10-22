import fs from "node:fs";
import path from "node:path";

// Folders and read the CSS file
const rootDir = path.resolve(".");
const styles = path.join(rootDir, "src", "css", "style.min.prettified.css");
const cssJs = path.join(rootDir, "FixSongsterr", "js", "css.js");

const cssContent = fs.readFileSync(styles, "utf8");

// Inject the CSS content into the css.js file
const jsContent = `// Main style overrides for desktop: center panels, prevent mobile-style dragging, and adjust popups
const css = \`
${cssContent}
\`;`;

fs.writeFileSync(cssJs, jsContent, "utf8");
console.log("Injected styles into css.js");