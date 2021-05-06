(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1703],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return m},MDXProvider:function(){return s},mdx:function(){return h},useMDXComponents:function(){return c},withMDXComponents:function(){return u}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),u=function(e){return function(t){var n=c(t.components);return r.createElement(e,i({},t,{components:n}))}},c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),s=a,f=u["".concat(o,".").concat(s)]||u[s]||p[s]||i;return n?r.createElement(f,d(d({ref:t},m),{},{components:n})):r.createElement(f,d({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},692:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(2784),n(3905)),o={title:"getVideoMetadata()",id:"get-video-metadata"},d={unversionedId:"get-video-metadata",id:"get-video-metadata",isDocsHomePage:!1,title:"getVideoMetadata()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/get-video-metadata.md",sourceDirName:".",slug:"/get-video-metadata",permalink:"/docs/get-video-metadata",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/get-video-metadata.md",version:"current",frontMatter:{title:"getVideoMetadata()",id:"get-video-metadata"},sidebar:"someSidebar",previous:{title:"getAudioDuration()",permalink:"/docs/get-audio-duration"},next:{title:"getWaveformPortion()",permalink:"/docs/get-waveform-portion"}},l=[{value:"Arguments",id:"arguments",children:[{value:"<code>src</code>",id:"src",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"Caching behavior",id:"caching-behavior",children:[]},{value:"See also",id:"see-also",children:[]}],m={toc:l};function u(e){var t=e.components,n=(0,a.default)(e,["components"]);return(0,i.mdx)("wrapper",(0,r.default)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Part of the ",(0,i.mdx)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),(0,i.mdx)("p",null,"Takes a ",(0,i.mdx)("inlineCode",{parentName:"p"},"src")," to a video, loads it and returns metadata for the specified source."),(0,i.mdx)("h2",{id:"arguments"},"Arguments"),(0,i.mdx)("h3",{id:"src"},(0,i.mdx)("inlineCode",{parentName:"h3"},"src")),(0,i.mdx)("p",null,"A string pointing to an asset."),(0,i.mdx)("h2",{id:"return-value"},"Return value"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Promise<VideoMetadata>")," - object with information about the video data:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"durationInSeconds"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"number")," The duration of the video in seconds."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"width"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"number")," The width of the video in pixels."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"height"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"number")," The height of the video in pixels."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"aspectRatio"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"number")," Video width divided by video height."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"isRemote"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"boolean")," Whether the video was imported locally or from a different origin.")),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {getVideoMetadata} from '@remotion/media-utils';\nimport video from '../video.mp4';\n\nawait getVideoMetadata(video); /* {\n  durationInSeconds: 100.00,\n  width: 1280,\n  height: 720,\n  aspectRatio: 1.77777778,\n  isRemote: false\n} */\nawait getVideoMetadata('https://example.com/remote-audio.webm'); /* {\n  durationInSeconds: 40.213,\n  width: 1920,\n  height: 1080,\n  aspectRatio: 1.77777778,\n  isRemote: true\n} */\n")),(0,i.mdx)("h2",{id:"caching-behavior"},"Caching behavior"),(0,i.mdx)("p",null,"This function is memoizing the results it returns.\nIf you pass in the same argument to ",(0,i.mdx)("inlineCode",{parentName:"p"},"src")," multiple times, it will return a cached version from the second time on, regardless of if the file has changed. To clear the cache, you have to reload the page."),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/assets#using-videos"},"Using videos")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/video"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Video/>")))))}u.isMDXComponent=!0}}]);