(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4065],{3905:function(e,r,n){"use strict";n.r(r),n.d(r,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return l}});var t=n(2784);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),l=function(e){return function(r){var n=m(r.components);return t.createElement(e,a({},r,{components:n}))}},m=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=m(e.components);return t.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=m(n),u=o,f=l["".concat(i,".").concat(u)]||l[u]||p[u]||a;return n?t.createElement(f,c(c({ref:r},d),{},{components:n})):t.createElement(f,c({ref:r},d))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3433:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var t=n(2122),o=n(9756),a=(n(2784),n(3905)),i={id:"performance",title:"Performance Tips"},c={unversionedId:"performance",id:"performance",isDocsHomePage:!1,title:"Performance Tips",description:"Video rendering is one of the most heavy workloads a computer can take on. Remotion aims to at least perform similarly than traditional video editing programs. This section describes several aspects that influence render speed that you can influence.",source:"@site/docs/performance.md",sourceDirName:".",slug:"/performance",permalink:"/docs/performance",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/performance.md",version:"current",frontMatter:{id:"performance",title:"Performance Tips"},sidebar:"someSidebar",previous:{title:"Could not play video/audio with src",permalink:"/docs/media-playback-error"},next:{title:"v2.0 Breaking changes",permalink:"/docs/2-0-migration"}},s=[{value:"Increase concurrency",id:"increase-concurrency",children:[]},{value:"Decrease remote load",id:"decrease-remote-load",children:[]},{value:"Decrease image resolution",id:"decrease-image-resolution",children:[]},{value:"Choose the right image format and codec",id:"choose-the-right-image-format-and-codec",children:[]},{value:"Rendering still too slow?",id:"rendering-still-too-slow",children:[]}],d={toc:s};function l(e){var r=e.components,n=(0,o.default)(e,["components"]);return(0,a.mdx)("wrapper",(0,t.default)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Video rendering is one of the most heavy workloads a computer can take on. Remotion aims to at least perform similarly than traditional video editing programs. This section describes several aspects that influence render speed that you can influence."),(0,a.mdx)("h2",{id:"increase-concurrency"},"Increase concurrency"),(0,a.mdx)("p",null,"By default, Remotion will use half of the threads available on the system to perform rendering. ",(0,a.mdx)("a",{parentName:"p",href:"https://www.remotion.dev/docs/cli"},"You can increase the default concurrency to use up to all of your threads"),". This will most likely increase render speed but might slow down other operations on your computer."),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Most Intel and AMD CPUs have hyperthreading, which means that per CPU core you get 2 threads. So for example, if you have an 8-core CPU, you have 16 threads, which means that the maximum concurrency that Remotion supports is 16."))),(0,a.mdx)("h2",{id:"decrease-remote-load"},"Decrease remote load"),(0,a.mdx)("p",null,"Loading data from remote sources, such as making an API call, loading an image, video, or audio file from a remote location will increase the render time because Remotion has to wait until the data is fetched. Try to move assets to your local machine or cache API requests (for example in ",(0,a.mdx)("inlineCode",{parentName:"p"},"localStorage"),") to speed up Remotion rendering."),(0,a.mdx)("h2",{id:"decrease-image-resolution"},"Decrease image resolution"),(0,a.mdx)("p",null,"Generally, lower resolution frames result in faster renders. You can make the dimensions smaller while in development and rendering test files, and apply a ",(0,a.mdx)("inlineCode",{parentName:"p"},"scale")," transformation to the composition to move faster initially, and then render at full resolution later."),(0,a.mdx)("h2",{id:"choose-the-right-image-format-and-codec"},"Choose the right image format and codec"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/docs/config#setimageformat"},"JPEG rendering is faster")," than PNG rendering. ",(0,a.mdx)("a",{parentName:"p",href:"/docs/encoding"},"H264 is the fastest way")," to encode frames into a video. If you have deviated from the defaults, consider them again if you see slow rendering."),(0,a.mdx)("h2",{id:"rendering-still-too-slow"},"Rendering still too slow?"),(0,a.mdx)("p",null,"We are actively working on a way to massively speed up video rendering. Hang on!"))}l.isMDXComponent=!0}}]);