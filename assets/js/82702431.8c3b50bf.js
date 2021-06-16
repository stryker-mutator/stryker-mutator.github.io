(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8424],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,k=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56712:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(22122),a=(n(67294),n(3905));const o={slug:"azure-pipelines-integration",title:"Integrating Stryker.NET in your azure pipelines",author:"Richard Werkman",author_title:"Stryker.NET Team",author_url:"https://github.com/richardwerkman",author_image_url:"https://avatars1.githubusercontent.com/u/14224500?s=460&u=189f6ef9ab6957063d0674f94c014bef39bf4653&v=4",tags:["stryker.net"]},i={permalink:"/blog/azure-pipelines-integration",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-05-15-azure-pipelines-integration.md",source:"@site/blog/2020-05-15-azure-pipelines-integration.md",title:"Integrating Stryker.NET in your azure pipelines",description:"Over the past few months we have been working hard to integrate Stryker.NET with azure pipelines. Learn how you can leverage our new features to include mutation testing in your continuous integration.",date:"2020-05-15T00:00:00.000Z",formattedDate:"May 15, 2020",tags:[{label:"stryker.net",permalink:"/blog/tags/stryker-net"}],readingTime:4.605,truncated:!0,prevItem:{title:"Announcing Stryker 4.0 Beta",permalink:"/blog/announcing-stryker-4-beta-mutation-switching"},nextItem:{title:"Announcing Stryker 100% mode",permalink:"/blog/announcing-100-mode"}},l=[{value:"\ud83d\ude80 Speed",id:"-speed",children:[]},{value:"\ud83d\udd0e Git integration",id:"-git-integration",children:[]},{value:"\u2728 Reporting",id:"-reporting",children:[]},{value:"\u26d4 Forcing test quality",id:"-forcing-test-quality",children:[]},{value:"\ud83c\udf86 Conclusion",id:"-conclusion",children:[]},{value:"\ud83d\udd2e What&#39;s next?",id:"-whats-next",children:[]}],s={toc:l};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Over the past few months we have been working hard to integrate Stryker.NET with azure pipelines. Learn how you can leverage our new features to include mutation testing in your continuous integration."),(0,a.kt)("p",null,"When using continuous integration it can be hard to keep track of quality. By integrating Stryker in your build pipelines you can ensure a continued focus on test quality, no matter how many changes your code gets to see."),(0,a.kt)("h2",{id:"-speed"},"\ud83d\ude80 Speed"),(0,a.kt)("p",null,"Stryker.NET is now faster than ever! This means you can run mutation testing for every pull request without waiting too long for your build to succeed."),(0,a.kt)("p",null,"Some performance improvements we have implemented:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mutation switching",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We compile all mutants at once using conditional statements around the mutations. When testing the mutants we only have to flip the switch to turn it on \ud83d\udd1b"))),(0,a.kt)("li",{parentName:"ul"},"Integration with VSTest",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is the fastest way to run your tests. And VSTest supports all well known test frameworks."))),(0,a.kt)("li",{parentName:"ul"},"Coverage analysis",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We do not test mutants that are not covered by any test. And we only run the tests that cover the mutant when testing that mutant."))),(0,a.kt)("li",{parentName:"ul"},"Testing mutants in parallel",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We run multiple test sessions at once to test the mutants even faster."))),(0,a.kt)("li",{parentName:"ul"},"Using the same test session for non overlapping mutants",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Mutants that are in a different file and have no overlapping covered tests are run in the same test session to remove the overhead of starting a new test session.")))),(0,a.kt)("p",null,"By implementing all these performance tweaks we can now proudly say we are fast enough to use in your pipeline! So if performance was holding you back, now is the moment to give Stryker.NET a try! \ud83d\ude80"),(0,a.kt)("h2",{id:"-git-integration"},"\ud83d\udd0e Git integration"),(0,a.kt)("p",null,"On large projects we can also use git to filter changed files in a pull request. That way only the changed code will be mutated. This helps to use mutation testing in pull request even on the largest projects."),(0,a.kt)("p",null,"How does this work? Simply run Stryker.NET with the following command in your PR build:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dotnet stryker --diff\n")),(0,a.kt)("p",null,"This will use the master branch as base by default. If you use a different branch as base for your pull requests you can change the base branch like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dotnet stryker --diff --git-source \"coalesce(variables['System.PullRequest.TargetBranch'], variables['Build.SourceBranchName'])\"\n")),(0,a.kt)("p",null,"This will get the pull request target branch, or the build source branch if no pull request target branch is available."),(0,a.kt)("p",null,"\ud83d\udca1 Tip:\nYou can use this feature locally too, if you want to quickly mutate your new feature."),(0,a.kt)("h2",{id:"-reporting"},"\u2728 Reporting"),(0,a.kt)("p",null,"Another feature we are proud of is our integration with azure devops."),(0,a.kt)("p",null,"You can now display the html report in your azure devops environment using an ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=stryker-mutator.mutation-report-publisher"},"azure devops extension"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87635).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(56952).Z})),(0,a.kt)("p",null,"The extension will add a new tab to your build result page. This new tab will contain the full html report that is also available locally and on the stryker dashboard."),(0,a.kt)("p",null,"How to use the extension:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the ",(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=stryker-mutator.mutation-report-publisher"},"extension")," on your azure devops environment"),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"dotnet stryker")," in your pipeline."),(0,a.kt)("li",{parentName:"ul"},"Make sure the ",(0,a.kt)("inlineCode",{parentName:"li"},"html reporter")," is enabled (default)."),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"publish mutation report")," task to your pipeline (after ",(0,a.kt)("inlineCode",{parentName:"li"},"dotnet stryker"),")"),(0,a.kt)("li",{parentName:"ul"},"Pass the path to the html report")),(0,a.kt)("p",null,"Example:\n",(0,a.kt)("img",{src:n(37454).Z})),(0,a.kt)("p",null,"\ud83d\udca1 Note: The extension does work for other mutation test frameworks as well. As long as the framework outputs a html report and you provide the location to the task, it will be displayed in your build result tab."),(0,a.kt)("h2",{id:"-forcing-test-quality"},"\u26d4 Forcing test quality"),(0,a.kt)("p",null,"It's great that it is now possible to monitor the test quality automatically. But if you want to take a step even further towards maintaining your test quality you can set a breaking threshold."),(0,a.kt)("p",null,"This will break your pipeline if a minimum mutation score wasn't reached."),(0,a.kt)("p",null,"How to use custom thresholds:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dotnet stryker --threshold-high 90 --threshold-low 75 --threshold-break 60\n")),(0,a.kt)("p",null,"or in ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker-config.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "stryker-config":\n    {\n        "threshold-high": 90,\n        "threshold-low": 75,\n        "threshold-break": 60\n    }\n}\n')),(0,a.kt)("p",null,"This will make Stryker return a non-zero exit code when the mutation score is below 60."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(17503).Z})),(0,a.kt)("p",null,"\ud83d\udca1 Tip:\nIf you think your mutation score is too low, try to increase the threshold every few months to gradually improve your tests."),(0,a.kt)("p",null,"\ud83d\udca1 Tip:\nIf you can't seem to kill a mutant, maybe the mutated code is not needed and can be safely removed."),(0,a.kt)("h2",{id:"-conclusion"},"\ud83c\udf86 Conclusion"),(0,a.kt)("p",null,"With all these features nothing stands in your way to go and add Stryker.NET to your build pipeline."),(0,a.kt)("p",null,"If we put all these features together your pipeline could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n- task: UseDotNet@2\ndisplayName: 'Use .Net Core runtime 3.1.x'\ninputs:\n    packageType: runtime\n    version: 3.1.x\n- task: DotNetCoreCLI@2\ndisplayName: 'Install dotnet tools for Stryker.CLI'\ninputs:\n    command: custom\n    custom: 'tool restore'\n    workingDirectory: 'src\\Stryker.CLI\\Stryker.CLI.UnitTest'\n- task: DotNetCoreCLI@2\ndisplayName: 'Run stryker on Stryker.CLI'\ninputs:\n    command: custom\n    custom: 'stryker --reporters \"[''dashboard'', ''html'']\" --threshold-high 90 --threshold-low 75 --threshold-break 60 --diff'\n    workingDirectory: 'src\\Stryker.CLI\\Stryker.CLI.UnitTest'\n- task: stryker-mutator.mutation-report-publisher.publish-mutation-report.publish-mutation-report@0\ndisplayName: 'Publish Mutation Test Report'\ninputs:\n    reportPattern: 'src\\Stryker.CLI\\Stryker.CLI.UnitTest\\**\\mutation-report.html'\n")),(0,a.kt)("p",null,"If you run into trouble during installation or running, please let us know so we can improve."),(0,a.kt)("h2",{id:"-whats-next"},"\ud83d\udd2e What's next?"),(0,a.kt)("p",null,"The upcoming months you can expect even more awesome features and improvements in Stryker.NET."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"git diff")," feature will be greatly improved and result in a full report."),(0,a.kt)("li",{parentName:"ul"},"Regex mutator (never seen before in mutation testing)"),(0,a.kt)("li",{parentName:"ul"},"Mutating a whole solution at once")),(0,a.kt)("p",null,"Want to help make Stryker even better? Check out our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-net/issues"},"open issues"),". Or help with implementing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/1514"},"mutation switching for Stryker (js)")))}u.isMDXComponent=!0},87635:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-devops-extension1-df924006f9db056386c1272353dee980.png"},37454:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-devops-extension2-4efaa064e4738aba5845296c6a82c790.png"},56952:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-devops-extension3-ae41ccf2157de44828c7dc9bb162c264.png"},17503:function(e,t,n){"use strict";t.Z=n.p+"assets/images/threshold-break-d641499daa8b61067d4f1c6a589c6ce1.png"}}]);