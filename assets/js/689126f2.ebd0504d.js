(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1987],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),h=a,k=m["".concat(u,".").concat(h)]||m[h]||c[h]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63303:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(22122),a=(r(67294),r(3905));const i={slug:"happy-new-stryker",title:"Happy new Stryker!",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},o=void 0,s={permalink:"/blog/happy-new-stryker",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-01-01-happy-new-stryker.md",source:"@site/blog/2017-01-01-happy-new-stryker.md",title:"Happy new Stryker!",description:"2017 - The year to invest into test quality",date:"2017-01-01T00:00:00.000Z",formattedDate:"January 1, 2017",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:2.855,truncated:!0,prevItem:{title:"Introduction to mutation testing",permalink:"/blog/introduction-to-mutation-testing"},nextItem:{title:"Stryker 0.5.5 released!",permalink:"/blog/stryker-0-5-5"}},u=[{value:"2017 - The year to invest into test quality",id:"2017---the-year-to-invest-into-test-quality",children:[{value:"Mutation testing in JavaScript",id:"mutation-testing-in-javascript",children:[]}]},{value:"Stryker Hackweek 2016",id:"stryker-hackweek-2016",children:[{value:"Achieved goals",id:"achieved-goals",children:[]},{value:"The Hackweek Team",id:"the-hackweek-team",children:[]}]}],l={toc:u};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"2017---the-year-to-invest-into-test-quality"},"2017 - The year to invest into test quality"),(0,a.kt)("p",null,"Up until now, when you were writing unit tests, you were actually investing in ",(0,a.kt)("em",{parentName:"p"},"code quality"),". Catching bugs early by continuously\nexercising your code with unit tests and keeping your stakeholders happy by presenting them with a code coverage number of 85% or higher.\nBut does code coverage tell the entire story? Are your tests actually able to detect bugs? How do you test ",(0,a.kt)("em",{parentName:"p"},"your tests"),"?\nThat's the problem ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mutation_testing"},"mutation testing")," sets out to solve."),(0,a.kt)("h3",{id:"mutation-testing-in-javascript"},"Mutation testing in JavaScript"),(0,a.kt)("p",null,"Due to JavaScript's dynamic nature, unit testing has become a fundamental tool to bring a higher level of robustness to JavaScript projects.\nYour average JavaScript app can easily have around 1,000 unit tests. Ensuring that these are actually ",(0,a.kt)("em",{parentName:"p"},"effective")," can be a full-time job. This is where Stryker comes in.\n",(0,a.kt)("a",{parentName:"p",href:"http://stryker-mutator.github.io/"},"Stryker Mutator")," is our approach to providing a comprehensive mutation testing tool for the JavaScript environment."),(0,a.kt)("p",null,"We start out by altering your source code ever so slightly (e.g. turning a ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),") and then running your tests to see if they are\nresilient to this ",(0,a.kt)("em",{parentName:"p"},'"mutant"'),". If they are (and they fail), all is fine - the ",(0,a.kt)("em",{parentName:"p"},"mutant is dead"),". If they don't, the ",(0,a.kt)("em",{parentName:"p"},"mutant")," survived and you have to fix your test."),(0,a.kt)("h2",{id:"stryker-hackweek-2016"},"Stryker Hackweek 2016"),(0,a.kt)("p",null,"Stryker began its life as the thesis project of Simon de Lang. After graduating, his thesis tutor Nico Jansen joined him and continued development in the open on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/"},"GitHub"),".\nSince then they had five major releases, improving performance, adding support for the ",(0,a.kt)("a",{parentName:"p",href:"http://karma-runner.github.io/1.0/index.html"},"Karma")," and ",(0,a.kt)("a",{parentName:"p",href:"http://mochajs.org/"},"Mocha")," test runners,\nas well as creating a fancy ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/mutation-testing-elements"},"HTML reporter"),"."),(0,a.kt)("p",null,"Up until now, the two of them did all of this in their own time, next to their daytime jobs as software engineers."),(0,a.kt)("p",null,"Around came the traditionally slow Christmas time period, allowing a select few of their colleagues at ",(0,a.kt)("a",{parentName:"p",href:"https://www.infosupport.com/"},"Info Support")," to join them for 4 days for the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Stryker Hackweek 2016")),"."),(0,a.kt)("h3",{id:"achieved-goals"},"Achieved goals"),(0,a.kt)("p",null,"The whole team enjoyed the experience a lot and had good fun extending Stryker and fixing issues.\nWe mostly concentrated on integrating Stryker with SonarQube, as well as improving the first time usage experience."),(0,a.kt)("p",null,"All in all we made ",(0,a.kt)("strong",{parentName:"p"},"47 commits"),", closed ",(0,a.kt)("strong",{parentName:"p"},"18 issues"),", eat ",(0,a.kt)("strong",{parentName:"p"},"6 kebabs")," and ",(0,a.kt)("strong",{parentName:"p"},"4 subway sandwiches"),"!\nHere's a quick overview of what we did:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Created a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/sonar-stryker-plugin"},"Stryker SonarQube plugin"),", that turns survived mutants into neat SonarQube issues"),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("a",{parentName:"li",href:"http://stryker-mutator.github.io/blog.html"},"a blog")," to the Stryker homepage"),(0,a.kt)("li",{parentName:"ul"},"Upgraded the TypeScript compiler in all projects to 2.1"),(0,a.kt)("li",{parentName:"ul"},"Released ",(0,a.kt)("a",{parentName:"li",href:"http://stryker-mutator.github.io/blog/2016-12-30/stryker-0-5-5.html"},"version 0.5.5 of Stryker"),", including:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A new progress reporter"),(0,a.kt)("li",{parentName:"ul"},"Limit the number of test-names to log in the clear text reporter"),(0,a.kt)("li",{parentName:"ul"},"Support to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/issues/90"},"exclude online files from globbing")))),(0,a.kt)("li",{parentName:"ul"},"Support for ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages/stryker-karma-runner/issues/7"},"karma config parsing in the stryker-karma-runner")),(0,a.kt)("li",{parentName:"ul"},"Improved documentation for first time-users"),(0,a.kt)("li",{parentName:"ul"},"A plan for a series of blog articles")),(0,a.kt)("h3",{id:"the-hackweek-team"},"The Hackweek Team"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Hackweek Team (f.l.t.r.): Alex van Assem, Nico Jansen, Simon de Lang, Philipp Weissenbacher, Jasper Catthoor, Wannes Van Regenmortel",src:r(39143).Z})),(0,a.kt)("p",null,"The Stryker Hackweek team consisted of (from left to right):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Alex van Assem: Agile coach and TypeScript hacker"),(0,a.kt)("li",{parentName:"ul"},"Nico Jansen: T-shaped software engineer"),(0,a.kt)("li",{parentName:"ul"},"Simon de Lang: Software engineer and TypeScript aficionado"),(0,a.kt)("li",{parentName:"ul"},"Philipp Weissenbacher: Software/BI engineer"),(0,a.kt)("li",{parentName:"ul"},"Jasper Catthoor: Software engineer (via Info Support Belgium)"),(0,a.kt)("li",{parentName:"ul"},"Wannes Van Regenmortel: Software engineer (via Info Support Belgium)")),(0,a.kt)("h4",{id:"want-to-try-out-stryker-begin-with-the-handy-quick-start-guide"},"Want to try out Stryker? Begin with the handy ",(0,a.kt)("a",{parentName:"h4",href:"http://stryker-mutator.github.io/quickstart.html"},"quick start guide"),"."))}p.isMDXComponent=!0},39143:function(e,t,r){"use strict";t.Z=r.p+"assets/images/stryker-team-photo-33b4c62520d53cc895e3bb1ec2ba9b25.jpg"}}]);