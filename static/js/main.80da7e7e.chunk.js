(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),d=a.n(c),s=a(3),n=a.n(s),r=(a(9),a(4)),m=(a.p,a(10),a(0)),o=function(e){var t=d.a.useState(),a=Object(r.a)(t,2),c=a[0],s=a[1],n=d.a.useRef(null);d.a.useEffect((function(){n.current.focus()}),[]);var o=function(t){switch(t.key){case"Q":document.getElementById("Q").play(),s(e.pad[0].text);break;case"W":document.getElementById("W").play(),s(e.pad[1].text);break;case"E":document.getElementById("E").play(),s(e.pad[2].text);break;case"A":document.getElementById("A").play(),s(e.pad[3].text);break;case"S":document.getElementById("S").play(),s(e.pad[4].text);break;case"D":document.getElementById("D").play(),s(e.pad[5].text);break;case"Z":document.getElementById("Z").play(),s(e.pad[6].text);break;case"X":document.getElementById("X").play(),s(e.pad[7].text);break;case"C":document.getElementById("C").play(),s(e.pad[8].text)}},i=function(t){switch(t.preventDefault(),t.target.id){case"heater-1":document.getElementById("Q").play(),s(e.pad[0].text);break;case"dsc-oh":document.getElementById("W").play(),s(e.pad[1].text);break;case"kicknhat":document.getElementById("E").play(),s(e.pad[2].text);break;case"cevh2":document.getElementById("A").play(),s(e.pad[3].text);break;case"chord1":document.getElementById("S").play(),s(e.pad[4].text);break;case"givelight":document.getElementById("D").play(),s(e.pad[5].text);break;case"dryoh":document.getElementById("Z").play(),s(e.pad[6].text);break;case"bld":document.getElementById("X").play(),s(e.pad[7].text);break;case"sidestick":document.getElementById("C").play(),s(e.pad[8].text)}};return Object(m.jsxs)("div",{id:"drum-pad",children:[e.pad.map((function(e){return Object(m.jsxs)("button",{className:"drum-pad",id:e.id,onKeyPress:o,onClick:i,ref:n,children:[e.letter,Object(m.jsx)("audio",{id:e.letter,controls:!0,className:"clip",src:e.src})]})})),Object(m.jsx)(p,{display:c})]})},p=function(e){return Object(m.jsx)("div",{id:"display",children:e.display})};var i=function(){return Object(m.jsx)("div",{id:"drum-machine",children:Object(m.jsx)(o,{pad:[{letter:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",text:"Heater 1",id:"heater-1"},{letter:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",text:"Dsc_oh",id:"dsc-oh"},{letter:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",text:"Kick and hat",id:"kicknhat"},{letter:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",text:"Cev_H2",id:"cevh2"},{letter:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",text:"Chord 1",id:"chord1"},{letter:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",text:"Give us light",id:"givelight"},{letter:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",text:"Dry Oh",id:"dryoh"},{letter:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",text:"Bld",id:"bld"},{letter:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",text:"Side stick",id:"sidestick"}]})})},l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,d=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),d(e),s(e),n(e)}))};n.a.render(Object(m.jsx)(d.a.StrictMode,{children:Object(m.jsx)(i,{})}),document.getElementById("root")),l()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.80da7e7e.chunk.js.map