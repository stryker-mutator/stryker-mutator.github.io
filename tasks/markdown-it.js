const md = require('jstransformer')(require('jstransformer-markdown-it'));

function link_open(tokens, idx, options, _/*env*/, self)  {
  const aIndex = tokens[idx].attrIndex('target');
  const href = tokens[idx].attrGet('href');

  // Make all non-relative links open in a new window (so links with a protocol in them)
  if (href.indexOf('//') > 0) {
    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']); // add new attribute
    } else {
      tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
    }
  }

  // pass token to default renderer.
  return self.renderToken(tokens, idx, options);
};

module.exports = function markdownIt(text) {
  return md.render(text, {
    plugins: ['markdown-it-named-headers'], // Make sure headers have id's so they can be anchored
    html: true,
    renderRules: {
      link_open
    }
  }).body;
}