(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4790],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return m}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),m=function(e){return function(n){var t=d(n.components);return r.createElement(e,a({},n,{components:t}))}},d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(t),c=o,f=m["".concat(i,".").concat(c)]||m[c]||p[c]||a;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1502:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(2784),t(3905)),i={id:"using-randomness",title:"Using randomness"},s={unversionedId:"using-randomness",id:"using-randomness",isDocsHomePage:!1,title:"Using randomness",description:"The following thing is an anti-pattern in Remotion:",source:"@site/docs/using-randomness.md",sourceDirName:".",slug:"/using-randomness",permalink:"/docs/using-randomness",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/using-randomness.md",version:"current",frontMatter:{id:"using-randomness",title:"Using randomness"},sidebar:"someSidebar",previous:{title:"Using fonts",permalink:"/docs/fonts"},next:{title:"Audio visualization",permalink:"/docs/audio-visualization"}},l=[{value:"Fixing the problem",id:"fixing-the-problem",children:[]},{value:"False positives",id:"false-positives",children:[]},{value:"See also",id:"see-also",children:[]}],u={toc:l};function m(e){var n=e.components,t=(0,o.default)(e,["components"]);return(0,a.mdx)("wrapper",(0,r.default)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The following thing is an anti-pattern in Remotion:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"const MyComp: React.FC = () => {\n  const randomValues = useState(() =>  {\n    return new Array(10).fill(true).map((a, i) => {\n      return {\n        x: Math.random(),\n        y: Math.random(),\n      };\n    });\n  );\n  // Do something with coordinates\n}\n")),(0,a.mdx)("p",null,"While this will work during preview, it will break while rendering. The reason is that Remotion is spinning up multiple instances of the webpage to render frames in parallel, and the random values will be different on every instance."),(0,a.mdx)("h2",{id:"fixing-the-problem"},"Fixing the problem"),(0,a.mdx)("p",null,"Use the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/random"},(0,a.mdx)("inlineCode",{parentName:"a"},"random()"))," API from Remotion to get deterministic pseudorandom values. Pass in a seed (number or string) and as long as the seed is the same, the return value will be the same."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{7,8}","{7,8}":!0},"import {random} from 'remotion';\n\nconst MyComp: React.FC = () => {\n  // No need to use useState\n  const randomValues = new Array(10).fill(true).map((a, i) => {\n    return {\n      x: random(`x-${i}`),\n      y: random(`y-${i}`),\n    };\n  });\n}\n")),(0,a.mdx)("p",null,"Now the random values will be the same on all threads."),(0,a.mdx)("h2",{id:"false-positives"},"False positives"),(0,a.mdx)("p",null,"Did you get an ESLint warning when using ",(0,a.mdx)("inlineCode",{parentName:"p"},"Math.random()"),", but you are fully aware of the circumstances described above? Use ",(0,a.mdx)("inlineCode",{parentName:"p"},"random(null)")," to get a true random value without getting a warning."),(0,a.mdx)("h2",{id:"see-also"},"See also"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/random"},"random()"))))}m.isMDXComponent=!0}}]);