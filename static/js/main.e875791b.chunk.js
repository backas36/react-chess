(this.webpackJsonphw2=this.webpackJsonphw2||[]).push([[0],{17:function(n,e,r){},18:function(n,e,r){},22:function(n,e,r){"use strict";r.r(e);var t,c,i,o,a,u,l,s=r(0),d=r(9),b=r.n(d),h=(r(17),r(18),r(2)),x=r(3),p=r(7),f=function(n,e,r,t,c){for(var i=n[r][e],o=e+t,a=r+c,u=0;n[a]&&n[a][o]===i;)o+=t,a+=c,u++;return u},j=function(){var n=Object(s.useState)(Array(19).fill(Array(19).fill(null))),e=Object(p.a)(n,2),r=e[0],t=e[1],c=Object(s.useState)(null),i=Object(p.a)(c,2),o=i[0],a=i[1],u=Object(s.useRef)(),l=Object(s.useRef)(),d=Object(s.useRef)(!1);return Object(s.useEffect)((function(){u.current&&l.current&&a(function(n,e,r){if(f(n,e,r,0,1)+f(n,e,r,0,-1)>=4||f(n,e,r,1,0)+f(n,e,r,-1,0)>=4||f(n,e,r,1,1)+f(n,e,r,-1,-1)>=4||f(n,e,r,1,-1)+f(n,e,r,-1,1)>=4)return n[r][e]}(r,u.current,l.current))}),[r]),{board:r,winner:o,isWhiteTurn:d,handleChessClick:function(n,e,c){c||o||(u.current=n,l.current=e,function(n,e){t(r.map((function(r,t){return t!==e?r:r.map((function(e,r){return r!==n?e:d.current?"white":"black"}))})))}(n,e),d.current=!d.current)}}},w=r(1),O=x.a.div(t||(t=Object(h.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n  transition: background-color .1s;\n\n  \n  ","\n\n  ","\n"])),(function(n){return n.$value&&"\n     background-color:".concat(n.$value,";\n  ")}),(function(n){return!n.$value&&"\n    &:hover {\n      background-color: black;\n      ".concat(n.$isWhiteTurn&&"\n        background-color: white;\n        opacity:0.6;\n      ","\n      box-shadow: 3px 4px 4px 0px #505050;\n      opacity:0.6;\n\n    }\n  ")})),g=function(n){var e=n.rowIndex,r=n.colIndex,t=n.board,c=n.handleChessClick,i=(n.winner,n.isWhiteTurn),o=t[e][r];return Object(w.jsx)(O,{rowIndex:e,colIndex:r,onClick:function(){return c(r,e,o)},$isWhiteTurn:i,$value:o})},k=x.a.div(c||(c=Object(h.a)(["\n  width: 200px;\n  text-align: center;\n"]))),v=x.a.button(i||(i=Object(h.a)(["\n  border-radius: 6px;\n  border: 4px solid brown;\n  background-color: #dec3a1;\n  padding: 6px 12px;\n  cursor: pointer;\n  transition: all .2s;   \n  color:brown;\n  &:hover{\n    background-color: #DEB887;\n    color: azure;\n  }\n"]))),m=x.a.div(o||(o=Object(h.a)(["\n  \n  background-color: #000;\n  ","\n  box-shadow: 3px 4px 4px 0px #505050;\n\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: inline-block;\n  transform: translateY(25%);\n  margin-left:20px;\n\n"])),(function(n){return n.$isWhiteTurn&&"\n    background-color:#fff;\n  "})),W=function(n){var e=n.isWhiteTurn,r=n.winner;return Object(w.jsxs)(k,{children:[Object(w.jsx)("h1",{children:"\u4e94\u5b50\u68cb"}),!r&&Object(w.jsxs)("h3",{children:["Next player :",Object(w.jsx)(m,{$isWhiteTurn:e.current,winner:r})]}),r&&Object(w.jsxs)("h3",{children:["Winner is  : \ud83d\udc4d\ud83c\udffd ","black"===r?"\u9ed1\u8272":"\u767d\u8272"]}),Object(w.jsx)(v,{className:"btn-light",onClick:function(){return window.location.reload()},children:"\u91cd\u4f86\u4e00\u6b21"})]})},y=x.a.div(a||(a=Object(h.a)(["\n  padding: 6px;\n  background-color: burlywood;\n  flex: 1;\n"]))),C=x.a.div(u||(u=Object(h.a)(['\n  width: 30px;\n  height: 30px;\n  position: relative;\n\n  &::before{\n    content: "";\n    width: 30px;\n    background-color: #000;\n    position: absolute;\n    top: 9px;\n    left: 0;\n    height: 2px;\n  } \n\n  &::after {\n    content: "";\n    height: 30px;\n    background-color: #000;\n    position: absolute;\n    top: 0;\n    left: 9px;\n    width: 2px;\n  }\n']))),T=x.a.div(l||(l=Object(h.a)(["\n  display: flex;\n  margin: 0 auto;\n  justify-content: center;\n\n  &:first-child .col::after {\n    top: 9px;\n  }\n\n  &:last-child .col::after {\n    height: 10px;\n  }\n\n  & .col:first-child::before {\n    left: 9px;\n  }\n\n  & .col:last-child::before {\n    width: 10px;\n  }\n"]))),$=function(){var n=j(),e=n.board,r=n.winner,t=n.isWhiteTurn,c=n.handleChessClick;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(W,{isWhiteTurn:t,winner:r}),Object(w.jsx)(y,{children:e.map((function(n,i){return Object(w.jsx)(T,{children:n.map((function(n,o){return Object(w.jsx)(C,{className:"col",children:Object(w.jsx)(g,{rowIndex:i,colIndex:o,board:e,handleChessClick:c,isWhiteTurn:t.current,winner:r})},o)}))},i)}))})]})};b.a.render(Object(w.jsx)($,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e875791b.chunk.js.map