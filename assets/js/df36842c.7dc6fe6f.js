(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[271],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},89350:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return l},default:function(){return s}});var n=r(22122),o=(r(67294),r(3905));const i={title:"Introduction",custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/introduction.md"},c=void 0,a={unversionedId:"stryker-net/technical-reference/introduction",id:"stryker-net/technical-reference/introduction",isDocsHomePage:!1,title:"Introduction",description:"Welcome to the Stryker.NET technical references! In this wiki you will find background knowledge about Stryker.NET and some technical details.",source:"@site/docs/stryker-net/technical-reference/introduction.md",sourceDirName:"stryker-net/technical-reference",slug:"/stryker-net/technical-reference/introduction",permalink:"/docs/stryker-net/technical-reference/introduction",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/introduction.md",version:"current",frontMatter:{title:"Introduction",custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/introduction.md"},sidebar:"docs",previous:{title:"Updating",permalink:"/docs/stryker-net/updating"},next:{title:"Research",permalink:"/docs/stryker-net/technical-reference/research"}},l=[{value:"Why Stryker.NET",id:"why-strykernet",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Background",id:"background",children:[]}],u={toc:l};function s({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the Stryker.NET technical references! In this wiki you will find background knowledge about Stryker.NET and some technical details."),(0,o.kt)("h3",{id:"why-strykernet"},"Why Stryker.NET"),(0,o.kt)("p",null,"Before Stryker moved to .NET there already were some mutation testing tools available for mutantion testing C# code. None seemed to be able to mutate .NET Core projects. With Stryker.NET we wanted to broaden the mutation test landscape. "),(0,o.kt)("h3",{id:"goals"},"Goals"),(0,o.kt)("p",null,"Our long term goals are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Offer broad support for .NET projects",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},".NET Framework 4.6+ "),(0,o.kt)("li",{parentName:"ul"},".NET Core 1.0+"),(0,o.kt)("li",{parentName:"ul"},".NET 5+"),(0,o.kt)("li",{parentName:"ul"},"C#"),(0,o.kt)("li",{parentName:"ul"},"F#"))),(0,o.kt)("li",{parentName:"ul"},"Be a blazing fast mutation test framework"),(0,o.kt)("li",{parentName:"ul"},"Have the most detailed reporting experience for tracking down bugs")),(0,o.kt)("h3",{id:"background"},"Background"),(0,o.kt)("p",null,"Stryker.NET is the result of an internship and became open-source in July 2018."))}s.isMDXComponent=!0}}]);