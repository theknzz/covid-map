(this["webpackJsonpcovid-map"]=this["webpackJsonpcovid-map"]||[]).push([[0],{58:function(n,e,t){},68:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),c=t.n(o),a=t(28),i=t.n(a),u=(t(58),t(44)),d=t(3),l=t(8),s="GET_COUNTRY_INFO_SUCCESS",f="GET_COUNTRY_INFO_ERROR",b="GET_WORLD_INFO_SUCCESS",h="GET_WORLD_INFO_ERROR",j="GET_GLOBAL_INFO_SUCCESS",x="GET_GLOBAL_INFO_ERROR",p="SERVER_DOWN",g="GET_PORTUGAL_INFO_SUCCESS",m=t(25),O=t.n(m),v=function(n){return n>1e9?Math.round(n/1e8)/10+"Bn":n>1e6?Math.round(n/1e5)/10+"M":Math.round(n/100)/10+"K"},w=function(n){return{updatedAt:O()(n.updated).fromNow(),name:n.country,flag:n.countryInfo.flag,infected:v(n.cases),deaths:v(n.deaths),recovered:v(n.recovered),tests:v(n.tests)}},y=t(4);function k(){var n=Object(d.a)(["\n    width: auto;\n    height: 50px;\n"]);return k=function(){return n},n}var _=y.a.img(k()),C=t(27),E=t(5);function S(){var n=Object(d.a)(["\n    max-height: 87.2vh;\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    min-width: 30vw;\n    flex-flow: column wrap;\n    border: 1px solid ",";\n    background-color: ",";\n    margin: 5px;\n"]);return S=function(){return n},n}var B=y.a.div(S(),(function(n){return n.theme.border}),(function(n){return n.theme.mapBackground})),G=function(n){var e=n.setTooltipContent,t=n.getInfo,c=n.country,a=n.getWorld,i=n.getGlobal,u=n.getPortugal,d=(n.portugal,Object(E.b)());return Object(o.useEffect)((function(){a(),i(),u()}),[]),Object(r.jsx)(B,{theme:d,children:Object(r.jsx)(C.ComposableMap,{className:"map","data-tip":"",projectionConfig:{scale:50},width:500,height:500,children:Object(r.jsx)(C.ZoomableGroup,{center:[20,180],zoom:4,children:Object(r.jsx)(C.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",children:function(n){return n.geographies.map((function(n){return Object(r.jsx)(C.Geography,{geography:n,onClick:function(){e(function(n){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:n.name}),Object(r.jsx)(_,{src:n.flag,alt:"country_flag"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Infected: "}),n.infected,Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Deaths: "}),n.deaths,Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Recovered: "}),n.recovered,Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Tests: "}),n.tests]})}(c))},onMouseEnter:function(){var r=n.properties,o=r.NAME;r.POP_EST;t(o),e("".concat(o))},onMouseLeave:function(){e("")},style:{default:{fill:d.mapFill,outline:"none"},hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}},n.rsmKey)}))}})})})})},F=Object(l.b)((function(n){return{country:n.info.country,portugal:n.info.portugal}}),(function(n){return{getInfo:function(e){return n(function(n){return function(e,t){fetch("https://disease.sh/v3/covid-19/countries/".concat(n,"?strict=true")).then((function(n){return n.json().then((function(n){var t=w(n);e({type:s,data:t})}))})).catch((function(n){console.error(n),e({type:f,data:n})}))}}(e))},getWorld:function(){return n((function(n,e){fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json().then((function(e){var t=e.map((function(n){return w(n)}));n({type:b,data:t})}))})).catch((function(e){n({type:h,data:e})}))}))},getGlobal:function(){return n((function(n,e){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json().then((function(e){var t={updatedAt:O()(e.updated).fromNow(),infected:v(e.cases),recovered:v(e.recovered),deaths:v(e.deaths)};n({type:j,data:t})}))})).catch((function(e){console.error(e),n({type:x,data:e})}))}))},getPortugal:function(){return n((function(n,e){fetch("https://covid19-api.vost.pt/Requests/get_status").then((function(e){return e.json().then((function(e){"Server is OK"===e.status&&fetch("https://covid19-api.vost.pt/Requests/get_full_dataset").then((function(e){return e.json().then((function(e){n({type:g,data:{days:e.data,infected:e.confirmados,recovered:e.recuperados,infected_m:e.confirmados_m,infected_f:e.confirmados_f}})}))})).catch(),n({type:p})}))})).catch()}))}}}))(Object(o.memo)(G)),R=t(49);function I(){var n=Object(d.a)(["\n    background-color: ",";\n    color: ",";\n    width: 100%;\n    padding: 20px 0px;\n    display: flex;\n    justify-content: center;\n    flex-flow: column wrap;\n    align-items: center;\n    border: 1px solid ",";\n    > h1 {\n        color: red;\n        margin: 10px !important;\n    }\n"]);return I=function(){return n},n}var T=y.a.div(I(),(function(n){return n.theme.boxBackground}),(function(n){return n.theme.text}),(function(n){return n.theme.border})),N=function(n){var e=n.nr,t=Object(E.b)();return Object(r.jsxs)(T,{theme:t,children:["Global Cases: ",Object(r.jsx)("h1",{children:e})]})};function D(){var n=Object(d.a)(["\n    flex: 2;\n    color: ",";\n"]);return D=function(){return n},n}function M(){var n=Object(d.a)(["\n    flex: 1;\n    font-weight: bold;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n    color: ",";\n"]);return M=function(){return n},n}function A(){var n=Object(d.a)(["\n    display: flex;\n    padding: 3px;\n    border-bottom: 1px solid ",";\n    width: 100%;\n"]);return A=function(){return n},n}var L=y.a.div(A(),(function(n){return n.theme.border})),P=y.a.div(M(),(function(n){return"red"===n.color?"red":"green"})),U=y.a.div(D(),(function(n){return n.theme.text})),W=function(n){var e=n.name,t=n.cases,o=n.color,c=Object(E.b)();return Object(r.jsxs)(L,{theme:c,children:[Object(r.jsx)(P,{color:o,children:t}),Object(r.jsx)(U,{theme:c,children:e})]})};function z(){var n=Object(d.a)(["\n    flex: 1;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    overflow-y: auto;\n    color: ",";\n    justify-content: center;\n    background-color: ",";\n    margin-top: 10px;\n    max-height: 60vh;\n    border: 1px solid ",";\n    > h5 {\n        margin: 20px !important;\n    }\n    @media screen and (max-height: 768px) {\n        > h5 {\n        }\n    }\n"]);return z=function(){return n},n}var K=y.a.div(z(),(function(n){return n.theme.text}),(function(n){return n.theme.boxBackground}),(function(n){return n.theme.border})),Z=function(n){var e=n.world,t=n.color,o=n.append,c=Object(E.b)(),a=e.map((function(n){return Object(r.jsx)(W,{color:t,name:n.name,cases:n.infected},n.name)}));return Object(r.jsxs)(K,{theme:c,children:[Object(r.jsxs)("h5",{children:["Cases ",o," by Countries"]}),a]})};function q(){var n=Object(d.a)(["\n    display: flex;\n    flex-flow: column wrap;\n    align-items: center;\n    margin-top: 20px;\n    background-color: ",";\n    color: ",";\n    border: 1px solid ",";\n    width: 100%;\n    padding: 10px 0px;\n    & > h3 {\n        margin: 5px !important; \n    }\n    \n    & > a {\n        font-size: 15px;\n    }\n"]);return q=function(){return n},n}var J=y.a.div(q(),(function(n){return n.theme.boxBackground}),(function(n){return n.theme.text}),(function(n){return n.theme.border})),V=function(n){var e=n.global,t=Object(E.b)();return Object(r.jsxs)(J,{theme:t,children:[Object(r.jsx)("a",{children:"Updated"}),Object(r.jsx)("h3",{children:e.updatedAt})]})};function Y(){var n=Object(d.a)(["\n    flex: 0.7;\n    background-color: ",";\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    max-height: 85vh;\n    border: 1px solid ",";\n    margin: 5px;\n    @media screen and (max-height: 768px) {\n        max-height: none;\n    }\n"]);return Y=function(){return n},n}var H=y.a.div(Y(),(function(n){return n.theme.background}),(function(n){return n.theme.border})),Q=Object(l.b)((function(n){return{global:n.info.global,world:n.info.world}}))((function(n){var e=n.global,t=n.world,o=Object(E.b)();return Object(r.jsxs)(H,{theme:o,children:[Object(r.jsx)(N,{nr:e.infected}),Object(r.jsx)(Z,{append:"",world:t,color:"red"}),Object(r.jsx)(V,{global:e})]})}));function X(){var n=Object(d.a)(["\n    background-color: ",";\n    color: ",";\n    width: 100%;\n    padding: 30px 0px;\n    display: flex;\n    justify-content: center;\n    flex-flow: column wrap;\n    align-items: center;\n    border: 1px solid ",";\n    > h1 {\n        color: green;\n        margin: 10px !important;\n    }\n"]);return X=function(){return n},n}var $=y.a.div(X(),(function(n){return n.theme.boxBackground}),(function(n){return n.theme.text}),(function(n){return n.theme.border})),nn=function(n){var e=n.global,t=Object(E.b)();return Object(r.jsxs)($,{theme:t,children:["Global Info",Object(r.jsx)("h1",{children:e.recovered})]})},en=t(38),tn=t.n(en);function rn(){var n=Object(d.a)(["\n    flex: 2;\n    border: 1px solid ",";\n    margin-top: 10px;\n    background-color: ",";\n    @media screen and (max-height: 768px) {\n        > canvas {\n            max-width: 100%;\n            flex: 1;\n        }\n    }\n"]);return rn=function(){return n},n}var on=y.a.div(rn(),(function(n){return n.theme.border}),(function(n){return n.theme.boxBackground})),cn=Object(l.b)((function(n){return{portugal:n.info.portugal}}))((function(n){var e=n.portugal,t=[];for(var o in e.days)t.push(e.days[o]);var c=[];for(var a in e.infected)c.push(e.infected[a]);var i=[];for(var u in e.recovered)i.push(e.recovered[u]);var d=document.getElementById("myChart"),l=d&&d.getContext("2d");l&&new tn.a(l,{type:"line",data:{labels:t,datasets:[{label:"# of infected",data:c,backgroundColor:["rgba(255,25,25, 0.2)"],borderWidth:1},{label:"# of recovered",data:i,backgroundColor:["rgba(152,253,149, 0.6)"],borderWidth:1}]},options:{title:{display:!0,text:"Portugal track"},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}});var s=Object(E.b)();return Object(r.jsx)(on,{theme:s,children:Object(r.jsx)("canvas",{id:"myChart",width:660})})}));function an(){var n=Object(d.a)(["\n    flex: 0.5;\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    color: ",";\n    margin-top: 6px;\n    > h5 {\n        margin: 20px !important;\n    }\n"]);return an=function(){return n},n}function un(){var n=Object(d.a)(["\n     @media screen and (max-height: 768px) {\n        > canvas {\n            margin: 10px;\n        }\n        width: 100vw;\n        overflow: hidden;\n    }\n    flex: 3;\n"]);return un=function(){return n},n}function dn(){var n=Object(d.a)(["\n    margin-left: 10px;\n    border: 1px solid ",";\n    margin-top: 10px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    overflow: hidden;\n    background-color: ",";\n"]);return dn=function(){return n},n}var ln=y.a.div(dn(),(function(n){return n.theme.border}),(function(n){return n.theme.boxBackground})),sn=y.a.div(un()),fn=y.a.div(an(),(function(n){return n.theme.text})),bn=Object(l.b)((function(n){return{portugal:n.info.portugal}}))((function(n){var e=n.portugal,t=Object(E.b)(),o=document.getElementById("genderGraph"),c=o&&o.getContext("2d"),a=[];for(var i in e.infected_m){var u=e.infected_m[i];a.push(u||0)}var d=[];for(var l in e.infected_f){var s=e.infected_f[l];d.push(s||0)}return c&&new tn.a(c,{type:"bar",data:{labels:[""],datasets:[{label:["# of Man"],data:[a[a.length-1]],backgroundColor:["rgba(54, 162, 235, 0.6)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1},{label:["# of Woman"],data:[d[d.length-1]],backgroundColor:["rgba(255,0,56,0.6)"],borderColor:["rgba(253,0,53)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}),Object(r.jsxs)(ln,{theme:t,children:[Object(r.jsx)(fn,{theme:t,children:Object(r.jsx)("h5",{children:"Gender Graph - Portugal"})}),Object(r.jsx)(sn,{children:Object(r.jsx)("canvas",{id:"genderGraph",width:300,height:250})})]})}));function hn(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n    overflow: auto;\n    @media (max-width: 758px) {\n        flex-flow: column nowrap;\n        justify-content: center;\n        flex: 1;\n        width: 100%;\n        align-items: center;\n        overflow: hidden;\n    }\n"]);return hn=function(){return n},n}function jn(){var n=Object(d.a)(["\n    flex: 1;\n    background-color: ",";\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    max-height: 85vh;\n    border: 1px solid ",";\n    margin: 5px;\n    @media screen and (max-width: 758px) {\n        max-height: auto;\n        margin: 5px;\n        max-height: none;\n        overflow: hidden;\n    }\n"]);return jn=function(){return n},n}var xn=y.a.div(jn(),(function(n){return n.theme.background}),(function(n){return n.theme.border})),pn=y.a.div(hn()),gn=Object(l.b)((function(n){return{global:n.info.global,world:n.info.world}}))((function(n){var e=n.global,t=n.world,o=Object(E.b)();return Object(r.jsxs)(xn,{theme:o,children:[Object(r.jsx)(nn,{global:e}),Object(r.jsxs)(pn,{children:[Object(r.jsx)(Z,{append:"recovered",world:t,color:"green"}),Object(r.jsx)(bn,{})]}),Object(r.jsx)(cn,{})]})})),mn={background:"#b8b8b8",boxBackground:"#d7d7d7",text:"#363537",toggleBorder:"#FFF",border:"black",mapFill:"#b3b3b3",mapBackground:"#c4fbff"},On={background:"#363636",boxBackground:"#1d1d1d",text:"#bdbdbd",toggleBorder:"#6B8096",border:"#525252",mapFill:"#2a2a28",mapBackground:"#010f1a"};function vn(){var n=Object(d.a)(["\n    display: flex;\n    > button {\n        border: none;\n        background-color: ",";\n        color: ",";\n        font-size: 2em;\n        &: focus {\n            outline: none;\n        }\n    }\n"]);return vn=function(){return n},n}function wn(){var n=Object(d.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    min-height: 100vh;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: ",";\n    font-family: 'Montserrat', sans-serif;\n"]);return wn=function(){return n},n}function yn(){var n=Object(d.a)(["\n    max-height: 10vh;\n    color: ",";\n    display: flex;\n    justify-content: center;\n    flex: 1;\n    > img {\n        width: 50px;\n        height: 50px;\n    }\n    @media screen and (max-width: 758px) {\n        font-size: 1.5em;\n        > img {\n            width: 35px;\n            height: 35px;\n        }    \n    }\n"]);return yn=function(){return n},n}function kn(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: center;\n    flex-flow: row wrap;\n    margin: 0px 30px;\n    @media screen and (max-width: 758px) {\n        display: flex;\n        width: 100%;\n        flex-flow: column nowrap;\n        margin: 0px;\n    }\n"]);return kn=function(){return n},n}var _n=y.a.div(kn()),Cn=y.a.h1(yn(),(function(n){return n.isDark?"white":"black"})),En=y.a.div(wn(),(function(n){return n.isDark?"black":"#ffffff"})),Sn=y.a.div(vn(),(function(n){return n.isDark?"black":"#ffffff"}),(function(n){return n.isDark?"white":"black"}));var Bn=function(){var n=Object(o.useState)(!0),e=Object(u.a)(n,2),t=e[0],c=e[1],a=Object(o.useState)(""),i=Object(u.a)(a,2),d=i[0],l=i[1],s=Object(E.b)();return Object(r.jsx)(E.a,{theme:t?On:mn,children:Object(r.jsxs)(En,{isDark:t,children:[Object(r.jsxs)(Sn,{isDark:t,children:[Object(r.jsxs)(Cn,{isDark:t,children:["C",Object(r.jsx)("img",{src:"https://freesvg.org/img/Virus.png",alt:"o"}),"vid Dashboard"]}),Object(r.jsx)("button",{onClick:function(n){c(!t)},children:t?"\ud83c\udf15":"\ud83d\udd06"})]}),Object(r.jsxs)(_n,{theme:s,children:[Object(r.jsx)(Q,{}),Object(r.jsx)(F,{setTooltipContent:l}),Object(r.jsx)(gn,{})]}),Object(r.jsx)(R.a,{children:d})]})})},Gn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))},Fn=t(17),Rn=t(48),In=t(6),Tn={country:{},world:[{}],error:"",global:{},portugal:{}},Nn=Object(Fn.c)({info:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(In.a)(Object(In.a)({},n),{},{country:e.data,error:""});case f:return Object(In.a)(Object(In.a)({},n),{},{error:e.data});case b:return Object(In.a)(Object(In.a)({},n),{},{world:e.data,error:""});case h:return Object(In.a)(Object(In.a)({},n),{},{error:e.data});case j:return Object(In.a)(Object(In.a)({},n),{},{error:"",global:e.data});case x:return Object(In.a)(Object(In.a)({},n),{},{error:e.data});case g:return Object(In.a)(Object(In.a)({},n),{},{portugal:e.data,error:""});case p:return Object(In.a)(Object(In.a)({},n),{},{error:"Portugal server is longer active"});default:return n}}}),Dn=Object(Fn.d)(Nn,Object(Fn.a)(Rn.a));i.a.render(Object(r.jsx)(l.a,{store:Dn,children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Bn,{})})}),document.getElementById("root")),Gn()}},[[68,1,2]]]);
//# sourceMappingURL=main.7d900b82.chunk.js.map