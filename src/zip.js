import path from "node:path";
import fs from "node:fs";
import archiver from "archiver";

// Paths to both the source directories and the resulting ZIP files for Chrome and Firefox extensions
const rootDir = path.resolve(".");
const chromeSourceDir = path.join(rootDir, "FixSongsterr");
const firefoxSourceDir = path.join(rootDir, "FixSongsterrFirefox");
const chromeZipPath = path.join(rootDir, "FixSongsterr.zip");
const firefoxZipPath = path.join(rootDir, "FixSongsterrFirefox.zip");

// Function to create a single ZIP file
const createZip = (sourceDir, zipPath) => {
  return new Promise((resolve, reject) => {
    // Remove existing ZIP file
    if (fs.existsSync(zipPath)) {
      fs.unlinkSync(zipPath);
    }

    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => {
      resolve();
    });

    archive.on("error", (err) => {
      reject(err);
    });

    archive.pipe(output);
    archive.directory(sourceDir, false);
    archive.finalize();
  });
};

// Function to create both ZIP files
const createZips = async () => {
  try {
    await createZip(chromeSourceDir, chromeZipPath);
    await createZip(firefoxSourceDir, firefoxZipPath);
    console.log("Created Zips");
  } catch (err) {
    console.error("Error creating zips:", err);
    process.exit(1);
  }
};

createZips();