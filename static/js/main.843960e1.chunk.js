(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{538:function(e,t,n){},539:function(e,t,n){"use strict";n.r(t);var a,i=n(1),o=n.n(i),s=n(38),c=(n(151),n(17)),r=n(26),l=n(545),d=n(22),m=n(9),u={type:"github",Icon:m.k,link:"https://github.com/JinHao-L"},p={type:"linkedin",Icon:m.w,link:"https://www.linkedin.com/in/jin-hao-l"},b={type:"instagram",Icon:m.o,link:"https://www.instagram.com/jin_haooo"},h={type:"mail",Icon:m.l,link:"mailto:limjinhao@gmail.com"},j=[u,p,b,h],f=j,x=n(2),g=function(e){var t=e.className,n=e.size,a=void 0===n?20:n;return Object(x.jsx)("div",{className:"".concat(t," flex flex-row"),children:f.map((function(e){var t=e.type,n=e.Icon,i=e.link;return Object(x.jsx)("a",{href:i,className:"p-1 mx-1 bg-gray-100 rounded-full",target:"_blank",rel:"noreferrer",children:Object(x.jsx)(n,{size:a,className:"text-gray-800 bg-gray-100 cursor-pointer fill-current hover:text-gray-400"})},t)}))})},v=function(e){var t=e.to,n=e.children,a=e.callback;return Object(x.jsx)(r.Link,{activeClass:"active",to:t,spy:!1,smooth:!0,offset:-80,duration:300,onClick:function(){return a&&setTimeout(a,300)},children:Object(x.jsx)("div",{role:"button",className:"px-3 py-2 text-black rounded-md font-small text-md hover:bg-gray-700 hover:text-white",children:n})})},O=function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],o=u.Icon;return Object(x.jsxs)("nav",{className:"sticky top-0 z-50 w-full bg-gray-100 shadow-md",children:[Object(x.jsx)("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",children:Object(x.jsxs)("div",{className:"flex items-center justify-between h-16",children:[Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsx)("div",{className:"py-2 text-lg text-gray-800 font-small md:hidden",role:"button",children:Object(x.jsx)(r.Link,{activeClass:"active",to:"intro-section",spy:!0,smooth:!0,offset:-80,duration:500,children:"Jin Hao"})}),Object(x.jsx)("div",{className:"hidden md:block",children:Object(x.jsxs)("div",{className:"flex items-baseline ml-10 space-x-4",children:[Object(x.jsx)(v,{to:"intro-section",children:"Home"}),Object(x.jsx)(v,{to:"about-section",children:"About"}),Object(x.jsx)(v,{to:"experiences-section",children:"Experiences"}),Object(x.jsx)(v,{to:"projects-section",children:"Projects"}),Object(x.jsx)(v,{to:"contact-section",children:"Contact Me"})]})})]}),Object(x.jsx)("div",{className:"hidden -mr-2 md:flex",children:Object(x.jsxs)("a",{href:u.link,target:"_blank",rel:"noreferrer",className:"inline-flex items-center justify-center p-2 text-gray-800 bg-gray-100 rounded-md hover:bg-gray-800 hover:text-titan-white-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-titan-white-200",children:[Object(x.jsx)("span",{className:"sr-only",children:"Open github"}),Object(x.jsx)(o,{className:"m-auto",size:30})]})}),Object(x.jsx)("div",{className:"flex -mr-2 md:hidden",children:Object(x.jsxs)("button",{onClick:function(){return a(!n)},type:"button",className:"inline-flex items-center justify-center p-2 text-gray-800 bg-gray-100 rounded-md hover:bg-gray-800 hover:text-titan-white-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-titan-white-200","aria-controls":"mobile-menu","aria-expanded":"false",children:[Object(x.jsx)("span",{className:"sr-only",children:"Open main menu"}),n?Object(x.jsx)(d.b,{size:24}):Object(x.jsx)(d.d,{size:24})]})})]})}),Object(x.jsx)(l.a,{show:n,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(x.jsx)("div",{className:"bg-gray-100 md:hidden",id:"mobile-menu",children:Object(x.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[Object(x.jsx)(v,{to:"intro-section",callback:function(){return a(!1)},children:"Home"}),Object(x.jsx)(v,{to:"about-section",callback:function(){return a(!1)},children:"About"}),Object(x.jsx)(v,{to:"experiences-section",callback:function(){return a(!1)},children:"Experiences"}),Object(x.jsx)(v,{to:"projects-section",callback:function(){return a(!1)},children:"Projects"}),Object(x.jsx)(v,{to:"contact-section",callback:function(){return a(!1)},children:"Contact Me"}),Object(x.jsx)(g,{className:"justify-evenly",size:25})]})})})]})},y=n(133),w=n.n(y),N=n(19),k=function(e){var t=e.scrollTarget,n=e.className;return Object(x.jsx)(r.Link,{activeClass:"active",to:t,spy:!1,smooth:!0,offset:-80,duration:300,role:"button",className:"mt-8 justify-center flex ".concat(n||""," z-0"),children:Object(x.jsx)("div",{className:"w-6 h-6 border-b-2 border-dashed",children:Object(x.jsx)(d.a,{className:"w-6 h-6 animate-bounce"})})})},S=function(e){var t=e.id,n=e.style,a=e.children,i=e.className,o=e.nextId,s=e.minHeight,c=void 0===s?"calc(100vh - 60px)":s;return Object(x.jsxs)("div",{id:t,className:"pt-4 px-8 m-0 flex flex-col  ".concat(i||""),style:Object(N.a)({minHeight:c},n),children:[Object(x.jsx)(r.Element,{name:t,children:" "}),Object(x.jsx)("div",{className:"items-start flex-grow",children:a}),o&&Object(x.jsx)(k,{scrollTarget:o,className:"relative bottom-5"})]})},I=n.p+"static/media/profile.60e9da27.jpeg",C=function(e){var t=e.id,n=e.style,a=e.className,i=e.nextId;return Object(x.jsx)(S,{id:t,style:n,className:a,nextId:i,children:Object(x.jsx)("div",{className:"w-full px-8 pb-8 text-left lg:pt-40 lg:px-20 xl:px-40 2xl:px-80",children:Object(x.jsxs)("div",{className:"grid items-center grid-cols-1 gap-3 transition-transform lg:grid-cols-2",children:[Object(x.jsx)("img",{src:I,className:"z-10 m-auto my-10 rounded-full",alt:"profile"}),Object(x.jsxs)("div",{className:"text-center lg:order-first",children:[Object(x.jsxs)("span",{className:"flex flex-row justify-center text-3xl md:text-4xl lg:text-5xl",children:["Hi there, I'm Jin Hao"," ",Object(x.jsx)("span",{className:"animate-wave",children:"\ud83d\udc4b\ud83c\udffb"})]}),Object(x.jsxs)("div",{className:"mt-8 text-2xl md:text-3xl lg:text-4xl",children:["I am a",Object(x.jsx)(w.a,{options:{strings:["Software Developer","NUS Penultimate Student","Cyber Security Enthusiast"],autoStart:!0,loop:!0,deleteSpeed:50}})]}),Object(x.jsx)("ul",{className:"flex flex-row justify-center mt-10",children:f.map((function(e){var t=e.link,n=e.type,a=e.Icon;return Object(x.jsx)("li",{className:"px-2",children:Object(x.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:"relative flex items-center w-16 h-16 leading-none text-indigo-800 rounded-full bg-titan-white-500 hover:bg-titan-white-700 hover:text-titan-white-100",children:Object(x.jsx)(a,{className:"m-auto",size:30})})},n)}))})]})]})})})},F=n(544),T=function(e){var t=e.hoverText,n=e.className,a=e.children,s=e.canHover,r=void 0===s||s,l=o.a.useState(!1),d=Object(c.a)(l,2),m=d[0],u=d[1],p=Object(i.createRef)(),b=Object(i.createRef)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{onMouseEnter:r?function(){Object(F.a)(p.current,b.current,{placement:"bottom",modifiers:[{name:"preventOverflow",options:{padding:3}}]}),u(!0)}:void 0,onMouseLeave:r?function(){u(!1)}:void 0,ref:p,className:n,children:a}),r&&Object(x.jsx)("div",{className:(m?"":"hidden ")+"mt-5 border-0 block z-50 font-normal leading-normal text-sm max-w-xs break-words bg-gray-900",ref:b,children:Object(x.jsx)("div",{className:"text-white opacity-75 font-semibold border-b border-solid uppercase rounded-t-md",children:t})})]})},A=function(e){var t=e.name,n=e.Icon,a=e.color;return Object(x.jsx)(T,{hoverText:t,className:"mb-2",children:Object(x.jsx)(n,{className:"w-16 h-16 px-2",color:a||"white"})})},D=function(e){var t=e.icons;return Object(x.jsx)("div",{className:"flex flex-row flex-wrap",children:t.map((function(e){return Object(x.jsx)(A,{Icon:e.Icon,name:e.name,color:e.color},e.name)}))})},P=function(e){var t=e.children,n=e.className;return Object(x.jsx)("div",{className:"text-lg text-justify ".concat(n||""),children:t})},B=function(e){var t=e.children;return Object(x.jsx)("h1",{className:"my-6 text-3xl text-center",children:t})},M=function(e){var t=e.children,n=e.className;return Object(x.jsx)("h2",{className:"text-xl ".concat(n||""),children:t})},L=n(134),E={Icon:m.K,name:"Typescript",color:"#007acc"},H={Icon:m.r,name:"Javascript",color:"#F0DB4F"},z={Icon:m.F,name:"React (JS & Native)",color:"#61DBFB"},J={Icon:m.F,name:"React JS",color:"#61DBFB"},U={Icon:m.F,name:"React Native",color:"#61DBFB"},R={Icon:m.E,name:"Python",color:"#4B8BBE"},_={Icon:m.z,name:"NestJS",color:"#e0234e"},q={Icon:m.C,name:"PostgreSQL",color:"#336791"},V={Icon:m.A,name:"NodeJS",color:"#68a063"},W={Icon:m.q,name:"Java",color:"#f89820"},G={Icon:m.n,name:"Gradle",color:"#0FA4CC"},Y={Icon:m.g,name:"ExpressJS",color:"#ffffff"},K={Icon:m.c,name:"Apache Kafka",color:"#D3D3D3"},Z={Icon:m.u,name:"Kubernetes",color:"#326ce5"},Q={Icon:m.b,name:"AWS Services",color:"#FF9900"},X={Icon:m.y,name:"MongoDB",color:"#3FA037"},$={Icon:m.p,name:"Ionic",color:"#498AFF"},ee={Icon:m.N,name:"Webpack",color:"#1c78c0"},te={Icon:m.L,name:"Vim",color:"#029833"},ne=(m.k,{Icon:m.j,name:"Git",color:"#f34f29"}),ae={Icon:m.M,name:"VS Code",color:"#0078d7"},ie={Icon:m.e,name:"Docker",color:"#0db7ed"},oe={Icon:L.a,name:"Linux (Ubuntu)"},se={Icon:m.D,name:"Postman",color:"#F15A24"},ce={Icon:m.t,name:"Jupyter Notebook",color:"#F37726"},re={Icon:m.i,name:"Firebase",color:"#FCCA3F"},le={Icon:m.f,name:"Expo",color:"#D3D3D3"},de={Icon:m.h,name:"Figma",color:"#e04a34"},me={Icon:m.H,name:"Socket.io",color:"#D3D3D3"},ue={Icon:m.B,name:"Passport.js",color:"#00B9F1"},pe={Icon:m.O,name:"Zoom API",color:"#2D8CFF"},be={Icon:m.I,name:"Swagger Docs",color:"#19b6b5"},he={Icon:m.v,name:"Leetcode API",color:"#F69C14"},je={Icon:m.d,name:"CodeMirror",color:"#FFFFFF"},fe={Icon:m.J,name:"Tailwind",color:"#09B6D4"},xe={Icon:m.x,name:"Mapbox",color:"#4164FB"},ge={Icon:m.s,name:"JUnit 5",color:"#DC524A"},ve={Icon:m.q,name:"JavaFX",color:"#f89820"},Oe={Icon:m.G,name:"React Redux",color:"#764abc"},ye={Icon:m.a,name:"Adobe XD",color:"#FE61F7"},we={Icon:m.m,name:"Google Maps API",color:"#4285F4"},Ne=n(142),ke=function(){return Object(x.jsxs)("div",{className:"space-y-3",children:[Object(x.jsx)(M,{children:"My coding frequency:"}),Object(x.jsx)(Ne.a,{username:"jinhao-l",blockSize:15,blockMargin:5,theme:{level4:"#ffffff",level3:"#d7dddf",level2:"#9baaae",level1:"#72888e",level0:"transparent"},fontSize:18})]})},Se=function(e){var t=e.id,n=e.style,a=e.className,i=e.nextId,o=[E,H,z,R,_,q,V],s=[W,G,Y,K,Z,Q,X,$,ee,fe],c=[te,ne,ae,ie,oe,se,re,ce,de];return Object(x.jsxs)(S,{id:t,style:n,className:"mb-10 ".concat(a),nextId:i,children:[Object(x.jsx)(B,{children:"About Me"}),Object(x.jsxs)("div",{className:"px-8 space-y-7 md:px-10 lg:px-40 xl:px-60 2xl:px-80",children:[Object(x.jsx)(P,{children:"I am a penultimate Computing undergraduate at the National University of Singapore. I am currently specialising in Software Engineering and Computer Security. I believe that both specialisations are important to create inclusive, secure technologies that will be used by the masses."}),Object(x.jsx)(P,{children:"I have dabbled with both frontend and backend, with a greater proficiency in frontend. Throughout my studies, I have also experienced and tried out various fields of software development, ranging from Cryptocurrency, Chrome Extension, Mobile App development to Web development. The list below are some of the skillsets that I have gained through projects that I have done in my academic, internship or in my own free time."}),Object(x.jsxs)("div",{className:"space-y-14 ",children:[Object(x.jsxs)("div",{className:"pt-4 space-y-3",children:[Object(x.jsx)(M,{children:"Proficient in:"}),Object(x.jsx)(D,{icons:o})]}),Object(x.jsxs)("div",{className:"space-y-3",children:[Object(x.jsx)(M,{children:"Dabbled with:"}),Object(x.jsx)(D,{icons:s})]}),Object(x.jsxs)("div",{className:"space-y-3",children:[Object(x.jsx)(M,{children:"Tools I use:"}),Object(x.jsx)(D,{icons:c})]}),Object(x.jsx)("div",{className:"hidden sm:block",children:Object(x.jsx)(ke,{})})]})]})]})},Ie=n(64),Ce=(n(166),[{props:{date:"Jan 2021 \u2013 Current",dateClassName:"text-white",contentStyle:{background:"#003D7C",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #003D7C"},iconStyle:{background:"#003D7C",color:"#fff"},icon:Object(x.jsx)(d.h,{})},title:"SE-EDU Tech Team (Contributor)",subtitle:"National University of Singapore",content:["Collaborated with a team of 8 developers to maintain and improve open-source software which is used to coordinate and teach students Software Engineering Principle in CS2103","Conducted and coordinated code and design documentation reviews for features developed and bugs fixed"],links:[{name:"SE-EDU Team",url:"https://se-education.org/docs/team.html"}]},{props:{date:"May 2021 \u2013 Jul 2021",dateClassName:"text-white",contentStyle:{background:"#2F27AA",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #2F27AA"},iconStyle:{background:"#2F27AA",color:"#fff"},icon:Object(x.jsx)(d.j,{})},title:"Software Engineering Intern",subtitle:"BOLT Global, Singapore",content:["Collaborated with a team of 5 developers to maintain and improve 2 mobile applications built using React Native","Led the project of building BOLT-X Chrome Extension, a cryptocurrency wallet with over 300+ active users, and successfully implemented a working MVP within 2 months","Actively communicated with external organisations, Switcheo co-founder and tech team, to discuss integration of Switcheo network and Zilswap webapp with BOLT-X Extension"],links:[{name:"BOLT Global",url:"https://bolt.global/"},{name:"BOLT-X Extension",url:"https://chrome.google.com/webstore/detail/bolt-x/aodkkagnadcbobfpggfnjeongemjbjca"}]},{props:{date:"Aug 2020 \u2013 Nov 2020",dateClassName:"text-white",contentStyle:{background:"#003D7C",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #003D7C"},iconStyle:{background:"#003D7C",color:"#fff"},icon:Object(x.jsx)(d.h,{})},title:"CS1101S Teaching Assistant",subtitle:"National University of Singapore",content:["Facilitated weekly Studio sessions for a class of 8 Year 1 students to guide them on the basics of programming and good programming practices, thereby providing them with a smooth transition into the field of programming","Followed up and keep track of the overall performance of the students and provided consultation sessions when necessary, to ensure that no students are falling behind in the module"]},{props:{date:"Feb 2017 \u2013 Feb 2019",dateClassName:"text-white text-lg",contentStyle:{background:"#4b5320",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #4b5320"},iconStyle:{background:"#4b5320",color:"#fff"},icon:Object(x.jsx)(d.g,{})},title:"Signal Operator, Corporal First Class",subtitle:"Singapore Armed Forces",content:["Developed the Standard Operating Procedure for our newly formed Motorcycle Unit, by experimenting and refining on existing protocols, thereby coming up with a comprehensive framework which increased our performance efficiency by at least 50%.","Supported an overseas training exercise in Taiwan by providing extensive communication network coverage for the whole brigade and was acknowledged by the Commanding Officer for our efficiency and professionalism"]}]),Fe=function(e){var t=e.id,n=e.style,a=e.className,o=e.nextId;return Object(x.jsxs)(S,{id:t,style:n,className:a,nextId:o,children:[Object(x.jsx)(B,{children:"My Experiences"}),Object(x.jsxs)(Ie.VerticalTimeline,{animate:!0,children:[Ce.map((function(e,t){var n,a;return Object(i.createElement)(Ie.VerticalTimelineElement,Object(N.a)(Object(N.a)({},e.props),{},{key:"exp-".concat(t)}),Object(x.jsx)("h3",{className:"font-semibold text-md",children:e.title}),Object(x.jsx)("h4",{className:"pb-3 italic",children:e.subtitle}),Object(x.jsx)("ul",{className:"pl-4 space-y-2 font-normal text-justify list-disc",children:null===(n=e.content)||void 0===n?void 0:n.map((function(e,n){return Object(x.jsx)("li",{children:e},"exp-".concat(t,"-").concat(n))}))}),Object(x.jsx)("div",{className:"pt-4",children:null===(a=e.links)||void 0===a?void 0:a.map((function(e,t){return Object(x.jsx)("a",{target:"_blank",href:e.url,rel:"noreferrer",children:Object(x.jsx)("button",{className:"px-4 py-2 mx-3 font-normal text-white bg-transparent border border-white rounded hover:bg-titan-white-500 hover:text-gray-800 hover:border-transparent",children:e.name})},t)}))}))})),Object(x.jsx)(Ie.VerticalTimelineElement,{iconStyle:{background:"#489c65",color:"#fff"},icon:Object(x.jsx)(d.i,{})})]})]})},Te=n(65),Ae=function(e){var t=e.images,n=e.callbacks;return Object(x.jsx)(Te.a,{options:{settings:{overlayColor:"rgb(0, 0, 0, 0.8)",disablePanzoom:!0,slideAnimationType:"both"},buttons:{backgroundColor:"rgba(30,30,36,0.8)",iconColor:"rgba(255, 255, 255, 0.8)",showAutoplayButton:!1,showCloseButton:!0,showDownloadButton:!1,showFullscreenButton:!0,showNextButton:!0,showPrevButton:!0,showThumbnailsButton:!0},thumbnails:{showThumbnails:!0}},elements:t,callbacks:n})},De=(a=function(e){var t=e.images,n=e.className,a=Object(i.useState)(0),o=Object(c.a)(a,2),s=o[0],r=o[1],l=Object(Te.c)().openLightbox,m=Object(i.useMemo)((function(){return{onLightboxClosed:function(e){var t=e.currentSlide;return r(+t.id)}}}),[]),u=Object(i.useMemo)((function(){return t.length>1}),[t]);return Object(x.jsxs)("div",{className:"self-center",children:[Object(x.jsx)(Ae,{images:t,callbacks:m}),Object(x.jsxs)("div",{className:"relative flex justify-center",children:[Object(x.jsx)("button",{style:{display:u?"grid":"none"},onClick:function(){return r((function(e){return(e-1+t.length)%t.length}))},className:"bg-white rounded-full absolute left-0 top-1/2 mx-3",children:Object(x.jsx)(d.e,{size:25,className:"text-blue-900"})}),Object(x.jsx)("button",{onClick:function(){return l(s)},children:Object(x.jsx)("img",{src:t[s].src,alt:t[s].caption,className:"".concat(n," w-full object-contain"),style:{maxHeight:"50vh"}})}),Object(x.jsx)("button",{style:{display:u?"grid":"none"},onClick:function(){return r((function(e){return(e+1)%t.length}))},className:" bg-white rounded-full absolute right-0 top-1/2 mx-3",children:Object(x.jsx)(d.f,{size:25,className:"text-blue-900"})})]})]})},function(e){var t=Object.assign({},e);return Object(x.jsx)(Te.b,{children:Object(x.jsx)(a,Object(N.a)({},t))})}),Pe=function(e){var t,n=e.data;return Object(x.jsxs)("div",{className:"z-10 grid w-full grid-cols-1 gap-3 py-5 xl:grid-cols-2 xl:grid-rows-1",children:[Object(x.jsx)(M,{className:"mb-3 text-center xl:hidden",children:n.title}),Object(x.jsx)(De,{images:n.images,className:"border-b-8 rounded-md border-pale-sky-300 "}),Object(x.jsxs)("div",{className:"px-3 py-2 text-md",children:[Object(x.jsx)(M,{className:"hidden mb-3 text-center xl:block",children:n.title}),Object(x.jsx)("div",{className:"grid grid-cols-1 gap-2",children:n.description.map((function(e){return Object(x.jsx)("p",{className:"font-normal text-justify",children:e})}))}),Object(x.jsx)("div",{className:"pt-4",children:null===(t=n.links)||void 0===t?void 0:t.map((function(e,t){return Object(x.jsx)("a",Object(N.a)(Object(N.a)({},e.disabled?{}:{target:"_blank",href:e.url,rel:"noreferrer"}),{},{children:Object(x.jsx)(T,{hoverText:e.disabledHint||"",canHover:!!e.disabled,className:"px-4 py-2 mx-1 my-1 font-normal text-white bg-transparent border border-white rounded hover:bg-titan-white-500 hover:text-gray-800 hover:border-transparent",children:e.title})}),t)}))}),Object(x.jsx)("div",{className:"pt-4 space-y-3",children:Object(x.jsx)(D,{icons:n.stack})})]})]})},Be=n.p+"static/media/cover.8087dffe.gif",Me=n.p+"static/media/dashboard.39045616.png",Le=n.p+"static/media/meeting.fd5b4609.png",Ee=n.p+"static/media/poster.d6a56da1.png",He=n.p+"static/media/coding.b590e506.png",ze=n.p+"static/media/confirmation.6649d663.png",Je=n.p+"static/media/dashboard.527e2414.png",Ue=n.p+"static/media/landing.1ffacc83.png",Re=n.p+"static/media/statistics.42b3374e.png",_e=n.p+"static/media/map.702d1ffc.png",qe=n.p+"static/media/profile.063e7d70.png",Ve=n.p+"static/media/cat_list.71eeff30.png",We=n.p+"static/media/admin.f3ea0bb3.png",Ge=n.p+"static/media/feeds.385f125d.png",Ye=n.p+"static/media/landing.d70d10c0.png",Ke=n.p+"static/media/user_profile.cc44162a.png",Ze=n.p+"static/media/chat.4a402b04.png",Qe=n.p+"static/media/joining.18364614.png",Xe=n.p+"static/media/zoomOut.00fa3812.png",$e=n.p+"static/media/ui.5d9c3433.png",et=n.p+"static/media/find.331643b4.png",tt=n.p+"static/media/assign.3afded6d.png",nt=n.p+"static/media/add.ba8bb4b3.png",at=n.p+"static/media/remark.3b144e9f.png",it=n.p+"static/media/view.182b0812.png",ot=n.p+"static/media/cover.49d4a725.png",st=n.p+"static/media/home.0fc17efc.png",ct=n.p+"static/media/explore.685e834a.png",rt=n.p+"static/media/notifications.fd5dc67d.png",lt=n.p+"static/media/menu.8367fd75.png",dt=n.p+"static/media/profile.87e9ba4b.png",mt=n.p+"static/media/add_modules.664c6713.png",ut=n.p+"static/media/write_post.ca4d662d.png",pt=n.p+"static/media/reports.5b8dc6c2.png",bt=n.p+"static/media/qr.3d9aba5e.png",ht=[{title:"MeetBalls",description:["MeetBalls is a powerful companion app to Zoom that aims to help meeting secretaries streamline the entire meeting workflow from pre-meeting preparations to post-meeting duties.","From the meeting creation interface, agenda planner and meeting link dissemination service, to automated timekeeping and attendance taking, down to the post-mortem report, MeetBalls has you covered along every step of the process!"],links:[{title:"Try MeetBalls here!",url:"https://meetballsapp.com"},{title:"Demo video",url:"https://www.youtube.com/watch?v=Ru1LYvjYynk"},{title:"STePs Showcase",url:"https://uvents.nus.edu.sg/event/19th-steps/module/CS3216/project/10"},{title:"Source code",url:"https://github.com/JinHao-L/MeetBalls"}],stack:[_,J,me,ue,pe,be,ie],images:[{caption:"MeetBalls, a Zoom Meeting Companion app",src:Be,thumbnail:Be},{caption:"MeetBalls Dashboard View",src:Me,thumbnail:Me},{caption:"Ongoing Meeting View",src:Le,thumbnail:Le},{caption:"Poster for MeetBalls",src:Ee,thumbnail:Ee}]},{title:"PeerPrep",description:["PeerPrep is a live collaborative coding platform where students can match with a partner and practise for their coding interviews by solving Leetcode questions.","The purpose of the web application is to help students better prepare themselves for technical whiteboard interviews through a peer-learning system so students can learn from each other and break the monotony of revising alone.","To support live collaboration, the app implements Operational Transformation (OT) using CodeMirror. The web app uses a microservice architecture and was deployed on AWS with high availability and scalability."],links:[{title:"Try PeerPrep here!",url:"http://peer-prep.live",disabled:!0,disabledHint:"Site is no longer live :("},{title:"Source code",url:"https://github.com/JinHao-L/peerprep"}],stack:[_,J,me,ue,he,je,ie,Z,Q],images:[{caption:"Register for a PeerPrep account (or login as Guest)",src:Ue,thumbnail:Ue},{caption:"PeerPrep Dashboard View",src:Je,thumbnail:Je},{caption:"PeerPrep live collaborative platform",src:He,thumbnail:He},{caption:"Awaiting submission confirmation from partner",src:ze,thumbnail:ze},{caption:"Some basic interview statistics",src:Re,thumbnail:Re}]},{title:"NUSCats",description:["NUSCats is a progressive web app that helps NUS CatCafe members crowd-source for locations of cats in NUS. The aim of the app is to make feeding more efficient, by providing the cats' last-seen locations.","The app allows users to take a photo of the cat and upload the sighting on the app. The app detects the current location of the user and updates the location of the sighted cat on a map. From such sightings, NUS Cat Cafe members can then narrow down the current location of the cats, which would make locating the cats for feeding a lot easier."],links:[{title:"Try NUSCats here!",url:"http://nuscats.herokuapp.com"},{title:"Source code",url:"https://github.com/JinHao-L/nuscats"}],stack:[_,J,$,re,ue,fe,ee,xe,be],images:[{caption:"Map view of crowdsourced cat sightings",src:_e,thumbnail:_e},{caption:"Feed view of crowdsourced cat sightings",src:Ge,thumbnail:Ge},{caption:"Landing page of NUS Cat",src:Ye,thumbnail:Ye},{caption:"Profile of NUS's Ashy",src:qe,thumbnail:qe},{caption:"List of cats found in NUS",src:Ve,thumbnail:Ve},{caption:"Admin functionalities",src:We,thumbnail:We},{caption:"Profile of NUS Cat's user",src:Ke,thumbnail:Ke}]},{title:"HelloWorld",description:["HelloWorld is a real-time chat based application built for connecting users around the globe. This project was inspired due to the frustration and ongoing boredom peopleface during the COVID-19 pandemic. The application comes with an interactive map display for users to view and connect with users via a real-time chat interface.","This app was designed and developed for a Hack&Roll 2021, NUS Hackers' annual 24-hour hackathon, and the largest student-run hackathon in Singapore."],links:[{title:"Try HelloWorld here!",url:"https://helloworld-hnr.netlify.app"},{title:"Source code",url:"https://github.com/jinhao-l/HelloWorld"},{title:"Hack&Roll 2021",url:"https://devpost.com/software/hello-world-t3znpj"}],stack:[J,V,me,Y,X,we],images:[{caption:"Joining in the fun!",src:Qe,thumbnail:Qe},{caption:"Chat with people around you!",src:Ze,thumbnail:Ze},{caption:"See people around the world!",src:Xe,thumbnail:Xe}]},{title:"Nuudle",description:["Nuudle is a desktop application that empowers clinic nurses, allowing them to handle patients\u2019 appointments quickly and efficiently. While it has a GUI, most of the user interactions happen using a CLI (Command Line Interface)."],links:[{title:"Download Nuudle here!",url:"http://nuscats.herokuapp.com"},{title:"Documentation",url:"https://ay2021s1-cs2103t-t12-4.github.io/tp"},{title:"Source code",url:"https://github.com/JinHao-L/nuudle"}],stack:[W,G,ge,ve],images:[{caption:"A clinic management desktop app to manage patient records and clinical appointments",src:$e,thumbnail:$e},{caption:"Add new patient to Nuudle",src:nt,thumbnail:nt},{caption:"Assign patient to an empty appointment slot",src:tt,thumbnail:tt},{caption:"Find a patient and his upcoming appointments",src:et,thumbnail:et},{caption:"View appointments by date",src:it,thumbnail:it},{caption:"Add doctor notes to patient",src:at,thumbnail:at}]},{title:"TembuFriends",description:["TembuFriends is a social networking mobile application for Tembusu residents. It provides a platform for students to connect and share their knowledge. This app is built using React Native framework on Expo and Firebase as our backend server and database.","This was a project done under NUS Orbital - Apollo 11. And it is also my first project that I undertook after learning the basics of coding"],links:[{title:"Try TembuFriends here!",url:"https://expo.dev/@tembufriends/TembuFriends"},{title:"Demo video",url:"https://www.youtube.com/watch?v=vYg_Eed1BIs"},{title:"Documentation",url:"https://docs.google.com/document/d/1QqdZvL2rQxd9YPI_1KxZBTe_RL20MkOKKq330yiCV4c/edit?usp=sharing"},{title:"Source code (Frontend)",url:"https://github.com/JinHao-L/tembu-friends"},{title:"Source code (Functions)",url:"https://github.com/JinHao-L/tembufriends-functions"}],stack:[U,Oe,ye,re,le],images:[{caption:"TembuFriends, a social networking app specially for Tembusians",src:ot,thumbnail:ot},{caption:"Look up the latest Tembusu news in the home page",src:st,thumbnail:st},{caption:"Explore and find students based on interests or past modules",src:ct,thumbnail:ct},{caption:"View your friend requests and latest activities",src:rt,thumbnail:rt},{caption:"Menu page to view other details",src:lt,thumbnail:lt},{caption:"The profile of a typical Tembusian",src:dt,thumbnail:dt},{caption:"Write private or public posts on a Tembusian's wall",src:ut,thumbnail:ut},{caption:"Update your profile with latest module information from NUSMods",src:mt,thumbnail:mt},{caption:"Share your TembuFriends QR Code to your friends",src:bt,thumbnail:bt},{caption:"Admin can manage reports and even ban user within the application",src:pt,thumbnail:pt}]}],jt=function(e){var t=e.id,n=e.style,a=e.className,i=e.nextId;return Object(x.jsxs)(S,{id:t,style:n,className:"".concat(a),nextId:i,children:[Object(x.jsx)(B,{children:"My Projects"}),Object(x.jsx)("div",{className:"flex items-center justify-center mt-10 md:px-10 lg:px-40 2xl:px-80",children:Object(x.jsx)("div",{className:"grid grid-cols-1 divide-y divide-gray-500 md:grid-cols-1 divide-dashed",children:ht.map((function(e){return Object(x.jsx)(Pe,{data:e},e.title)}))})})]})},ft=n(8),xt=n.n(ft),gt=n(59),vt=n(141),Ot=n(45),yt=n(143),wt=Ot.a({name:Ot.b().required("Name is required"),email:Ot.b().email("Please enter a valid email").required("Email is required"),message:Ot.b().required("Message is required")}),Nt=function(e){var t,n,a,o,s,r,d=e.id,m=e.style,u=e.className,p=e.nextId,b=Object(i.useState)(!1),h=Object(c.a)(b,2),j=h[0],f=h[1],g=function(){var e=Object(gt.a)(xt.a.mark((function e(t,n){var a,i;return xt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setSubmitting,i=n.setErrors,a(!0),e.abrupt("return",yt.a.send("service_pbp8ue6","template_k5j5k1h",t,"user_9JZV6ssP3QSt7vtoKtdqH").then((function(e){f(!0),a(!1),console.log(e.text)})).catch((function(e){a(!1),i({message:e.text}),console.log(e.text)})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=Object(vt.a)({initialValues:{name:"",email:"",message:""},validationSchema:wt,onSubmit:g});return Object(x.jsxs)(S,{id:d,style:m,className:u,nextId:p,minHeight:"calc(100vh - 140px)",children:[Object(x.jsx)(B,{children:"Contact Me"}),Object(x.jsx)("div",{className:"container flex flex-col items-center justify-center flex-1 px-2 pt-2 pb-5 m-auto sm:pt-10 lg:px-40 xl:px-64 2xl:px-96",children:Object(x.jsxs)("div",{className:"w-full px-6 py-8 text-black bg-gray-300 rounded shadow-md opacity-90",children:[Object(x.jsx)("h1",{className:"mb-8 text-3xl text-center",children:"Leave me a message! \ud83d\udcec"}),Object(x.jsxs)("form",{onSubmit:v.handleSubmit,noValidate:!0,children:[Object(x.jsx)("label",{htmlFor:"name",children:"Name"}),Object(x.jsx)("input",Object(N.a)({type:"name",id:"name",className:"block w-full p-3 mt-1 border rounded border-grey-light",placeholder:"Your preferred form of address"},v.getFieldProps("name"))),Object(x.jsx)("div",{className:"p-1 mb-2 text-sm leading-none text-red-500 ",children:(null===v||void 0===v||null===(t=v.touched)||void 0===t?void 0:t.name)&&(null===v||void 0===v||null===(n=v.errors)||void 0===n?void 0:n.name)&&Object(x.jsx)("div",{children:v.errors.name})}),Object(x.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(x.jsx)("input",Object(N.a)({type:"email",id:"email",className:"block w-full p-3 border rounded border-grey-light",placeholder:"Your email"},v.getFieldProps("email"))),Object(x.jsx)("div",{className:"p-1 mt-1 mb-2 text-sm leading-none text-red-500",children:(null===v||void 0===v||null===(a=v.touched)||void 0===a?void 0:a.email)&&(null===v||void 0===v||null===(o=v.errors)||void 0===o?void 0:o.email)&&Object(x.jsx)("div",{children:v.errors.email})}),Object(x.jsx)("label",{htmlFor:"message",children:"Message"}),Object(x.jsx)("textarea",Object(N.a)({id:"message",className:"block w-full p-3 mt-1 border rounded border-grey-light",placeholder:"Leave me a message",cols:40,rows:5},v.getFieldProps("message"))),Object(x.jsx)("div",{className:"p-1 mb-2 text-sm leading-none text-red-500",children:(null===v||void 0===v||null===(s=v.touched)||void 0===s?void 0:s.message)&&(null===v||void 0===v||null===(r=v.errors)||void 0===r?void 0:r.message)&&Object(x.jsx)("div",{children:v.errors.message})}),Object(x.jsxs)("button",{disabled:j||v.isSubmitting,type:"submit",className:"flex flex-row justify-center w-full py-3 mt-1 text-xl text-center text-white bg-green-600 rounded place-items-center disabled:opacity-50 disabled:bg-green-600 hover:bg-green-500 focus:outline-none",children:[v.isSubmitting&&Object(x.jsxs)("svg",{className:"w-5 h-5 mr-3 text-white animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(x.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Object(x.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})," ","Send \ud83d\ude80"]}),Object(x.jsx)(l.a,{show:j,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(x.jsxs)("div",{className:"p-4 rounded-b-xl w-full text-center bg-yellow-400 bg-opacity-30 border-2 border-t-0 border-yellow-400 border-opacity-50",children:["Email sent successfully! Thank you for your feedback!",Object(x.jsx)("br",{}),"I will reach out to you as soon as I can."]})})]})]})})]})},kt=n(140),St=n.n(kt),It=function(e){var t=e.children,n=e.className;return Object(x.jsxs)("div",{className:"text-white bg-gray-900",children:[Object(x.jsx)(St.a,{className:"fixed ".concat(n),params:{fpsLimit:60,particles:{color:{value:"#ffffff"},number:{value:120,density:{enable:!0,value_area:500}},move:{direction:"right",speed:1},size:{random:!0,value:1},shape:{type:"circle"},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{quantity:1}}},detectRetina:!0,zLayers:1},style:{zIndex:-1,position:"fixed",width:"100%"}}),Object(x.jsx)("div",{style:{zIndex:1},className:"relative",children:t})]})},Ct=function(){return Object(x.jsx)("div",{className:"bg-gray-100 ",children:Object(x.jsxs)("div",{className:"flex flex-col-reverse items-center max-w-6xl gap-1 px-3 pt-4 pb-4 m-auto text-sm text-gray-800 border-t md:flex-row",children:[Object(x.jsxs)("div",{className:"",children:["\xa9 Copyright ",(new Date).getFullYear()]}),Object(x.jsx)(g,{className:"md:flex-auto md:flex-row-reverse"})]})})},Ft=(n(538),function(e){var t=e.color,n=void 0===t?"red":t,a=e.onClick,i=e.className;return Object(x.jsx)("button",{onClick:a,className:"".concat(i," fixed bottom-6 items-center flex justify-center right-6 p-0 w-12 h-12 md:bottom-10 bg-").concat(n,"-500 rounded-full z-50 hover:bg-").concat(n,"-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"),children:Object(x.jsx)(d.c,{size:30})})}),Tt=function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?a(!0):e<=300&&a(!1)})),Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{}),Object(x.jsxs)(It,{className:"particle-js",children:[Object(x.jsx)(C,{id:"intro-section",nextId:"about-section"}),Object(x.jsx)(Se,{id:"about-section",nextId:"experiences-section"}),Object(x.jsx)(Fe,{id:"experiences-section",nextId:"projects-section"}),Object(x.jsx)(jt,{id:"projects-section",nextId:"contact-section"}),Object(x.jsx)(Nt,{id:"contact-section"}),Object(x.jsx)(Ft,{className:n?"inline text-gray-800":"hidden",onClick:function(){return r.animateScroll.scrollToTop({duration:500,smooth:!0})},color:"titan-white"})]}),Object(x.jsx)(Ct,{})]})},At=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,546)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};Object(s.render)(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(Tt,{})}),document.getElementById("root")),At(console.log)}},[[539,1,2]]]);
//# sourceMappingURL=main.843960e1.chunk.js.map