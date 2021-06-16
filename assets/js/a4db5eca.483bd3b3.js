(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[9591],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3310:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return o},default:function(){return p}});var a=r(22122),n=(r(67294),r(3905));const i={slug:"road-to-stryker-1-0",title:"Road to Stryker 1.0",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},s={permalink:"/blog/road-to-stryker-1-0",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-07-14-road-to-stryker-1-0.md",source:"@site/blog/2017-07-14-road-to-stryker-1-0.md",title:"Road to Stryker 1.0",description:"Stryker is about two years old. During this time we achieved a lot. But it's far from finished. So, what's next? Let's take a glimpse in the future.",date:"2017-07-14T00:00:00.000Z",formattedDate:"July 14, 2017",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:5.77,truncated:!0,prevItem:{title:"Stryker 0.8 release",permalink:"/blog/stryker-0-8-0"},nextItem:{title:"Stryker 0.6.4 released",permalink:"/blog/stryker-0-6-4"}},o=[{value:"Road to v1",id:"road-to-v1",children:[]},{value:"False assumption",id:"false-assumption",children:[]},{value:"First attempt",id:"first-attempt",children:[]},{value:"Open heart surgery",id:"open-heart-surgery",children:[{value:"Step 1: Initial test run",id:"step-1-initial-test-run",children:[]},{value:"Step 2: Mutation testing",id:"step-2-mutation-testing",children:[]}]},{value:"Plain JavaScript projects",id:"plain-javascript-projects",children:[]},{value:"Want to help?",id:"want-to-help",children:[]}],l={toc:o};function p({components:e,...t}){return(0,n.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Stryker is about two years old. During this time we achieved a lot. But it's far from finished. So, what's next? Let's take a glimpse in the future."),(0,n.kt)("p",null,"Some of Strykers achievements are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stryker is the first functional mutation testing framework for JavaScript."),(0,n.kt)("li",{parentName:"ul"},"Stryker is test framework and test runner agnostic."),(0,n.kt)("li",{parentName:"ul"},"Stryker boosts performance by running tests in parallel."),(0,n.kt)("li",{parentName:"ul"},"Stryker uses advance coverage analysis to do less work.")),(0,n.kt)("p",null,"The way Stryker achieves all this, is using a plugin model. Want to use a different test runner?\nCreate a class that implements the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-api/src/test_runner/TestRunner.ts"},"TestRunner interface")," and you're done.\nHowever, Stryker does one assumption: your source code can be directly executed in your environment."),(0,n.kt)("h2",{id:"road-to-v1"},"Road to v1"),(0,n.kt)("p",null,"We're very happy with the results so far, but we're far from done. The JavaScript world is constantly evolving.\nA couple of examples of modern use cases are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A web project written in JSX / ",(0,n.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/"},"React")),(0,n.kt)("li",{parentName:"ul"},"A node project written in ",(0,n.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypesScript")," and executed using ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node"},"ts-node")),(0,n.kt)("li",{parentName:"ul"},"An Angular project generated with the ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@angular/cli"},"angular cli")," using ",(0,n.kt)("a",{parentName:"li",href:"https://webpack.js.org/"},"webpack")," and ",(0,n.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")),(0,n.kt)("li",{parentName:"ul"},"A web project using ",(0,n.kt)("a",{parentName:"li",href:"https://vuejs.org/"},"VueJS")),(0,n.kt)("li",{parentName:"ul"},"A web component written in HTML5 using ",(0,n.kt)("a",{parentName:"li",href:"https://www.polymer-project.org"},"Polymer")," and ",(0,n.kt)("a",{parentName:"li",href:"https://webpack.js.org/"},"webpack"))),(0,n.kt)("p",null,"In order to stay relevant, these use cases need to be supported in a user friendly way.\nOnly then are we comfortable with tagging Stryker with a version ",(0,n.kt)("em",{parentName:"p"},"1")," tag."),(0,n.kt)("h2",{id:"false-assumption"},"False assumption"),(0,n.kt)("p",null,"If you look at the modern use cases, they have something in common:\nyour code cannot be directly executed in your JavaScript environment. It's not even JavaScript in some cases.\nIt first needs to be compiled, transpiled and/or bundled, before it can be executed.\nFor the sake of this article, let's call this step ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Source-to-source_compiler"},"transpiling"),".\nThis makes the assumption that Stryker does a false one: ",(0,n.kt)("strong",{parentName:"p"},"it should not assume the code you write is the code that gets executed"),"."),(0,n.kt)("h2",{id:"first-attempt"},"First attempt"),(0,n.kt)("p",null,"We've had a lot of discussion within the Stryker team on how to support these use cases.\nOne possibility is to first transpile your code before we run the normal Stryker process on it."),(0,n.kt)("p",null,"In the end we decided against this approach, because it comes with a big downside: it will cause a lot of false positives."),(0,n.kt)("p",null,"Let's take this piece of TypeScript code as an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const b = 42;\nconst a = `the answer is ${b}`;\n")),(0,n.kt)("p",null,"This might transpile to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"var b = 42;\nvar a = 'the answer is ' + b;\n")),(0,n.kt)("p",null,"When Stryker comes along: it changes ",(0,n.kt)("inlineCode",{parentName:"p"},"'the answer is ' + b")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"'the answer is ' - b"),".\nThis is a valid mutation for JavaScript (if you're curious: the answer is ",(0,n.kt)("inlineCode",{parentName:"p"},"NaN"),").\nHowever, ",(0,n.kt)("inlineCode",{parentName:"p"},"'the answer is ' - b")," is ",(0,n.kt)("em",{parentName:"p"},"not a valid TypeScript expression"),". It results in the following compile error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.\n")),(0,n.kt)("p",null,"This is why we refer to it as a false positive. This mutation shouldn't be tested, because it's a waste of resources and it impacts the mutation score. This is why we shouldn't blindly mutate transpiled code."),(0,n.kt)("h2",{id:"open-heart-surgery"},"Open heart surgery"),(0,n.kt)("p",null,"The only solution for supporting these use cases is to transpile the code after it has been mutated. This way, we can make sure only valid mutations are done to your code because\nwe ",(0,n.kt)("em",{parentName:"p"},"teach")," Stryker which mutations are valid and which are invalid and we won't have to worry about code that gets generated during the transpilation."),(0,n.kt)("p",null,"However, we don't want to just hard code it all in Stryker, because that would force a dependency on TypeScript, Babel, Webpack, etc.\nInstead the transpiling and mutating of the code will be the responsibility of a new plugin type.\nLet's call this the ",(0,n.kt)("inlineCode",{parentName:"p"},"transpiler")," plugin. Examples of these plugins may be (in the future): ",(0,n.kt)("inlineCode",{parentName:"p"},"stryker-typescript-transpiler"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stryker-javascript-transpiler"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stryker-babel-transpiler"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stryker-webpack-transpiler")),(0,n.kt)("p",null,"We've sketched the new workflow for the TypeScript use case on a whiteboard:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"transpiler-plugin",src:r(44194).Z})),(0,n.kt)("p",null,"Let's explain what happens in 2 steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Initial test run"),(0,n.kt)("li",{parentName:"ol"},"Mutation testing")),(0,n.kt)("h3",{id:"step-1-initial-test-run"},"Step 1: Initial test run"),(0,n.kt)("p",null,"Starting from the top left: Stryker starts by reading your Stryker configuration file.\nAfter that, we read in the source files into memory. As you might have noticed, these will be the ",(0,n.kt)("em",{parentName:"p"},"typescript files"),".\nNext up: it's the new ",(0,n.kt)("inlineCode",{parentName:"p"},"stryker-typescript-transpiler")," plugin's time to shine. It will transpile the ",(0,n.kt)("em",{parentName:"p"},".ts files into "),'.js files\nand it will use your "tsconfig.json" configuration for this. The JavaScript output of this process will\nbe written to disk by Stryker in something that we call a ',(0,n.kt)("em",{parentName:"p"},"Sandbox"),". In this Sandbox, Stryker can\nstart the initial test run as usual."),(0,n.kt)("p",null,"Why this complicated setup? After all, if we want to do an initial test run, we might as well just let your build process transpile the code\nand run the tests using your test runner. The answer is that we need a baseline of your tests ran by Stryker.\nIn the next step, Stryker will write mutations to different Sandboxes and run your tests.\nWe need a control step to make sure your tests pass under normal circumstances. Also: this is where\nwe measure your code coverage results for every test (if your test framework and test runner support it), which\nare used to speed up mutation testing."),(0,n.kt)("h3",{id:"step-2-mutation-testing"},"Step 2: Mutation testing"),(0,n.kt)("p",null,"After the initial test run completed successfully, we proceed with the actual mutation testing. The first step here\nis about figuring out how we can mutate your source code. This is again done by the ",(0,n.kt)("inlineCode",{parentName:"p"},"stryker-typescript-transpiler")," plugin.\nIt will mutate the TypeScript specific ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"abstract syntax tree"),", but ",(0,n.kt)("em",{parentName:"p"},"only\nin valid ways"),". For example: it won't mutate ",(0,n.kt)("inlineCode",{parentName:"p"},"'the answer is ' + 42")," into ",(0,n.kt)("inlineCode",{parentName:"p"},"'the answer is ' - 42"),", but it might\nmutate it into ",(0,n.kt)("inlineCode",{parentName:"p"},"'Stryker was here' + 42"),". The output of this process is a list of (in-memory) mutants."),(0,n.kt)("p",null,"A mutant will have 2 parts: a TypeScript part and a JavaScript part. Stryker itself only cares about the\nJavaScript part, because that is the recipe to mutate the JavaScript code in the sandboxes.\nThis will allow Stryker to do mutation testing without needing to compile the code for each mutant, which would be disastrous for performance.\nThe TypeScript part of a mutant can be used to report the mutated code to the end user. So the mutants that will be reported\nin the exact code and language that the end user uses."),(0,n.kt)("h2",{id:"plain-javascript-projects"},"Plain JavaScript projects"),(0,n.kt)("p",null,"Back to plain JavaScript projects. What will change for them? The answer is: not much.\nWe'll basically move the current logic for mutating code to a new ",(0,n.kt)("inlineCode",{parentName:"p"},"stryker-javascript-transpiler")," plugin.\nIt will be a pass-through transpiler, meaning that the code you write will be used directly.\nMutating of JavaScript code will move to this plugin as well."),(0,n.kt)("h2",{id:"want-to-help"},"Want to help?"),(0,n.kt)("p",null,"Want to help? Great! We're really looking for people interested in helping us reach our goal of supporting all JavaScript based projects!"))}p.isMDXComponent=!0},44194:function(e,t,r){"use strict";t.Z=r.p+"assets/images/transpiler-plugin-122cea51d31d7eefb6326cb3367f022a.jpg"}}]);