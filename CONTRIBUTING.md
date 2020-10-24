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

We use some newer Git versions to clone docs from other repo's, the minimum required Git version you need is [2.25](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/).

The website should be opened in your browser of choice. Changes you make to the source files are automatically picked up and updated in your browser.

## Examples

### Update the main index.html page

1. Run the website locally.
1. Update the `src/index.pug`
1. Make sure the website looks fine in your browser
1. Make the pull request

### Add a blog article

1. Create a new folder under `src/blog`. Name of the folder should be the (targeted) publish date.
1. Add a `blog.json` file. This file contains the title, summary and date in clear text. This is used to provide the overview on the [/blog.html](http://stryker-mutator.github.io/blog.html) page. You can use this template:
   ````json
   {
       "title": "[your title]",
       "description": "[your description]",
       "date": "[your date]"
   }   ```
   ````
1. Add the `.pug` file to the folder. This is the blog content itself. You can write it in the native pug language or using markdown. Use this template for markdown:

   ```pug
   extends ../../layout/blog-layout.pug

   block content
       :markdown-it
           Your content here
   ```

1. Test the website locally to see if the blog article looks fine.
1. Make the PR.

## Commit messages

We're not following a strict commit message format for our stryker-mutator.github.io web page. However, you are still encouraged to follow general commit message best practices.

```
<subject>

<body>
```

A commit message should have a clear subject (<70 characters). Optionally, the title can be followed by 2 new lines and a longer description in the body. Use imperative, present tense: "change" not "changed" nor "changes".
