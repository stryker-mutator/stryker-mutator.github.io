(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[3089],{44428:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return d}});var r=t(67294),l=t(52263),n=t(3066),i=t(43146),s=t(36742),m=t(24973);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:l}=a;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=t(95601),g=t(86700);var d=function(e){const{metadata:a,items:t,sidebar:s}=e,{siteConfig:{title:m}}=(0,l.default)(),{blogDescription:d,blogTitle:u,permalink:p}=a,E="/"===p?m:u;return r.createElement(n.Z,{title:E,description:d,wrapperClassName:g.kM.wrapper.blogPages,pageClassName:g.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(c.Z,{sidebar:s})),r.createElement("main",{className:"col col--7"},t.map((({content:e})=>r.createElement(i.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.createElement(e,null)))),r.createElement(o,{metadata:a})))))}},43146:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var r=t(67294),l=t(86010),n=t(3905),i=t(24973),s=t(36742),m=t(3541),o=t(41217),c="blogPostTitle_GeHD",g="blogPostDate_fNvV",d=t(86700);var u=function(e){const a=function(){const{selectMessage:e}=(0,d.c2)();return a=>{const t=Math.ceil(a);return e(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}}(),{children:t,frontMatter:u,metadata:p,truncated:E,isBlogPostPage:h=!1}=e,{date:v,formattedDate:b,permalink:_,tags:N,readingTime:f}=p,{author:k,title:Z,image:T,keywords:w}=u,M=u.author_url||u.authorURL,L=u.author_title||u.authorTitle,y=u.author_image_url||u.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(o.Z,{keywords:w,image:T}),r.createElement("article",{className:h?void 0:"margin-bottom--xl"},(()=>{const e=h?"h1":"h2";return r.createElement("header",null,r.createElement(e,{className:(0,l.Z)("margin-bottom--sm",c)},h?Z:r.createElement(s.Z,{to:_},Z)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:v,className:g},b,f&&r.createElement(r.Fragment,null," \xb7 ",a(f)))),r.createElement("div",{className:"avatar margin-vert--md"},y&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:M},r.createElement("img",{src:y,alt:k})),r.createElement("div",{className:"avatar__intro"},k&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(s.Z,{href:M},k)),r.createElement("small",{className:"avatar__subtitle"},L)))))})(),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:m.Z},t)),(N.length>0||E)&&r.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),N.map((({label:e,permalink:a})=>r.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},e)))),E&&r.createElement("div",{className:"col text--right"},r.createElement(s.Z,{to:p.permalink,"aria-label":`Read more about ${Z}`},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},95601:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var r=t(67294),l=t(86010),n=t(36742),i="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",o="sidebarItem_2UVv",c="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";function d({sidebar:e}){return 0===e.items.length?null:r.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar")},r.createElement("h3",{className:s},e.title),r.createElement("ul",{className:m},e.items.map((e=>r.createElement("li",{key:e.permalink,className:o},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:g},e.title))))))}}}]);