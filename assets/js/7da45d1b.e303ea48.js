"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[76],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},250:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>i,toc:()=>l,default:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"BNB Smart Chain Fast Node",hide_table_of_contents:!1,sidebar_position:2},s="How to Run A Fast Node on BNB Smart Chain",i={unversionedId:"BSC-fast-node",id:"BSC-fast-node",isDocsHomePage:!1,title:"How to Run A Fast Node on BNB Smart Chain",description:"Fast Node Functions",source:"@site/docs/BSC-fast-node.md",sourceDirName:".",slug:"/BSC-fast-node",permalink:"/docs/BSC-fast-node",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/BSC-fast-node.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BNB Smart Chain Fast Node",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"BNB Smart Chain Verify Node",permalink:"/docs/BSC-verify-node"},next:{title:"Using ChainIDE",permalink:"/docs/chainide"}},l=[{value:"Fast Node Functions",id:"fast-node-functions",children:[],level:2},{value:"Suggested Requirements for Fast Node",id:"suggested-requirements-for-fast-node",children:[],level:2},{value:"Steps to Run a Fast Node",id:"steps-to-run-a-fast-node",children:[{value:"Sync From Snapshot (Recommended)",id:"sync-from-snapshot-recommended",children:[],level:3},{value:"Sync From Genesis Block (Not Recommended)",id:"sync-from-genesis-block-not-recommended",children:[],level:3}],level:2},{value:"Start Fast Node Without Snapshot Verification",id:"start-fast-node-without-snapshot-verification",children:[],level:2},{value:"Start Fast Node With Snapshot Verification",id:"start-fast-node-with-snapshot-verification",children:[],level:2},{value:"Node Maintenance",id:"node-maintenance",children:[],level:2},{value:"Upgrade Geth",id:"upgrade-geth",children:[],level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-run-a-fast-node-on-bnb-smart-chain"},"How to Run A Fast Node on BNB Smart Chain"),(0,o.kt)("h2",{id:"fast-node-functions"},"Fast Node Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stores the full blockchain history on disk and can answer the data request from the network."),(0,o.kt)("li",{parentName:"ul"},"Receives and validates the new blocks and transactions."),(0,o.kt)("li",{parentName:"ul"},"Verifies the states of every account.")),(0,o.kt)("h2",{id:"suggested-requirements-for-fast-node"},"Suggested Requirements for Fast Node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X, Linux, or Windows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IMPORTANT")," 1 TB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms. (if node is started with snap sync, it will need NVMe SSD)"),(0,o.kt)("li",{parentName:"ul"},"16 cores of CPU and 64 GB of memory (RAM)."),(0,o.kt)("li",{parentName:"ul"},"Suggest m5zn.3xlarge instance type on AWS, c2-standard-16 on Google cloud."),(0,o.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of 5 MB/S")),(0,o.kt)("h2",{id:"steps-to-run-a-fast-node"},"Steps to Run a Fast Node"),(0,o.kt)("h3",{id:"sync-from-snapshot-recommended"},"Sync From Snapshot (Recommended)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the pre-build binaries from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/bsc/releases/latest"},"release page")," or follow the instructions below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_linux |cut -d\\" -f4)\nmv geth_linux geth\nchmod -v u+x geth\n\n# MacOS\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_mac |cut -d\\" -f4)\nmv geth_mac geth\nchmod -v u+x geth\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Download the config files")),(0,o.kt)("p",null,"Download ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Download snapshot")),(0,o.kt)("p",null,"Download latest chaindata snapshot from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-snapshots"},"here"),". Follow the guide to structure your files."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your --datadir flag should point to the extracted chaindata folder path"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Prune all trie data")),(0,o.kt)("p",null,"Fast node does not need trie data anymore, prune the trie data by the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./geth snapshot insecure-prune-all --datadir ./node  ./genesis.json\n")),(0,o.kt)("h3",{id:"sync-from-genesis-block-not-recommended"},"Sync From Genesis Block (Not Recommended)"),(0,o.kt)("p",null,"1.Build from source code"),(0,o.kt)("p",null,"Make sure that you have installed ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"Go 1.17.13+")," and have added ",(0,o.kt)("inlineCode",{parentName:"p"},"GOPATH")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/bnb-chain/bsc\n# Enter the folder bsc was cloned into\ncd bsc\n# Compile and install bsc\nmake geth\n")),(0,o.kt)("p",null,"or you can download the pre-build binaries from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/latest"},"release page")," or follow the instructions below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_linux |cut -d\\" -f4)\nmv geth_linux geth\nchmod -v u+x geth\n\n# MacOS\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_mac |cut -d\\" -f4)\nmv geth_mac geth\nchmod -v u+x geth\n')),(0,o.kt)("p",null,"2.Download the config files"),(0,o.kt)("p",null,"Download ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'## mainet\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n\n## testnet\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep testnet |cut -d\\" -f4)\nunzip testnet.zip\n')),(0,o.kt)("p",null,"3.Write genesis state locally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"geth --datadir node init genesis.json\n")),(0,o.kt)("p",null,"You could see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INFO [05-19|14:53:17.468] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bsc/node/geth/chaindata cache=16.00MiB handles=16\nINFO [05-19|14:53:17.498] Writing custom genesis block\nINFO [05-19|14:53:17.501] Persisted trie from memory database      nodes=21 size=56.84KiB time=357.915\xb5s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B\nINFO [05-19|14:53:17.502] Successfully wrote genesis state         database=chaindata hash=7d79cc\u2026fb0d1e\nINFO [05-19|14:53:17.503] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bsc/node/geth/lightchaindata cache=16.00MiB handles=16\nINFO [05-19|14:53:17.524] Writing custom genesis block\nINFO [05-19|14:53:17.525] Persisted trie from memory database      nodes=21 size=56.84KiB time=638.396\xb5s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B\nINFO [05-19|14:53:17.528] Successfully wrote genesis state         database=lightchaindata hash=7d79cc\u2026fb0d1e\n")),(0,o.kt)("h2",{id:"start-fast-node-without-snapshot-verification"},"Start Fast Node Without Snapshot Verification"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start your fast node without snapshot verification by verify nodes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"## start a fast node\ngeth --tries-verify-mode none --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,o.kt)("h2",{id:"start-fast-node-with-snapshot-verification"},"Start Fast Node With Snapshot Verification"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add verifyNodes peers in config.toml.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[Node.P2P]\nMaxPeers = 1350\nNoDiscovery = false\nBootstrapNodes = ["enode://...", "enode://...", ...]\nVerifyNodes = ["enode://...", "enode://...", ...]\nStaticNodes = ["enode://...", "enode://...", ...]\nListenAddr = ":30311"\nEnableMsgEvents = false\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Start your fast node with snapshot verification by verify nodes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"## start a fast node\ngeth --tries-verify-mode full --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,o.kt)("h2",{id:"node-maintenance"},"Node Maintenance"),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/node-maintenance"},"this guide")),(0,o.kt)("h2",{id:"upgrade-geth"},"Upgrade Geth"),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/upgrade-fullnode"},"this guide")))}c.isMDXComponent=!0}}]);