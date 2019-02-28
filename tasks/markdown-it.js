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

// Source - https://github.com/nodejs/nodejs.dev/blob/master/src/util/createSlug.js
function slugify(title) {
  let slug = title.toLowerCase().trim();

  const sets = [
    {to: '-and-', from: /&/ }, // Replace &
    {to: '-', from: /(\/|_|,|:|;|\\|\ |\.|\?)/g } // Replace /_,:;\.? and whitespace
  ];
  
  sets.forEach(set => {
    slug = slug.replace(set.from, set.to);
  });

  return slug
    .replace(/[^\w\-]+/g, '') // Remove any non word characters
    .replace(/\-\-+/g, '-')   // Replace multiple hyphens with single
    .replace(/^-/, '')        // Remove any leading hyphen
    .replace(/-$/, '');       // Remove any trailing hyphen
}

module.exports = function markdownIt(text) {
  return md.render(text, {
    plugins: [
      [
        'markdown-it-anchor', // Make sure headers have id's so they can be anchored
        {
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: '🔗',
          permalinkClass: 'stryker-permalink',
          slugify
        }
      ]
    ],
    html: true,
    renderRules: {
      link_open
    }
  }).body;
}
