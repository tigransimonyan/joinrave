(this.webpackJsonpjoinrave=this.webpackJsonpjoinrave||[]).push([[0],{11:function(t,i,e){"use strict";e.r(i);var n=e(1),s=e.n(n),o=e(4),a=e.n(o),d=(e(9),e(2)),c=e.p+"static/media/play.67fb6362.svg",r=e.p+"static/media/pause.12407eb8.svg",h=function(){window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};var t,i=90,e=2265,n=1465,s=e/i,o=n/i,a=5e-4,d=.01,c=0,r=0,h=0,u=!1,m=function(){this.x=0,this.y=0,this.vx=0,this.vy=0,this.ind_x=0,this.ind_y=0};function v(t,i,e,n){x.moveTo(t.x,t.y),x.lineTo(i.x,i.y),x.moveTo(t.x,t.y),x.lineTo(n.x,n.y),88==t.ind_x&&(x.moveTo(e.x,e.y),x.lineTo(n.x,n.y)),88==t.ind_y&&(x.moveTo(e.x,e.y),x.lineTo(i.x,i.y))}function y(){x.fillStyle="hsla(0, 5%, 5%, .1)",x.fillRect(0,0,e,n),function(){for(var e=0;e<i;e++)for(var n=0;n<i;n++)t[e][n].frame()}(),function(){x.strokeStyle="hsla("+c%360+",100%,50%,1)",x.beginPath(),c-=.5;for(var i=0;i<89;i+=1)for(var e=0;e<89;e+=1)v(t[i][e],t[i][e+1],t[i+1][e+1],t[i+1][e]);x.stroke()}()}m.prototype.frame=function(){if(0!=this.ind_x&&89!=this.ind_x&&0!=this.ind_y&&89!=this.ind_y){var i=0,e=0,n=this.ind_x*s-this.x,c=this.ind_y*o-this.y;if(i=a*n,e=a*c,i-=d*(this.x-t[this.ind_x-1][this.ind_y].x),e-=d*(this.y-t[this.ind_x-1][this.ind_y].y),i-=d*(this.x-t[this.ind_x+1][this.ind_y].x),e-=d*(this.y-t[this.ind_x+1][this.ind_y].y),i-=d*(this.x-t[this.ind_x][this.ind_y-1].x),e-=d*(this.y-t[this.ind_x][this.ind_y-1].y),i-=d*(this.x-t[this.ind_x][this.ind_y+1].x),e-=d*(this.y-t[this.ind_x][this.ind_y+1].y),this.vx+=i-.02*this.vx,this.vy+=e-.02*this.vy,this.x+=.98*this.vx,this.y+=.98*this.vy,u){var m=this.x-r,v=this.y-h,y=Math.sqrt(m*m+v*v);y<50&&(y=y<10?10:y,this.x-=m/y*5,this.y-=v/y*5)}}};var x,l=document.getElementById("canv");function f(t){u=!0}function w(t){u=!1}function j(t){var i=t.target.getBoundingClientRect();r=t.clientX-i.left,h=t.clientY-i.top}(x=l.getContext("2d")).fillStyle="hsla(0, 5%, 5%, .1)",x.fillRect(0,0,e,n),window.requestAnimFrame((function(){t=[];for(var e=0;e<i;e++){t.push([]);for(var n=0;n<i;n++){var a=new m;a.ind_x=e,a.ind_y=n,a.x=e*s,a.y=n*o,t[e][n]=a}}})),document.addEventListener("mousemove",j,!1),document.addEventListener("mousedown",f,!1),document.addEventListener("mouseup",w,!1),document.addEventListener("touchstart",f,!1),document.addEventListener("touchmove",j,!1),document.addEventListener("touchend",w,!1),function t(){window.requestAnimFrame(y),window.requestAnimFrame(t,33)}(),l.width<window.innerWidth&&(l.width=window.innerWidth),l.height<window.innerHeight&&(l.height=window.innerHeight)},u=e(0),m=new Audio;var v=function(){var t=Object(n.useState)(!1),i=Object(d.a)(t,2),e=i[0],s=i[1],o=Object(n.useState)(!1),a=Object(d.a)(o,2),v=a[0],y=a[1],x=Object(n.useState)(!1),l=Object(d.a)(x,2),f=l[0],w=l[1],j=Object(n.useCallback)((function(){y(!0),(m.src="http://37.157.217.91:8000/stream",m.load(),Promise.resolve()).catch((function(){y(!1)}))}),[]),b=Object(n.useCallback)((function(){f||w(!0)}),[f]);return Object(n.useEffect)((function(){f&&(m.play(),s(!0),y(!1))}),[f]),Object(n.useEffect)((function(){return m.addEventListener("ended",j),m.addEventListener("canplay",b),function(){m.removeEventListener("ended",j),m.removeEventListener("canplay",b)}}),[j,b]),Object(n.useLayoutEffect)((function(){try{h()}catch(t){console.log(t)}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("canvas",{id:"canv",width:"2265",height:"1465"}),Object(u.jsxs)("div",{className:"app",children:[e?Object(u.jsx)("img",{alt:"Pause",src:r,onClick:function(){m.pause(),s(!1),w(!1)}}):Object(u.jsx)("img",{alt:"Play",src:c,onClick:j}),Object(u.jsxs)("div",{className:"info",children:[v&&"Loading...",!v&&Object(u.jsxs)(u.Fragment,{children:["Live Stream from ",Object(u.jsx)("b",{children:"Gorvetka"})]})]})]})]})};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))},9:function(t,i,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.69e46a9f.chunk.js.map