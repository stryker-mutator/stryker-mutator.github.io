"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[9374],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(n),h=r,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return n?a.createElement(d,o(o({ref:e},c),{},{components:n})):a.createElement(d,o({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4208:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return l},toc:function(){return u},default:function(){return m}});var a=n(7462),r=(n(7294),n(3905));const i={title:"Static mutants",custom_edit_url:"https://github.com/stryker-mutator/mutation-testing-elements/edit/master/docs/static-mutants.md"},o=void 0,s={unversionedId:"mutation-testing-elements/static-mutants",id:"mutation-testing-elements/static-mutants",title:"Static mutants",description:"In mutation testing, not all mutants are created equal. The performance cost for some of them is higher than others. Of all mutants, static mutants have the most noticeable performance impact and are sometimes not even supported. This page explains what they are and how Stryker handles them.",source:"@site/docs/mutation-testing-elements/static-mutants.md",sourceDirName:"mutation-testing-elements",slug:"/mutation-testing-elements/static-mutants",permalink:"/docs/mutation-testing-elements/static-mutants",editUrl:"https://github.com/stryker-mutator/mutation-testing-elements/edit/master/docs/static-mutants.md",tags:[],version:"current",frontMatter:{title:"Static mutants",custom_edit_url:"https://github.com/stryker-mutator/mutation-testing-elements/edit/master/docs/static-mutants.md"},sidebar:"docs",previous:{title:"Supported mutators",permalink:"/docs/mutation-testing-elements/supported-mutators"},next:{title:"Introduction",permalink:"/docs/stryker-js/introduction"}},l={},u=[{value:"What is a static mutant",id:"what-is-a-static-mutant",level:2},{value:"How to deal with static mutants",id:"how-to-deal-with-static-mutants",level:2},{value:"Hybrid mutants",id:"hybrid-mutants",level:2},{value:"What Stryker does",id:"what-stryker-does",level:2}],c={toc:u};function m(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In mutation testing, not all mutants are created equal. The performance cost for some of them is higher than others. Of all mutants, ",(0,r.kt)("em",{parentName:"p"},"static mutants")," have the most noticeable performance impact and are sometimes not even supported. This page explains what they are and how Stryker handles them."),(0,r.kt)("h2",{id:"what-is-a-static-mutant"},"What is a static mutant"),(0,r.kt)("p",null,"A static mutant is a mutant that is executed once on startup instead of when the tests are running."),(0,r.kt)("p",null,"Take this small JavaScript example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// greet.js\nconst hi = '\ud83d\udc4b';\n\nexport function greet(name) {\n  return `${hi} ${name}`;\n}\n\n// greet.spec.js\nimport { greet } from './greet.js';\n\nit('should greet me', () => {\n  expect(greet('me')).toBe('\ud83d\udc4b me');\n});\n")),(0,r.kt)("p",null,"When you run StrykerJS on this code, it will create a mutant for the ",(0,r.kt)("inlineCode",{parentName:"p"},"hi")," constant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"-const hi = '\ud83d\udc4b';\n+const hi = '';\n")),(0,r.kt)("p",null,"All Stryker frameworks use mutant schemata, or mutation switching, to activate mutations during test executing. This means that the actual code Stryker produces looks more like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const hi = global.activeMutant === '1' ? '' : '\ud83d\udc4b';\n")),(0,r.kt)("p",null,"The goal is that Stryker would be able to activate this mutant during test execution by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"global.activeMutant")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"'1'"),". However, since this mutant is only executed once during startup, activating or de-activating the mutant won't help. The ",(0,r.kt)("inlineCode",{parentName:"p"},"hi")," const here is already declared, and activating mutant '1' doesn't change that."),(0,r.kt)("p",null,"This mutant is referred to as a ",(0,r.kt)("em",{parentName:"p"},"static mutant"),". They are executed once and cannot be activated or de-activated later during test runtime."),(0,r.kt)("p",null,"You can identify static mutants in your report with the \ud83d\uddff static emoji."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"static mutant",src:n(1108).Z,width:"820",height:"733"})),(0,r.kt)("p",null,"You can think of similar constructs in C# with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/static-constructors"},"static constructors")," or in Scala with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/tour/singleton-objects.html#inner-main"},"singleton objects")),(0,r.kt)("h2",{id:"how-to-deal-with-static-mutants"},"How to deal with static mutants"),(0,r.kt)("p",null,"You can deal with static mutants in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can ignore them",(0,r.kt)("br",null),'\nThe mutants will be shown in your report with the "Ignored" state and won\'t count towards your mutation score.'),(0,r.kt)("li",{parentName:"ol"},"You can run them",(0,r.kt)("br",null),"\nThe static mutants will get a fresh test environment to run in. This might require a browser page refresh or the creation of a new process or app domain. Test filtering is limited since per test coverage cannot be determined.")),(0,r.kt)("h2",{id:"hybrid-mutants"},"Hybrid mutants"),(0,r.kt)("p",null,'There are also static mutants that also have runtime coverage. For lack of a better word, let\'s call these "hybrid mutants" for now.'),(0,r.kt)("p",null,"Let's change our example so we can make our StringMutator mutant hybrid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// greet.js\nexport function createGreeter() {\n  const hi = '\ud83d\udc4b'; // \ud83d\udc7d mutated to empty string\n  return (name) => `${hi} ${name}`;\n}\nexport const greet = createGreeter();\n\n// greet.spec.js\nimport { createGreeter } from './greet.js';\n\nit('should greet me', () => {\n  const greeter = createGreeter();\n  expect(greeter('me')).toBe('\ud83d\udc4b me');\n});\n")),(0,r.kt)("p",null,"As you can see, we've moved the ",(0,r.kt)("inlineCode",{parentName:"p"},"hi")," constant to a factory method ",(0,r.kt)("inlineCode",{parentName:"p"},"createGreeter"),'. This method executes during unit testing in the "it should great me" test. However, the factory method also executes ',(0,r.kt)("em",{parentName:"p"},"during the loading of greet.js"),"."),(0,r.kt)("p",null,"In JavaScript, this is a common way to deal with dependency injection where you inject the dependencies using a factory method for unit testing. But, again, similar constructs can apply to C# and Scala code."),(0,r.kt)("p",null,"When dealing with hybrid mutants, we can think of a third way to handle them. Namely to only run the tests that directly cover the mutant instead of pessimistically executing all tests."),(0,r.kt)("h2",{id:"what-stryker-does"},"What Stryker does"),(0,r.kt)("p",null,"Different Stryker versions use different approaches here. In the table below, you can see which choices are available per framework."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Framework"),(0,r.kt)("th",{parentName:"tr",align:null},"Support run"),(0,r.kt)("th",{parentName:"tr",align:null},"Support ignore"),(0,r.kt)("th",{parentName:"tr",align:null},"Default for static"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StrykerJS"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705","*"),(0,r.kt)("td",{parentName:"tr",align:null},"Run all test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stryker.NET"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Run all test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stryker4s"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Ignore")))),(0,r.kt)("p",null,"*"," Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignoreStatic")," (new in StrykerJS v6.0)"),(0,r.kt)("p",null,"When you use ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignoreStatic"),", static mutants are ignored. For hybrid mutants, Stryker assumes that the mutant should be killed by the tests that cover the mutant at runtime and they are therefore handled as any other runtime mutant. Thus, in as sense, Stryker will ignore the ",(0,r.kt)("em",{parentName:"p"},"static part")," of hybrid mutants."))}m.isMDXComponent=!0},1108:function(t,e,n){e.Z=n.p+"assets/images/static-mutant-5489518fa06d2e01df40cc03d90eeebe.png"}}]);