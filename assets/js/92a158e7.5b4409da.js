"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[18976],{97531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(87462),o=(a(67294),a(3905));a(61839);const n={title:"Tutorial",sidebar_position:1,description:"Config UI instruction"},r=void 0,l={unversionedId:"Configuration/Tutorial",id:"version-v0.19/Configuration/Tutorial",title:"Tutorial",description:"Config UI instruction",source:"@site/versioned_docs/version-v0.19/Configuration/Tutorial.md",sourceDirName:"Configuration",slug:"/Configuration/Tutorial",permalink:"/docs/v0.19/Configuration/Tutorial",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.19/Configuration/Tutorial.md",tags:[],version:"v0.19",sidebarPosition:1,frontMatter:{title:"Tutorial",sidebar_position:1,description:"Config UI instruction"},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/v0.19/Configuration"},next:{title:"BitBucket Cloud",permalink:"/docs/v0.19/Configuration/BitBucket"}},s={},c=[{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Step 2 - Collect Data in a Project",id:"step-2---collect-data-in-a-project",level:3},{value:"Step 3 - Check the Data in Grafana Dashboards",id:"step-3---check-the-data-in-grafana-dashboards",level:3},{value:"Examples",id:"examples",level:2},{value:"Q&amp;A",id:"qa",level:2},{value:"Q1. What are the specific sync policies to configure?",id:"q1-what-are-the-specific-sync-policies-to-configure",level:4},{value:"Q2. What data collection modes do DevLake support?",id:"q2-what-data-collection-modes-do-devlake-support",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"1. What can be done when a data collection failed or partially succeeded?",id:"1-what-can-be-done-when-a-data-collection-failed-or-partially-succeeded",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apache DevLake Config UI provides a user-friendly interface for configuring the data collection process. To access the Config UI, please visit http://localhost:4000."),(0,o.kt)("h2",{id:"basic-configuration"},"Basic Configuration"),(0,o.kt)("p",null,"To ensure the proper functioning of DevLake, follow these two key steps:"),(0,o.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(64626).Z,width:"2006",height:"1183"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 1.1 - Add a connection. Configure the endpoint and authentication details to connect to the source data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 1.2 - Add data scope, such as Git repositories, issue boards, or CI/CD pipelines, to determine what data should be collected.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 1.3 - Add scope config (optional). Define the specific data entities within the data scope for collection or apply transformation rules to the raw API responses."))),(0,o.kt)("h3",{id:"step-2---collect-data-in-a-project"},"Step 2 - Collect Data in a Project"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 2.1 - Create a project. DevLake assesses DORA metrics at the project level. For more information on organizing DevLake projects, please refer to ",(0,o.kt)("a",{parentName:"p",href:"../GettingStarted/HowToOrganizeDevlakeProjects"},"how to organize DevLake projects")," for more details.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 2.2 - Associate connection(s) with the project. When associating a connection with a project, you can select specific data scopes. All connections linked to the same project will be considered part of the same project for calculating DORA metrics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 2.3 - Set the synchronization policy. Specify the sync frequency, time range and the skip-on-fail option for your data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 2.4 - Start data collection. Choose the desired ",(0,o.kt)("a",{parentName:"p",href:"#step-2---collect-data-in-a-project"},"mode")," for collecting data."))),(0,o.kt)("h3",{id:"step-3---check-the-data-in-grafana-dashboards"},"Step 3 - Check the Data in Grafana Dashboards"),(0,o.kt)("p",null,'To view the collected data, click on the "Dashboards" button located in the top-right corner of Config UI. For detailed instructions, please refer to the ',(0,o.kt)("a",{parentName:"p",href:"/docs/v0.19/Configuration/Dashboards/GrafanaUserGuide"},"Grafana manuals"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"For detailed examples, please refer to the respective documentation files available in this folder, such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.19/Configuration/GitHub"},"GitHub configuration"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.19/Configuration/GitLab"},"GitLab configuration"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.19/Configuration/Jira"},"Jira configuration")," and more. They provide step-by-step instructions and guidance for configuring DevLake with different platforms."),(0,o.kt)("h2",{id:"qa"},"Q&A"),(0,o.kt)("h4",{id:"q1-what-are-the-specific-sync-policies-to-configure"},"Q1. What are the specific sync policies to configure?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Time Filter: This allows you to select the desired time range for syncing data, optimizing the collection process.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Frequency: You can determine the frequency of data synchronization by choosing a sync frequency option or specifying a cron code for a custom schedule.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Running Policy: By default, the "Skip failed tasks" option is enabled. This helps prevent data loss in scenarios where you are collecting a large volume of data (e.g., 10+ GitHub repositories, Jira boards, etc.). When a task fails, this policy allows the pipeline to continue running, preserving the data collected by successful tasks. You can rerun the failed tasks later from the blueprint\'s detail page.'))),(0,o.kt)("h4",{id:"q2-what-data-collection-modes-do-devlake-support"},"Q2. What data collection modes do DevLake support?"),(0,o.kt)("p",null,"Three modes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Collect Data (Default)"),": This mode retrieves data within the specified time range. Tools and entities that support incremental refresh will utilize this method, while those that only support full refresh will perform a full refresh. This mode is the default choice for recurring pipelines."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Collect Data in Full Refresh Mode"),": In this mode, all existing data within the designated time range will be deleted and re-collected. It is useful for removing outdated or irrelevant data from DevLake that no longer exists in the original tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Re-transform Data"),": This mode does not collect new data. Instead, it applies the latest transformation rules from the Scope Config to the existing data.")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h4",{id:"1-what-can-be-done-when-a-data-collection-failed-or-partially-succeeded"},"1. What can be done when a data collection failed or partially succeeded?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First, re-run the failed task once all other tasks have completed. If the task still fails, proceed to the next steps.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Capture a screenshot of the error message associated with the failed task.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Download the logs from the pipeline for further analysis.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"GitHub repository")," and create a bug report. Include the captured screenshot and the downloaded logs in the bug report."),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"img",src:a(15898).Z,width:"1755",height:"835"})))),(0,o.kt)("p",null,"For other problems, please check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.19/Troubleshooting/Configuration"},"troubleshooting")," doc, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue"),", or contact us on ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/devlake-io/shared_invite/zt-17b6vuvps-x98pqseoUagM7EAmKC82xQ"},"Slack"),"."))}d.isMDXComponent=!0},15898:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/blueprint-edit3-beff0ecb765048a9a008d2b06c0c268a.png"},64626:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/data-connections-33cb6723203fd68be912aee3360a62f5.png"}}]);