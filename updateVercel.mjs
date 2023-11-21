import path from 'node:path';
import {fileURLToPath} from 'node:url';
import fs from 'fs/promises';

// __filename
const esFilename = fileURLToPath(import.meta.url);
// __dirname
const esDirname = path.dirname(esFilename);

const distPath = path.join(esDirname, 'dist');
const vercelConfigPath = path.join(esDirname, 'vercel.json');

async function readFiles(distPath) {
  return await fs.readdir(distPath, {
    encoding: 'utf8',
  });
}

async function writeFile(filename, targetFilePath) {
  let data = `{"version":2,"builds":[{"src":"dist/${filename}","use":"@vercel/node"}],"routes":[{"src":"/(.*)","dest":"dist/${filename}"}]}`;
  await fs.writeFile(targetFilePath, data, {
    encoding: 'utf8',
  });
}

async function main() {
  for (const file of await readFiles(distPath)) {
    await writeFile(file, vercelConfigPath);
  }
}

main();
