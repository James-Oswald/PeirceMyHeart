(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();class h{constructor(e,t,s){this.rect=s,this.identifier=e,this.origin=t}containsPoint(e){return this.rect.containsPoint(e)}containsNode(e){return e instanceof h?this.rect.containsShape(e.rect):this.rect.containsShape(e.ellipse)}toString(){return"An atom representing the proposition: "+this.identifier+" and Boundary box of: "+this.rect.toString()}}class m{constructor(e,t){this.x=e??0,this.y=t??0}toString(){return"X: "+this.x+", Y: "+this.y}}class x{constructor(e,t,s){this.startVertex=e,this.width=t,this.height=s}getCorners(){const e=[this.startVertex];return e.push(new m(this.startVertex.x+this.width,this.startVertex.y)),e.push(new m(this.startVertex.x+this.width,this.startVertex.y+this.height)),e.push(new m(this.startVertex.x,this.startVertex.y+this.height)),e}containsPoint(e){const t=this.getCorners();return t[0].x<=e.x&&t[1].x>=e.x&&t[1].y<=e.y&&t[2].y>=e.y}overlaps(e){if(e instanceof x){const t=this.getCorners(),s=e.getCorners();for(let r=0;r<4;r++)if(this.containsPoint(s[r])||e.containsPoint(t[r]))return!0;return!1}else return!1}containsShape(e){if(e instanceof x){const t=e.getCorners();return this.containsPoint(t[0])&&this.containsPoint(t[2])}else return!0}toString(){return`A rectangle with
Top Left Vertex at: `+this.startVertex.toString()+", Width: "+this.width+", Height: "+this.height}}class A{constructor(e,t,s){this.center=e??new m,this.radiusX=t??0,this.radiusY=s??0;const r=new m(this.center.x-this.radiusX,this.center.y-this.radiusY);this.boundingBox=new x(r,this.radiusX*2,this.radiusY*2)}containsPoint(e){return!1}overlaps(e){return!1}containsShape(e){return!1}toString(){return"An ellipse with Center at: "+this.center.toString()+", Horizontal Radius of: "+this.radiusX+", Vertical Radius of: "+this.radiusY}}class a{constructor(e,t){this.ellipse=e??new A,this.children=t??[]}getCurrentCut(e){for(let t=0;t<this.children.length;t++)if(this.children[t]instanceof a&&this.children[t].containsNode(e))return this.getCurrentCut(this.children[t]);return this}containsPoint(e){return this.ellipse===null?!0:this.ellipse.containsPoint(e)}containsNode(e){return this.ellipse===null?!0:e instanceof h?this.ellipse.containsShape(e.rect):this.ellipse.containsShape(e.ellipse)}remove(e){if(this.containsPoint(e)){let t=!0;for(let s=0;s<this.children.length;s++)if(this.children[s].containsPoint(e))return t=!1,this.children[s]instanceof a?this.children[s].remove(e):(this.children=this.children.splice(s,1),!0);if(t)return!0}return!1}toString(){let e;return this.ellipse===null?e="Sheet of Assertion of the AEG Tree":e=`A cut node with boundary box of 
`+this.ellipse.toString(),this.children.length>0&&(e+=`, 
With nested nodes: `+this.children.toString()),e}}class W{constructor(e){this.sheet=e??new a,this.sheet.ellipse=null}verify(){return this.verifyAEG(this.sheet)}verifyAEG(e){for(let t=0;t<e.children.length;t++){if(!e.containsNode(e.children[t]))return!1;for(let s=t+1;s<e.children.length;s++)if(this.overlaps(e.children[t],e.children[s]))return!1}for(let t=0;t<e.children.length;t++)if(e.children[t]instanceof a&&!this.verifyAEG(e.children[t]))return!1;return!0}canInsert(e){const t=this.sheet.getCurrentCut(e);for(let s=0;s<t.children.length;s++)if(this.overlaps(e,t.children[s]))return!1;return!0}insert(e){if(!this.canInsert(e))throw new Error("Insertion failed. "+e+" had a collision.");const t=this.sheet.getCurrentCut(e),s=t.children;if(t.children.push(e),e instanceof a)for(let r=0;r<s.length;r++)e.containsNode(s[r])&&(e.children.push(s[r]),t.children=t.children.splice(r,1))}remove(e){this.sheet.remove(e)}overlaps(e,t){let s,r;return e instanceof h?t instanceof h?e.rect.overlaps(t.rect):(s=t.ellipse,e.rect.overlaps(s)):t instanceof h?(s=e.ellipse,s.overlaps(t.rect)):(s=e.ellipse,r=t.ellipse,s.overlaps(r))}}const i=document.getElementById("canvas"),Y=i.getContext("2d"),q=document.getElementById("showRect"),D=document.getElementById("mode");if(Y===null)throw Error("2d rendering context not supported");const c=Y;let R,L;function U(n,e){const t=n.x-e.x,s=n.y-e.y;return Math.sqrt(t*t+s*s)}function j(n,e){const t={x:(e.x-n.x)/2+n.x,y:(e.y-n.y)/2+n.y},s=n.x-e.x,r=n.y-e.y,l=Math.abs(s),u=Math.abs(r);let E,g;if(D.value==="circumscribed"){const X=Math.floor(U(t,e));E=Math.floor(X*(u/l)),g=Math.floor(X*(l/u))}else g=l/2,E=u/2;return q.checked&&(c.beginPath(),c.rect(n.x,n.y,-s,-r),c.stroke()),c.beginPath(),c.ellipse(t.x,t.y,E,g,Math.PI/2,0,2*Math.PI),c.stroke(),L=new A(t,E,g),L}function z(){i.addEventListener("mousedown",T)}function T(n){R={x:n.clientX,y:n.clientY},i.addEventListener("mousemove",M),i.addEventListener("mouseup",S),i.addEventListener("mouseout",b)}function M(n){const e={x:n.clientX,y:n.clientY};c.clearRect(0,0,i.width,i.height),y(p.sheet),L=j(R,e)}function S(){const n=new a(L);p.canInsert(n)&&p.insert(n),i.removeEventListener("mousemove",M),i.removeEventListener("mouseup",S),i.removeEventListener("mouseout",b)}function b(){i.removeEventListener("mousemove",M),i.removeEventListener("mouseup",S),i.removeEventListener("mouseout",b),c.clearRect(0,0,i.width,i.height),y(p.sheet)}function F(){i.removeEventListener("mousedown",T)}const o=document.getElementById("canvas"),$=o.getContext("2d");if($===null)throw Error("2d rendering context not supported");const d=$;let f,w;function K(){window.addEventListener("keydown",k)}function k(n){w=n.key,o.addEventListener("mousedown",G)}function G(n){const e={x:n.clientX,y:n.clientY};f=e,d.fillText(w,e.x,e.y),d.stroke(),o.addEventListener("mousemove",I),o.addEventListener("mouseup",B),o.addEventListener("mouseout",V)}function I(n){f={x:n.clientX,y:n.clientY},d.clearRect(0,0,o.width,o.height),y(p.sheet),d.fillText(w,f.x,f.y),d.stroke()}function B(){const n=d.measureText(w),e=new x(new m(f.x,f.y+n.actualBoundingBoxAscent),n.width,n.fontBoundingBoxDescent+n.actualBoundingBoxAscent),t=new h(w,f,e);p.insert(t),o.removeEventListener("mousemove",I),o.removeEventListener("mouseup",B),o.removeEventListener("mouseOut",V)}function V(){o.removeEventListener("mousemove",I),o.removeEventListener("mouseup",B),o.removeEventListener("mouseOut",V),d.clearRect(0,0,o.width,o.height),y(p.sheet)}function J(){o.removeEventListener("mousedown",G),window.removeEventListener("keydown",k)}const O=document.getElementById("canvas");O.width=window.innerWidth;O.height=window.innerHeight;const H=O.getContext("2d");if(H===null)throw Error("2d rendering context not supported");const v=H;v.font="35pt arial";let P=!1,C=!1;const p=new W;window.atomMode=Z;window.ellipseMode=Q;function Q(){P=!0,z(),C&&(J(),C=!1)}function Z(){C=!0,K(),P&&(F(),P=!1)}function y(n){for(let e=0;n.children.length>e;e++)n.children[e]instanceof h?_(n.children[e]):y(n.children[e]);n.ellipse instanceof A&&(v.beginPath(),v.ellipse(n.ellipse.center.x,n.ellipse.center.y,n.ellipse.radiusX,n.ellipse.radiusY,Math.PI/2,0,2*Math.PI),v.stroke())}function _(n){v.fillText(n.identifier,n.origin.x,n.origin.y),v.stroke()}
