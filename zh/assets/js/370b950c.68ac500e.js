"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4593],{3659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));n(61839);const a={title:"Configuring GitLab",sidebar_position:3,description:"Config UI instruction for GitLab"},s=void 0,l={unversionedId:"UserManuals/ConfigUI/GitLab",id:"UserManuals/ConfigUI/GitLab",title:"Configuring GitLab",description:"Config UI instruction for GitLab",source:"@site/docs/UserManuals/ConfigUI/GitLab.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/GitLab",permalink:"/zh/docs/next/UserManuals/ConfigUI/GitLab",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/ConfigUI/GitLab.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configuring GitLab",sidebar_position:3,description:"Config UI instruction for GitLab"},sidebar:"docsSidebar",previous:{title:"Configuring GitHub",permalink:"/zh/docs/next/UserManuals/ConfigUI/GitHub"},next:{title:"Configuring Jira",permalink:"/zh/docs/next/UserManuals/ConfigUI/Jira"}},r={},c=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Auth Token(s)",id:"auth-tokens",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Projects",id:"projects",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Visit config-ui: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,o.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gitlab-add-data-connections",src:n(52438).Z,width:"1868",height:"820"})),(0,o.kt)("h4",{id:"connection-name"},"Connection Name"),(0,o.kt)("p",null,"Name your connection."),(0,o.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,o.kt)("p",null,"This should be a valid REST API endpoint. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are using gitlab.com, the endpoint will be ",(0,o.kt)("inlineCode",{parentName:"li"},"https://gitlab.com/api/v4/")),(0,o.kt)("li",{parentName:"ul"},"If you are self-hosting GitLab, the endpoint will look like ",(0,o.kt)("inlineCode",{parentName:"li"},"https://gitlab.example.com/api/v4/"),"\nThe endpoint url should end with ",(0,o.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,o.kt)("h4",{id:"auth-tokens"},"Auth Token(s)"),(0,o.kt)("p",null,"GitLab personal access tokens are required to add a connection. Learn about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"how to create a GitLab personal access token"),"."),(0,o.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,o.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,o.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,o.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/199533780-f506b308-6808-499c-90db-b39fcda27888.png",alt:"image"})),(0,o.kt)("h4",{id:"projects"},"Projects"),(0,o.kt)("p",null,"Choose the Gitlab projects to collect. Limited by GitLab API, You need to type more than 2 characters to search."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'If you want to collect public repos in GitLab, please uncheck "Only search my repositories" to find all repos.')),(0,o.kt)("h4",{id:"data-entities"},"Data Entities"),(0,o.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain GitLab entities, you can unselect some entities to accerlerate the collection speed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Issue Tracking: GitLab issues, issue comments, issue labels, etc."),(0,o.kt)("li",{parentName:"ul"},"Source Code Management: GitLab repos, refs, commits, etc."),(0,o.kt)("li",{parentName:"ul"},"Code Review: GitLab MRs, MR comments and reviews, etc."),(0,o.kt)("li",{parentName:"ul"},"CI/CD: GitLab pipelines, jobs, etc."),(0,o.kt)("li",{parentName:"ul"},"Cross Domain: GitLab accounts, etc.")),(0,o.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,o.kt)("p",null,"There are no transformation rules for GitLab repos."),(0,o.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,o.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you run into any problem, please check the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}p.isMDXComponent=!0},52438:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gitlab-add-data-connections-6c96844ff8ecb8db88079f83185fb3f0.png"}}]);