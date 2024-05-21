import fs from 'fs';
import path from 'path';

import { findRootDirectory } from './path';

console.log('🧪Tests: Started');

// --------------------------------------------------------------------
// Remove database before the test environment is up
const projectRoot = findRootDirectory();
const dbPath = path.join(projectRoot, 'db', 'test.sqlite');
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
}

// --------------------------------------------------------------------
