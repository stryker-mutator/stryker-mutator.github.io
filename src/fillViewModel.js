const fs = require('fs');

class MenuItem {
  constructor(name, title, url, imgUrl, childItems) {
    this.name = name;
    this.title = title;
    this.url = url;
    this.imgUrl = imgUrl;
    this.childItems = childItems || [];
    this.isActive = false;
  }

  activate(urlParts) {
    const selectedMenuItems = urlParts.slice();
    // Work with a copy so we don't corrupt the original
    const currentMenuItem = selectedMenuItems.shift();
    this.isActive = this.name === currentMenuItem;
    this.childItems.forEach(_ => _.activate(selectedMenuItems));
  }
  activeTitle() {
    const activeChild = this.childItems.find(_ => _.isActive);
    if (activeChild) {
      return activeChild.activeTitle() + ' - ' + this.name;
    }
  }
}

class Menu extends MenuItem {
  constructor(menuItems) {
    super('', 'Stryker Mutator', '', undefined, menuItems);
    this.isActive = true;
  }
  activate(currentUrl) {
    const selectedMenuItems = Object.freeze(currentUrl.substr(0, currentUrl.lastIndexOf('.')).split('/'));
    // this.menuItems.forEach(_ => _.activate(selectedMenuItems));
    super.activate(selectedMenuItems);
  }
}

const menu = new Menu([
  new MenuItem('stryker', 'For JavaScript', '/stryker/home.html', '/images/image-placeholder.jpg'),
  new MenuItem('stryker.NET', 'For C#', '/stryker.NET/home.html', '/images/image-placeholder.jpg'),
  new MenuItem('stryker4s', 'For Scala', '/stryker4s/home.html', '/images/image-placeholder.jpg'),
  new MenuItem('blog', 'Blog', '/blog.html'),
]);

const blogs = readBlogs();

module.exports = function (dest) {
  const currentUrl = getCurrentUrl(dest);
  console.log(`Rendering ${currentUrl}`);
  try {
    menu.activate(currentUrl);
    const viewModel = {
      name: 'Stryker',
      tagline: 'Measure the effectiveness of JavaScript tests.',
      currentTitle: menu.activeTitle(),
      menu,
      blogs: blogs,
      currentBlog: currentBlog(currentUrl)
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

function readBlogs() {
  const blogs = [];
  const baseBlogFolder = 'src/blog/';
  const directories = fs.readdirSync(baseBlogFolder);
  directories.sort().reverse().forEach(dirName => {
    const files = fs.readdirSync(baseBlogFolder + dirName);
    const blog = {};

    files.forEach(fileName => {
      if (fileName === "blog.json") {
        const json = JSON.parse(fs.readFileSync(baseBlogFolder + dirName + '/blog.json'));
        blog.title = json.title;
        blog.description = json.description;
        blog.date = json.date;
      } else if (fileName.endsWith('.pug')) {
        blog.url = '/blog/' + dirName + '/' + fileName.substr(0, fileName.length - 4) + '.html';
      }
    });

    blogs.push(blog);
  });
  return blogs;
}

function getCurrentUrl(dest) {
  if (dest === 'index.html') {
    return '/';
  } else {
    return `/${dest}`;
  }
}