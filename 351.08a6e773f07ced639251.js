"use strict";(self.webpackChunkflasher=self.webpackChunkflasher||[]).push([[351],{8351:(t,e,s)=>{s.r(e),s.d(e,{MelodyParser:()=>n});var r=s(4906);class n{static#t=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];static#e(t,e=0,s=440){const r=3===t.length?Number(t[2]):Number(t[1]);let n=this.#t.indexOf(t.slice(0,-1));return n=n<3?n+12+12*(r-1)+1:n+12*(r-1)+1,n+=e,Math.floor(s*2**((n-49)/12))}static#s(t,e){return Math.floor(240/t*1e3/e)}static#r(t,e=120,s=0){const r=t.split(" "),n=[];for(let t=0;t<r.length;t++){const o=r[t],a=r[t+1];if(console.log(o,a),"P"===o[0])n.push([0,this.#s(e,o.substring(1))]);else if(-1!=="ABCDEFG".indexOf(o[0])){const t=this.#e(o,s),r=this.#s(e,a);n.push([t,r])}}return n}static parseToArray(t){if(-1!==t.indexOf("|")){const e=t.split("|"),s=e.length>2?Number(e[2]):0;return this.#r(e[0].trim(),Number(e[1]),s)}{const e=r.Z.parse(t).melody.map((t=>[Math.floor(t.frequency),Math.floor(t.duration)]));return e.length>32&&(e.length=32),e}}}}}]);