---
slug: mutation-switching
title: Mutation switching in Stryker4s
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [stryker4s]
---

Learn how Stryker4s uses mutation switching to improve performance.

<!--truncate-->

We are very happy with Stryker's new friends! One of those new friends is Stryker4s(cala).
Scala developers can now use mutation testing to improve their tests!
Creating a mutation testing framework for Scala comes with many challenges.
One of those challenges is the Scala compiler itself.
We all know it's not the [fastest in its kind](https://scala-ci.typesafe.com/grafana/dashboard/db/scala-benchmark?from=1429139130109&to=1492531027936h&orgId=1&var-branch=2.11.x&var-branch=2.12.x&var-branch=2.13.x&var-source=scala&var-bench=HotScalacBenchmark.compile&var-host=scalabench@scalabench@).
One of the main goals of Stryker is to be fast. This means we need to come up with an intelligent way to introduce the mutants into the source code.

## Attempt one: Compiling each mutation

One way of introducing mutants to a codebase is by mutating one statement, compile the code, run tests, gather the results and repeat.
This seems like a logical choice because it mimics the way a developer would go about it.

Let's look at an example.

```scala
class Numbers {
    def greaterThan(a: Int, b: Int): Boolean = {
        a > b
        // Mutant 1: a >= b
        // Mutant 2: a < b
        // Mutant 3: a == b
    }
}
```

As you can see, there are three possible mutants:

1. Change `>` to `>=`
1. Change `>` to `<`
1. Change `>` to `==`

If we apply the mutation one by one, we would need to compile the code base three times.
If we assume the compile time of this program is 10 seconds, we already have 30 seconds of compile time for one full mutation run.
This would quickly get out of hand when the codebase is bigger and generates more mutants.

## Attempt two: Mutating bytecode

As you might know, Scala gets compiled to Java bytecode. This gives us an alternative way to introduce mutations in a codebase.
We would be able to mutate the bytecode directly, eliminating the need for recompiling.

The main challenge with this approach is that [Scala doesn't guarantee the bytecode output for each version of the compiler](https://docs.scala-lang.org/overviews/core/binary-compatibility-of-scala-releases.html) (or even JDK version).
Even the jump from Scala 2.12 to 2.13 produces different bytecode. This would make manipulating bytecode complicated, unpredictable and hard to maintain.

Furthermore, if you mutate the bytecode, it can be difficult to reproduce the exact Scala code that you changed.
Details, like the exact location, are not represented in bytecode.
Scala makes this extra challenging, as 1 `.scala` file can easily result in 100 `.class` files in bytecode.

For performance reasons, mutating bytecode might sound like a fast solution, but you would still need to load (or hot reload) the mutated class files
for each mutant.

There should be a better solution out there, right?

## Solution: Mutation switching

Mutation switching to the rescue! So how is mutation switching both _faster_ and _more reliable_ than compiling each mutation or mutating bytecode?
The steps are quite similar to "Compiling each mutant", but with some big differences:

1. All mutants are identified for the whole codebase.
2. All mutants are applied to the codebase **at the same time** using a [Scala Pattern match](https://docs.scala-lang.org/tour/pattern-matching.html).
3. All mutants are tested one by one, with only **one mutant active at a time**, using an environment variable.

Step 2 is where the magic happens. Let's take a look at the same code example as used previously, right after the mutations are applied.

```scala
class Numbers {
    def greaterThan(a: Int, b: Int): Boolean = {
        sys.env.get("ACTIVE_MUTATION") match {
            case Some("0") =>
                a >= b
            case Some("1") =>
                a < b
            case Some("2") =>
                a == b
            case _ =>
                a > b
        }
    }
}
```

All possible mutations are implemented in the pattern match. An identifier is used to turn on/off, or _switch_, specific mutations.
The default case will be used when none of the mutants are active. Now the code base only needs to be compiled once.
The extra time compilation takes because of its increased size is negligible compared to the overhead of compiling each mutant.
For example, if the compilation time for this code base
would be 15 seconds we will still gain 15 seconds compared to compiling each mutation.

We gain performance without losing flexibility. It's a win-win scenario.

## Top statements

Mutation switching sure is great, but let's take a look at a more complex example.

```scala
def isEven(number: Int): Boolean = number % 2 == 0
def isOdd(number: Int): Boolean = !isEven(number)

val numbers: List[Int] = 1 to 100 toList

def filterOddAnd(specialNumber: Int): List[Int] = {
  numbers
    .filter(isOdd)
    .filterNot(_.equals(specialNumber))
}
```

With this code base `filter` and `filterNot` could be mutated to their counterparts.
This would give us the following code base if we implement the pattern match at the direct position.

```scala
def isEven(number: Int): Boolean = number % 2 == 0
def isOdd(number: Int): Boolean = !isEven(number)

val numbers: List[Int] = 1 to 100 toList

def filterOddAnd(specialNumber: Int): List[Int] = {
  numbers.(sys.env.get("ACTIVE_MUTATION") match {
    case Some("0") => .filter(isOdd)
    case _         => .filterNot(isOdd)
  }).
  (sys.env.get("ACTIVE_MUTATION") match {
    case Some("1") =>  .filterNot(_.equals(specialNumber))
    case _         =>  .filter(_.equals(specialNumber))
  })
}
```

Because we wrapped the functions right on the spot we produced code that doesn't even compile!
To make the code compile we need to take a closer look at the abstract syntax tree.
We are searching for the parent statement in this abstract syntax tree, which is `numbers` in our case.
If we implement mutation switching using the parent statement, we can generate the following code.

```Scala
def isEven(number: Int): Boolean = number % 2 == 0
def isOdd(number: Int): Boolean = !isEven(number)

val numbers: List[Int] = 1 to 100 toList

def filterOddAnd(specialNumber: Int): List[Int] = {
  sys.env.get("ACTIVE_MUTATION") match {
    case Some("0") => numbers.filterNot(isOdd).filter(_.equals(specialNumber))
    case Some("1") => numbers.filter(isOdd).filter(_.equals(specialNumber))
    case _         => numbers.filter(isOdd).filterNot(_.equals(specialNumber))
  }
}
```

This enables us to get clean, readable pattern matches and avoid compilation errors.

## What's next?

With mutation switching in place, the road is clear for even bigger performance improvements. Right now, we're not
keeping the testing process alive. We simply run `sbt test` with the correct mutant switched on.
Keeping the test process alive and rerunning the tests after switching mutants is where we can really put the pedal to the metal!

Interested to help? We're very much looking for contributions! Take a look at our [issue tracker](https://github.com/stryker-mutator/stryker4s/issues)
or contact us on [Slack](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM).

## Conclusion

With the combination of mutation switching and traversing to the parent statements Stryker4s is able to apply mutations to the codebase
in a clean and understandable fashion and keep the chances of compilation errors to a minimum.
We hope this blog gave some insight on mutation switching works and how Stryker4s uses this to its advantage. Happy mutating!
