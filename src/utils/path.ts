import fs from 'fs';
import path from 'path';

export function findRootDirectory() {
  let currentDir = __dirname;

  while (true) {
    // Check if we've reached the root directory
    if (path.dirname(currentDir) === currentDir) {
      console.error('❌ Project root not found.');
      process.exit(1); // Exit with error
    }

    // Check for a marker file or directory that signifies the project root
    if (fs.existsSync(path.join(currentDir, 'package.json'))) {
      return path.resolve(currentDir);
    }

    // Move up one directory level
    currentDir = path.dirname(currentDir);
  }
}
