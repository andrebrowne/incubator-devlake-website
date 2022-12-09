"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[454],{45293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(87462),o=(t(67294),t(3905));t(61839);const s={title:"Configuring Jenkins",sidebar_position:5,description:"Config UI instruction for Jenkins"},a=void 0,l={unversionedId:"UserManuals/ConfigUI/Jenkins",id:"UserManuals/ConfigUI/Jenkins",title:"Configuring Jenkins",description:"Config UI instruction for Jenkins",source:"@site/docs/UserManuals/ConfigUI/Jenkins.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/Jenkins",permalink:"/docs/next/UserManuals/ConfigUI/Jenkins",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/ConfigUI/Jenkins.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Configuring Jenkins",sidebar_position:5,description:"Config UI instruction for Jenkins"},sidebar:"docsSidebar",previous:{title:"Configuring Jira",permalink:"/docs/next/UserManuals/ConfigUI/Jira"},next:{title:"Configuring Tapd",permalink:"/docs/next/UserManuals/ConfigUI/Tapd"}},r={},d=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Username (E-mail)",id:"username-e-mail",level:4},{value:"Password",id:"password",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Jobs",id:"jobs",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:d};function u(e){let{components:n,...s}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Visit config-ui: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,o.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jenkins-add-data-connections",src:t(88085).Z,width:"1806",height:"816"})),(0,o.kt)("h4",{id:"connection-name"},"Connection Name"),(0,o.kt)("p",null,"Name your connection."),(0,o.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,o.kt)("p",null,"This should be a valid REST API endpoint. Eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://ci.jenkins.io/"),". The endpoint url should end with ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,o.kt)("h4",{id:"username-e-mail"},"Username (E-mail)"),(0,o.kt)("p",null,"Your User ID for the Jenkins Instance."),(0,o.kt)("h4",{id:"password"},"Password"),(0,o.kt)("p",null,"For help on Username and Password, please see Jenkins docs on ",(0,o.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/using/using-credentials/"},"using credentials"),'. You can also use "API Access Token" for this field, which can be generated at ',(0,o.kt)("inlineCode",{parentName:"p"},"User")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Configure")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"API Token")," section on Jenkins."),(0,o.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,o.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/199530047-787b25d6-696a-4545-860c-9738d85a0076.png",alt:"image"})),(0,o.kt)("h4",{id:"jobs"},"Jobs"),(0,o.kt)("p",null,"Choose the Jenkins jobs to collect."),(0,o.kt)("h4",{id:"data-entities"},"Data Entities"),(0,o.kt)("p",null,"Jenkins only supports ",(0,o.kt)("inlineCode",{parentName:"p"},"CI/CD")," domain entities, transformed from Jenkins builds and stages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CI/CD: Jenkins builds, stages, etc.")),(0,o.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,o.kt)("p",null,"There are no transformation rules for Jenkins."),(0,o.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,o.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you run into any problem, please check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}u.isMDXComponent=!0},88085:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins-add-data-connections-4b19f9d274515055e7abcad83a7fce75.png"}}]);