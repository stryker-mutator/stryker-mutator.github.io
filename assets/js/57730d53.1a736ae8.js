(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[5212],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},32322:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(22122),a=(n(67294),n(3905));const o={title:"Research",custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/research.md"},i={unversionedId:"stryker-net/technical-reference/Research",id:"stryker-net/technical-reference/Research",isDocsHomePage:!1,title:"Research",description:"Stryker.NET wants to be a blazing fast mutation test framework. To achieve this some research has taken place before designing the framework.",source:"@site/docs/stryker-net/technical-reference/Research.md",sourceDirName:"stryker-net/technical-reference",slug:"/stryker-net/technical-reference/Research",permalink:"/docs/stryker-net/technical-reference/Research",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/research.md",version:"current",frontMatter:{title:"Research",custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/research.md"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/stryker-net/technical-reference/Introduction"},next:{title:"Mutant schemata",permalink:"/docs/stryker-net/technical-reference/Mutant-schemata"}},l=[{value:"Criteria",id:"criteria",children:[]},{value:"Options",id:"options",children:[]},{value:"Comparison",id:"comparison",children:[{value:"Mutating source code",id:"mutating-source-code",children:[]},{value:"Mutating byte code",id:"mutating-byte-code",children:[]},{value:"Mutant schemata (mutation switching)",id:"mutant-schemata-mutation-switching",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:l};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Stryker.NET wants to be a blazing fast mutation test framework. To achieve this some research has taken place before designing the framework."),(0,a.kt)("h2",{id:"criteria"},"Criteria"),(0,a.kt)("p",null,"The framework had to conform the following criteria:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Be fast"),(0,a.kt)("li",{parentName:"ul"},"Be able to show the exact location of the mutations to the user"),(0,a.kt)("li",{parentName:"ul"},"The following mutations should be able to be made",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Binary mutations"),(0,a.kt)("li",{parentName:"ul"},"Boolean mutations"),(0,a.kt)("li",{parentName:"ul"},"Logical mutations"),(0,a.kt)("li",{parentName:"ul"},"Conditional mutations"),(0,a.kt)("li",{parentName:"ul"},"Unary mutations"),(0,a.kt)("li",{parentName:"ul"},"Return value mutations")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"By looking at other frameworks two options could be found regarding architectures:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mutating source code (",(0,a.kt)("a",{parentName:"li",href:"https://stryker-mutator.io/"},"Stryker"),")"),(0,a.kt)("li",{parentName:"ul"},"Mutating byte code (",(0,a.kt)("a",{parentName:"li",href:"http://pitest.org/"},"PiTest"),")")),(0,a.kt)("p",null,"Later another architecture was found: mutant schemata (also dubbed mutation switching). This technique places all mutations inside if statements. Such an if statement could look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'if(Environment.GetEnvironmentVariable("ActiveMutation") == "1") {\n  i--; // mutated code\n} else {\n  i++; // original code\n}\n')),(0,a.kt)("h2",{id:"comparison"},"Comparison"),(0,a.kt)("p",null,"For each option a seperate prototype has been created. The results showed the following pros and cons. "),(0,a.kt)("h3",{id:"mutating-source-code"},"Mutating source code"),(0,a.kt)("p",null,"Pros:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exact location can be shown to users.")),(0,a.kt)("p",null,"Cons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Each mutation has to be compiled seperate. So mutating is slow.")),(0,a.kt)("h3",{id:"mutating-byte-code"},"Mutating byte code"),(0,a.kt)("p",null,"Pros:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fast")),(0,a.kt)("p",null,"Cons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mutators are difficult to create."),(0,a.kt)("li",{parentName:"ul"},"Exact location cannot be shown to users.")),(0,a.kt)("h3",{id:"mutant-schemata-mutation-switching"},"Mutant schemata (mutation switching)"),(0,a.kt)("p",null,"Pros:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All mutants can be compiled at once, so mutating is fast."),(0,a.kt)("li",{parentName:"ul"},"Exact location can be shown to users."),(0,a.kt)("li",{parentName:"ul"},"Mutated assembly can be kept in memory during mutation testruns."),(0,a.kt)("li",{parentName:"ul"},"Mutation coverage can be easily calculated."),(0,a.kt)("li",{parentName:"ul"},"Testing multiple mutations in one testrun is possible.")),(0,a.kt)("p",null,"Cons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Not all mutations are possible",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Mutating constant values"),(0,a.kt)("li",{parentName:"ul"},"Mutating method names"),(0,a.kt)("li",{parentName:"ul"},"Mutating access modifiers"))),(0,a.kt)("li",{parentName:"ul"},"Compile errors should not occur.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Since all mutations will compile at once, all mutations should compile correctly")))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Mutant schemata works fastest and the exact location for every mutation can be shown to the user. Stryker.NET has chosen the path of mutant schemata."))}u.isMDXComponent=!0}}]);