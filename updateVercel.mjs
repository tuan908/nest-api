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
    let data = `{"version":2,"builds":[{"src":"dist/${file}","use":"@vercel/node"}],"routes":[{"src":"/(.*)","dest":"dist/${file}"}]}`;

    let renderData = `
services:
- type: web
  name: nest-api
  env: node
  repo: https://github.com/tuan908/nest-api.git
  buildCommand: pnpm install
  startCommand: node dist/${file}
  plan: free
  autoDeploy: false 
    `;
    fs.writeFile(path.join(esDirname, 'vercel.json'), data, {encoding: 'utf8'});
    fs.writeFile(path.join(esDirname, 'render.yaml'), renderData, {
      encoding: 'utf8',
    });
  }
}

main();
