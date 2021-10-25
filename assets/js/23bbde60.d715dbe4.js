"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74],{57522:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return c},withMDXComponents:function(){return m}});var t=r(29901);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),m=function(e){return function(n){var r=c(n.components);return t.createElement(e,a({},n,{components:r}))}},c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||a;return r?t.createElement(f,l(l({ref:n},s),{},{components:r})):t.createElement(f,l({ref:n},s))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26266:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var t=r(3920),o=r(50264),a=(r(29901),r(57522)),i=["components"],l={id:"timeout",title:"Puppeteer timeout"},d=void 0,s={unversionedId:"timeout",id:"timeout",isDocsHomePage:!1,title:"Puppeteer timeout",description:"The following error:",source:"@site/docs/timeout.md",sourceDirName:".",slug:"/timeout",permalink:"/docs/timeout",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/timeout.md",tags:[],version:"current",frontMatter:{id:"timeout",title:"Puppeteer timeout"},sidebar:"someSidebar",previous:{title:"renderStill()",permalink:"/docs/render-still"},next:{title:"Media playback error",permalink:"/docs/media-playback-error"}},m=[{value:"Possible causes",id:"possible-causes",children:[{value:"<code>continueRender()</code> was not called",id:"continuerender-was-not-called",children:[],level:3},{value:"No internet connection or firewall issue",id:"no-internet-connection-or-firewall-issue",children:[],level:3},{value:"Importing MP4 videos in Chromium",id:"importing-mp4-videos-in-chromium",children:[],level:3},{value:"Memory pressure",id:"memory-pressure",children:[],level:3},{value:"Old version of Remotion",id:"old-version-of-remotion",children:[],level:3},{value:"Not helpful?",id:"not-helpful",children:[],level:3}],level:2},{value:"See also",id:"see-also",children:[],level:2}],c={toc:m};function u(e){var n=e.components,r=(0,o.default)(e,i);return(0,a.mdx)("wrapper",(0,t.default)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The following error:"),(0,a.mdx)("div",{className:"shiki-twoslash-fragment"},(0,a.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,a.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,a.mdx)("div",{parentName:"pre",className:"code-container"},(0,a.mdx)("code",{parentName:"div"},(0,a.mdx)("div",{parentName:"code",className:"line"},(0,a.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"TimeoutError: waiting "),(0,a.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"for"),(0,a.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,a.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"function"),(0,a.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,a.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"failed:"),(0,a.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," timeout 30000ms exceeded"))))),(0,a.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,a.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,a.mdx)("div",{parentName:"pre",className:"code-container"},(0,a.mdx)("code",{parentName:"div"},(0,a.mdx)("div",{parentName:"code",className:"line"},(0,a.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"TimeoutError: waiting "),(0,a.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"for"),(0,a.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,a.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"function"),(0,a.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,a.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},"failed:"),(0,a.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," timeout 30000ms exceeded")))))),(0,a.mdx)("p",null,"generally happens when an unrecoverable error prevented the component to be mounted or if a ",(0,a.mdx)("a",{parentName:"p",href:"/docs/delay-render"},(0,a.mdx)("inlineCode",{parentName:"a"},"delayRender()"))," handle has been created and not been cleared afterwards. Puppeteer will wait to make a screenshot, but aborts it after 30 seconds to not hang forever."),(0,a.mdx)("h2",{id:"possible-causes"},"Possible causes"),(0,a.mdx)("h3",{id:"continuerender-was-not-called"},(0,a.mdx)("inlineCode",{parentName:"h3"},"continueRender()")," was not called"),(0,a.mdx)("p",null,"Your code might have a problem where you call ",(0,a.mdx)("a",{parentName:"p",href:"/docs/delay-render"},(0,a.mdx)("inlineCode",{parentName:"a"},"delayRender()"))," but never clear it. This will cause Remotion to wait forever before it starts rendering and leads to a timeout message."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Resolution"),": Check your code and make sure you are calling ",(0,a.mdx)("a",{parentName:"p",href:"/docs/continue-render"},(0,a.mdx)("inlineCode",{parentName:"a"},"continueRender()")),"."),(0,a.mdx)("h3",{id:"no-internet-connection-or-firewall-issue"},"No internet connection or firewall issue"),(0,a.mdx)("p",null,"If you rely on network assets such as fonts, images, videos or audio and you don't have internet connection or requests get blocked by a firewall. Special attention has to be given to when you are rendering in the cloud, Amazon VPC could for example block outgoing network requests and lead to a timeout."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Resolution"),": Make sure all network resources you require can be accessed."),(0,a.mdx)("h3",{id:"importing-mp4-videos-in-chromium"},"Importing MP4 videos in Chromium"),(0,a.mdx)("p",null,"Chrome has the codecs needed for displaying MP4 videos, but Chromium doesn't. If you try to load an MP4 video or an unsupported audio codec in Chromium, it currently leads to a timeout."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Workaround"),": Convert videos to WebM or use Chrome instead of Chromium."),(0,a.mdx)("h3",{id:"memory-pressure"},"Memory pressure"),(0,a.mdx)("p",null,"When setting the concurrency too high, Chrome might decide to not load some ",(0,a.mdx)("inlineCode",{parentName:"p"},"<Video />"),"s which can lead to a timeout error."),(0,a.mdx)("p",null,"We consider this a bug in Remotion and plan to fix it in the future."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Workaround"),": Reduce the ",(0,a.mdx)("inlineCode",{parentName:"p"},"concurrency")," to a level where Chrome can load all videos."),(0,a.mdx)("h3",{id:"old-version-of-remotion"},"Old version of Remotion"),(0,a.mdx)("p",null,"Older versions of Remotion had bugs which could lead to timeout.\nEspecially 1.x releases could timeout when importing large assets"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Resolution"),": Upgrade to the latest Remotion version using ",(0,a.mdx)("inlineCode",{parentName:"p"},"npm run upgrade"),"."),(0,a.mdx)("h3",{id:"not-helpful"},"Not helpful?"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/remotion-dev/remotion/issues/new"},"Open an issue")," and try to describe your issue in a way that is reproducible for us. We will try to help you out."),(0,a.mdx)("h2",{id:"see-also"},"See also"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/delay-render"},"delayRender()")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/data-fetching"},"Data fetching"))))}u.isMDXComponent=!0}}]);