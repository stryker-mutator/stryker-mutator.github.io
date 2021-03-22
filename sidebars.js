// @ts-check
module.exports = {
  docs: {
    General: ['General/introduction', 'General/example', 'General/dashboard', 'General/faq'],
    // @ts-expect-error
    'Mutation Testing': require('./docs/mutation-testing-elements/sidebar'),
    // @ts-expect-error
    StrykerJS: require('./docs/stryker-js/sidebar'),
    // @ts-expect-error
    'Stryker.NET': require('./docs/stryker-net/sidebar'),
    // @ts-expect-error
    Stryker4s: require('./docs/stryker4s/sidebar'),
  },
};
