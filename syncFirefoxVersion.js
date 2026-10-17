import fs from "node:fs";
import path from "node:path";

// Original source directory and manifest paths for Chrome extension
const sourceDir = path.resolve("FixSongsterr", "js");
const targetDir = path.resolve("FixSongsterrFirefox", "js");
const sourceManifestPath = path.resolve("FixSongsterr", "manifest.json");
const targetManifestPath = path.resolve("FixSongsterrFirefox", "manifest.json");

// Remove the existing Firefox JS folder and copy over the Chrome JS folder
fs.rmSync(targetDir, { recursive: true, force: true });
fs.mkdirSync(targetDir, { recursive: true });
fs.cpSync(sourceDir, targetDir, { recursive: true });

// Read the manifest files for both Chrome and Firefox extensions
const sourceManifest = JSON.parse(fs.readFileSync(sourceManifestPath, "utf8"));
const targetManifest = JSON.parse(fs.readFileSync(targetManifestPath, "utf8"));

// Update the Firefox manifest version and content script JS entries to match the Chrome manifest
targetManifest.version = sourceManifest.version;
targetManifest.content_scripts = targetManifest.content_scripts || [];

// Ensure the target manifest has a content_scripts array to avoid undefined errors
sourceManifest.content_scripts.forEach((sourceScript, index) => {
  targetManifest.content_scripts[index] = targetManifest.content_scripts[index] || {};
  targetManifest.content_scripts[index].js = [...sourceScript.js];
});

fs.writeFileSync(targetManifestPath, `${JSON.stringify(targetManifest, null, 2)}\n`);

console.log("Synced up");