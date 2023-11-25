/* empty css               */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const O of d.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&o(O)}).observe(document,{childList:!0,subtree:!0});function n(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(s){if(s.ep)return;s.ep=!0;const d=n(s);fetch(s.href,d)}})();class c{constructor(t,n){if(this.x=t,this.y=n,!Number.isFinite(this.x)||!Number.isFinite(this.y))throw new Error("NaN or Infinity value(s) were passed in constructing a Point.")}set(t,n){if(!Number.isFinite(t)||!Number.isFinite(n))throw new Error("NaN or Infinity value(s) were passed in setting "+this+"'s coords.");this.x=t,this.y=n}distance(t){const n=this.x-t.x,o=this.y-t.y;return Math.sqrt(n*n+o*o)}toString(){return"("+this.x+", "+this.y+")"}}function G(e,t){return Ze(e,t)||q(t,e)}function Ze(e,t){if(e instanceof F)return t instanceof F?Re(e,t):Ne(t,e);if(t instanceof F)return Ne(e,t);if(Re(e.boundingBox,t.boundingBox)||q(t.boundingBox,e.boundingBox)){const n=Qe(e);let o;for(let s=0;s<n.length;s++)if(o=ue(t,n[s]),o<=0)return!0;return!1}return!1}function Ne(e,t){const n=t.getCorners(),o=ie(e,n[0].x,1),s=ie(e,n[1].x,1),d=ie(e,n[0].x,-1),O=ie(e,n[1].x,-1);if(n[0].y<o&&o<n[2].y||n[0].y<d&&d<n[2].y||n[0].y<s&&s<n[2].y||n[0].y<O&&O<n[2].y)return!0;const S=-1/Math.pow(e.radiusX,2),I=2*e.center.x/Math.pow(e.radiusX,2),oe=-Math.pow(e.center.x,2)/Math.pow(e.radiusX,2)+1-Math.pow((n[0].y-e.center.y)/e.radiusY,2),Fe=-Math.pow(e.center.x,2)/Math.pow(e.radiusX,2)+1-Math.pow((n[2].y-e.center.y)/e.radiusY,2),Ce=(-I+Math.sqrt(Math.pow(I,2)-4*S*oe))/(2*S),Te=(-I-Math.sqrt(Math.pow(I,2)-4*S*oe))/(2*S),Pe=(-I+Math.sqrt(Math.pow(I,2)-4*S*Fe))/(2*S),Ee=(-I-Math.sqrt(Math.pow(I,2)-4*S*Fe))/(2*S);return!isNaN(Ce)&&n[0].x<Ce&&Ce<n[1].x||!isNaN(Te)&&n[0].x<Te&&Te<n[1].x||!isNaN(Pe)&&n[0].x<Pe&&Pe<n[1].x||!isNaN(Ee)&&n[0].x<Ee&&Ee<n[1].x}function q(e,t){if(e instanceof F)if(t instanceof F){const n=t.getCorners();for(let o=0;o<4;o++)if(!Ie(e,n[o]))return!1;return!0}else{const n=bt(t);for(let o=0;o<4;o++)if(!Ie(e,n[o]))return!1;return!0}else if(t instanceof F){const n=t.getCorners();let o;for(let s=0;s<4;s++)if(o=ue(e,n[s]),!(o<0))return!1;return!0}else{const n=Qe(t);let o;for(let s=0;s<n.length;s++)if(o=ue(e,n[s]),!(o<0))return!1;return!0}}function Re(e,t){const n=e.getCorners(),o=t.getCorners();return(n[0].y<=o[0].y&&n[2].y>=o[0].y||n[0].y<=o[2].y&&n[2].y>=o[2].y||o[0].y<=n[0].y&&o[2].y>=n[0].y||o[0].y<=n[2].y&&o[2].y>=n[2].y)&&(n[0].x<=o[0].x&&n[1].x>=o[0].x||n[0].x<=o[1].x&&n[1].x>=o[1].x||o[0].x<=n[0].x&&o[1].x>=n[0].x||o[0].x<=n[1].x&&o[1].x>=n[1].x)}function Ie(e,t){const n=e.getCorners();return n[0].x<t.x&&n[1].x>t.x&&n[0].y<t.y&&n[2].y>t.y}function ue(e,t){return Math.pow(t.x-e.center.x,2)/Math.pow(e.radiusX,2)+Math.pow(t.y-e.center.y,2)/Math.pow(e.radiusY,2)-1}function bt(e){return[new c(e.center.x,e.center.y-e.radiusY),new c(e.center.x+e.radiusX,e.center.y),new c(e.center.x,e.center.y+e.radiusY),new c(e.center.x-e.radiusX,e.center.y)]}function Qe(e){const t=[];let n,o,s=1;for(let d=0;d<360;d++)n=e.center.x+e.radiusX*Math.cos(d*(Math.PI/180)),d>180&&(s=-1),o=ie(e,n,s),t[d]=new c(n,o);return t}function ie(e,t,n){return e.radiusX===0||e.radiusY===0?e.center.y:n*e.radiusY*Math.sqrt(1-Math.pow((t-e.center.x)/e.radiusX,2))+e.center.y}class F{constructor(t,n,o){if(!Number.isFinite(n)||!Number.isFinite(o))throw new Error("Infinity/NaN passed in for width/height while constructing a Rectangle.");if(n!==void 0&&n<0)throw new Error("Negative value passed for width while constructing a Rectangle.");if(o!==void 0&&o<0)throw new Error("Negative value passed for height while constructing a Rectangle.");this.startVertex=t,this.width=n,this.height=o}getCorners(){const t=[this.startVertex];return t.push(new c(this.startVertex.x+this.width,this.startVertex.y)),t.push(new c(this.startVertex.x+this.width,this.startVertex.y+this.height)),t.push(new c(this.startVertex.x,this.startVertex.y+this.height)),t}containsPoint(t){return Ie(this,t)}overlaps(t){return G(this,t)}contains(t){return q(this,t)}toString(){return"Rectangle with top left vertex at: "+this.startVertex.toString()+", w: "+this.width+", h: "+this.height}}class f{constructor(t,n,o,s){if(t.length!==1)throw new Error("String of length "+t.length+" passed in as identifier in AtomNode constructor, which is not of length 1.");if(!/^[A-Za-z]$/.test(t))throw new Error(t+" not contained in Latin alphabet passed in as identifier in AtomNode constructor.");this.internalIdentifier=t,this.internalOrigin=n,this.internalWidth=o,this.internalHeight=s}get width(){return this.internalWidth}set width(t){this.internalWidth=t}get height(){return this.internalHeight}set height(t){this.internalHeight=t}get identifier(){return this.internalIdentifier}set identifier(t){this.internalIdentifier=t}get origin(){return this.internalOrigin}set origin(t){this.internalOrigin=t}containsPoint(t){return this.calcRect().containsPoint(t)}toString(){return"An atom representing the proposition: "+this.internalIdentifier+" and Boundary box of: "+this.calcRect().toString()}calcRect(){return new F(new c(this.internalOrigin.x,this.internalOrigin.y-this.internalHeight),this.internalWidth,this.internalHeight)}}class a{constructor(t,n){this.internalEllipse=t,this.internalChildren=n??[]}get ellipse(){return this.internalEllipse}set ellipse(t){this.internalEllipse=t}get children(){return this.internalChildren}set children(t){this.internalChildren=t}set child(t){this.internalChildren.push(t)}getCurrentCut(t){for(let n=0;n<this.internalChildren.length;n++){const o=this.internalChildren[n];if(o instanceof a&&o.containsNode(t))return o.getCurrentCut(t)}return this}containsPoint(t){return this.internalEllipse===null?!0:this.internalEllipse.containsPoint(t)}containsNode(t){return this.internalEllipse===null?!0:t instanceof f?q(this.internalEllipse,t.calcRect()):q(this.internalEllipse,t.internalEllipse)}getLowestNode(t){if(!this.containsPoint(t))return null;for(let n=0;n<this.internalChildren.length;n++)if(this.internalChildren[n].containsPoint(t))return this.internalChildren[n]instanceof f||this.internalChildren[n]instanceof a&&this.internalChildren[n].children.length===0?this.internalChildren[n]:this.internalChildren[n].getLowestNode(t);return this}getLowestParent(t){if(!this.containsPoint(t))throw new Error("This parent "+this.toString+" does not contain the point.");for(let n=0;n<this.internalChildren.length;n++)if(this.internalChildren[n].containsPoint(t)){if(this.internalChildren[n]instanceof f||this.internalChildren[n]instanceof a&&this.internalChildren[n].children.length===0)return this;{const o=this.internalChildren[n];for(let s=0;s<o.children.length;s++)if(o.children[s].containsPoint(t))return o.getLowestParent(t);return this}}return null}getLevel(t,n){for(let o=0;o<this.internalChildren.length;o++){if(this.internalChildren[o]===t)return n;if(this.internalChildren[o]instanceof a&&this.internalChildren[o].containsNode(t))return this.internalChildren[o].getLevel(t,n+1)}return-1}remove(t){if(!this.containsPoint(t))return!1;for(let n=0;n<this.children.length;n++)if(this.children[n].containsPoint(t)){if(this.children[n]instanceof f||this.children[n]instanceof a&&this.children[n].children.length===0)return this.children.splice(n,1),!0;for(let o=0;o<this.children[n].children.length;o++)if(this.children[n].children[o].containsPoint(t))if(this.children[n].children[o]instanceof f)this.children[n].children.splice(o,1);else return this.children[n].children[o].remove(t);return this.children.splice(n,1),!0}return!1}clear(){this.internalChildren=[]}toString(){let t;return this.internalEllipse===null?t="Sheet of Assertion of the AEG Tree":t="A cut node with boundary box of "+this.internalEllipse.toString(),this.internalChildren.length>0&&(t+=", With nested nodes: "+this.internalChildren.toString()),t}toFormulaString(){let t="";for(const n of this.internalChildren)n instanceof f?t+=n.identifier:n instanceof a&&(t+=n.toFormulaString()),t+=" ";return t=t.slice(0,-1),this.internalEllipse===null?t="["+t+"]":t="("+t+")",t}}class ne{constructor(t){this.internalSheet=new a(null),t instanceof a&&t.children.length>0&&(this.internalSheet.children=[...t.children])}get sheet(){return this.internalSheet}set sheet(t){this.internalSheet=t}verify(){return this.verifyAEG(this.internalSheet)}verifyAEG(t){for(let n=0;n<t.children.length;n++){if(!t.containsNode(t.children[n]))return!1;for(let o=n+1;o<t.children.length;o++)if(this.overlaps(t.children[n],t.children[o]))return!1}for(let n=0;n<t.children.length;n++)if(t.children[n]instanceof a&&!this.verifyAEG(t.children[n]))return!1;return!0}canInsert(t){const n=this.internalSheet.getCurrentCut(t);for(let o=0;o<n.children.length;o++)if(this.intersects(t,n.children[o]))return!1;return!0}insert(t){if(!this.canInsert(t))throw new Error("Insertion failed. "+t+" had a collision.");const n=this.internalSheet.getCurrentCut(t),o=[...n.children];if(n.child=t,t instanceof a)for(let s=o.length-1;s>=0;s--)t.containsNode(o[s])&&(t.child=o[s],n.children.splice(s,1));return!0}getLowestNode(t){return this.internalSheet.getLowestNode(t)}getLowestParent(t){return this.internalSheet.getLowestParent(t)}getLevel(t){return this.internalSheet.getLevel(t,0)}remove(t){return this.internalSheet.remove(t)}clear(){this.internalSheet.clear()}intersects(t,n){const o=t instanceof f?t.calcRect():t.ellipse,s=n instanceof f?n.calcRect():n.ellipse;return Ze(o,s)}overlaps(t,n){let o,s;return t instanceof f?n instanceof f?G(t.calcRect(),n.calcRect()):(o=n.ellipse,G(t.calcRect(),o)):n instanceof f?(o=t.ellipse,G(o,n.calcRect())):(o=t.ellipse,s=n.ellipse,G(o,s))}toString(){return this.internalSheet.toFormulaString()}}var i=(e=>(e[e.none=0]="none",e[e.atomTool=1]="atomTool",e[e.cutTool=2]="cutTool",e[e.dragTool=3]="dragTool",e[e.moveSingleTool=4]="moveSingleTool",e[e.moveMultiTool=5]="moveMultiTool",e[e.copySingleTool=6]="copySingleTool",e[e.copyMultiTool=7]="copyMultiTool",e[e.deleteSingleTool=8]="deleteSingleTool",e[e.deleteMultiTool=9]="deleteMultiTool",e[e.resizeTool=10]="resizeTool",e[e.toProofMode=11]="toProofMode",e[e.doubleCutInsertionTool=12]="doubleCutInsertionTool",e[e.doubleCutDeletionTool=13]="doubleCutDeletionTool",e[e.erasureTool=14]="erasureTool",e[e.iterationTool=15]="iterationTool",e))(i||{});class r{}r.tree=new ne;r.selectForProof=new ne;r.toolState=0;class H{constructor(t,n,o){if(this.center=t,this.radiusX=n,this.radiusY=o,!Number.isFinite(this.radiusX)||!Number.isFinite(this.radiusY))throw new Error("A radius passed into an Ellipse construction was NaN or Infinity.");if(this.radiusX!==void 0&&this.radiusX<0)throw new Error("Horizontal radius in an Ellipse construction was negative.");if(this.radiusY!==void 0&&this.radiusY<0)throw new Error("Vertical radius in an Ellipse construction was negative.");const s=new c(this.center.x-this.radiusX,this.center.y-this.radiusY);this.boundingBox=new F(s,this.radiusX*2,this.radiusY*2)}containsPoint(t){return ue(this,t)<0}overlaps(t){return G(this,t)}contains(t){return q(this,t)}toString(){return"An ellipse with Center at: "+this.center.toString()+", Horizontal radius: "+this.radiusX+", Vertical radius: "+this.radiusY+", Bounding box: "+this.boundingBox.toString()}}const Ct=document.getElementById("theme-select");function j(e){return getComputedStyle(document.body).getPropertyValue(e)}let _e=j("--good-placement"),et=j("--bad-placement"),tt=j("--canvas-items");function nt(){setTimeout(()=>{_e=j("--good-placement"),et=j("--bad-placement"),tt=j("--canvas-items"),u(r.tree)})}Ct.addEventListener("input",()=>{nt()});window.addEventListener("DOMContentLoaded",()=>{nt()});function w(){return et}function C(){return _e}function rt(){return tt}const Le=document.getElementById("canvas"),ot=Le.getContext("2d");if(ot===null)throw Error("2d rendering context not supported");const h=ot;h.font="35pt arial";const Tt=document.getElementById("graphString"),Pt=document.getElementById("atomBox"),it=document.getElementById("atomBoxes");it.addEventListener("input",Et);function k(e,t){const n=e.ellipse;if(n!==null){h.strokeStyle=t;const o=n.center;h.beginPath(),h.ellipse(o.x+l.x,o.y+l.y,n.radiusX,n.radiusY,0,0,2*Math.PI),h.stroke()}}function T(e,t,n){h.textBaseline="bottom";const o=h.measureText(e.identifier);h.fillStyle=t,h.strokeStyle=t,h.beginPath(),h.fillText(e.identifier,e.origin.x+l.x,e.origin.y+l.y),(it.checked||Pt.checked&&n)&&h.rect(e.origin.x+l.x,e.origin.y+l.y-o.actualBoundingBoxAscent,e.width,e.height),h.stroke()}function st(e,t,n){h.beginPath(),h.strokeStyle=n;const o=e.x-t.x+l.x,s=e.y-t.y+l.y;h.rect(e.x,e.y,-o,-s),h.stroke()}function Et(){u(r.tree)}function lt(){h.clearRect(0,0,Le.width,Le.height)}function u(e){Tt.innerHTML=e.toString(),lt(),ct(e.sheet)}function ct(e){for(let t=0;e.children.length>t;t++)e.children[t]instanceof f?kt(e.children[t]):ct(e.children[t]);e.ellipse instanceof H&&(h.strokeStyle=rt(),h.beginPath(),h.ellipse(e.ellipse.center.x+l.x,e.ellipse.center.y+l.y,e.ellipse.radiusX,e.ellipse.radiusY,0,0,2*Math.PI),h.stroke())}function kt(e){T(e,rt(),!1)}let De,l=new c(0,0),ve;function St(e){De=new c(e.x-l.x,e.y-l.y),ve=!1}function It(e){ve||(l=new c(e.x-De.x,e.y-De.y),u(r.tree))}function Lt(){ve=!0,u(r.tree)}const Dt=document.getElementById("showRect"),Ot=document.getElementById("mode");let fe,we;function Bt(e){fe=new c(e.clientX-l.x,e.clientY-l.y),we=!1}function vt(e){const t=new a(new H(new c(0,0),0,0)),n=new c(e.clientX-l.x,e.clientY-l.y);if(u(r.tree),t.ellipse=ye(fe,n),!we){const s=r.tree.canInsert(t)&&R(t.ellipse)?C():w();k(t,s),Dt.checked&&st(fe,n,s)}}function $t(e){const t=new c(e.clientX-l.x,e.clientY-l.y),n=new a(ye(fe,t));r.tree.canInsert(n)&&!we&&R(n.ellipse)&&r.tree.insert(n),u(r.tree)}function At(){we=!0,u(r.tree)}function ye(e,t){const n=new c((t.x-e.x)/2+e.x,(t.y-e.y)/2+e.y),o=e.x-t.x,s=e.y-t.y,d=Math.abs(o),O=Math.abs(s);let S,I;if(Ot.value==="circumscribed"){const oe=Math.floor(n.distance(t));I=Math.floor(oe*(O/d)),S=Math.floor(oe*(d/O))}else S=d/2,I=O/2;return new H(n,S,I)}function R(e){return e.radiusX>15&&e.radiusY>15}const Xt=document.getElementById("canvas"),at=Xt.getContext("2d");if(at===null)throw Error("2d rendering context not supported");const Yt=at,Ft=document.getElementById("atomDisplay");let ge,$e,m=ce("A",new c(0,0));function Nt(e){new RegExp(/^[A-Za-z]$/).test(e.key)&&(m=ce(e.key,new c(m.origin.x,m.origin.y)),m.origin.x!==0&&m.origin.y!==0&&$e&&Ae())}function Rt(e){ge=!1,$e=!0,m=ce(m.identifier,new c(e.clientX-l.x,e.clientY-l.y)),Ae()}function Ht(e){m=ce(m.identifier,new c(e.clientX-l.x,e.clientY-l.y)),Ae()}function zt(e){m=ce(m.identifier,new c(e.clientX-l.x,e.clientY-l.y)),r.tree.canInsert(m)&&!ge&&r.tree.insert(m),u(r.tree),$e=!1}function Ut(){ge=!0,u(r.tree)}function ce(e,t){Ft.innerHTML=e;const n=Yt.measureText(e);return new f(e,new c(t.x,t.y),n.width,n.fontBoundingBoxDescent+n.actualBoundingBoxAscent)}function Ae(){u(r.tree),ge||(r.tree.canInsert(m)?T(m,C(),!0):T(m,w(),!0))}async function Vt(e,t){const n=JSON.stringify(t,null,"	"),o=await e.createWritable();await o.write(n),await o.close()}function Oe(e){if(typeof e=="string"){const n=JSON.parse(e).internalSheet.internalChildren,o=new ne,s=[];return n.forEach(d=>{Object.prototype.hasOwnProperty.call(d,"internalEllipse")?s.push(ut(d)):s.push(ft(d))}),o.sheet.children=s,o}return null}function ut(e){const t=new H(new c(e.internalEllipse.center.x,e.internalEllipse.center.y),e.internalEllipse.radiusX,e.internalEllipse.radiusY),n=[];return e.internalChildren.forEach(o=>{"internalEllipse"in o?n.push(ut(o)):n.push(ft(o))}),new a(t,n)}function ft(e){const t=e.internalIdentifier,n=new c(e.internalOrigin.x,e.internalOrigin.y);return new f(t,n,e.internalWidth,e.internalHeight)}function re(e,t){if(e.ellipse!==null){const n=$(e,t);if(!r.tree.canInsert(n))return!1}for(let n=0;n<e.children.length;n++){if(e.children[n]instanceof a&&e.children[n].ellipse!==null&&!re(e.children[n],t))return!1;if(e.children[n]instanceof f){let o=e.children[n];if(o=P(o,t),!r.tree.canInsert(o))return!1}}return!0}function pe(e,t,n){if(e instanceof a&&e.ellipse!==null){const o=$(e,n);if(k(o,t),e.children.length!==0)for(let s=0;s<e.children.length;s++)pe(e.children[s],t,n)}else if(e instanceof f){const o=P(e,n);T(o,t,!0)}}function xe(e,t){if(e instanceof a&&e.ellipse!==null){const n=$(e,t);if(r.tree.insert(n),e.children.length!==0)for(let o=0;o<e.children.length;o++)xe(e.children[o],t)}else if(e instanceof f){const n=P(e,t);r.tree.insert(n)}}function $(e,t){if(e.ellipse!==null)return new a(new H(new c(e.ellipse.center.x+t.x-l.x,e.ellipse.center.y+t.y-l.y),e.ellipse.radiusX,e.ellipse.radiusY));throw new Error("Cannot alter the position of a cut without an ellipse.")}function P(e,t){return new f(e.identifier,new c(e.origin.x+t.x-l.x,e.origin.y+t.y-l.y),e.width,e.height)}function me(e,t){if(e instanceof f)T(e,t,!0);else if(e instanceof a){k(e,t);for(let n=0;n<e.children.length;n++)me(e.children[n],t)}}let A,y=null,U;function Gt(e){if(A=new c(e.x-l.x,e.y-l.y),y=r.tree.getLowestNode(A),y!==r.tree.sheet&&y!==null){const t=r.tree.getLowestParent(A);if(t!==null&&t.remove(A),y instanceof a&&y.children.length!==0){for(let n=0;n<y.children.length;n++)r.tree.insert(y.children[n]);y.children=[]}U=!0}else U=!1}function Wt(e){if(U){const t=new c(e.x-A.x,e.y-A.y);if(y instanceof a){const n=$(y,t);u(r.tree);const o=r.tree.canInsert(n)?C():w();k(n,o)}else if(y instanceof f){const n=P(y,t);u(r.tree);const o=r.tree.canInsert(n)?C():w();T(n,o,!0)}}}function jt(e){if(U){const t=new c(e.x-A.x,e.y-A.y);if(y instanceof a){const n=$(y,t);r.tree.canInsert(n)?r.tree.insert(n):r.tree.insert(y)}else if(y instanceof f){const n=P(y,t);r.tree.canInsert(n)?r.tree.insert(n):r.tree.insert(y)}u(r.tree)}U=!1}function qt(){U&&y!==null&&r.tree.insert(y),U=!1,u(r.tree)}let X,p=null,V;function Jt(e){if(X=new c(e.x-l.x,e.y-l.y),p=r.tree.getLowestNode(X),p!==r.tree.sheet&&p!==null){const t=r.tree.getLowestParent(X);t!==null&&t.remove(X),V=!0}else V=!1}function Kt(e){if(V){const t=new c(e.x-X.x,e.y-X.y);if(u(r.tree),p instanceof a){const n=re(p,t)?C():w();pe(p,n,t)}else if(p instanceof f){const n=P(p,t),o=r.tree.canInsert(n)?C():w();T(n,o,!0)}}}function Zt(e){if(V){const t=new c(e.x-X.x,e.y-X.y);if(p instanceof a)re(p,t)?xe(p,t):r.tree.insert(p);else if(p instanceof f){const n=P(p,t);r.tree.canInsert(n)?r.tree.insert(n):r.tree.insert(p)}}u(r.tree),V=!1}function Qt(){V&&p!==null&&r.tree.insert(p),V=!1,u(r.tree)}let J,L=null,K;function _t(e){J=new c(e.x-l.x,e.y-l.y);const t=r.tree.getLowestNode(J);t!==r.tree.sheet&&t!==null?(t instanceof a?(L=$(t,new c(0,0)),L.children=[]):t instanceof f&&(L=t),K=!0):K=!1}function en(e){if(K){const t=new c(e.x-J.x,e.y-J.y);if(L instanceof a){const n=$(L,t);u(r.tree);const o=r.tree.canInsert(n)?C():w();k(n,o)}else if(L instanceof f){const n=P(L,t);u(r.tree);const o=r.tree.canInsert(n)?C():w();T(n,o,!0)}}}function tn(e){if(K){const t=new c(e.x-J.x,e.y-J.y);if(L instanceof a&&L.ellipse!==null){const n=$(L,t);r.tree.canInsert(n)&&r.tree.insert(n)}else if(L instanceof f){const n=P(L,t);r.tree.canInsert(n)&&r.tree.insert(n)}u(r.tree)}K=!1}function nn(){K=!1,u(r.tree)}let Z,E=null,Q;function rn(e){Z=new c(e.x-l.x,e.y-l.y),E=r.tree.getLowestNode(Z),E!==r.tree.sheet&&E!==null?Q=!0:Q=!1}function on(e){if(Q){const t=new c(e.x-Z.x,e.y-Z.y);if(u(r.tree),E instanceof a){const n=re(E,t)?C():w();pe(E,n,t)}else if(E instanceof f){const n=P(E,t),o=r.tree.canInsert(n)?C():w();T(n,o,!0)}}}function sn(e){if(Q){const t=new c(e.x-Z.x,e.y-Z.y);if(E instanceof a)re(E,t)&&xe(E,t);else if(E instanceof f){const n=P(E,t);r.tree.canInsert(n)&&r.tree.insert(n)}}u(r.tree),Q=!1}function ln(){Q=!1,u(r.tree)}let He,g=null,_;function cn(e){He=new c(e.x-l.x,e.y-l.y),g=r.tree.getLowestNode(He),g!==null&&(_=!0,g instanceof f?T(g,w(),!0):k(g,w()))}function an(e){const t=new c(e.x-l.x,e.y-l.y),n=r.tree.getLowestNode(t);g!==null&&g!==n&&(_=!0,u(r.tree),n===null?(g=null,_=!1):(g=n,g instanceof f?T(g,w(),!0):k(g,w())))}function un(e){const t=new c(e.x-l.x,e.y-l.y);if(_){const n=r.tree.getLowestParent(t);if(n!==null&&n.remove(t),g!==r.tree.sheet&&g instanceof a&&g.children.length!==0)for(let o=0;o<g.children.length;o++)r.tree.insert(g.children[o])}u(r.tree),g=null,_=!1}function fn(){g=null,_=!1}let ze,B=null,ee;function dn(e){ze=new c(e.x-l.x,e.y-l.y),B=r.tree.getLowestNode(ze),B!==null&&(ee=!0,me(B,w()))}function hn(e){const t=new c(e.x-l.x,e.y-l.y),n=r.tree.getLowestNode(t);B!==null&&B!==r.tree.getLowestNode(t)&&(ee=!0,u(r.tree),n===null?(B=null,ee=!1):(B=n,me(B,w())))}function wn(e){const t=new c(e.x-l.x,e.y-l.y);if(ee){const n=r.tree.getLowestParent(t);n!==null?n.remove(t):r.tree.clear(),u(r.tree)}B=null,ee=!1}function yn(){B=null,ee=!1}let ae,b=null,Me;function gn(e){if(r.selectForProof.sheet=new ne().sheet,ae=new c(e.x,e.y),b=r.tree.getLowestNode(ae),b!==null){if(Me=!0,b!==r.tree.sheet){const t=r.tree.getLowestParent(ae);t!==null&&t.remove(ae),u(r.tree)}else lt();b instanceof f?T(b,C(),!0):dt(b,C()),b!==r.tree.sheet&&r.tree.insert(b)}}function pn(){b=null,Me=!1,u(r.tree)}function xn(){if(Me){if(b instanceof a&&b.ellipse===null)for(let e=0;e<b.children.length;e++)r.selectForProof.insert(b.children[e]);else r.selectForProof.insert(b);u(r.tree),alert("Graph selected, you may now toggle to proof mode")}}function mn(){b=null,Me=!1,u(r.tree)}function dt(e,t){if(e instanceof f)T(e,t,!0);else if(e instanceof a){k(e,t);for(let n=0;n<e.children.length;n++)dt(e.children[n],t)}}const Mn=document.getElementById("showRect");let de,be;function bn(e){de=new c(e.clientX-l.x,e.clientY-l.y),be=!1}function Cn(e){const t=new c(e.clientX-l.x,e.clientY-l.y),n=new a(ye(de,t)),o=new a(ht(n.ellipse));if(u(r.tree),!be&&n.ellipse!==null&&o.ellipse!==null){const d=r.tree.canInsert(n)&&R(n.ellipse)&&r.tree.canInsert(o)&&R(o.ellipse)?C():w();k(n,d),k(o,d),Mn.checked&&st(de,t,d)}}function Tn(e){const t=new c(e.clientX-l.x,e.clientY-l.y),n=new a(ye(de,t)),o=new a(ht(n.ellipse));!be&&n.ellipse!==null&&o.ellipse!==null&&r.tree.canInsert(n)&&R(n.ellipse)&&r.tree.canInsert(o)&&R(o.ellipse)&&(r.tree.insert(n),r.tree.insert(o)),u(r.tree)}function Pn(){be=!0,u(r.tree)}function ht(e){return new H(e.center,Math.floor(e.radiusX*.8),Math.floor(e.radiusY*.8))}let N=null,he;function En(e){const t=new c(e.x-l.x,e.y-l.y);N=r.tree.getLowestNode(t),wt()}function kn(e){const t=new c(e.x-l.x,e.y-l.y);N=r.tree.getLowestNode(t),u(r.tree),wt()}function Sn(e){const t=new c(e.x-l.x,e.y-l.y);if(he&&N instanceof a){const n=r.tree.getLowestParent(t),o=N.children[0];if(n!==null&&o instanceof a){n.remove(t);for(let s=0;s<o.children.length;s++)r.tree.insert(o.children[s])}}u(r.tree)}function In(){he=!1,u(r.tree)}function Ln(e){return e.children.length===1&&e.children[0]instanceof a&&N!==r.tree.sheet}function Dn(e){k(e,w()),e.children[0]instanceof a&&k(e.children[0],w())}function wt(){N instanceof a&&Ln(N)?(he=!0,Dn(N)):he=!1}let Y=null,se;function On(e){const t=new c(e.x-l.x,e.y-l.y);Y=r.tree.getLowestNode(t),yt()}function Bn(e){const t=new c(e.x-l.x,e.y-l.y);Y=r.tree.getLowestNode(t),u(r.tree),yt()}function vn(e){if(se){const t=new c(e.x-l.x,e.y-l.y),n=r.tree.getLowestParent(t);n!==null&&n.remove(t),u(r.tree)}Y=null,se=!1}function $n(){Y=null,se=!1,u(r.tree)}function yt(){Y!==r.tree.sheet&&Y!==null&&r.tree.getLevel(Y)%2===0?(se=!0,me(Y,w())):se=!1}let ke=!0,Ue=null,Ve=null,Ge=i.none,We=i.none;const je=document.getElementById("DrawButtons"),qe=document.getElementById("ProofButtons");function An(){if(ke=!ke,ke){je.style.display="block",qe.style.display="none",Ve=JSON.stringify(r.tree),We=r.toolState;const e=Oe(Ue);if(e!==null)r.tree.sheet=e.sheet;else throw Error("invalid cached AEG");r.toolState=Ge}else{je.style.display="none",qe.style.display="block",Ue=JSON.stringify(r.tree),Ge=r.toolState;const e=Oe(Ve);if(e!==null){r.tree.sheet=e.sheet;for(let t=0;t<r.selectForProof.sheet.children.length;t++){const n=r.selectForProof.sheet.children[t];try{r.tree.insert(n)}catch{console.log("Could not insert "+n)}}}else r.tree.sheet=r.selectForProof.sheet;r.toolState=We,r.selectForProof.sheet=new ne().sheet}u(r.tree)}let D,x=null,te;const W=new c(1,1);function Xn(e){if(D=new c(e.x-l.x,e.y-l.y),x=r.tree.getLowestNode(D),x!==r.tree.sheet&&x instanceof a){te=!0;const t=r.tree.getLowestParent(D);t!==null&&t.remove(D);for(let n=0;n<x.children.length;n++)r.tree.insert(x.children[n]);Rn(),x.children=[]}}function Yn(e){if(te){const t=new c((e.x-l.x-D.x)/2,(e.y-l.y-D.y)/2);if(x instanceof a){const n=gt(x,t);if(n.ellipse!==null){u(r.tree);const s=r.tree.canInsert(n)&&R(n.ellipse)?C():w();k(n,s)}}}}function Fn(e){if(te){const t=new c((e.x-l.x-D.x)/2,(e.y-l.y-D.y)/2);if(x instanceof a){const n=gt(x,t);n.ellipse!==null&&(r.tree.canInsert(n)&&R(n.ellipse)?r.tree.insert(n):r.tree.insert(x))}u(r.tree),te=!1}}function Nn(){te&&x!==null&&r.tree.insert(x),te=!1,u(r.tree)}function gt(e,t){if(e.ellipse!==null)return new a(new H(new c(e.ellipse.center.x+t.x,e.ellipse.center.y+t.y),e.ellipse.radiusX+t.x*W.x,e.ellipse.radiusY+t.y*W.y));throw new Error("Cannot alter the position of a cut without an ellipse.")}function Rn(){if(x instanceof a&&x.ellipse!==null){const e=x.ellipse,t=[new c(e.center.x-e.radiusX,e.center.y),new c(e.center.x,e.center.y-e.radiusY),new c(e.center.x+e.radiusX,e.center.y),new c(e.center.x,e.center.y+e.radiusY)];t[0].distance(D)>=t[2].distance(D)?W.x=1:W.x=-1,t[1].distance(D)>=t[3].distance(D)?W.y=1:W.y=-1}}let z,M=null,Be=null,le;function Hn(e){z=new c(e.x-l.x,e.y-l.y),M=r.tree.getLowestNode(z),Be=r.tree.getLowestParent(z),le=M!==r.tree.sheet&&M!==null}function zn(e){if(le){const t=new c(e.x-z.x,e.y-z.y);u(r.tree);const n=new c(e.x-l.x,e.y-l.y),o=pt(t,n)?C():w();if(M instanceof a)pe(M,o,t);else if(M instanceof f){const s=P(M,t);T(s,o,!0)}}}function Un(e){if(le){const t=new c(e.x-z.x,e.y-z.y);if(pt(t,new c(e.x-l.x,e.y-l.y))){if(M instanceof a)xe(M,t);else if(M instanceof f){const n=P(M,t);r.tree.insert(n)}}}u(r.tree),le=!1}function Vn(){le=!1,u(r.tree)}function pt(e,t){return Be!==null&&Be.containsPoint(t)&&(M instanceof a&&re(M,e)&&xt(r.tree.sheet,$(M,e).ellipse)||M instanceof f&&r.tree.canInsert(P(M,e)))}function xt(e,t){for(let n=0;n<e.children.length;n++)if(e.children[n]instanceof a){if(e.children[n].ellipse instanceof H&&(t.contains(e.children[n].ellipse)||!xt(e.children[n],t)))return!1}else if(e.children[n]instanceof f&&t.contains(e.children[n].calcRect()))return!1;return!0}const v=document.getElementById("canvas");v.width=window.innerWidth;v.height=window.innerHeight;const mt=v.getContext("2d");if(mt===null)throw Error("2d rendering context not supported");const Gn=mt;Gn.font="35pt arial";const Se=document.getElementById("cutTools"),Je=document.getElementById("atomTools");window.addEventListener("keydown",Jn);v.addEventListener("mousedown",Kn);v.addEventListener("mousemove",Zn);v.addEventListener("mouseup",Qn);v.addEventListener("mouseout",_n);v.addEventListener("mouseenter",er);let Xe=!1,Ye=!0;window.atomTool=i.atomTool;window.cutTool=i.cutTool;window.dragTool=i.dragTool;window.saveMode=Mt;window.loadMode=qn;window.moveSingleTool=i.moveSingleTool;window.moveMultiTool=i.moveMultiTool;window.copySingleTool=i.copySingleTool;window.copyMultiTool=i.copyMultiTool;window.deleteSingleTool=i.deleteSingleTool;window.deleteMultiTool=i.deleteMultiTool;window.toProofMode=i.toProofMode;window.doubleCutInsertionTool=i.doubleCutInsertionTool;window.resizeTool=i.resizeTool;window.doubleCutDeletionTool=i.doubleCutDeletionTool;window.erasureTool=i.erasureTool;window.iterationTool=i.iterationTool;window.setTool=jn;window.setHighlight=Wn;window.toggleHandler=An;function Wn(e,t){const n=document.getElementById(t);switch(e){case"mousedown":n==null||n.classList.remove("no-highlight");break;case"mouseleave":n==null||n.classList.add("no-highlight");break}}const Ke=document.querySelectorAll(".modeButton");Ke.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("modeButtonPressed"),Ke.forEach(t=>{t!==e&&t.classList.remove("modeButtonPressed")})})});function jn(e){switch(r.toolState=e,Se.style.display="none",Je.style.display="none",r.toolState){case i.atomTool:Je.style.display="block";break;case i.cutTool:Se.style.display="block";break;case i.doubleCutInsertionTool:Se.style.display="block";break}}async function Mt(){if("showSaveFilePicker"in window){const e=await window.showSaveFilePicker({excludeAcceptAllOption:!0,suggestedName:"AEG Tree",startIn:"downloads",types:[{description:"JSON Files",accept:{"text/json":[".json"]}}]});Vt(e,r.tree)}else{const e=document.createElement("a");e.href=JSON.stringify(r.tree,null,"	"),e.download="AEGTree.json",e.click()}}async function qn(){const[e]=await window.showOpenFilePicker({excludeAcceptAllOption:!0,multiple:!1,startIn:"downloads",types:[{description:"JSON Files",accept:{"text/json":[".json"]}}]}),t=await e.getFile(),n=new FileReader;n.addEventListener("load",()=>{const o=n.result,s=Oe(o);s instanceof ne&&(r.tree=s,u(r.tree))}),n.readAsText(t)}function Jn(e){if(e.ctrlKey&&e.key==="s")e.preventDefault(),Mt();else switch(r.toolState){case i.atomTool:Nt(e);break}}function Kn(e){switch(r.toolState){case i.cutTool:Bt(e);break;case i.atomTool:Rt(e);break;case i.dragTool:St(e);break;case i.moveSingleTool:Gt(e);break;case i.moveMultiTool:Jt(e);break;case i.copySingleTool:_t(e);break;case i.copyMultiTool:rn(e);break;case i.deleteSingleTool:cn(e);break;case i.deleteMultiTool:dn(e);break;case i.resizeTool:Xn(e);break;case i.toProofMode:gn(e);break;case i.doubleCutInsertionTool:bn(e);break;case i.doubleCutDeletionTool:En(e);break;case i.erasureTool:On(e);break;case i.iterationTool:Hn(e);break}Xe=!0}function Zn(e){if(Xe&&Ye)switch(r.toolState){case i.cutTool:vt(e);break;case i.atomTool:Ht(e);break;case i.dragTool:It(e);break;case i.moveSingleTool:Wt(e);break;case i.moveMultiTool:Kt(e);break;case i.copySingleTool:en(e);break;case i.copyMultiTool:on(e);break;case i.deleteSingleTool:an(e);break;case i.deleteMultiTool:hn(e);break;case i.resizeTool:Yn(e);break;case i.toProofMode:pn();break;case i.doubleCutInsertionTool:Cn(e);break;case i.doubleCutDeletionTool:kn(e);break;case i.erasureTool:Bn(e);break;case i.iterationTool:zn(e);break}}function Qn(e){switch(r.toolState){case i.cutTool:$t(e);break;case i.atomTool:zt(e);break;case i.moveSingleTool:jt(e);break;case i.moveMultiTool:Zt(e);break;case i.copySingleTool:tn(e);break;case i.copyMultiTool:sn(e);break;case i.deleteSingleTool:un(e);break;case i.deleteMultiTool:wn(e);break;case i.resizeTool:Fn(e);break;case i.toProofMode:xn();break;case i.doubleCutInsertionTool:Tn(e);break;case i.doubleCutDeletionTool:Sn(e);break;case i.erasureTool:vn(e);break;case i.iterationTool:Un(e);break}Xe=!1}function _n(){switch(r.toolState){case i.cutTool:At();break;case i.atomTool:Ut();break;case i.dragTool:Lt();break;case i.moveSingleTool:qt();break;case i.moveMultiTool:Qt();break;case i.copySingleTool:nn();break;case i.copyMultiTool:ln();break;case i.deleteSingleTool:fn();break;case i.deleteMultiTool:yn();break;case i.resizeTool:Nn();break;case i.toProofMode:mn();break;case i.doubleCutInsertionTool:Pn();break;case i.doubleCutDeletionTool:In();break;case i.erasureTool:$n();break;case i.iterationTool:Vn();break}Ye=!1}function er(){Ye=!0}function tr(){v.width=window.innerWidth,v.height=window.innerHeight}window.onresize=tr;
