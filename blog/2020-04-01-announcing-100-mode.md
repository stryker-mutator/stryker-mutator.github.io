---
slug: announcing-100-mode
title: Announcing Stryker 100% mode
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [april fools]
---

Over the years, we've been privileged to explain the concept of Mutation Testing to great developers, testers and others. 
The concept of _inserting bugs into your production code_ in order to _test your tests_ sparks the imagination. 

<!--truncate-->

But when people start using mutation testing in practice, they 
quickly realize that things are not as easy as they seem. 
One of the most common questions is: "what 'mutation score' is good enough"? 
Our general advice is not to strive for 100%. But should you use 80%? Or some other percentage? 
Some users just want to see that everything is great with their tests.

That's why we're introducing a new '100%' mode!
With this mode, Stryker itself will strive to improve your mutation score to be 100%. 
You can activate it with the `--100` command line flag,
but we're thinking of making this the default mode.

## 🙉 An example

A picture says more than a thousand words. First without the new `--100` mode:

![]9/images/blogs/stryker-without-100-mode.png)

And now with the new `--100` mode:

![](/images/blogs/stryker-with-100-mode.png)

As you can see, this new mode makes for a far better-looking report! 

And things just keep getting better. Since all mutants will be _killed - no matter what_, you'll not have to wait long, 
because Stryker can internally optimize the process to _not do actual testing whatsoever_. A huge performance gain!

## 🔮 What's next?

Seeing as this is such an obvious improvement, it will not take long for other mutation testing frameworks 
to follow suit. That's why it's only a matter of time before 
the legendary [Mull](https://github.com/mull-project/mull#mull), 
[InfectionPHP](https://infection.github.io/guide/) and [Pitest](https://pitest.org/) will have this new and very important feature.

Don't hesitate to open an issue if this important mode is missing. 