(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(149),i=a(155),l=a(153);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Projects"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(150);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Ariel Ahdoot"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,a){"use strict";var n=a(154),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(158),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,c=t||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=m},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Ariel Ahdoot",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},155:function(e,t,a){"use strict";var n=a(151),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(149),s=a(159),m=a(160);a(156);var d=function(e){var t=e.siteTitle;return Object(r.useEffect)(function(){window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,a=document.getElementsByClassName("dropdown-content");for(t=0;t<a.length;t++){var n=a[t];n.classList.contains("show")&&n.classList.remove("show")}}}},[]),o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",justifyContent:"space-between",alignItems:"center"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),o.a.createElement(m.a,{query:"(max-width: 800px)"},function(e){return e?o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{className:"dropbtn",onClick:function(){document.getElementById("myDropdown").classList.toggle("show")}},o.a.createElement("div",{className:"navbar-button"}),o.a.createElement("div",{className:"navbar-button"}),o.a.createElement("div",{className:"navbar-button"})),o.a.createElement("div",{className:"dropdown-content",id:"myDropdown"},o.a.createElement(c.a,{to:"/"},"Home"),o.a.createElement(c.a,{to:"/about-me"},"About Me"),o.a.createElement(c.a,{to:"/projects"},"Projects"),o.a.createElement(c.a,{to:"/experience"},"Experience"),o.a.createElement("a",{href:"Ariel.Ahdoot.pdf",target:"_blank"},"Resume"))):o.a.createElement("div",{className:"div-links"}," ",o.a.createElement(c.a,{to:"/",style:{marginLeft:0},className:"link",activeStyle:{color:"red"}},"Home"),o.a.createElement(c.a,{to:"/about-me",className:"link",activeStyle:{color:"red"}},"About Me"),o.a.createElement(c.a,{to:"/projects",className:"link",activeStyle:{color:"red"}},"Projects"),o.a.createElement(c.a,{to:"/experience",className:"link",activeStyle:{color:"red"}},"Experience"),o.a.createElement("a",{href:"Ariel.Ahdoot.pdf",target:"_blank",className:"link"},"Resume"))})))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var u=d,p=(a(157),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t),o.a.createElement("footer",null,o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement("div",{style:{alignSelf:"center"}},o.a.createElement("a",{href:"https://github.com/AAAhdoot",style:{fontSize:"2rem"}},o.a.createElement(s.a,null)),o.a.createElement("a",{href:"https://www.linkedin.com/in/ariel-ahdoot/",style:{fontSize:"2rem"}},o.a.createElement(s.b,{style:{color:"rebeccaPurple"}})),o.a.createElement("a",{href:"mailto:aaahdoot@gmail.com",style:{fontSize:"2rem"}},o.a.createElement(s.c,{style:{color:"rebeccaPurple"}}))),o.a.createElement("div",{style:{alignSelf:"center"}},"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-projects-js-5c7383d2db0a473f7068.js.map