
module.exports = function (dest) {
  var menu = {
    'Home': '/',
    'Quickstart': '/quickstart.html',
    'Plugins': '/plugins.html',
    'Supported mutators': '/mutators.html'
  };
  var currentUrl = '/' + dest;
  var currentTitle = 'Home';
  if (currentUrl === '/index.html') {
    currentUrl = '/';
  }
  
  for(var i in menu){
    if(menu[i] === currentUrl){
      currentTitle = i;
    }
  }

  return {
    debug: true,
    name: 'Stryker - The JavaScript mutation testing framework',
    tagline: 'Measure the effectiveness of JavaScript tests.',
    currentUrl: currentUrl,
    currentTitle: currentTitle,
    menu: menu,
  };
};