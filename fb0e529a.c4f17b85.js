(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{313:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return O}));var a=t(3),r=t(8),i=(t(0),t(323)),o=t(329),s=t(324),l={id:"loading-states",title:"Loading States with Suspense",slug:"/guided-tour/rendering/loading-states/"},c={unversionedId:"guided-tour/rendering/loading-states",id:"version-v11.0.0/guided-tour/rendering/loading-states",isDocsHomePage:!1,title:"Loading States with Suspense",description:"As you may have noticed, we mentioned that using usePreloadedQuery and useLazyLoadQuery will render data from a query that was being fetched from the server, but we didn't elaborate on how to render a loading UI (such as a glimmer) while that data is still being fetched. We will cover that in this section.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/rendering/loading-states.md",slug:"/guided-tour/rendering/loading-states/",permalink:"/docs/guided-tour/rendering/loading-states/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/guided-tour/rendering/loading-states.md",version:"v11.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1617978840,sidebar:"version-v11.0.0/docs",previous:{title:"Variables",permalink:"/docs/guided-tour/rendering/variables/"},next:{title:"Error States with ErrorBoundaries",permalink:"/docs/guided-tour/rendering/error-states/"}},u=[{value:"Loading fallbacks with Suspense Boundaries",id:"loading-fallbacks-with-suspense-boundaries",children:[]},{value:"Transitions and Updates that Suspend",id:"transitions-and-updates-that-suspend",children:[]},{value:"How We Use Suspense in Relay",id:"how-we-use-suspense-in-relay",children:[{value:"Queries",id:"queries",children:[]},{value:"Fragments",id:"fragments",children:[]},{value:"Transitions",id:"transitions",children:[]}]}],d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",n)}},p=d("FbSuspenseDefinition"),b=d("FbSuspenseMoreInfo"),h=d("FbSuspensePlaceholder"),m=d("FbSuspenseTransitionsAndUpdatesThatSuspend"),f=d("FbSuspenseInRelayFragments"),g=d("FbSuspenseInRelayTransitions"),y={toc:u};function O(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},y,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As you may have noticed, we mentioned that using ",Object(i.b)("inlineCode",{parentName:"p"},"usePreloadedQuery")," and ",Object(i.b)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," will render data from a query that was being fetched from the server, but we didn't elaborate on how to render a loading UI (such as a glimmer) while that data is still being fetched. We will cover that in this section."),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(p,{mdxType:"FbSuspenseDefinition"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)("p",null,"To render loading states while a query is being fetched, we rely on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/concurrent-mode-suspense.html"}),"React Suspense"),". Suspense is a new feature in React that allows components to interrupt or ",Object(i.b)("em",{parentName:"p"},'"suspend"'),' rendering in order to wait for some asynchronous resource (such as code, images or data) to be loaded; when a component "suspends", it indicates to React that the component isn\'t ',Object(i.b)("em",{parentName:"p"},'"ready"')," to be rendered yet, and won't be until the asynchronous resource it's waiting for is loaded. When the resource finally loads, React will try to render the component again.")),Object(i.b)("p",null,"This capability is useful for components to express asynchronous dependencies like data, code, or images that they require in order to render, and lets React coordinate rendering the loading states across a component tree as these asynchronous resources become available. More generally, the use of Suspense give us better control to implement more deliberately designed loading states when our app is loading for the first time or when it's transitioning to different states, and helps prevent accidental flickering of loading elements (such as spinners), which can commonly occur when loading sequences aren't explicitly designed and coordinated."),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(b,{mdxType:"FbSuspenseMoreInfo"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that this ",Object(i.b)("strong",{parentName:"p"},"DOES NOT"),' mean that "Suspense for Data Fetching" is ready for general implementation and adoption yet. ',Object(i.b)("strong",{parentName:"p"},"Support, general guidance, and requirements for usage of Suspense for Data Fetching are still not ready"),", and the React team is still defining what this guidance will be for upcoming React releases."),Object(i.b)("p",{parentName:"div"},"Even though there will be some limitations when Suspense is used in React 17, Relay Hooks are stable and on the trajectory for supporting upcoming releases of React."),Object(i.b)("p",{parentName:"div"},"For more information, see our ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"../../../migration-and-compatibility/suspense-compatibility/"}),"Suspense Compatibility"))," guide.")))),Object(i.b)("h2",{id:"loading-fallbacks-with-suspense-boundaries"},"Loading fallbacks with Suspense Boundaries"),Object(i.b)("p",null,"When a component is suspended, we need to render a ",Object(i.b)("em",{parentName:"p"},"fallback")," in place of the component while we wait for it to become ",Object(i.b)("em",{parentName:"p"},'"ready"'),". In order to do so, we use the ",Object(i.b)("inlineCode",{parentName:"p"},"Suspense")," component provided by React:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // Render a fallback using Suspense as a wrapper\n    <Suspense fallback={<LoadingGlimmer />}>\n      <CanSuspend />\n    </Suspense>\n  );\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Suspense")," components can be used to wrap any component; if the target component suspends, ",Object(i.b)("inlineCode",{parentName:"p"},"Suspense")," will render the provided fallback until all its descendants become ",Object(i.b)("em",{parentName:"p"},'"ready"')," (i.e. until ",Object(i.b)("em",{parentName:"p"},"all")," of the suspended components within the subtree resolve). Usually, the fallback is used to render fallback loading states such as a glimmers and placeholders."),Object(i.b)("p",null,"Usually, different pieces of content in our  app might suspend, so we can show loading state until they are resolved by using ",Object(i.b)("inlineCode",{parentName:"p"},"Suspense")," :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // LoadingGlimmer is rendered via the Suspense fallback\n    <Suspense fallback={<LoadingGlimmer />}>\n      <MainContent /> {/* MainContent may suspend */}\n    </Suspense>\n  );\n}\n")),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(h,{mdxType:"FbSuspensePlaceholder"})),Object(i.b)("p",null,"Let's distill what's going on here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," suspends because it's waiting on some asynchronous resource (like data), the ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense")," component that wraps ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," will detect that it suspended, and will render the ",Object(i.b)("inlineCode",{parentName:"li"},"fallback")," element (i.e. the ",Object(i.b)("inlineCode",{parentName:"li"},"LoadingGlimmer")," in this case) up until ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," is ready to be rendered. Note that this also transitively includes descendants of ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent"),", which might also suspend.")),Object(i.b)("p",null,"What's nice about Suspense is that you have granular control about how to accumulate loading states for different parts of your component tree:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // A LoadingGlimmer for *_all_* content is rendered via the Suspense fallback\n    <Suspense fallback={<LoadingGlimmer />}>\n      <MainContent />\n      <SecondaryContent /> {/* SecondaryContent can also suspend */}\n    </Suspense>\n  );\n}\n")),Object(i.b)(h,{mdxType:"FbSuspensePlaceholder"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In this case, both ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," and ",Object(i.b)("inlineCode",{parentName:"li"},"SecondaryContent")," may suspend while they load their asynchronous resources; by wrapping both in a ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense"),", we can show a single loading state up until they are ",Object(i.b)("em",{parentName:"li"},"all")," ready, and then render the entire content in a single paint, after everything has successfully loaded."),Object(i.b)("li",{parentName:"ul"},"In fact, ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," and ",Object(i.b)("inlineCode",{parentName:"li"},"SecondaryContent")," may suspend for different reasons other than fetching data, but the same ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense")," component can be used to render a fallback up until ",Object(i.b)("em",{parentName:"li"},"all")," components in the subtree are ready to be rendered. Note that this also transitively includes descendants of ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," or ",Object(i.b)("inlineCode",{parentName:"li"},"SecondaryContent"),", which might also suspend.")),Object(i.b)("p",null,"Conversely, you can also decide to be more granular about your loading UI and wrap Suspense components around smaller or individual parts of your component tree:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    <>\n      {/* Show a separate loading UI for the LeftHandColumn */}\n      <Suspense fallback={<LeftColumnPlaceholder />}>\n        <LeftColumn />\n      </Suspense>\n\n      {/* Show a separate loading UI for both the Main and Secondary content */}\n      <Suspense fallback={<LoadingGlimmer />}>\n        <MainContent />\n        <SecondaryContent />\n      </Suspense>\n    </>\n  );\n}\n")),Object(i.b)(h,{mdxType:"FbSuspensePlaceholder"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In this case, we're showing 2 separate loading UIs:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"One to be shown until the ",Object(i.b)("inlineCode",{parentName:"li"},"LeftColumn")," becomes ready"),Object(i.b)("li",{parentName:"ul"},"And one to be shown until both the ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," and ",Object(i.b)("inlineCode",{parentName:"li"},"SecondaryContent")," become ready."))),Object(i.b)("li",{parentName:"ul"},"What is powerful about this is that by more granularly wrapping our components in Suspense, ",Object(i.b)("em",{parentName:"li"},"we allow other components to be rendered earlier as they become ready"),". In our example, by separately wrapping ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," and ",Object(i.b)("inlineCode",{parentName:"li"},"SecondaryContent")," under ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense"),", we're allowing ",Object(i.b)("inlineCode",{parentName:"li"},"LeftColumn")," to render as soon as it becomes ready, which might be earlier than when the content sections become ready.")),Object(i.b)("h2",{id:"transitions-and-updates-that-suspend"},"Transitions and Updates that Suspend"),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(m,{mdxType:"FbSuspenseTransitionsAndUpdatesThatSuspend"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Suspense")," boundary fallbacks allow us to describe our loading placeholders when initially rendering some content, but our applications will also have transitions between different content. Specifically, when switching between two components within an already mounted boundary, the new component you're switching to might not have loaded all of its async dependencies, which means that it might also suspend."),Object(i.b)("p",null,"In these cases, we would still show the ",Object(i.b)("inlineCode",{parentName:"p"},"Suspense")," boundary fallbacks. However, this means that we would hide existing content in favor of showing the ",Object(i.b)("inlineCode",{parentName:"p"},"Suspense")," fallback. In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.")),Object(i.b)("h2",{id:"how-we-use-suspense-in-relay"},"How We Use Suspense in Relay"),Object(i.b)("h3",{id:"queries"},"Queries"),Object(i.b)("p",null,"In our case, our query components are components that can suspend, so we use Suspense to render loading states while a query is being fetched. Let's see what that looks like in practice:"),Object(i.b)("p",null,"Say we have the following query renderer component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * MainContent.react.js\n *\n * Query Component\n */\n\nconst React = require('React');\nconst {graphql, usePreloadedQuery} = require('react-relay');\n\nfunction MainContent(props) {\n  // Fetch and render a query\n  const data = usePreloadedQuery<...>(\n    graphql`...`,\n    props.queryRef,\n  );\n\n  return (...);\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // LoadingGlimmer is rendered via the Suspense fallback\n    <Suspense fallback={<LoadingGlimmer />}>\n      <MainContent /> {/* MainContent may suspend */}\n    </Suspense>\n  );\n}\n")),Object(i.b)(h,{mdxType:"FbSuspensePlaceholder"}),Object(i.b)("p",null,"Let's distill what's going on here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We have a ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," component, which is a query renderer that fetches and renders a query. ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," will ",Object(i.b)("em",{parentName:"li"},"suspend")," rendering when it attempts to fetch the query, indicating that it isn't ready to be rendered yet, and it will resolve when the query is fetched."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense "),"component that wraps ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," will detect that ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," suspended, and will render the ",Object(i.b)("inlineCode",{parentName:"li"},"fallback")," element (i.e. the ",Object(i.b)("inlineCode",{parentName:"li"},"LoadingGlimmer")," in this case) up until ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," is ready to be rendered; that is, up until the query is fetched.")),Object(i.b)("h3",{id:"fragments"},"Fragments"),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(f,{mdxType:"FbSuspenseInRelayFragments"})),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)("p",null,"Fragments are also integrated with Suspense in order to support rendering of data that's being ",Object(i.b)("inlineCode",{parentName:"p"},"@defer'"),"d or data that's partially available in the Relay Store (i.e. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../reusing-cached-data/rendering-partially-cached-data/"}),"partial rendering"),").")),Object(i.b)("h3",{id:"transitions"},"Transitions"),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(g,{mdxType:"FbSuspenseInRelayTransitions"})),Object(i.b)("p",null,"Additionally, our APIs for refetching (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../refetching/"}),"Refreshing and Refetching"),") and for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../list-data/connections/"}),"rendering connections")," are also integrated with Suspense; for these use cases, these APIs will also suspend."),Object(i.b)(o.a,{mdxType:"DocsRating"}))}O.isMDXComponent=!0},323:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return t?r.a.createElement(h,s(s({ref:n},c),{},{components:t})):r.a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},324:function(e,n,t){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,n,t,a){void 0===a&&(a=t),Object.defineProperty(e,a,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,a){void 0===a&&(a=t),e[a]=n[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return r(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=i(t(327));const o=["internal","external"];let s;try{s=t(325).usePluginData}catch(p){s=null}function l(e){return u(e),d()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||s&&s("internaldocs-fb").FB_INTERNAL}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=u,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(326))},325:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return r})),t.d(n,"useAllPluginInstancesData",(function(){return i})),t.d(n,"usePluginData",(function(){return o}));var a=t(22);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var n=r()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function o(e,n){void 0===n&&(n="default");var t=i(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},326:function(e,n){var t,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var l,c=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&b())}function b(){if(!u){var e=s(p);u=!0;for(var n=c.length;n;){for(l=c,c=[];++d<n;)l&&l[d].run();d=-1,n=c.length}l=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(n){try{return a.call(null,e)}catch(n){return a.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function m(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];c.push(new h(e,n)),1!==c.length||u||s(b)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},327:function(e,n,t){"use strict";var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(n){i(n)}}function s(e){try{l(a.throw(e))}catch(n){i(n)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}l((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const r=t(328);n.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,n,t){"use strict";var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(n){i(n)}}function s(e){try{l(a.throw(e))}catch(n){i(n)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}l((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,i=0;const o={};n.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=i++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,s),t}))}},329:function(e,n,t){"use strict";t(61);var a=t(324),r=t(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),n)}var s=function(){var e=r.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},c=function(){return r.createElement(o,null,r.createElement(l,null),r.createElement(s,null))},u=function(){return r.createElement(o,null,r.createElement(s,null))};n.a=function(){return Object(a.fbContent)({internal:r.createElement(c,null),external:r.createElement(u,null)})}}}]);