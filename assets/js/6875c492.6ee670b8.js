"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8610],{8665:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(7294),l=a(6010),n=a(3346),s=a(9960),m="sidebar_a9qW",i="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",u="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",d=a(5999);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((e=>r.createElement("li",{key:e.permalink,className:c},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))))))}var h=function(e){const{sidebar:t,toc:a,children:s,...m}=e,i=t&&t.items.length>0;return r.createElement(n.Z,m,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},i&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},8561:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(7294),l=a(6010),n=a(3905),s=a(5999),m=a(9960),i=a(4996),o=a(5773),c=a(8780),u=a(4689),g=a(6753),d="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j",E=a(62),b="image_o0gy";var f=function(e){let{author:t}=e;const{name:a,title:l,url:n,imageURL:s}=t;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:b,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(m.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},v="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?_:"row")},t.map(((e,t)=>{var s;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?N:v),key:t},r.createElement(f,{author:{...e,imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL}}))})))}var k=function(e){var t;const a=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:b}=(0,i.C)(),{children:f,frontMatter:v,assets:_,metadata:N,truncated:k,isBlogPostPage:P=!1}=e,{date:T,formattedDate:w,permalink:y,tags:C,readingTime:I,title:L,editUrl:M,authors:R}=N,U=null!=(t=_.image)?t:v.image,D=!P&&k,x=C.length>0,A=P?"h1":"h2";return r.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(A,{className:d,itemProp:"headline"},P?L:r.createElement(m.Z,{itemProp:"url",to:y},L)),r.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:T,itemProp:"datePublished"},w),void 0!==I&&r.createElement(r.Fragment,null," \xb7 ",a(I))),r.createElement(Z,{authors:R,assets:_})),U&&r.createElement("meta",{itemProp:"image",content:b(U,{absolute:!0})}),r.createElement("div",{id:P?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:u.Z},f)),(x||k)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",{[h]:P})},x&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":D})},r.createElement(E.Z,{tags:C})),P&&M&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:M})),D&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":x})},r.createElement(m.Z,{to:N.permalink,"aria-label":"Read more about "+L},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),l=a(9960),n=a(8665),s=a(8561),m=a(5999),i=a(5773);function o(e){const{metadata:t,items:a,sidebar:o}=e,{allTagsPath:c,name:u,count:g}=t,d=function(){const{selectMessage:e}=(0,i.c2)();return t=>e(t,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),p=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:d(g),tagName:u});return r.createElement(n.Z,{title:p,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:o},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,p),r.createElement(l.Z,{href:c},r.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},6753:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),l=a(5999),n=a(7462),s=a(6010),m="iconEdit_dcUD";var i=function(e){let{className:t,...a}=e;return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},o=a(5773);function c(e){let{editUrl:t}=e;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},r.createElement(i,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),l=a(6010),n=a(9960),s="tag_hD8n",m="tagRegular_D6E_",i="tagWithCount_i0QQ";var o=function(e){const{permalink:t,name:a,count:o}=e;return r.createElement(n.Z,{href:t,className:(0,l.Z)(s,{[m]:!o,[i]:o})},a,o&&r.createElement("span",null,o))}},62:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),l=a(6010),n=a(5999),s=a(7774),m="tags_XVD_",i="tag_JSN8";function o(e){let{tags:t}=e;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return r.createElement("li",{key:a,className:i},r.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);