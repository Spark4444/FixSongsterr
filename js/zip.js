import path from "node:path";
import { execFileSync } from "node:child_process";

// Paths to both the source directories and the resulting ZIP files for Chrome and Firefox extensions
const rootDir = path.resolve(".");
const chromeSourceDir = path.join(rootDir, "FixSongsterr");
const firefoxSourceDir = path.join(rootDir, "FixSongsterrFirefox");
const chromeZipPath = path.join(rootDir, "FixSongsterr.zip");
const firefoxZipPath = path.join(rootDir, "FixSongsterrFirefox.zip");

// Function to escape single quotes in PowerShell strings
const pwshEscape = (value) => value.replace(/'/g, "''");

// Function to run a PowerShell script with -NoProfile and Bypass execution policy
const runPowerShell = (script) => {
  execFileSync(
    "powershell",
    ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", script],
    { stdio: "inherit" },
  );
};

// Remove existing ZIP files and create new ones for both Chrome and Firefox extensions
runPowerShell(`
  Remove-Item -LiteralPath '${pwshEscape(chromeZipPath)}' -Force -ErrorAction SilentlyContinue
  Remove-Item -LiteralPath '${pwshEscape(firefoxZipPath)}' -Force -ErrorAction SilentlyContinue
    cd '${pwshEscape(chromeSourceDir)}'; tar -a -cf '${pwshEscape(chromeZipPath)}' *
    cd '${pwshEscape(firefoxSourceDir)}'; tar -a -cf '${pwshEscape(firefoxZipPath)}' *
`);

console.log("Created Zips");