(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149),o=a(155),l=a(153);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Experience"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(150);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Ariel Ahdoot"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(158),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,c=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=m},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Ariel Ahdoot",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},155:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(149),s=a(159),m=a(160);a(156);window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,a=document.getElementsByClassName("dropdown-content");for(t=0;t<a.length;t++){var n=a[t];n.classList.contains("show")&&n.classList.remove("show")}}};var d=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",justifyContent:"space-between",alignItems:"center"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement(m.a,{query:"(max-width: 800px)"},function(e){return e?i.a.createElement("div",{className:"dropdown"},i.a.createElement("button",{className:"dropbtn",onClick:function(){return(e=document.getElementById("myDropdown")).classList.toggle("show"),void console.log(e.classList);var e}},i.a.createElement("div",{className:"navbar-button"}),i.a.createElement("div",{className:"navbar-button"}),i.a.createElement("div",{className:"navbar-button"})),i.a.createElement("div",{className:"dropdown-content",id:"myDropdown"},i.a.createElement(c.a,{to:"/"},"Home"),i.a.createElement(c.a,{to:"/about-me"},"About Me"),i.a.createElement(c.a,{to:"/projects"},"Projects"),i.a.createElement(c.a,{to:"/experience"},"Experience"),i.a.createElement("a",{href:"Ariel.Ahdoot.pdf",target:"_blank"},"Resume"))):i.a.createElement("div",{className:"div-links"}," ",i.a.createElement(c.a,{to:"/",style:{marginLeft:0},className:"link",activeStyle:{color:"red"}},"Home"),i.a.createElement(c.a,{to:"/about-me",className:"link",activeStyle:{color:"red"}},"About Me"),i.a.createElement(c.a,{to:"/projects",className:"link",activeStyle:{color:"red"}},"Projects"),i.a.createElement(c.a,{to:"/experience",className:"link",activeStyle:{color:"red"}},"Experience"),i.a.createElement("a",{href:"Ariel.Ahdoot.pdf",target:"_blank",className:"link"},"Resume"))})))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var u=d,p=(a(157),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.a.createElement("div",{style:{alignSelf:"center"}},i.a.createElement("a",{href:"https://github.com/AAAhdoot",style:{fontSize:"2rem"}},i.a.createElement(s.a,null)),i.a.createElement("a",{href:"https://www.linkedin.com/in/ariel-ahdoot/",style:{fontSize:"2rem"}},i.a.createElement(s.b,null)),i.a.createElement("a",{href:"mailto:aaahdoot@gmail.com",style:{fontSize:"2rem"}},i.a.createElement(s.c,{style:{color:"rebeccaPurple"}}))),i.a.createElement("div",{style:{alignSelf:"center"}},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-experience-js-a1f5a785a637687283cd.js.map