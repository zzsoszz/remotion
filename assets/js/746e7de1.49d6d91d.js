(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4164],{3905:function(e,n,r){"use strict";r.r(n),r.d(n,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return l},withMDXComponents:function(){return u}});var t=r(2784);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=t.createContext({}),u=function(e){return function(n){var r=l(n.components);return t.createElement(e,i({},n,{components:r}))}},l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),c=o,f=u["".concat(a,".").concat(c)]||u[c]||m[c]||i;return r?t.createElement(f,p(p({ref:n},d),{},{components:r})):t.createElement(f,p({ref:n},d))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var d=2;d<i;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1291:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var t=r(2122),o=r(9756),i=(r(2784),r(3905)),a={id:"parametrized-rendering",title:"Parametrized rendering"},p={unversionedId:"parametrized-rendering",id:"parametrized-rendering",isDocsHomePage:!1,title:"Parametrized rendering",description:"Parametrized rendering is the idea of creating a video template once and then render as many videos as you want with different parameters. Just like in regular React, we use props to reuse and customize components!",source:"@site/docs/parametrized-rendering.md",sourceDirName:".",slug:"/parametrized-rendering",permalink:"/docs/parametrized-rendering",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/parametrized-rendering.md",version:"current",frontMatter:{id:"parametrized-rendering",title:"Parametrized rendering"},sidebar:"someSidebar",previous:{title:"Transparent videos",permalink:"/docs/transparent-videos"},next:{title:"Dynamic duration, FPS & dimensions",permalink:"/docs/dynamic-metadata"}},s=[{value:"Defining accepted props",id:"defining-accepted-props",children:[]},{value:"Define default props",id:"define-default-props",children:[]},{value:"Input props",id:"input-props",children:[{value:"Passing input props in the CLI",id:"passing-input-props-in-the-cli",children:[]},{value:"Passing input props when server rendering",id:"passing-input-props-when-server-rendering",children:[]},{value:"Passing input props in GitHub Actions",id:"passing-input-props-in-github-actions",children:[]},{value:"Retrieve input props",id:"retrieve-input-props",children:[]}]},{value:"You can still use components as normal",id:"you-can-still-use-components-as-normal",children:[]}],d={toc:s};function u(e){var n=e.components,r=(0,o.default)(e,["components"]);return(0,i.mdx)("wrapper",(0,t.default)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Parametrized rendering is the idea of creating a video template once and then render as many videos as you want with different parameters. Just like in regular React, we use props to reuse and customize components!"),(0,i.mdx)("h2",{id:"defining-accepted-props"},"Defining accepted props"),(0,i.mdx)("p",null,"To define which props your video accepts, simply give your component the ",(0,i.mdx)("inlineCode",{parentName:"p"},"React.FC")," type and pass in a generic argument describing the shape of the props you want to accept."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{2-3}","{2-3}":!0},"export const MyComponent: React.FC<{\n  propOne: string;\n  propTwo: number;\n}> = ({propOne, propTwo}) => {\n  return (\n    <div>props: {propOne}, {propTwo}</div>\n  );\n}\n")),(0,i.mdx)("h2",{id:"define-default-props"},"Define default props"),(0,i.mdx)("p",null,"When registering the component as a sequence, you can define the default props:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{13-16}","{13-16}":!0},"import {Sequence} from 'remotion';\nimport {MyComponent} from './MyComponent';\n\nexport const Root = () => {\n  return (\n    <>\n      <Sequence\n        id=\"my-video\"\n        width={1080}\n        height={1080}\n        fps={30}\n        component={MyComponent}\n        defaultProps={{\n          propOne: 'Hi',\n          propTwo: 10\n        }}\n      />\n    </>\n  )\n}\n")),(0,i.mdx)("p",null,"By using ",(0,i.mdx)("inlineCode",{parentName:"p"},"React.FC"),", you can ensure type safety and avoid errors caused by typos."),(0,i.mdx)("h2",{id:"input-props"},"Input props"),(0,i.mdx)("p",null,"Input props are props that are passed in externally while rendering that can replace or override the default props"),(0,i.mdx)("h3",{id:"passing-input-props-in-the-cli"},"Passing input props in the CLI"),(0,i.mdx)("p",null,"When rendering (for example using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm run build")," script defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},"package.json"),"), you can override some or all default props by passing a CLI flag. It must be either valid JSON or a path to a file that contains valid JSON. Using this technique, type safety cannot be guaranteed."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Using inline JSON")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'npx remotion render src/index.tsx HelloWorld helloworld.mp4 --props=\'{"propOne": "Hi", "propTwo": 10}\'\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Using a file path:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npx remotion render src/index.tsx HelloWorld helloworld.mp4 --props=./path/to/props.json\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/docs/cli"},"See also: CLI flags")),(0,i.mdx)("h3",{id:"passing-input-props-when-server-rendering"},"Passing input props when server rendering"),(0,i.mdx)("p",null,"When server-rendering using ",(0,i.mdx)("inlineCode",{parentName:"p"},"renderFrames"),", you can pass props using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"inputProps")," option:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{8-10}","{8-10}":!0},"await renderFrames({\n  config: video,\n  webpackBundle: bundled,\n  onStart: () => undefined,\n  onFrameUpdate: (f) => undefined,\n  parallelism: null,\n  outputDir: framesDir,\n  inputProps: {\n    titleText: 'Hello World'\n  },\n  compositionId: 'HelloWorld',\n  imageFormat: 'jpeg'\n});\n")),(0,i.mdx)("h3",{id:"passing-input-props-in-github-actions"},"Passing input props in GitHub Actions"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/docs/ssr#render-using-github-actions"},"See: Render using GitHub Actions")),(0,i.mdx)("p",null,"When using GitHub Actions, you need to adjust the file at ",(0,i.mdx)("inlineCode",{parentName:"p"},".github/workflows/render-video.yml")," to make the inputs in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"workflow_dispatch")," section manually match the shape of the props your root component accepts."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yml",metastring:"{3,7}","{3,7}":!0},'workflow_dispatch:\n  inputs:\n    titleText:\n      description: "Which text should it say?"\n      required: true\n      default: "Welcome to Remotion"\n    titleColor:\n      description: "Which color should it be in?"\n      required: true\n      default: "black"\n')),(0,i.mdx)("h3",{id:"retrieve-input-props"},"Retrieve input props"),(0,i.mdx)("p",null,"Input props are passed to the component of your composition directly and you can access as regular React component props."),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Available since v2.0."),": You can also use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"getInputProps()")," function to retrieve props that you have given as an input. This is useful if you need to retrieve the props in a position where you are not inside your component, such as when determining the video duration, dimensions or frame rate."),(0,i.mdx)("h2",{id:"you-can-still-use-components-as-normal"},"You can still use components as normal"),(0,i.mdx)("p",null,"Even if you have registered a component as a sequence,\nyou can still use it as normal in your videos and pass it's props directly. Default props don't apply in this case."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},'<MyComponent propOne="hi" propTwo={10} />\n')))}u.isMDXComponent=!0}}]);