;
(self.AMP=self.AMP||[]).push({m:1,v:"2312012346000",n:"amp-sidebar",ev:"0.1",l:!0,f:function(t,i){(()=>{function i(t){return t?Array.prototype.slice.call(t):[]}var s,{isArray:e}=Array,{hasOwnProperty:n,toString:h}=Object.prototype;function r(t){return 1==(null==t?void 0:t.nodeType)}function o(t,i,s,e,n,h,r,o,a,l,c){return t}function a(t){return(t.ownerDocument||t).defaultView}function l(t,i){return t.closest(i)}function c(t){return function(t,i){const s=[];for(let i=t.firstElementChild;i;i=i.nextElementSibling)!(function(t){let i;return"string"==typeof t?i=t:r(t)&&(i=t.tagName),!!i&&i.toLowerCase().startsWith("i-")}(e=i)||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&s.push(i);var e;return s}(t)}function u(t){const i=t.isConnected;if(void 0!==i)return i;let s=t;for(;s=d(s),s.host;)s=s.host;return s.nodeType===Node.DOCUMENT_NODE}function d(t){if(Node.prototype.getRootNode)return t.getRootNode();let i;for(i=t;i.parentNode&&(!(s=i)||"I-AMPHTML-SHADOW-ROOT"!=s.tagName&&(11!=s.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(s)));i=i.parentNode);var s;return i}function f(t){try{t.focus()}catch(t){}}function m(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:s,stack:e}=t,n=new Error(s);for(const i in t)n[i]=t[i];return n.stack=e,n}function p(t){let i=null,s="";for(const t of arguments)t instanceof Error&&!i?i=m(t):(s&&(s+=" "),s+=t);return i?s&&(i.message=s+": "+i.message):i=new Error(s),i}function _(t){var i,s;null===(i=(s=self).__AMP_REPORT_ERROR)||void 0===i||i.call(s,t)}function b(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=p.apply(null,arguments);setTimeout((()=>{throw _(i),i}))}(t)}}var A=["Webkit","webkit","Moz","moz","ms","O","o"],P={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function v(t,i,e,n,h){const r=function(t,i,e){if(i.startsWith("--"))return i;s||(s=Object.create(null));let n=s[i];if(!n||e){if(n=i,void 0===t[i]){const s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),e=function(t,i){for(let s=0;s<A.length;s++){const e=A[s]+i;if(void 0!==t[e])return e}return""}(t,s);void 0!==t[e]&&(n=e)}e||(s[i]=n)}return n}(t.style,i,h);if(!r)return;const o=n?e+n:e;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return A.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(r),o)}function g(t,i){for(const s in i)v(t,s,i[s])}function E(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}function M(t,i){return t.getComputedStyle(i)||P}var w=/vertical/,T=new WeakMap,I=new WeakMap,R=new WeakMap;function y(t){let i=T.get(t);return i||(i=new t.ResizeObserver(V),T.set(t,i)),i}function V(t){const i=new Set;for(let s=t.length-1;s>=0;s--){const e=t[s],{target:n}=e;if(i.has(n))continue;i.add(n);const h=I.get(n);if(h){R.set(n,e);for(let t=0;t<h.length;t++){const{callback:i,type:s}=h[t];k(s,i,e)}}}}function k(t,i,s){if(0==t){const{contentRect:t}=s,{height:e,width:n}=t;b(i,{width:n,height:e})}else if(1==t){const{borderBoxSize:t}=s;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=s,i=a(t),n=w.test(M(i,t).writingMode),{offsetHeight:h,offsetWidth:r}=t;let o,l;n?(l=r,o=h):(o=r,l=h),e={inlineSize:o,blockSize:l}}b(i,e)}}var x=[],S="__AMP_MODAL_SAVED_TAB_INDEX";function D(t){const i=[];for(let s=t;s;s=s.parentNode||s.host)i.push(s);return i}function X(t,i,s){null===s||null==s?t.removeAttribute(i):t.setAttribute(i,s)}var C="i-amphtml-element",$=t=>t.unmount();function O(t,i,s,e){if(i&&t.classList.contains(C)){const i=t;if(b(e,i),!s){const t=i.getPlaceholder();return void(t&&O(t,!0,!1,e))}}const n=t.getElementsByClassName(C);let h=null;for(let t=0;t<n.length;t++){const i=n[t];if(s)b(e,i);else{h=h||[];let t=!1;for(let s=0;s<h.length;s++)if(h[s].contains(i)){t=!0;break}t||(h.push(i),b(e,i))}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z,F=self.__AMP_LOG;function j(t){return F.user||(F.user=B()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(F.user.win,t)?F.userForEmbed||(F.userForEmbed=B()):F.user}function B(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function L(t,i,s,e,n,h,r,o,a,l,c){return t}function W(t,i){return q(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function Y(t,i){return q(G(N(t)),i)}function H(t,i){const s=G(N(t));return U(s,i)?q(s,i):null}function N(t){return t.nodeType?(i=a(t),W(i,"ampdoc")).getAmpDoc(t):t;var i}function G(t){const i=N(t);return i.isSingleDoc()?i.win:i}function q(t,i){L(U(t,i));const s=function(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return s.obj||(L(s.ctor),L(s.context),s.obj=new s.ctor(s.context),L(s.obj),s.context=null,s.resolve&&s.resolve(s.obj)),s.obj}function U(t,i){const s=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!s||!s.ctor)}var Z,J=t=>Y(t,"owners"),K=t=>q(t,"timer");function Q(t,i){const s=(":not([toolbar]) [autoscroll]",i.querySelector(function(t,i){return t.replace(/^|,/g,"$&:scope ")}(":not([toolbar]) [autoscroll]")));if(!s)return;const e=M(t.win,i)["overflow-y"];var n;"scroll"==e||"auto"==e?(n=t,Y(n,"viewport")).animateScrollWithinParent(s,i,"center",0):j().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.")}function tt(t,i){const s=K(t);return s.promise(1).then((()=>s.promise(i)))}var it=class{constructor(){this.ht=null}add(t){return this.ht||(this.ht=[]),this.ht.push(t),()=>{this.remove(t)}}remove(t){this.ht&&function(t,i){const s=t.indexOf(i);-1!=s&&t.splice(s,1)}(this.ht,t)}removeAll(){this.ht&&(this.ht.length=0)}fire(t){if(this.ht)for(const i of this.ht.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.ht)||void 0===i?void 0:i.length)&&void 0!==t?t:0}},st="__AMP_Gestures",et=class t{static get(i,s=!1,e=!1){let n=i[st];return n||(n=new t(i,s,e),i[st]=n),n}constructor(t,i=!1,s=!1){this.za=t,this.HV=[],this.t_=[],this.Ct=[],this.BV=[],this.YV=null;const e=function(t){if(void 0!==Z)return Z;Z=!1;try{const i={get passive(){return Z=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return Z}(t.ownerDocument.defaultView);this.GV=i||e,this.WV=s,this.qV=!1,this.Zs=new class{constructor(t,i,s){this.qs=K(t),this.Ws=i,this.Ks=s||0,this.Ys=-1,this.Js=0,this.Qs=!1,this.Xs=()=>{this.Zs()}}isPending(){return-1!=this.Ys}schedule(t){let i=t||this.Ks;this.Qs&&i<10&&(i=10);const s=Date.now()+i;return(!this.isPending()||s-this.Js<-10)&&(this.cancel(),this.Js=s,this.Ys=this.qs.delay(this.Xs,i),!0)}Zs(){this.Ys=-1,this.Js=0,this.Qs=!0,this.Ws(),this.Qs=!1}cancel(){this.isPending()&&(this.qs.cancel(this.Ys),this.Ys=-1)}}(a(t),this.wm.bind(this)),this.XV=new it,this.KV=Object.create(null),this.ZV=this.gp.bind(this),this.JV=this.Pp.bind(this),this.QV=this.vp.bind(this),this.tk=this.h_.bind(this),this.za.addEventListener("touchstart",this.ZV,!!e&&{passive:!0}),this.za.addEventListener("touchend",this.JV),this.za.addEventListener("touchmove",this.QV,!!e&&{passive:!0}),this.za.addEventListener("touchcancel",this.tk),this.ik=!1}cleanup(){this.za.removeEventListener("touchstart",this.ZV),this.za.removeEventListener("touchend",this.JV),this.za.removeEventListener("touchmove",this.QV),this.za.removeEventListener("touchcancel",this.tk),delete this.za[st],this.Zs.cancel()}onGesture(t,i){const s=new t(this),e=s.getType();let n=this.KV[e];return n||(this.HV.push(s),n=new it,this.KV[e]=n),n.add(i)}removeGesture(t){const i=new t(this).getType(),s=this.KV[i];if(s){s.removeAll();const t=function(t,s){for(let s=0;s<t.length;s++)if(t[s].getType()==i)return s;return-1}(this.HV);return!(t<0||(this.HV.splice(t,1),this.Ct.splice(t,1),this.BV.splice(t,1),this.t_.splice(t,1),delete this.KV[i],0))}return!1}onPointerDown(t){return this.XV.add(t)}gp(t){const i=Date.now();this.qV=!1,this.XV.fire(t);for(let s=0;s<this.HV.length;s++)this.Ct[s]||(this.BV[s]&&this.BV[s]<i&&this.o_(s),this.HV[s].onTouchStart(t)&&this.u_(s));this.sk(t)}vp(t){const i=Date.now();for(let s=0;s<this.HV.length;s++)this.t_[s]&&(this.BV[s]&&this.BV[s]<i?this.o_(s):this.HV[s].onTouchMove(t)||this.o_(s));this.sk(t)}Pp(t){const i=Date.now();for(let s=0;s<this.HV.length;s++){if(!this.t_[s])continue;if(this.BV[s]&&this.BV[s]<i){this.o_(s);continue}this.HV[s].onTouchEnd(t);const e=!this.BV[s],n=this.BV[s]<i;this.YV==this.HV[s]||!e&&!n||this.o_(s)}this.sk(t)}h_(t){for(let t=0;t<this.HV.length;t++)this.nk(t);this.sk(t)}pp(t,i){if(this.YV)return void t.acceptCancel();const s=Date.now();for(let e=0;e<this.HV.length;e++)this.HV[e]==t&&(this.Ct[e]=s+i,this.BV[e]=0);this.ik=!0}ek(t,i){if(this.YV)return void t.acceptCancel();const s=Date.now();for(let e=0;e<this.HV.length;e++)this.HV[e]==t&&(this.BV[e]=s+i)}rk(t){this.YV==t&&(this.YV=null,this.qV=!0)}ak(t,i,s){o(this.YV==t);const e=this.KV[t.getType()];e&&e.fire(new class{constructor(t,i,s,e){this.type=t,this.data=i,this.time=s,this.event=e}}(t.getType(),i,Date.now(),s))}sk(t){let i=!!this.YV||this.qV;if(this.qV=!1,!i){const t=Date.now();for(let s=0;s<this.HV.length;s++)if(this.Ct[s]||this.BV[s]&&this.BV[s]>=t){i=!0;break}}i?(t.stopPropagation(),this.GV||t.preventDefault()):this.WV&&t.stopPropagation(),this.ik&&(this.ik=!1,this.wm())}wm(){const t=Date.now();let i=-1;for(let s=0;s<this.HV.length;s++)this.Ct[s]?(-1==i||this.Ct[s]>this.Ct[i])&&(i=s):this.BV[s]&&this.BV[s]<t&&this.o_(s);if(-1==i)return;let s=0;for(let i=0;i<this.HV.length;i++)!this.Ct[i]&&this.t_[i]&&(s=Math.max(s,this.BV[i]-t));s<2?this.hk(i):this.Zs.schedule(s)}hk(t){const i=this.HV[t];for(let i=0;i<this.HV.length;i++)i!=t&&this.nk(i);this.Ct[t]=0,this.BV[t]=0,this.YV=i,i.acceptStart()}u_(t){this.t_[t]=!0,this.BV[t]=0}o_(t){this.t_[t]=!1,this.BV[t]=0,this.Ct[t]||this.HV[t].acceptCancel()}nk(t){this.Ct[t]=0,this.o_(t)}};function nt(t,i,s){i<1&&(i=1);const e=t/i,n=.5+Math.min(i/33.34,.5);return e*n+s*(1-n)}Math.round(-16.67/Math.log(.95));var ht="backward",rt="horizontal";function ot(t){const i=t.indexOf("#");return-1==i?t:t.substring(0,i)}var at="amp-sidebar toolbar",lt="left",ct="right",ut=class extends t.BaseElement{constructor(t){super(t),this.vu=null,this.Dl=null,this.jX=null,this.iH=null,this.Nh=this.win.document,this.aH=this.Nh.documentElement,this.yX=null,this.DX=[];const i=W(this.win,"platform");this.zX=i.isIos(),this.av=i.isSafari(),this.XD=-1,this.FX=!1,this.BX=null,this.NX=null,this.WX=0,this.YX=!1,this.GX=null,this.HX=new class{constructor(t,i,s){this.i=t,this.j_=i,this.UX=s,this.qX=ht,this.JX=rt,this.ZX=null,this.KX=null}QX(){return this.JX==rt?this.ZX.offsetWidth:this.ZX.offsetHeight}XF(t,i){const s=this.JX==rt?t:i;return this.qX==ht?-Math.min(s,0):Math.max(s,0)}JF(t,i=""){const s=this.qX==ht?-t:t;return`translate(${this.JX==rt?`${s}${i}`:0}, ${this.JX==rt?0:`${s}${i}`})`}startSwipe(t){const{direction:i,mask:s,orientation:e,swipeElement:n}=t;this.ZX=n,this.KX=s,this.qX=i,this.JX=e}swipeMove(t){this.ZF(t,!1)}endSwipe(t){this.ZF(t,!0)}KF(t,i){const s=.75*i;return g(this.ZX,{transform:this.JF(t,"px"),transition:`${s}ms transform cubic-bezier(0.15, .55, .3, 0.95)`}),tt(this.i,s)}hW(t){const i=.8*t;return this.j_((()=>{g(this.ZX,{transform:this.JF(0),transition:`${i}ms transform ease-in`}),g(this.KX,{opacity:"",transition:`${i}ms opacity ease-in`})})).then((()=>tt(this.i,i)))}rW(t){const i=.75*(this.QX()-t);return this.j_((()=>{g(this.ZX,{transform:this.JF(100,"%"),transition:`${i}ms transform ease-out`}),g(this.KX,{opacity:0,transition:`${i}ms opacity ease-out`})})).then((()=>tt(this.i,i))).then((()=>this.UX()))}aW(t="",i=""){g(this.ZX,{transform:t,transition:""}),g(this.KX,{opacity:i,transition:""})}lW(t,i,s,e){const n=22.5*t+s,h=22.5*i+e,r=this.XF(n,h),o=this.XF(t,i),a=.5*this.QX();return r<a&&o<.65?this.KF(r,o).then((()=>this.hW(r))):this.rW(r)}ZF(t,i){const{deltaX:s,deltaY:e,velocityX:n,velocityY:h}=t;this.j_((()=>{if(i)return void this.lW(n,h,s,e).then((()=>{this.aW()}));const t=this.XF(s,e),r=t/this.QX(),o=Math.max(0,1-r);this.aW(this.JF(t,"px"),o)}))}}(this.win,(t=>this.mutateElement(t)),(()=>this.cW(!0,3))),this.DW=!1,this.XW=!1,this.QM=this.QM.bind(this),this.uW=null}buildCallback(){const{element:t}=this;var s;t.classList.add("i-amphtml-overlay"),t.classList.add("i-amphtml-scrollable"),this.yX=t.getAttribute("side"),this.XW=t.hasAttribute("data-disable-swipe-close"),this.vu=this.getViewport(),this.Dl=(t=>H(t,"action"))(t),this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn(at,`${at} is recommended to be a direct child of the <body> element to preserve a logical DOM order.`),this.yX!=lt&&this.yX!=ct&&(this.yX=this.fW("rtl"==((s=this.Nh).body.getAttribute("dir")||s.documentElement.getAttribute("dir")||"ltr")?ct:lt),t.setAttribute("side",this.yX)),this.EW(),t.addEventListener("amp:dom-update",(()=>{this.EW()})),this.getAmpDoc().whenReady().then((()=>{i(t.querySelectorAll("nav[toolbar]")).forEach((t=>{try{this.DX.push(new class{constructor(t,i){this.O$=i,this.dW=t,this.ni=i.getAmpDoc(),this.mW=this.dW.getAttribute("toolbar"),this.pW=null,this._W=void 0,this.bW=!1,this.dW.classList.add("amp-sidebar-toolbar-target-hidden"),this.vW()}onLayoutChange(){this.ni.win.matchMedia(this.mW).matches?this.AW():this.PW()}vW(){this.pW=this.dW.cloneNode(!0);const t=(s=this.dW.getAttribute("toolbar-target"),'"toolbar-target" is required',e=this.dW,j().assert(s,'"toolbar-target" is required',e,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),i=this.ni.getElementById(t);var s,e;if(!i)throw j().createError(`Could not find the toolbar-target element with an id: ${t}`);this._W=i,this.pW.classList.add("i-amphtml-toolbar"),E(this._W,!1)}gW(){return this.bW}AW(){return this.gW()?z||(z=Promise.resolve(void 0)):this.O$.mutateElement((()=>{this._W&&(E(this._W,!0),this._W.contains(this.pW)||this._W.appendChild(this.pW),this.dW.classList.add("amp-sidebar-toolbar-target-shown"),this.dW.classList.remove("amp-sidebar-toolbar-target-hidden"),this.bW=!0,Q(this.ni,this.pW))}))}PW(){this.gW()&&this.O$.mutateElement((()=>{this._W&&(E(this._W,!1),this.dW.classList.add("amp-sidebar-toolbar-target-hidden"),this.dW.classList.remove("amp-sidebar-toolbar-target-shown"),this.bW=!1)}))}}(t,this))}catch(t){this.user().error(at,"Failed to instantiate toolbar",t)}})),this.QM()})),this.zX&&this.MW(),t.hasAttribute("role")||t.setAttribute("role","menu"),t.tabIndex=-1,this.aH.addEventListener("keydown",(t=>{"Escape"==t.key&&this.Jk(3)&&t.preventDefault()})),this.BX=this.wW(),this.BX||(this.BX=this.createScreenReaderCloseButton(),t.insertBefore(this.BX,this.element.firstChild)),t.appendChild(this.createScreenReaderCloseButton()),this.registerDefaultAction((t=>{const{caller:i,trust:s}=t;this.GD(s,i)}),"open"),this.registerAction("close",(t=>{this.Jk(t.trust)})),this.registerAction("toggle",(t=>{const{caller:i,trust:s}=t;this.YX?this.Jk(s):this.GD(s,i)})),this.Dl.addToAllowlist("amp-sidebar",["open","close","toggle"],["email"]),t.addEventListener("click",(i=>{const s=l(i.target,"A");if(s&&s.href){const i=(t=>H(t,"url"))(t).parse(s.href),e=this.getAmpDoc().getUrl();if(ot(s.href)!=ot(e))return;i.hash&&this.Jk(3)}}),!0),this.fX(this.element)}attachedCallback(){this.uW=this.vu.onResize(function(t,i,s){let e=0,n=0,h=null;function r(){e=0;const s=100-(t.Date.now()-n);var o;s>0?e=t.setTimeout(r,s):(o=h,h=null,i.apply(null,o))}return function(...i){n=t.Date.now(),h=i,e||(e=t.setTimeout(r,100))}}(this.win,this.QM)),this.QM()}detachedCallback(){this.uW&&(this.uW(),this.uW=null)}EW(){if(this.GX)return;const t=this.element.querySelector("amp-nested-menu");var i;t&&((i=this.win,W(i,"extensions")).installExtensionForDoc(this.getAmpDoc(),"amp-nested-menu"),this.GX=t)}wW(){const t=this.element.querySelectorAll("[on]");for(let i=0;i<t.length;i++){const s=t[i],e=this.Dl.hasResolvableActionForTarget(s,"tap",this.element,L(s.parentElement)),n=l(s,"[toolbar]");if(e&&!n)return s}return null}createScreenReaderCloseButton(){const t=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",i=this.Nh.createElement("button");return i.textContent=t,i.classList.add("i-amphtml-screen-reader"),i.tabIndex=-1,i.addEventListener("click",(()=>{this.Jk(3)})),i}QM(){this.getAmpDoc().whenReady().then((()=>{this.DX.forEach((t=>{t.onLayoutChange()}))}))}TW(t,i){this.jX=t;const s=()=>{this.jX===t&&this.mutateElement(t)};i?K(this.win).delay(s,i):s()}IW(t){E(this.element,!0),E(this.RW(),!0),this.vu.addToFixedLayer(this.element,!0),this.mutateElement((()=>{!function(t){o(x.every((i=>i.element!==t))),o(u(t));const s=function(t){const s=[],e=D(t);for(let t=0;t<e.length;t++){const n=e[t];n.parentNode&&i(n.parentNode.children).filter((t=>t!=n)).forEach((t=>s.push(t)))}return s}(t),e=D(t).filter(r),n=function(t){const i=[];let s=t;for(;s;){const t=d(s),e=t.querySelectorAll(["a[href]","area[href]","button","details summary","iframe","input","select","textarea","[contenteditable]","[draggable]","[tabindex]"].join(","));Array.prototype.push.apply(i,e),s=t.host}return i}(t),h=n.filter((i=>t.contains(i)&&void 0!==i[S])),a=n.filter((i=>!t.contains(i)&&void 0===i[S])),l=s.concat(e).map((t=>({element:t,prevValue:t.getAttribute("aria-hidden")})));e.forEach((t=>t.removeAttribute("aria-hidden"))),s.forEach((t=>t.setAttribute("aria-hidden","true"))),a.forEach((t=>{t[S]=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")})),h.forEach((t=>{o(void 0!==t[S]),X(t,"tabindex",t[S])})),x.push({element:t,hiddenElementInfos:l,focusableExternalElements:a,focusableInternalElements:h})}(this.element)})),this.zX&&this.av&&this.yW(),this.element.scrollTop=1,this.element.setAttribute("open",""),this.RW().setAttribute("open",""),this.TW((()=>this.VW(t)),350),Q(this.getAmpDoc(),this.element)}VW(t){const i=c(this.element),s=J(this.element);s.scheduleLayout(this.element,i),s.scheduleResume(this.element,i),this.kW()||f(L(this.BX)),this.oO("sidebarOpen",t),this.element.setAttribute("i-amphtml-sidebar-opened",""),this.RW().setAttribute("i-amphtml-sidebar-opened",""),this.setAsContainer()}xW(t,i){this.RW().removeAttribute("open"),this.RW().removeAttribute("i-amphtml-sidebar-opened"),this.mutateElement((()=>{!function(t){const i=x.pop();o(i);const{element:s,focusableExternalElements:e,focusableInternalElements:n,hiddenElementInfos:h}=i;o(u(t)),o(s===t),h.forEach((({element:t,prevValue:i})=>X(t,"aria-hidden",i))),n.forEach((t=>t.setAttribute("tabindex","-1"))),e.forEach((t=>{o(void 0!==t[S]),X(t,"tabindex",t[S]),t[S]=void 0}))}(this.element)})),this.element.removeAttribute("open"),this.element.removeAttribute("i-amphtml-sidebar-opened"),this.TW((()=>this.SW(i)),t?0:350)}SW(t){E(this.element,!1),E(this.RW(),!1),J(this.element).schedulePause(this.element,c(this.element)),this.oO("sidebarClose",t),this.removeAsContainer(),function(t,i=!0){!function(t,i,s,n){const h=e(r=t)?r:[r];var r;for(let t=0;t<h.length;t++)O(h[t],i,!0,n)}(t,i,0,$)}(this.element,!1)}GD(t,i){this.YX||(this.YX=!0,this.vu.enterOverlayMode(),this.TW((()=>this.IW(t))),this.RX().push((()=>{this.zX?this.cW(!0,t):this.Jk(t)})).then((t=>{this.XD=t})),i&&(this.NX=i,this.WX=this.vu.getScrollTop()),function(t,i,s){const e=t.ownerDocument.defaultView;if(!e)return;let n=I.get(t);if(n||(n=[],I.set(t,n),y(e).observe(t)),!n.some((t=>t.callback===s&&0===t.type))){n.push({type:0,callback:s});const i=R.get(t);i&&setTimeout((()=>k(0,s,i)))}}(this.element,0,this.QM))}Jk(t){return this.cW(!1,t)}cW(t,i){if(!this.YX)return!1;this.YX=!1,this.vu.leaveOverlayMode();const s=this.WX==this.vu.getScrollTop(),e=this.element.contains(this.Nh.activeElement);return this.TW((()=>this.xW(t,i))),t&&(E(this.element,!1),E(this.RW(),!1)),-1!=this.XD&&(this.RX().pop(this.XD),this.XD=-1),this.NX&&e&&s&&(this.kW()||f(this.NX)),function(t,i,s){const e=I.get(t);if(e&&(function(t,i){const e=[];let n=0;for(let i=0;i<t.length;i++){const r=t[i];(h=r).callback===s&&0===h.type?e.push(r):(n<i&&(t[n]=r),n++)}var h;n<t.length&&(t.length=n)}(e),0==e.length)){I.delete(t),R.delete(t);const i=t.ownerDocument.defaultView;i&&y(i).unobserve(t)}}(this.element,0,this.QM),!0}fX(t){this.XW||et.get(t,!0,!0).onGesture(class extends class extends class{constructor(t,i){this.CO=t,this.NP=i}getType(){return this.CO}signalReady(t){this.NP.pp(this,t)}signalPending(t){this.NP.ek(this,t)}signalEnd(){this.NP.rk(this)}signalEmit(t,i){this.NP.ak(this,t,i)}acceptStart(){}acceptCancel(){}onTouchStart(t){return!1}onTouchMove(t){return!1}onTouchEnd(t){}}{constructor(t,i,s,e){super(t,i),this.zO=s,this.NO=e,this.YV=!1,this.LO=0,this.DO=0,this.UO=0,this.$O=0,this.jO=0,this.FO=0,this.Mn=0,this.HO=0,this.BO=0,this.YO=0,this.GO=0}onTouchStart(t){const{touches:i}=t;return!!(this.YV&&i&&i.length>1)||!(!i||1!=i.length)&&(this.Mn=Date.now(),this.LO=i[0].clientX,this.DO=i[0].clientY,!0)}onTouchMove(t){const{touches:i}=t;if(i&&i.length>=1){const{clientX:s,clientY:e}=i[0];if(this.UO=s,this.$O=e,this.YV)this.WO(!1,!1,t);else{const t=Math.abs(s-this.LO),i=Math.abs(e-this.DO);if(this.zO&&this.NO)(t>=8||i>=8)&&this.signalReady(-10);else if(this.zO){if(t>=8&&t>i)this.signalReady(-10);else if(i>=8)return!1}else{if(!this.NO)return!1;if(i>=8&&i>t)this.signalReady(-10);else if(t>=8)return!1}}return!0}return!1}onTouchEnd(t){const{touches:i}=t;i&&0==i.length&&this.qO(t)}acceptStart(){this.YV=!0,this.jO=this.LO,this.FO=this.DO,this.BO=this.Mn,this.LO=this.UO,this.DO=this.$O,this.WO(!0,!1,null)}acceptCancel(){this.YV=!1}WO(t,i,s){this.HO=Date.now();const e=this.HO-this.BO;if(!i&&e>4||i&&e>16){const t=nt(this.UO-this.jO,e,this.YO),s=nt(this.$O-this.FO,e,this.GO);(!i||e>32||0!=t||0!=s)&&(this.YO=Math.abs(t)>1e-4?t:0,this.GO=Math.abs(s)>1e-4?s:0),this.jO=this.UO,this.FO=this.$O,this.BO=this.HO}this.signalEmit({first:t,last:i,time:this.HO,deltaX:this.UO-this.LO,deltaY:this.$O-this.DO,startX:this.LO,startY:this.DO,lastX:this.UO,lastY:this.$O,velocityX:this.YO,velocityY:this.GO},s)}qO(t){this.YV&&(this.YV=!1,this.WO(!1,!0,t),this.signalEnd())}}{constructor(t){super("swipe-x",t,!0,!1)}},(t=>{const{data:i,event:s}=t;this.OW(i,s)}))}OW(t,i){var s;if(!t.first)return t.last?(this.DW&&this.HX.endSwipe(t),void(this.DW=!1)):void(i&&i.target&&(s=i.target,"input"!==s.nodeName.toLowerCase()||"range"!==s.getAttribute("type"))&&(this.DW=!0,this.HX.swipeMove(t)));this.HX.startSwipe({swipeElement:this.element,mask:this.iH,direction:this.yX==lt?ht:"forward",orientation:rt})}fW(t){return l(this.element,"amp-story")?t==lt?ct:lt:t}RW(){if(!this.iH){const t=this.Nh.createElement("div");t.classList.add("amp-sidebar-mask","i-amphtml-sidebar-mask"),t.addEventListener("click",(()=>{this.Jk(3)})),this.getAmpDoc().getBody().appendChild(t),t.addEventListener("touchmove",(t=>{t.preventDefault()})),this.fX(t),this.iH=t}return this.iH}MW(){this.element.addEventListener("scroll",(t=>{this.YX&&(this.element.scrollTop<1?(this.element.scrollTop=1,t.preventDefault()):this.element.scrollHeight==this.element.scrollTop+this.element.offsetHeight&&(this.element.scrollTop=this.element.scrollTop-1,t.preventDefault()))}))}yW(){if(!this.FX){const t=this.Nh.createElement("div");g(t,{"height":"54px","width":"100%","background-color":"transparent"}),this.element.appendChild(t),this.FX=!0}}RX(){return Y(this.getAmpDoc(),"history")}oO(t,i){const s=function(t,i,s,e){const n={detail:{}};return Object.assign(n,void 0),new t.CustomEvent(i,n)}(this.win,`${at}.${t}`);this.Dl.trigger(this.element,t,s,i)}kW(){return this.zX&&(t=this.element,Y(t,"viewer")).isEmbedded();var t}};t.registerElement("amp-sidebar",ut,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,0.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-sidebar-0.1.mjs.map