(this.webpackJsonpjoinrave=this.webpackJsonpjoinrave||[]).push([[0],{11:function(t,i){},12:function(t,i,n){"use strict";n.r(i);var e=n(1),s=n.n(e),o=n(4),d=n.n(o),a=(n(9),n(2)),c=n.p+"static/media/play.67fb6362.svg",r=n.p+"static/media/pause.12407eb8.svg",h=n(0),u=new Audio;var m=function(){var t,i,n=Object(e.useState)(null),s=Object(a.a)(n,2),o=s[0],d=s[1],m=Object(e.useState)(!1),v=Object(a.a)(m,2),f=v[0],l=v[1],y=Object(e.useState)(!1),x=Object(a.a)(y,2),w=x[0],j=x[1],b=Object(e.useState)(!1),_=Object(a.a)(b,2),p=_[0],O=_[1],g=function(){j(!0),fetch("https://api.joinrave.com/current").then((function(t){return t.json()})).then((function(t){d(t),u.src=t.metadata.file,u.load()})).catch((function(){j(!1)}))},E=function(){p||O(!0)};return Object(e.useEffect)((function(){p&&o&&(u.currentTime=o.time,u.play(),l(!0),j(!1))}),[p,o]),Object(e.useEffect)((function(){return u.addEventListener("ended",g),u.addEventListener("canplay",E),function(){u.removeEventListener("ended",g),u.removeEventListener("canplay",E)}}),[]),Object(e.useLayoutEffect)((function(){window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};var t,i=90,n=2265,e=1465,s=n/i,o=e/i,d=5e-4,a=.01,c=0,r=0,h=0,u=!1,m=function(){this.x=0,this.y=0,this.vx=0,this.vy=0,this.ind_x=0,this.ind_y=0};function v(t,i,n,e){l.moveTo(t.x,t.y),l.lineTo(i.x,i.y),l.moveTo(t.x,t.y),l.lineTo(e.x,e.y),88==t.ind_x&&(l.moveTo(n.x,n.y),l.lineTo(e.x,e.y)),88==t.ind_y&&(l.moveTo(n.x,n.y),l.lineTo(i.x,i.y))}function f(){l.fillStyle="hsla(0, 5%, 5%, .1)",l.fillRect(0,0,n,e),function(){for(var n=0;n<i;n++)for(var e=0;e<i;e++)t[n][e].frame()}(),function(){l.strokeStyle="hsla("+c%360+",100%,50%,1)",l.beginPath(),c-=.5;for(var i=0;i<89;i+=1)for(var n=0;n<89;n+=1)v(t[i][n],t[i][n+1],t[i+1][n+1],t[i+1][n]);l.stroke()}()}m.prototype.frame=function(){if(0!=this.ind_x&&89!=this.ind_x&&0!=this.ind_y&&89!=this.ind_y){var i=0,n=0,e=this.ind_x*s-this.x,c=this.ind_y*o-this.y;if(i=d*e,n=d*c,i-=a*(this.x-t[this.ind_x-1][this.ind_y].x),n-=a*(this.y-t[this.ind_x-1][this.ind_y].y),i-=a*(this.x-t[this.ind_x+1][this.ind_y].x),n-=a*(this.y-t[this.ind_x+1][this.ind_y].y),i-=a*(this.x-t[this.ind_x][this.ind_y-1].x),n-=a*(this.y-t[this.ind_x][this.ind_y-1].y),i-=a*(this.x-t[this.ind_x][this.ind_y+1].x),n-=a*(this.y-t[this.ind_x][this.ind_y+1].y),this.vx+=i-.02*this.vx,this.vy+=n-.02*this.vy,this.x+=.98*this.vx,this.y+=.98*this.vy,u){var m=this.x-r,v=this.y-h,f=Math.sqrt(m*m+v*v);f<50&&(f=f<10?10:f,this.x-=m/f*5,this.y-=v/f*5)}}};var l,y=document.getElementById("canv");(l=y.getContext("2d")).fillStyle="hsla(0, 5%, 5%, .1)",l.fillRect(0,0,n,e),window.requestAnimFrame((function(){t=[];for(var n=0;n<i;n++){t.push([]);for(var e=0;e<i;e++){var d=new m;d.ind_x=n,d.ind_y=e,d.x=n*s,d.y=e*o,t[n][e]=d}}})),document.addEventListener("mousemove",(function(t){var i=t.target.getBoundingClientRect();r=t.clientX-i.left,h=t.clientY-i.top}),!1),document.addEventListener("mousedown",(function(t){u=!0}),!1),document.addEventListener("mouseup",(function(t){u=!1}),!1),window.onload=function(){!function t(){window.requestAnimFrame(f),window.requestAnimFrame(t,33)}(),y.width<window.innerWidth&&(y.width=window.innerWidth),y.height<window.innerHeight&&(y.height=window.innerHeight)}}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("canvas",{id:"canv",width:"2265",height:"1465"}),Object(h.jsxs)("div",{className:"app",children:[f?Object(h.jsx)("img",{src:r,onClick:function(){u.pause(),l(!1),O(!1)}}):Object(h.jsx)("img",{src:c,onClick:g}),Object(h.jsxs)("div",{className:"info",children:[w&&"Loading...",!w&&o&&Object(h.jsxs)(h.Fragment,{children:[null===o||void 0===o||null===(t=o.metadata)||void 0===t?void 0:t.title," by ",Object(h.jsx)("b",{children:null===o||void 0===o||null===(i=o.metadata)||void 0===i?void 0:i.artist})]})]})]})]})};n(11);d.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},9:function(t,i,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.c6c3b793.chunk.js.map