(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();class l{constructor(e,n){if(this.x=e,this.y=n,!Number.isFinite(this.x)||!Number.isFinite(this.y))throw new Error("NaN or Infinity value(s) were passed in constructing a Point.")}set(e,n){if(!Number.isFinite(e)||!Number.isFinite(n))throw new Error("NaN or Infinity value(s) were passed in setting "+this+"'s coords.");this.x=e,this.y=n}distance(e){const n=this.x-e.x,i=this.y-e.y;return Math.sqrt(n*n+i*i)}toString(){return"("+this.x+", "+this.y+")"}}function b(t,e){return q(t,e)||B(e,t)}function q(t,e){if(t instanceof x)return e instanceof x?z(t,e):G(e,t);if(e instanceof x)return G(t,e);if(z(t.boundingBox,e.boundingBox)||B(e.boundingBox,t.boundingBox)){const n=Y(t);let i;for(let r=0;r<n.length;r++)if(i=R(e,n[r]),i<=0)return!0;return!1}return!1}function G(t,e){const n=Y(t);for(let i=0;i<n.length;i++)if(F(e,n[i]))return!0;return!1}function B(t,e){if(t instanceof x)if(e instanceof x){const n=e.getCorners();for(let i=0;i<4;i++)if(!F(t,n[i]))return!1;return!0}else{const n=oe(e);for(let i=0;i<4;i++)if(!F(t,n[i]))return!1;return!0}else if(e instanceof x){const n=e.getCorners();let i;for(let r=0;r<4;r++)if(i=R(t,n[r]),!(i<0))return!1;return!0}else{const n=Y(e);let i;for(let r=0;r<n.length;r++)if(i=R(t,n[r]),!(i<0))return!1;return!0}}function z(t,e){const n=t.getCorners(),i=e.getCorners();return(n[0].y<=i[0].y&&n[2].y>=i[0].y||n[0].y<=i[2].y&&n[2].y>=i[2].y||i[0].y<=n[0].y&&i[2].y>=n[0].y||i[0].y<=n[2].y&&i[2].y>=n[2].y)&&(n[0].x<=i[0].x&&n[1].x>=i[0].x||n[0].x<=i[1].x&&n[1].x>=i[1].x||i[0].x<=n[0].x&&i[1].x>=n[0].x||i[0].x<=n[1].x&&i[1].x>=n[1].x)}function F(t,e){const n=t.getCorners();return n[0].x<e.x&&n[1].x>e.x&&n[0].y<e.y&&n[2].y>e.y}function R(t,e){return Math.pow(e.x-t.center.x,2)/Math.pow(t.radiusX,2)+Math.pow(e.y-t.center.y,2)/Math.pow(t.radiusY,2)-1}function oe(t){return[new l(t.center.x,t.center.y-t.radiusY),new l(t.center.x+t.radiusX,t.center.y),new l(t.center.x,t.center.y+t.radiusY),new l(t.center.x-t.radiusX,t.center.y)]}function Y(t){const e=[];let n,i,r=1;for(let o=0;o<360;o++)n=t.center.x+t.radiusX*Math.cos(o*(Math.PI/180)),o>180&&(r=-1),i=le(t,n,r),e[o]=new l(n,i);return e}function le(t,e,n){return t.radiusX===0||t.radiusY===0?t.center.y:n*t.radiusY*Math.sqrt(1-Math.pow((e-t.center.x)/t.radiusX,2))+t.center.y}class x{constructor(e,n,i){if(!Number.isFinite(n)||!Number.isFinite(i))throw new Error("Infinity/NaN passed in for width/height while constructing a Rectangle.");if(n!==void 0&&n<0)throw new Error("Negative value passed for width while constructing a Rectangle.");if(i!==void 0&&i<0)throw new Error("Negative value passed for height while constructing a Rectangle.");this.startVertex=e,this.width=n,this.height=i}getCorners(){const e=[this.startVertex];return e.push(new l(this.startVertex.x+this.width,this.startVertex.y)),e.push(new l(this.startVertex.x+this.width,this.startVertex.y+this.height)),e.push(new l(this.startVertex.x,this.startVertex.y+this.height)),e}containsPoint(e){return F(this,e)}overlaps(e){return b(this,e)}contains(e){return B(this,e)}toString(){return"Rectangle with top left vertex at: "+this.startVertex.toString()+", w: "+this.width+", h: "+this.height}}class u{constructor(e,n,i,r){if(e.length!==1)throw new Error("String of length "+e.length+" passed in as identifier in AtomNode constructor, which is not of length 1.");if(!/^[A-Za-z]$/.test(e))throw new Error(e+" not contained in Latin alphabet passed in as identifier in AtomNode constructor.");this.internalIdentifier=e,this.internalOrigin=n,this.internalWidth=i,this.internalHeight=r}get width(){return this.internalWidth}set width(e){this.internalWidth=e}get height(){return this.internalHeight}set height(e){this.internalHeight=e}get identifier(){return this.internalIdentifier}set identifier(e){this.internalIdentifier=e}get origin(){return this.internalOrigin}set origin(e){this.internalOrigin=e}containsPoint(e){return this.calcRect().containsPoint(e)}toString(){return"An atom representing the proposition: "+this.internalIdentifier+" and Boundary box of: "+this.calcRect().toString()}calcRect(){return new x(new l(this.internalOrigin.x,this.internalOrigin.y-this.internalHeight),this.internalWidth,this.internalHeight)}}class y{constructor(e,n){this.internalEllipse=e,this.internalChildren=n??[]}get ellipse(){return this.internalEllipse}set ellipse(e){this.internalEllipse=e}get children(){return this.internalChildren}set children(e){this.internalChildren=e}set child(e){this.internalChildren.push(e)}getCurrentCut(e){for(let n=0;n<this.internalChildren.length;n++){const i=this.internalChildren[n];if(i instanceof y&&i.containsNode(e))return i.getCurrentCut(e)}return this}containsPoint(e){return this.internalEllipse===null?!0:this.internalEllipse.containsPoint(e)}containsNode(e){return this.internalEllipse===null?!0:e instanceof u?B(this.internalEllipse,e.calcRect()):B(this.internalEllipse,e.internalEllipse)}remove(e){if(!this.containsPoint(e))return!1;for(let n=0;n<this.children.length;n++)if(this.children[n].containsPoint(e)){if(this.children[n]instanceof u||this.children[n]instanceof y&&this.children[n].children.length===0)return this.children.splice(n,1),!0;for(let i=0;i<this.children[n].children.length;i++)if(this.children[n].children[i].containsPoint(e))if(this.children[n].children[i]instanceof u)this.children[n].children.splice(i,1);else return this.children[n].children[i].remove(e);return this.children.splice(n,1),!0}return!1}toString(){let e;return this.internalEllipse===null?e="Sheet of Assertion of the AEG Tree":e="A cut node with boundary box of "+this.internalEllipse.toString(),this.internalChildren.length>0&&(e+=", With nested nodes: "+this.internalChildren.toString()),e}toFormulaString(){let e="";for(const n of this.internalChildren)n instanceof u?e+=n.identifier:n instanceof y&&(e+=n.toFormulaString()),e+=" ";return e=e.slice(0,-1),this.internalEllipse===null?e="["+e+"]":e="("+e+")",e}}class S{constructor(e){this.internalSheet=e??new y(null)}get sheet(){return this.internalSheet}set sheet(e){this.internalSheet=e}verify(){return this.verifyAEG(this.internalSheet)}verifyAEG(e){for(let n=0;n<e.children.length;n++){if(!e.containsNode(e.children[n]))return!1;for(let i=n+1;i<e.children.length;i++)if(this.overlaps(e.children[n],e.children[i]))return!1}for(let n=0;n<e.children.length;n++)if(e.children[n]instanceof y&&!this.verifyAEG(e.children[n]))return!1;return!0}canInsert(e){const n=this.internalSheet.getCurrentCut(e);for(let i=0;i<n.children.length;i++)if(this.intersects(e,n.children[i]))return!1;return!0}insert(e){if(!this.canInsert(e))throw new Error("Insertion failed. "+e+" had a collision.");const n=this.internalSheet.getCurrentCut(e),i=[...n.children];if(n.child=e,e instanceof y)for(let r=i.length-1;r>=0;r--)e.containsNode(i[r])&&(e.child=i[r],n.children.splice(r,1));return!0}remove(e){return this.internalSheet.remove(e)}intersects(e,n){const i=e instanceof u?e.calcRect():e.ellipse,r=n instanceof u?n.calcRect():n.ellipse;return q(i,r)}overlaps(e,n){let i,r;return e instanceof u?n instanceof u?b(e.calcRect(),n.calcRect()):(i=n.ellipse,b(e.calcRect(),i)):n instanceof u?(i=e.ellipse,b(i,n.calcRect())):(i=e.ellipse,r=n.ellipse,b(i,r))}toString(){return this.internalSheet.toFormulaString()}}class k{constructor(e,n,i){if(this.center=e,this.radiusX=n,this.radiusY=i,!Number.isFinite(this.radiusX)||!Number.isFinite(this.radiusY))throw new Error("A radius passed into an Ellipse construction was NaN or Infinity.");if(this.radiusX!==void 0&&this.radiusX<0)throw new Error("Horizontal radius in an Ellipse construction was negative.");if(this.radiusY!==void 0&&this.radiusY<0)throw new Error("Vertical radius in an Ellipse construction was negative.");const r=new l(this.center.x-this.radiusX,this.center.y-this.radiusY);this.boundingBox=new x(r,this.radiusX*2,this.radiusY*2)}containsPoint(e){return R(this,e)<0}overlaps(e){return b(this,e)}contains(e){return B(this,e)}toString(){return"An ellipse with Center at: "+this.center.toString()+", Horizontal radius: "+this.radiusX+", Vertical radius: "+this.radiusY+", Bounding box: "+this.boundingBox.toString()}}const I=document.getElementById("canvas"),K=I.getContext("2d");if(K===null)throw Error("2d rendering context not supported");const U=K;let X,s=new l(0,0),L;function ce(t){X=new l(t.x-s.x,t.y-s.y),L=!1}function ae(t){L||(s=new l(t.x-X.x,t.y-X.y),U.clearRect(0,0,I.width,I.height),f(c.sheet,s))}function ue(){L=!0,U.clearRect(0,0,I.width,I.height),f(c.sheet,s)}const E=document.getElementById("canvas"),Z=E.getContext("2d"),he=document.getElementById("showRect"),de=document.getElementById("mode");if(Z===null)throw Error("2d rendering context not supported");const g=Z;let D,O;function fe(t){D=new l(t.clientX-s.x,t.clientY-s.y),O=!1}function we(t){const e=new y(new k(new l(0,0),0,0)),n=new l(t.clientX-s.x,t.clientY-s.y);g.clearRect(0,0,E.width,E.height),f(c.sheet,s),e.ellipse=N(D,n),O||(c.canInsert(e)&&Q(e.ellipse)?J(e,"#00FF00"):J(e,"#FF0000"))}function ge(t){const e=new l(t.clientX-s.x,t.clientY-s.y),n=new y(N(D,e));c.canInsert(n)&&!O&&Q(n.ellipse)&&c.insert(n),g.clearRect(0,0,E.width,E.height),f(c.sheet,s)}function ye(){O=!0,g.clearRect(0,0,E.width,E.height),f(c.sheet,s)}function N(t,e){const n=new l((e.x-t.x)/2+t.x,(e.y-t.y)/2+t.y),i=t.x-e.x,r=t.y-e.y,o=Math.abs(i),m=Math.abs(r);let A,H;if(de.value==="circumscribed"){const j=Math.floor(n.distance(e));H=Math.floor(j*(m/o)),A=Math.floor(j*(o/m))}else A=o/2,H=m/2;return he.checked&&(g.beginPath(),g.rect(t.x+s.x,t.y+s.y,-i,-r),g.stroke()),new k(n,A,H)}function J(t,e){g.strokeStyle=e;const n=t.ellipse,i=n.center;g.beginPath(),g.ellipse(i.x+s.x,i.y+s.y,n.radiusX,n.radiusY,0,0,2*Math.PI),g.stroke()}function Q(t){return t.radiusX>15&&t.radiusY>15}const w=document.getElementById("canvas"),_=w.getContext("2d");if(_===null)throw Error("2d rendering context not supported");const a=_,ee=document.getElementById("atomDisplay"),xe=document.getElementById("atomBox"),te=document.getElementById("atomBoxes");te.addEventListener("input",ve);let h,P,M="A";ee.innerHTML=M;function pe(t){new RegExp(/^[A-Za-z]$/).test(t.key)&&(M=t.key,ee.innerHTML=M)}function me(t){h=a.measureText(M),P=!1;const e=new u(M,new l(t.clientX-s.x,t.clientY-s.y),h.width,h.fontBoundingBoxDescent+h.actualBoundingBoxAscent);a.clearRect(0,0,w.width,w.height),f(c.sheet,s),c.canInsert(e)?C(e,"#00FF00",!0):C(e,"#FF0000",!0)}function Ee(t){const e=new u(M,new l(t.clientX-s.x,t.clientY-s.y),h.width,h.fontBoundingBoxDescent+h.actualBoundingBoxAscent);a.clearRect(0,0,w.width,w.height),f(c.sheet,s),P||(c.canInsert(e)?C(e,"#00FF00",!0):C(e,"#FF0000",!0))}function Me(t){const e=new u(M,new l(t.clientX-s.x,t.clientY-s.y),h.width,h.fontBoundingBoxDescent+h.actualBoundingBoxAscent);c.canInsert(e)&&!P&&c.insert(e),a.clearRect(0,0,w.width,w.height),f(c.sheet,s)}function be(){P=!0,a.clearRect(0,0,w.width,w.height),f(c.sheet,s)}function C(t,e,n){a.textBaseline="bottom",h=a.measureText(t.identifier),a.fillStyle=e,a.strokeStyle=e,a.beginPath(),a.fillText(t.identifier,t.origin.x+s.x,t.origin.y+s.y),(te.checked||xe.checked&&n)&&a.rect(t.origin.x+s.x,t.origin.y+s.y-h.actualBoundingBoxAscent,t.width,t.height),a.stroke()}function ve(){a.clearRect(0,0,w.width,w.height),f(c.sheet,s)}async function Be(t,e){const n=JSON.stringify(e,null,"	"),i=await t.createWritable();await i.write(n),await i.close()}function Ie(t){if(typeof t=="string"){const n=JSON.parse(t).internalSheet.internalChildren,i=new S,r=[];return n.forEach(o=>{Object.prototype.hasOwnProperty.call(o,"internalEllipse")?r.push(ne(o)):r.push(ie(o))}),i.sheet.children=r,i}return null}function ne(t){const e=new k(new l(t.internalEllipse.center.x,t.internalEllipse.center.y),t.internalEllipse.radiusX,t.internalEllipse.radiusY),n=[];return t.internalChildren.forEach(i=>{"internalEllipse"in i?n.push(ne(i)):n.push(ie(i))}),new y(e,n)}function ie(t){const e=t.internalIdentifier,n=new l(t.internalOrigin.x,t.internalOrigin.y);return new u(e,n,t.internalWidth,t.internalHeight)}const d=document.getElementById("canvas");d.width=window.innerWidth;d.height=window.innerHeight;const re=d.getContext("2d");if(re===null)throw Error("2d rendering context not supported");const v=re;v.font="35pt arial";const Ce=document.getElementById("graphString"),T=document.getElementById("cutTools"),$=document.getElementById("atomTools");window.addEventListener("keydown",Pe);d.addEventListener("mousedown",Ae);d.addEventListener("mousemove",He);d.addEventListener("mouseup",Xe);d.addEventListener("mouseout",Ye);d.addEventListener("mouseenter",Se);let p="",V=!1,W=!0,c=new S;window.atomMode=Re;window.cutMode=Fe;window.dragMode=ke;window.saveMode=se;window.loadMode=Oe;function Fe(){p="cutMode",T.style.display="block",$.style.display="none"}function Re(){p="atomMode",$.style.display="block",T.style.display="none"}function ke(){p="dragMode",T.style.display="none",$.style.display="none"}async function se(){if("showSaveFilePicker"in window){const t=await window.showSaveFilePicker({excludeAcceptAllOption:!0,suggestedName:"AEG Tree",startIn:"downloads",types:[{description:"JSON Files",accept:{"text/json":[".json"]}}]});Be(t,c)}else{const t=document.createElement("a");t.href=JSON.stringify(c,null,"	"),t.download="AEGTree.json",t.click()}}async function Oe(){const[t]=await window.showOpenFilePicker({excludeAcceptAllOption:!0,multiple:!1,startIn:"downloads",types:[{description:"JSON Files",accept:{"text/json":[".json"]}}]}),e=await t.getFile(),n=new FileReader;n.addEventListener("load",()=>{const i=n.result,r=Ie(i);r instanceof S&&(c=r,v.clearRect(0,0,d.width,d.height),f(c.sheet,s))}),n.readAsText(e)}function Pe(t){if(t.ctrlKey&&t.key==="s")t.preventDefault(),se();else switch(p){case"atomMode":pe(t);break}}function Ae(t){switch(p){case"cutMode":fe(t);break;case"atomMode":me(t);break;case"dragMode":ce(t);break}V=!0}function He(t){if(V&&W)switch(p){case"cutMode":we(t);break;case"atomMode":Ee(t);break;case"dragMode":ae(t);break}}function Xe(t){switch(p){case"cutMode":ge(t);break;case"atomMode":Me(t);break}V=!1}function Ye(){switch(p){case"cutMode":ye();break;case"atomMode":be();break;case"dragMode":ue();break}W=!1}function Se(){W=!0}function f(t,e){Ce.innerHTML=c.toString();for(let n=0;t.children.length>n;n++)t.children[n]instanceof u?Le(t.children[n]):f(t.children[n],e);t.ellipse instanceof k&&(v.strokeStyle="#000000",v.beginPath(),v.ellipse(t.ellipse.center.x+e.x,t.ellipse.center.y+e.y,t.ellipse.radiusX,t.ellipse.radiusY,0,0,2*Math.PI),v.stroke())}function Le(t){C(t,"#000000",!1)}function De(){d.width=window.innerWidth,d.height=window.innerHeight}window.onresize=De;
