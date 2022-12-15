---
slug: hacktoberfest-with-stryker
title: 'Celebrating hacktoberfest with Stryker & big release for Stryker.NET'
author: Richard Werkman
author_title: Stryker Team
author_url: https://github.com/richardwerkman
author_image_url: https://avatars.githubusercontent.com/u/14224500?v=4
tags: [stryker, hacktoberfest, hackathon]
---

At Stryker we can look back at a very successful Hacktoberfest this year! In the last weekend of October we got together with other open-sourcerers to help reduce the number of outstanding issues on our stryker projects.

The hackathon was sponsored by Info Support, this is in addition to the regular sponsoring.

# Accomplishments

During the hackathon we worked on a variety of issues. From small bug fixes to large features that have been in progress for months. Not all work has resulted in merged PRs but everyone learned a lot.

Let's take a look at what we have accomplished in just two days of hacking:

## Stryker JS

## Stryker.NET

- Feat: [Add mutator for Math class](https://github.com/stryker-mutator/stryker-net/pull/2244)
- Feat: [Add mutator for `??=`](https://github.com/stryker-mutator/stryker-net/pull/2274)
- Feat: [Add object initializer mutator](https://github.com/stryker-mutator/stryker-net/pull/2259)
- Fix: [False "NoCoverage" mark in the report](https://github.com/stryker-mutator/stryker-net/pull/2254)
- Fix: [Correctly classify changed files as source or test files](https://github.com/stryker-mutator/stryker-net/pull/2256)
- Fix: [Correctly show whitespace in report](https://github.com/stryker-mutator/stryker-net/pull/2289)
- Fix: [Handle mutations of prefixed increment/decrement](https://github.com/stryker-mutator/stryker-net/pull/2285)
- Fix: [Multiple mutator descriptions](https://github.com/stryker-mutator/stryker-net/pull/2277)
- Fix: [Correctly show whitespace in report](https://github.com/stryker-mutator/stryker-net/pull/2276)
- Fix: [Spaces in the output path are supported for the -o option](https://github.com/stryker-mutator/stryker-net/pull/2264)
- Docs: [Add operating modes page](https://github.com/stryker-mutator/stryker-net/pull/2291)
- Docs: [Add reference to integration test projects in contribution guide](https://github.com/stryker-mutator/stryker-net/pull/2275)
- Chore: [Improve pipeline performance](https://github.com/stryker-mutator/stryker-net/pull/2269)
- Chore: [Removed hard coded references to command line](https://github.com/stryker-mutator/stryker-net/pull/2268)

## Mutation testing elements (report)

- Feat: [Replace bootstrap with tailwind](https://github.com/stryker-mutator/mutation-testing-elements/pull/2160)

## See you next year?

Given the big success of this years hacktoberfest hackathon we will for sure organise one next year as well! The hackathon will be hosted in The Netherlands but is setup as a hybrid event so can be joined online as well.

# Stryker.NET 3.1

The new Stryker.NET is packed with a lot of new awesome features 🚀

## Test whole solution

A long awaited feature is finally here!

```
cd C:\myproject\
dotnet stryker -s "C:\myproject\mysolution.sln"
```

When running from your project root (where your solution file is located) and passing the solution file Stryker will analyze your solution and mutate all projects it can find.

## Math mutations

Stryker will now mutate math methods when it encounters them. All available mutations are:

| Original                 | Mutated                  |
| ------------------------ | ------------------------ |
| Acos()                   | Acosh()                  |
| Acos()                   | Asin()                   |
| Acos()                   | Atan()                   |
| Acosh()                  | Acos()                   |
| Acosh()                  | Asinh()                  |
| Acosh()                  | Atanh()                  |
| Asin()                   | Asinh()                  |
| Asin()                   | Acos()                   |
| Asin()                   | Atan()                   |
| Asinh()                  | Asin()                   |
| Asinh()                  | Acosh()                  |
| Asinh()                  | Atanh()                  |
| Atan()                   | Atanh()                  |
| Atan()                   | Acos()                   |
| Atan()                   | Asin()                   |
| Atanh()                  | Atan()                   |
| Atanh()                  | Acosh()                  |
| Atanh()                  | Asinh()                  |
| BitDecrement()           | BitIncrement()           |
| BitIncrement()           | BitDecrement()           |
| Ceiling()                | Floor()                  |
| Cos()                    | Cosh()                   |
| Cos()                    | Sin()                    |
| Cos()                    | Tan()                    |
| Cosh()                   | Cos()                    |
| Cosh()                   | Sinh()                   |
| Cosh()                   | Tanh()                   |
| Exp()                    | Log()                    |
| Floor()                  | Ceiling()                |
| Log()                    | Exp()                    |
| Log()                    | Pow()                    |
| MaxMagnitude()           | MinMagnitude()           |
| MinMagnitude()           | MaxMagnitude()           |
| Pow()                    | Log()                    |
| ReciprocalEstimate()     | ReciprocalSqrtEstimate() |
| ReciprocalSqrtEstimate() | ReciprocalEstimate()     |
| ReciprocalSqrtEstimate() | Sqrt()                   |
| Sin()                    | Sinh()                   |
| Sin()                    | Cos()                    |
| Sin()                    | Tan()                    |
| Sinh()                   | Sin()                    |
| Sinh()                   | Cosh()                   |
| Sinh()                   | Tanh()                   |
| Tan()                    | Tanh()                   |
| Tan()                    | Cos()                    |
| Tan()                    | Sin()                    |
| Tanh()                   | Tan()                    |
| Tanh()                   | Cosh()                   |
| Tanh()                   | Sinh()                   |

## Object initializer mutation

```cs
var myObject = new MyClass() {
    property1 = "",
    property2 = Int.MaxValue
}
```

Will be mutated into an empty object initializer:

```cs
var myObject = new MyClass() {
}
```

## Null coalesing assignment mutation

```cs
var object1 ??= object2;
```

Will be mutated into:

```cs
var object1 = object2;

```
