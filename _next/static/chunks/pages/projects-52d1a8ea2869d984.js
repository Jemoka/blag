(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8947:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return o(3186)}])},3186:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return b}});var n=o(5893),i=o(7294),r=o(9920),s=o(8472),a=o.n(s),c=(o(9008),o(1163));function l(e){var t=(0,i.useState)(!1),o=t[0],s=t[1],l=(0,i.useState)(!1),d=l[0],u=l[1],h=(0,i.useState)(!1),f=h[0],m=h[1],b=(0,i.useState)(!1),g=b[0],p=b[1],j=(0,r.useSpring)({backgroundColor:e.backgroundColor,color:e.backgroundColor,transform:o?"skew(-5deg) scaleX(1)":"skew(-5deg) scaleX(0.1)"}),x=(0,r.useSpring)({backgroundColor:f?"".concat(e.backgroundColor):"white"}),w=(0,r.useSpring)({display:g?"block":"none",color:e.color}),C=(0,r.useSpring)({opacity:d?1:0});return(0,i.useEffect)((function(){s(!0)}),[]),(0,i.useEffect)((function(){o&&setTimeout((function(){m(!0),p(!0),setTimeout((function(){u(!0)}),700)}),700)}),[o]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.animated.div,{className:a().hero,style:x,children:[(0,n.jsxs)("div",{className:a().header,onClick:function(){return c.default.push("/")},children:[(0,n.jsx)("span",{id:"uname",children:"jemoka.com"}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{children:(0,n.jsx)("span",{id:"name",className:"font-bold",children:"Houjun Liu"})})]}),(0,n.jsxs)("div",{className:a().heroCenter,children:[(0,n.jsxs)(r.animated.div,{style:j,className:a().heroBg+" "+a().heroText,children:["\xa0",e.tab,"\xa0"]}),(0,n.jsxs)("div",{className:a().heroCenterText+" "+a().heroText,style:{color:e.color},children:["\xa0",e.tab,"\xa0"]})]})]}),(0,n.jsx)(r.animated.i,{className:a().caret+" fa-solid fa-caret-down",style:w,onClick:function(e){window.scroll({top:.75*window.innerHeight,behavior:"smooth"})}}),(0,n.jsxs)(r.animated.div,{style:C,children:[(0,n.jsxs)("div",{className:a().callout,children:[(0,n.jsx)("p",{style:{fontWeight:600},children:e.calloutA}),(0,n.jsx)("p",{style:{fontWeight:500},children:e.calloutB})]}),e.children]}),(0,n.jsx)("div",{className:a().bottom,style:{backgroundColor:e.backgroundColor,color:e.color},children:(0,n.jsxs)("div",{children:["\ud83d\ude4c\xa0\xa0",(0,n.jsx)("span",{className:"font-bold",children:"Thanks for visiting!"}),"\xa0",(0,n.jsxs)("div",{id:"socialpanel",style:{transform:"scale(0.9) translateY(3px)"},children:[(0,n.jsx)("a",{href:"https://www.jemoka.com/search/",style:{borderRight:0,marginRight:0,paddingRight:0},className:"header-social",id:"header-search",children:(0,n.jsx)("i",{className:"ic fa-solid fa-magnifying-glass"})}),(0,n.jsx)("a",{href:"https://github.com/Jemoka/",className:"header-social",id:"header-github",children:(0,n.jsx)("i",{className:"ic fa-brands fa-github"})}),(0,n.jsx)("a",{href:"https://twitter.com/jemokajack",className:"header-social",id:"header-twitter",children:(0,n.jsx)("i",{className:"ic fa-brands fa-twitter"})}),(0,n.jsx)("a",{href:"https://www.reddit.com/user/Jemoka/",className:"header-social",id:"header-reddit",children:(0,n.jsx)("i",{className:"ic fa-brands fa-reddit"})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{onClick:function(){return c.default.push("/")},className:"link",style:{borderColor:"var(--green)"},children:"Projects"})," / \xa0",(0,n.jsx)("a",{href:"https://www.jemoka.com/posts/kbhresearch_index/",className:"link",style:{borderColor:"var(--blue)"},children:"Research"})," / \xa0",(0,n.jsx)("a",{href:"https://www.jemoka.com/posts/kbhproduction_index/",className:"link",style:{borderColor:"var(--red)"},children:"Production"})," / \xa0",(0,n.jsx)("a",{href:"https://www.jemoka.com/posts/kbhindex/",className:"link",style:{borderColor:"var(--yellow)"},children:"About"})]})]})})]})}var d=o(7126),u=o.n(d);function h(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){h(e,t,o[t])}))}return e}function m(e){var t=(0,i.useState)(1),o=t[0],s=t[1],a=(0,i.useState)(0),l=a[0],d=a[1],h=(0,i.useRef)(0),m=(0,i.useRef)(null),b=function(t){return Math.max((o-e.frameCount*t)/(e.frameCount-e.frameCount*t),0)},g=(0,r.useSpring)({filter:"blur(".concat(.3*b(.3),"em)")}),p=(0,r.useSpring)({backdropFilter:"blur(".concat(100*b(.6),"px)"),backgroundColor:"rgba(".concat(e.titleColorHint,", ").concat(.7*b(.6),")")}),j=(0,r.useSpring)({opacity:1.4*b(.9)}),x=function(t){return"".concat(e.sequence,"/thumb").concat(t,".res.jpg")},w=function(){var t=m.current,o=t.getContext("2d");d(t.offsetHeight);var n=document.documentElement,i=window.innerHeight+n.scrollTop,r=Math.min(Math.max(i-function(e){for(var t=0,o=0;null!=e;t+=e.offsetLeft,o+=e.offsetTop,e=e.offsetParent);return{x:t,y:o}}(t).y,0),t.offsetHeight)/t.offsetHeight,a=Math.min(e.frameCount-2,Math.floor(r*e.frameCount))+1,c=new Image;c.src=x(a);var l=h.current;s(a),c.onload=function(){l<h.current||(h.current+=1,o.drawImage(c,0,0,c.width,Math.min(c.width/t.width*t.height,c.height),0,0,t.width,t.height))}};return(0,i.useEffect)((function(){var t=m.current;t.getContext("2d");t.width=window.screen.width,t.height=Math.min(.85*window.screen.width,900),w(),d(t.offsetHeight);!function(){for(var t=1;t<e.frameCount;t++){(new Image).src=x(t)}}()}),[]),(0,i.useEffect)((function(){var e=function(e){w()};return window.addEventListener("scroll",e),window.addEventListener("resize",e),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}),[o]),(0,n.jsxs)("div",{className:u().section,onClick:function(){return c.default.push(e.url)},children:[(0,n.jsxs)("div",{className:u().content,style:{height:l},children:[(0,n.jsxs)(r.animated.h1,{className:u().sectionCall,style:f({clipPath:"url(#".concat(e.id,")")},p),children:[(0,n.jsx)("div",{className:u().hide,children:e.title.split(" ").map((function(e,t){return(0,n.jsx)("div",{x:"0",dy:"1em",children:e},t)}))}),(0,n.jsxs)("svg",{"aria-hidden":"true",className:u().hide,children:[(0,n.jsx)("style",{}),(0,n.jsx)("clipPath",{id:e.id,children:(0,n.jsx)("text",{x:"0",y:"0",children:e.title.split(" ").map((function(t,o){return(0,n.jsx)("tspan",{x:"0",dy:"1em",children:t},o+e.id)}))})})]})]}),(0,n.jsxs)(r.animated.div,{className:u().sectionSub,style:f({},j),children:[(0,n.jsx)("div",{style:{color:e.subtitleColor},children:e.subtitle}),(0,n.jsx)("div",{style:{color:e.positionColor},children:e.position})]})]}),(0,n.jsx)(r.animated.canvas,{ref:m,className:u().canvas,style:g})]})}function b(){return(0,n.jsx)("div",{children:(0,n.jsxs)(l,{tab:"Projects",color:"white",backgroundColor:"var(--green)",calloutA:"Hello there! Thanks for stopping by.",calloutB:(0,n.jsxs)(n.Fragment,{children:["Here are some of the projects that I've been working on. It's by no means complete, but it gives you a sense of some of the stuff I enjoy doing. If you'd like, ",(0,n.jsx)("a",{href:"https://www.jemoka.com/posts/kbhprojects/",className:"link",children:"this is a laundry-list"})," of every piece of code that I had spend more than a day writing\u2014but its organized in a much more technical way. ",(0,n.jsx)("br",{})," If anything catches your attention while reading, feel free to give it a click!"]}),children:[(0,n.jsx)(m,{id:"condution",title:"The Condution Project",subtitle:"Supercharged to-do lists",position:"Co-Founder, Core Developer",sequence:"/sequences/Condution",url:"https://www.condution.com/",titleColorHint:"255,255,255",subtitleColor:"#809ac2",positionColor:"#eaedad",frameCount:60}),(0,n.jsx)(m,{id:"modap",title:"MODAP",subtitle:"Accessible early fire detection",position:"Project Lead",sequence:"/sequences/MODAP",url:"https://github.com/MODAP/stack",titleColorHint:"247,241,237",subtitleColor:"rgb(201,242,212)",positionColor:"rgb(196,82,53)",frameCount:49}),(0,n.jsx)(m,{id:"batchalign",title:"CMU TalkBank Batchalign",subtitle:"Automatic clinical speech analysis",position:"Author",sequence:"/sequences/MFA",url:"https://github.com/TalkBank/batchalign",titleColorHint:"171,41,51",subtitleColor:"rgb(194,242,206)",positionColor:"rgb(250,227,233)",frameCount:35}),(0,n.jsx)(m,{id:"research",title:"Independent Published Research",subtitle:"NLP and Science Education",position:"",sequence:"/sequences/Dictembeds",url:"https://www.jemoka.com/posts/kbhresearch_index/",titleColorHint:"75,94,11",subtitleColor:"rgb(36,46,93)",positionColor:"rgb(59,134,137)",frameCount:39}),(0,n.jsx)(m,{id:"music",title:"Music Production",subtitle:"Classically trained pianist",position:"...but actually doing EDM",sequence:"/sequences/Music",url:"https://linktr.ee/jemoka",titleColorHint:"248,255,237",subtitleColor:"rgb(122,255,220)",positionColor:"rgb(138,255,163)",frameCount:48}),(0,n.jsx)(m,{id:"production",title:"Content Creation",subtitle:"Video, Podcast, and Writing",sequence:"/sequences/Film",url:"https://www.jemoka.com/posts/kbhproduction_index/",titleColorHint:"248,255,237",subtitleColor:"rgb(192,235,124)",positionColor:"rgb(192,235,124)",frameCount:42})]})})}},8472:function(e){e.exports={hero:"Page_hero__St4u6",heroText:"Page_heroText__thQDw",heroCenter:"Page_heroCenter__aoYX_",heroCenterText:"Page_heroCenterText__yFRBs",heroBg:"Page_heroBg__isVKR",caret:"Page_caret__Ku7QU",blinker:"Page_blinker__in22f",callout:"Page_callout__D9118",bottom:"Page_bottom__G_BBn",header:"Page_header__tHRfe"}},7126:function(e){e.exports={section:"Section_section__EInGp",canvas:"Section_canvas__8q01W",content:"Section_content__OHe2Y",sectionCall:"Section_sectionCall___1X5P",sectionSub:"Section_sectionSub__71pyE",hide:"Section_hide__7LuPL"}}},function(e){e.O(0,[59,774,888,179],(function(){return t=8947,e(e.s=t);var t}));var t=e.O();_N_E=t}]);