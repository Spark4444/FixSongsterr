import path from "node:path";
import os from "node:os";
import { execSync } from "node:child_process";
import fs from "node:fs";

// Paths to both the source directories and the resulting ZIP files for Chrome and Firefox extensions
const rootDir = path.resolve(".");
const chromeSourceDir = path.join(rootDir, "FixSongsterr");
const firefoxSourceDir = path.join(rootDir, "FixSongsterrFirefox");
const chromeZipPath = path.join(rootDir, "FixSongsterr.zip");
const firefoxZipPath = path.join(rootDir, "FixSongsterrFirefox.zip");

// Detect platform
const isWindows = os.platform() === "win32";

// Function to create ZIP files
const createZips = () => {
  // Remove existing ZIP files
  if (fs.existsSync(chromeZipPath)) {
    fs.unlinkSync(chromeZipPath);
  }
  if (fs.existsSync(firefoxZipPath)) {
    fs.unlinkSync(firefoxZipPath);
  }

  if (isWindows) {
    // Windows: use PowerShell with tar
    const pwshEscape = (value) => value.replace(/'/g, "''");
    execSync(
      `powershell -NoProfile -ExecutionPolicy Bypass -Command "cd '${pwshEscape(chromeSourceDir)}'; tar -a -cf '${pwshEscape(chromeZipPath)}' *; cd '${pwshEscape(firefoxSourceDir)}'; tar -a -cf '${pwshEscape(firefoxZipPath)}' *"`,
      { stdio: "inherit" },
    );
  } else {
    // macOS/Linux: use zip command
    execSync(`cd "${chromeSourceDir}" && zip -r "${chromeZipPath}" .`, {
      stdio: "inherit",
    });
    execSync(`cd "${firefoxSourceDir}" && zip -r "${firefoxZipPath}" .`, {
      stdio: "inherit",
    });
  }
};

createZips();
console.log("Created Zips");