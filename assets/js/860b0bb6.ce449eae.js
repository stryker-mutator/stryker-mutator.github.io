"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6897],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,k=m["".concat(i,".").concat(h)]||m[h]||p[h]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2673:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return i},toc:function(){return u},default:function(){return p}});var n=r(7462),a=(r(7294),r(3905));const o={slug:"stryker-0-8-0",title:"Stryker 0.8 release",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},l=void 0,s={permalink:"/blog/stryker-0-8-0",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-08-11-stryker-0-8-0.md",source:"@site/blog/2017-08-11-stryker-0-8-0.md",title:"Stryker 0.8 release",description:"Stryker 0.8 just released with better CI integration and configurable thresholds.",date:"2017-08-11T00:00:00.000Z",formattedDate:"August 11, 2017",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:1.37,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"TypeScript support",permalink:"/blog/typescript-support"},nextItem:{title:"Road to Stryker 1.0",permalink:"/blog/road-to-stryker-1-0"}},i={authorsImageUrls:[void 0]},u=[{value:"Better CI integration",id:"better-ci-integration",children:[],level:2},{value:"Configurable color thresholds",id:"configurable-color-thresholds",children:[],level:2},{value:"Bugfixes",id:"bugfixes",children:[],level:2},{value:"Enjoy!",id:"enjoy",children:[],level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Stryker 0.8 just released with better CI integration and configurable thresholds."),(0,a.kt)("p",null,"For the entire changelog per package:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker/CHANGELOG.md"},"stryker changelog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-api/CHANGELOG.md"},"stryker-api changelog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-html-reporter/CHANGELOG.md"},"stryker-html-reporter changelog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-mocha-runner/CHANGELOG.md"},"stryker-mocha-runner changelog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-mocha-framework/CHANGELOG.md"},"stryker-mocha-framework changelog"))),(0,a.kt)("h2",{id:"better-ci-integration"},"Better CI integration"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/pull/355"},"Original PR")),(0,a.kt)("p",null,"It's now possible to let your build fail based on your mutation score.\nThe way to do this is to make sure stryker runs inside your (nightly) build and configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"threshold.break")," value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// stryker.conf.js\n// ...\nthresholds: {\n    break: 70, // Fail if mutation score < 70\n    // ..\n}\n// ...\n")),(0,a.kt)("p",null,"This will break the build if your mutation score falls below 70%."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[2017-08-11 13:46:10.190] [ERROR] ScoreResultCalculator - Final mutation score 66.97 under breaking threshold 70, setting exit code to 1 (failure).\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! stryker@0.8.0 stryker: `node bin/stryker run`\n")),(0,a.kt)("p",null,"Want to know what a 'mutation score' is? See ",(0,a.kt)("a",{parentName:"p",href:"../docs/General/faq"},"our faq"),"."),(0,a.kt)("h2",{id:"configurable-color-thresholds"},"Configurable color thresholds"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/pull/355"},"Original PR")),(0,a.kt)("p",null,"The clear-text and html reporters now honor configured high and low thresholds.\nYou once again configure it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"thresholds")," config option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// stryker.conf.js\n// ...\nthresholds: {\n    high: 80,\n    low: 60,\n    // ...\n}\n// ...\n")),(0,a.kt)("p",null,"Configuring these values will color mutation scores above 80% ",(0,a.kt)("span",{className:"text-success"},"green"),", between 80 and 60% ",(0,a.kt)("span",{className:"text-warning"},"yellow")," and anything below 60% ",(0,a.kt)("span",{className:"text-danger"},"red"),".\nYou can see an example of an html report based on stryker itself ",(0,a.kt)("a",{parentName:"p",href:"https://stryker-mutator.github.io/stryker-html-reporter"},"here"),"."),(0,a.kt)("h2",{id:"bugfixes"},"Bugfixes"),(0,a.kt)("p",null,"Bugfixes this release:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/issues/335"},"Incorrect relative path for html reporter #355")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/issues/350"},"Mutation testing in node based environments can generate false warnings #350"))),(0,a.kt)("h2",{id:"enjoy"},"Enjoy!"),(0,a.kt)("p",null,"Enjoy this new release! We're always happy with feedback, negative or positive."))}p.isMDXComponent=!0}}]);