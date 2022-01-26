"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6103],{8665:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),l=a(6010),r=a(3346),i=a(9960),o="sidebar_a9qW",s="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",u="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",g=a(5999);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))))))}var v=function(e){const{sidebar:t,toc:a,children:i,...o}=e,s=t&&t.items.length>0;return n.createElement(r.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},s&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},8561:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7294),l=a(6010),r=a(3905),i=a(5999),o=a(9960),s=a(4996),m=a(5773),c=a(8780),u=a(4689),d=a(6753),g="blogPostTitle_rzP5",p="blogPostData_Zg1s",v="blogPostDetailsFull_h6_j",h=a(62),b="image_o0gy";var E=function(e){let{author:t}=e;const{name:a,title:l,url:r,imageURL:i}=t;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:b,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},_="authorCol_FlmR",f="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?f:"row")},t.map(((e,t)=>{var i;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?N:_),key:t},n.createElement(E,{author:{...e,imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL}}))})))}var k=function(e){var t;const a=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:b}=(0,s.C)(),{children:E,frontMatter:_,assets:f,metadata:N,truncated:k,isBlogPostPage:P=!1}=e,{date:C,formattedDate:L,permalink:y,tags:T,readingTime:w,title:I,editUrl:x,authors:A}=N,M=null!=(t=f.image)?t:_.image,R=!P&&k,H=T.length>0,U=P?"h1":"h2";return n.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(U,{className:g,itemProp:"headline"},P?I:n.createElement(o.Z,{itemProp:"url",to:y},I)),n.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},n.createElement("time",{dateTime:C,itemProp:"datePublished"},L),void 0!==w&&n.createElement(n.Fragment,null," \xb7 ",a(w))),n.createElement(Z,{authors:A,assets:f})),M&&n.createElement("meta",{itemProp:"image",content:b(M,{absolute:!0})}),n.createElement("div",{id:P?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:u.Z},E)),(H||k)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",{[v]:P})},H&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":R})},n.createElement(h.Z,{tags:T})),P&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:x})),R&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":H})},n.createElement(o.Z,{to:N.permalink,"aria-label":"Read more about "+I},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),l=a(1217),r=a(8665),i=a(8561),o=a(7462),s=a(5999),m=a(1750);var c=function(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,(0,o.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(m.Z,(0,o.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))},u=a(5773),d=a(1575);var g=function(e){var t;const{content:a,sidebar:o}=e,{assets:s,metadata:m}=a,{title:g,description:p,nextItem:v,prevItem:h,date:b,tags:E,authors:_,frontMatter:f}=m,{hide_table_of_contents:N,keywords:Z,toc_min_heading_level:k,toc_max_heading_level:P}=f,C=null!=(t=s.image)?t:f.image;return n.createElement(r.Z,{wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage,sidebar:o,toc:!N&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},n.createElement(l.Z,{title:g,description:p,keywords:Z,image:C},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),_.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:_.map((e=>e.url)).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((e=>e.label)).join(",")})),n.createElement(i.Z,{frontMatter:f,assets:s,metadata:m,isBlogPostPage:!0},n.createElement(a,null)),(v||h)&&n.createElement(c,{nextItem:v,prevItem:h}))}},6753:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(5999),r=a(7462),i=a(6010),o="iconEdit_dcUD";var s=function(e){let{className:t,...a}=e;return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},m=a(5773);function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(s,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){var n=a(7294),l=a(9960);t.Z=function(e){const{permalink:t,title:a,subLabel:r}=e;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},1575:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),l=a(7294),r=a(6010),i=a(5002),o="tableOfContents_cNA8";var s=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),l=a(7294),r=a(5773);function i(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function o(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:c,...u}=e;const d=(0,r.LU)(),g=null!=m?m:d.tableOfContents.minHeadingLevel,p=null!=c?c:d.tableOfContents.maxHeadingLevel,v=(0,r.DA)({toc:t,minHeadingLevel:g,maxHeadingLevel:p}),h=(0,l.useMemo)((()=>{if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:p}}),[o,s,g,p]);return(0,r.Si)(h),l.createElement(i,(0,n.Z)({toc:v,className:a,linkClassName:o},u))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(6010),r=a(9960),i="tag_hD8n",o="tagRegular_D6E_",s="tagWithCount_i0QQ";var m=function(e){const{permalink:t,name:a,count:m}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,{[o]:!m,[s]:m})},a,m&&n.createElement("span",null,m))}},62:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(6010),r=a(5999),i=a(7774),o="tags_XVD_",s="tag_JSN8";function m(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);