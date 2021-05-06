(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3526],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return p},withMDXComponents:function(){return l}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){return function(t){var n=p(t.components);return r.createElement(e,i({},t,{components:n}))}},p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,f=l["".concat(a,".").concat(m)]||l[m]||d[m]||i;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var r=n(2122),o=n(9756),i=(n(2784),n(3905)),a={title:"useVideoConfig()",id:"use-video-config"},u={unversionedId:"use-video-config",id:"use-video-config",isDocsHomePage:!1,title:"useVideoConfig()",description:"With this hook, you can retrieve some info about the context of the video that you are making.",source:"@site/docs/use-video-config.md",sourceDirName:".",slug:"/use-video-config",permalink:"/docs/use-video-config",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/use-video-config.md",version:"current",frontMatter:{title:"useVideoConfig()",id:"use-video-config"},sidebar:"someSidebar",previous:{title:"useCurrentFrame()",permalink:"/docs/use-current-frame"},next:{title:"<Audio />",permalink:"/docs/audio"}},c=[{value:"See also",id:"see-also",children:[]}],s={toc:c};function l(e){var t=e.components,n=(0,o.default)(e,["components"]);return(0,i.mdx)("wrapper",(0,r.default)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"With this hook, you can retrieve some info about the context of the video that you are making.\nNamely, ",(0,i.mdx)("inlineCode",{parentName:"p"},"useVideoConfig")," will return an object with the following properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"width"),": The width of the composition in pixels."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"height"),": The height of the composition in pixels."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fps"),": The frame rate of the composition, in frames per seconds."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"durationInFrames")," The duration of the composition in frames.")),(0,i.mdx)("p",null,"Remember that you control these properties by passing them as props to ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Composition>"),". Read the page about ",(0,i.mdx)("a",{parentName:"p",href:"/docs/the-fundamentals"},"the fundamentals")," to learn how to define a composition."),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/use-current-frame"},"useCurrentFrame()"))))}l.isMDXComponent=!0}}]);