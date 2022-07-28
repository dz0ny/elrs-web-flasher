"use strict";(self.webpackChunkflasher=self.webpackChunkflasher||[]).push([[179],{7973:(e,t,n)=>{function r({type:e,title:t,message:n,buttonText:r="OK",confirmText:a="OK",cancelText:o="Cancel",closeStyle:s}){return new Promise((i=>{setInterval((()=>{}),5e3);const l=document.querySelector("body");let c="alert-close";"circle"===s&&(c="alert-close-circle");let d=`<button class="alert-button ${e}-bg ${e}-btn mui-btn mui-btn--primary">${r}</button>`;"question"===e&&(d=`\n<div class="question-buttons">\n  <button class="confirm-button error-bg error-btn mui-btn mui-btn--danger">${a}</button>\n  <button class="cancel-button question-bg question-btn mui-btn">${o}</button>\n</div>\n`);let u='\n<svg class="alert-img" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 52 52" xmlns:v="https://vecta.io/nano">\n<path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24\n24zm9.707-33.707a1 1 0 0 0-1.414 0L26 24.586l-8.293-8.293a1 1 0 0 0-1.414 1.414L24.586 26l-8.293 8.293a1 1 0 0 0 0 1.414c.195.195.451.293.707.293s.512-.098.707\n-.293L26 27.414l8.293 8.293c.195.195.451.293.707.293s.512-.098.707-.293a1 1 0 0 0 0-1.414L27.414 26l8.293-8.293a1 1 0 0 0 0-1.414z"/>\n</svg>\n';"success"===e&&(u='\n<svg class="alert-img" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 52 52" xmlns:v="https://vecta.io/nano">\n<path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24\n24zm12.252-34.664l-15.369 17.29-9.259-7.407a1 1 0 0 0-1.249 1.562l10 8a1 1 0 0 0 1.373-.117l16-18a1 1 0 1 0-1.496-1.328z"/>\n</svg>\n'),"info"===e&&(u='\n<svg class="alert-img" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 64 64" xmlns:v="https://vecta.io/nano">\n<path d="M38.535 47.606h-4.08V28.447a1 1 0 0 0-1-1h-4.52a1 1 0 1 0 0 2h3.52v18.159h-5.122a1 1 0 1 0 0 2h11.202a1 1 0 1 0 0-2z"/>\n<circle cx="32" cy="18" r="3"/><path d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0zm0 62C15.458 62 2 48.542 2 32S15.458 2 32 2s30 13.458 30 30-13.458 30-30 30z"/>\n</svg>\n');const p=`\n<div class="alert-wrapper">\n  <div class="alert-frame">\n    <div class="alert-header ${e}-bg">\n      <span class="${c}">X</span>\n      ${u}\n    </div>\n    <div class="alert-body">\n      <span class="alert-title">${t}</span>\n      <span class="alert-message">${n.replace("\n","<br/>")}</span>\n      ${d}\n    </div>\n  </div>\n</div>\n`;l.insertAdjacentHTML("afterend",p);const h=document.querySelector(".alert-wrapper"),f=document.querySelector(".alert-frame"),m=document.querySelector(`.${c}`);function v(){h.remove(),i()}if("question"===e){const e=document.querySelector(".confirm-button"),t=document.querySelector(".cancel-button");e.addEventListener("click",(function(){h.remove(),i("confirm")})),t.addEventListener("click",v)}else{document.querySelector(".alert-button").addEventListener("click",v)}m.addEventListener("click",v),h.addEventListener("click",v),f.addEventListener("click",(function(e){e.stopPropagation()}))}))}n.d(t,{Q:()=>r})},9337:(e,t,n)=>{n(1385);class r{static#e=new Uint8Array([190,239,186,190,202,254,240,13]);static#t(e){return e.findIndex(((e,t,n)=>{let a=0;for(;a<r.#e.length&&n[t+a]===r.#e[a];)a++;return a===r.#e.length}))}static#n(e,t,n){return void 0!==n&&(e[t+0]=n>>0&255,e[t+1]=n>>8&255,e[t+2]=n>>16&255,e[t+3]=n>>24&255),t+4}static#r(e,t,n){e[t]=n.beeptype,t+=1;for(let n=0;n<128;n++)e[t+n]=0;const r=n.melody;if(r)for(let n=0;n<r.length;n++)e[t+4*n+0]=255&r[n][0],e[t+4*n+1]=r[n][0]>>8&255,e[t+4*n+2]=255&r[n][1],e[t+4*n+3]=r[n][1]>>8&255;return t+=128}static#a(e,t,n){t=this.#n(e,t,n["tlm-report"]);let r=e[t=this.#n(e,t,n["fan-runtime"])];return void 0!==n["uart-inverted"]&&(r&=-2,r|=n["uart-inverted"]?1:0),void 0!==n["unlock-higher-power"]&&(r&=-3,r|=n["unlock-higher-power"]?2:0),e[t]=r,t+1}static#o(e,t,n){let r=e[t=this.#n(e,t,n["rcvr-uart-baud"])];return void 0!==n["rcvr-invert-tx"]&&(r&=-2,r|=n["rcvr-invert-tx"]?1:0),void 0!==n["lock-on-first-connection"]&&(r&=-3,r|=n["lock-on-first-connection"]?2:0),void 0!==n["r9mm-mini-sbus"]&&(r&=-5,r|=n["r9mm-mini-sbus"]?4:0),e[t]=r,t+1}static#s(e,t,n,r){let a=this.#t(e);if(-1===a)throw new Error("Configuration magic not found in firmware file. Is this a 3.x firmware?");a+=8;const o=e[a]+e[a+1]<<8;if(a+=2,0===o&&(a+=1),"sx127x"===n&&r.domain&&(e[a]=r.domain),a+=1,r.uid){e[a]=1;for(let t=0;t<6;t++)e[a+1+t]=r.uid[t]}else e[a]=0;return a+=7,"TX"===t?(a=this.#a(e,a,r),r.beeptype&&(a=this.#r(e,a,r))):"RX"===t&&(a=this.#o(e,a,r)),e}static#i=e=>{if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e};static#l=(e,t,n=(e=>e))=>fetch(e).then((e=>this.#i(e).blob())).then((e=>new Promise(((t,n)=>{const r=new FileReader;r.onload=function(){t(new Uint8Array(r.result))},r.readAsArrayBuffer(e)})))).then((e=>({data:n(e),address:t})));static#c=(e,t)=>{let n=0;if("esp8285"===t.platform&&(n=4096),233!==e[n])throw new Error("The file provided does not the right magic for a firmware file!");let r=e[n+1];for(n="esp32"===t.platform?24:4104;r--;){n+=8+(e[n+4]+(e[n+5]<<8)+(e[n+6]<<16)+(e[n+7]<<24))}return n=n+16&-16,"esp32"===t.platform&&(n+=32),n};static#d=(e,t)=>{const n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n};static#u=e=>{const t=e.length;let n="";for(let r=0;r<t;r++)n+=String.fromCharCode(e[r]);return n};static#p=e=>{const t=e.length,n=new Uint8Array(t);for(let r=0;r<t;r++)n[r]=e.charCodeAt(r);return n};static#h=(e,t,n)=>{const r=this.#c(e,t);return e=e.slice(0,r),e=this.#d(e,this.#p(t.product_name.padEnd(128,"\0"))),e=this.#d(e,this.#p(t.lua_name.padEnd(16,"\0"))),e=this.#d(e,this.#p(JSON.stringify(n).padEnd(512,"\0")))};static download=async(e,t,n,a,o)=>{if("stm32"===n.platform){return[(await this.#l(a,0,(n=>this.#s(n,e,t,o)))).data]}{const t=[],s="firmware/"+document.getElementById("version").value;return t.push(this.#l(s+"/hardware/"+e+"/"+n.layout_file,0)),"esp32"===n.platform?(t.push(this.#l(s+"/bootloader_dio_40m.bin",4096)),t.push(this.#l(s+"/partitions.bin",32768)),t.push(this.#l(s+"/boot_app0.bin",57344)),t.push(this.#l(a,65536,(e=>r.#h(e,n,o))))):"esp8285"===n.platform&&t.push(this.#l(a,0,(e=>r.#h(e,n,o)))),await Promise.all(t).then((e=>{n.overlay&&(n.overlay={});const t=this.#p(JSON.stringify({...JSON.parse(this.#u(e[0].data)),...n.overlay}));return e[e.length-1].data=this.#d(e[e.length-1].data,this.#d(t,new Uint8Array([0]))),e.splice(1)}))}}}var a=n(905);const o=function(){const e=[];let t=0;for(;t<64;)e[t]=0|4294967296*Math.abs(Math.sin(++t));return function(t){let n,r,a,o;const s=[],i=unescape(encodeURI(t));let l=i.length;const c=[n=1732584193,r=-271733879,~n,~r];let d=0;for(;d<=l;)s[d>>2]|=(i.charCodeAt(d)||128)<<d++%4*8;for(s[t=16*(l+8>>6)+14]=8*l,d=0;d<t;d+=16){for(l=c,o=0;o<64;)l=[a=l[3],(n=0|l[1])+((a=l[0]+[n&(r=l[2])|~n&a,a&n|~a&r,n^r^a,r^(n|~a)][l=o>>4]+(e[o]+(0|s[[o,5*o+1,3*o+5,7*o][l]%16+d])))<<(l=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*l+o++%4])|a>>>32-l),n,r];for(o=4;o;)c[--o]=c[o]+l[o]}for(t=[];o<32;)t.push(16*(c[o>>3]>>4*(1^7&o++)&15)+(c[o>>3]>>4*(1^7&o++)&15));return new Uint8Array(t)}}();function s(){const e=document.getElementById("uid");function t(t){if(""===t)e.value="";else{const n=function(e){return o(`-DMY_BINDING_PHRASE="${e}"`).subarray(0,6)}(t);e.value=n}}document.getElementById("phrase").addEventListener("input",(function(e){t(e.target.value)})),t("")}var i=n(2320),l=n(2617),c=n(7973);function d({title:e,bodyTemplate:t,closeStyle:n}){return new Promise((r=>{setInterval((()=>{}),5e3);const a=document.querySelector("body");let o="alert-close";"circle"===n&&(o="alert-close-circle");const s=`\n<div class="alert-wrapper">\n  <div class="dialog-frame">\n    <div class="dialog-header question-bg">\n      <div class="dialog-title">\n        <span>${e}</span>\n      </div>\n      <span class="${o}">X</span>\n    </div>\n    <div class="alert-body">\n      ${t}\n    </div>\n  </div>\n</div>\n`;a.insertAdjacentHTML("afterend",s);const i=document.querySelector(".alert-wrapper"),l=document.querySelector(".dialog-frame");function c(){i.remove(),r()}document.querySelector(`.${o}`).addEventListener("click",c),i.addEventListener("click",c),l.addEventListener("click",(function(e){e.stopPropagation()})),document.querySelectorAll(".device-button").forEach((e=>e.addEventListener("click",(t=>{var n;n=e.id,i.remove(),r(n)}))))}))}function u(e,t,n=!1){let r;function a(a){let o;const i=this.value;s(),r=-1;const l=document.createElement("DIV");l.setAttribute("id",this.id+"autocomplete-list"),l.setAttribute("class","autocomplete-items"),this.parentNode.appendChild(l);for(let r=0;r<t.length;r++)if(!n&&t[r].substr(0,i.length).toUpperCase()===i.toUpperCase()||n&&t[r].toUpperCase().includes(i.toUpperCase())){o=document.createElement("DIV");const n=t[r].toUpperCase().indexOf(i.toUpperCase());o.innerHTML=t[r].substr(0,n),o.innerHTML+="<strong>"+t[r].substring(n,n+i.length)+"</strong>",o.innerHTML+=t[r].substr(n+i.length),o.innerHTML+='<input type="hidden" value="'+t[r]+'">',o.addEventListener("click",(t=>n=>{e.value=t.getElementsByTagName("input")[0].value,s(),e.onchange()})(o)),l.appendChild(o)}}function o(e){if(!e)return!1;!function(e){for(let t=0;t<e.length;t++)e[t].classList.remove("autocomplete-active")}(e),r>=e.length&&(r=0),r<0&&(r=e.length-1),e[r].classList.add("autocomplete-active")}function s(t){const n=document.getElementsByClassName("autocomplete-items");for(let r=0;r<n.length;r++)t!==n[r]&&t!==e&&n[r].parentNode.removeChild(n[r])}e.addEventListener("input",a),e.addEventListener("click",a),e.addEventListener("keydown",(t=>{let n=document.getElementById(t.target.id+"autocomplete-list");n&&(n=n.getElementsByTagName("div")),40===t.keyCode?(r++,o(n)):38===t.keyCode?(r--,o(n)):13===t.keyCode?(t.preventDefault(),r>-1&&n&&n[r].click()):27===t.keyCode&&(t.preventDefault(),s(),e.value="")})),document.addEventListener("click",(e=>{s(e.target)}))}var p=n(3891),h=n.n(p),f=n(6455),m=n.n(f);const v=["3.x.x-maintenance"],b=B("version"),g=B("flash-mode"),y=B("flashButton"),w=B("connectButton"),x=B("vendor"),T=B("type"),L=B("model"),k=B("lblConnTo"),_=B("method"),E=B("device-next");let S=null,M=null,C=null,A=null,H=null,P=null,$=null,U=null;function B(e){return document.getElementById(e)}function q(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}document.addEventListener("DOMContentLoaded",(function(){(async()=>{fetch("http://localhost:9097/mdns").then((e=>q(e)&&e.json())).catch((async e=>{m().fire({position:"bottom",icon:"info",title:"Wifi auto-discovery disabled",text:"The ExpressLRS proxy cannot be not found, so auto-discovery is disabled",showConfirmButton:!1,backdrop:!1,timer:1e4}),B("device-discover").disabled=!0}))})(),P=new i.Terminal({cols:80,rows:40});const e=new l.FitAddon;P.loadAddon(e),P.open(B("serial-monitor")),e.fit(),s();let t=!0;for(const e in v){const n=document.createElement("option");n.value=v[e],n.innerHTML=v[e],n.selected=t,b.appendChild(n),t=!1}b.onchange()}),!1),B("device-discover").onclick=async()=>{fetch("http://localhost:9097/mdns").then((e=>function(e){if(!e.ok)throw Promise.reject(new Error("Failed to connect to device"));return e.json()}(e))).catch((async e=>{throw new a.n("Auto-discovery proxy not running","Auto detection of wifi devices cannot be performed without the help of the ExpressLRS auto-discovery proxy","warning")})).then((e=>{if(0===Object.keys(e).length)throw new a.n("No wifi devices detected","Auto deteection failed to find any devices on the network","error");let t="";for(const n of Object.keys(e)){t+=`<tr><td>${n.substring(0,n.indexOf("."))}</td><td>${e[n].address}</td><td><button class="mui-btn mui-btn--small mui-btn--primary device-button" id="${n}">Select</button></td></tr>`}const n=`\n<table class="mui-table">\n  <thead>\n    <tr>\n      <th>Product</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n      ${t}\n  </tbody>\n  </table>\n`;return Promise.all([d({title:"Select Device to Flash",bodyTemplate:n,closeStyle:"circle"}),e])})).then((([e,t])=>{const n=[];let r=0,a="";for(const o of Object.keys(S))for(const s of Object.keys(S[o]))for(const i of Object.keys(S[o][s]))void 0!==t[e].properties.product&&S[o][s][i].product_name===t[e].properties.product&&(n.push({vendor:o,type:s,model:i,product:S[o][s][i].product_name}),a+=`<tr><td style="padding: 0px;">${S[o][s][i].product_name}</td><td style="padding: 0px;"><button class="mui-btn mui-btn--small mui-btn--primary device-button" id="${r}">Select</button></td></tr>`,r++),S[o][s][i].prior_target_name===t[e].properties.target&&(n.push({vendor:o,type:s,model:i,product:S[o][s][i].product_name}),a+=`<tr><td style="padding: 0px;">${S[o][s][i].product_name}</td><td style="padding: 0px;"><button class="mui-btn mui-btn--small mui-btn--primary device-button" id="${r}">Select</button></td></tr>`,r++);const o=`\n<table class="mui-table">\n  <thead>\n    <tr>\n      <th>Device</th>\n      <th>Address</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n      ${a}\n  </tbody>\n  </table>\n`;return Promise.all([n,t[e],d({title:"Select Device Model",bodyTemplate:o,closeStyle:"circle"})])})).then((([e,t,n])=>{U=null,void 0!==n&&(x.value=e[n].vendor,x.onchange(),T.value=e[n].type,T.onchange(),L.value=e[n].model,L.onchange(),E.onclick(),_.value="wifi",_.onchange(),U="http://localhost:9097/"+t.address)})).catch((e=>(0,c.Q)({type:e.type,title:e.title,message:e.message,closeStyle:"circle"})))};function O(e,t=!0){if("string"==typeof e){document.querySelectorAll(e).forEach((e=>{F(e,"display--none",!t)}))}else"object"==typeof e&&F(e,"display--none",!t)}function F(e,t,n=!0){const r="string"==typeof e?document.querySelector(e):e;n?r.classList.add(t):r.classList.remove(t)}b.onchange=async()=>{x.options.length=1,x.disabled=!0,x.value="",T.disabled=!0,T.value="",fetch("firmware/"+b.value+"/hardware/targets.json").then((e=>q(e)&&e.json())).then((e=>{S=e;for(const t in e){const n=document.createElement("option");n.value=t,n.innerHTML=void 0===e[t].name?t:e[t].name,x.appendChild(n)}x.disabled=!1,O(".uart",!1),O(".stlink",!1),O(".wifi",!1)})).then((()=>{const e=[];for(const t in S)for(const n in S[t])for(const r in S[t][n])void 0!==S[t][n][r].product_name&&e.push(S[t][n][r].product_name);u(L,e,!0)}))},B("step-1").onclick=()=>{O("#step-device"),O("#step-options",!1),O("#step-flash",!1),F("#step-1","done",!1),F("#step-1","active"),F("#step-1","editable"),F("#step-2","active",!1),F("#step-2","editable",!1),F("#step-2","done",!1),F("#step-3","active",!1),F("#step-3","editable",!1),F("#step-3","done",!1)},B("step-2").onclick=()=>{"block"===B("step-flash").style.display&&(O("#step-options"),O("#step-flash",!1),F("#step-2","done",!1),F("#step-2","active"),F("#step-2","editable"),F("#step-3","active",!1),F("#step-3","editable",!1),F("#step-3","done",!1))},x.onchange=()=>{B("tx_2400").disabled=!0,B("tx_900").disabled=!0,B("rx_2400").disabled=!0,B("rx_900").disabled=!0;for(const e in S[x.value])null!==B(e)&&(B(e).disabled=!1);T.disabled=!1,T.value="",L.value="",E.disabled=!0;const e=[],t=x.value;for(const n in S[t])for(const r in S[t][n])void 0!==S[t][n][r].product_name&&e.push(S[t][n][r].product_name);u(L,e,!0)},T.onchange=()=>{L.value="",E.disabled=!0;const e=[],t=x.value,n=T.value;for(const r in S[t][n])void 0!==S[t][n][r].product_name&&e.push(S[t][n][r].product_name);u(L,e,!0)},L.onchange=()=>{for(const e in S)for(const t in S[e])for(const n in S[e][t])if(S[e][t][n].product_name===L.value)return x.value=e,T.value=t,M=S[e][t][n],T.disabled=!1,E.disabled=!1,void document.querySelectorAll(".product-name").forEach((e=>{e.innerHTML=M.product_name}));L.value=""},E.onclick=()=>{O(".tx_2400",!1),O(".rx_2400",!1),O(".tx_900",!1),O(".rx_900",!1),O(".esp8285",!1),O(".esp32",!1),O(".stm32",!1),O(".feature-fan",!1),O(".feature-unlock-higher-power",!1),O(".feature-sbus-uart",!1),O(".feature-buzzer",!1);const e=M.features;e&&e.forEach((e=>O(".feature-"+e))),B("fcclbt").value="FCC",O("."+T.value),O("."+M.platform),B("uart").disabled=!0,B("betaflight").disabled=!0,B("etx").disabled=!0,B("wifi").disabled=!0,B("stlink").disabled=!0,M.upload_methods.forEach((e=>{B(e).disabled=!1})),O("#step-device",!1),F("#step-2","active"),F("#step-2","editable"),F("#step-1","done"),F("#step-1","editable",!1),O("#step-options")},_.onchange=()=>{B("options-next").disabled=!1,"download"===_.value?B("options-next").value="Download":B("options-next").value="Next"};const I=async e=>{const t=M,r="firmware/"+b.value+"/"+B("fcclbt").value+"/"+t.firmware+"/firmware.bin",a={};if(""!==B("uid").value&&(a.uid=B("uid").value.split(",").map((e=>Number(e)))),"stm32"!==t.platform&&(a["wifi-on-interval"]=+B("wifi-on-interval").value,""!==B("wifi-ssid").value&&(a["wifi-ssid"]=B("wifi-ssid").value,a["wifi-password"]=B("wifi-password").value)),"RX"===e?(a["rcvr-uart-baud"]=+B("rcvr-uart-baud").value,a["rcvr-invert-tx"]=B("rcvr-invert-tx").checked,a["lock-on-first-connection"]=B("lock-on-first-connection").checked):(a["tlm-interval"]=+B("tlm-interval").value,a["fan-runtime"]=+B("fan-runtime").value,a["uart-inverted"]=B("uart-inverted").checked,a["unlock-higher-power"]=B("unlock-higher-power").checked),"rx_900"!==T.value&&"tx_900"!==T.value||(a.domain=+B("domain").value),void 0!==t.features&&-1!==t.features.indexOf("buzzer")){const e=Number(B("melody-type").value);a.beeptype=e>2?2:e,a.melody=await Promise.all([n.e(216),n.e(351)]).then(n.bind(n,8351)).then((t=>2===e?t.MelodyParser.parseToArray("A4 20 B4 20|60|0"):3===e?t.MelodyParser.parseToArray("E5 40 E5 40 C5 120 E5 40 G5 22 G4 21|20|0"):4===e?t.MelodyParser.parseToArray(t("melody").value):[]))}return{config:t,firmwareUrl:r,options:a}},N=async()=>{const e=T.value.startsWith("tx_")?"TX":"RX",t=T.value.endsWith("_900")?"sx127x":"sx128x";P.clear(),await I(e).then((({config:o,firmwareUrl:s,options:i})=>{Promise.all([navigator.serial.requestPort().then((e=>{C=e,C.addEventListener("disconnect",(async e=>{C=null,P.clear(),O(g,!1),O(w),B("progressBar").value=0,B("status").innerHTML=""})),O(w,!1)})),r.download(e,t,o,s,i).then((e=>{H=e}))]).then((t=>{const r=_.value;let l;l="stm32"===o.platform?Promise.all([n.e(216),n.e(968)]).then(n.bind(n,5968)).then((t=>new t.XmodemFlasher(C,e,r,o,i,s,P))):Promise.all([n.e(216),n.e(529)]).then(n.bind(n,8993)).then((t=>new t.ESPFlasher(C,e,r,o,i,s,P))),l.then((e=>(A=e,e.connect()))).then((e=>{k.innerHTML="Connected to device: "+e,O(g)})).catch((async e=>e instanceof a.P?(k.innerHTML="Target mismatch, flashing cancelled",D()):(k.innerHTML="Failed to connect to device, restart device and try again",await D(),await(0,c.Q)({type:"error",title:e.title,message:e.message}))))})).catch((async()=>(k.innerHTML="No device selected",await D(),await(0,c.Q)({type:"error",title:"No Device Selected",message:"A serial device must be select to perform flashing"}))))}))},z=async()=>{const e=T.value.startsWith("tx_")?"TX":"RX",t=T.value.endsWith("_900")?"sx127x":"sx128x";return I(e).then((({config:n,firmwareUrl:a,options:o})=>Promise.all([r.download(e,t,n,a,o),{config:n,firmwareUrl:a,options:o}])))},j=async()=>{P.clear(),await Promise.all([n.e(448).then(n.bind(n,3448)).then((e=>new e.STLink(P))),z()]).then((([e,[t,{config:n,firmwareUrl:r,options:a}]])=>e.connect(n,r,a,(e=>{P.clear(),O(g,!1),O(w),B("progressBar").value=0,B("status").innerHTML=""})).then((n=>{k.innerHTML="Connected to device: "+n,O(w,!1),O(g),H=t,$=e})).catch((e=>(k.innerHTML="Not connected",O(g,!1),O(w),Promise.reject(e))))))},R=async()=>{function e(e){if(!e.ok)throw Promise.reject(new Error("Failed to connect to device"));return e.json()}const t=T.value.substring(0,2);let n;n=null!==U?fetch(U+"/target").then((t=>e(t))).then((e=>[U,e])):Promise.any([fetch("http://10.0.0.1/target").then((t=>e(t))).then((e=>["http://10.0.0.1",e])),fetch(`http://elrs_${t}/target`).then((t=>e(t))).then((e=>[`http://elrs_${t}`,e])),fetch(`http://elrs_${t}.local/target`).then((t=>e(t))).then((e=>[`http://elrs_${t}`,e]))]),await n.then((([e,t])=>{k.innerHTML="Connected to: "+e,B("product_name").innerHTML="Product name: "+t.product_name,B("target").innerHTML="Target firmware: "+t.target,B("firmware-version").innerHTML="Version: "+t.version,O(g),U=e})).catch((e=>{k.innerHTML="No device found, or error connecting to device",console.log(e)}))};B("options-next").onclick=async()=>{const e=_.value;"download"===e?await X():(O("#step-options",!1),F("#step-3","active"),F("#step-3","editable"),F("#step-2","done"),F("#step-2","editable",!1),O("#step-flash"),O("."+e),w.onclick="wifi"===e?R:"stlink"===e?j:N,await w.onclick())};const D=async()=>{null!=C&&(await C.close(),C=null),O(g,!1),O(w),B("progressBar").value=0,B("status").innerHTML=""};y.onclick=async()=>{h().overlay("on",{keyboard:!1,static:!0});if("wifi"===_.value)await Q();else{let e;e=null!==A?A.flash(H,B("erase-flash").checked):$.flash(H,B("flash-bootloader").checked),e.then((()=>(h().overlay("off"),(0,c.Q)({type:"success",title:"Flashing Succeeded",message:"Firmware upload complete"})))).catch((e=>{W(e.message)})).then((()=>D()))}};const X=async()=>{await z().then((([e,{config:t,firmwareUrl:n,options:r}])=>{let a=null;const o=document.createElement("a");o.setAttribute("download","firmware.bin"),o.href=function(){const t=e[e.length-1].data.buffer,n=new Blob([t],{type:"application/octet-stream"});return null!==a&&window.URL.revokeObjectURL(a),a=window.URL.createObjectURL(n),a}(),document.body.appendChild(o),window.requestAnimationFrame((function(){const e=new MouseEvent("click");o.dispatchEvent(e),document.body.removeChild(o)}))}))},Q=async()=>{await z().then((([e,{config:t,firmwareUrl:n,options:r}])=>{const a=e[e.length-1].data.buffer,o=new Blob([a],{type:"application/octet-stream"}),s=new FormData;s.append("upload",o,"firmware.bin");const i=new XMLHttpRequest;i.upload.addEventListener("progress",G,!1),i.addEventListener("load",J,!1),i.addEventListener("error",(e=>W(e.target.responseText)),!1),i.addEventListener("abort",V,!1),i.open("POST",U+"/update"),i.setRequestHeader("X-FileSize",o.size),i.send(s)})).catch((()=>{}))};function G(e){const t=Math.round(e.loaded/e.total*100);B("progressBar").value=t,B("status").innerHTML=t+"% uploaded... please wait"}function J(e){B("status").innerHTML="",B("progressBar").value=0,h().overlay("off");const t=JSON.parse(e.target.responseText);if("ok"===t.status){let e=0;const n=setInterval((()=>{e+=2,B("progressBar").value=e,B("status").innerHTML=e+"% flashed... please wait",100===e&&(clearInterval(n),B("status").innerHTML="",B("progressBar").value=0,(0,c.Q)({type:"success",title:"Update Succeeded",message:t.msg}))}),100)}else"mismatch"===t.status?(0,c.Q)({type:"question",title:"Targets Mismatch",message:t.msg,confirmText:"Flash anyway",cancelText:"Cancel"}).then((e=>{const t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===this.readyState)if(B("status").innerHTML="",B("progressBar").value=0,200===this.status){const e=JSON.parse(this.responseText);(0,c.Q)({type:"info",title:"Force Update",message:e.msg})}else W("An error occurred trying to force the update")},t.open("POST",U+"/forceupdate",!0);const n=new FormData;n.append("action",e),t.send(n)})):W(t.msg)}function W(e){B("status").innerHTML="",B("progressBar").value=0,h().overlay("off"),(0,c.Q)({type:"error",title:"Update Failed",message:e})}function V(e){B("status").innerHTML="",B("progressBar").value=0,h().overlay("off"),(0,c.Q)({type:"info",title:"Update Aborted",message:e.target.responseText})}},905:(e,t,n)=>{n.d(t,{P:()=>a,n:()=>r});class r extends Error{constructor(e,t,n="error"){super(t),this.title=e,this.type=n}}class a extends Error{}}},e=>{e.O(0,[216],(()=>{return t=9337,e(e.s=t);var t}));e.O()}]);