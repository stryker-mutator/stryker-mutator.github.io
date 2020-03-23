// @ts-check
const path = require('path');
const fs = require('fs');

/**
 * @typedef {{[location: string]: string[] | Sidebar}} Sidebar
 */

/**
 * @param {string} dir
 * @param {string} acc
 
 */
function filesInDir(dir, acc) {
  const fullDir = path.resolve(acc, dir);
  const inDirectory = fs.readdirSync(fullDir);
  /**
   * @type {string[]} files
   */
  const files = [];
  /**
   * @type {string[]} directories
   */
  const directories = [];
  inDirectory
    .filter(_ => !_.startsWith('.'))
    .forEach(f => {
      const fullPath = `${fullDir}/${f}`;
      if (fs.lstatSync(fullPath).isDirectory()) {
        directories.push(f);
      } else if (f.endsWith('.md')) {
        const withoutMd = f.split('.md')[0];
        files.push(`${dir}/${withoutMd}`);
      }
    });

  let dirname;
  switch (dir) {
    case 'stryker-net':
      dirname = 'Stryker.NET';
      break;
    case 'stryker4s':
      dirname = 'Stryker4s';
      break;
    case 'stryker':
      dirname = 'Stryker';
      break;
    default:
      dirname = dir;
      break;
  }

  return {
    [dirname]: files,
    ...directories
      .map(d => filesInDir(d, fullDir))
      .reduce((prev, curr) => {
        return { ...prev, ...curr };
      }, {})
  };
}

module.exports = { docs: filesInDir('docs', path.resolve('.')) };
