"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[81667],{74918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(61839);const l={title:"Developer Setup",description:"The steps to install DevLake in developer mode.\n",sidebar_position:1},o=void 0,r={unversionedId:"DeveloperManuals/DeveloperSetup",id:"version-v0.17/DeveloperManuals/DeveloperSetup",title:"Developer Setup",description:"The steps to install DevLake in developer mode.\n",source:"@site/versioned_docs/version-v0.17/DeveloperManuals/DeveloperSetup.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/DeveloperSetup",permalink:"/zh/docs/DeveloperManuals/DeveloperSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/DeveloperManuals/DeveloperSetup.md",tags:[],version:"v0.17",sidebarPosition:1,frontMatter:{title:"Developer Setup",description:"The steps to install DevLake in developer mode.\n",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Developer Manuals",permalink:"/zh/docs/DeveloperManuals"},next:{title:"Source Code References",permalink:"/zh/docs/DeveloperManuals/SourceCodeReference"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"How to setup dev environment",id:"how-to-setup-dev-environment",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"DB migrations",id:"db-migrations",level:2},{value:"Using DevLake API",id:"using-devlake-api",level:2},{value:"Developing dashboards",id:"developing-dashboards",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Compiling",id:"compiling",level:2},{value:"References",id:"references",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://docs.docker.com/get-docker",target:"_blank"},"Docker v19.03.10+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://golang.org/doc/install",target:"_blank"},"Golang v1.19+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://www.gnu.org/software/make/",target:"_blank"},"GNU Make"),"- Mac (Preinstalled) - Windows: [Download](http://gnuwin32.sourceforge.net/packages/make.htm) - Ubuntu: `sudo apt-get install build-essential libssl-dev`")),(0,i.kt)("h2",{id:"how-to-setup-dev-environment"},"How to setup dev environment"),(0,i.kt)("p",null,"The following guide will walk through how to run DevLake's frontend (",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui"),") and backend in dev mode."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to where you would like to install this project and clone the repository:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/apache/incubator-devlake.git\ncd incubator-devlake\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install dependencies for plugins:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/refdiff#development"},"RefDiff")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Go packages"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd backend\ngo get\ncd ..\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the sample config file to new local file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cp .env.example .env\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the following variables in the file ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DB_URL"),": Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql:3306")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3306")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the MySQL and Grafana containers:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Make sure the Docker daemon is running before this step.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d mysql grafana\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui")," in dev mode in two separate terminals:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# run devlake\nmake dev\n# run config-ui\nmake configure-dev\n")),(0,i.kt)("p",{parentName:"li"},"For common errors, please see ",(0,i.kt)("a",{parentName:"p",href:"#troubleshotting"},"Troubleshooting"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Config UI is running at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:4000")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For how to use Config UI, please refer to our ",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/Configuration/Tutorial"},"tutorial"))))),(0,i.kt)("h2",{id:"running-tests"},"Running Tests"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# install mockery\ngo install github.com/vektra/mockery/v2@latest\n# generate mocking stubs\nmake mock\n# run tests\nmake test\n")),(0,i.kt)("h2",{id:"db-migrations"},"DB migrations"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/DeveloperManuals/DBMigration"},"Migration Doc"),"."),(0,i.kt)("h2",{id:"using-devlake-api"},"Using DevLake API"),(0,i.kt)("p",null,"All DevLake APIs (core service + plugin API) are documented with swagger. To see API doc live with swagger:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Install [swag](https://github.com/swaggo/swag).\n- Run `make swag` to generate the swagger documentation.\n- Visit `http://localhost:8080/swagger/index.html` while `devlake` is running.\n")),(0,i.kt)("h2",{id:"developing-dashboards"},"Developing dashboards"),(0,i.kt)("p",null,"To access Grafana, click ",(0,i.kt)("em",{parentName:"p"},"View Dashboards")," button in the top left corner of Config UI, or visit ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3002")," (username: ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", password: ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),")."),(0,i.kt)("p",null,"For provisioning, customizing, and creating dashboards, please refer to our ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/Configuration/Dashboards/GrafanaUserGuide"},"Grafana Doc"),"."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Q: Running `make dev` yields error: `libgit2.so.1.3: cannot open share object file: No such file or directory`\n\nA: `libgit2.so.1.3` is required by the gitextractor plugin and should be . Make sure your program can find `libgit2.so.1.3`. `LD_LIBRARY_PATH` can be assigned like this if your `libgit2.so.1.3` is located at `/usr/local/lib`:\n\n```sh\nexport LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib\n```\n\nNote that the version has to be pinned to 1.3.0. If you don't have it, you may need to build it manually with CMake from [source](https://github.com/libgit2/libgit2/releases/tag/v1.3.0).\n")),(0,i.kt)("h2",{id:"compiling"},"Compiling"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Compile all plugins: `make build-plugin`\n- Compile specific plugins: `PLUGIN=<PLUGIN_NAME> make build-plugin`\n- Compile server: `make build`\n- Compile worker: `make build-worker`\n")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"To dig deeper into developing and utilizing our built-in functions and have a better developer experience, feel free to dive into our ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/incubator-devlake"},"godoc")," reference."))}u.isMDXComponent=!0}}]);