"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3782],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3357:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Temporal Setup",sidebar_position:5,description:"The steps to install DevLake in Temporal mode.\n"},p=void 0,s={unversionedId:"UserManuals/TemporalSetup",id:"UserManuals/TemporalSetup",title:"Temporal Setup",description:"The steps to install DevLake in Temporal mode.\n",source:"@site/docs/UserManuals/03-TemporalSetup.md",sourceDirName:"UserManuals",slug:"/UserManuals/TemporalSetup",permalink:"/docs/UserManuals/TemporalSetup",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/03-TemporalSetup.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Temporal Setup",sidebar_position:5,description:"The steps to install DevLake in Temporal mode.\n"},sidebar:"docsSidebar",previous:{title:"GitHub User Guide v0.10.0",permalink:"/docs/UserManuals/github-user-guide-v0.10.0"},next:{title:"Developer Setup",permalink:"/docs/DeveloperManuals/DeveloperSetup"}},u={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Temporal Demo",id:"temporal-demo",level:2},{value:"Requirements",id:"requirements",level:3},{value:"How to setup",id:"how-to-setup",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Normally, DevLake would execute pipelines on a local machine (we call it ",(0,a.kt)("inlineCode",{parentName:"p"},"local mode"),"), it is sufficient most of the time. However, when you have too many pipelines that need to be executed in parallel, it can be problematic, as the horsepower and throughput of a single machine is limited."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"temporal mode")," was added to support distributed pipeline execution, you can fire up arbitrary workers on multiple machines to carry out those pipelines in parallel to overcome the limitations of a single machine."),(0,a.kt)("p",null,"But, be careful, many API services like JIRA/GITHUB have a request rate limit mechanism. Collecting data in parallel against the same API service with the same identity would most likely hit such limit."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"DevLake Server and Workers connect to the same temporal server by setting up ",(0,a.kt)("inlineCode",{parentName:"li"},"TEMPORAL_URL")),(0,a.kt)("li",{parentName:"ol"},"DevLake Server sends a ",(0,a.kt)("inlineCode",{parentName:"li"},"pipeline")," to the temporal server, and one of the Workers pick it up and execute it")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT: This feature is in early stage of development. Please use with caution")),(0,a.kt)("h2",{id:"temporal-demo"},"Temporal Demo"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://temporal.io/"},"temporalio"))),(0,a.kt)("h3",{id:"how-to-setup"},"How to setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone and fire up  ",(0,a.kt)("a",{parentName:"li",href:"https://temporal.io/"},"temporalio")," services"),(0,a.kt)("li",{parentName:"ol"},"Clone this repo, and fire up DevLake with command ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose -f docker-compose-temporal.yml up -d"))))}d.isMDXComponent=!0}}]);