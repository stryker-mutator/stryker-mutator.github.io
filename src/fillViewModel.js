const path = require('path');
const fs = require('fs');

class MenuItem {

  constructor(name, title, childItems, options) {
    this.name = name;
    this.title = title;
    this.childItems = childItems || [];
    this.isActive = false;
    this.options = options || {};
    this.childItems.forEach(_ => _.parent = this);
  }

  activate(urlParts) {
    const selectedMenuItems = urlParts.slice();
    // Work with a copy so we don't corrupt the original
    const currentMenuItem = selectedMenuItems.shift();
    this.isActive = this.name === currentMenuItem;
    this.childItems.forEach(_ => _.activate(selectedMenuItems));
  }

  get fullTitle() {
    const activeChild = this.childItems.find(_ => _.isActive);
    if (activeChild) {
      return `${activeChild.fullTitle} - ${this.title}`;
    } else {
      return this.title;
    }
  }

  get activeTitle() {
    const activeChild = this.childItems.find(_ => _.isActive);
    if (activeChild) {
      return activeChild.activeTitle;
    } else {
      return this.title;
    }
  }

  get attributes() {
    return this.options.attributes;
  }

  get menuTitle() {
    return this.options.menuTitle || this.title;
  }

  get url() {
    if (this.options.url) {
      return this.options.url;
    } else {
      let url = this.name;
      if (this.childItems.length) {
        url += '/';
      }
      if (this.parent) {
        url = `${this.parent.url}${url}`;
      }
      return url;
    }
  }
}

class Menu extends MenuItem {
  constructor(menuItems) {
    super('', 'Stryker Mutator', menuItems);
    this.isActive = true;
  }
  activate(currentUrl) {
    const selectedMenuItems = Object.freeze(currentUrl.split('/'));
    super.activate(selectedMenuItems);
  }
}

const menu = new Menu([
  new MenuItem('stryker', 'For JavaScript', [
    new MenuItem('index', 'Introduction'),
    new MenuItem('quickstart', 'Quickstart'),
    new MenuItem('plugins', 'Plugins'),
    new MenuItem('handbook', 'Handbook')
  ], { menuTitle: 'For JavaScript & Friends' }),
  new MenuItem('stryker-net', 'For C#', [
    new MenuItem('index', 'Introduction'),
    new MenuItem('quickstart', 'Quickstart')
  ], { menuTitle: 'Stryker.NET' }),
  new MenuItem('stryker4s', 'For Scala', [
    new MenuItem('index', 'Introduction'),
    new MenuItem('quickstart', 'Quickstart'),
    new MenuItem('handbook', 'Handbook')
  ]),
  new MenuItem('blog', 'Blog'),
  new MenuItem('example', 'An example'),
  new MenuItem('handbook', 'Handbook', null, { url: 'https://github.com/stryker-mutator/stryker-handbook#readme', attributes: { target: '_blank' } }),
  new MenuItem('dashboard', 'Dashboard', undefined, { url: 'https://dashboard.stryker-mutator.io', attributes: { target: '_blank' } })
]);

const blogs = readBlogs();

module.exports = function (dest) {
  const currentUrl = getCurrentUrl(dest);
  console.log(`Rendering ${currentUrl}`);
  try {
    menu.activate(currentUrl);
    const viewModel = {
      name: 'Stryker',
      menu,
      blogs,
      currentBlog: currentBlog(currentUrl),
      githubProj: githubProj(currentUrl)
    };
    return viewModel;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

function currentBlog(currentUrl) {
  return blogs.find(blog => blog.url === currentUrl);
}

function githubProj(currentUrl) {
  if (currentUrl.startsWith('/stryker/')) {
    return 'stryker';
  } else if (currentUrl.startsWith('/stryker-net/')) {
    return 'stryker-net';
  } else if (currentUrl.startsWith('/stryker4s/')) {
    return 'stryker4s';
  } else {
    return '';
  }
}

function readBlogs() {
  const blogs = [];
  const baseBlogFolder = 'src/blog/';
  const directories = fs.readdirSync(baseBlogFolder);
  directories.sort(dateSort).forEach(dirName => {
    const files = fs.readdirSync(baseBlogFolder + dirName);
    const blog = {};

    files.forEach(fileName => {
      const fileParts = path.parse(fileName);
      if (fileName === 'blog.json') {
        const json = JSON.parse(fs.readFileSync(baseBlogFolder + dirName + '/blog.json'));
        blog.title = json.title;
        blog.description = json.description;
        blog.date = json.date;
      } else if (fileParts.ext === '.pug') {
        blog.url = `/blog/${dirName}/${fileParts.name}`;
      }
    });

    blogs.push(blog);
  });
  return blogs;
}

function dateSort(a, b) {
  const dateA = Date.parse(a);
  const dateB = Date.parse(b);
  if (dateA < dateB) {
    return 1;
  } else if (dateB < dateA) {
    return -1;
  } else {
    return 0;
  }
}

function getCurrentUrl(dest) {
  dest = dest.replace('generated-root/', '');
  const fileParts = path.parse(dest);
  if (dest === 'index.html') {
    return '/';
  } else {
    if (fileParts.dir) {
      return `/${fileParts.dir}/${fileParts.name}`;
    } else {
      return `/${fileParts.name}`;
    }
  }
}
