"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7563],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},868:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={title:"GitExtractor",description:"GitExtractor Plugin\n"},p="Git Repo Extractor",u={unversionedId:"Plugins/gitextractor",id:"Plugins/gitextractor",title:"GitExtractor",description:"GitExtractor Plugin\n",source:"@site/docs/Plugins/gitextractor.md",sourceDirName:"Plugins",slug:"/Plugins/gitextractor",permalink:"/docs/Plugins/gitextractor",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/gitextractor.md",tags:[],version:"current",frontMatter:{title:"GitExtractor",description:"GitExtractor Plugin\n"},sidebar:"docsSidebar",previous:{title:"Gitee(WIP)",permalink:"/docs/Plugins/gitee"},next:{title:"GitHub",permalink:"/docs/Plugins/github"}},s={},c=[{value:"Summary",id:"summary",level:2},{value:"Steps to make this plugin work",id:"steps-to-make-this-plugin-work",level:2},{value:"Sample Request",id:"sample-request",level:2},{value:"Standalone Mode",id:"standalone-mode",level:2},{value:"Development",id:"development",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-repo-extractor"},"Git Repo Extractor"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin extracts commits and references from a remote or local git repository. It then saves the data into the database or csv files."),(0,o.kt)("h2",{id:"steps-to-make-this-plugin-work"},"Steps to make this plugin work"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the Git repo extractor to retrieve data about commits and branches from your repository."),(0,o.kt)("li",{parentName:"ol"},"Use the GitHub plugin to retrieve data about Github issues and PRs from your repository.\nNOTE: you can run only one issue collection stage as described in the Github Plugin README."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"/docs/Plugins/refdiff#development"},"RefDiff")," plugin to calculate version diff, which will be stored in ",(0,o.kt)("inlineCode",{parentName:"li"},"refs_commits_diffs")," table.")),(0,o.kt)("h2",{id:"sample-request"},"Sample Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "git repo extractor",\n    "tasks": [\n        [\n            {\n                "Plugin": "gitextractor",\n                "Options": {\n                    "url": "https://github.com/merico-dev/lake.git",\n                    "repoId": "github:GithubRepo:384111310"\n                }\n            }\n        ]\n    ]\n}\n\'\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": the location of the git repository. It should start with ",(0,o.kt)("inlineCode",{parentName:"li"},"http"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"https")," for a remote git repository and with ",(0,o.kt)("inlineCode",{parentName:"li"},"/")," for a local one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repoId"),": column ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of  ",(0,o.kt)("inlineCode",{parentName:"li"},"repos"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"proxy"),": optional, http proxy, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"http://your-proxy-server.com:1080"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user"),": optional, for cloning private repository using HTTP/HTTPS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password"),": optional, for cloning private repository using HTTP/HTTPS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"privateKey"),": optional, for SSH cloning, base64 encoded ",(0,o.kt)("inlineCode",{parentName:"li"},"PEM")," file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"passphrase"),": optional, passphrase for the private key")),(0,o.kt)("h2",{id:"standalone-mode"},"Standalone Mode"),(0,o.kt)("p",null,"You call also run this plugin in a standalone mode without any DevLake service running using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'go run plugins/gitextractor/main.go -url https://github.com/merico-dev/lake.git -id github:GithubRepo:384111310 -db "merico:merico@tcp(127.0.0.1:3306)/lake?charset=utf8mb4&parseTime=True"\n')),(0,o.kt)("p",null,"For more options (e.g., saving to a csv file instead of a db), please read ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/gitextractor/main.go"),"."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"This plugin depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"libgit2"),", you need to install version 1.3.0 in order to run and debug this plugin on your local\nmachine. ",(0,o.kt)("a",{parentName:"p",href:"/docs/Plugins/refdiff#development"},"Click here")," for a brief guide."),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))}m.isMDXComponent=!0}}]);