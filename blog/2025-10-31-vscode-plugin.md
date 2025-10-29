---
slug: vscode-plugin
title: 'Announcing the Stryker VSCode Plugin'
authors: nicojs
tags: [vscode plugin]
---

We're excited to announce the release of the official Stryker Mutator VSCode plugin! 🎉

With this plugin, you can easily integrate Stryker into your development workflow, allowing you to run mutation tests directly from the comfort of your code editor.

<!-- truncate -->

## 🧑‍💻 The plugin

To install the Stryker Mutator VSCode plugin, visit the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stryker-mutator.stryker-mutator) and click on the "Install" button. At the moment of writing, the plugin only supports StrykerJS, but support for other Stryker flavors is on the roadmap.

Key features of the Stryker Mutator VSCode plugin include:

- 🚀 **Real-time feedback** directly in your code editor. See which mutants survive or are killed without leaving VS Code.
- 🧭 **Test Explorer integration**. Browse discover and test mutants per file, folder, or individually.
- 👀 **Inline annotations and diff views**. Instantly see how each mutation changed your code, and whether your tests caught it.
- 🔁 **Streamlined workflow**. No need to jump between CLI, browser reports, and code. Everything happens in your IDE.

Some impressions 😎

![Test explorer](/videos/vscode-plugin-test-explorer.gif)

## 💬 Mutation Server Protocol

Instead of creating a custom plugin for each editor for each Stryker flavor, we created the [Mutation Server Protocol (MSP)](https://github.com/stryker-mutator/editor-plugins/tree/main/packages/mutation-server-protocol#mutation-server-protocol-specification). MSP is a simple JSON-RPC based protocol that allows any editor to communicate with a Stryker Mutator instance, similar to the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/). This is effectively a language-agnostic standard for running mutation testing (which could even be used outside of editors).

Any mutation testing framework can implement it. Similarly, any editor can create a plugin that speaks MSP. This opens up mutation testing to a wider audience and makes it easier to integrate mutation testing into various development environments.

## 🚧 Roadmap

The Stryker Mutator VSCode plugin is just the beginning. Here are some features we're planning to add in the near future:

- 🌐 **Support for other Stryker flavors**: Expanding support to include Stryker.NET, Stryker4s, and possibly more.
- 📊 **Enhanced reporting**: More detailed mutation testing reports and visualizations.
- ⚙️ **Configuration management**: Ability to manage Stryker configuration files directly from VSCode.
- 🤝 **Community contributions**: What would you like to see in the Stryker Mutator VSCode plugin? We're open to suggestions and contributions.

Come to our [GitHub repository's issue tracker](https://github.com/stryker-mutator/editor-plugins/issues) and let us know your thoughts!

We can't wait to see how the Stryker Mutator VSCode plugin enhances your testing experience! Happy coding! 🚀
