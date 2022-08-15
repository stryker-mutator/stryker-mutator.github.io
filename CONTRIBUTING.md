# Contribute to stryker-mutator.github.io

This is the contribution guide for [stryker-mutator.github.io](https://stryker-mutator.github.io). Great to have you here! Here is how you can help make our website a better experience.

## Way we work

We have a small workflow in place for [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) source files markdown files with Docusaurus.

```
[source files (*.md)] -> [build process] -> [output files (*.html)]
```

The idea here is we update, add, delete the _source_ files and _generate_ the html files based on that.
For source files, please use the `develop` branch. We will never use the master branch for this, as the master branch contains only _output files_.
Pull requests should also target the develop branch.

Whenever a PR is merged to `develop`, it is automatically published to the master branch via a GitHub action.
TODO: We would still like to have some basic end-to-end tests to see if the website functions as expected.

## Run locally

Run the website locally using these steps:

```bash
git clone git@github.com:stryker-mutator/stryker-mutator.github.io.git
cd stryker-mutator.github.io
npm install
npm start
```

**Note 1: Make sure you use at least Git version [2.25](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/)**  
**Note 2: On Windows, please use Git Bash or WSL**

The website should be opened in your browser of choice. Changes you make to the source files are automatically picked up and updated in your browser.

## Examples

### Update the main index.html page

1. Run the website locally.
1. Update the `src/pages/index.js`
1. Make sure the website looks fine in your browser
1. Make the pull request

### Add a blog article

1. Create a new markdown file under `blog/`. Look at the other blog articles for inspiration about what metadata you need to add
2. Test the website locally to see if the blog article looks fine.
3. Run Prettier with `npm run lint`, or `npm run lint:fix` if you're feeling lucky.
4. Make the PR.

### Update the documentation

1. Documentation is located under `docs/`
   1. Documentation for Stryker, Stryker4s, Stryker.NET and mutation-testing-elements are located in their respective repositories
2. Test the website locally to see if the new documentation looks fine.
3. Make the PR.

## Commit messages

We're not following a strict commit message format for our stryker-mutator.github.io web page. However, you are still encouraged to follow general commit message best practices.

```
<subject>

<body>
```

A commit message should have a clear subject (<70 characters). Optionally, the title can be followed by 2 new lines and a longer description in the body. Use imperative, present tense: "change" not "changed" nor "changes".
