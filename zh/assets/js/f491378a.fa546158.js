"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[550],{3839:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=o(87462),i=(o(67294),o(3905));o(61839);const l={title:"Install via Temporal",sidebar_position:6,description:"The steps to install DevLake in Temporal mode.\n"},n=void 0,r={unversionedId:"GettingStarted/TemporalSetup",id:"GettingStarted/TemporalSetup",title:"Install via Temporal",description:"The steps to install DevLake in Temporal mode.\n",source:"@site/docs/GettingStarted/TemporalSetup.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/TemporalSetup",permalink:"/zh/docs/next/GettingStarted/TemporalSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/GettingStarted/TemporalSetup.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Install via Temporal",sidebar_position:6,description:"The steps to install DevLake in Temporal mode.\n"},sidebar:"docsSidebar",previous:{title:"Install via Helm",permalink:"/zh/docs/next/GettingStarted/HelmSetup"},next:{title:"Install via Rainbond",permalink:"/zh/docs/next/GettingStarted/RainbondSetup"}},s={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Temporal Demo",id:"temporal-demo",level:2},{value:"Requirements",id:"requirements",level:3},{value:"How to setup",id:"how-to-setup",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Normally, DevLake would execute pipelines on a local machine (we call it ",(0,i.kt)("inlineCode",{parentName:"p"},"local mode"),"), it is sufficient most of the time. However, when you have too many pipelines that need to be executed in parallel, it can be problematic, as the horsepower and throughput of a single machine is limited."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"temporal mode")," was added to support distributed pipeline execution, you can fire up arbitrary workers on multiple machines to carry out those pipelines in parallel to overcome the limitations of a single machine."),(0,i.kt)("p",null,"But, be careful, many API services like JIRA/GITHUB have a request rate limit mechanism. Collecting data in parallel against the same API service with the same identity would most likely hit such limit."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"DevLake Server and Workers connect to the same temporal server by setting up ",(0,i.kt)("inlineCode",{parentName:"li"},"TEMPORAL_URL")),(0,i.kt)("li",{parentName:"ol"},"DevLake Server sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"pipeline")," to the temporal server, and one of the Workers pick it up and execute it")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT: This feature is in early stage of development. Please use with caution")),(0,i.kt)("h2",{id:"temporal-demo"},"Temporal Demo"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://temporal.io/"},"temporalio"))),(0,i.kt)("h3",{id:"how-to-setup"},"How to setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone and fire up the ",(0,i.kt)("a",{parentName:"li",href:"https://temporal.io/"},"temporalio")," services"),(0,i.kt)("li",{parentName:"ol"},"Clone this repo, and fire up DevLake with command ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose -f deployment/temporal/docker-compose-temporal.yml up -d"))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problem, please check the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/next/Troubleshooting/Installation"},"Troubleshooting")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0}}]);