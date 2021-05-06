(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1717],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return m}});var r=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),m=function(e){return function(n){var t=u(n.components);return r.createElement(e,o({},n,{components:t}))}},u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,f=m["".concat(a,".").concat(c)]||m[c]||d[c]||o;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7409:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(2122),i=t(9756),o=(t(2784),t(3905)),a={id:"animating-properties",title:"Animating properties"},s={unversionedId:"animating-properties",id:"animating-properties",isDocsHomePage:!1,title:"Animating properties",description:"Animation is all about how properties change over time.",source:"@site/docs/animating-properties.md",sourceDirName:".",slug:"/animating-properties",permalink:"/docs/animating-properties",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/animating-properties.md",version:"current",frontMatter:{id:"animating-properties",title:"Animating properties"},sidebar:"someSidebar",previous:{title:"The fundamentals",permalink:"/docs/the-fundamentals"},next:{title:"Reuse components using Sequences",permalink:"/docs/reusability"}},p=[{value:"Using the interpolate helper function",id:"using-the-interpolate-helper-function",children:[]},{value:"Using spring animations",id:"using-spring-animations",children:[]}],l={toc:p};function m(e){var n=e.components,t=(0,i.default)(e,["components"]);return(0,o.mdx)("wrapper",(0,r.default)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Animation is all about how properties change over time."),"\nLet's start with a simple example, let's say we want to create a fade in animation."),(0,o.mdx)("p",null,"If we want to fade the text in over 20 frames, we need to gradually change the ",(0,o.mdx)("inlineCode",{parentName:"p"},"opacity")," style over time so that it goes from 0 to 1."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{4,11}","{4,11}":!0},"export const MyVideo = () => {\n  const frame = useCurrentFrame();\n\n  const opacity = frame >= 20 ? 1 : (frame / 20);\n\n  return (\n    <div style={{\n      flex: 1,\n      justifyContent: 'center',\n      alignItems: 'center',\n      opacity: opacity\n    }}>\n      Hello World!\n    </div>\n  )\n}\n")),(0,o.mdx)("h2",{id:"using-the-interpolate-helper-function"},"Using the interpolate helper function"),(0,o.mdx)("p",null,"Using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"interpolate")," function can make animations more readable.\nThe function takes 4 arguments:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"The input value"),(0,o.mdx)("li",{parentName:"ol"},"The range values which the input can assume"),(0,o.mdx)("li",{parentName:"ol"},"The range of values that you want to map the input to"),(0,o.mdx)("li",{parentName:"ol"},"Optional settings")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{6,13}","{6,13}":!0},"import {useCurrentFrame, interpolate} from 'remotion';\n\nexport const MyVideo = () => {\n  const frame = useCurrentFrame();\n\n  const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});\n\n  return (\n    <div style={{\n      flex: 1,\n      justifyContent: 'center',\n      alignItems: 'center',\n      opacity: opacity\n    }}>\n      Hello World!\n    </div>\n  )\n}\n")),(0,o.mdx)("p",null,"In this example, we map the frames 0 to 20 to their opacity values ",(0,o.mdx)("inlineCode",{parentName:"p"},"(0, 0.05, 0.1, 0.15 ..."),") and use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"extrapolateRight")," setting to clamp the output so that it never becomes bigger than 1."),(0,o.mdx)("h2",{id:"using-spring-animations"},"Using spring animations"),(0,o.mdx)("p",null,"Spring animations are beautiful way to put things into motion and make them natural. Remotion includes a helper function to make spring animations easy! This time, let's animate the scale of the text."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{7,20}","{7,20}":!0},"import {useCurrentFrame, useVideoConfig, spring} from 'remotion';\n\nexport const MyVideo = () => {\n  const frame = useCurrentFrame();\n  const {fps} = useVideoConfig();\n\n  const scale = spring({\n    fps,\n    from: 0,\n    to: 1,\n    frame\n  });\n\n  return (\n    <div style={{\n      flex: 1,\n      justifyContent: 'center',\n      alignItems: 'center',\n    }}>\n      <div style={{transform: `scale(${scale})`}}>Hello World!</div>\n    </div>\n  )\n}\n")),(0,o.mdx)("p",null,"You should see the text 'jump in'. The default spring configuration leads to a little bit of overshoot, meaning the text will bounce a little bit. See the reference page about the ",(0,o.mdx)("inlineCode",{parentName:"p"},"spring")," function to learn how to customize your spring animations."))}m.isMDXComponent=!0}}]);