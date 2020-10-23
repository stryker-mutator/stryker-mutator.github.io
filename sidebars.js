// @ts-check
const path = require('path');
const fs = require('fs');

/**
 * @param {string} base
 * @param {string} rest
 * @returns {string}
 */
function toRelativePath(base, rest) {
  if (base === 'docs' || base.length === 0) return rest;
  else return `${base}/${rest}`;
}

/**
 * @param {string} dir
 */
function directoryNameMapping(dir) {
  switch (dir) {
    case 'stryker4s':
      return 'Stryker4s';
    case 'stryker-net':
    case 'stryker.net':
      return 'Stryker.NET';
    case 'stryker':
      return 'Stryker';
    case 'mutation-testing-elements':
      return 'Mutation Testing';
    default:
      return dir;
  }
}

/**
 * @param {string} dir directory we're working on
 * @param {string} acc full filepath
 * @param {string} relativePath Path relative to docs directory
 * @typedef {{[location: string]: (string | Sidebar)[]}} Sidebar
 * @returns {Sidebar}
 */
function filesInDir(dir, acc, relativePath) {
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
    .filter((_) => !_.startsWith('.'))
    .forEach((f) => {
      const fullPath = `${fullDir}/${f}`;
      if (fs.lstatSync(fullPath).isDirectory()) {
        directories.push(f);
      } else if (f.endsWith('.md') || f.endsWith('.mdx')) {
        const withoutMd = f.split('.md')[0];
        files.push(`${relativePath}/${withoutMd}`);
      }
    });

  let dirname = directoryNameMapping(dir);

  return {
    [dirname]: [...files, ...directories.map((d) => filesInDir(d, fullDir, toRelativePath(relativePath, d)))],
  };
}
const docs = filesInDir('docs', path.resolve('.'), '');

module.exports = docs;
