"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[4169],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),k=a,h=c["".concat(l,".").concat(k)]||c[k]||m[k]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7216:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=(r(7294),r(3905));const o={slug:"announcing-stryker-js-v6.0-beta",title:"Announcing StrykerJS v6.0 Beta",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i=void 0,s={permalink:"/blog/announcing-stryker-js-v6.0-beta",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2022-03-03-announcing-stryker-6-beta.md",source:"@site/blog/2022-03-03-announcing-stryker-6-beta.md",title:"Announcing StrykerJS v6.0 Beta",description:"We're excited to announce the beta of the next major release of the StrykerJS: StrykerJS 6.0.",date:"2022-03-03T00:00:00.000Z",formattedDate:"March 3, 2022",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:7.025,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],frontMatter:{slug:"announcing-stryker-js-v6.0-beta",title:"Announcing StrykerJS v6.0 Beta",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},prevItem:{title:"StrykerJS v6.0: Expeditious Superior Mutations",permalink:"/blog/stryker-js-v6-expeditious-superior-mutations"},nextItem:{title:"Announcing Stryker.NET 1.0",permalink:"/blog/2021-30-10-announcing-stryker-net-1.md"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\udce6 ESM support for NodeJS-based test runners",id:"-esm-support-for-nodejs-based-test-runners",level:2},{value:"\u23e9 Hot reload",id:"-hot-reload",level:2},{value:"\ud83d\uddff Ignore static",id:"-ignore-static",level:2},{value:"\ud83d\udcc3 ESM-based config",id:"-esm-based-config",level:2},{value:"\ud83d\udca5 Breaking changes",id:"-breaking-changes",level:2},{value:"\ud83d\udd2e What&#39;s next",id:"-whats-next",level:2}],p={toc:u};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're excited to announce the beta of the next major release of the StrykerJS: StrykerJS 6.0."),(0,a.kt)("p",null,"From the 6th version onward, StrykerJS supports ",(0,a.kt)("em",{parentName:"p"},"native ECMAScript modules"),", or ESM for short. To make this work, we changed some parts of StrykerJS, which includes small (yet technically breaking) changes. As a bonus, we've improved performance considerably in some use cases! We're curious to know what you think. Why not try the beta today?"),(0,a.kt)("p",null,"Update your Stryker dependencies to get started using the beta."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @stryker-mutator/core@next\n# OR\nyarn add --dev @stryker-mutator/core@next\n")),(0,a.kt)("p",null,"Don't forget to update Stryker plugins. For example, when using the mocha runner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @stryker-mutator/mocha-runner@next\n# OR\nyarn add --dev @stryker-mutator/mocha-runner@next\n")),(0,a.kt)("p",null,"If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at our RoboBar \ud83e\udd16\ud83c\udf77 example and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to know if your tests are any good."),(0,a.kt)("p",null,"Now, let's dive into the changes! \ud83c\udfca\u200d\u2642\ufe0f"),(0,a.kt)("h2",{id:"-esm-support-for-nodejs-based-test-runners"},"\ud83d\udce6 ESM support for NodeJS-based test runners"),(0,a.kt)("p",null,"As stated in the introduction, StrykerJS v6 brings official support for ESM projects."),(0,a.kt)("p",null,"With ESM, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," statements. NodeJS has supported ESM since version 12. Browsers have gradually been adding support since 2017, and all major browsers support it by now. I recommend watching ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Zyoztl_7l7g"},"Gil Tayar's introduction to ESM")," when you want to brush up on the ESM basics."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jest-runner")," already worked with ESM (for Jest, you will need to configure the ",(0,a.kt)("a",{parentName:"p",href:"../docs/stryker-js/jest-runner#ecmascript-modules"},(0,a.kt)("inlineCode",{parentName:"a"},"--experimental-vm-modules"))," flag), but our node-based runners did not. This changes with version 6."),(0,a.kt)("p",null,"You configure it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,a.kt)("p",null,"As you can see ",(0,a.kt)("em",{parentName:"p"},"no configuration change")," is needed. Updating StrykerJS is enough \ud83d\ude01."),(0,a.kt)("h2",{id:"-hot-reload"},"\u23e9 Hot reload"),(0,a.kt)("p",null,"As you might know, StrykerJS uses mutation switching (sometimes called mutant schemata), meaning Stryker inserts all mutants into your source code yet only activates them one at a time."),(0,a.kt)("p",null,"It looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function add(a, b) {\n  if (global.activeMutant === 0) {\n    // \ud83d\udc7e BlockStatement mutator\n  } else {\n    return global.activeMutant === 1\n      ? a - b // \ud83d\udc7d ArithmeticExpression mutator\n      : a + b;\n  }\n}\n")),(0,a.kt)("p",null,"Next, Stryker creates ",(0,a.kt)("em",{parentName:"p"},"worker")," processes. A worker process is responsible for activating a mutant, running tests, and reporting the result to the main process. To do that, it uses the test runner of your choice, for example, ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"mocha"),". For NodeJS-based test runners, it would look something like this:"),(0,a.kt)("p",null,"(old process)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Activate the mutant"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Load all files"),", using ",(0,a.kt)("inlineCode",{parentName:"li"},"require")),(0,a.kt)("li",{parentName:"ol"},"Run the tests with the test runner of choice."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Unload all files"),", using ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/modules.html#requirecache"},(0,a.kt)("inlineCode",{parentName:"a"},"delete require.cache['path/to/cjs/module']"))," to prepare for the next run."),(0,a.kt)("li",{parentName:"ol"},"Report the result")),(0,a.kt)("p",null,"As you can see, ",(0,a.kt)("em",{parentName:"p"},"all files are loaded and unloaded")," for each mutant run. This way of reloading ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/tooling/issues/51"},"won't ever work with native ESM"),", as there is simply no ",(0,a.kt)("inlineCode",{parentName:"p"},"cache")," we can ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," the loaded files from \ud83e\udd37\u200d\u2640\ufe0f."),(0,a.kt)("p",null,"The reloading is also expensive. Think about it: if your project contains 1k files, with a total of 10k mutants, it could mean a total of ",(0,a.kt)("em",{parentName:"p"},"ten million file IO actions"),". That's why mutation testing with StrykerJS would slow down considerably when the size of your project grows."),(0,a.kt)("p",null,"When you think about it, it is also ",(0,a.kt)("strong",{parentName:"p"},"unnecessary"),"; why not simply keep all files loaded? Since they contain all the mutants anyway. This new process looks something like this:"),(0,a.kt)("p",null,"(new process)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"(once) Load the code using ",(0,a.kt)("inlineCode",{parentName:"li"},"import")),(0,a.kt)("li",{parentName:"ol"},"Activate the mutant"),(0,a.kt)("li",{parentName:"ol"},"Run the tests with the test runner of choice."),(0,a.kt)("li",{parentName:"ol"},"Report the result")),(0,a.kt)("p",null,"The result is a significant performance improvement \ud83d\udc07. You can clearly see the difference when running StrykerJS on Stryker's core itself:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Old"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"stryker-v5",src:r(8218).Z,width:"1257",height:"368"}))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"New ","*"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"stryker-v6",src:r(1960).Z,width:"1257",height:"368"}))))),(0,a.kt)("p",null,"*"," using ",(0,a.kt)("inlineCode",{parentName:"p"},"--ignoreStatic")),(0,a.kt)("p",null,"That's a whopping 70% performance improvement \ud83e\udd2f."),(0,a.kt)("p",null,'We call this feature "hot reload," and StrykerJS supports it in ',(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/mocha-runner")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jasmine-runner"),". Please note that this feature is always on from version 6 onward, even for plain old CommonJS style projects! It does require a higher version of mocha or jasmine, respectively, see ",(0,a.kt)("a",{parentName:"p",href:"#-breaking-changes"},"breaking changes"),". Support for ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/cucumber-runner")," for the release of version 8 of ",(0,a.kt)("inlineCode",{parentName:"p"},"@cucumber/cucumber"),"."),(0,a.kt)("p",null,"Unfortunately, we're not supporting hot reload for the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jest-runner")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner")," yet; please up-vote ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/3455"},"#3455")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/3454"},"#3454")," respectively if you want to see it happen \ud83d\udc99."),(0,a.kt)("h2",{id:"-ignore-static"},"\ud83d\uddff Ignore static"),(0,a.kt)("p",null,"Yes, indeed, hot reload sounds incredible! But what about ",(0,a.kt)("em",{parentName:"p"},"static mutants"),"?"),(0,a.kt)("p",null,"A static mutant is a mutant that is executed once on ",(0,a.kt)("em",{parentName:"p"},"file load")," rather than during ",(0,a.kt)("em",{parentName:"p"},"test runtime"),"."),(0,a.kt)("p",null,"Take this small example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// greet.js\nconst hi = '\ud83d\udc4b';\n\nexport function greet(name) {\n  return `${hi} ${name}`;\n}\n\n// greet.spec.js\nimport { greet } from './greet.js';\n\nit('should greet me', () => {\n  expect(greet('me')).toBe('\ud83d\udc4b me');\n});\n")),(0,a.kt)("p",null,"When you run StrykerJS on this code, it will create a mutant for the ",(0,a.kt)("inlineCode",{parentName:"p"},"hi")," constant:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"-const hi = '\ud83d\udc4b';\n+const hi = '';\n")),(0,a.kt)("p",null,"When you consider mutant schemata, the actual code produced by StrykerJS looks more like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const hi = global.activeMutant === '1' ? '' : '\ud83d\udc4b';\n")),(0,a.kt)("p",null,"When you now factor in ",(0,a.kt)("a",{parentName:"p",href:"#-hot-reload"},"hot reload"),", you see that the mutant is only active during the runtime of the tests instead of at load time. This would mean that the mutant ",(0,a.kt)("em",{parentName:"p"},"survives no matter how good your tests are"),". We can't have that \ud83d\ude2a!"),(0,a.kt)("p",null,"That's why StrykerJS will detect static mutants and ",(0,a.kt)("em",{parentName:"p"},"still follow the old process")," to test them. However, instead of reloading the files (remember, this won't work for ESM files), it will create a shiny, new worker process for every static mutant run (for NodeJS-based test runners)."),(0,a.kt)("p",null,"Creating new worker processes to test static mutants makes them much more expensive in StrykerJS v6. Also, they are generally less interesting for you to spend your time on since they include constant strings, numbers, etc. You might even want to ignore them entirely! This is where ",(0,a.kt)("inlineCode",{parentName:"p"},"--ignoreStatic")," comes in."),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"--ignoreStatic")," static mutants are ... well ignored. You can still see them in your HTML report, but they won't count towards your mutation score."),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/images/blogs/ignored-static-mutant.png",alt:"Ignored static mutant"}),(0,a.kt)("figcaption",null,"An ignored static mutant")),(0,a.kt)("p",null,"Your mileage may vary, but for running StrykerJS on Stryker's core itself, we ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/3282#issuecomment-980110861"},"saw a whopping 50% performance improvement by ignoring 6% of our mutants (the static mutants) \ud83e\udd2f"),". For more details on static mutants, see ",(0,a.kt)("a",{parentName:"p",href:"../docs/mutation-testing-elements/static-mutants"},"the new documentation on on them"),"."),(0,a.kt)("p",null,"Please try this feature out and provide feedback. We're also thinking of ways to point this feature out to users of Stryker, or even enable it by default. Feel free to voice your opinion in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/3435"},"the GitHub issue about it"),"."),(0,a.kt)("h2",{id:"-esm-based-config"},"\ud83d\udcc3 ESM-based config"),(0,a.kt)("p",null,"From v6 onward, StrykerJS also supports ",(0,a.kt)("em",{parentName:"p"},"your config")," as ESM. Either by adding ",(0,a.kt)("inlineCode",{parentName:"p"},'{ "type": "module" }')," to your package.json file, or by renaming ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker.conf.js")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker.conf.mjs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// stryker.conf.mjs\n/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */\nconst config = {\n  reporters: ['html', 'clear-text', 'progress'],\n  testRunner: 'mocha',\n  coverageAnalysis: 'perTest',\n};\nexport default config;\n")),(0,a.kt)("p",null,"We've updated the ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker init"),' command to emit this new config file format when choosing for "JavaScript" config format.'),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note"),": for completeness sake, ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker.conf.cjs")," is also supported."),(0,a.kt)("h2",{id:"-breaking-changes"},"\ud83d\udca5 Breaking changes"),(0,a.kt)("p",null,"This is the list of breaking changes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/3450"},"#3450")," ",(0,a.kt)("strong",{parentName:"li"},"checker-api:")," The ",(0,a.kt)("inlineCode",{parentName:"li"},"check")," method of checker plugins now receives a ",(0,a.kt)("em",{parentName:"li"},"group of mutants")," and should provide a ",(0,a.kt)("inlineCode",{parentName:"li"},"CheckResult")," per mutant id."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/3438"},"#3438")," ",(0,a.kt)("strong",{parentName:"li"},"html reporter:")," Configuration option ",(0,a.kt)("inlineCode",{parentName:"li"},"htmlReporter.baseDir")," is deprecated and will be removed in a later version. Please use ",(0,a.kt)("inlineCode",{parentName:"li"},"htmlReporter.fileName")," instead."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/3432"},"#3432")," ",(0,a.kt)("strong",{parentName:"li"},"esm config:")," Exporting a function (using ",(0,a.kt)("inlineCode",{parentName:"li"},"module.exports = function(config) {}"),") from your ",(0,a.kt)("inlineCode",{parentName:"li"},"stryker.conf.js")," file is no longer supported. This was already deprecated but now will give an error."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/3409"},"#3409")," ",(0,a.kt)("strong",{parentName:"li"},"esm:")," StrykerJS is now a pure ESM. Please ",(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c"},"read this"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/3409"},"#3409")," ",(0,a.kt)("strong",{parentName:"li"},"esm:")," Node 12.20 is now the min version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/3409"},"#3409")," ",(0,a.kt)("strong",{parentName:"li"},"esm:")," Karma v6.3 is now the min supported karma version for ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/karma-runner"),", since ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/karma-runner/karma/blob/master/CHANGELOG.md#630-2021-03-23"},"that version added support for async config loading")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/3396"},"#3396")," ",(0,a.kt)("strong",{parentName:"li"},"esm:")," The ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/jasmine-runner")," now requires ",(0,a.kt)("a",{parentName:"li",href:"mailto:jasmine@3.10"},"jasmine@3.10")," or higher."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/3393"},"#3393")," ",(0,a.kt)("strong",{parentName:"li"},"esm:")," The ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/mocha-runner")," now requires ",(0,a.kt)("inlineCode",{parentName:"li"},"mocha@7.2")," or higher."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/3369"},"#3369")," ",(0,a.kt)("strong",{parentName:"li"},"reload test environment:")," Test runner plugins must provide ",(0,a.kt)("inlineCode",{parentName:"li"},"TestRunnerCapabilities")," by implementing the ",(0,a.kt)("inlineCode",{parentName:"li"},"capabilities")," method.")),(0,a.kt)("h2",{id:"-whats-next"},"\ud83d\udd2e What's next"),(0,a.kt)("p",null,"We'll be focussing on getting StrykerJS 6.0 released in about a month or so. We would appreciate your feedback. Feel free to report any ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues"},"issues")," you find or voice your opinion on ",(0,a.kt)("a",{parentName:"p",href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"},"our slack channel")))}m.isMDXComponent=!0},8218:function(e,t,r){t.Z=r.p+"assets/images/stryker-v5-29b8e2d9e551ba70c73297c30cb55ad5.gif"},1960:function(e,t,r){t.Z=r.p+"assets/images/stryker-v6-73098790d1813d33a0351986d6755a76.gif"}}]);