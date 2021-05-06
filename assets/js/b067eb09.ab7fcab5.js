(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4895],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return s},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){return function(n){var t=m(n.components);return a.createElement(e,o({},n,{components:t}))}},m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=m(t),s=r,f=c["".concat(i,".").concat(s)]||c[s]||p[s]||o;return t?a.createElement(f,u(u({ref:n},l),{},{components:t})):a.createElement(f,u({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1586:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=t(2122),r=t(9756),o=(t(2784),t(3905)),i={title:"useAudioData()",id:"use-audio-data"},u={unversionedId:"use-audio-data",id:"use-audio-data",isDocsHomePage:!1,title:"useAudioData()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/use-audio-data.md",sourceDirName:".",slug:"/use-audio-data",permalink:"/docs/use-audio-data",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/use-audio-data.md",version:"current",frontMatter:{title:"useAudioData()",id:"use-audio-data"},sidebar:"someSidebar",previous:{title:"getWaveformPortion()",permalink:"/docs/get-waveform-portion"},next:{title:"visualizeAudio()",permalink:"/docs/visualize-audio"}},d=[{value:"Arguments",id:"arguments",children:[{value:"<code>src</code>",id:"src",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],l={toc:d};function c(e){var n=e.components,t=(0,r.default)(e,["components"]);return(0,o.mdx)("wrapper",(0,a.default)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Part of the ",(0,o.mdx)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),(0,o.mdx)("p",null,"This convienience function wraps the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/get-audio-data"},(0,o.mdx)("inlineCode",{parentName:"a"},"getAudioData()"))," function into a hook and does 3 things:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Keeps the audio data in a state"),(0,o.mdx)("li",{parentName:"ul"},"Wraps the function in a ",(0,o.mdx)("a",{parentName:"li",href:"/docs/data-fetching"},(0,o.mdx)("inlineCode",{parentName:"a"},"delayRender()")," / ",(0,o.mdx)("inlineCode",{parentName:"a"},"continueRender()"))," pattern."),(0,o.mdx)("li",{parentName:"ul"},"Handles the case where the component gets unmounted while the fetching is in progress and a React error is thrown.")),(0,o.mdx)("p",null,"Using this function, you can elegantly render a component based on audio properties, for example together with the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/visualize-audio"},(0,o.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()"))," function."),(0,o.mdx)("h2",{id:"arguments"},"Arguments"),(0,o.mdx)("h3",{id:"src"},(0,o.mdx)("inlineCode",{parentName:"h3"},"src")),(0,o.mdx)("p",null,"A string pointing to an audio asset."),(0,o.mdx)("h2",{id:"return-value"},"Return value"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"AudioData | null")," - An object containing audio data (see documentation of ",(0,o.mdx)("a",{parentName:"p",href:"/docs/get-audio-data"},(0,o.mdx)("inlineCode",{parentName:"a"},"getAudioData()")),") or ",(0,o.mdx)("inlineCode",{parentName:"p"},"null")," if the data has not been loaded."),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {useAudioData} from '@remotion/media-utils';\nimport music from './music.mp3'\n\n\nexport const MyComponent: React.FC = () => {\n  const audioData = useAudioData(music);\n\n  if (!audioData) {\n    return null;\n  }\n\n  return (\n    <div>This file has a {audioData.sampleRate} sampleRate.</div>\n  );\n}\n")),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/get-audio-data"},(0,o.mdx)("inlineCode",{parentName:"a"},"getAudioData()"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/visualize-audio"},(0,o.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/audio-visualization"},"Audio visualization"))))}c.isMDXComponent=!0}}]);