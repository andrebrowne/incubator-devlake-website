"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[15476],{25074:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));i(61839);const o={title:"GitHub",sidebar_position:2,description:"Config UI instruction for GitHub"},l=void 0,s={unversionedId:"Configuration/GitHub",id:"version-v0.18/Configuration/GitHub",title:"GitHub",description:"Config UI instruction for GitHub",source:"@site/versioned_docs/version-v0.18/Configuration/GitHub.md",sourceDirName:"Configuration",slug:"/Configuration/GitHub",permalink:"/zh/docs/v0.18/Configuration/GitHub",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.18/Configuration/GitHub.md",tags:[],version:"v0.18",sidebarPosition:2,frontMatter:{title:"GitHub",sidebar_position:2,description:"Config UI instruction for GitHub"},sidebar:"docsSidebar",previous:{title:"BitBucket Cloud",permalink:"/zh/docs/v0.18/Configuration/BitBucket"},next:{title:"GitLab",permalink:"/zh/docs/v0.18/Configuration/GitLab"}},r={},p=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Step 1.1 - Authentication",id:"step-11---authentication",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Personal Access Token(s)",id:"personal-access-tokens",level:4},{value:"GitHub Personal Access Tokens(Recommended)",id:"github-personal-access-tokensrecommended",level:5},{value:"Fine-grained Personal Access Tokens",id:"fine-grained-personal-access-tokens",level:5},{value:"Use Graphql APIs",id:"use-graphql-apis",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 1.2 - Add Data Scopes",id:"step-12---add-data-scopes",level:3},{value:"Repositories",id:"repositories",level:4},{value:"Step 1.3 - Add Scope Config (Optional)",id:"step-13---add-scope-config-optional",level:3},{value:"Issue Tracking",id:"issue-tracking",level:4},{value:"CI/CD",id:"cicd",level:4},{value:"Code Review",id:"code-review",level:4},{value:"Additional Settings (Optional)",id:"additional-settings-optional",level:4},{value:"Step 2 - Collect Data in a Project",id:"step-2---collect-data-in-a-project",level:2},{value:"Step 2.1 - Create a Project",id:"step-21---create-a-project",level:3},{value:"Step 2.2 - Add a GitHub Connection",id:"step-22---add-a-github-connection",level:3},{value:"Step 2.3 - Set the Sync Policy",id:"step-23---set-the-sync-policy",level:3},{value:"Step 2.4 - Start Data Collection",id:"step-24---start-data-collection",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit Config UI at: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,"On the Connections page, you can select GitHub and create a new connection or it."),(0,a.kt)("h3",{id:"step-11---authentication"},"Step 1.1 - Authentication"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-add-data-connections",src:i(80714).Z,width:"2280",height:"1420"})),(0,a.kt)("h4",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint, eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.github.com/"),". The URL should end with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,a.kt)("h4",{id:"personal-access-tokens"},"Personal Access Token(s)"),(0,a.kt)("p",null,"You can use one of the following GitHub tokens: personal access tokens(PATs) or fine-grained personal access tokens."),(0,a.kt)("h5",{id:"github-personal-access-tokensrecommended"},"GitHub Personal Access Tokens(Recommended)"),(0,a.kt)("p",null,"Learn about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"how to create a GitHub personal access token"),". The following permissions are required to collect data from repositories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo:status")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo_deployment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"read:user")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"read:org"))),(0,a.kt)("p",null,"However, if you want to collect data from private repositories, the following permissions are required:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"read:user")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"read:org"))),(0,a.kt)("p",null,"The difference is that you have to give full permission for ",(0,a.kt)("inlineCode",{parentName:"p"},"repos"),", not just ",(0,a.kt)("inlineCode",{parentName:"p"},"repo:status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"repo_deployment"),". Starting from v0.18.0, DevLake provides the auto-check for the permissions of your token(s)."),(0,a.kt)("p",null,"The data collection speed is restricted by the ",(0,a.kt)("strong",{parentName:"p"},"rate limit of ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting"},"5,000 requests")," per hour per token")," (15,000 requests/hour if you pay for GitHub enterprise). You can accelerate data collection by configuring ",(0,a.kt)("em",{parentName:"p"},"multiple")," personal access tokens. Please note that multiple tokens should be created by different GitHub accounts. Tokens belonging to the same GitHub account share the rate limit."),(0,a.kt)("h5",{id:"fine-grained-personal-access-tokens"},"Fine-grained Personal Access Tokens"),(0,a.kt)("p",null,"Note: this token doesn't support GraphQL APIs. You have to disable ",(0,a.kt)("inlineCode",{parentName:"p"},"Use GraphQL APIs")," on the connection page if you want to use it. However, this will significantly increase the data collection time."),(0,a.kt)("p",null,"If you're concerned with giving classic PATs full unrestricted access to your repositories, you can use fine-grained PATs announced by GitHub recently. With fine-grained PATs, GitHub users can create read-only PATs that only have access to repositories under certain GitHub orgs. But in order to do that, org admin needs to enroll that org with fine-grained PATs beta feature first. Please check ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token"},"this doc")," for more details.\nThe token should be granted read-only permission for the following entities."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Actions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Contents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Discussions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Issues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Metadata")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Pull requests"))),(0,a.kt)("h4",{id:"use-graphql-apis"},"Use Graphql APIs"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com")," or your on-premise GitHub version supports GraphQL APIs, toggle on this setting to collect data quicker."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GraphQL APIs are 10+ times faster than REST APIs, but they may not be supported in GitHub on-premise versions."),(0,a.kt)("li",{parentName:"ul"},"Instead of using multiple tokens to collect data, you can use ONLY ONE token because GraphQL APIs are quick enough.")),(0,a.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,a.kt)("p",null,"DevLake uses a dynamic rate limit to collect GitHub data. You can adjust the rate limit if you want to increase or lower the speed."),(0,a.kt)("p",null,"The maximum rate limit for GitHub is ",(0,a.kt)("strong",{parentName:"p"}," ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting"},"5,000 requests/hour"))," (15,000 requests/hour if you pay for GitHub enterprise). Please do not use a rate that exceeds this number."),(0,a.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h3",{id:"step-12---add-data-scopes"},"Step 1.2 - Add Data Scopes"),(0,a.kt)("h4",{id:"repositories"},"Repositories"),(0,a.kt)("p",null,"Choose the GitHub repositories you wish to collect either by finding them in the miller column, or searching. You can only add public repositories through the search box."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-set-data-scope",src:i(88963).Z,width:"1624",height:"1184"})),(0,a.kt)("h3",{id:"step-13---add-scope-config-optional"},"Step 1.3 - Add Scope Config (Optional)"),(0,a.kt)("p",null,"Scope config contains two parts: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The entities of which domain you wish to collect: Usually, you don't have to modify this part. However, if you don't want to collect certain GitHub entities, you can unselect some entities to accerlerate the collection speed.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: GitHub issues, issue comments, issue labels, etc."),(0,a.kt)("li",{parentName:"ul"},"Source Code Management: GitHub repos, refs, commits, etc."),(0,a.kt)("li",{parentName:"ul"},"Code Review: GitHub PRs, PR comments and reviews, etc."),(0,a.kt)("li",{parentName:"ul"},"CI/CD: GitHub Workflow runs, GitHub Workflow jobs, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: GitHub accounts, etc."))),(0,a.kt)("li",{parentName:"ul"},"The transformations on the GitHub data you are going to collect.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The details of the transformations will be exlained below."),(0,a.kt)("li",{parentName:"ul"},'Without adding transformation rules, you can still view the "',(0,a.kt)("a",{parentName:"li",href:"/livedemo/DataSources/GitHub"},"GitHub Metrics"),'" dashboard. However, if you want to view "',(0,a.kt)("a",{parentName:"li",href:"/livedemo/QAEngineers/WeeklyBugRetro"},"Weekly Bug Retro"),'", "',(0,a.kt)("a",{parentName:"li",href:"/livedemo/OSSMaintainers/WeeklyCommunityRetro"},"Weekly Community Retro"),'" or other pre-built dashboards, the following transformation rules, especially "Type/Bug", should be added.'),(0,a.kt)("li",{parentName:"ul"},"Each GitHub repo has at most ONE set of transformations.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-add-transformation-rules-list",src:i(58780).Z,width:"2372",height:"740"}),"\n",(0,a.kt)("img",{alt:"github-add-transformation-rules",src:i(11703).Z,width:"1894",height:"2807"})),(0,a.kt)("h4",{id:"issue-tracking"},"Issue Tracking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Severity: Parse the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"severity")," from issue labels."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when your issue labels for severity level are like 'severity/p0', 'severity/p1', 'severity/p2', then input 'severity/(.","*",")$'"),(0,a.kt)("li",{parentName:"ul"},"when your issue labels for severity level are like 'p0', 'p1', 'p2', then input '(p0|p1|p2)$'"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Component: Same as "Severity".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Priority: Same as "Severity".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type/Requirement: The ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),' of issues with labels that match given regular expression will be set to "REQUIREMENT". Unlike "PR.type", submatch does nothing, because for issue management analysis, users tend to focus on 3 kinds of types (Requirement/Bug/Incident), however, the concrete naming varies from repo to repo, time to time, so we decided to standardize them to help analysts metrics.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Type/Bug: Same as "Type/Requirement", with ',(0,a.kt)("inlineCode",{parentName:"p"},"type"),' setting to "BUG".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Type/Incident: Same as "Type/Requirement", with ',(0,a.kt)("inlineCode",{parentName:"p"},"type"),' setting to "INCIDENT".'))),(0,a.kt)("h4",{id:"cicd"},"CI/CD"),(0,a.kt)("p",null,"This set of configurations is used for calculating ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/v0.18/DORA"},"DORA metrics"),"."),(0,a.kt)("p",null,"If you're using GitHub Action to conduct ",(0,a.kt)("inlineCode",{parentName:"p"},"deployments"),', please select "Detect Deployment from Jobs in GitHub Action", and input the RegEx in the following fields:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment: A GitHub Action job with a name that matches the given regEx will be considered as a deployment."),(0,a.kt)("li",{parentName:"ul"},"Production: A GitHub Action job with a name that matches the given regEx will be considered a job in the production environment.")),(0,a.kt)("p",null,"A GitHub workflow run has many jobs. Each GitHub workflow run is converted to a\ncicd_pipeline in the domain layer and each GitHub Action job is converted to a cicd_task in the domain layer.\n",(0,a.kt)("img",{alt:"github-action-run",src:i(96961).Z,width:"1194",height:"446"}),"\n",(0,a.kt)("img",{alt:"github-action-job",src:i(38843).Z,width:"1194",height:"612"})),(0,a.kt)("p",null,"The deployment and production regex is always applied to the records in the cicd_tasks table."),(0,a.kt)("p",null,'You can also select "Not using Jobs in GitHub Action as Deployments" if you\'re not using GitHub action to conduct deployments.'),(0,a.kt)("h4",{id:"code-review"},"Code Review"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: The ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of pull requests will be parsed from PR labels by given regular expression. For example:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when your labels for PR types are like 'type/feature-development', 'type/bug-fixing' and 'type/docs', please input 'type/(.","*",")$'"),(0,a.kt)("li",{parentName:"ul"},"when your labels for PR types are like 'feature-development', 'bug-fixing' and 'docs', please input '(feature-development|bug-fixing|docs)$'"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Component: The ",(0,a.kt)("inlineCode",{parentName:"p"},"component")," of pull requests will be parsed from PR labels by given regular expression."))),(0,a.kt)("h4",{id:"additional-settings-optional"},"Additional Settings (Optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Tags Limit: It\'ll compare the last N pairs of tags to get the "commit diff\', "issue diff" between tags. N defaults to 10.'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"commit diff: new commits for a tag relative to the previous one"),(0,a.kt)("li",{parentName:"ul"},"issue diff: issues solved by the new commits for a tag relative to the previous one"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tags Pattern: Only tags that meet given regular expression will be counted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Tags Order: Only "reverse semver" order is supported for now.'))),(0,a.kt)("p",null,"Please click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save")," to save the transformation rules for the repo. In the data scope list, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next Step")," to continue configuring."),(0,a.kt)("h2",{id:"step-2---collect-data-in-a-project"},"Step 2 - Collect Data in a Project"),(0,a.kt)("h3",{id:"step-21---create-a-project"},"Step 2.1 - Create a Project"),(0,a.kt)("p",null,"Collecing GitHub data reuiqres creating a project first. You can visit the Project page from the side menu and create a new project by following the instructions on the user interface."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-a-project",src:i(51104).Z,width:"1624",height:"684"})),(0,a.kt)("h3",{id:"step-22---add-a-github-connection"},"Step 2.2 - Add a GitHub Connection"),(0,a.kt)("p",null,"You can add a previously configured GitHub connection to the project and select the boards for which you wish to collect the data for.\nPlease note: if you don't see the repositories you are looking for, please check if you have added them to the connection first."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"add-a-connection",src:i(8517).Z,width:"2394",height:"624"})),(0,a.kt)("h3",{id:"step-23---set-the-sync-policy"},"Step 2.3 - Set the Sync Policy"),(0,a.kt)("p",null,"There are three settings for Sync Policy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data Time Range: You can select the time range of the data you wish to collect. The default is set to the past six months."),(0,a.kt)("li",{parentName:"ul"},"Sync Frequency: You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,a.kt)("li",{parentName:"ul"},"Skip Failed Tasks: sometime a few tasks may fail in a long pipeline; you can choose to skip them to avoid spending more time in running the pipeline all over again.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sync-policy",src:i(937).Z,width:"2428",height:"336"})),(0,a.kt)("h3",{id:"step-24---start-data-collection"},"Step 2.4 - Start Data Collection"),(0,a.kt)("p",null,'Click on "Collect Data" to start collecting data for the whole project. You can check the status in the Status tab on the same page.\n',(0,a.kt)("img",{alt:"collect-data",src:i(50849).Z,width:"2410",height:"664"})),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/v0.18/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}u.isMDXComponent=!0},38843:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-action-job-9c30243e63c1731fcac7f35f1e6e9aa5.png"},96961:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-action-run-321793e23959ffae0597e53aab1bd8f5.png"},8517:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/add-a-connection-project-4032e8e9a72cb4a6df81b6ced714205e.png"},50849:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/collect-data-5919e2e6ddad525bca4fbcb46e672aff.png"},51104:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create-a-project-20e220196044bbf9be564773c45c5990.png"},88963:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-add-data-scopes-de766e05a42c88954b66757efae19acc.png"},80714:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-create-a-connection-29962b92b1f53daa4bc9eb388743f63c.png"},58780:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-scope-config-3fc69efcca404c7e07a30c456d3b7cf8.png"},11703:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-set-transformation2-b02f0687b279efb13f545b4aa941a9bd.png"},937:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/sync-policy-2ac941b2918fc873626375dfe4cbf5f5.png"}}]);