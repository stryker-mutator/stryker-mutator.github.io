"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8610],{8665:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(7294),n=a(6010),r=a(2773),i=a(9960),s="sidebar_a9qW",o="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",g="sidebarItemLink_miNk",u="sidebarItemLinkActive_RRTD",d=a(5999);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(s,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))))))}function h(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},6299:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(5999),r=a(1750);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&l.createElement(r.Z,{permalink:i,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8561:function(e,t,a){a.d(t,{Z:function(){return P}});var l=a(7294),n=a(6010),r=a(3905),i=a(5999),s=a(9960),o=a(4996),m=a(650),c=a(8780),g=a(4689),u=a(6753),d="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j",E=a(62),b="image_o0gy";function v(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function f(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:i,email:s}=t,o=r||s&&"mailto:"+s||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(v,{href:o},l.createElement("img",{className:b,src:i,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(v,{href:o,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var _="authorCol_FlmR",N="imageOnlyAuthorRow_trpF",Z="imageOnlyAuthorCol_S2np";function k(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",r?N:"row")},t.map(((e,t)=>{var i;return l.createElement("div",{className:(0,n.Z)(!r&&"col col--6",r?Z:_),key:t},l.createElement(f,{author:{...e,imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL}}))})))}function P(e){var t;const a=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:b}=(0,o.C)(),{children:v,frontMatter:f,assets:_,metadata:N,truncated:Z,isBlogPostPage:P=!1}=e,{date:T,formattedDate:w,permalink:y,tags:I,readingTime:L,title:M,editUrl:R,authors:A}=N,C=null!=(t=_.image)?t:f.image,x=!P&&Z,U=I.length>0,D=P?"h1":"h2";return l.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(D,{className:d,itemProp:"headline"},P?M:l.createElement(s.Z,{itemProp:"url",to:y},M)),l.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:T,itemProp:"datePublished"},w),void 0!==L&&l.createElement(l.Fragment,null," \xb7 ",a(L))),l.createElement(k,{authors:A,assets:_})),C&&l.createElement("meta",{itemProp:"image",content:b(C,{absolute:!0})}),l.createElement("div",{id:P?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:g.Z},v)),(U||Z)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[h]:P})},U&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":x})},l.createElement(E.Z,{tags:I})),P&&R&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:R})),x&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":U})},l.createElement(s.Z,{to:N.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:M})},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=a(7294),n=a(9960),r=a(8665),i=a(8561),s=a(5999),o=a(650),m=a(6299);function c(e){const{metadata:t,items:a,sidebar:c,listMetadata:g}=e,{allTagsPath:u,name:d,count:p}=t,h=function(){const{selectMessage:e}=(0,o.c2)();return t=>e(t,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),E=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(p),tagName:d});return l.createElement(r.Z,{title:E,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(n.Z,{href:u},l.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(m.Z,{metadata:g}))}},6753:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),n=a(5999),r=a(7462),i=a(6010),s="iconEdit_dcUD";function o(e){let{className:t,...a}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(650);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},l.createElement(o,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(9960);function r(e){const{permalink:t,title:a,subLabel:r}=e;return l.createElement(n.Z,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),n=a(6010),r=a(9960),i="tag_hD8n",s="tagRegular_D6E_",o="tagWithCount_i0QQ";function m(e){const{permalink:t,name:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(i,{[s]:!m,[o]:m})},a,m&&l.createElement("span",null,m))}},62:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),n=a(6010),r=a(5999),i=a(7774),s="tags_XVD_",o="tag_JSN8";function m(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:o},l.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);