(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(149),s=a(155),o=a(169),l=a(170),d=a.n(l),c=function(){return i.a.createElement(n.b,{query:"1636103232",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})},u=a(153);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(u.a,{title:"Home"}),i.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},i.a.createElement("h1",null,"Hey everyone, welcome to my site! "),i.a.createElement("h2",null,"I'm Ariel, a software engineer based in New York."),i.a.createElement("p",null,"Take a look around, and let me know if you have any questions!"),i.a.createElement("div",{style:{width:"300px",marginBottom:"1.45rem"}},i.a.createElement(c,null))))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(150);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(e,t,a){var r;e.exports=(r=a(152))&&r.default||r},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Ariel Ahdoot"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},153:function(e,t,a){"use strict";var r=a(154),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(158),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,o=r.data.site,l=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Ariel Ahdoot",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},155:function(e,t,a){"use strict";var r=a(151),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(149),d=a(159),c=a(160);a(156);document.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,a=document.getElementsByClassName("dropdown-content");for(t=0;t<a.length;t++){var r=a[t];r.classList.contains("show")&&r.classList.remove("show")}}};var u=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",justifyContent:"space-between",alignItems:"center"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),n.a.createElement(c.a,{query:"(max-width: 800px)"},function(e){return e?n.a.createElement("div",{className:"dropdown"},n.a.createElement("button",{className:"dropbtn",onClick:function(){return(e=document.getElementById("myDropdown")).classList.toggle("show"),void console.log(e.classList);var e}},n.a.createElement("div",{className:"navbar-button"}),n.a.createElement("div",{className:"navbar-button"}),n.a.createElement("div",{className:"navbar-button"})),n.a.createElement("div",{className:"dropdown-content",id:"myDropdown"},n.a.createElement(l.a,{to:"/"},"Home"),n.a.createElement(l.a,{to:"/about-me"},"About Me"),n.a.createElement(l.a,{to:"/projects"},"Projects"),n.a.createElement(l.a,{to:"/experience"},"Experience"),n.a.createElement("a",{href:"Ariel.Ahdoot.pdf",target:"_blank"},"Resume"))):n.a.createElement("div",{className:"div-links"}," ",n.a.createElement(l.a,{to:"/",style:{marginLeft:0},className:"link",activeStyle:{color:"red"}},"Home"),n.a.createElement(l.a,{to:"/about-me",className:"link",activeStyle:{color:"red"}},"About Me"),n.a.createElement(l.a,{to:"/projects",className:"link",activeStyle:{color:"red"}},"Projects"),n.a.createElement(l.a,{to:"/experience",className:"link",activeStyle:{color:"red"}},"Experience"),n.a.createElement("a",{href:"Ariel.Ahdoot.pdf",target:"_blank",className:"link"},"Resume"))})))};u.propTypes={siteTitle:o.a.string},u.defaultProps={siteTitle:""};var A=u,f=(a(157),function(e){var t=e.children;return n.a.createElement(l.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(A,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null,n.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},n.a.createElement("div",{style:{alignSelf:"center"}},n.a.createElement("a",{href:"https://github.com/AAAhdoot",style:{fontSize:"2rem"}},n.a.createElement(d.a,null)),n.a.createElement("a",{href:"https://www.linkedin.com/in/ariel-ahdoot/",style:{fontSize:"2rem"}},n.a.createElement(d.b,null)),n.a.createElement("a",{href:"mailto:aaahdoot@gmail.com",style:{fontSize:"2rem"}},n.a.createElement(d.c,{style:{color:"rebeccaPurple"}}))),n.a.createElement("div",{style:{alignSelf:"center"}},"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:r})});f.propTypes={children:o.a.node.isRequired};t.a=f},169:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEA//EABYBAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABiox3bsRmTM7zVbFof//EABkQAAIDAQAAAAAAAAAAAAAAAAECAAMhEv/aAAgBAQABBQJgWdO6wLBFOl86MJhbOpYgCDSyKs//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPwEj/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAgICAwAAAAAAAAAAAAAAAAERITEyECAz/9oACAEBAAY/AtYk1pnkiy2yukrPGD//xAAcEAEAAgMBAQEAAAAAAAAAAAABABEhMUFRYZH/2gAIAQEAAT8hYpmaJuW3GcSvs/Y4Voey+utiwq4nszKfIaa35LewAVdQVB2IABE6T//aAAwDAQACAAMAAAAQ0PY9/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERECH/2gAIAQMBAT8QSo7lZ//EABgRAQADAQAAAAAAAAAAAAAAAAARITFB/9oACAECAQE/EOLal//EAB0QAQADAAIDAQAAAAAAAAAAAAEAESExQXGBofD/2gAIAQEAAT8QUcMGWnzzE0UqLaSvWQTL962vvcMSnBtMY0egity1F6oJebsVA8CdkXP51AsFNcAclPUdUCq2Cjw3tfD9J//Z",aspectRatio:.6689342403628118,src:"/static/aa44e674dc3e8fbe71234dce4b5df519/c83a6/ProfilePhoto-smaller.jpg",srcSet:"/static/aa44e674dc3e8fbe71234dce4b5df519/24f62/ProfilePhoto-smaller.jpg 75w,\n/static/aa44e674dc3e8fbe71234dce4b5df519/cb3d3/ProfilePhoto-smaller.jpg 150w,\n/static/aa44e674dc3e8fbe71234dce4b5df519/c83a6/ProfilePhoto-smaller.jpg 300w,\n/static/aa44e674dc3e8fbe71234dce4b5df519/f709c/ProfilePhoto-smaller.jpg 450w,\n/static/aa44e674dc3e8fbe71234dce4b5df519/775d9/ProfilePhoto-smaller.jpg 600w,\n/static/aa44e674dc3e8fbe71234dce4b5df519/1492f/ProfilePhoto-smaller.jpg 2655w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},170:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(75)),l=r(a(76)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,g=p&&window.IntersectionObserver,h=new WeakMap;var E=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+i+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:s,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&f(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&g&&!t.critical&&!a.seenBefore;var r=t.critical||p&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,m=e.fluid,p=e.fixed,g=e.backgroundColor,h=e.durationFadeIn,E=e.Tag,w=e.itemProp,v=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,l.default)({opacity:S?1:0,transition:j?"opacity "+h+"ms":"none"},o),I="boolean"==typeof g?"lightgray":g,L={transitionDelay:h+"ms"},R=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&L,o,A),N={title:t,alt:this.state.isVisible?"":a,style:R,className:f};if(m){var x=m;return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),I&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&L)}),x.base64&&d.default.createElement(y,(0,l.default)({src:x.base64},N)),x.tracedSVG&&d.default.createElement(y,(0,l.default)({src:x.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:a,title:t,loading:v},x))}}))}if(p){var P=p,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete C.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},I&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:I,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},j&&L)}),P.base64&&d.default.createElement(y,(0,l.default)({src:P.base64},N)),P.tracedSVG&&d.default.createElement(y,(0,l.default)({src:P.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,P.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:P.srcSetWebp,sizes:P.sizes}),d.default.createElement(y,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:a,title:t,loading:v},P))}}))}return null},t}(d.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var j=w;t.default=j}}]);
//# sourceMappingURL=component---src-pages-index-js-de1c15456a62397779db.js.map