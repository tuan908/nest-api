import path from 'node:path';
import {fileURLToPath} from 'node:url';
import fs from 'fs/promises';

const esFilename = fileURLToPath(import.meta.url);
const esDirname = path.dirname(esFilename);

async function main() {
  let files = await fs.readdir(path.join(esDirname, 'dist'), {
    encoding: 'utf8',
  });
  for (const file of files) {
    let data = `{"version":2,"framework":null,"buildCommand":"nest build --builder webpack --webpackPath webpack.config.js && node ./updateVercel.mjs"","builds":[{"src":"dist/${file}","use":"@vercel/node"}],"routes":[{"src":"/(.*)","dest":"dist/${file}"}]}`;
    fs.writeFile(path.join(esDirname, 'vercel.json'), data, {encoding: 'utf8'});
  }
}

main();
