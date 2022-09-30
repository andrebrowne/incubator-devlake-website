"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3080],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"DORA",sidebar_position:6,description:"DORA Metrics\n"},i=void 0,l={unversionedId:"UserManuals/DORA",id:"UserManuals/DORA",title:"DORA",description:"DORA Metrics\n",source:"@site/docs/UserManuals/DORA.md",sourceDirName:"UserManuals",slug:"/UserManuals/DORA",permalink:"/zh/docs/UserManuals/DORA",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/DORA.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"DORA",sidebar_position:6,description:"DORA Metrics\n"},sidebar:"docsSidebar",previous:{title:"Grafana User Guide",permalink:"/zh/docs/UserManuals/Dashboards/GrafanaUserGuide"},next:{title:"Team Configuration",permalink:"/zh/docs/UserManuals/TeamConfiguration"}},s={},p=[{value:"What are DORA metrics?",id:"what-are-dora-metrics",level:2},{value:"Why is DORA important?",id:"why-is-dora-important",level:2},{value:"How to view DORA metrics in Apache DevLake?",id:"how-to-view-dora-metrics-in-apache-devlake",level:2},{value:"An example to set up",id:"an-example-to-set-up",level:2},{value:"Collect data via <code>blueprint</code>",id:"collect-data-via-blueprint",level:3},{value:"Collect data via <code>webhook</code>",id:"collect-data-via-webhook",level:3},{value:"Customization",id:"customization",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes all things about DORA, why and how to implement DORA metrics with Apache DevLake."),(0,r.kt)("h2",{id:"what-are-dora-metrics"},"What are DORA metrics?"),(0,r.kt)("p",null,'Created six years ago by a team of researchers, DORA stands for "DevOps Research & Assessment" and is the answer to years of research, having examined thousands of teams, seeking a reliable and actionable approach to understanding the performance of software development teams.'),(0,r.kt)("p",null,"DORA has since become a standardized framework focused on the stability and velocity of development processes, one that avoids the more controversial aspects of productivity measurements and individual performance metrics."),(0,r.kt)("p",null,"There are two key clusters of data inside DORA: Velocity and Stability. The DORA framework is focused on keeping these two in context with each other, as a whole, rather than as independent variables, making the data more challenging to misinterpret or abuse. "),(0,r.kt)("p",null,"Within velocity are two core metrics: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/Metrics/DeploymentFrequency"},"Deployment Frequency"),": Number of successful deployments to production, how rapidly is your team releasing to users?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/Metrics/LeadTimeForChanges"},"Lead Time for Changes"),": How long does it take from commit to the code running in production? This is important, as it reflects how quickly your team can respond to user requirements.")),(0,r.kt)("p",null,"Naturally, if you are pushing a consistently high tempo, you also want to ensure that the work that is being delivered is reliable, and that downtime and failures are readily recoverable."),(0,r.kt)("p",null,"Stability is composed of two core metrics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/Metrics/MTTR"},"Median Time to Restore Service"),": How long does it take the team to properly recover from a failure once it is identified?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/Metrics/CFR"},"Change Failure Rate"),": How often are your deployments causing a failure?")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/71EUflb.png",alt:null})),(0,r.kt)("p",null,'To make DORA even more actionable, there are some well-established benchmarks providing a simple lens to determine if you are performing at "Elite", "High", "Medium", or "Low" levels. '),(0,r.kt)("h2",{id:"why-is-dora-important"},"Why is DORA important?"),(0,r.kt)("p",null,"DORA metrics help a team or project measure and improve software development practices to continuously deliver reliable products with user values."),(0,r.kt)("h2",{id:"how-to-view-dora-metrics-in-apache-devlake"},"How to view DORA metrics in Apache DevLake?"),(0,r.kt)("p",null,"It's easy to set up DORA metrics in DevLake. Usually, you can finish it in few steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Installation"),": Install Apache DevLake ",(0,r.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/GettingStarted"},"in different ways")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Collect data"),": Collect data via blueprint",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the blueprint, select the data you wish to collect, and make sure you have selected the data required for DORA metrics"),(0,r.kt)("li",{parentName:"ul"},"Configure DORA-related transformation rules to define ",(0,r.kt)("inlineCode",{parentName:"li"},"deployments")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"incidents")),(0,r.kt)("li",{parentName:"ul"},"Select a sync frequency for your data, save and run the blueprint."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"View DORA Dashboard"),": DevLake provides a built-in DORA dashboard. You can see the screenshot below or go to the ",(0,r.kt)("a",{parentName:"li",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo")," to play around.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/y1pUIsk.png",alt:"DORA Dashboard"}))),(0,r.kt)("p",null,"DevLake now supports Jenkins, GitHub Action and GitLabCI as data sources for ",(0,r.kt)("inlineCode",{parentName:"p"},"deployments")," data; Jira, GitHub issues and TAPD as the sources for ",(0,r.kt)("inlineCode",{parentName:"p"},"incidents")," data; Github PRs, GitLab MRs as the sources for ",(0,r.kt)("inlineCode",{parentName:"p"},"changes")," data. You can simply follow the instructions in the Blueprint to set them up."),(0,r.kt)("p",null,"However, if your CI/CD tools are not listed on the ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/SupportedDataSources"},"supported data sources")," page, DevLake provides incoming webhooks to push your ",(0,r.kt)("inlineCode",{parentName:"p"},"deployments")," data to DevLake. The webhook configuration doc can be found ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/UserManuals/ConfigUI/webhook/"},"here"),"."),(0,r.kt)("h2",{id:"an-example-to-set-up"},"An example to set up"),(0,r.kt)("p",null,"The following example shows the steps that a team needs to take to configure DORA metrics in DevLake. This team uses GitHub Action and CircleCI to do ",(0,r.kt)("inlineCode",{parentName:"p"},"deployments"),", GitHub PRs as ",(0,r.kt)("inlineCode",{parentName:"p"},"changes")," and Jira to manage ",(0,r.kt)("inlineCode",{parentName:"p"},"incidents"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prerequesites: please make sure you have set up Apache DevLake. If you have not done so, you can follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/GettingStarted"},"here"),".")),(0,r.kt)("h3",{id:"collect-data-via-blueprint"},"Collect data via ",(0,r.kt)("inlineCode",{parentName:"h3"},"blueprint")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit the config-ui at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"blueprint"),', let\'s name it "Blueprint for DORA", add a Jira and a GitHub connection. Click ',(0,r.kt)("inlineCode",{parentName:"p"},"Next Step"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/lpPRZ6v.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select Jira boards and GitHub repos to collect, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Next Step"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/Ko38n6J.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Transformations")," to configure for DORA metrics\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/Lhcu2DE.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To make it simple, fields with a ",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/rrLopFx.png",alt:null}),' label are DORA-related configurations for every data source. Via these fields, you can define what are "incidents" and "deployments" for each data source (see image below). After all the data connections have been configured, click ',(0,r.kt)("inlineCode",{parentName:"p"},"Next Step"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/newUvp0.png",alt:null}),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose sync frequency, click 'Save and Run Now' to start data collection. The duration varies along with the data source and the volume of data to collect.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/zPkfzGr.png",alt:null})))),(0,r.kt)("h3",{id:"collect-data-via-webhook"},"Collect data via ",(0,r.kt)("inlineCode",{parentName:"h3"},"webhook")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'In the meantime of collecting Jira and GitHub data via blueprint, please go to the data connections page. Click "Incoming Issue/Deployment Webhook" to import ',(0,r.kt)("inlineCode",{parentName:"p"},"deployments")," from CircleCI.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/VsKAJNK.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Issue/Deployment Incoming Webhook', create a webhook named \"CircleCI deployment\". You can see the generated post url.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ezRlT64.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit your CircleCI in a new tab. Go to the pipelines page. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration File"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/XwPzmyk.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the Deployment webhook urls in Step 8 to your config.yml. "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy and paste",(0,r.kt)("inlineCode",{parentName:"li"},"https://ui-my-svr02.demo.devlake.io/api/plugins/webhook/:webhook_id/cicd_tasks")," to trigger after the 'deployment' job is finished"),(0,r.kt)("li",{parentName:"ul"},"Copy and paste",(0,r.kt)("inlineCode",{parentName:"li"},"https://ui-my-svr02.demo.devlake.io/api/plugins/webhook/:webhook_id/cicd_pipeline/:pipelineName/finish")," to trigger after all CI jobs are finished\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/IUpb0dZ.jpg",alt:null}))),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run CircleCI workflow, you can see ",(0,r.kt)("inlineCode",{parentName:"p"},"deployments")," data in table.cicd_tasks in DevLake's database.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/4g1Cb2B.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the built-in ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:4000/grafana/d/qNo8_0M4z/dora?orgId=1"},"DORA dashboard")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": If you have any concern about the steps above, please read ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/UserManuals/ConfigUI/Tutorial"},"blueprint manuals")," (step 1-6) and ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/UserManuals/ConfigUI/webhook"},"webhook manuals")," (step 7-12) if you have any problems.")),(0,r.kt)("h3",{id:"customization"},"Customization"),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},"If you want to customize this DORA dashboard, please refer to the SQL in the docs for the four metrics: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/Metrics/DeploymentFrequency"},"Deployment Frequency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/Metrics/LeadTimeForChanges"},"Lead Time for Changes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/Metrics/MTTR"},"Median Time to Restore Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/Metrics/CFR"},"Change Failure Rate"))))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89 Congratulations! Now you have your own DORA dashboard. "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null))}m.isMDXComponent=!0}}]);