---
slug: vscode-plugin
title: 'Announcing the Stryker VS Code Plugin'
authors: nicojs
tags: [vscode-plugin, strykerjs]
---

We're excited to announce the release of the official Stryker Mutator VS Code plugin! 🎉

With this plugin, you can easily integrate Stryker into your development workflow, allowing you to run mutation tests directly from the comfort of your code editor.

<!-- truncate -->

## 🧑‍💻 The plugin

To install the Stryker Mutator VS Code plugin, visit the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stryker-mutator.stryker-mutator) and click on the "Install" button. At the moment of writing, the plugin only supports StrykerJS (v9.3.0 or higher), but support for other Stryker flavors is on the roadmap.

Key features of the Stryker Mutator VS Code plugin include:

- 🚀 **Real-time feedback** directly in your code editor. See which mutants survive or are killed without leaving your editor.
- 🧭 **Test Explorer integration**. Browse discover and test mutants per file, folder, or individually.
- 👀 **Inline annotations and diff views**. Instantly see how each mutation changed your code, and whether your tests caught it.
- 🔁 **Streamlined workflow**. No need to jump between CLI, browser reports, and code. Everything happens in your IDE.

Some impressions 😎

![Test explorer](/videos/vscode-plugin-test-explorer.gif)

As you can see, we're using the [Test Explorer](https://code.visualstudio.com/docs/debugtest/testing#_automatic-test-discovery-in-testing-view) to provide a familiar interface for running and exploring mutants. They are reported as tests, which comes with a lot of built-in functionality, such as filtering, showing mutants in a diff view, and more.

## 💬 Mutation Server Protocol

Instead of creating a custom plugin for each editor for each Stryker flavor, we created the [Mutation Server Protocol (MSP)](https://github.com/stryker-mutator/editor-plugins/tree/main/packages/mutation-server-protocol#mutation-server-protocol-specification). MSP is a simple JSON-RPC based protocol that allows any editor to communicate with a Stryker Mutator instance, similar to the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/). This is effectively a language-agnostic standard for running mutation testing (which could even be used outside of editors).

Any mutation testing framework can implement it. Similarly, any editor can create a plugin that speaks MSP. This opens up mutation testing to a wider audience and makes it easier to integrate mutation testing into various development environments.

At the moment of writing, the MSP is on version 0.4. It provides basic functionality for discovering and testing mutants, as well as reporting results back to the editor. We're actively working on expanding the protocol to include more features and capabilities.

## 🚧 Roadmap

The Stryker Mutator VS Code plugin is just the beginning. Here are some features we're planning to add in the near future:

- 🌐 **Support for other Stryker flavors**: Expanding support to include Stryker.NET, Stryker4s, and possibly more.
- 📊 **Enhanced reporting**: More detailed mutation testing reports and visualizations.
- ⚙️ **Configuration management**: Ability to manage Stryker configuration files directly from VS Code.
- 🤝 **Community contributions**: What would you like to see in the Stryker Mutator VS Code plugin? We're open to suggestions and contributions.

Come to our [GitHub repository's issue tracker](https://github.com/stryker-mutator/editor-plugins/issues) and let us know your thoughts!

We can't wait to see how the Stryker Mutator VS Code plugin enhances your testing experience! Happy coding! 🚀
