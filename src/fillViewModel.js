const fs = require('fs');

const menu = {
  'Home': '/',
  'Quickstart': '/quickstart.html',
  'Blog': '/blog.html',
  'Plugins': '/plugins.html',
  'Supported mutators': '/mutators.html',
  'FAQ': '/faq.html',
  'Technical reference': '/technical-reference.html'
};

const blogs = readBlogs();

module.exports = function (dest) {
  const currentUrl = getCurrentUrl(dest);
  console.log(`Rendering ${currentUrl}`);
  try {
    const viewModel = {
      name: 'Stryker - The JavaScript mutation testing framework',
      tagline: 'Measure the effectiveness of JavaScript tests.',
      selectedMenuItem: selectedMenuItem(currentUrl),
      currentTitle: currentTitle(currentUrl),
      menu: menu,
      blogs: blogs,
      currentBlog: currentBlog(currentUrl)
    };
    return viewModel;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

function selectedMenuItem(currentUrl) {
  if (currentUrl.startsWith('/blog/')) {
    return 'Blog';
  } else {
    const menuItem = Object.keys(menu).find(item => menu[item] === currentUrl);
    if (!menuItem) {
      throw Error(`No menu item found for ${currentUrl} in menu ${JSON.stringify(menu)}.`);
    }
    return menuItem;
  }
}

function currentTitle(currentUrl) {
  return Object.keys(menu).find(menuItem => menu[menuItem] === currentUrl) ||
    blogs.find(blog => blog.url === currentUrl).title;
}

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