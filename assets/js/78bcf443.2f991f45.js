(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5679],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return u}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),u=function(e){return function(n){var t=m(n.components);return r.createElement(e,i({},n,{components:t}))}},m=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=m(t),c=o,h=u["".concat(a,".").concat(c)]||u[c]||p[c]||i;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8815:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=t(2122),o=t(9756),i=(t(2784),t(3905)),a={slug:"1-5",title:"Remotion 1.5",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},l={permalink:"/blog/1-5",editUrl:"https://github.com/Jonnyburger/remotion/edit/main/packages/docs/blog/blog/2021-03-03-remotion-1-5.md",source:"@site/blog/2021-03-03-remotion-1-5.md",title:"Remotion 1.5",description:"This release contains no big new features, but addresses some common problems.",date:"2021-03-03T00:00:00.000Z",formattedDate:"March 3, 2021",tags:[],readingTime:2.45,truncated:!1,prevItem:{title:"Announcing pricing for company licenses",permalink:"/blog/company-licenses"},nextItem:{title:"Remotion 1.4",permalink:"/blog/1-4"}},s=[{value:"No Chromium download necessary",id:"no-chromium-download-necessary",children:[]},{value:"Improved Apple Silicon and WSL support",id:"improved-apple-silicon-and-wsl-support",children:[]},{value:"Smoother timeline",id:"smoother-timeline",children:[]},{value:"Failing to render a frame fails hard",id:"failing-to-render-a-frame-fails-hard",children:[]},{value:"Rendering will happen on a localhost server",id:"rendering-will-happen-on-a-localhost-server",children:[]},{value:"New tutorial: Programmatic Instagram Stories",id:"new-tutorial-programmatic-instagram-stories",children:[]},{value:"Upgrade",id:"upgrade",children:[]}],d={toc:s};function u(e){var n=e.components,t=(0,o.default)(e,["components"]);return(0,i.mdx)("wrapper",(0,r.default)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This release contains no big new features, but addresses some common problems."),(0,i.mdx)("h2",{id:"no-chromium-download-necessary"},"No Chromium download necessary"),(0,i.mdx)("p",null,"Until now, every time you ran ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn create video"),", a binary of Chromium was installed, which was slow and took a lot of space (between 170-280MB depending on the OS). Making matters even worse, these binaries would not include the codec required to play MP4 videos, meaning if you wanted to embed one, you had to convert it to WebM first."),(0,i.mdx)("p",null,"Now Remotion will try to find an existing installation of Chrome on your machine and if it finds one, it will use it and skip the download. If it doesn't find one, you can specify the path using the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/config#setbrowserexecutable"},(0,i.mdx)("inlineCode",{parentName:"a"},"setBrowserExecutable()"))," option or the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/cli"},(0,i.mdx)("inlineCode",{parentName:"a"},"--browser-executable"))," command line flag."),(0,i.mdx)("p",null,"If you are running Remotion on a machine where neither Chrome nor Chromium is installed, Remotion will still download a version from the internet. However, the download only happens when you invoke ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm run build")," for the first time, so you don't have to wait so long before you can start experimenting."),(0,i.mdx)("h2",{id:"improved-apple-silicon-and-wsl-support"},"Improved Apple Silicon and WSL support"),(0,i.mdx)("p",null,"Apple Silicon support is another nice side-effect of the Puppeteer refactor, since previously the installation would fail because no Chromium binaries were available for the Apple Silicon architecture. Now that Remotion will try to use the local Chrome installation this is way less likely to happen."),(0,i.mdx)("p",null,"On Windows Subsystem for Linux, a missing flag would lead to Remotion getting stuck during rendering. This is now fixed. Linux users also need to install some additional libraries, ",(0,i.mdx)("a",{parentName:"p",href:"/docs/#additional-step-for-linux-users"},"which is now documented"),"."),(0,i.mdx)("h2",{id:"smoother-timeline"},"Smoother timeline"),(0,i.mdx)("p",null,"Why would the timeline of your 30 FPS only play at 28.7FPS? Turns out it's a bug that was investigated and fixed by ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/148"},"yuta0801"),"! Now the playback during preview is smoother and the FPS counter is way more likely to display a number matching your desired FPS."),(0,i.mdx)("h2",{id:"failing-to-render-a-frame-fails-hard"},"Failing to render a frame fails hard"),(0,i.mdx)("p",null,"If a frame fails to render for some reason (such as calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"delayRender()")," and never resolving the lock), this will now stop the rendering process. Previously you would get an error message but Remotion would keep trying and keep failing."),(0,i.mdx)("h2",{id:"rendering-will-happen-on-a-localhost-server"},"Rendering will happen on a localhost server"),(0,i.mdx)("p",null,"Previously during rendering, frames would be opened via ",(0,i.mdx)("inlineCode",{parentName:"p"},"file://")," protocol and get screenshotted. Now the frames are being served on ",(0,i.mdx)("inlineCode",{parentName:"p"},"http://localhost:3000")," (if port is not available, it will try 3001, 3002, etc.), which is the same behavior as in the preview."),(0,i.mdx)("p",null,"Now APIs can now simply whitelist localhost domains in their CORS configurations, and you can more easily use those APIs to feed data into your video."),(0,i.mdx)("h2",{id:"new-tutorial-programmatic-instagram-stories"},"New tutorial: Programmatic Instagram Stories"),(0,i.mdx)("p",null,"In case you missed it, I released a new tutorial showing the workflow of how to programmatically create Instagram Stories with dynamic content. ",(0,i.mdx)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCsBAIv086U4dViuxXJLMJpg"},"You can watch it here.")),(0,i.mdx)("h2",{id:"upgrade"},"Upgrade"),(0,i.mdx)("p",null,"As always, you can upgrade to the newest version by running ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm run upgrade")," in your Remotion project."))}u.isMDXComponent=!0}}]);