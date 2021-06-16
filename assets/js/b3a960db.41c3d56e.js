(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8812],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return h}});var o=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=o.createContext({}),l=function(t){var e=o.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return o.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(r),h=a,c=d["".concat(u,".").concat(h)]||d[h]||m[h]||n;return r?o.createElement(c,i(i({ref:e},p),{},{components:r})):o.createElement(c,i({ref:e},p))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66754:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return n},metadata:function(){return i},toc:function(){return s},default:function(){return l}});var o=r(22122),a=(r(67294),r(3905));const n={slug:"stryker-dashboard-host-your-mutation-testing-report",title:"Host your mutation testing report",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["dashboard"]},i={permalink:"/blog/stryker-dashboard-host-your-mutation-testing-report",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2019-12-27-stryker-dashboard-host-your-mutation-testing-report.md",source:"@site/blog/2019-12-27-stryker-dashboard-host-your-mutation-testing-report.md",title:"Host your mutation testing report",description:"\ud83d\udcca The Stryker Dashboard can now host your mutation testing report in the cloud.",date:"2019-12-27T00:00:00.000Z",formattedDate:"December 27, 2019",tags:[{label:"dashboard",permalink:"/blog/tags/dashboard"}],readingTime:3,truncated:!0,prevItem:{title:"Announcing Stryker 3.0",permalink:"/blog/stryker-version-3"},nextItem:{title:"Announcing Stryker 2.0",permalink:"/blog/announcing-stryker-2-0"}},s=[{value:"Some examples",id:"some-examples",children:[]},{value:"Why do we need it?",id:"why-do-we-need-it",children:[]},{value:"Where can I get my own?",id:"where-can-i-get-my-own",children:[]},{value:"Eating our own dog food \ud83c\udf74\ud83d\udc36\ud83e\udd6b",id:"eating-our-own-dog-food-\ud83e\udd6b",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],u={toc:s};function l({components:t,...e}){return(0,a.kt)("wrapper",(0,o.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcca The Stryker Dashboard can now host your mutation testing report in the cloud."),(0,a.kt)("p",null,"If you're new to mutation testing, it's a way to measure how effective your tests are at finding bugs.\nPlease take a look at ",(0,a.kt)("a",{parentName:"p",href:"/example"},"our RoboBar \ud83e\udd16\ud83c\udf77 example")," and see how even 100% code coverage doesn't tell the whole story.\nMutation testing is the only way to make sure your code is tested."),(0,a.kt)("p",null,"Mutation testing is done by a mutation testing framework. After a mutation test run, you'll get a report that gives you all the details.\nSince mutation testing is still growing in popularity, there wasn't a convenient way yet to view the report in the cloud.\nThe Stryker Dashboard solves that problem."),(0,a.kt)("p",null,"The dashboard now has several new features:"),(0,a.kt)("p",null,"\ud83d\udc84 Store and show gorgeous reports.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83e\udd47 Brag about your mutation score with the mutation score badge.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udd00 Support for Git workflows with mutation reports per branch and tag.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udc09 Support for Monorepos. Multiple reports are aggregated to show a report of all your modules.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udcb8 Free for open source projects.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83e\udd1d Supports all Stryker mutation testing frameworks. Other frameworks will add support over time or you can send your report through a cURL request. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-handbook/blob/master/dashboard.md"},"the Stryker handbook")," for more details."),(0,a.kt)("h2",{id:"some-examples"},"Some examples"),(0,a.kt)("p",null,"Click on the links below to see some examples of mutation testing reports hosted in the Stryker Dashboard."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker-js/master"},"Stryker ",(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fstryker-mutator%2Fstryker%2Fmaster",alt:"badge"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker4s/master"},"Stryker4s ",(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fstryker-mutator%2Fstryker4s%2Fmaster",alt:"badge"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker-net/master"},"Stryker.NET ",(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fstryker-mutator%2Fstryker-net%2Fmaster",alt:"badge"})))),(0,a.kt)("h2",{id:"why-do-we-need-it"},"Why do we need it?"),(0,a.kt)("p",null,"Mutation testing can be time-consuming.\nUsing your PC to do it is fine for small projects, but for bigger projects, you really want to run it in your CI/CD pipeline."),(0,a.kt)("p",null,"This is also something we've experienced developing Stryker, the mutation testing framework for JavaScript and TypeScript.\nAt first, we would run Stryker on Stryker every week.\nBut as our codebase grew, this became impractical."),(0,a.kt)("p",null,"Luckily, running mutation testing in your CI/CD pipeline is a trivial task.\nMost mutation testing frameworks can be run from the command line.\nThis is also true for the Stryker family of frameworks."),(0,a.kt)("p",null,"The problem becomes: what is a convenient way to read the mutation testing report \ud83d\udc40?\nManually downloading files and opening them in your browser isn't a way anyone should be forced to spend an afternoon."),(0,a.kt)("h2",{id:"where-can-i-get-my-own"},"Where can I get my own?"),(0,a.kt)("p",null,"Getting up and running with the dashboard is simple."),(0,a.kt)("p",null,"\ud83c\udfaf Navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.stryker-mutator.io"},"dashboard.stryker-mutator.io")," and log in with your GitHub account.",(0,a.kt)("br",{parentName:"p"}),"\n","\u2705 Enable the Stryker Dashboard for your repository.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udd11 Configure your API key. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-handbook/blob/master/dashboard.md"},"the dashboard article on the Stryker handbook for the details"),(0,a.kt)("br",{parentName:"p"}),"\n","\ud83c\udfc3\u200d\u2640\ufe0f Run Stryker.NET, Stryker4s or Stryker (with the dashboard reporter enabled) and upload your first report."),(0,a.kt)("h2",{id:"eating-our-own-dog-food-\ud83e\udd6b"},"Eating our own dog food \ud83c\udf74\ud83d\udc36\ud83e\udd6b"),(0,a.kt)("p",null,"We are eating our own dog food since we're using the new dashboard features to make our own mutation testing reports visible.\nWe're naturally welcoming pull requests to help improve our tests.\nImproving tests is a good way to get to know a new codebase."),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("p",null,"We can't wait for people to start using the dashboard and give feedback.\nPlease enable it on your open-source project and tell us what you think!\nTogether, we'll be able to spread the word about mutation testing\nand test quality by making it more visible"),(0,a.kt)("p",null,"We'd like to get more mutation testing frameworks on board. To this date, ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/maks_rafalko/status/1207256423404638208"},"InfectionPHP")," for PHP,\n",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/1101_debian/status/1206613696564346881"},"Mull")," for C++ and ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/_pitest/status/1207251028653068288"},"Pitest")," for Java\nhave shown interest."),(0,a.kt)("p",null,"We're looking to improve the dashboard further. You can expect more features and open-source git providers to be added.\nWe're always looking for feedback, please don't hesitate to create ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-dashboard/issues/new"},"an issue"),"."))}l.isMDXComponent=!0}}]);