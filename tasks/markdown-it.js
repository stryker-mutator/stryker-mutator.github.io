const md = require('jstransformer')(require('jstransformer-markdown-it'));

function link_open(tokens, idx, options, _ /*env*/ , self) {
  // Add an attribute to any external links
  const addExternalAttribute = (attribute, value) => {
    const aIndex = tokens[idx].attrIndex(attribute);
    const href = tokens[idx].attrGet('href');

    if (href.indexOf('//') > 0) {
      if (aIndex < 0) {
        tokens[idx].attrPush([attribute, value]); // add new attribute
      } else {
        tokens[idx].attrs[aIndex][1] = value; // replace value of existing attr
      }
    }
  }

  // Make all non-relative links open in a new window (so links with a protocol in them)
  addExternalAttribute('target', '_blank');
  // Prevent external links from accessing this web-page
  addExternalAttribute('rel', 'noopener');

  // pass token to default renderer.
  return self.renderToken(tokens, idx, options);
};

module.exports = function markdownIt(text) {
  return md.render(text, {
    plugins: ['markdown-it-anchor'], // Make sure headers have id's so they can be anchored
    html: true,
    renderRules: {
      link_open
    }
  }).body;
}
