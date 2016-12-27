var fs = require('fs');

module.exports = function (dest) {
  var menu = {
    'Home': '/',
    'Quickstart': '/quickstart.html',
    'Blog': '/blogs.html',
    'Plugins': '/plugins.html',
    'Supported mutators': '/mutators.html'
  };
  var currentUrl = '/' + dest;
  var currentTitle = 'Home';
  if (currentUrl === '/index.html') {
    currentUrl = menu.Home;
  } else if (currentUrl.startsWith('/blogs/')){
    currentUrl = menu.Blog;
  }
  
  for(var i in menu){
    if(menu[i] === currentUrl){
      currentTitle = i;
    }
  }

  var blogs = [];
  var baseBlogFolder = 'src/blogs/';
  var directories = fs.readdirSync(baseBlogFolder);
  directories.forEach(function(dirName){
    var files = fs.readdirSync(baseBlogFolder + dirName);
    files.forEach(function(fileName){
      if(fileName === "blog.json"){
        var blog = JSON.parse(fs.readFileSync(baseBlogFolder + dirName + '/blog.json'));
        blog.url = 'blogs/' + dirName + '/' + blog.fileName + '.html';
        blogs.push(blog);
      }
    });
  });

  return {
    debug: true,
    name: 'Stryker - The JavaScript mutation testing framework',
    tagline: 'Measure the effectiveness of JavaScript tests.',
    currentUrl: currentUrl,
    currentTitle: currentTitle,
    menu: menu,
    blogs: blogs
  };
};