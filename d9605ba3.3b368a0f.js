(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(186)),i={custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/FolderComponents.md"},s={unversionedId:"stryker-net/ProjectComponents",id:"stryker-net/ProjectComponents",isDocsHomePage:!1,title:"ProjectComponents",description:"Stryker.NET uses custom classes to keep track of folders and files.",source:"@site/docs/stryker-net/ProjectComponents.md",slug:"/stryker-net/ProjectComponents",permalink:"/docs/stryker-net/ProjectComponents",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/FolderComponents.md",version:"current",sidebar:"docs",previous:{title:"Mutators",permalink:"/docs/stryker-net/Mutators"},next:{title:"RegexMutators",permalink:"/docs/stryker-net/RegexMutators"}},c=[{value:"UML of the classes in the namespace Stryker.Core.ProjectComponents",id:"uml-of-the-classes-in-the-namespace-strykercoreprojectcomponents",children:[]},{value:"Old Design",id:"old-design",children:[]},{value:"New Design",id:"new-design",children:[]},{value:"ReadOnly variants",id:"readonly-variants",children:[]}],l={rightToc:c};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Stryker.NET uses custom classes to keep track of folders and files."),Object(a.b)("p",null,"These FolderComponents and FileLeafs have readonly variants, this is done to ensure the mutated sourcecode and Mutants are not changed after the mutation is placed."),Object(a.b)("h3",{id:"uml-of-the-classes-in-the-namespace-strykercoreprojectcomponents"},"UML of the classes in the namespace Stryker.Core.ProjectComponents"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Folder Components",src:n(281).default})),Object(a.b)("h3",{id:"old-design"},"Old Design"),Object(a.b)("p",null,"The global structure was as follows: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"FolderComponent")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"FileLeaf"))),Object(a.b)("p",null,"With the abstract class they both implement:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ProjectComponent"))),Object(a.b)("h3",{id:"new-design"},"New Design"),Object(a.b)("p",null,"When implementing F# the old structure showed it's disadvantages since F# uses a different type to indicate syntaxtrees."),Object(a.b)("p",null,"To solve this ProjectComponent was made generic ",Object(a.b)("inlineCode",{parentName:"p"},"ProjectComponent<T>"),"."),Object(a.b)("p",null,"However many parts of stryker use ",Object(a.b)("inlineCode",{parentName:"p"},"FolderComponent")," and ",Object(a.b)("inlineCode",{parentName:"p"},"FileLeaf")," without needing access to the syntaxtrees or to know what language is used.\nFor this purpose the Interface IProjectComponent is used."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"IParentComponent")," and ",Object(a.b)("inlineCode",{parentName:"p"},"IFileLeaf")," are implemented for the same reason.\nThis enables code to ask for an ",Object(a.b)("inlineCode",{parentName:"p"},"IFileLeaf")," so It can access the elements that do not depend on the language, that being the syntaxtrees."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"IFileLeaf<T>")," is needed to have languageagnostic notation for the syntaxtrees."),Object(a.b)("h3",{id:"readonly-variants"},"ReadOnly variants"),Object(a.b)("p",null,"Not al code is created equaly, and not all parts of stryker need write access to the ProjectComponents.\nThis is why a IReadOnyProjectcomponent was created."),Object(a.b)("p",null,"When expanding into F# we found the implementation lacking and expanded upon it.\nThere are ReadOnly variants of ",Object(a.b)("inlineCode",{parentName:"p"},"FolderComponent")," and ",Object(a.b)("inlineCode",{parentName:"p"},"FileLeaf"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ReadOnlyFolderComponent"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ReadOnlyFileLeaf"))))),Object(a.b)("p",null,"The readonly variants do not need access to the syntaxtrees so they are languageagnostic which improves the expandability of Stryker.NET"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"FolderComponent")," and ",Object(a.b)("inlineCode",{parentName:"p"},"FileLeaf")," both contain the functions ",Object(a.b)("inlineCode",{parentName:"p"},"ToReadOnly()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ToReadOnlyInputComponent()"),".\n",Object(a.b)("inlineCode",{parentName:"p"},"ToReadOnly()")," returns the ReadOnly varient of said type. ",Object(a.b)("inlineCode",{parentName:"p"},"ToReadOnlyInputComponent()")," does the same, just casted to ",Object(a.b)("inlineCode",{parentName:"p"},"IReadOnlyProjectComponent"),"."))}p.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},281:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ProjectComponents-589acc0a52dc2622897d540128ffefc6.png"}}]);