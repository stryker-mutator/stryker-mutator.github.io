
module.exports = function (dest) {
  var menu = {
    'Home': '/',
    'Quickstart': '/quickstart.html'
  };
  var currentUrl = '/' + dest;
  if (currentUrl === '/index.html') {
    currentUrl = '/';
  }

  return {
    debug: true,
    name: 'Stryker - The JavaScript mutation testing framework',
    tagline: 'Measure the effectiveness of your JavaScript unit tests.',
    currentUrl: currentUrl,
    menu: menu
  };
};