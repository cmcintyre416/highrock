(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),l=i(a("8OQS")),c=i(a("pVnL")),o=i(a("q1tI")),d=i(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,S=v&&window.IntersectionObserver,E=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},i&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),o.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function A(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function N(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+o+s+l+a+i+t+n+r+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=o.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=o.default.createElement(O,(0,c.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?o.default.createElement("picture",null,r(i),l):l})),O=o.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,S=e.Tag,E=e.itemProp,w=e.loading,N=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,c.default)({opacity:R?1:0,transition:z?"opacity "+v+"ms":"none"},l),T="boolean"==typeof b?"lightgray":b,k={transitionDelay:v+"ms"},q=(0,c.default)({opacity:this.state.imgLoaded?0:1},z&&k,{},l,{},f),x={title:t,alt:this.state.isVisible?"":a,style:q,className:m,itemProp:E};if(g){var M=g,j=p(g);return o.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),T&&o.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&k)}),j.base64&&o.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:x,imageVariants:M,generateSources:L}),j.tracedSVG&&o.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:x,imageVariants:M,generateSources:A}),this.state.isVisible&&o.default.createElement("picture",null,y(M),o.default.createElement(O,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:w},j,{imageVariants:M}))}}))}if(h){var U=h,H=p(h),W=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete W.display,o.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},T&&o.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},z&&k)}),H.base64&&o.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:x,imageVariants:U,generateSources:L}),H.tracedSVG&&o.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:x,imageVariants:U,generateSources:A}),this.state.isVisible&&o.default.createElement("picture",null,y(U),o.default.createElement(O,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:w},H,{imageVariants:U}))}}))}return null},t}(o.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});z.propTypes={resolutions:P,sizes:T,fixed:d.default.oneOfType([P,d.default.arrayOf(P)]),fluid:d.default.oneOfType([T,d.default.arrayOf(T)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=z;t.default=k},Lxwa:function(e){e.exports=JSON.parse('{"data":{"allStrapiServices":{"nodes":[{"icon":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFLklEQVQ4y1WUWWwTZxDHN0ApalHbh4rel1ClPtEXqlaoUiv14KEVD31AJM0DqJQjKVI5CkmhhLaEQAQEqpJWKTQkTZMG7NiJiZ2D3LaT+IqPHI7jOLEdH2vv+ort+Fh//64XiMJIo9n5vm9+OzPfp6EoXpzBqKAXKi/mXUokkT3Lm/XUQ9lQ8PTmou9qNlNrBEDBwODQus6uXsFXqscoSbuMolxMTNC8jOmNT+StRNz2iUajVY2M6YvjQFmLqG3wm72F5ms3bpb7o9zH9/vvr1sLl3bcE6xc0U2twpzB2GpG1kXPJdeSFyNKNdyBMMYNEzhXVopDJUeg1JkRTHJa9biuY3hEte9RTPtDqCA8VIA5megLfOkDTDKHeR/LWawLHP/XjN4yy0nlA9zhktJMZ98QSfD1zjrc0OkM6OrulX/w3vYN+fhrNVcEmJC+MxB52RWMzYUzwFIokXUzy8Q8M0/G9UYyZXPAH1mBec5FrC6aBBI5zuZhMpN2F8a1E7Da5t8QGB72QSvm3N71bnZ5LJoDvNGVtI8PtljnIZHKSG1dA7lUUwdRpxJ0EiSQzBFfOEHcdJg4/RGuoaUd03Mu8dqeUp5w9Gy+DG84nnZ4gtBOmIhaM0F0BhOMihsYvv4Vhq59iU7xbdQ33cXtf8SQdo3D7Y+QA4U7uUOl36O84vKBB/1LY4s7CmbS7oVKO5UzKFuR7d1G6JES3p+EcrAHi+JDyDa8jpqS7ThQcgzd9Uchr91NHNNKsOrfOc2VF6ESlczzOW2iaHru2zTbj8UZeVZjshO9po94hn/A9PANaPRGVFeW43pdK2YMfbh1+Thazu0AZJsQvfM8kl3vkGR8iYAd4HL+e/BnsIuKmf5sQM8r4OSvZf3eSSKVj0AkG4La6IROJQMzeBx0gIVpxoHaWy24XXMUmf6doJtfAtdOEY+mgjhC4K8SSGW4airEhAYw/CmgfJdbjjnJtFKDXrkcMwsuqEY10E8YYbDMwDw1i/OVlXyvqmCcssF0/ypSilfhGywiQ+PWrMfnRySe+o9aiqBPUncUkvoznI+/xVTIBj/LwsPftM1NQ2uexbjeBIlMjj2FhSj+uhAiSQfRWJxEO9YPh+oc0elHM2brAlzegIJiYqm/tJY5KLXmbDBBiMc+SuiAD0kOCESW4ViwY9bpJ/LuPnKyrBynyn4kUlkntAZjTq2bzGotdlgdznzFSGdzF6jlVG533lkBsrE0IVVVlUTR3kHya0zAT0LNOxBx9RAnkyKmaVs+W047Ycnky3bTLOhQLJMhmOOP1/P6FhVJcBtjycw0/6YRT3PZqqpqNDY25YEkyLDEP9VDCJfMpThw4UQq56JD8IfjWPAGGR8TvSMStTVWV53f+tjDTqa5z4WUeWrTvy1ZsVjKpbLIzc4vwmxzkyweSGwlA3Z55U4oyR0xTVo/bGy+W1Rb9/evp89UnOa3KUWXooBKZnLrHs63g24vDZFYAiU/ZRI83eH2EaeHBp9JW5xDqXbSlrD72NI+lW6rYkD1S3f/yL6GxuYv+Nin8oyrV3+jKD4patpqF6A0w+7y+ump1ta7yhzBLi8b/2jeHfjsxImTe4qKivff6+l7kw9+0mJ3KvlxB29k5dKjKlVa02PTlxpWawTowqw9P4o2PtrbW7z3mVOnyhd+OluBY8dP7syvma325/zR5PtSWfeGw/sPFijHDMLZygs8P5Mjq9AZm311EjNseP2oziTMycam1i21f9x8O//988XqgrX9t9jdgvUupwT7P508I+V6e1qIAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/0c904c2282a6a5b207ea93e611686af7/ee604/19b26dceacd2ee59500915d496e1f5be.png","srcSet":"/static/0c904c2282a6a5b207ea93e611686af7/69585/19b26dceacd2ee59500915d496e1f5be.png 200w,\\n/static/0c904c2282a6a5b207ea93e611686af7/497c6/19b26dceacd2ee59500915d496e1f5be.png 400w,\\n/static/0c904c2282a6a5b207ea93e611686af7/ee604/19b26dceacd2ee59500915d496e1f5be.png 800w,\\n/static/0c904c2282a6a5b207ea93e611686af7/31987/19b26dceacd2ee59500915d496e1f5be.png 1000w","sizes":"(max-width: 800px) 100vw, 800px"}}},"description":"At High Rock\'s Private Client division, we manage money for individuals, families, professional and private corporations on a Separately Managed Account (SMA) basis.  ","id":"Services_1","slug":"private-client-wealth-management","title":"Private Client Wealth Management"},{"icon":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFLUlEQVQ4y22UaUxUVxTHnxjbNGnSNmlqbWJN69aYmtamjTWNaVObxqJdMa6IWMEqIkKhRGDAKRQUqrgxDA6CgsoqWkWQmhI2h9IRBwQURRYRZmGY7c361vvve2NBP/R8mXvPnPM7/3NO7qMoyUTdijni3a2bqwHqWXMb/3xFaFy+jLm949Vn/SYHM3PCyQbOZgdLTZ2nTWx+7SPcmg+i+6RD6N32hcEh7DJ40GG7m+8g1+cS7+0ok8mFGqOdCR8121+Uc2iaoyw0GySfLRJw0sU9BQqtCz9G4yygYyHsZj0m3MDFa1poSzcArbNhbvgG+r5h0CxgsjMjksKfpnInaXam/GulWco2BcV1ai6jXZXDtLzvt030or3rkRC3L1Y4lplAms5sJeXqZFGtLuQHRi28DPWKgNTmDUnhnADMxQWgDi9PUc77qhnyZcSHMnYoH+TWKr7jziOiTFVAlVdA0jNPkF+VmaSoqIQMjIwTm8snTrpEjgEwSXPjkrKlcr7N/QQaMKPNu87DAwYbL+Lvz0hXQyKSFdk4fUqF3JwspB9QoqTwKPE2ryb8zWCYjA/h9IPzSTkSaNLu4RbJHLuHD5raWpNc0ewBT482wlw9m6QkxeOE6jyyDh1DXFwSDiuj4al7F766pSQ3I4Y0tnbCw4JjCeDw8L0On/BCADZh979joTmutVWHkcdmYmFARH0U9EULcFETjar8CCTs3YLdu2OQpYhGelIUvv0+hJxUFRBOgtldrDRVgPbyOdSTlTMRHslxr29AGDM7CO20kYd9HXhQ8gEeV3wIS+VS3D/7FiIjtiMychc2bQnD2q/XQq0pJhxAJHWiR5Lp8gtut198k5Jml2v3i9DeGeDGB7sA7UoY6oJxICUVKlUhDmcfwXjJfGjSP8eG0Ghs3LAewWvWoKyqSurXRmivn3gYwssqvYwQIyn0V1y51gCFIo1PS1USXVEI0PY22s5th0pdiuTULJSkBUtK5yE++jvs3BWJ2qZuuHrSgWsvw/PgJBwcAkAfJ5ZSOn1fTWf3PSiVGUL2ERVR7o+Dr34BMKQgoyYPrtTWkZ/3xZKO35fAfn4esZUvgn24GoaRdtC3U4lhuI2MWNyCDGR4colyM0QlX8oqLnMxsb+Q6D17SH/LQXKzrghjRpq43Czp7OolqSlpJCJsK4rjV5C2M+tJv8lHxlwgDwxODBomAovhRKgoh5sNlS/SQPm8fA2pulRPdL2jKMhVk+YmLcxWGoFgaaP5mmJRXXiWtJan4cKFcxgyTmJgzMgPGa2BGOkBrZMUii+5/cI4LyVIgwhIv1pbT0LWhUCn7+EtNtrU/o9+QHJbHw4O4nJ9M4Hjuthw4kvS0NIp0lIls93FcwJJxNTXyscKETLIxYg8xq+K+vYbZNuPO3H3/qDhlKa46/gxlb9AUzra0nqzV1NUAtZphPuWQqipqZQVnJFS35h+dl5WDLxlqf98GTpmGCdWq5XPyMgSbU4XTE7eW1mr7VcXlnA9/YP1eSfz9hYVn6MHh0aRe/iILiVJkbM9PGKxzKgor5hB+XkyYwrOcEKmDJX7vnC+DKZJ7x+YKG/39Wc3GL1QSP735Ljw0NAliQn7f2jvNj6fpkj7Ki4uviYsfMfiaZWs8BQqsVYODz9KPpR10L47tXIZ0xn1F7qXg9eu/k3+v+P0qlnU/1hoaNhzT1TxhPqvZYp2+4KmAnZGRH4aFxu/UirwurUnP8XVd3RzoOA+isrKPBh0NPf4zLKyaioxIXE6Z9PmLdS/dfkYXsrBQ8QAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/540464e3b3a565e1038d2a524e8d8bab/ee604/56618b008d7ede3a6bb26ab2ac3e748e.png","srcSet":"/static/540464e3b3a565e1038d2a524e8d8bab/69585/56618b008d7ede3a6bb26ab2ac3e748e.png 200w,\\n/static/540464e3b3a565e1038d2a524e8d8bab/497c6/56618b008d7ede3a6bb26ab2ac3e748e.png 400w,\\n/static/540464e3b3a565e1038d2a524e8d8bab/ee604/56618b008d7ede3a6bb26ab2ac3e748e.png 800w,\\n/static/540464e3b3a565e1038d2a524e8d8bab/31987/56618b008d7ede3a6bb26ab2ac3e748e.png 1000w","sizes":"(max-width: 800px) 100vw, 800px"}}},"description":"We manage several high yield bond mandates for corporations, family trusts, endowments and some high net worth individuals","id":"Services_2","slug":"high-yield-and-special-mandates","title":"High Yield and Special Mandates"}]}}}')},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,i){var r=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return g}));var i=a("q1tI"),r=a.n(i),n=a("7oih"),s=a("j8mP"),l=a("Wbzz"),c=a("Uf76"),o=a.n(c),d=function(){var e=s.data.strapiHerobannerHome;return r.a.createElement("header",{className:"hero",style:{backgroundImage:"url("+o.a+")"}},r.a.createElement("div",{className:"section-center-narrow hero-center"},r.a.createElement("article",{className:"hero-image"}),r.a.createElement("div",null,r.a.createElement("h4",null,e.subTitle),r.a.createElement("h1",null,e.title,r.a.createElement("div",{className:"secondTitle"},e.secondTitle,r.a.createElement("span",null))),r.a.createElement(l.a,{className:"btn",to:e.ctaLink},e.ctaText))))},u=a("p17p"),f=a("tH6f"),m=a("Rfp1"),p=a("EYWl"),g=(t.default=function(e){var t=e.data,a=t.allStrapiTeams.nodes,i=t.allStrapiBlogs.nodes;return r.a.createElement(n.a,{navVersion:"absolute"},r.a.createElement("div",{className:"home"},r.a.createElement(p.a,{title:"Home",description:"This is the home page for Highrock capital."}),r.a.createElement(d,null),r.a.createElement("div",{className:"section-center-narrow section-padding"},r.a.createElement(u.a,null),r.a.createElement(f.a,{team:a,title:"Meet the team",showLink:!0}),r.a.createElement(m.a,{blogs:i,title:"latest blog posts",showLink:!0}))))},"4287390186")},Rfp1:function(e,t,a){"use strict";a("91GP");var i=a("q1tI"),r=a.n(i),n=a("ap0H"),s=a("9eSz"),l=a.n(s),c=a("Wbzz"),o=function(e){var t=e.id,a=e.title,i=e.image,n=e.date,s=e.category,o=e.slug,d=e.desc;return r.a.createElement(c.a,{to:"/media/"+o,key:t},r.a.createElement("article",null,i&&r.a.createElement(l.a,{fluid:i.childImageSharp.fluid,className:"blog-img"}),r.a.createElement("div",{className:"blog-card"},r.a.createElement("h4",null,a),r.a.createElement("p",null,d),r.a.createElement("div",{className:"blog-footer"},r.a.createElement("p",null,s),r.a.createElement("p",null,n)))))};t.a=function(e){var t=e.blogs,a=e.title,i=e.showLink;return r.a.createElement("section",null,r.a.createElement("div",{className:"title-margin"},r.a.createElement(n.a,{title:a})),r.a.createElement("div",{className:"blogs-center"},t.map((function(e){return r.a.createElement(o,Object.assign({key:e.id},e))}))),i&&r.a.createElement(c.a,{to:"/media",className:"btn center-btn"},"Blog"))}},Uf76:function(e,t,a){e.exports=a.p+"static/hero-img-8dd83a17456494d660b31f865179e644.jpg"},ap0H:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i);t.a=function(e){var t=e.title;return r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,t||"default-title"))}},j8mP:function(e){e.exports=JSON.parse('{"data":{"strapiHerobannerHome":{"ctaText":"Get Started","ctaLink":"/contact/","subTitle":"Capital Management","secondTitle":"High Rock","title":"Welcome to"}}}')},p17p:function(e,t,a){"use strict";var i=a("Lxwa"),r=a("q1tI"),n=a.n(r),s=a("ap0H"),l=a("Wbzz"),c=a("9eSz"),o=a.n(c),d=a("ZMKu");t.a=function(){var e=i.data.allStrapiServices.nodes;return n.a.createElement("section",{className:"section section-center"},n.a.createElement("div",{className:"services-section"},n.a.createElement("div",{className:"services-section-top title-margin"},n.a.createElement(s.a,{title:"services"}),n.a.createElement(l.a,{to:"/services"},"All Services")),n.a.createElement("div",{className:"services-center"},e.map((function(e){return n.a.createElement(d.b.article,{whileHover:{scale:1.1},whileTap:{scale:1},key:e.id,className:"service"},n.a.createElement(l.a,{to:"/services/"+e.slug,className:"service-btn"},n.a.createElement("p",null,e.description),e.icon&&n.a.createElement(o.a,{fluid:e.icon.childImageSharp.fluid,className:"service-icon"}),n.a.createElement("h4",null,e.title)))})))))}},tH6f:function(e,t,a){"use strict";a("91GP"),a("f3/d");var i=a("q1tI"),r=a.n(i),n=a("ap0H"),s=(a("9eSz"),a("Wbzz")),l=a("ZMKu"),c=function(e){var t=e.name,a=e.position,i=(e.image,e.teaser),n=e.slug,c=e.index,o=e.activeValue,d=e.listOutAll,u=e.deepLink;return o===c||d||u?r.a.createElement(l.b.article,{whileHover:{scale:1.05},whileTap:{scale:.9},className:"team-info"},r.a.createElement(s.a,{to:"team/"+n},r.a.createElement("div",{className:"team-image"}),r.a.createElement("div",{className:"team-info-text"},r.a.createElement("h3",null,t),r.a.createElement("h4",null,a),r.a.createElement("p",{className:"team-desc"},i)))):null};t.a=function(e){var t=e.team,a=e.title,i=e.showLink,l=e.list,o=r.a.useState(0),d=o[0],u=o[1];return r.a.createElement("section",{className:"section teams section-center"},r.a.createElement("div",{className:"title-margin"},r.a.createElement(n.a,{title:a})),r.a.createElement("div",{className:"teams-center"},!l&&r.a.createElement("div",{className:"btn-container"},t.map((function(e,t){return r.a.createElement("button",{className:"team-btn "+(t===d&&"active-btn"),key:e.id,onClick:function(){return u(t)}},e.name)}))),t.map((function(e,a){return r.a.createElement(c,Object.assign({activeValue:d,key:e.id,index:a},t[a],{listOutAll:l}))}))),i&&r.a.createElement(s.a,{to:"/team",className:"btn center-btn"},"All team"))}}}]);
//# sourceMappingURL=component---src-pages-index-js-aba069bcff78960d59e4.js.map