var Tc=Object.defineProperty;var bc=(a,e,t)=>e in a?Tc(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Tn=(a,e,t)=>bc(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ns="170",Ac=0,ho=1,wc=2,Ul=1,Cc=2,_n=3,In=0,Ft=1,ln=2,Dn=0,Mi=1,po=2,mo=3,go=4,Rc=5,Xn=100,Uc=101,Pc=102,Dc=103,Lc=104,Ic=200,Fc=201,Nc=202,Oc=203,Xa=204,Ya=205,Bc=206,kc=207,zc=208,Gc=209,Vc=210,Hc=211,Wc=212,Xc=213,Yc=214,qa=0,ja=1,Ka=2,bi=3,Za=4,Ja=5,Qa=6,$a=7,Os=0,qc=1,jc=2,Ln=0,Kc=1,Zc=2,Jc=3,Qc=4,$c=5,eu=6,tu=7,Pl=300,Ai=301,wi=302,es=303,ts=304,jr=306,ns=1e3,qn=1001,is=1002,nn=1003,nu=1004,dr=1005,qt=1006,fa=1007,jn=1008,Mn=1009,Dl=1010,Ll=1011,er=1012,Bs=1013,Zn=1014,vn=1015,tr=1016,ks=1017,zs=1018,Ci=1020,Il=35902,Fl=1021,Nl=1022,tn=1023,Ol=1024,Bl=1025,yi=1026,Ri=1027,kl=1028,Gs=1029,zl=1030,Vs=1031,Hs=1033,Or=33776,Br=33777,kr=33778,zr=33779,rs=35840,as=35841,ss=35842,os=35843,ls=36196,cs=37492,us=37496,fs=37808,hs=37809,ds=37810,ps=37811,ms=37812,gs=37813,_s=37814,vs=37815,xs=37816,Ss=37817,Ms=37818,ys=37819,Es=37820,Ts=37821,Gr=36492,bs=36494,As=36495,Gl=36283,ws=36284,Cs=36285,Rs=36286,iu=3200,Vl=3201,Hl=0,ru=1,Pn="",Xt="srgb",Pi="srgb-linear",Kr="linear",it="srgb",ri=7680,_o=519,au=512,su=513,ou=514,Wl=515,lu=516,cu=517,uu=518,fu=519,vo=35044,xo="300 es",xn=2e3,Xr=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,Us=180/Math.PI;function nr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Mt[a&255]+Mt[a>>8&255]+Mt[a>>16&255]+Mt[a>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[r&255]+Mt[r>>8&255]+Mt[r>>16&255]+Mt[r>>24&255]).toLowerCase()}function Lt(a,e,t){return Math.max(e,Math.min(t,a))}function hu(a,e){return(a%e+e)%e}function da(a,e,t){return(1-t)*a+t*e}function Wi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Dt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*n+e.x,this.y=i*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,r,n,i,s,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c)}set(e,t,r,n,i,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],f=r[7],h=r[2],d=r[5],g=r[8],_=n[0],m=n[3],p=n[6],y=n[1],M=n[4],v=n[7],R=n[2],w=n[5],b=n[8];return i[0]=s*_+o*y+l*R,i[3]=s*m+o*M+l*w,i[6]=s*p+o*v+l*b,i[1]=c*_+u*y+f*R,i[4]=c*m+u*M+f*w,i[7]=c*p+u*v+f*b,i[2]=h*_+d*y+g*R,i[5]=h*m+d*M+g*w,i[8]=h*p+d*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-r*i*u+r*o*l+n*i*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*i,d=c*i-s*l,g=t*f+r*h+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(n*c-u*r)*_,e[2]=(o*r-n*s)*_,e[3]=h*_,e[4]=(u*t-n*l)*_,e[5]=(n*i-o*t)*_,e[6]=d*_,e[7]=(r*l-c*t)*_,e[8]=(s*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,s,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new Xe;function Xl(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Yr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function du(){const a=Yr("canvas");return a.style.display="block",a}const So={};function Zi(a){a in So||(So[a]=!0,console.warn(a))}function pu(a,e,t){return new Promise(function(r,n){function i(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}function mu(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gu(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(a,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(a.r=Sn(a.r),a.g=Sn(a.g),a.b=Sn(a.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(a.applyMatrix3(this.spaces[e].toXYZ),a.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(a.r=Ei(a.r),a.g=Ei(a.g),a.b=Ei(a.b))),a},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Pn?Kr:this.spaces[a].transfer},getLuminanceCoefficients:function(a,e=this.workingColorSpace){return a.fromArray(this.spaces[e].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,e,t){return a.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}};function Sn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ei(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Mo=[.64,.33,.3,.6,.15,.06],yo=[.2126,.7152,.0722],Eo=[.3127,.329],To=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bo=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Pi]:{primaries:Mo,whitePoint:Eo,transfer:Kr,toXYZ:To,fromXYZ:bo,luminanceCoefficients:yo,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:Mo,whitePoint:Eo,transfer:it,toXYZ:To,fromXYZ:bo,luminanceCoefficients:yo,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});let ai;class _u{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ai===void 0&&(ai=Yr("canvas")),ai.width=e.width,ai.height=e.height;const r=ai.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let s=0;s<i.length;s++)i[s]=Sn(i[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Sn(t[r]/255)*255):t[r]=Sn(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vu=0;class Yl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?i.push(ma(n[s].image)):i.push(ma(n[s]))}else i=ma(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function ma(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?_u.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xu=0;class Tt extends Di{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,r=qn,n=qn,i=qt,s=jn,o=tn,l=Mn,c=Tt.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=nr(),this.name="",this.source=new Yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Pl;Tt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,r=0,n=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(d+1)/2,R=(p+1)/2,w=(u+h)/4,b=(f+_)/4,C=(g+m)/4;return M>v&&M>R?M<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(M),n=w/r,i=b/r):v>R?v<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(v),r=w/n,i=C/n):R<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(R),r=b/i,n=C/i),this.set(r,n,i,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Su extends Di{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const i=new Tt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Su{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ql extends Tt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=nn,this.minFilter=nn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mu extends Tt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=nn,this.minFilter=nn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,s,o){let l=r[n+0],c=r[n+1],u=r[n+2],f=r[n+3];const h=i[s+0],d=i[s+1],g=i[s+2],_=i[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),w=Math.atan2(R,p*y);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const v=o*y;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,n,i,s){const o=r[n],l=r[n+1],c=r[n+2],u=r[n+3],f=i[s],h=i[s+1],d=i[s+2],g=i[s+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(n/2),f=o(i/2),h=l(r/2),d=l(n/2),g=l(i/2);switch(s){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=r+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(s-n)*d}else if(r>o&&r>f){const d=2*Math.sqrt(1+r-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(i+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-r-f);this._w=(i-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-r-o);this._w=(s-n)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*o+n*c-i*l,this._y=n*u+s*l+i*o-r*c,this._z=i*u+s*c+r*l-n*o,this._w=s*u-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*f+this._w*h,this._x=r*f+this._x*h,this._y=n*f+this._y*h,this._z=i*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ao.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ao.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*r),u=2*(o*t-i*n),f=2*(i*r-s*t);return this.x=t+l*c+s*f-o*u,this.y=r+l*u+o*c-i*f,this.z=n+l*f+i*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new te,Ao=new ir;class Qn{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=i.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Jt):Jt.fromBufferAttribute(i,s),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pr.copy(r.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),mr.subVectors(this.max,Xi),si.subVectors(e.a,Xi),oi.subVectors(e.b,Xi),li.subVectors(e.c,Xi),bn.subVectors(oi,si),An.subVectors(li,oi),Nn.subVectors(si,li);let t=[0,-bn.z,bn.y,0,-An.z,An.y,0,-Nn.z,Nn.y,bn.z,0,-bn.x,An.z,0,-An.x,Nn.z,0,-Nn.x,-bn.y,bn.x,0,-An.y,An.x,0,-Nn.y,Nn.x,0];return!_a(t,si,oi,li,mr)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,si,oi,li,mr))?!1:(gr.crossVectors(bn,An),t=[gr.x,gr.y,gr.z],_a(t,si,oi,li,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new te,new te,new te,new te,new te,new te,new te,new te],Jt=new te,pr=new Qn,si=new te,oi=new te,li=new te,bn=new te,An=new te,Nn=new te,Xi=new te,mr=new te,gr=new te,On=new te;function _a(a,e,t,r,n){for(let i=0,s=a.length-3;i<=s;i+=3){On.fromArray(a,i);const o=n.x*Math.abs(On.x)+n.y*Math.abs(On.y)+n.z*Math.abs(On.z),l=e.dot(On),c=t.dot(On),u=r.dot(On);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yu=new Qn,Yi=new te,va=new te;class Zr{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):yu.setFromPoints(e).getCenter(r);let n=0;for(let i=0,s=e.length;i<s;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Yi,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(va)),this.expandByPoint(Yi.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new te,xa=new te,_r=new te,wn=new te,Sa=new te,vr=new te,Ma=new te;class Eu{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){xa.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(xa);const i=e.distanceTo(t)*.5,s=-this.direction.dot(_r),o=wn.dot(this.direction),l=-wn.dot(_r),c=wn.lengthSq(),u=Math.abs(1-s*s);let f,h,d,g;if(u>0)if(f=s*l-o,h=s*o-l,g=i*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h=-i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*i+o)),h=f>0?-i:Math.min(Math.max(-i,-l),i),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-i,-l),i),d=h*(h+2*l)+c):(f=Math.max(0,-(s*i+o)),h=f>0?i:Math.min(Math.max(-i,-l),i),d=-f*f+h*(h+2*l)+c);else h=s>0?-i:i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(xa).addScaledVector(_r,h),d}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const r=dn.dot(this.direction),n=dn.dot(dn)-r*r,i=e.radius*e.radius;if(n>i)return null;const s=Math.sqrt(i-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(i=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||i>n||((i>r||isNaN(r))&&(r=i),(s<n||isNaN(n))&&(n=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,r,n,i){Sa.subVectors(t,e),vr.subVectors(r,e),Ma.crossVectors(Sa,vr);let s=this.direction.dot(Ma),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(vr.crossVectors(wn,vr));if(l<0)return null;const c=o*this.direction.dot(Sa.cross(wn));if(c<0||l+c>s)return null;const u=-o*wn.dot(Ma);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,r,n,i,s,o,l,c,u,f,h,d,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c,u,f,h,d,g,_,m)}set(e,t,r,n,i,s,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=i,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/ci.setFromMatrixColumn(e,0).length(),i=1/ci.setFromMatrixColumn(e,1).length(),s=1/ci.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const h=s*u,d=s*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-s*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=s*u,t[9]=_-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,d=s*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=s*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tu,e,bu)}lookAt(e,t,r){const n=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Cn.crossVectors(r,zt),Cn.lengthSq()===0&&(Math.abs(r.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Cn.crossVectors(r,zt)),Cn.normalize(),xr.crossVectors(zt,Cn),n[0]=Cn.x,n[4]=xr.x,n[8]=zt.x,n[1]=Cn.y,n[5]=xr.y,n[9]=zt.y,n[2]=Cn.z,n[6]=xr.z,n[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],f=r[5],h=r[9],d=r[13],g=r[2],_=r[6],m=r[10],p=r[14],y=r[3],M=r[7],v=r[11],R=r[15],w=n[0],b=n[4],C=n[8],E=n[12],x=n[1],P=n[5],U=n[9],L=n[13],I=n[2],G=n[6],z=n[10],J=n[14],Y=n[3],j=n[7],q=n[11],D=n[15];return i[0]=s*w+o*x+l*I+c*Y,i[4]=s*b+o*P+l*G+c*j,i[8]=s*C+o*U+l*z+c*q,i[12]=s*E+o*L+l*J+c*D,i[1]=u*w+f*x+h*I+d*Y,i[5]=u*b+f*P+h*G+d*j,i[9]=u*C+f*U+h*z+d*q,i[13]=u*E+f*L+h*J+d*D,i[2]=g*w+_*x+m*I+p*Y,i[6]=g*b+_*P+m*G+p*j,i[10]=g*C+_*U+m*z+p*q,i[14]=g*E+_*L+m*J+p*D,i[3]=y*w+M*x+v*I+R*Y,i[7]=y*b+M*P+v*G+R*j,i[11]=y*C+M*U+v*z+R*q,i[15]=y*E+M*L+v*J+R*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+i*l*f-n*c*f-i*o*h+r*c*h+n*o*d-r*l*d)+_*(+t*l*d-t*c*h+i*s*h-n*s*d+n*c*u-i*l*u)+m*(+t*c*f-t*o*d-i*s*f+r*s*d+i*o*u-r*c*u)+p*(-n*o*u-t*l*f+t*o*h+n*s*f-r*s*h+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,M=g*h*c-u*m*c-g*l*d+s*m*d+u*l*p-s*h*p,v=u*_*c-g*f*c+g*o*d-s*_*d-u*o*p+s*f*p,R=g*f*l-u*_*l-g*o*h+s*_*h+u*o*m-s*f*m,w=t*y+r*M+n*v+i*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=y*b,e[1]=(_*h*i-f*m*i-_*n*d+r*m*d+f*n*p-r*h*p)*b,e[2]=(o*m*i-_*l*i+_*n*c-r*m*c-o*n*p+r*l*p)*b,e[3]=(f*l*i-o*h*i-f*n*c+r*h*c+o*n*d-r*l*d)*b,e[4]=M*b,e[5]=(u*m*i-g*h*i+g*n*d-t*m*d-u*n*p+t*h*p)*b,e[6]=(g*l*i-s*m*i-g*n*c+t*m*c+s*n*p-t*l*p)*b,e[7]=(s*h*i-u*l*i+u*n*c-t*h*c-s*n*d+t*l*d)*b,e[8]=v*b,e[9]=(g*f*i-u*_*i-g*r*d+t*_*d+u*r*p-t*f*p)*b,e[10]=(s*_*i-g*o*i+g*r*c-t*_*c-s*r*p+t*o*p)*b,e[11]=(u*o*i-s*f*i-u*r*c+t*f*c+s*r*d-t*o*d)*b,e[12]=R*b,e[13]=(u*_*n-g*f*n+g*r*h-t*_*h-u*r*m+t*f*m)*b,e[14]=(g*o*n-s*_*n-g*r*l+t*_*l+s*r*m-t*o*m)*b,e[15]=(s*f*n-u*o*n+u*r*l-t*f*l-s*r*h+t*o*h)*b,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,s=e.x,o=e.y,l=e.z,c=i*s,u=i*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+r,u*l-n*s,0,c*l-n*o,u*l+n*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,s){return this.set(1,r,i,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,c=i+i,u=s+s,f=o+o,h=i*c,d=i*u,g=i*f,_=s*u,m=s*f,p=o*f,y=l*c,M=l*u,v=l*f,R=r.x,w=r.y,b=r.z;return n[0]=(1-(_+p))*R,n[1]=(d+v)*R,n[2]=(g-M)*R,n[3]=0,n[4]=(d-v)*w,n[5]=(1-(h+p))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(g+M)*b,n[9]=(m-y)*b,n[10]=(1-(h+_))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=ci.set(n[0],n[1],n[2]).length();const s=ci.set(n[4],n[5],n[6]).length(),o=ci.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],Qt.copy(this);const c=1/i,u=1/s,f=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),r.x=i,r.y=s,r.z=o,this}makePerspective(e,t,r,n,i,s,o=xn){const l=this.elements,c=2*i/(t-e),u=2*i/(r-n),f=(t+e)/(t-e),h=(r+n)/(r-n);let d,g;if(o===xn)d=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(o===Xr)d=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,s,o=xn){const l=this.elements,c=1/(t-e),u=1/(r-n),f=1/(s-i),h=(t+e)*c,d=(r+n)*u;let g,_;if(o===xn)g=(s+i)*f,_=-2*f;else if(o===Xr)g=i*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ci=new te,Qt=new ot,Tu=new te(0,0,0),bu=new te(1,1,1),Cn=new te,xr=new te,zt=new te,wo=new ot,Co=new ir;class cn{constructor(e=0,t=0,r=0,n=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Co.setFromEuler(this),this.setFromQuaternion(Co,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class jl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Au=0;const Ro=new te,ui=new ir,pn=new ot,Sr=new te,qi=new te,wu=new te,Cu=new ir,Uo=new te(1,0,0),Po=new te(0,1,0),Do=new te(0,0,1),Lo={type:"added"},Ru={type:"removed"},fi={type:"childadded",child:null},ya={type:"childremoved",child:null};class ct extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new te,t=new cn,r=new ir,n=new te(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ot},normalMatrix:{value:new Xe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Uo,e)}rotateY(e){return this.rotateOnAxis(Po,e)}rotateZ(e){return this.rotateOnAxis(Do,e)}translateOnAxis(e,t){return Ro.copy(e).applyQuaternion(this.quaternion),this.position.add(Ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uo,e)}translateY(e){return this.translateOnAxis(Po,e)}translateZ(e){return this.translateOnAxis(Do,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sr.copy(e):Sr.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(qi,Sr,this.up):pn.lookAt(Sr,qi,this.up),this.quaternion.setFromRotationMatrix(pn),n&&(pn.extractRotation(n.matrixWorld),ui.setFromRotationMatrix(pn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lo),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ru),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];i(e.shapes,f)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),d=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}ct.DEFAULT_UP=new te(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new te,mn=new te,Ea=new te,gn=new te,hi=new te,di=new te,Io=new te,Ta=new te,ba=new te,Aa=new te,wa=new st,Ca=new st,Ra=new st;class en{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),$t.subVectors(e,t),n.cross($t);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){$t.subVectors(n,t),mn.subVectors(r,t),Ea.subVectors(e,t);const s=$t.dot($t),o=$t.dot(mn),l=$t.dot(Ea),c=mn.dot(mn),u=mn.dot(Ea),f=s*c-o*o;if(f===0)return i.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(s*u-o*l)*h;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,r,n,i,s,o,l){return this.getBarycoord(e,t,r,n,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,gn.x),l.addScaledVector(s,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(e,t,r,n,i,s){return wa.setScalar(0),Ca.setScalar(0),Ra.setScalar(0),wa.fromBufferAttribute(e,t),Ca.fromBufferAttribute(e,r),Ra.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(wa,i.x),s.addScaledVector(Ca,i.y),s.addScaledVector(Ra,i.z),s}static isFrontFacing(e,t,r,n){return $t.subVectors(r,t),mn.subVectors(e,t),$t.cross(mn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),$t.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return en.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let s,o;hi.subVectors(n,r),di.subVectors(i,r),Ta.subVectors(e,r);const l=hi.dot(Ta),c=di.dot(Ta);if(l<=0&&c<=0)return t.copy(r);ba.subVectors(e,n);const u=hi.dot(ba),f=di.dot(ba);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(hi,s);Aa.subVectors(e,i);const d=hi.dot(Aa),g=di.dot(Aa);if(g>=0&&d<=g)return t.copy(i);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(di,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Io.subVectors(i,n),o=(f-u)/(f-u+(d-g)),t.copy(n).addScaledVector(Io,o);const p=1/(m+_+h);return s=_*p,o=h*p,t.copy(r).addScaledVector(hi,s).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Ua(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=$e.workingColorSpace){return this.r=e,this.g=t,this.b=r,$e.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=$e.workingColorSpace){if(e=hu(e,1),t=Lt(t,0,1),r=Lt(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=Ua(s,i,e+1/3),this.g=Ua(s,i,e),this.b=Ua(s,i,e-1/3)}return $e.toWorkingColorSpace(this,n),this}setStyle(e,t=Xt){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const r=Kl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return $e.fromWorkingColorSpace(yt.copy(this),e),Math.round(Lt(yt.r*255,0,255))*65536+Math.round(Lt(yt.g*255,0,255))*256+Math.round(Lt(yt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(yt.copy(this),t);const r=yt.r,n=yt.g,i=yt.b,s=Math.max(r,n,i),o=Math.min(r,n,i);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case r:l=(n-i)/f+(n<i?6:0);break;case n:l=(i-r)/f+2;break;case i:l=(r-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Xt){$e.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,r=yt.g,n=yt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Mr);const r=da(Rn.h,Mr.h,t),n=da(Rn.s,Mr.s,t),i=da(Rn.l,Mr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new je;je.NAMES=Kl;let Uu=0;class rr extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=nr(),this.name="",this.blending=Mi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Ya,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(r.blending=this.blending),this.side!==In&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xa&&(r.blendSrc=this.blendSrc),this.blendDst!==Ya&&(r.blendDst=this.blendDst),this.blendEquation!==Xn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_o&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=n(e.textures),s=n(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jr extends rr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new te,yr=new Ke;class rn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=vo,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Wi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Dt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vo&&(e.usage=this.usage),e}}class Zl extends rn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Jl extends rn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Vt extends rn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Pu=0;const Wt=new ot,Pa=new ct,pi=new te,Gt=new Qn,ji=new Qn,mt=new te;class un extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xl(e)?Jl:Zl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Xe().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,r){return Wt.makeTranslation(e,t,r),this.applyMatrix4(Wt),this}scale(e,t,r){return Wt.makeScale(e,t,r),this.applyMatrix4(Wt),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Vt(r,3))}else{for(let r=0,n=t.count;r<n;r++){const i=e[r];t.setXYZ(r,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Gt.setFromBufferAttribute(i),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Gt.min,ji.min),Gt.expandByPoint(mt),mt.addVectors(Gt.max,ji.max),Gt.expandByPoint(mt)):(Gt.expandByPoint(ji.min),Gt.expandByPoint(ji.max))}Gt.getCenter(r);let n=0;for(let i=0,s=e.count;i<s;i++)mt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(mt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mt.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(e,c),mt.add(pi)),n=Math.max(n,r.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<r.count;C++)o[C]=new te,l[C]=new te;const c=new te,u=new te,f=new te,h=new Ke,d=new Ke,g=new Ke,_=new te,m=new te;function p(C,E,x){c.fromBufferAttribute(r,C),u.fromBufferAttribute(r,E),f.fromBufferAttribute(r,x),h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,E),g.fromBufferAttribute(i,x),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(_),o[E].add(_),o[x].add(_),l[C].add(m),l[E].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,E=y.length;C<E;++C){const x=y[C],P=x.start,U=x.count;for(let L=P,I=P+U;L<I;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new te,v=new te,R=new te,w=new te;function b(C){R.fromBufferAttribute(n,C),w.copy(R);const E=o[C];M.copy(E),M.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(w,E);const P=v.dot(l[C])<0?-1:1;s.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,E=y.length;C<E;++C){const x=y[C],P=x.start,U=x.count;for(let L=P,I=P+U;L<I;L+=3)b(e.getX(L+0)),b(e.getX(L+1)),b(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,d=r.count;h<d;h++)r.setXYZ(h,0,0,0);const n=new te,i=new te,s=new te,o=new te,l=new te,c=new te,u=new te,f=new te;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,i),f.subVectors(n,i),u.cross(f),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,m),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,i),f.subVectors(n,i),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],f=i[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new ot,Bn=new Eu,Er=new Zr,No=new te,Tr=new te,br=new te,Ar=new te,Da=new te,wr=new te,Oo=new te,Cr=new te;class It extends ct{constructor(e=new un,t=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){wr.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=o[l],f=i[l];u!==0&&(Da.fromBufferAttribute(f,e),s?wr.addScaledVector(Da,u):wr.addScaledVector(Da.sub(t),u))}t.add(wr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Er.copy(r.boundingSphere),Er.applyMatrix4(i),Bn.copy(e.ray).recast(e.near),!(Er.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Er,No)===null||Bn.origin.distanceToSquared(No)>(e.far-e.near)**2))&&(Fo.copy(i).invert(),Bn.copy(e.ray).applyMatrix4(Fo),!(r.boundingBox!==null&&Bn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,s=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,f=i.attributes.normal,h=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=s[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,R=M;v<R;v+=3){const w=o.getX(v),b=o.getX(v+1),C=o.getX(v+2);n=Rr(this,p,e,r,c,u,f,w,b,C),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);n=Rr(this,s,e,r,c,u,f,y,M,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=s[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,R=M;v<R;v+=3){const w=v,b=v+1,C=v+2;n=Rr(this,p,e,r,c,u,f,w,b,C),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,M=m+1,v=m+2;n=Rr(this,s,e,r,c,u,f,y,M,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Du(a,e,t,r,n,i,s,o){let l;if(e.side===Ft?l=r.intersectTriangle(s,i,n,!0,o):l=r.intersectTriangle(n,i,s,e.side===In,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:a}}function Rr(a,e,t,r,n,i,s,o,l,c){a.getVertexPosition(o,Tr),a.getVertexPosition(l,br),a.getVertexPosition(c,Ar);const u=Du(a,e,t,r,Tr,br,Ar,Oo);if(u){const f=new te;en.getBarycoord(Oo,Tr,br,Ar,f),n&&(u.uv=en.getInterpolatedAttribute(n,o,l,c,f,new Ke)),i&&(u.uv1=en.getInterpolatedAttribute(i,o,l,c,f,new Ke)),s&&(u.normal=en.getInterpolatedAttribute(s,o,l,c,f,new te),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new te,materialIndex:0};en.getNormal(Tr,br,Ar,h.normal),u.face=h,u.barycoord=f}return u}class ar extends un{constructor(e=1,t=1,r=1,n=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:s};const o=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,n,s,2),g("x","z","y",1,-1,e,r,-t,n,s,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function g(_,m,p,y,M,v,R,w,b,C,E){const x=v/b,P=R/C,U=v/2,L=R/2,I=w/2,G=b+1,z=C+1;let J=0,Y=0;const j=new te;for(let q=0;q<z;q++){const D=q*P-L;for(let H=0;H<G;H++){const Q=H*x-U;j[_]=Q*y,j[m]=D*M,j[p]=I,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=w>0?1:-1,u.push(j.x,j.y,j.z),f.push(H/b),f.push(1-q/C),J+=1}}for(let q=0;q<C;q++)for(let D=0;D<b;D++){const H=h+D+G*q,Q=h+D+G*(q+1),F=h+(D+1)+G*(q+1),O=h+(D+1)+G*q;l.push(H,Q,O),l.push(Q,F,O),Y+=6}o.addGroup(d,Y,E),d+=Y,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Et(a){const e={};for(let t=0;t<a.length;t++){const r=Ui(a[t]);for(const n in r)e[n]=r[n]}return e}function Lu(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ql(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const $l={clone:Ui,merge:Et};var Iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends rr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iu,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class ec extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new te,Bo=new Ke,ko=new Ke;class Yt extends ec{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,Bo,ko),t.subVectors(ko,Bo)}setViewOffset(e,t,r,n,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class Nu extends ct{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Yt(mi,gi,e,t);n.layers=this.layers,this.add(n);const i=new Yt(mi,gi,e,t);i.layers=this.layers,this.add(i);const s=new Yt(mi,gi,e,t);s.layers=this.layers,this.add(s);const o=new Yt(mi,gi,e,t);o.layers=this.layers,this.add(o);const l=new Yt(mi,gi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(mi,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,s,o,l]=t;for(const c of t)this.remove(c);if(e===xn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xr)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class tc extends Tt{constructor(e,t,r,n,i,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,r,n,i,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ou extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new tc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ar(5,5,5),i=new Fn({name:"CubemapFromEquirect",uniforms:Ui(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ft,blending:Dn});i.uniforms.tEquirect.value=t;const s=new It(n,i),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=qt),new Nu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(i)}}const La=new te,Bu=new te,ku=new Xe;class Hn{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=La.subVectors(r,t).cross(Bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(La),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ku.getNormalMatrix(e),n=this.coplanarPoint(La).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Zr,Ur=new te;class Ws{constructor(e=new Hn,t=new Hn,r=new Hn,n=new Hn,i=new Hn,s=new Hn){this.planes=[e,t,r,n,i,s]}set(e,t,r,n,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=xn){const r=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],d=n[8],g=n[9],_=n[10],m=n[11],p=n[12],y=n[13],M=n[14],v=n[15];if(r[0].setComponents(l-i,h-c,m-d,v-p).normalize(),r[1].setComponents(l+i,h+c,m+d,v+p).normalize(),r[2].setComponents(l+s,h+u,m+g,v+y).normalize(),r[3].setComponents(l-s,h-u,m-g,v-y).normalize(),r[4].setComponents(l-o,h-f,m-_,v-M).normalize(),t===xn)r[5].setComponents(l+o,h+f,m+_,v+M).normalize();else if(t===Xr)r[5].setComponents(o,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Ur.x=n.normal.x>0?e.max.x:e.min.x,Ur.y=n.normal.y>0?e.max.y:e.min.y,Ur.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let a=null,e=!1,t=null,r=null;function n(i,s){t(i,s),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function zu(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=a.createBuffer();a.bindBuffer(l,h),a.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function r(o,l,c){const u=l.array,f=l.updateRanges;if(a.bindBuffer(c,o),f.length===0)a.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];a.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:s}}class $n extends un{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-s;for(let M=0;M<c;M++){const v=M*f-i;g.push(v,-y,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const M=y+c*p,v=y+c*(p+1),R=y+1+c*(p+1),w=y+1+c*p;d.push(M,v,w),d.push(v,R,w)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ku=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$u=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ef=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ff=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,df=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,If=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,th=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ih=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ah=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ch=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_h=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Th=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ah=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ch=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ph=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ih=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$h=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,td=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,id=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ld=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ud=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_d=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Gu,alphahash_pars_fragment:Vu,alphamap_fragment:Hu,alphamap_pars_fragment:Wu,alphatest_fragment:Xu,alphatest_pars_fragment:Yu,aomap_fragment:qu,aomap_pars_fragment:ju,batching_pars_vertex:Ku,batching_vertex:Zu,begin_vertex:Ju,beginnormal_vertex:Qu,bsdfs:$u,iridescence_fragment:ef,bumpmap_pars_fragment:tf,clipping_planes_fragment:nf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:af,clipping_planes_vertex:sf,color_fragment:of,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:uf,common:ff,cube_uv_reflection_fragment:hf,defaultnormal_vertex:df,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,colorspace_fragment:vf,colorspace_pars_fragment:xf,envmap_fragment:Sf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:yf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:If,envmap_vertex:Tf,fog_vertex:bf,fog_pars_vertex:Af,fog_fragment:wf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Uf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:Df,lights_pars_begin:Lf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Nf,lights_phong_fragment:Of,lights_phong_pars_fragment:Bf,lights_physical_fragment:kf,lights_physical_pars_fragment:zf,lights_fragment_begin:Gf,lights_fragment_maps:Vf,lights_fragment_end:Hf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:qf,map_fragment:jf,map_pars_fragment:Kf,map_particle_fragment:Zf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:$f,morphinstance_vertex:eh,morphcolor_vertex:th,morphnormal_vertex:nh,morphtarget_pars_vertex:ih,morphtarget_vertex:rh,normal_fragment_begin:ah,normal_fragment_maps:sh,normal_pars_fragment:oh,normal_pars_vertex:lh,normal_vertex:ch,normalmap_pars_fragment:uh,clearcoat_normal_fragment_begin:fh,clearcoat_normal_fragment_maps:hh,clearcoat_pars_fragment:dh,iridescence_pars_fragment:ph,opaque_fragment:mh,packing:gh,premultiplied_alpha_fragment:_h,project_vertex:vh,dithering_fragment:xh,dithering_pars_fragment:Sh,roughnessmap_fragment:Mh,roughnessmap_pars_fragment:yh,shadowmap_pars_fragment:Eh,shadowmap_pars_vertex:Th,shadowmap_vertex:bh,shadowmask_pars_fragment:Ah,skinbase_vertex:wh,skinning_pars_vertex:Ch,skinning_vertex:Rh,skinnormal_vertex:Uh,specularmap_fragment:Ph,specularmap_pars_fragment:Dh,tonemapping_fragment:Lh,tonemapping_pars_fragment:Ih,transmission_fragment:Fh,transmission_pars_fragment:Nh,uv_pars_fragment:Oh,uv_pars_vertex:Bh,uv_vertex:kh,worldpos_vertex:zh,background_vert:Gh,background_frag:Vh,backgroundCube_vert:Hh,backgroundCube_frag:Wh,cube_vert:Xh,cube_frag:Yh,depth_vert:qh,depth_frag:jh,distanceRGBA_vert:Kh,distanceRGBA_frag:Zh,equirect_vert:Jh,equirect_frag:Qh,linedashed_vert:$h,linedashed_frag:ed,meshbasic_vert:td,meshbasic_frag:nd,meshlambert_vert:id,meshlambert_frag:rd,meshmatcap_vert:ad,meshmatcap_frag:sd,meshnormal_vert:od,meshnormal_frag:ld,meshphong_vert:cd,meshphong_frag:ud,meshphysical_vert:fd,meshphysical_frag:hd,meshtoon_vert:dd,meshtoon_frag:pd,points_vert:md,points_frag:gd,shadow_vert:_d,shadow_frag:vd,sprite_vert:xd,sprite_frag:Sd},Re={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},on={basic:{uniforms:Et([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Et([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Et([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Et([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Et([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Et([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Et([Re.points,Re.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Et([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Et([Re.common,Re.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Et([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Et([Re.sprite,Re.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Et([Re.common,Re.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Et([Re.lights,Re.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};on.physical={uniforms:Et([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Pr={r:0,b:0,g:0},zn=new cn,Md=new ot;function yd(a,e,t,r,n,i,s){const o=new je(0);let l=i===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function _(y){let M=!1;const v=g(y);v===null?p(o,l):v&&v.isColor&&(p(v,1),M=!0);const R=a.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(a.autoClear||M)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(y,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===jr)?(u===void 0&&(u=new It(new ar(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ui(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),zn.copy(M.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Md.makeRotationFromEuler(zn)),u.material.toneMapped=$e.getTransfer(v.colorSpace)!==it,(f!==v||h!==v.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=a.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new It(new $n(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ui(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=$e.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(Pr,Ql(a)),r.buffers.color.setClear(Pr.r,Pr.g,Pr.b,M,s)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m}}function Ed(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},n=h(null);let i=n,s=!1;function o(x,P,U,L,I){let G=!1;const z=f(L,U,P);i!==z&&(i=z,c(i.object)),G=d(x,L,U,I),G&&g(x,L,U,I),I!==null&&e.update(I,a.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,v(x,P,U,L),I!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return a.createVertexArray()}function c(x){return a.bindVertexArray(x)}function u(x){return a.deleteVertexArray(x)}function f(x,P,U){const L=U.wireframe===!0;let I=r[x.id];I===void 0&&(I={},r[x.id]=I);let G=I[P.id];G===void 0&&(G={},I[P.id]=G);let z=G[L];return z===void 0&&(z=h(l()),G[L]=z),z}function h(x){const P=[],U=[],L=[];for(let I=0;I<t;I++)P[I]=0,U[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:L,object:x,attributes:{},index:null}}function d(x,P,U,L){const I=i.attributes,G=P.attributes;let z=0;const J=U.getAttributes();for(const Y in J)if(J[Y].location>=0){const q=I[Y];let D=G[Y];if(D===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(D=x.instanceColor)),q===void 0||q.attribute!==D||D&&q.data!==D.data)return!0;z++}return i.attributesNum!==z||i.index!==L}function g(x,P,U,L){const I={},G=P.attributes;let z=0;const J=U.getAttributes();for(const Y in J)if(J[Y].location>=0){let q=G[Y];q===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(q=x.instanceColor));const D={};D.attribute=q,q&&q.data&&(D.data=q.data),I[Y]=D,z++}i.attributes=I,i.attributesNum=z,i.index=L}function _(){const x=i.newAttributes;for(let P=0,U=x.length;P<U;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const U=i.newAttributes,L=i.enabledAttributes,I=i.attributeDivisors;U[x]=1,L[x]===0&&(a.enableVertexAttribArray(x),L[x]=1),I[x]!==P&&(a.vertexAttribDivisor(x,P),I[x]=P)}function y(){const x=i.newAttributes,P=i.enabledAttributes;for(let U=0,L=P.length;U<L;U++)P[U]!==x[U]&&(a.disableVertexAttribArray(U),P[U]=0)}function M(x,P,U,L,I,G,z){z===!0?a.vertexAttribIPointer(x,P,U,I,G):a.vertexAttribPointer(x,P,U,L,I,G)}function v(x,P,U,L){_();const I=L.attributes,G=U.getAttributes(),z=P.defaultAttributeValues;for(const J in G){const Y=G[J];if(Y.location>=0){let j=I[J];if(j===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),j!==void 0){const q=j.normalized,D=j.itemSize,H=e.get(j);if(H===void 0)continue;const Q=H.buffer,F=H.type,O=H.bytesPerElement,$=F===a.INT||F===a.UNSIGNED_INT||j.gpuType===Bs;if(j.isInterleavedBufferAttribute){const V=j.data,ne=V.stride,_e=j.offset;if(V.isInstancedInterleavedBuffer){for(let Me=0;Me<Y.locationSize;Me++)p(Y.location+Me,V.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Me=0;Me<Y.locationSize;Me++)m(Y.location+Me);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let Me=0;Me<Y.locationSize;Me++)M(Y.location+Me,D/Y.locationSize,F,q,ne*O,(_e+D/Y.locationSize*Me)*O,$)}else{if(j.isInstancedBufferAttribute){for(let V=0;V<Y.locationSize;V++)p(Y.location+V,j.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let V=0;V<Y.locationSize;V++)m(Y.location+V);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let V=0;V<Y.locationSize;V++)M(Y.location+V,D/Y.locationSize,F,q,D*O,D/Y.locationSize*V*O,$)}}else if(z!==void 0){const q=z[J];if(q!==void 0)switch(q.length){case 2:a.vertexAttrib2fv(Y.location,q);break;case 3:a.vertexAttrib3fv(Y.location,q);break;case 4:a.vertexAttrib4fv(Y.location,q);break;default:a.vertexAttrib1fv(Y.location,q)}}}}y()}function R(){C();for(const x in r){const P=r[x];for(const U in P){const L=P[U];for(const I in L)u(L[I].object),delete L[I];delete P[U]}delete r[x]}}function w(x){if(r[x.id]===void 0)return;const P=r[x.id];for(const U in P){const L=P[U];for(const I in L)u(L[I].object),delete L[I];delete P[U]}delete r[x.id]}function b(x){for(const P in r){const U=r[P];if(U[x.id]===void 0)continue;const L=U[x.id];for(const I in L)u(L[I].object),delete L[I];delete U[x.id]}}function C(){E(),s=!0,i!==n&&(i=n,c(i.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Td(a,e,t){let r;function n(c){r=c}function i(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function s(c,u,f){f!==0&&(a.drawArraysInstanced(r,c,u,f),t.update(u,r,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,r,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)s(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(r,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,r,1)}}this.setMode=n,this.render=i,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bd(a,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){return!(b!==tn&&r.convert(b)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Mn&&r.convert(b)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==vn&&!C)}function l(b){if(b==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),y=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),M=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function Ad(a){const e=this;let t=null,r=0,n=!1,i=!1;const s=new Hn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||r!==0||n;return n=h,r=f.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=a.get(f);if(!n||g===null||g.length===0||i&&!m)i?u(null):c();else{const y=i?0:r,M=y*4;let v=p.clippingState||null;l.value=v,v=u(g,h,M,d);for(let R=0;R!==M;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)s.copy(f[M]).applyMatrix4(y,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function wd(a){let e=new WeakMap;function t(s,o){return o===es?s.mapping=Ai:o===ts&&(s.mapping=wi),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===es||o===ts)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Ou(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class ic extends ec{constructor(e=-1,t=1,r=1,n=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,zo=[.125,.215,.35,.446,.526,.582],Yn=20,Ia=new ic,Go=new je;let Fa=null,Na=0,Oa=0,Ba=!1;const Wn=(1+Math.sqrt(5))/2,_i=1/Wn,Vo=[new te(-Wn,_i,0),new te(Wn,_i,0),new te(-_i,0,Wn),new te(_i,0,Wn),new te(0,Wn,-_i),new te(0,Wn,_i),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)];class Ho{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Fa=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,Na,Oa),this._renderer.xr.enabled=Ba,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:tr,format:tn,colorSpace:Pi,depthBuffer:!1},n=Wo(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cd(i)),this._blurMaterial=Rd(i,e,t)}return n}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,r,n){const o=new Yt(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Go),u.toneMapping=Ln,u.autoClear=!1;const d=new Jr({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new It(new ar,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Go),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Dr(n,y*M,p>2?M:0,M,M),u.setRenderTarget(n),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Ai||e.mapping===wi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());const i=n?this._cubemapMaterial:this._equirectMaterial,s=new It(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Ia)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let i=1;i<n;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Vo[(n-i-1)%Vo.length];this._blur(e,i-1,i,s,o)}t.autoClear=r}_blur(e,t,r,n,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",i),this._halfBlur(s,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new It(this._lodPlanes[n],c),h=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Yn-1),_=i/g,m=isFinite(i)?1+Math.floor(u*_):Yn;m>Yn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const p=[];let y=0;for(let b=0;b<Yn;++b){const C=b/_,E=Math.exp(-C*C/2);p.push(E),b===0?y+=E:b<m&&(y+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-r;const v=this._sizeLods[n],R=3*v*(n>M-Si?n-M+Si:0),w=4*(this._cubeSize-v);Dr(t,R,w,3*v,2*v),l.setRenderTarget(t),l.render(f,Ia)}}function Cd(a){const e=[],t=[],r=[];let n=a;const i=a-Si+1+zo.length;for(let s=0;s<i;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-Si?l=zo[s-a+Si-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),M=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,C=w>2?0:-1,E=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(E,_*g*w),M.set(h,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const R=new un;R.setAttribute("position",new rn(y,_)),R.setAttribute("uv",new rn(M,m)),R.setAttribute("faceIndex",new rn(v,p)),e.push(R),n>Si&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Wo(a,e,t){const r=new Jn(a,e,t);return r.texture.mapping=jr,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dr(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function Rd(a,e,t){const r=new Float32Array(Yn),n=new te(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Xo(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Yo(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Xs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ud(a){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===es||l===ts,u=l===Ai||l===wi;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Ho(a)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new Ho(a)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",i),f.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function Pd(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&Zi("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Dd(a,e,t,r){const n={},i=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",s),delete n[h.id];const d=i.get(h);d&&(e.remove(d),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],a.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],a.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let M=0,v=y.length;M<v;M+=3){const R=y[M+0],w=y[M+1],b=y[M+2];h.push(R,w,w,b,b,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const R=M+0,w=M+1,b=M+2;h.push(R,w,w,b,b,R)}}else return;const m=new(Xl(h)?Jl:Zl)(h,1);m.version=_;const p=i.get(f);p&&e.remove(p),i.set(f,m)}function u(f){const h=i.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return i.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ld(a,e,t){let r;function n(h){r=h}let i,s;function o(h){i=h.type,s=h.bytesPerElement}function l(h,d){a.drawElements(r,d,i,h*s),t.update(d,r,1)}function c(h,d,g){g!==0&&(a.drawElementsInstanced(r,d,i,h*s,g),t.update(d,r,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,i,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,r,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/s,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(r,d,0,i,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,r,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Id(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Fd(a,e,t){const r=new WeakMap,n=new st;function i(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=r.get(o);if(h===void 0||h.count!==f){let x=function(){C.dispose(),r.delete(o),o.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*w*4*f),C=new ql(b,R,w,f);C.type=vn,C.needsUpdate=!0;const E=v*4;for(let P=0;P<f;P++){const U=p[P],L=y[P],I=M[P],G=R*w*4*P;for(let z=0;z<U.count;z++){const J=z*E;g===!0&&(n.fromBufferAttribute(U,z),b[G+J+0]=n.x,b[G+J+1]=n.y,b[G+J+2]=n.z,b[G+J+3]=0),_===!0&&(n.fromBufferAttribute(L,z),b[G+J+4]=n.x,b[G+J+5]=n.y,b[G+J+6]=n.z,b[G+J+7]=0),m===!0&&(n.fromBufferAttribute(I,z),b[G+J+8]=n.x,b[G+J+9]=n.y,b[G+J+10]=n.z,b[G+J+11]=I.itemSize===4?n.w:1)}}h={count:f,texture:C,size:new Ke(R,w)},r.set(o,h),o.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",_),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:i}}function Nd(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}class rc extends Tt{constructor(e,t,r,n,i,s,o,l,c,u=yi){if(u!==yi&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===yi&&(r=Zn),r===void 0&&u===Ri&&(r=Ci),super(null,n,i,s,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ac=new Tt,qo=new rc(1,1),sc=new ql,oc=new Mu,lc=new tc,jo=[],Ko=[],Zo=new Float32Array(16),Jo=new Float32Array(9),Qo=new Float32Array(4);function Li(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=jo[n];if(i===void 0&&(i=new Float32Array(n),jo[n]=i),e!==0){r.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function ht(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function dt(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function Qr(a,e){let t=Ko[e];t===void 0&&(t=new Int32Array(e),Ko[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function Od(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Bd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2fv(this.addr,e),dt(t,e)}}function kd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;a.uniform3fv(this.addr,e),dt(t,e)}}function zd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4fv(this.addr,e),dt(t,e)}}function Gd(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ht(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,r))return;Qo.set(r),a.uniformMatrix2fv(this.addr,!1,Qo),dt(t,r)}}function Vd(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ht(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,r))return;Jo.set(r),a.uniformMatrix3fv(this.addr,!1,Jo),dt(t,r)}}function Hd(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ht(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,r))return;Zo.set(r),a.uniformMatrix4fv(this.addr,!1,Zo),dt(t,r)}}function Wd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Xd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2iv(this.addr,e),dt(t,e)}}function Yd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;a.uniform3iv(this.addr,e),dt(t,e)}}function qd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4iv(this.addr,e),dt(t,e)}}function jd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Kd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2uiv(this.addr,e),dt(t,e)}}function Zd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;a.uniform3uiv(this.addr,e),dt(t,e)}}function Jd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4uiv(this.addr,e),dt(t,e)}}function Qd(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n);let i;this.type===a.SAMPLER_2D_SHADOW?(qo.compareFunction=Wl,i=qo):i=ac,t.setTexture2D(e||i,n)}function $d(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||oc,n)}function ep(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||lc,n)}function tp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||sc,n)}function np(a){switch(a){case 5126:return Od;case 35664:return Bd;case 35665:return kd;case 35666:return zd;case 35674:return Gd;case 35675:return Vd;case 35676:return Hd;case 5124:case 35670:return Wd;case 35667:case 35671:return Xd;case 35668:case 35672:return Yd;case 35669:case 35673:return qd;case 5125:return jd;case 36294:return Kd;case 36295:return Zd;case 36296:return Jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Qd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return tp}}function ip(a,e){a.uniform1fv(this.addr,e)}function rp(a,e){const t=Li(e,this.size,2);a.uniform2fv(this.addr,t)}function ap(a,e){const t=Li(e,this.size,3);a.uniform3fv(this.addr,t)}function sp(a,e){const t=Li(e,this.size,4);a.uniform4fv(this.addr,t)}function op(a,e){const t=Li(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function lp(a,e){const t=Li(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function cp(a,e){const t=Li(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function up(a,e){a.uniform1iv(this.addr,e)}function fp(a,e){a.uniform2iv(this.addr,e)}function hp(a,e){a.uniform3iv(this.addr,e)}function dp(a,e){a.uniform4iv(this.addr,e)}function pp(a,e){a.uniform1uiv(this.addr,e)}function mp(a,e){a.uniform2uiv(this.addr,e)}function gp(a,e){a.uniform3uiv(this.addr,e)}function _p(a,e){a.uniform4uiv(this.addr,e)}function vp(a,e,t){const r=this.cache,n=e.length,i=Qr(t,n);ht(r,i)||(a.uniform1iv(this.addr,i),dt(r,i));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||ac,i[s])}function xp(a,e,t){const r=this.cache,n=e.length,i=Qr(t,n);ht(r,i)||(a.uniform1iv(this.addr,i),dt(r,i));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||oc,i[s])}function Sp(a,e,t){const r=this.cache,n=e.length,i=Qr(t,n);ht(r,i)||(a.uniform1iv(this.addr,i),dt(r,i));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||lc,i[s])}function Mp(a,e,t){const r=this.cache,n=e.length,i=Qr(t,n);ht(r,i)||(a.uniform1iv(this.addr,i),dt(r,i));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||sc,i[s])}function yp(a){switch(a){case 5126:return ip;case 35664:return rp;case 35665:return ap;case 35666:return sp;case 35674:return op;case 35675:return lp;case 35676:return cp;case 5124:case 35670:return up;case 35667:case 35671:return fp;case 35668:case 35672:return hp;case 35669:case 35673:return dp;case 5125:return pp;case 36294:return mp;case 36295:return gp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Mp}}class Ep{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=np(t.type)}}class Tp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yp(t.type)}}class bp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function $o(a,e){a.seq.push(e),a.map[e.id]=e}function Ap(a,e,t){const r=a.name,n=r.length;for(ka.lastIndex=0;;){const i=ka.exec(r),s=ka.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){$o(t,c===void 0?new Ep(o,a,e):new Tp(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new bp(o),$o(t,f)),t=f}}}class Vr{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),s=e.getUniformLocation(t,i.name);Ap(i,s,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function el(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const wp=37297;let Cp=0;function Rp(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=n;s<i;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const tl=new Xe;function Up(a){$e._getMatrix(tl,$e.workingColorSpace,a);const e=`mat3( ${tl.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(a)){case Kr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function nl(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+Rp(a.getShaderSource(e),s)}else return n}function Pp(a,e){const t=Up(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dp(a,e){let t;switch(e){case Kc:t="Linear";break;case Zc:t="Reinhard";break;case Jc:t="Cineon";break;case Qc:t="ACESFilmic";break;case eu:t="AgX";break;case tu:t="Neutral";break;case $c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lr=new te;function Lp(){$e.getLuminanceCoefficients(Lr);const a=Lr.x.toFixed(4),e=Lr.y.toFixed(4),t=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ip(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function Fp(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Np(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function Ji(a){return a!==""}function il(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Op=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ps(a){return a.replace(Op,kp)}const Bp=new Map;function kp(a,e){let t=qe[e];if(t===void 0){const r=Bp.get(e);if(r!==void 0)t=qe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ps(t)}const zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(a){return a.replace(zp,Gp)}function Gp(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function sl(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vp(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ul?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Cc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function Hp(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ai:case wi:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wp(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xp(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Os:e="ENVMAP_BLENDING_MULTIPLY";break;case qc:e="ENVMAP_BLENDING_MIX";break;case jc:e="ENVMAP_BLENDING_ADD";break}return e}function Yp(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function qp(a,e,t,r){const n=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Vp(t),c=Hp(t),u=Wp(t),f=Xp(t),h=Yp(t),d=Ip(t),g=Fp(i),_=n.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ji).join(`
`),p.length>0&&(p+=`
`)):(m=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),p=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Pp("linearToOutputTexel",t.outputColorSpace),Lp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),s=Ps(s),s=il(s,t),s=rl(s,t),o=Ps(o),o=il(o,t),o=rl(o,t),s=al(s),o=al(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+s,v=y+p+o,R=el(n,n.VERTEX_SHADER,M),w=el(n,n.FRAGMENT_SHADER,v);n.attachShader(_,R),n.attachShader(_,w),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function b(P){if(a.debug.checkShaderErrors){const U=n.getProgramInfoLog(_).trim(),L=n.getShaderInfoLog(R).trim(),I=n.getShaderInfoLog(w).trim();let G=!0,z=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(G=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,_,R,w);else{const J=nl(n,R,"vertex"),Y=nl(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+J+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||I==="")&&(z=!1);z&&(P.diagnostics={runnable:G,programLog:U,vertexShader:{log:L,prefix:m},fragmentShader:{log:I,prefix:p}})}n.deleteShader(R),n.deleteShader(w),C=new Vr(n,_),E=Np(n,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(_,wp)),x},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let jp=0;class Kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Zp(e),t.set(e,r)),r}}class Zp{constructor(e){this.id=jp++,this.code=e,this.usedTimes=0}}function Jp(a,e,t,r,n,i,s){const o=new jl,l=new Kp,c=new Set,u=[],f=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,P,U,L){const I=U.fog,G=L.geometry,z=E.isMeshStandardMaterial?U.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),Y=J&&J.mapping===jr?J.image.height:null,j=g[E.type];E.precision!==null&&(d=n.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,D=q!==void 0?q.length:0;let H=0;G.morphAttributes.position!==void 0&&(H=1),G.morphAttributes.normal!==void 0&&(H=2),G.morphAttributes.color!==void 0&&(H=3);let Q,F,O,$;if(j){const Ge=on[j];Q=Ge.vertexShader,F=Ge.fragmentShader}else Q=E.vertexShader,F=E.fragmentShader,l.update(E),O=l.getVertexShaderID(E),$=l.getFragmentShaderID(E);const V=a.getRenderTarget(),ne=a.state.buffers.depth.getReversed(),_e=L.isInstancedMesh===!0,Me=L.isBatchedMesh===!0,xe=!!E.map,oe=!!E.matcap,Fe=!!J,B=!!E.aoMap,Ne=!!E.lightMap,Ae=!!E.bumpMap,Ce=!!E.normalMap,se=!!E.displacementMap,we=!!E.emissiveMap,me=!!E.metalnessMap,T=!!E.roughnessMap,S=E.anisotropy>0,N=E.clearcoat>0,K=E.dispersion>0,Z=E.iridescence>0,ae=E.sheen>0,de=E.transmission>0,ue=S&&!!E.anisotropyMap,ge=N&&!!E.clearcoatMap,Ue=N&&!!E.clearcoatNormalMap,fe=N&&!!E.clearcoatRoughnessMap,ye=Z&&!!E.iridescenceMap,Ee=Z&&!!E.iridescenceThicknessMap,Te=ae&&!!E.sheenColorMap,ce=ae&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,De=!!E.specularColorMap,Ye=!!E.specularIntensityMap,k=de&&!!E.transmissionMap,he=de&&!!E.thicknessMap,ee=!!E.gradientMap,pe=!!E.alphaMap,Se=E.alphaTest>0,ve=!!E.alphaHash,Ie=!!E.extensions;let He=Ln;E.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(He=a.toneMapping);const ze={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:Q,fragmentShader:F,defines:E.defines,customVertexShaderID:O,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Me,batchingColor:Me&&L._colorsTexture!==null,instancing:_e,instancingColor:_e&&L.instanceColor!==null,instancingMorph:_e&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:V===null?a.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Pi,alphaToCoverage:!!E.alphaToCoverage,map:xe,matcap:oe,envMap:Fe,envMapMode:Fe&&J.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:Ne,bumpMap:Ae,normalMap:Ce,displacementMap:h&&se,emissiveMap:we,normalMapObjectSpace:Ce&&E.normalMapType===ru,normalMapTangentSpace:Ce&&E.normalMapType===Hl,metalnessMap:me,roughnessMap:T,anisotropy:S,anisotropyMap:ue,clearcoat:N,clearcoatMap:ge,clearcoatNormalMap:Ue,clearcoatRoughnessMap:fe,dispersion:K,iridescence:Z,iridescenceMap:ye,iridescenceThicknessMap:Ee,sheen:ae,sheenColorMap:Te,sheenRoughnessMap:ce,specularMap:Pe,specularColorMap:De,specularIntensityMap:Ye,transmission:de,transmissionMap:k,thicknessMap:he,gradientMap:ee,opaque:E.transparent===!1&&E.blending===Mi&&E.alphaToCoverage===!1,alphaMap:pe,alphaTest:Se,alphaHash:ve,combine:E.combine,mapUv:xe&&_(E.map.channel),aoMapUv:B&&_(E.aoMap.channel),lightMapUv:Ne&&_(E.lightMap.channel),bumpMapUv:Ae&&_(E.bumpMap.channel),normalMapUv:Ce&&_(E.normalMap.channel),displacementMapUv:se&&_(E.displacementMap.channel),emissiveMapUv:we&&_(E.emissiveMap.channel),metalnessMapUv:me&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:ue&&_(E.anisotropyMap.channel),clearcoatMapUv:ge&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ce&&_(E.sheenRoughnessMap.channel),specularMapUv:Pe&&_(E.specularMap.channel),specularColorMapUv:De&&_(E.specularColorMap.channel),specularIntensityMapUv:Ye&&_(E.specularIntensityMap.channel),transmissionMapUv:k&&_(E.transmissionMap.channel),thicknessMapUv:he&&_(E.thicknessMap.channel),alphaMapUv:pe&&_(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ce||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(xe||pe),fog:!!I,useFog:E.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ne,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:H,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:He,decodeVideoTexture:xe&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===it,decodeVideoTextureEmissive:we&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===it,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ln,flipSided:E.side===Ft,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&E.extensions.multiDraw===!0||Me)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)x.push(P),x.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(x,E),M(x,E),x.push(a.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function y(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function M(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const x=g[E.type];let P;if(x){const U=on[x];P=$l.clone(U.uniforms)}else P=E.uniforms;return P}function R(E,x){let P;for(let U=0,L=u.length;U<L;U++){const I=u[U];if(I.cacheKey===x){P=I,++P.usedTimes;break}}return P===void 0&&(P=new qp(a,x,E,i),u.push(P)),P}function w(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function b(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function Qp(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function r(s){a.delete(s)}function n(s,o,l){a.get(s)[o]=l}function i(){a=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:i}}function $p(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ol(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ll(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function s(f,h,d,g,_,m){let p=a[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},a[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=s(f,h,d,g,_,m);d.transmission>0?r.push(p):d.transparent===!0?n.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=s(f,h,d,g,_,m);d.transmission>0?r.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||$p),r.length>1&&r.sort(h||ol),n.length>1&&n.sort(h||ol)}function u(){for(let f=e,h=a.length;f<h;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:l,finish:u,sort:c}}function em(){let a=new WeakMap;function e(r,n){const i=a.get(r);let s;return i===void 0?(s=new ll,a.set(r,[s])):n>=i.length?(s=new ll,i.push(s)):s=i[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function tm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new je};break;case"SpotLight":t={position:new te,direction:new te,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=t,t}}}function nm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let im=0;function rm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function am(a){const e=new tm,t=nm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new te);const n=new te,i=new ot,s=new ot;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,M=0,v=0,R=0,w=0,b=0;c.sort(rm);for(let E=0,x=c.length;E<x;E++){const P=c[E],U=P.color,L=P.intensity,I=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*L,f+=U.g*L,h+=U.b*L;else if(P.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(P.sh.coefficients[z],L);b++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,Y=t.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,r.directionalShadow[d]=Y,r.directionalShadowMap[d]=G,r.directionalShadowMatrix[d]=P.shadow.matrix,y++}r.directional[d]=z,d++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(U).multiplyScalar(L),z.distance=I,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,r.spot[_]=z;const J=P.shadow;if(P.map&&(r.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&w++),r.spotLightMatrix[_]=J.matrix,P.castShadow){const Y=t.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,r.spotShadow[_]=Y,r.spotShadowMap[_]=G,v++}_++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(U).multiplyScalar(L),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),r.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const J=P.shadow,Y=t.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,Y.shadowCameraNear=J.camera.near,Y.shadowCameraFar=J.camera.far,r.pointShadow[g]=Y,r.pointShadowMap[g]=G,r.pointShadowMatrix[g]=P.shadow.matrix,M++}r.point[g]=z,g++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(L),z.groundColor.copy(P.groundColor).multiplyScalar(L),r.hemi[p]=z,p++}}m>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;const C=r.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==b)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=v,r.spotShadowMap.length=v,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=v+R-w,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=b,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=b,r.version=im++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const v=r.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),f++}else if(M.isSpotLight){const v=r.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=r.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),s.identity(),i.copy(M.matrixWorld),i.premultiply(m),s.extractRotation(i),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),g++}else if(M.isPointLight){const v=r.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const v=r.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:r}}function cl(a){const e=new am(a),t=[],r=[];function n(u){c.camera=u,t.length=0,r.length=0}function i(u){t.push(u)}function s(u){r.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:s}}function sm(a){let e=new WeakMap;function t(n,i=0){const s=e.get(n);let o;return s===void 0?(o=new cl(a),e.set(n,[o])):i>=s.length?(o=new cl(a),s.push(o)):o=s[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}class cc extends rr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uc extends rr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cm(a,e,t){let r=new Ws;const n=new Ke,i=new Ke,s=new st,o=new cc({depthPacking:Vl}),l=new uc,c={},u=t.maxTextureSize,f={[In]:Ft,[Ft]:In,[ln]:ln},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:om,fragmentShader:lm}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let p=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=a.getRenderTarget(),x=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),U=a.state;U.setBlending(Dn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=p!==_n&&this.type===_n,I=p===_n&&this.type!==_n;for(let G=0,z=w.length;G<z;G++){const J=w[G],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const j=Y.getFrameExtents();if(n.multiply(j),i.copy(Y.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/j.x),n.x=i.x*j.x,Y.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/j.y),n.y=i.y*j.y,Y.mapSize.y=i.y)),Y.map===null||L===!0||I===!0){const D=this.type!==_n?{minFilter:nn,magFilter:nn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Jn(n.x,n.y,D),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const q=Y.getViewportCount();for(let D=0;D<q;D++){const H=Y.getViewport(D);s.set(i.x*H.x,i.y*H.y,i.x*H.z,i.y*H.w),U.viewport(s),Y.updateMatrices(J,D),r=Y.getFrustum(),v(b,C,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===_n&&y(Y,C),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(E,x,P)};function y(w,b){const C=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Jn(n.x,n.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(b,null,C,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(b,null,C,d,_,null)}function M(w,b,C,E){let x=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=x.uuid,L=b.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let G=I[L];G===void 0&&(G=x.clone(),I[L]=G,b.addEventListener("dispose",R)),x=G}if(x.visible=b.visible,x.wireframe=b.wireframe,E===_n?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=a.properties.get(x);U.light=C}return x}function v(w,b,C,E,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===_n)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const L=e.update(w),I=w.material;if(Array.isArray(I)){const G=L.groups;for(let z=0,J=G.length;z<J;z++){const Y=G[z],j=I[Y.materialIndex];if(j&&j.visible){const q=M(w,j,E,x);w.onBeforeShadow(a,w,b,C,L,q,Y),a.renderBufferDirect(C,null,L,q,w,Y),w.onAfterShadow(a,w,b,C,L,q,Y)}}}else if(I.visible){const G=M(w,I,E,x);w.onBeforeShadow(a,w,b,C,L,G,null),a.renderBufferDirect(C,null,L,G,w,null),w.onAfterShadow(a,w,b,C,L,G,null)}}const U=w.children;for(let L=0,I=U.length;L<I;L++)v(U[L],b,C,E,x)}function R(w){w.target.removeEventListener("dispose",R);for(const C in c){const E=c[C],x=w.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const um={[qa]:ja,[Ka]:Qa,[Za]:$a,[bi]:Ja,[ja]:qa,[Qa]:Ka,[$a]:Za,[Ja]:bi};function fm(a,e){function t(){let k=!1;const he=new st;let ee=null;const pe=new st(0,0,0,0);return{setMask:function(Se){ee!==Se&&!k&&(a.colorMask(Se,Se,Se,Se),ee=Se)},setLocked:function(Se){k=Se},setClear:function(Se,ve,Ie,He,ze){ze===!0&&(Se*=He,ve*=He,Ie*=He),he.set(Se,ve,Ie,He),pe.equals(he)===!1&&(a.clearColor(Se,ve,Ie,He),pe.copy(he))},reset:function(){k=!1,ee=null,pe.set(-1,0,0,0)}}}function r(){let k=!1,he=!1,ee=null,pe=null,Se=null;return{setReversed:function(ve){if(he!==ve){const Ie=e.get("EXT_clip_control");he?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const He=Se;Se=null,this.setClear(He)}he=ve},getReversed:function(){return he},setTest:function(ve){ve?V(a.DEPTH_TEST):ne(a.DEPTH_TEST)},setMask:function(ve){ee!==ve&&!k&&(a.depthMask(ve),ee=ve)},setFunc:function(ve){if(he&&(ve=um[ve]),pe!==ve){switch(ve){case qa:a.depthFunc(a.NEVER);break;case ja:a.depthFunc(a.ALWAYS);break;case Ka:a.depthFunc(a.LESS);break;case bi:a.depthFunc(a.LEQUAL);break;case Za:a.depthFunc(a.EQUAL);break;case Ja:a.depthFunc(a.GEQUAL);break;case Qa:a.depthFunc(a.GREATER);break;case $a:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}pe=ve}},setLocked:function(ve){k=ve},setClear:function(ve){Se!==ve&&(he&&(ve=1-ve),a.clearDepth(ve),Se=ve)},reset:function(){k=!1,ee=null,pe=null,Se=null,he=!1}}}function n(){let k=!1,he=null,ee=null,pe=null,Se=null,ve=null,Ie=null,He=null,ze=null;return{setTest:function(Ge){k||(Ge?V(a.STENCIL_TEST):ne(a.STENCIL_TEST))},setMask:function(Ge){he!==Ge&&!k&&(a.stencilMask(Ge),he=Ge)},setFunc:function(Ge,rt,at){(ee!==Ge||pe!==rt||Se!==at)&&(a.stencilFunc(Ge,rt,at),ee=Ge,pe=rt,Se=at)},setOp:function(Ge,rt,at){(ve!==Ge||Ie!==rt||He!==at)&&(a.stencilOp(Ge,rt,at),ve=Ge,Ie=rt,He=at)},setLocked:function(Ge){k=Ge},setClear:function(Ge){ze!==Ge&&(a.clearStencil(Ge),ze=Ge)},reset:function(){k=!1,he=null,ee=null,pe=null,Se=null,ve=null,Ie=null,He=null,ze=null}}}const i=new t,s=new r,o=new n,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,M=null,v=null,R=null,w=null,b=new je(0,0,0),C=0,E=!1,x=null,P=null,U=null,L=null,I=null;const G=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=J>=2);let j=null,q={};const D=a.getParameter(a.SCISSOR_BOX),H=a.getParameter(a.VIEWPORT),Q=new st().fromArray(D),F=new st().fromArray(H);function O(k,he,ee,pe){const Se=new Uint8Array(4),ve=a.createTexture();a.bindTexture(k,ve),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ie=0;Ie<ee;Ie++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(he,0,a.RGBA,1,1,pe,0,a.RGBA,a.UNSIGNED_BYTE,Se):a.texImage2D(he+Ie,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Se);return ve}const $={};$[a.TEXTURE_2D]=O(a.TEXTURE_2D,a.TEXTURE_2D,1),$[a.TEXTURE_CUBE_MAP]=O(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[a.TEXTURE_2D_ARRAY]=O(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),$[a.TEXTURE_3D]=O(a.TEXTURE_3D,a.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),V(a.DEPTH_TEST),s.setFunc(bi),Ae(!1),Ce(ho),V(a.CULL_FACE),B(Dn);function V(k){u[k]!==!0&&(a.enable(k),u[k]=!0)}function ne(k){u[k]!==!1&&(a.disable(k),u[k]=!1)}function _e(k,he){return f[k]!==he?(a.bindFramebuffer(k,he),f[k]=he,k===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=he),k===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=he),!0):!1}function Me(k,he){let ee=d,pe=!1;if(k){ee=h.get(he),ee===void 0&&(ee=[],h.set(he,ee));const Se=k.textures;if(ee.length!==Se.length||ee[0]!==a.COLOR_ATTACHMENT0){for(let ve=0,Ie=Se.length;ve<Ie;ve++)ee[ve]=a.COLOR_ATTACHMENT0+ve;ee.length=Se.length,pe=!0}}else ee[0]!==a.BACK&&(ee[0]=a.BACK,pe=!0);pe&&a.drawBuffers(ee)}function xe(k){return g!==k?(a.useProgram(k),g=k,!0):!1}const oe={[Xn]:a.FUNC_ADD,[Uc]:a.FUNC_SUBTRACT,[Pc]:a.FUNC_REVERSE_SUBTRACT};oe[Dc]=a.MIN,oe[Lc]=a.MAX;const Fe={[Ic]:a.ZERO,[Fc]:a.ONE,[Nc]:a.SRC_COLOR,[Xa]:a.SRC_ALPHA,[Vc]:a.SRC_ALPHA_SATURATE,[zc]:a.DST_COLOR,[Bc]:a.DST_ALPHA,[Oc]:a.ONE_MINUS_SRC_COLOR,[Ya]:a.ONE_MINUS_SRC_ALPHA,[Gc]:a.ONE_MINUS_DST_COLOR,[kc]:a.ONE_MINUS_DST_ALPHA,[Hc]:a.CONSTANT_COLOR,[Wc]:a.ONE_MINUS_CONSTANT_COLOR,[Xc]:a.CONSTANT_ALPHA,[Yc]:a.ONE_MINUS_CONSTANT_ALPHA};function B(k,he,ee,pe,Se,ve,Ie,He,ze,Ge){if(k===Dn){_===!0&&(ne(a.BLEND),_=!1);return}if(_===!1&&(V(a.BLEND),_=!0),k!==Rc){if(k!==m||Ge!==E){if((p!==Xn||v!==Xn)&&(a.blendEquation(a.FUNC_ADD),p=Xn,v=Xn),Ge)switch(k){case Mi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case po:a.blendFunc(a.ONE,a.ONE);break;case mo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case go:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Mi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case po:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case mo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case go:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,M=null,R=null,w=null,b.set(0,0,0),C=0,m=k,E=Ge}return}Se=Se||he,ve=ve||ee,Ie=Ie||pe,(he!==p||Se!==v)&&(a.blendEquationSeparate(oe[he],oe[Se]),p=he,v=Se),(ee!==y||pe!==M||ve!==R||Ie!==w)&&(a.blendFuncSeparate(Fe[ee],Fe[pe],Fe[ve],Fe[Ie]),y=ee,M=pe,R=ve,w=Ie),(He.equals(b)===!1||ze!==C)&&(a.blendColor(He.r,He.g,He.b,ze),b.copy(He),C=ze),m=k,E=!1}function Ne(k,he){k.side===ln?ne(a.CULL_FACE):V(a.CULL_FACE);let ee=k.side===Ft;he&&(ee=!ee),Ae(ee),k.blending===Mi&&k.transparent===!1?B(Dn):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),i.setMask(k.colorWrite);const pe=k.stencilWrite;o.setTest(pe),pe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?V(a.SAMPLE_ALPHA_TO_COVERAGE):ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(k){x!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),x=k)}function Ce(k){k!==Ac?(V(a.CULL_FACE),k!==P&&(k===ho?a.cullFace(a.BACK):k===wc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ne(a.CULL_FACE),P=k}function se(k){k!==U&&(z&&a.lineWidth(k),U=k)}function we(k,he,ee){k?(V(a.POLYGON_OFFSET_FILL),(L!==he||I!==ee)&&(a.polygonOffset(he,ee),L=he,I=ee)):ne(a.POLYGON_OFFSET_FILL)}function me(k){k?V(a.SCISSOR_TEST):ne(a.SCISSOR_TEST)}function T(k){k===void 0&&(k=a.TEXTURE0+G-1),j!==k&&(a.activeTexture(k),j=k)}function S(k,he,ee){ee===void 0&&(j===null?ee=a.TEXTURE0+G-1:ee=j);let pe=q[ee];pe===void 0&&(pe={type:void 0,texture:void 0},q[ee]=pe),(pe.type!==k||pe.texture!==he)&&(j!==ee&&(a.activeTexture(ee),j=ee),a.bindTexture(k,he||$[k]),pe.type=k,pe.texture=he)}function N(){const k=q[j];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{a.compressedTexImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{a.compressedTexImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{a.texSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{a.texSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{a.texStorage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{a.texStorage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{a.texImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{a.texImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(k){Q.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),Q.copy(k))}function ce(k){F.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),F.copy(k))}function Pe(k,he){let ee=c.get(he);ee===void 0&&(ee=new WeakMap,c.set(he,ee));let pe=ee.get(k);pe===void 0&&(pe=a.getUniformBlockIndex(he,k.name),ee.set(k,pe))}function De(k,he){const pe=c.get(he).get(k);l.get(he)!==pe&&(a.uniformBlockBinding(he,pe,k.__bindingPointIndex),l.set(he,pe))}function Ye(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},j=null,q={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,M=null,v=null,R=null,w=null,b=new je(0,0,0),C=0,E=!1,x=null,P=null,U=null,L=null,I=null,Q.set(0,0,a.canvas.width,a.canvas.height),F.set(0,0,a.canvas.width,a.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:V,disable:ne,bindFramebuffer:_e,drawBuffers:Me,useProgram:xe,setBlending:B,setMaterial:Ne,setFlipSided:Ae,setCullFace:Ce,setLineWidth:se,setPolygonOffset:we,setScissorTest:me,activeTexture:T,bindTexture:S,unbindTexture:N,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:ye,texImage3D:Ee,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:Ue,texStorage3D:fe,texSubImage2D:ae,texSubImage3D:de,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Te,viewport:ce,reset:Ye}}function ul(a,e,t,r){const n=hm(r);switch(t){case Fl:return a*e;case Ol:return a*e;case Bl:return a*e*2;case kl:return a*e/n.components*n.byteLength;case Gs:return a*e/n.components*n.byteLength;case zl:return a*e*2/n.components*n.byteLength;case Vs:return a*e*2/n.components*n.byteLength;case Nl:return a*e*3/n.components*n.byteLength;case tn:return a*e*4/n.components*n.byteLength;case Hs:return a*e*4/n.components*n.byteLength;case Or:case Br:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case kr:case zr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case as:case os:return Math.max(a,16)*Math.max(e,8)/4;case rs:case ss:return Math.max(a,8)*Math.max(e,8)/2;case ls:case cs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case us:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case hs:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ds:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case ps:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case ms:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case gs:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case _s:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case vs:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case xs:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ms:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ys:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Es:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ts:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Gr:case bs:case As:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Gl:case ws:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Cs:case Rs:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hm(a){switch(a){case Mn:case Dl:return{byteLength:1,components:1};case er:case Ll:case tr:return{byteLength:2,components:1};case ks:case zs:return{byteLength:2,components:4};case Zn:case Bs:case vn:return{byteLength:4,components:1};case Il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function dm(a,e,t,r,n,i,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return d?new OffscreenCanvas(T,S):Yr("canvas")}function _(T,S,N){let K=1;const Z=me(T);if((Z.width>N||Z.height>N)&&(K=N/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ae=Math.floor(K*Z.width),de=Math.floor(K*Z.height);f===void 0&&(f=g(ae,de));const ue=S?g(ae,de):f;return ue.width=ae,ue.height=de,ue.getContext("2d").drawImage(T,0,0,ae,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ae+"x"+de+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){a.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?a.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function M(T,S,N,K,Z=!1){if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=S;if(S===a.RED&&(N===a.FLOAT&&(ae=a.R32F),N===a.HALF_FLOAT&&(ae=a.R16F),N===a.UNSIGNED_BYTE&&(ae=a.R8)),S===a.RED_INTEGER&&(N===a.UNSIGNED_BYTE&&(ae=a.R8UI),N===a.UNSIGNED_SHORT&&(ae=a.R16UI),N===a.UNSIGNED_INT&&(ae=a.R32UI),N===a.BYTE&&(ae=a.R8I),N===a.SHORT&&(ae=a.R16I),N===a.INT&&(ae=a.R32I)),S===a.RG&&(N===a.FLOAT&&(ae=a.RG32F),N===a.HALF_FLOAT&&(ae=a.RG16F),N===a.UNSIGNED_BYTE&&(ae=a.RG8)),S===a.RG_INTEGER&&(N===a.UNSIGNED_BYTE&&(ae=a.RG8UI),N===a.UNSIGNED_SHORT&&(ae=a.RG16UI),N===a.UNSIGNED_INT&&(ae=a.RG32UI),N===a.BYTE&&(ae=a.RG8I),N===a.SHORT&&(ae=a.RG16I),N===a.INT&&(ae=a.RG32I)),S===a.RGB_INTEGER&&(N===a.UNSIGNED_BYTE&&(ae=a.RGB8UI),N===a.UNSIGNED_SHORT&&(ae=a.RGB16UI),N===a.UNSIGNED_INT&&(ae=a.RGB32UI),N===a.BYTE&&(ae=a.RGB8I),N===a.SHORT&&(ae=a.RGB16I),N===a.INT&&(ae=a.RGB32I)),S===a.RGBA_INTEGER&&(N===a.UNSIGNED_BYTE&&(ae=a.RGBA8UI),N===a.UNSIGNED_SHORT&&(ae=a.RGBA16UI),N===a.UNSIGNED_INT&&(ae=a.RGBA32UI),N===a.BYTE&&(ae=a.RGBA8I),N===a.SHORT&&(ae=a.RGBA16I),N===a.INT&&(ae=a.RGBA32I)),S===a.RGB&&N===a.UNSIGNED_INT_5_9_9_9_REV&&(ae=a.RGB9_E5),S===a.RGBA){const de=Z?Kr:$e.getTransfer(K);N===a.FLOAT&&(ae=a.RGBA32F),N===a.HALF_FLOAT&&(ae=a.RGBA16F),N===a.UNSIGNED_BYTE&&(ae=de===it?a.SRGB8_ALPHA8:a.RGBA8),N===a.UNSIGNED_SHORT_4_4_4_4&&(ae=a.RGBA4),N===a.UNSIGNED_SHORT_5_5_5_1&&(ae=a.RGB5_A1)}return(ae===a.R16F||ae===a.R32F||ae===a.RG16F||ae===a.RG32F||ae===a.RGBA16F||ae===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(T,S){let N;return T?S===null||S===Zn||S===Ci?N=a.DEPTH24_STENCIL8:S===vn?N=a.DEPTH32F_STENCIL8:S===er&&(N=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Zn||S===Ci?N=a.DEPTH_COMPONENT24:S===vn?N=a.DEPTH_COMPONENT32F:S===er&&(N=a.DEPTH_COMPONENT16),N}function R(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==nn&&T.minFilter!==qt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){const S=T.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&u.delete(S)}function b(T){const S=T.target;S.removeEventListener("dispose",b),x(S)}function C(T){const S=r.get(T);if(S.__webglInit===void 0)return;const N=T.source,K=h.get(N);if(K){const Z=K[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(T),Object.keys(K).length===0&&h.delete(N)}r.remove(T)}function E(T){const S=r.get(T);a.deleteTexture(S.__webglTexture);const N=T.source,K=h.get(N);delete K[S.__cacheKey],s.memory.textures--}function x(T){const S=r.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),r.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Z=0;Z<S.__webglFramebuffer[K].length;Z++)a.deleteFramebuffer(S.__webglFramebuffer[K][Z]);else a.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)a.deleteFramebuffer(S.__webglFramebuffer[K]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=T.textures;for(let K=0,Z=N.length;K<Z;K++){const ae=r.get(N[K]);ae.__webglTexture&&(a.deleteTexture(ae.__webglTexture),s.memory.textures--),r.remove(N[K])}r.remove(T)}let P=0;function U(){P=0}function L(){const T=P;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),P+=1,T}function I(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function G(T,S){const N=r.get(T);if(T.isVideoTexture&&se(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(N,T,S);return}}t.bindTexture(a.TEXTURE_2D,N.__webglTexture,a.TEXTURE0+S)}function z(T,S){const N=r.get(T);if(T.version>0&&N.__version!==T.version){F(N,T,S);return}t.bindTexture(a.TEXTURE_2D_ARRAY,N.__webglTexture,a.TEXTURE0+S)}function J(T,S){const N=r.get(T);if(T.version>0&&N.__version!==T.version){F(N,T,S);return}t.bindTexture(a.TEXTURE_3D,N.__webglTexture,a.TEXTURE0+S)}function Y(T,S){const N=r.get(T);if(T.version>0&&N.__version!==T.version){O(N,T,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+S)}const j={[ns]:a.REPEAT,[qn]:a.CLAMP_TO_EDGE,[is]:a.MIRRORED_REPEAT},q={[nn]:a.NEAREST,[nu]:a.NEAREST_MIPMAP_NEAREST,[dr]:a.NEAREST_MIPMAP_LINEAR,[qt]:a.LINEAR,[fa]:a.LINEAR_MIPMAP_NEAREST,[jn]:a.LINEAR_MIPMAP_LINEAR},D={[au]:a.NEVER,[fu]:a.ALWAYS,[su]:a.LESS,[Wl]:a.LEQUAL,[ou]:a.EQUAL,[uu]:a.GEQUAL,[lu]:a.GREATER,[cu]:a.NOTEQUAL};function H(T,S){if(S.type===vn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qt||S.magFilter===fa||S.magFilter===dr||S.magFilter===jn||S.minFilter===qt||S.minFilter===fa||S.minFilter===dr||S.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(T,a.TEXTURE_WRAP_S,j[S.wrapS]),a.texParameteri(T,a.TEXTURE_WRAP_T,j[S.wrapT]),(T===a.TEXTURE_3D||T===a.TEXTURE_2D_ARRAY)&&a.texParameteri(T,a.TEXTURE_WRAP_R,j[S.wrapR]),a.texParameteri(T,a.TEXTURE_MAG_FILTER,q[S.magFilter]),a.texParameteri(T,a.TEXTURE_MIN_FILTER,q[S.minFilter]),S.compareFunction&&(a.texParameteri(T,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(T,a.TEXTURE_COMPARE_FUNC,D[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==dr&&S.minFilter!==jn||S.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");a.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function Q(T,S){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));const K=S.source;let Z=h.get(K);Z===void 0&&(Z={},h.set(K,Z));const ae=I(S);if(ae!==T.__cacheKey){Z[ae]===void 0&&(Z[ae]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,N=!0),Z[ae].usedTimes++;const de=Z[T.__cacheKey];de!==void 0&&(Z[T.__cacheKey].usedTimes--,de.usedTimes===0&&E(S)),T.__cacheKey=ae,T.__webglTexture=Z[ae].texture}return N}function F(T,S,N){let K=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=a.TEXTURE_3D);const Z=Q(T,S),ae=S.source;t.bindTexture(K,T.__webglTexture,a.TEXTURE0+N);const de=r.get(ae);if(ae.version!==de.__version||Z===!0){t.activeTexture(a.TEXTURE0+N);const ue=$e.getPrimaries($e.workingColorSpace),ge=S.colorSpace===Pn?null:$e.getPrimaries(S.colorSpace),Ue=S.colorSpace===Pn||ue===ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let fe=_(S.image,!1,n.maxTextureSize);fe=we(S,fe);const ye=i.convert(S.format,S.colorSpace),Ee=i.convert(S.type);let Te=M(S.internalFormat,ye,Ee,S.colorSpace,S.isVideoTexture);H(K,S);let ce;const Pe=S.mipmaps,De=S.isVideoTexture!==!0,Ye=de.__version===void 0||Z===!0,k=ae.dataReady,he=R(S,fe);if(S.isDepthTexture)Te=v(S.format===Ri,S.type),Ye&&(De?t.texStorage2D(a.TEXTURE_2D,1,Te,fe.width,fe.height):t.texImage2D(a.TEXTURE_2D,0,Te,fe.width,fe.height,0,ye,Ee,null));else if(S.isDataTexture)if(Pe.length>0){De&&Ye&&t.texStorage2D(a.TEXTURE_2D,he,Te,Pe[0].width,Pe[0].height);for(let ee=0,pe=Pe.length;ee<pe;ee++)ce=Pe[ee],De?k&&t.texSubImage2D(a.TEXTURE_2D,ee,0,0,ce.width,ce.height,ye,Ee,ce.data):t.texImage2D(a.TEXTURE_2D,ee,Te,ce.width,ce.height,0,ye,Ee,ce.data);S.generateMipmaps=!1}else De?(Ye&&t.texStorage2D(a.TEXTURE_2D,he,Te,fe.width,fe.height),k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,fe.width,fe.height,ye,Ee,fe.data)):t.texImage2D(a.TEXTURE_2D,0,Te,fe.width,fe.height,0,ye,Ee,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&Ye&&t.texStorage3D(a.TEXTURE_2D_ARRAY,he,Te,Pe[0].width,Pe[0].height,fe.depth);for(let ee=0,pe=Pe.length;ee<pe;ee++)if(ce=Pe[ee],S.format!==tn)if(ye!==null)if(De){if(k)if(S.layerUpdates.size>0){const Se=ul(ce.width,ce.height,S.format,S.type);for(const ve of S.layerUpdates){const Ie=ce.data.subarray(ve*Se/ce.data.BYTES_PER_ELEMENT,(ve+1)*Se/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ee,0,0,ve,ce.width,ce.height,1,ye,Ie)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,fe.depth,ye,ce.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ee,Te,ce.width,ce.height,fe.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?k&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,fe.depth,ye,Ee,ce.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ee,Te,ce.width,ce.height,fe.depth,0,ye,Ee,ce.data)}else{De&&Ye&&t.texStorage2D(a.TEXTURE_2D,he,Te,Pe[0].width,Pe[0].height);for(let ee=0,pe=Pe.length;ee<pe;ee++)ce=Pe[ee],S.format!==tn?ye!==null?De?k&&t.compressedTexSubImage2D(a.TEXTURE_2D,ee,0,0,ce.width,ce.height,ye,ce.data):t.compressedTexImage2D(a.TEXTURE_2D,ee,Te,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?k&&t.texSubImage2D(a.TEXTURE_2D,ee,0,0,ce.width,ce.height,ye,Ee,ce.data):t.texImage2D(a.TEXTURE_2D,ee,Te,ce.width,ce.height,0,ye,Ee,ce.data)}else if(S.isDataArrayTexture)if(De){if(Ye&&t.texStorage3D(a.TEXTURE_2D_ARRAY,he,Te,fe.width,fe.height,fe.depth),k)if(S.layerUpdates.size>0){const ee=ul(fe.width,fe.height,S.format,S.type);for(const pe of S.layerUpdates){const Se=fe.data.subarray(pe*ee/fe.data.BYTES_PER_ELEMENT,(pe+1)*ee/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,fe.width,fe.height,1,ye,Ee,Se)}S.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ye,Ee,fe.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Te,fe.width,fe.height,fe.depth,0,ye,Ee,fe.data);else if(S.isData3DTexture)De?(Ye&&t.texStorage3D(a.TEXTURE_3D,he,Te,fe.width,fe.height,fe.depth),k&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ye,Ee,fe.data)):t.texImage3D(a.TEXTURE_3D,0,Te,fe.width,fe.height,fe.depth,0,ye,Ee,fe.data);else if(S.isFramebufferTexture){if(Ye)if(De)t.texStorage2D(a.TEXTURE_2D,he,Te,fe.width,fe.height);else{let ee=fe.width,pe=fe.height;for(let Se=0;Se<he;Se++)t.texImage2D(a.TEXTURE_2D,Se,Te,ee,pe,0,ye,Ee,null),ee>>=1,pe>>=1}}else if(Pe.length>0){if(De&&Ye){const ee=me(Pe[0]);t.texStorage2D(a.TEXTURE_2D,he,Te,ee.width,ee.height)}for(let ee=0,pe=Pe.length;ee<pe;ee++)ce=Pe[ee],De?k&&t.texSubImage2D(a.TEXTURE_2D,ee,0,0,ye,Ee,ce):t.texImage2D(a.TEXTURE_2D,ee,Te,ye,Ee,ce);S.generateMipmaps=!1}else if(De){if(Ye){const ee=me(fe);t.texStorage2D(a.TEXTURE_2D,he,Te,ee.width,ee.height)}k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ye,Ee,fe)}else t.texImage2D(a.TEXTURE_2D,0,Te,ye,Ee,fe);m(S)&&p(K),de.__version=ae.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function O(T,S,N){if(S.image.length!==6)return;const K=Q(T,S),Z=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,T.__webglTexture,a.TEXTURE0+N);const ae=r.get(Z);if(Z.version!==ae.__version||K===!0){t.activeTexture(a.TEXTURE0+N);const de=$e.getPrimaries($e.workingColorSpace),ue=S.colorSpace===Pn?null:$e.getPrimaries(S.colorSpace),ge=S.colorSpace===Pn||de===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let pe=0;pe<6;pe++)!Ue&&!fe?ye[pe]=_(S.image[pe],!0,n.maxCubemapSize):ye[pe]=fe?S.image[pe].image:S.image[pe],ye[pe]=we(S,ye[pe]);const Ee=ye[0],Te=i.convert(S.format,S.colorSpace),ce=i.convert(S.type),Pe=M(S.internalFormat,Te,ce,S.colorSpace),De=S.isVideoTexture!==!0,Ye=ae.__version===void 0||K===!0,k=Z.dataReady;let he=R(S,Ee);H(a.TEXTURE_CUBE_MAP,S);let ee;if(Ue){De&&Ye&&t.texStorage2D(a.TEXTURE_CUBE_MAP,he,Pe,Ee.width,Ee.height);for(let pe=0;pe<6;pe++){ee=ye[pe].mipmaps;for(let Se=0;Se<ee.length;Se++){const ve=ee[Se];S.format!==tn?Te!==null?De?k&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,0,0,ve.width,ve.height,Te,ve.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,0,0,ve.width,ve.height,Te,ce,ve.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,Pe,ve.width,ve.height,0,Te,ce,ve.data)}}}else{if(ee=S.mipmaps,De&&Ye){ee.length>0&&he++;const pe=me(ye[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,he,Pe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(fe){De?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ye[pe].width,ye[pe].height,Te,ce,ye[pe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Pe,ye[pe].width,ye[pe].height,0,Te,ce,ye[pe].data);for(let Se=0;Se<ee.length;Se++){const Ie=ee[Se].image[pe].image;De?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,0,0,Ie.width,Ie.height,Te,ce,Ie.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,Pe,Ie.width,Ie.height,0,Te,ce,Ie.data)}}else{De?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te,ce,ye[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Pe,Te,ce,ye[pe]);for(let Se=0;Se<ee.length;Se++){const ve=ee[Se];De?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,0,0,Te,ce,ve.image[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,Pe,Te,ce,ve.image[pe])}}}m(S)&&p(a.TEXTURE_CUBE_MAP),ae.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function $(T,S,N,K,Z,ae){const de=i.convert(N.format,N.colorSpace),ue=i.convert(N.type),ge=M(N.internalFormat,de,ue,N.colorSpace),Ue=r.get(S),fe=r.get(N);if(fe.__renderTarget=S,!Ue.__hasExternalTextures){const ye=Math.max(1,S.width>>ae),Ee=Math.max(1,S.height>>ae);Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY?t.texImage3D(Z,ae,ge,ye,Ee,S.depth,0,de,ue,null):t.texImage2D(Z,ae,ge,ye,Ee,0,de,ue,null)}t.bindFramebuffer(a.FRAMEBUFFER,T),Ce(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,Z,fe.__webglTexture,0,Ae(S)):(Z===a.TEXTURE_2D||Z>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,K,Z,fe.__webglTexture,ae),t.bindFramebuffer(a.FRAMEBUFFER,null)}function V(T,S,N){if(a.bindRenderbuffer(a.RENDERBUFFER,T),S.depthBuffer){const K=S.depthTexture,Z=K&&K.isDepthTexture?K.type:null,ae=v(S.stencilBuffer,Z),de=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ue=Ae(S);Ce(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ue,ae,S.width,S.height):N?a.renderbufferStorageMultisample(a.RENDERBUFFER,ue,ae,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ae,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,T)}else{const K=S.textures;for(let Z=0;Z<K.length;Z++){const ae=K[Z],de=i.convert(ae.format,ae.colorSpace),ue=i.convert(ae.type),ge=M(ae.internalFormat,de,ue,ae.colorSpace),Ue=Ae(S);N&&Ce(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,ge,S.width,S.height):Ce(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ue,ge,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ge,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ne(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=r.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const Z=K.__webglTexture,ae=Ae(S);if(S.depthTexture.format===yi)Ce(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Ri)Ce(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function _e(T){const S=r.get(T),N=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=K}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ne(S.__webglFramebuffer,T)}else if(N){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=a.createRenderbuffer(),V(S.__webglDepthbuffer[K],T,!1);else{const Z=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer[K];a.bindRenderbuffer(a.RENDERBUFFER,ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),V(S.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Z),a.framebufferRenderbuffer(a.FRAMEBUFFER,K,a.RENDERBUFFER,Z)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Me(T,S,N){const K=r.get(T);S!==void 0&&$(K.__webglFramebuffer,T,T.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),N!==void 0&&_e(T)}function xe(T){const S=T.texture,N=r.get(T),K=r.get(S);T.addEventListener("dispose",b);const Z=T.textures,ae=T.isWebGLCubeRenderTarget===!0,de=Z.length>1;if(de||(K.__webglTexture===void 0&&(K.__webglTexture=a.createTexture()),K.__version=S.version,s.memory.textures++),ae){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let ge=0;ge<S.mipmaps.length;ge++)N.__webglFramebuffer[ue][ge]=a.createFramebuffer()}else N.__webglFramebuffer[ue]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)N.__webglFramebuffer[ue]=a.createFramebuffer()}else N.__webglFramebuffer=a.createFramebuffer();if(de)for(let ue=0,ge=Z.length;ue<ge;ue++){const Ue=r.get(Z[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=a.createTexture(),s.memory.textures++)}if(T.samples>0&&Ce(T)===!1){N.__webglMultisampledFramebuffer=a.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const ge=Z[ue];N.__webglColorRenderbuffer[ue]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const Ue=i.convert(ge.format,ge.colorSpace),fe=i.convert(ge.type),ye=M(ge.internalFormat,Ue,fe,ge.colorSpace,T.isXRRenderTarget===!0),Ee=Ae(T);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ee,ye,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}a.bindRenderbuffer(a.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=a.createRenderbuffer(),V(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ae){t.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture),H(a.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)$(N.__webglFramebuffer[ue][ge],T,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else $(N.__webglFramebuffer[ue],T,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ue=0,ge=Z.length;ue<ge;ue++){const Ue=Z[ue],fe=r.get(Ue);t.bindTexture(a.TEXTURE_2D,fe.__webglTexture),H(a.TEXTURE_2D,Ue),$(N.__webglFramebuffer,T,Ue,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,0),m(Ue)&&p(a.TEXTURE_2D)}t.unbindTexture()}else{let ue=a.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),H(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)$(N.__webglFramebuffer[ge],T,S,a.COLOR_ATTACHMENT0,ue,ge);else $(N.__webglFramebuffer,T,S,a.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}T.depthBuffer&&_e(T)}function oe(T){const S=T.textures;for(let N=0,K=S.length;N<K;N++){const Z=S[N];if(m(Z)){const ae=y(T),de=r.get(Z).__webglTexture;t.bindTexture(ae,de),p(ae),t.unbindTexture()}}}const Fe=[],B=[];function Ne(T){if(T.samples>0){if(Ce(T)===!1){const S=T.textures,N=T.width,K=T.height;let Z=a.COLOR_BUFFER_BIT;const ae=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=r.get(T),ue=S.length>1;if(ue)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(a.FRAMEBUFFER,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,de.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=a.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=a.STENCIL_BUFFER_BIT)),ue){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);const Ue=r.get(S[ge]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ue,0)}a.blitFramebuffer(0,0,N,K,0,0,N,K,Z,a.NEAREST),l===!0&&(Fe.length=0,B.length=0,Fe.push(a.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Fe.push(ae),B.push(ae),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,B)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(a.FRAMEBUFFER,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);const Ue=r.get(S[ge]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,de.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.TEXTURE_2D,Ue,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function Ae(T){return Math.min(n.maxSamples,T.samples)}function Ce(T){const S=r.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(T){const S=s.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function we(T,S){const N=T.colorSpace,K=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Pi&&N!==Pn&&($e.getTransfer(N)===it?(K!==tn||Z!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=Me,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ce}function pm(a,e){function t(r,n=Pn){let i;const s=$e.getTransfer(n);if(r===Mn)return a.UNSIGNED_BYTE;if(r===ks)return a.UNSIGNED_SHORT_4_4_4_4;if(r===zs)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Il)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Dl)return a.BYTE;if(r===Ll)return a.SHORT;if(r===er)return a.UNSIGNED_SHORT;if(r===Bs)return a.INT;if(r===Zn)return a.UNSIGNED_INT;if(r===vn)return a.FLOAT;if(r===tr)return a.HALF_FLOAT;if(r===Fl)return a.ALPHA;if(r===Nl)return a.RGB;if(r===tn)return a.RGBA;if(r===Ol)return a.LUMINANCE;if(r===Bl)return a.LUMINANCE_ALPHA;if(r===yi)return a.DEPTH_COMPONENT;if(r===Ri)return a.DEPTH_STENCIL;if(r===kl)return a.RED;if(r===Gs)return a.RED_INTEGER;if(r===zl)return a.RG;if(r===Vs)return a.RG_INTEGER;if(r===Hs)return a.RGBA_INTEGER;if(r===Or||r===Br||r===kr||r===zr)if(s===it)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===Or)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Br)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===Or)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Br)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kr)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zr)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rs||r===as||r===ss||r===os)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===rs)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===as)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ss)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===os)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ls||r===cs||r===us)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===ls||r===cs)return s===it?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===us)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fs||r===hs||r===ds||r===ps||r===ms||r===gs||r===_s||r===vs||r===xs||r===Ss||r===Ms||r===ys||r===Es||r===Ts)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===fs)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hs)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ds)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ps)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ms)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gs)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_s)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vs)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xs)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ss)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ms)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ys)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Es)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ts)return s===it?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gr||r===bs||r===As)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===Gr)return s===it?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bs)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===As)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gl||r===ws||r===Cs||r===Rs)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===Gr)return i.COMPRESSED_RED_RGTC1_EXT;if(r===ws)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cs)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rs)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ci?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:t}}class mm extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ir extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gm={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,r),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ir;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const _m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new Tt,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Fn({vertexShader:_m,fragmentShader:vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new $n(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sm extends Di{constructor(e,t){super();const r=this;let n=null,i=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new xm,m=t.getContextAttributes();let p=null,y=null;const M=[],v=[],R=new Ke;let w=null;const b=new Yt;b.viewport=new st;const C=new Yt;C.viewport=new st;const E=[b,C],x=new mm;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let O=M[F];return O===void 0&&(O=new za,M[F]=O),O.getTargetRaySpace()},this.getControllerGrip=function(F){let O=M[F];return O===void 0&&(O=new za,M[F]=O),O.getGripSpace()},this.getHand=function(F){let O=M[F];return O===void 0&&(O=new za,M[F]=O),O.getHandSpace()};function L(F){const O=v.indexOf(F.inputSource);if(O===-1)return;const $=M[O];$!==void 0&&($.update(F.inputSource,F.frame,c||s),$.dispatchEvent({type:F.type,data:F.inputSource}))}function I(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",I),n.removeEventListener("inputsourceschange",G);for(let F=0;F<M.length;F++){const O=v[F];O!==null&&(v[F]=null,M[F].disconnect(O))}P=null,U=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,n=null,y=null,Q.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){i=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",I),n.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),n.renderState.layers===void 0){const O={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,O),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Jn(d.framebufferWidth,d.framebufferHeight,{format:tn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let O=null,$=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=m.stencil?Ri:yi,$=m.stencil?Ci:Zn);const ne={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:i};f=new XRWebGLBinding(n,t),h=f.createProjectionLayer(ne),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Jn(h.textureWidth,h.textureHeight,{format:tn,type:Mn,depthTexture:new rc(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),Q.setContext(n),Q.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(F){for(let O=0;O<F.removed.length;O++){const $=F.removed[O],V=v.indexOf($);V>=0&&(v[V]=null,M[V].disconnect($))}for(let O=0;O<F.added.length;O++){const $=F.added[O];let V=v.indexOf($);if(V===-1){for(let _e=0;_e<M.length;_e++)if(_e>=v.length){v.push($),V=_e;break}else if(v[_e]===null){v[_e]=$,V=_e;break}if(V===-1)break}const ne=M[V];ne&&ne.connect($)}}const z=new te,J=new te;function Y(F,O,$){z.setFromMatrixPosition(O.matrixWorld),J.setFromMatrixPosition($.matrixWorld);const V=z.distanceTo(J),ne=O.projectionMatrix.elements,_e=$.projectionMatrix.elements,Me=ne[14]/(ne[10]-1),xe=ne[14]/(ne[10]+1),oe=(ne[9]+1)/ne[5],Fe=(ne[9]-1)/ne[5],B=(ne[8]-1)/ne[0],Ne=(_e[8]+1)/_e[0],Ae=Me*B,Ce=Me*Ne,se=V/(-B+Ne),we=se*-B;if(O.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(we),F.translateZ(se),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ne[10]===-1)F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const me=Me+se,T=xe+se,S=Ae-we,N=Ce+(V-we),K=oe*xe/T*me,Z=Fe*xe/T*me;F.projectionMatrix.makePerspective(S,N,K,Z,me,T),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function j(F,O){O===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(O.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;let O=F.near,$=F.far;_.texture!==null&&(_.depthNear>0&&(O=_.depthNear),_.depthFar>0&&($=_.depthFar)),x.near=C.near=b.near=O,x.far=C.far=b.far=$,(P!==x.near||U!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,U=x.far),b.layers.mask=F.layers.mask|2,C.layers.mask=F.layers.mask|4,x.layers.mask=b.layers.mask|C.layers.mask;const V=F.parent,ne=x.cameras;j(x,V);for(let _e=0;_e<ne.length;_e++)j(ne[_e],V);ne.length===2?Y(x,b,C):x.projectionMatrix.copy(b.projectionMatrix),q(F,x,V)};function q(F,O,$){$===null?F.matrix.copy(O.matrixWorld):(F.matrix.copy($.matrixWorld),F.matrix.invert(),F.matrix.multiply(O.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Us*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let D=null;function H(F,O){if(u=O.getViewerPose(c||s),g=O,u!==null){const $=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let V=!1;$.length!==x.cameras.length&&(x.cameras.length=0,V=!0);for(let _e=0;_e<$.length;_e++){const Me=$[_e];let xe=null;if(d!==null)xe=d.getViewport(Me);else{const Fe=f.getViewSubImage(h,Me);xe=Fe.viewport,_e===0&&(e.setRenderTargetTextures(y,Fe.colorTexture,h.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(y))}let oe=E[_e];oe===void 0&&(oe=new Yt,oe.layers.enable(_e),oe.viewport=new st,E[_e]=oe),oe.matrix.fromArray(Me.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Me.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(xe.x,xe.y,xe.width,xe.height),_e===0&&(x.matrix.copy(oe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),V===!0&&x.cameras.push(oe)}const ne=n.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const _e=f.getDepthInformation($[0]);_e&&_e.isValid&&_e.texture&&_.init(e,_e,n.renderState)}}for(let $=0;$<M.length;$++){const V=v[$],ne=M[$];V!==null&&ne!==void 0&&ne.update(V,O,c||s)}D&&D(F,O),O.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:O}),g=null}const Q=new nc;Q.setAnimationLoop(H),this.setAnimationLoop=function(F){D=F},this.dispose=function(){}}}const Gn=new cn,Mm=new ot;function ym(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,Ql(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),f(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),_(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,Gn.copy(v),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Gn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Em(a,e,t,r){let n={},i={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const v=M.program;r.uniformBlockBinding(y,v)}function c(y,M){let v=n[y.id];v===void 0&&(g(y),v=u(y),n[y.id]=v,y.addEventListener("dispose",m));const R=M.program;r.updateUBOMapping(y,R);const w=e.render.frame;i[y.id]!==w&&(h(y),i[y.id]=w)}function u(y){const M=f();y.__bindingPointIndex=M;const v=a.createBuffer(),R=y.__size,w=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,v),a.bufferData(a.UNIFORM_BUFFER,R,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,M,v),v}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=n[y.id],v=y.uniforms,R=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,M);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,x=C.length;E<x;E++){const P=C[E];if(d(P,w,E,R)===!0){const U=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let I=0;for(let G=0;G<L.length;G++){const z=L[G],J=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,U+I,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,I),I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,U,P.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(y,M,v,R){const w=y.value,b=M+"_"+v;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const C=R[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){const M=y.uniforms;let v=0;const R=16;for(let b=0,C=M.length;b<C;b++){const E=Array.isArray(M[b])?M[b]:[M[b]];for(let x=0,P=E.length;x<P;x++){const U=E[x],L=Array.isArray(U.value)?U.value:[U.value];for(let I=0,G=L.length;I<G;I++){const z=L[I],J=_(z),Y=v%R,j=Y%J.boundary,q=Y+j;v+=j,q!==0&&R-q<J.storage&&(v+=R-q),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=J.storage}}}const w=v%R;return w>0&&(v+=R-w),y.__size=v,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const v=s.indexOf(M.__bindingPointIndex);s.splice(v,1),a.deleteBuffer(n[M.id]),delete n[M.id],delete i[M.id]}function p(){for(const y in n)a.deleteBuffer(n[y]);s=[],n={},i={}}return{bind:l,update:c,dispose:p}}class Tm{constructor(e={}){const{canvas:t=du(),context:r=null,depth:n=!0,stencil:i=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=s;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Ln,this.toneMappingExposure=1;const v=this;let R=!1,w=0,b=0,C=null,E=-1,x=null;const P=new st,U=new st;let L=null;const I=new je(0);let G=0,z=t.width,J=t.height,Y=1,j=null,q=null;const D=new st(0,0,z,J),H=new st(0,0,z,J);let Q=!1;const F=new Ws;let O=!1,$=!1;const V=new ot,ne=new ot,_e=new te,Me=new st,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Fe(){return C===null?Y:1}let B=r;function Ne(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ns}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ve,!1),B===null){const X="webgl2";if(B=Ne(X,A),B===null)throw Ne(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ae,Ce,se,we,me,T,S,N,K,Z,ae,de,ue,ge,Ue,fe,ye,Ee,Te,ce,Pe,De,Ye,k;function he(){Ae=new Pd(B),Ae.init(),De=new pm(B,Ae),Ce=new bd(B,Ae,e,De),se=new fm(B,Ae),Ce.reverseDepthBuffer&&h&&se.buffers.depth.setReversed(!0),we=new Id(B),me=new Qp,T=new dm(B,Ae,se,me,Ce,De,we),S=new wd(v),N=new Ud(v),K=new zu(B),Ye=new Ed(B,K),Z=new Dd(B,K,we,Ye),ae=new Nd(B,Z,K,we),Te=new Fd(B,Ce,T),fe=new Ad(me),de=new Jp(v,S,N,Ae,Ce,Ye,fe),ue=new ym(v,me),ge=new em,Ue=new sm(Ae),Ee=new yd(v,S,N,se,ae,d,l),ye=new cm(v,ae,Ce),k=new Em(B,we,Ce,se),ce=new Td(B,Ae,we),Pe=new Ld(B,Ae,we),we.programs=de.programs,v.capabilities=Ce,v.extensions=Ae,v.properties=me,v.renderLists=ge,v.shadowMap=ye,v.state=se,v.info=we}he();const ee=new Sm(v,B);this.xr=ee,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(z,J,!1))},this.getSize=function(A){return A.set(z,J)},this.setSize=function(A,X,re=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,J=X,t.width=Math.floor(A*Y),t.height=Math.floor(X*Y),re===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(z*Y,J*Y).floor()},this.setDrawingBufferSize=function(A,X,re){z=A,J=X,Y=re,t.width=Math.floor(A*re),t.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,X,re,ie){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,X,re,ie),se.viewport(P.copy(D).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,X,re,ie){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,X,re,ie),se.scissor(U.copy(H).multiplyScalar(Y).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(A){se.setScissorTest(Q=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(A=!0,X=!0,re=!0){let ie=0;if(A){let W=!1;if(C!==null){const be=C.texture.format;W=be===Hs||be===Vs||be===Gs}if(W){const be=C.texture.type,le=be===Mn||be===Zn||be===er||be===Ci||be===ks||be===zs,Le=Ee.getClearColor(),Be=Ee.getClearAlpha(),Ve=Le.r,We=Le.g,Oe=Le.b;le?(g[0]=Ve,g[1]=We,g[2]=Oe,g[3]=Be,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Ve,_[1]=We,_[2]=Oe,_[3]=Be,B.clearBufferiv(B.COLOR,0,_))}else ie|=B.COLOR_BUFFER_BIT}X&&(ie|=B.DEPTH_BUFFER_BIT),re&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ge.dispose(),Ue.dispose(),me.dispose(),S.dispose(),N.dispose(),ae.dispose(),Ye.dispose(),k.dispose(),de.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",lt),ee.removeEventListener("sessionend",bt),xt.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=we.autoReset,X=ye.enabled,re=ye.autoUpdate,ie=ye.needsUpdate,W=ye.type;he(),we.autoReset=A,ye.enabled=X,ye.autoUpdate=re,ye.needsUpdate=ie,ye.type=W}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ie(A){const X=A.target;X.removeEventListener("dispose",Ie),He(X)}function He(A){ze(A),me.remove(A)}function ze(A){const X=me.get(A).programs;X!==void 0&&(X.forEach(function(re){de.releaseProgram(re)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,ie,W,be){X===null&&(X=xe);const le=W.isMesh&&W.matrixWorld.determinant()<0,Le=ea(A,X,re,ie,W);se.setMaterial(ie,le);let Be=re.index,Ve=1;if(ie.wireframe===!0){if(Be=Z.getWireframeAttribute(re),Be===void 0)return;Ve=2}const We=re.drawRange,Oe=re.attributes.position;let Ze=We.start*Ve,et=(We.start+We.count)*Ve;be!==null&&(Ze=Math.max(Ze,be.start*Ve),et=Math.min(et,(be.start+be.count)*Ve)),Be!==null?(Ze=Math.max(Ze,0),et=Math.min(et,Be.count)):Oe!=null&&(Ze=Math.max(Ze,0),et=Math.min(et,Oe.count));const tt=et-Ze;if(tt<0||tt===1/0)return;Ye.setup(W,ie,Le,re,Be);let gt,Je=ce;if(Be!==null&&(gt=K.get(Be),Je=Pe,Je.setIndex(gt)),W.isMesh)ie.wireframe===!0?(se.setLineWidth(ie.wireframeLinewidth*Fe()),Je.setMode(B.LINES)):Je.setMode(B.TRIANGLES);else if(W.isLine){let ke=ie.linewidth;ke===void 0&&(ke=1),se.setLineWidth(ke*Fe()),W.isLineSegments?Je.setMode(B.LINES):W.isLineLoop?Je.setMode(B.LINE_LOOP):Je.setMode(B.LINE_STRIP)}else W.isPoints?Je.setMode(B.POINTS):W.isSprite&&Je.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Je.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Je.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ke=W._multiDrawStarts,Ot=W._multiDrawCounts,Qe=W._multiDrawCount,_t=Be?K.get(Be).bytesPerElement:1,sn=me.get(ie).currentProgram.getUniforms();for(let ut=0;ut<Qe;ut++)sn.setValue(B,"_gl_DrawID",ut),Je.render(ke[ut]/_t,Ot[ut])}else if(W.isInstancedMesh)Je.renderInstances(Ze,tt,W.count);else if(re.isInstancedBufferGeometry){const ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ot=Math.min(re.instanceCount,ke);Je.renderInstances(Ze,tt,Ot)}else Je.render(Ze,tt)};function Ge(A,X,re){A.transparent===!0&&A.side===ln&&A.forceSinglePass===!1?(A.side=Ft,A.needsUpdate=!0,Ht(A,X,re),A.side=In,A.needsUpdate=!0,Ht(A,X,re),A.side=ln):Ht(A,X,re)}this.compile=function(A,X,re=null){re===null&&(re=A),p=Ue.get(re),p.init(X),M.push(p),re.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==re&&A.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const ie=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const be=W.material;if(be)if(Array.isArray(be))for(let le=0;le<be.length;le++){const Le=be[le];Ge(Le,re,W),ie.add(Le)}else Ge(be,re,W),ie.add(be)}),M.pop(),p=null,ie},this.compileAsync=function(A,X,re=null){const ie=this.compile(A,X,re);return new Promise(W=>{function be(){if(ie.forEach(function(le){me.get(le).currentProgram.isReady()&&ie.delete(le)}),ie.size===0){W(A);return}setTimeout(be,10)}Ae.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rt=null;function at(A){rt&&rt(A)}function lt(){xt.stop()}function bt(){xt.start()}const xt=new nc;xt.setAnimationLoop(at),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(A){rt=A,ee.setAnimationLoop(A),A===null?xt.stop():xt.start()},ee.addEventListener("sessionstart",lt),ee.addEventListener("sessionend",bt),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(X),X=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,X,C),p=Ue.get(A,M.length),p.init(X),M.push(p),ne.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),F.setFromProjectionMatrix(ne),$=this.localClippingEnabled,O=fe.init(this.clippingPlanes,$),m=ge.get(A,y.length),m.init(),y.push(m),ee.enabled===!0&&ee.isPresenting===!0){const be=v.xr.getDepthSensingMesh();be!==null&&Nt(be,X,-1/0,v.sortObjects)}Nt(A,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,q),oe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,oe&&Ee.addToRenderList(m,A),this.info.render.frame++,O===!0&&fe.beginShadows();const re=p.state.shadowsArray;ye.render(re,A,X),O===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,W=m.transmissive;if(p.setupLights(),X.isArrayCamera){const be=X.cameras;if(W.length>0)for(let le=0,Le=be.length;le<Le;le++){const Be=be[le];an(ie,W,A,Be)}oe&&Ee.render(A);for(let le=0,Le=be.length;le<Le;le++){const Be=be[le];jt(m,A,Be,Be.viewport)}}else W.length>0&&an(ie,W,A,X),oe&&Ee.render(A),jt(m,A,X);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,X),Ye.resetDefaultState(),E=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],O===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Nt(A,X,re,ie){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||F.intersectsSprite(A)){ie&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const le=ae.update(A),Le=A.material;Le.visible&&m.push(A,le,Le,re,Me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||F.intersectsObject(A))){const le=ae.update(A),Le=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Me.copy(le.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(Le)){const Be=le.groups;for(let Ve=0,We=Be.length;Ve<We;Ve++){const Oe=Be[Ve],Ze=Le[Oe.materialIndex];Ze&&Ze.visible&&m.push(A,le,Ze,re,Me.z,Oe)}}else Le.visible&&m.push(A,le,Le,re,Me.z,null)}}const be=A.children;for(let le=0,Le=be.length;le<Le;le++)Nt(be[le],X,re,ie)}function jt(A,X,re,ie){const W=A.opaque,be=A.transmissive,le=A.transparent;p.setupLightsView(re),O===!0&&fe.setGlobalState(v.clippingPlanes,re),ie&&se.viewport(P.copy(ie)),W.length>0&&At(W,X,re),be.length>0&&At(be,X,re),le.length>0&&At(le,X,re),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function an(A,X,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new Jn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?tr:Mn,minFilter:jn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const be=p.state.transmissionRenderTarget[ie.id],le=ie.viewport||P;be.setSize(le.z,le.w);const Le=v.getRenderTarget();v.setRenderTarget(be),v.getClearColor(I),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),oe&&Ee.render(re);const Be=v.toneMapping;v.toneMapping=Ln;const Ve=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),O===!0&&fe.setGlobalState(v.clippingPlanes,ie),At(A,re,ie),T.updateMultisampleRenderTarget(be),T.updateRenderTargetMipmap(be),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Oe=0,Ze=X.length;Oe<Ze;Oe++){const et=X[Oe],tt=et.object,gt=et.geometry,Je=et.material,ke=et.group;if(Je.side===ln&&tt.layers.test(ie.layers)){const Ot=Je.side;Je.side=Ft,Je.needsUpdate=!0,pt(tt,re,ie,gt,Je,ke),Je.side=Ot,Je.needsUpdate=!0,We=!0}}We===!0&&(T.updateMultisampleRenderTarget(be),T.updateRenderTargetMipmap(be))}v.setRenderTarget(Le),v.setClearColor(I,G),Ve!==void 0&&(ie.viewport=Ve),v.toneMapping=Be}function At(A,X,re){const ie=X.isScene===!0?X.overrideMaterial:null;for(let W=0,be=A.length;W<be;W++){const le=A[W],Le=le.object,Be=le.geometry,Ve=ie===null?le.material:ie,We=le.group;Le.layers.test(re.layers)&&pt(Le,X,re,Be,Ve,We)}}function pt(A,X,re,ie,W,be){A.onBeforeRender(v,X,re,ie,W,be),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,X,re,ie,A,be),W.transparent===!0&&W.side===ln&&W.forceSinglePass===!1?(W.side=Ft,W.needsUpdate=!0,v.renderBufferDirect(re,X,ie,W,A,be),W.side=In,W.needsUpdate=!0,v.renderBufferDirect(re,X,ie,W,A,be),W.side=ln):v.renderBufferDirect(re,X,ie,W,A,be),A.onAfterRender(v,X,re,ie,W,be)}function Ht(A,X,re){X.isScene!==!0&&(X=xe);const ie=me.get(A),W=p.state.lights,be=p.state.shadowsArray,le=W.state.version,Le=de.getParameters(A,W.state,be,X,re),Be=de.getProgramCacheKey(Le);let Ve=ie.programs;ie.environment=A.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(A.isMeshStandardMaterial?N:S).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Ie),Ve=new Map,ie.programs=Ve);let We=Ve.get(Be);if(We!==void 0){if(ie.currentProgram===We&&ie.lightsStateVersion===le)return ei(A,Le),We}else Le.uniforms=de.getUniforms(A),A.onBeforeCompile(Le,v),We=de.acquireProgram(Le,Be),Ve.set(Be,We),ie.uniforms=Le.uniforms;const Oe=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=fe.uniform),ei(A,Le),ie.needsLights=ti(A),ie.lightsStateVersion=le,ie.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.directionalShadowMap.value=W.state.directionalShadowMap,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotShadowMap.value=W.state.spotShadowMap,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMap.value=W.state.pointShadowMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),ie.currentProgram=We,ie.uniformsList=null,We}function Fi(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Vr.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function ei(A,X){const re=me.get(A);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function ea(A,X,re,ie,W){X.isScene!==!0&&(X=xe),T.resetTextureUnits();const be=X.fog,le=ie.isMeshStandardMaterial?X.environment:null,Le=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pi,Be=(ie.isMeshStandardMaterial?N:S).get(ie.envMap||le),Ve=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,We=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Oe=!!re.morphAttributes.position,Ze=!!re.morphAttributes.normal,et=!!re.morphAttributes.color;let tt=Ln;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(tt=v.toneMapping);const gt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Je=gt!==void 0?gt.length:0,ke=me.get(ie),Ot=p.state.lights;if(O===!0&&($===!0||A!==x)){const Ct=A===x&&ie.id===E;fe.setState(ie,A,Ct)}let Qe=!1;ie.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ot.state.version||ke.outputColorSpace!==Le||W.isBatchedMesh&&ke.batching===!1||!W.isBatchedMesh&&ke.batching===!0||W.isBatchedMesh&&ke.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ke.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ke.instancing===!1||!W.isInstancedMesh&&ke.instancing===!0||W.isSkinnedMesh&&ke.skinning===!1||!W.isSkinnedMesh&&ke.skinning===!0||W.isInstancedMesh&&ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ke.instancingMorph===!1&&W.morphTexture!==null||ke.envMap!==Be||ie.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==fe.numPlanes||ke.numIntersection!==fe.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==We||ke.morphTargets!==Oe||ke.morphNormals!==Ze||ke.morphColors!==et||ke.toneMapping!==tt||ke.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,ke.__version=ie.version);let _t=ke.currentProgram;Qe===!0&&(_t=Ht(ie,X,W));let sn=!1,ut=!1,fn=!1;const nt=_t.getUniforms(),wt=ke.uniforms;if(se.useProgram(_t.program)&&(sn=!0,ut=!0,fn=!0),ie.id!==E&&(E=ie.id,ut=!0),sn||x!==A){se.buffers.depth.getReversed()?(V.copy(A.projectionMatrix),mu(V),gu(V),nt.setValue(B,"projectionMatrix",V)):nt.setValue(B,"projectionMatrix",A.projectionMatrix),nt.setValue(B,"viewMatrix",A.matrixWorldInverse);const Bt=nt.map.cameraPosition;Bt!==void 0&&Bt.setValue(B,_e.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&nt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&nt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,ut=!0,fn=!0)}if(W.isSkinnedMesh){nt.setOptional(B,W,"bindMatrix"),nt.setOptional(B,W,"bindMatrixInverse");const Ct=W.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),nt.setValue(B,"boneTexture",Ct.boneTexture,T))}W.isBatchedMesh&&(nt.setOptional(B,W,"batchingTexture"),nt.setValue(B,"batchingTexture",W._matricesTexture,T),nt.setOptional(B,W,"batchingIdTexture"),nt.setValue(B,"batchingIdTexture",W._indirectTexture,T),nt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&nt.setValue(B,"batchingColorTexture",W._colorsTexture,T));const St=re.morphAttributes;if((St.position!==void 0||St.normal!==void 0||St.color!==void 0)&&Te.update(W,re,_t),(ut||ke.receiveShadow!==W.receiveShadow)&&(ke.receiveShadow=W.receiveShadow,nt.setValue(B,"receiveShadow",W.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(wt.envMap.value=Be,wt.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(wt.envMapIntensity.value=X.environmentIntensity),ut&&(nt.setValue(B,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&sr(wt,fn),be&&ie.fog===!0&&ue.refreshFogUniforms(wt,be),ue.refreshMaterialUniforms(wt,ie,Y,J,p.state.transmissionRenderTarget[A.id]),Vr.upload(B,Fi(ke),wt,T)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Vr.upload(B,Fi(ke),wt,T),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&nt.setValue(B,"center",W.center),nt.setValue(B,"modelViewMatrix",W.modelViewMatrix),nt.setValue(B,"normalMatrix",W.normalMatrix),nt.setValue(B,"modelMatrix",W.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Ct=ie.uniformsGroups;for(let Bt=0,Rt=Ct.length;Bt<Rt;Bt++){const Ni=Ct[Bt];k.update(Ni,_t),k.bind(Ni,_t)}}return _t}function sr(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ti(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,X,re){me.get(A.texture).__webglTexture=X,me.get(A.depthTexture).__webglTexture=re;const ie=me.get(A);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=re===void 0,ie.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const re=me.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,re=0){C=A,w=X,b=re;let ie=!0,W=null,be=!1,le=!1;if(A){const Be=me.get(A);if(Be.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(B.FRAMEBUFFER,null),ie=!1;else if(Be.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(Be.__hasExternalTextures)T.rebindTextures(A,me.get(A.texture).__webglTexture,me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Oe=A.depthTexture;if(Be.__boundDepthTexture!==Oe){if(Oe!==null&&me.has(Oe)&&(A.width!==Oe.image.width||A.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(le=!0);const We=me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[X])?W=We[X][re]:W=We[X],be=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?W=me.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?W=We[re]:W=We,P.copy(A.viewport),U.copy(A.scissor),L=A.scissorTest}else P.copy(D).multiplyScalar(Y).floor(),U.copy(H).multiplyScalar(Y).floor(),L=Q;if(se.bindFramebuffer(B.FRAMEBUFFER,W)&&ie&&se.drawBuffers(A,W),se.viewport(P),se.scissor(U),se.setScissorTest(L),be){const Be=me.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,re)}else if(le){const Be=me.get(A.texture),Ve=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,re||0,Ve)}E=-1},this.readRenderTargetPixels=function(A,X,re,ie,W,be,le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&le!==void 0&&(Le=Le[le]),Le){se.bindFramebuffer(B.FRAMEBUFFER,Le);try{const Be=A.texture,Ve=Be.format,We=Be.type;if(!Ce.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ie&&re>=0&&re<=A.height-W&&B.readPixels(X,re,ie,W,De.convert(Ve),De.convert(We),be)}finally{const Be=C!==null?me.get(C).__webglFramebuffer:null;se.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,X,re,ie,W,be,le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&le!==void 0&&(Le=Le[le]),Le){const Be=A.texture,Ve=Be.format,We=Be.type;if(!Ce.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-ie&&re>=0&&re<=A.height-W){se.bindFramebuffer(B.FRAMEBUFFER,Le);const Oe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Oe),B.bufferData(B.PIXEL_PACK_BUFFER,be.byteLength,B.STREAM_READ),B.readPixels(X,re,ie,W,De.convert(Ve),De.convert(We),0);const Ze=C!==null?me.get(C).__webglFramebuffer:null;se.bindFramebuffer(B.FRAMEBUFFER,Ze);const et=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await pu(B,et,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Oe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,be),B.deleteBuffer(Oe),B.deleteSync(et),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,re=0){A.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const ie=Math.pow(2,-re),W=Math.floor(A.image.width*ie),be=Math.floor(A.image.height*ie),le=X!==null?X.x:0,Le=X!==null?X.y:0;T.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,re,0,0,le,Le,W,be),se.unbindTexture()},this.copyTextureToTexture=function(A,X,re=null,ie=null,W=0){A.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,A=arguments[1],X=arguments[2],W=arguments[3]||0,re=null);let be,le,Le,Be,Ve,We,Oe,Ze,et;const tt=A.isCompressedTexture?A.mipmaps[W]:A.image;re!==null?(be=re.max.x-re.min.x,le=re.max.y-re.min.y,Le=re.isBox3?re.max.z-re.min.z:1,Be=re.min.x,Ve=re.min.y,We=re.isBox3?re.min.z:0):(be=tt.width,le=tt.height,Le=tt.depth||1,Be=0,Ve=0,We=0),ie!==null?(Oe=ie.x,Ze=ie.y,et=ie.z):(Oe=0,Ze=0,et=0);const gt=De.convert(X.format),Je=De.convert(X.type);let ke;X.isData3DTexture?(T.setTexture3D(X,0),ke=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(T.setTexture2DArray(X,0),ke=B.TEXTURE_2D_ARRAY):(T.setTexture2D(X,0),ke=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Ot=B.getParameter(B.UNPACK_ROW_LENGTH),Qe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_t=B.getParameter(B.UNPACK_SKIP_PIXELS),sn=B.getParameter(B.UNPACK_SKIP_ROWS),ut=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,tt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,tt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),B.pixelStorei(B.UNPACK_SKIP_IMAGES,We);const fn=A.isDataArrayTexture||A.isData3DTexture,nt=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const wt=me.get(A),St=me.get(X),Ct=me.get(wt.__renderTarget),Bt=me.get(St.__renderTarget);se.bindFramebuffer(B.READ_FRAMEBUFFER,Ct.__webglFramebuffer),se.bindFramebuffer(B.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Rt=0;Rt<Le;Rt++)fn&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,me.get(A).__webglTexture,W,We+Rt),A.isDepthTexture?(nt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,me.get(X).__webglTexture,W,et+Rt),B.blitFramebuffer(Be,Ve,be,le,Oe,Ze,be,le,B.DEPTH_BUFFER_BIT,B.NEAREST)):nt?B.copyTexSubImage3D(ke,W,Oe,Ze,et+Rt,Be,Ve,be,le):B.copyTexSubImage2D(ke,W,Oe,Ze,et+Rt,Be,Ve,be,le);se.bindFramebuffer(B.READ_FRAMEBUFFER,null),se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else nt?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(ke,W,Oe,Ze,et,be,le,Le,gt,Je,tt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(ke,W,Oe,Ze,et,be,le,Le,gt,tt.data):B.texSubImage3D(ke,W,Oe,Ze,et,be,le,Le,gt,Je,tt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,Oe,Ze,be,le,gt,Je,tt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,Oe,Ze,tt.width,tt.height,gt,tt.data):B.texSubImage2D(B.TEXTURE_2D,W,Oe,Ze,be,le,gt,Je,tt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_t),B.pixelStorei(B.UNPACK_SKIP_ROWS,sn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ut),W===0&&X.generateMipmaps&&B.generateMipmap(ke),se.unbindTexture()},this.copyTextureToTexture3D=function(A,X,re=null,ie=null,W=0){return A.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,ie=arguments[1]||null,A=arguments[2],X=arguments[3],W=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,re,ie,W)},this.initRenderTarget=function(A){me.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),se.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,se.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class bm extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Am extends rn{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ys extends un{constructor(e=[],t=[],r=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:n};const i=[],s=[];o(n),c(r),u(),this.setAttribute("position",new Vt(i,3)),this.setAttribute("normal",new Vt(i.slice(),3)),this.setAttribute("uv",new Vt(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new te,v=new te,R=new te;for(let w=0;w<t.length;w+=3)d(t[w+0],M),d(t[w+1],v),d(t[w+2],R),l(M,v,R,y)}function l(y,M,v,R){const w=R+1,b=[];for(let C=0;C<=w;C++){b[C]=[];const E=y.clone().lerp(v,C/w),x=M.clone().lerp(v,C/w),P=w-C;for(let U=0;U<=P;U++)U===0&&C===w?b[C][U]=E:b[C][U]=E.clone().lerp(x,U/P)}for(let C=0;C<w;C++)for(let E=0;E<2*(w-C)-1;E++){const x=Math.floor(E/2);E%2===0?(h(b[C][x+1]),h(b[C+1][x]),h(b[C][x])):(h(b[C][x+1]),h(b[C+1][x+1]),h(b[C+1][x]))}}function c(y){const M=new te;for(let v=0;v<i.length;v+=3)M.x=i[v+0],M.y=i[v+1],M.z=i[v+2],M.normalize().multiplyScalar(y),i[v+0]=M.x,i[v+1]=M.y,i[v+2]=M.z}function u(){const y=new te;for(let M=0;M<i.length;M+=3){y.x=i[M+0],y.y=i[M+1],y.z=i[M+2];const v=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;s.push(v,1-R)}g(),f()}function f(){for(let y=0;y<s.length;y+=6){const M=s[y+0],v=s[y+2],R=s[y+4],w=Math.max(M,v,R),b=Math.min(M,v,R);w>.9&&b<.1&&(M<.2&&(s[y+0]+=1),v<.2&&(s[y+2]+=1),R<.2&&(s[y+4]+=1))}}function h(y){i.push(y.x,y.y,y.z)}function d(y,M){const v=y*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){const y=new te,M=new te,v=new te,R=new te,w=new Ke,b=new Ke,C=new Ke;for(let E=0,x=0;E<i.length;E+=9,x+=6){y.set(i[E+0],i[E+1],i[E+2]),M.set(i[E+3],i[E+4],i[E+5]),v.set(i[E+6],i[E+7],i[E+8]),w.set(s[x+0],s[x+1]),b.set(s[x+2],s[x+3]),C.set(s[x+4],s[x+5]),R.copy(y).add(M).add(v).divideScalar(3);const P=m(R);_(w,x+0,y,P),_(b,x+2,M,P),_(C,x+4,v,P)}}function _(y,M,v,R){R<0&&y.x===1&&(s[M]=y.x-1),v.x===0&&v.z===0&&(s[M]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.vertices,e.indices,e.radius,e.details)}}class qs extends Ys{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,n=1/r,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-r,0,-n,r,0,n,-r,0,n,r,-n,-r,0,-n,r,0,n,-r,0,n,r,0,-r,0,-n,r,0,-n,-r,0,n,r,0,n],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(i,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qs(e.radius,e.detail)}}class js extends un{constructor(e=1,t=32,r=16,n=0,i=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:i,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+o,Math.PI);let c=0;const u=[],f=new te,h=new te,d=[],g=[],_=[],m=[];for(let p=0;p<=r;p++){const y=[],M=p/r;let v=0;p===0&&s===0?v=.5/t:p===r&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const w=R/t;f.x=-e*Math.cos(n+w*i)*Math.sin(s+M*o),f.y=e*Math.cos(s+M*o),f.z=e*Math.sin(n+w*i)*Math.sin(s+M*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(w+v,1-M),y.push(c++)}u.push(y)}for(let p=0;p<r;p++)for(let y=0;y<t;y++){const M=u[p][y+1],v=u[p][y],R=u[p+1][y],w=u[p+1][y+1];(p!==0||s>0)&&d.push(M,v,w),(p!==r-1||l<Math.PI)&&d.push(v,R,w)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wm extends rr{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cm extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ga=new ot,fl=new te,hl=new te;class Rm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hl),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Um extends Rm{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dl extends Cm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Um}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pm extends un{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ns}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ns);const Dm=266800,fc=1140258,Lm=.05,Ti=Math.PI*2;class Im{constructor(e){this.orbit=e;const t=new qs(1,3),r=new wm({color:10061892,flatShading:!0,shininess:0});this.planet=new It(t,r),this.orbit.add(this.planet)}animate(){}}class Fm{constructor(e){Tn(this,"shift",.1);Tn(this,"rings",9);Tn(this,"starCount",2e3);Tn(this,"distanceToCenter",50);Tn(this,"outerRadius",600);Tn(this,"minSize",.4);Tn(this,"maxSize",.9);this.orbit=e,this.stars=[];const t=new js(1,12,7),r=new Jr({color:16777147});let n=this.minSize,i=this.maxSize;for(let s=0;s<this.rings;s++){const o=new ct,l=this.triangular(this.rings),u=this.starCount/l*(s+1),f=(this.outerRadius-this.distanceToCenter)/this.rings*s+this.distanceToCenter,h=(this.outerRadius-this.distanceToCenter)/this.rings*(s+1)+this.distanceToCenter;i=(this.maxSize-this.minSize)/l*(s+1)+n;for(let g=0;g<u;g++){const _=new It(t,r);_.position.add(this.getRandomPositions(f,h)),_.scale.setScalar(Math.random()*(i-n)+n),o.add(_)}this.orbit.add(o),this.stars.push(o),n=i}}animate(e){const t=this.rings%2,r=Math.floor(this.rings/2);if(t)for(let n=0;n<r;n++)this.stars[n].rotation.x=e*(this.shift/r)*(n+1),this.stars[this.rings-n-1].rotation.x=e*-(this.shift/r)*(n+1);else for(let n=0;n<r;n++)this.stars[n].rotation.x=e*(this.shift/r)*(n+.5),this.stars[this.rings-n-1].rotation.x=e*-(this.shift/r)*(n+.5)}triangular(e){return e*(e+1)/2}getRandomPositions(e,t){const r=new te;return r.randomDirection(),r.multiplyScalar(Math.random()*(t-e)+e),r}}class Nm{constructor(e){this.scene=e,this.orbit=new ct,this.scene.add(this.orbit),this.planet=new Im(this.orbit),this.stars=new Fm(this.orbit),this.target=0,this.targetDirection=1}add(e){this.orbit.add(e)}animate(e){this.orbit.rotation.x=e,this.planet.animate(e),this.stars.animate(e)}normalize(e){return e>Math.PI*2?e-=Math.PI*2:e<0&&(e+=Math.PI*2),e}}class Om{constructor(e){this.scene=e,this.lights=[],this.color=16777215,this.backLight=this.createBackLight(),this.frontLight=this.createFrontLight()}createFrontLight(){const t=new dl(this.color,.4);return t.position.set(-1,2,6),this.scene.add(t),this.lights.push(t),t}createBackLight(){const t=new dl(this.color,10);return t.position.set(0,.5,-2),t.lookAt(0,2,2),this.scene.add(t),this.lights.push(t),t}}function Bm(){var a=Object.create(null);function e(n,i){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=a[h.id].value),h}),c=r("<"+o+">.init",c),u&&(u=r("<"+o+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:f,getTransferables:u},i(f)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(n,i){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(f){return i(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){i(f)}function u(f){try{var h=a[o].getTransferables&&a[o].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(f,h)}catch(d){console.error(d),i(d)}}}function r(n,i){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var i=n.data,s=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function km(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var hc=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return hc=function(){return a},a},zm=0,Gm=0,Va=!1,Qi=Object.create(null),$i=Object.create(null),Ds=Object.create(null);function Ii(a){if((!a||typeof a.init!="function")&&!Va)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId,i=km(a);n==null&&(n="#default");var s="workerModule"+ ++zm,o=a.name||s,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Va=!0,u=Ii({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+Hr(u)+`
)}`}),Va=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];if(!hc())return i.apply(void 0,u);if(!l){l=pl(n,"registerModule",c.workerModuleData);var h=function(){l=null,$i[n].delete(h)};($i[n]||($i[n]=new Set)).add(h)}return l.then(function(d){var g=d.isCallable;if(g)return pl(n,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:Hr(t),getTransferables:r&&Hr(r)},c.onMainThread=i,c}function Vm(a){$i[a]&&$i[a].forEach(function(e){e()}),Qi[a]&&(Qi[a].terminate(),delete Qi[a])}function Hr(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Hm(a){var e=Qi[a];if(!e){var t=Hr(Bm);e=Qi[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,s=Ds[i];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete Ds[i],s(n)}}return e}function pl(a,e,t){return new Promise(function(r,n){var i=++Gm;Ds[i]=function(s){s.success?r(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},Hm(a).postMessage({messageId:i,action:e,data:t})})}function dc(){var a=function(e){function t(j,q,D,H,Q,F,O,$){var V=1-O;$.x=V*V*j+2*V*O*D+O*O*Q,$.y=V*V*q+2*V*O*H+O*O*F}function r(j,q,D,H,Q,F,O,$,V,ne){var _e=1-V;ne.x=_e*_e*_e*j+3*_e*_e*V*D+3*_e*V*V*Q+V*V*V*O,ne.y=_e*_e*_e*q+3*_e*_e*V*H+3*_e*V*V*F+V*V*V*$}function n(j,q){for(var D=/([MLQCZ])([^MLQCZ]*)/g,H,Q,F,O,$;H=D.exec(j);){var V=H[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ne){return parseFloat(ne)});switch(H[1]){case"M":O=Q=V[0],$=F=V[1];break;case"L":(V[0]!==O||V[1]!==$)&&q("L",O,$,O=V[0],$=V[1]);break;case"Q":{q("Q",O,$,O=V[2],$=V[3],V[0],V[1]);break}case"C":{q("C",O,$,O=V[4],$=V[5],V[0],V[1],V[2],V[3]);break}case"Z":(O!==Q||$!==F)&&q("L",O,$,Q,F);break}}}function i(j,q,D){D===void 0&&(D=16);var H={x:0,y:0};n(j,function(Q,F,O,$,V,ne,_e,Me,xe){switch(Q){case"L":q(F,O,$,V);break;case"Q":{for(var oe=F,Fe=O,B=1;B<D;B++)t(F,O,ne,_e,$,V,B/(D-1),H),q(oe,Fe,H.x,H.y),oe=H.x,Fe=H.y;break}case"C":{for(var Ne=F,Ae=O,Ce=1;Ce<D;Ce++)r(F,O,ne,_e,Me,xe,$,V,Ce/(D-1),H),q(Ne,Ae,H.x,H.y),Ne=H.x,Ae=H.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(j,q){var D=j.getContext?j.getContext("webgl",c):j,H=l.get(D);if(!H){let Ne=function(T){var S=F[T];if(!S&&(S=F[T]=D.getExtension(T),!S))throw new Error(T+" not supported");return S},Ae=function(T,S){var N=D.createShader(S);return D.shaderSource(N,T),D.compileShader(N),N},Ce=function(T,S,N,K){if(!O[T]){var Z={},ae={},de=D.createProgram();D.attachShader(de,Ae(S,D.VERTEX_SHADER)),D.attachShader(de,Ae(N,D.FRAGMENT_SHADER)),D.linkProgram(de),O[T]={program:de,transaction:function(ge){D.useProgram(de),ge({setUniform:function(fe,ye){for(var Ee=[],Te=arguments.length-2;Te-- >0;)Ee[Te]=arguments[Te+2];var ce=ae[ye]||(ae[ye]=D.getUniformLocation(de,ye));D["uniform"+fe].apply(D,[ce].concat(Ee))},setAttribute:function(fe,ye,Ee,Te,ce){var Pe=Z[fe];Pe||(Pe=Z[fe]={buf:D.createBuffer(),loc:D.getAttribLocation(de,fe),data:null}),D.bindBuffer(D.ARRAY_BUFFER,Pe.buf),D.vertexAttribPointer(Pe.loc,ye,D.FLOAT,!1,0,0),D.enableVertexAttribArray(Pe.loc),Q?D.vertexAttribDivisor(Pe.loc,Te):Ne("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Pe.loc,Te),ce!==Pe.data&&(D.bufferData(D.ARRAY_BUFFER,ce,Ee),Pe.data=ce)}})}}}O[T].transaction(K)},se=function(T,S){V++;try{D.activeTexture(D.TEXTURE0+V);var N=$[T];N||(N=$[T]=D.createTexture(),D.bindTexture(D.TEXTURE_2D,N),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MIN_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MAG_FILTER,D.NEAREST)),D.bindTexture(D.TEXTURE_2D,N),S(N,V)}finally{V--}},we=function(T,S,N){var K=D.createFramebuffer();ne.push(K),D.bindFramebuffer(D.FRAMEBUFFER,K),D.activeTexture(D.TEXTURE0+S),D.bindTexture(D.TEXTURE_2D,T),D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,T,0);try{N(K)}finally{D.deleteFramebuffer(K),D.bindFramebuffer(D.FRAMEBUFFER,ne[--ne.length-1]||null)}},me=function(){F={},O={},$={},V=-1,ne.length=0};var _e=Ne,Me=Ae,xe=Ce,oe=se,Fe=we,B=me,Q=typeof WebGL2RenderingContext<"u"&&D instanceof WebGL2RenderingContext,F={},O={},$={},V=-1,ne=[];D.canvas.addEventListener("webglcontextlost",function(T){me(),T.preventDefault()},!1),l.set(D,H={gl:D,isWebGL2:Q,getExtension:Ne,withProgram:Ce,withTexture:se,withTextureFramebuffer:we,handleContextLoss:me})}q(H)}function f(j,q,D,H,Q,F,O,$){O===void 0&&(O=15),$===void 0&&($=null),u(j,function(V){var ne=V.gl,_e=V.withProgram,Me=V.withTexture;Me("copy",function(xe,oe){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,Q,F,0,ne.RGBA,ne.UNSIGNED_BYTE,q),_e("copy",s,o,function(Fe){var B=Fe.setUniform,Ne=Fe.setAttribute;Ne("aUV",2,ne.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),B("1i","image",oe),ne.bindFramebuffer(ne.FRAMEBUFFER,$||null),ne.disable(ne.BLEND),ne.colorMask(O&8,O&4,O&2,O&1),ne.viewport(D,H,Q,F),ne.scissor(D,H,Q,F),ne.drawArrays(ne.TRIANGLES,0,3)})})})}function h(j,q,D){var H=j.width,Q=j.height;u(j,function(F){var O=F.gl,$=new Uint8Array(H*Q*4);O.readPixels(0,0,H,Q,O.RGBA,O.UNSIGNED_BYTE,$),j.width=q,j.height=D,f(O,$,0,0,H,Q)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(j,q,D,H,Q,F){F===void 0&&(F=1);var O=new Uint8Array(j*q),$=H[2]-H[0],V=H[3]-H[1],ne=[];i(D,function(Ne,Ae,Ce,se){ne.push({x1:Ne,y1:Ae,x2:Ce,y2:se,minX:Math.min(Ne,Ce),minY:Math.min(Ae,se),maxX:Math.max(Ne,Ce),maxY:Math.max(Ae,se)})}),ne.sort(function(Ne,Ae){return Ne.maxX-Ae.maxX});for(var _e=0;_e<j;_e++)for(var Me=0;Me<q;Me++){var xe=Fe(H[0]+$*(_e+.5)/j,H[1]+V*(Me+.5)/q),oe=Math.pow(1-Math.abs(xe)/Q,F)/2;xe<0&&(oe=1-oe),oe=Math.max(0,Math.min(255,Math.round(oe*255))),O[Me*j+_e]=oe}return O;function Fe(Ne,Ae){for(var Ce=1/0,se=1/0,we=ne.length;we--;){var me=ne[we];if(me.maxX+se<=Ne)break;if(Ne+se>me.minX&&Ae-se<me.maxY&&Ae+se>me.minY){var T=p(Ne,Ae,me.x1,me.y1,me.x2,me.y2);T<Ce&&(Ce=T,se=Math.sqrt(Ce))}}return B(Ne,Ae)&&(se=-se),se}function B(Ne,Ae){for(var Ce=0,se=ne.length;se--;){var we=ne[se];if(we.maxX<=Ne)break;var me=we.y1>Ae!=we.y2>Ae&&Ne<(we.x2-we.x1)*(Ae-we.y1)/(we.y2-we.y1)+we.x1;me&&(Ce+=we.y1<we.y2?1:-1)}return Ce!==0}}function _(j,q,D,H,Q,F,O,$,V,ne){F===void 0&&(F=1),$===void 0&&($=0),V===void 0&&(V=0),ne===void 0&&(ne=0),m(j,q,D,H,Q,F,O,null,$,V,ne)}function m(j,q,D,H,Q,F,O,$,V,ne,_e){F===void 0&&(F=1),V===void 0&&(V=0),ne===void 0&&(ne=0),_e===void 0&&(_e=0);for(var Me=g(j,q,D,H,Q,F),xe=new Uint8Array(Me.length*4),oe=0;oe<Me.length;oe++)xe[oe*4+_e]=Me[oe];f(O,xe,V,ne,j,q,1<<3-_e,$)}function p(j,q,D,H,Q,F){var O=Q-D,$=F-H,V=O*O+$*$,ne=V?Math.max(0,Math.min(1,((j-D)*O+(q-H)*$)/V)):0,_e=j-(D+ne*O),Me=q-(H+ne*$);return _e*_e+Me*Me}var y=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),M="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",R="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),b=null,C=!1,E={},x=new WeakMap;function P(j){if(!C&&!G(j))throw new Error("WebGL generation not supported")}function U(j,q,D,H,Q,F,O){if(F===void 0&&(F=1),O===void 0&&(O=null),!O&&(O=b,!O)){var $=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!$)throw new Error("OffscreenCanvas or DOM canvas not supported");O=b=$.getContext("webgl",{depth:!1})}P(O);var V=new Uint8Array(j*q*4);u(O,function(xe){var oe=xe.gl,Fe=xe.withTexture,B=xe.withTextureFramebuffer;Fe("readable",function(Ne,Ae){oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,j,q,0,oe.RGBA,oe.UNSIGNED_BYTE,null),B(Ne,Ae,function(Ce){I(j,q,D,H,Q,F,oe,Ce,0,0,0),oe.readPixels(0,0,j,q,oe.RGBA,oe.UNSIGNED_BYTE,V)})})});for(var ne=new Uint8Array(j*q),_e=0,Me=0;_e<V.length;_e+=4)ne[Me++]=V[_e];return ne}function L(j,q,D,H,Q,F,O,$,V,ne){F===void 0&&(F=1),$===void 0&&($=0),V===void 0&&(V=0),ne===void 0&&(ne=0),I(j,q,D,H,Q,F,O,null,$,V,ne)}function I(j,q,D,H,Q,F,O,$,V,ne,_e){F===void 0&&(F=1),V===void 0&&(V=0),ne===void 0&&(ne=0),_e===void 0&&(_e=0),P(O);var Me=[];i(D,function(xe,oe,Fe,B){Me.push(xe,oe,Fe,B)}),Me=new Float32Array(Me),u(O,function(xe){var oe=xe.gl,Fe=xe.isWebGL2,B=xe.getExtension,Ne=xe.withProgram,Ae=xe.withTexture,Ce=xe.withTextureFramebuffer,se=xe.handleContextLoss;if(Ae("rawDistances",function(we,me){(j!==we._lastWidth||q!==we._lastHeight)&&oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,we._lastWidth=j,we._lastHeight=q,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Ne("main",M,v,function(T){var S=T.setAttribute,N=T.setUniform,K=!Fe&&B("ANGLE_instanced_arrays"),Z=!Fe&&B("EXT_blend_minmax");S("aUV",2,oe.STATIC_DRAW,0,w),S("aLineSegment",4,oe.DYNAMIC_DRAW,1,Me),N.apply(void 0,["4f","uGlyphBounds"].concat(H)),N("1f","uMaxDistance",Q),N("1f","uExponent",F),Ce(we,me,function(ae){oe.enable(oe.BLEND),oe.colorMask(!0,!0,!0,!0),oe.viewport(0,0,j,q),oe.scissor(0,0,j,q),oe.blendFunc(oe.ONE,oe.ONE),oe.blendEquationSeparate(oe.FUNC_ADD,Fe?oe.MAX:Z.MAX_EXT),oe.clear(oe.COLOR_BUFFER_BIT),Fe?oe.drawArraysInstanced(oe.TRIANGLES,0,3,Me.length/4):K.drawArraysInstancedANGLE(oe.TRIANGLES,0,3,Me.length/4)})}),Ne("post",s,R,function(T){T.setAttribute("aUV",2,oe.STATIC_DRAW,0,w),T.setUniform("1i","tex",me),oe.bindFramebuffer(oe.FRAMEBUFFER,$),oe.disable(oe.BLEND),oe.colorMask(_e===0,_e===1,_e===2,_e===3),oe.viewport(V,ne,j,q),oe.scissor(V,ne,j,q),oe.drawArrays(oe.TRIANGLES,0,3)})}),oe.isContextLost())throw se(),new Error("webgl context lost")})}function G(j){var q=!j||j===b?E:j.canvas||j,D=x.get(q);if(D===void 0){C=!0;var H=null;try{var Q=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,j);D=F&&Q.length===F.length&&F.every(function(O,$){return O===Q[$]}),D||(H="bad trial run results",console.info(Q,F))}catch(O){D=!1,H=O.message}H&&console.warn("WebGL SDF generation not supported:",H),C=!1,x.set(q,D)}return D}var z=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:L,generateIntoFramebuffer:I,isSupported:G});function J(j,q,D,H,Q,F){Q===void 0&&(Q=Math.max(H[2]-H[0],H[3]-H[1])/2),F===void 0&&(F=1);try{return U.apply(z,arguments)}catch(O){return console.info("WebGL SDF generation failed, falling back to JS",O),g.apply(y,arguments)}}function Y(j,q,D,H,Q,F,O,$,V,ne){Q===void 0&&(Q=Math.max(H[2]-H[0],H[3]-H[1])/2),F===void 0&&(F=1),$===void 0&&($=0),V===void 0&&(V=0),ne===void 0&&(ne=0);try{return L.apply(z,arguments)}catch(_e){return console.info("WebGL SDF generation failed, falling back to JS",_e),_.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=J,e.generateIntoCanvas=Y,e.javascript=y,e.pathToLineSegments=i,e.webgl=z,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function Wm(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(se,we){r[se]=1<<we+1,n[r[se]]=se}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,s=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function f(){if(!u){u=new Map;var se=function(me){if(t.hasOwnProperty(me)){var T=0;t[me].split(",").forEach(function(S){var N=S.split("+"),K=N[0],Z=N[1];K=parseInt(K,36),Z=Z?parseInt(Z,36):0,u.set(T+=K,r[me]);for(var ae=0;ae<Z;ae++)u.set(++T,r[me])})}};for(var we in t)se(we)}}function h(se){return f(),u.get(se.codePointAt(0))||r.L}function d(se){return n[h(se)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(se,we){var me=36,T=0,S=new Map,N=we&&new Map,K;return se.split(",").forEach(function Z(ae){if(ae.indexOf("+")!==-1)for(var de=+ae;de--;)Z(K);else{K=ae;var ue=ae.split(">"),ge=ue[0],Ue=ue[1];ge=String.fromCodePoint(T+=parseInt(ge,me)),Ue=String.fromCodePoint(T+=parseInt(Ue,me)),S.set(ge,Ue),we&&N.set(Ue,ge)}}),{map:S,reverseMap:N}}var m,p,y;function M(){if(!m){var se=_(g.pairs,!0),we=se.map,me=se.reverseMap;m=we,p=me,y=_(g.canonical,!1).map}}function v(se){return M(),m.get(se)||null}function R(se){return M(),p.get(se)||null}function w(se){return M(),y.get(se)||null}var b=r.L,C=r.R,E=r.EN,x=r.ES,P=r.ET,U=r.AN,L=r.CS,I=r.B,G=r.S,z=r.ON,J=r.BN,Y=r.NSM,j=r.AL,q=r.LRO,D=r.RLO,H=r.LRE,Q=r.RLE,F=r.PDF,O=r.LRI,$=r.RLI,V=r.FSI,ne=r.PDI;function _e(se,we){for(var me=125,T=new Uint32Array(se.length),S=0;S<se.length;S++)T[S]=h(se[S]);var N=new Map;function K(Ut,Zt){var Pt=T[Ut];T[Ut]=Zt,N.set(Pt,N.get(Pt)-1),Pt&o&&N.set(o,N.get(o)-1),N.set(Zt,(N.get(Zt)||0)+1),Zt&o&&N.set(o,(N.get(o)||0)+1)}for(var Z=new Uint8Array(se.length),ae=new Map,de=[],ue=null,ge=0;ge<se.length;ge++)ue||de.push(ue={start:ge,end:se.length-1,level:we==="rtl"?1:we==="ltr"?0:uo(ge,!1)}),T[ge]&I&&(ue.end=ge,ue=null);for(var Ue=Q|H|D|q|i|ne|F|I,fe=function(Ut){return Ut+(Ut&1?1:2)},ye=function(Ut){return Ut+(Ut&1?2:1)},Ee=0;Ee<de.length;Ee++){ue=de[Ee];var Te=[{_level:ue.level,_override:0,_isolate:0}],ce=void 0,Pe=0,De=0,Ye=0;N.clear();for(var k=ue.start;k<=ue.end;k++){var he=T[k];if(ce=Te[Te.length-1],N.set(he,(N.get(he)||0)+1),he&o&&N.set(o,(N.get(o)||0)+1),he&Ue)if(he&(Q|H)){Z[k]=ce._level;var ee=(he===Q?ye:fe)(ce._level);ee<=me&&!Pe&&!De?Te.push({_level:ee,_override:0,_isolate:0}):Pe||De++}else if(he&(D|q)){Z[k]=ce._level;var pe=(he===D?ye:fe)(ce._level);pe<=me&&!Pe&&!De?Te.push({_level:pe,_override:he&D?C:b,_isolate:0}):Pe||De++}else if(he&i){he&V&&(he=uo(k+1,!0)===1?$:O),Z[k]=ce._level,ce._override&&K(k,ce._override);var Se=(he===$?ye:fe)(ce._level);Se<=me&&Pe===0&&De===0?(Ye++,Te.push({_level:Se,_override:0,_isolate:1,_isolInitIndex:k})):Pe++}else if(he&ne){if(Pe>0)Pe--;else if(Ye>0){for(De=0;!Te[Te.length-1]._isolate;)Te.pop();var ve=Te[Te.length-1]._isolInitIndex;ve!=null&&(ae.set(ve,k),ae.set(k,ve)),Te.pop(),Ye--}ce=Te[Te.length-1],Z[k]=ce._level,ce._override&&K(k,ce._override)}else he&F?(Pe===0&&(De>0?De--:!ce._isolate&&Te.length>1&&(Te.pop(),ce=Te[Te.length-1])),Z[k]=ce._level):he&I&&(Z[k]=ue.level);else Z[k]=ce._level,ce._override&&he!==J&&K(k,ce._override)}for(var Ie=[],He=null,ze=ue.start;ze<=ue.end;ze++){var Ge=T[ze];if(!(Ge&l)){var rt=Z[ze],at=Ge&i,lt=Ge===ne;He&&rt===He._level?(He._end=ze,He._endsWithIsolInit=at):Ie.push(He={_start:ze,_end:ze,_level:rt,_startsWithPDI:lt,_endsWithIsolInit:at})}}for(var bt=[],xt=0;xt<Ie.length;xt++){var Nt=Ie[xt];if(!Nt._startsWithPDI||Nt._startsWithPDI&&!ae.has(Nt._start)){for(var jt=[He=Nt],an=void 0;He&&He._endsWithIsolInit&&(an=ae.get(He._end))!=null;)for(var At=xt+1;At<Ie.length;At++)if(Ie[At]._start===an){jt.push(He=Ie[At]);break}for(var pt=[],Ht=0;Ht<jt.length;Ht++)for(var Fi=jt[Ht],ei=Fi._start;ei<=Fi._end;ei++)pt.push(ei);for(var ea=Z[pt[0]],sr=ue.level,ti=pt[0]-1;ti>=0;ti--)if(!(T[ti]&l)){sr=Z[ti];break}var A=pt[pt.length-1],X=Z[A],re=ue.level;if(!(T[A]&i)){for(var ie=A+1;ie<=ue.end;ie++)if(!(T[ie]&l)){re=Z[ie];break}}bt.push({_seqIndices:pt,_sosType:Math.max(sr,ea)%2?C:b,_eosType:Math.max(re,X)%2?C:b})}}for(var W=0;W<bt.length;W++){var be=bt[W],le=be._seqIndices,Le=be._sosType,Be=be._eosType,Ve=Z[le[0]]&1?C:b;if(N.get(Y))for(var We=0;We<le.length;We++){var Oe=le[We];if(T[Oe]&Y){for(var Ze=Le,et=We-1;et>=0;et--)if(!(T[le[et]]&l)){Ze=T[le[et]];break}K(Oe,Ze&(i|ne)?z:Ze)}}if(N.get(E))for(var tt=0;tt<le.length;tt++){var gt=le[tt];if(T[gt]&E)for(var Je=tt-1;Je>=-1;Je--){var ke=Je===-1?Le:T[le[Je]];if(ke&s){ke===j&&K(gt,U);break}}}if(N.get(j))for(var Ot=0;Ot<le.length;Ot++){var Qe=le[Ot];T[Qe]&j&&K(Qe,C)}if(N.get(x)||N.get(L))for(var _t=1;_t<le.length-1;_t++){var sn=le[_t];if(T[sn]&(x|L)){for(var ut=0,fn=0,nt=_t-1;nt>=0&&(ut=T[le[nt]],!!(ut&l));nt--);for(var wt=_t+1;wt<le.length&&(fn=T[le[wt]],!!(fn&l));wt++);ut===fn&&(T[sn]===x?ut===E:ut&(E|U))&&K(sn,ut)}}if(N.get(E))for(var St=0;St<le.length;St++){var Ct=le[St];if(T[Ct]&E){for(var Bt=St-1;Bt>=0&&T[le[Bt]]&(P|l);Bt--)K(le[Bt],E);for(St++;St<le.length&&T[le[St]]&(P|l|E);St++)T[le[St]]!==E&&K(le[St],E)}}if(N.get(P)||N.get(x)||N.get(L))for(var Rt=0;Rt<le.length;Rt++){var Ni=le[Rt];if(T[Ni]&(P|x|L)){K(Ni,z);for(var or=Rt-1;or>=0&&T[le[or]]&l;or--)K(le[or],z);for(var lr=Rt+1;lr<le.length&&T[le[lr]]&l;lr++)K(le[lr],z)}}if(N.get(E))for(var ta=0,Qs=Le;ta<le.length;ta++){var $s=le[ta],na=T[$s];na&E?Qs===b&&K($s,b):na&s&&(Qs=na)}if(N.get(o)){var Oi=C|E|U,eo=Oi|b,cr=[];{for(var ni=[],ii=0;ii<le.length;ii++)if(T[le[ii]]&o){var Bi=se[le[ii]],to=void 0;if(v(Bi)!==null)if(ni.length<63)ni.push({char:Bi,seqIndex:ii});else break;else if((to=R(Bi))!==null)for(var ki=ni.length-1;ki>=0;ki--){var ia=ni[ki].char;if(ia===to||ia===R(w(Bi))||v(w(ia))===Bi){cr.push([ni[ki].seqIndex,ii]),ni.length=ki;break}}}cr.sort(function(Ut,Zt){return Ut[0]-Zt[0]})}for(var ra=0;ra<cr.length;ra++){for(var no=cr[ra],ur=no[0],aa=no[1],io=!1,Kt=0,sa=ur+1;sa<aa;sa++){var ro=le[sa];if(T[ro]&eo){io=!0;var ao=T[ro]&Oi?C:b;if(ao===Ve){Kt=ao;break}}}if(io&&!Kt){Kt=Le;for(var oa=ur-1;oa>=0;oa--){var so=le[oa];if(T[so]&eo){var oo=T[so]&Oi?C:b;oo!==Ve?Kt=oo:Kt=Ve;break}}}if(Kt){if(T[le[ur]]=T[le[aa]]=Kt,Kt!==Ve){for(var zi=ur+1;zi<le.length;zi++)if(!(T[le[zi]]&l)){h(se[le[zi]])&Y&&(T[le[zi]]=Kt);break}}if(Kt!==Ve){for(var Gi=aa+1;Gi<le.length;Gi++)if(!(T[le[Gi]]&l)){h(se[le[Gi]])&Y&&(T[le[Gi]]=Kt);break}}}}for(var yn=0;yn<le.length;yn++)if(T[le[yn]]&o){for(var lo=yn,la=yn,ca=Le,Vi=yn-1;Vi>=0;Vi--)if(T[le[Vi]]&l)lo=Vi;else{ca=T[le[Vi]]&Oi?C:b;break}for(var co=Be,Hi=yn+1;Hi<le.length;Hi++)if(T[le[Hi]]&(o|l))la=Hi;else{co=T[le[Hi]]&Oi?C:b;break}for(var ua=lo;ua<=la;ua++)T[le[ua]]=ca===co?ca:Ve;yn=la}}}for(var kt=ue.start;kt<=ue.end;kt++){var yc=Z[kt],fr=T[kt];if(yc&1?fr&(b|E|U)&&Z[kt]++:fr&C?Z[kt]++:fr&(U|E)&&(Z[kt]+=2),fr&l&&(Z[kt]=kt===0?ue.level:Z[kt-1]),kt===ue.end||h(se[kt])&(G|I))for(var hr=kt;hr>=0&&h(se[hr])&c;hr--)Z[hr]=ue.level}}return{levels:Z,paragraphs:de};function uo(Ut,Zt){for(var Pt=Ut;Pt<se.length;Pt++){var En=T[Pt];if(En&(C|j))return 1;if(En&(I|b)||Zt&&En===ne)return 0;if(En&i){var fo=Ec(Pt);Pt=fo===-1?se.length:fo}}return 0}function Ec(Ut){for(var Zt=1,Pt=Ut+1;Pt<se.length;Pt++){var En=T[Pt];if(En&I)break;if(En&ne){if(--Zt===0)return Pt}else En&i&&Zt++}return-1}}var Me="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",xe;function oe(){if(!xe){var se=_(Me,!0),we=se.map,me=se.reverseMap;me.forEach(function(T,S){we.set(S,T)}),xe=we}}function Fe(se){return oe(),xe.get(se)||null}function B(se,we,me,T){var S=se.length;me=Math.max(0,me==null?0:+me),T=Math.min(S-1,T==null?S-1:+T);for(var N=new Map,K=me;K<=T;K++)if(we[K]&1){var Z=Fe(se[K]);Z!==null&&N.set(K,Z)}return N}function Ne(se,we,me,T){var S=se.length;me=Math.max(0,me==null?0:+me),T=Math.min(S-1,T==null?S-1:+T);var N=[];return we.paragraphs.forEach(function(K){var Z=Math.max(me,K.start),ae=Math.min(T,K.end);if(Z<ae){for(var de=we.levels.slice(Z,ae+1),ue=ae;ue>=Z&&h(se[ue])&c;ue--)de[ue]=K.level;for(var ge=K.level,Ue=1/0,fe=0;fe<de.length;fe++){var ye=de[fe];ye>ge&&(ge=ye),ye<Ue&&(Ue=ye|1)}for(var Ee=ge;Ee>=Ue;Ee--)for(var Te=0;Te<de.length;Te++)if(de[Te]>=Ee){for(var ce=Te;Te+1<de.length&&de[Te+1]>=Ee;)Te++;Te>ce&&N.push([ce+Z,Te+Z])}}}),N}function Ae(se,we,me,T){var S=Ce(se,we,me,T),N=[].concat(se);return S.forEach(function(K,Z){N[Z]=(we.levels[K]&1?Fe(se[K]):null)||se[K]}),N.join("")}function Ce(se,we,me,T){for(var S=Ne(se,we,me,T),N=[],K=0;K<se.length;K++)N[K]=K;return S.forEach(function(Z){for(var ae=Z[0],de=Z[1],ue=N.slice(ae,de+1),ge=ue.length;ge--;)N[de-ge]=ue[ge]}),N}return e.closingToOpeningBracket=R,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=_e,e.getMirroredCharacter=Fe,e.getMirroredCharactersMap=B,e.getReorderSegments=Ne,e.getReorderedIndices=Ce,e.getReorderedString=Ae,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const pc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ls(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=qe[n];return i?Ls(i):r}return a.replace(e,t)}const vt=[];for(let a=0;a<256;a++)vt[a]=(a<16?"0":"")+a.toString(16);function Xm(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vt[a&255]+vt[a>>8&255]+vt[a>>16&255]+vt[a>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]).toUpperCase()}const Vn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},Ym=Date.now(),ml=new WeakMap,gl=new Map;let qm=1e10;function Is(a,e){const t=Jm(e);let r=ml.get(a);if(r||ml.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=gl[f];if(!h){const d=jm(this,c,e,t);h=gl[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,Vn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Ym}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:qm++}),u.uuid=Xm(),u.uniforms=Vn({},c.uniforms,e.uniforms),u.defines=Vn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Vn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(Vn(this.extensions,c.extensions),Vn(this.defines,c.defines),Vn(this.uniforms,$l.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Is(a.isDerivedMaterial?a.getDepthMaterial():new cc({depthPacking:Vl}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Is(a.isDerivedMaterial?a.getDistanceMaterial():new uc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=s,new s}function jm(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=r;if(i=i||"",s=s||"",o=o||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=Ls(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Ls(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(h){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(_.push(m),"")),f=`${h}
${_.join(`
`)}
${f}`}if(g){const _=`
uniform float ${g};
`;i=_+i,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,m,p,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,p))?m:`troika_${m}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=_l(e,n,i,s,o),t=_l(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function _l(a,e,t,r,n){return(r||n||t)&&(a=a.replace(pc,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function Km(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Zm=0;const vl=new Map;function Jm(a){const e=JSON.stringify(a,Km);let t=vl.get(e);return t==null&&vl.set(e,t=++Zm),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Qm(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var i=e._bin,s=new Uint8Array(n);if(i.readASCII(s,0,4)=="ttcf"){var o=4;i.readUshort(s,o),o+=2,i.readUshort(s,o),o+=2;var l=i.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var f=i.readUint(s,o);o+=4,c.push(e._readFont(s,f))}return c}return[e._readFont(s,0)]},_readFont:function(n,i){var s=e._bin,o=i;s.readFixed(n,i),i+=4;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},f={},h=0;h<l;h++){var d=s.readASCII(n,i,4);i+=4,s.readUint(n,i),i+=4;var g=s.readUint(n,i);i+=4;var _=s.readUint(n,i);i+=4,f[d]={offset:g,length:_}}for(h=0;h<c.length;h++){var m=c[h];f[m]&&(u[m.trim()]=e[m.trim()].parse(n,f[m].offset,f[m].length,u))}return u},_tabOffset:function(n,i,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var f=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var h=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,f==i)return h}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,s){for(var o="",l=0;l<s;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,s){var o=e._bin._tdec;return o&&i==0&&s==n.length?o.decode(n):e._bin.readASCII(n,i,s)},readBytes:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,s,o,l){var c=e._bin,u={},f=i;c.readFixed(n,i),i+=4;var h=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+d),u.lookupList=e._lctf.readLookupList(n,f+g,l),u},e._lctf.readLookupList=function(n,i,s){var o=e._bin,l=i,c=[],u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+h,s);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,s){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var f=c.ltype,h=0;h<u;h++){var d=o.readUshort(n,i);i+=2;var g=s(n,f,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,s=0;s<32;s++)n>>>s&1&&i++;return i},e._lctf.readClassDef=function(n,i){var s=e._bin,o=[],l=s.readUshort(n,i);if(i+=2,l==1){var c=s.readUshort(n,i);i+=2;var u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++)o.push(c+f),o.push(c+f),o.push(s.readUshort(n,i)),i+=2}if(l==2){var h=s.readUshort(n,i);for(i+=2,f=0;f<h;f++)o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=i&&i<=l)return s}return-1},e._lctf.readCoverage=function(n,i){var s=e._bin,o={};o.fmt=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=s.readUshorts(n,i,l)),o.fmt==2&&(o.tab=s.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var s=n.tab;if(n.fmt==1)return s.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(s,i);if(o!=-1)return s[o+2]+(i-s[o])}return-1},e._lctf.readFeatureList=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,i);i+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(s.readUshort(n,i+2*f));return l},e._lctf.readScriptList=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readScriptTable(n,o+h)}return l},e._lctf.readScriptTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=s.readASCII(n,i,4);i+=4;var d=s.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,i){var s=e._bin,o={};s.readUshort(n,i),i+=2,o.reqFeature=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.features=s.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,s){var o=e._bin;(n=new Uint8Array(n.buffer,i,s))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var f=[];i=e.CFF.readIndex(n,i,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,i+f[u],i+f[u+1]));i+=f[f.length-1];var d=h[0],g=[];i=e.CFF.readIndex(n,i,g);var _=[];for(u=0;u<g.length-1;u++)_.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var m=[];for(u=0;u<g.length-1;u++)m.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),d.FDArray=[],u=0;u<p.length-1;u++){var y=e.CFF.readDict(n,i+p[u],i+p[u+1]);e.CFF._readFDict(n,y,_),d.FDArray.push(y)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var M=n[i];if(i++,M!=3)throw M;var v=o.readUshort(n,i);for(i+=2,u=0;u<v+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,i,s){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=s[i[l]-426+35])},e.CFF.readSubrs=function(n,i,s){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var f=0;f<l.length-1;f++)s.Subrs.push(o.readBytes(n,i+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==i)return s;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,s){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,s){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<s;u++){var f=o.readUshort(n,i);i+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){f=o.readUshort(n,i),i+=2;var h=0;for(c==1?(h=n[i],i++):(h=o.readUshort(n,i),i+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(n,i,s){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)s.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,s){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=o.readShort(n,i+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(n,i+1)/65535,u=5),s.val=h??"o"+f,s.size=u},e.CFF.readCharString=function(n,i,s){for(var o=i+s,l=e._bin,c=[];i<o;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,g=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(g=l.readShort(n,i+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(n,i+1)/65535,h=5),c.push(g??"o"+d),i+=h}return c},e.CFF.readDict=function(n,i,s){for(var o=e._bin,l={},c=[];i<s;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,g=null;if(u==28&&(g=o.readShort(n,i+1),h=3),u==29&&(g=o.readInt(n,i+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=o.readInt(n,i+1)/65535,h=5,"unknown number";if(u==30){var _=[];for(h=1;;){var m=n[i+h];h++;var p=m>>4,y=15&m;if(p!=15&&_.push(p),y!=15&&_.push(y),y==15)break}for(var M="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],R=0;R<_.length;R++)M+=v[_[R]];g=parseFloat(M)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=h}return l},e.cmap={},e.cmap.parse=function(n,i,s){n=new Uint8Array(n.buffer,i,s),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var _="p"+h+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var y=o.readUshort(n,g);y==0?p=e.cmap.parse0(n,g):y==4?p=e.cmap.parse4(n,g):y==6?p=e.cmap.parse6(n,g):y==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+y,h,d,g),l.tables.push(p)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=m}return l},e.cmap.parse0=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var s=e._bin,o=i,l={};l.format=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;var f=u/2;l.searchRange=s.readUshort(n,i),i+=2,l.entrySelector=s.readUshort(n,i),i+=2,l.rangeShift=s.readUshort(n,i),i+=2,l.endCount=s.readUshorts(n,i,f),i+=2*f,i+=2,l.startCount=s.readUshorts(n,i,f),i+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(s.readShort(n,i)),i+=2;for(l.idRangeOffset=s.readUshorts(n,i,f),i+=2*f,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(s.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,o.firstCode=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,i+=2,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4;var l=s.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var u=i+12*c,f=s.readUint(n,u+0),h=s.readUint(n,u+4),d=s.readUint(n,u+8);o.groups.push([f,h,d])}return o},e.glyf={},e.glyf.parse=function(n,i,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var f=s.readUshort(o,l);if(l+=2,o.length-l<f)return null;c.instructions=s.readBytes(o,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?o[l]:-o[l]),l++):p?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?o[l]:-o[l]),l++):p?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var y=0,M=0;for(u=0;u<h;u++)y+=c.xs[u],M+=c.ys[u],c.xs[u]=y,c.ys[u]=M}else{var v;c.parts=[];do{v=s.readUshort(o,l),l+=2;var R={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(R),R.glyphIndex=s.readUshort(o,l),l+=2,1&v){var w=s.readShort(o,l);l+=2;var b=s.readShort(o,l);l+=2}else w=s.readInt8(o,l),l++,b=s.readInt8(o,l),l++;2&v?(R.m.tx=w,R.m.ty=b):(R.p1=w,R.p2=b),8&v?(R.m.a=R.m.d=s.readF2dot14(o,l),l+=2):64&v?(R.m.a=s.readF2dot14(o,l),l+=2,R.m.d=s.readF2dot14(o,l),l+=2):128&v&&(R.m.a=s.readF2dot14(o,l),l+=2,R.m.b=s.readF2dot14(o,l),l+=2,R.m.c=s.readF2dot14(o,l),l+=2,R.m.d=s.readF2dot14(o,l),l+=2)}while(32&v);if(256&v){var C=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<C;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,s,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(i==1&&u.fmt==1){var h=l.readUshort(n,s);s+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,s,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,s),s+=2;var d=l.readUshort(n,s);s+=2;var g=e._lctf.numOfOnes(h),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,s);s+=2;for(var p=0;p<m;p++){var y=c+l.readUshort(n,s);s+=2;var M=l.readUshort(n,y);y+=2;for(var v=[],R=0;R<M;R++){var w=l.readUshort(n,y);y+=2,h!=0&&(U=e.GPOS.readValueRecord(n,y,h),y+=2*g),d!=0&&(L=e.GPOS.readValueRecord(n,y,d),y+=2*_),v.push({gid2:w,val1:U,val2:L})}u.pairsets.push(v)}}if(u.fmt==2){var b=l.readUshort(n,s);s+=2;var C=l.readUshort(n,s);s+=2;var E=l.readUshort(n,s);s+=2;var x=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+b),u.classDef2=e._lctf.readClassDef(n,c+C),u.matrix=[],p=0;p<E;p++){var P=[];for(R=0;R<x;R++){var U=null,L=null;h!=0&&(U=e.GPOS.readValueRecord(n,s,h),s+=2*g),d!=0&&(L=e.GPOS.readValueRecord(n,s,d),s+=2*_),P.push({val1:U,val2:L})}u.matrix.push(P)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var I=l.readUshort(n,s);s+=2;var G=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=I;else if(o.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+G)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,i):0),i+=1&s?2:0,l.push(2&s?o.readShort(n,i):0),i+=2&s?2:0,l.push(4&s?o.readShort(n,i):0),i+=4&s?2:0,l.push(8&s?o.readShort(n,i):0),i+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,i,s){var o=e._bin,l=[],c=i,u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<s;d++)h.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,i){var s=e._bin,o=[],l=i,c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,s.readUshort(n,i+2)+l);f.markClass=s.readUshort(n,i),o.push(f),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var s=e._bin,o={};return o.fmt=s.readUshort(n,i),o.x=s.readShort(n,i+2),o.y=s.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var h=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,h),s+=2*u.newg.length}}else if(i==2&&u.fmt==1){h=l.readUshort(n,s),s+=2,u.seqs=[];for(var d=0;d<h;d++){var g=l.readUshort(n,s)+c;s+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(i==4)for(u.vals=[],h=l.readUshort(n,s),s+=2,d=0;d<h;d++){var m=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+p),u.scset=[];var y=l.readUshort(n,s);for(s+=2,d=0;d<y;d++){var M=l.readUshort(n,s);s+=2,u.scset.push(M==0?null:e.GSUB.readSubClassSet(n,c+M))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(n,s),s+=2;for(var v=[],R=0;R<h;R++)v.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*R)));s+=2*h,d==0&&(u.backCvg=v),d==1&&(u.inptCvg=v),d==2&&(u.ahedCvg=v)}h=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,h)}}else{if(i==7&&u.fmt==1){var w=l.readUshort(n,s);s+=2;var b=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+b)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var s=e._bin.readUshort,o=i,l=[],c=s(n,i);i+=2;for(var u=0;u<c;u++){var f=s(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+f))}return l},e.GSUB.readSubClassRule=function(n,i){var s=e._bin.readUshort,o={},l=s(n,i),c=s(n,i+=2);i+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+f))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,i);i+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,i,u),i+=2*o[l[c]].length}return u=s.readUshort(n,i),i+=2,o.subst=s.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+f))}return l},e.GSUB.readLigature=function(n,i){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,f=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,i,s,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,s,o);var u=l.readUshort(n,i);i+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,s=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,f)}return f},e.kern.parseV1=function(n,i,s,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,i),i+=4;var h=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,s){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2;var h=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,f!=l&&(s.glyph1.push(f),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(h),g.vals.push(d),l=f}return i},e.loca={},e.loca.parse=function(n,i,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,f=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,i+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,i+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,s){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,s){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,d=0;d<c;d++){var g=o.readUshort(n,i);i+=2;var _=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var y=o.readUshort(n,i);i+=2;var M=o.readUshort(n,i);i+=2;var v,R=f[p],w=h+12*c+M;if(g==0)v=o.readUnicode(n,w,y/2);else if(g==3&&_==0)v=o.readUnicode(n,w,y/2);else if(_==0)v=o.readASCII(n,w,y);else if(_==1)v=o.readUnicode(n,w,y/2);else if(_==3)v=o.readUnicode(n,w,y/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;v=o.readASCII(n,w,y),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var b="p"+g+","+m.toString(16);l[b]==null&&(l[b]={}),l[b][R!==void 0?R:p]=v,l[b]._lang=m}for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==1033)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==0)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==3084)return l[C];for(var C in l)if(l[C].postScriptName!=null)return l[C];for(var C in l){u=C;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,s){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,i),i+=2,s.usWeightClass=o.readUshort(n,i),i+=2,s.usWidthClass=o.readUshort(n,i),i+=2,s.fsType=o.readUshort(n,i),i+=2,s.ySubscriptXSize=o.readShort(n,i),i+=2,s.ySubscriptYSize=o.readShort(n,i),i+=2,s.ySubscriptXOffset=o.readShort(n,i),i+=2,s.ySubscriptYOffset=o.readShort(n,i),i+=2,s.ySuperscriptXSize=o.readShort(n,i),i+=2,s.ySuperscriptYSize=o.readShort(n,i),i+=2,s.ySuperscriptXOffset=o.readShort(n,i),i+=2,s.ySuperscriptYOffset=o.readShort(n,i),i+=2,s.yStrikeoutSize=o.readShort(n,i),i+=2,s.yStrikeoutPosition=o.readShort(n,i),i+=2,s.sFamilyClass=o.readShort(n,i),i+=2,s.panose=o.readBytes(n,i,10),i+=10,s.ulUnicodeRange1=o.readUint(n,i),i+=4,s.ulUnicodeRange2=o.readUint(n,i),i+=4,s.ulUnicodeRange3=o.readUint(n,i),i+=4,s.ulUnicodeRange4=o.readUint(n,i),i+=4,s.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,s.fsSelection=o.readUshort(n,i),i+=2,s.usFirstCharIndex=o.readUshort(n,i),i+=2,s.usLastCharIndex=o.readUshort(n,i),i+=2,s.sTypoAscender=o.readShort(n,i),i+=2,s.sTypoDescender=o.readShort(n,i),i+=2,s.sTypoLineGap=o.readShort(n,i),i+=2,s.usWinAscent=o.readUshort(n,i),i+=2,s.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,s){var o=e._bin;return i=e["OS/2"].version0(n,i,s),s.ulCodePageRange1=o.readUint(n,i),i+=4,s.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,s){var o=e._bin;return i=e["OS/2"].version1(n,i,s),s.sxHeight=o.readShort(n,i),i+=2,s.sCapHeight=o.readShort(n,i),i+=2,s.usDefault=o.readUshort(n,i),i+=2,s.usBreak=o.readUshort(n,i),i+=2,s.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,s){var o=e._bin;return i=e["OS/2"].version2(n,i,s),s.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,s.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,s){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=i&&i<=f[1])return f[2]+(i-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=i;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,s)}else n.glyf&&e.U._drawGlyf(i,n,s);return s},e.U._drawGlyf=function(n,i,s){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,i,s))},e.U._simpleGlyph=function(n,i){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,f=c==l?o:c+1,h=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[f],_=n.xs[c],m=n.ys[c];if(c==o)if(h){if(!d){e.U.P.moveTo(i,_,m);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+_)/2,(n.ys[u]+m)/2);h?d&&e.U.P.lineTo(i,_,m):g?e.U.P.qcurveTo(i,_,m,n.xs[f],n.ys[f]):e.U.P.qcurveTo(i,_,m,(_+n.xs[f])/2,(m+n.ys[f])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];s.crds.push(h*u.a+d*u.b+u.tx),s.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)s.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(n,i){var s=e._lctf.getInterval(i,n);return s==-1?0:i[s+2]},e.U._applySubs=function(n,i,s,o){for(var l=n.length-i-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,f=s.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[i]))!=-1){if(s.ltype==1)n[i],f.fmt==1?n[i]=n[i]+f.delta:n[i]=f.newg[u];else if(s.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var g=h[d],_=g.chain.length;if(!(_>l)){for(var m=!0,p=0,y=0;y<_;y++){for(;n[i+p+(1+y)]==-1;)p++;g.chain[y]!=n[i+p+(1+y)]&&(m=!1)}if(m){for(n[i]=g.nglyph,y=0;y<_+p;y++)n[i+y+1]=-1;break}}}else if(s.ltype==5&&f.fmt==2)for(var M=e._lctf.getInterval(f.cDef,n[i]),v=f.cDef[M+2],R=f.scset[v],w=0;w<R.length;w++){var b=R[w],C=b.input;if(!(C.length>l)){for(m=!0,y=0;y<C.length;y++){var E=e._lctf.getInterval(f.cDef,n[i+1+y]);if(M==-1&&f.cDef[E+2]!=C[y]){m=!1;break}}if(m){var x=b.substLookupRecords;for(d=0;d<x.length;d+=2)x[d],x[d+1]}}}else if(s.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,i-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,i)||!e.U._glsCovered(n,f.ahedCvg,i+f.inptCvg.length))continue;var P=f.lookupRec;for(w=0;w<P.length;w+=2){M=P[w];var U=o[P[w+1]];e.U._applySubs(n,i+M,U,o)}}}}},e.U._glsCovered=function(n,i,s){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var f=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,h=e.U.glyphToPath(n,u),d=0;d<h.crds.length;d+=2)o.crds.push(h.crds[d]+l),o.crds.push(h.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<h.cmds.length;d++)o.cmds.push(h.cmds[d]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,f))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,s){n.cmds.push("M"),n.crds.push(i,s)},e.U.P.lineTo=function(n,i,s){n.cmds.push("L"),n.crds.push(i,s)},e.U.P.curveTo=function(n,i,s,o,l,c,u){n.cmds.push("C"),n.crds.push(i,s,o,l,c,u)},e.U.P.qcurveTo=function(n,i,s,o,l){n.cmds.push("Q"),n.crds.push(i,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,s,o,l){for(var c=i.stack,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open,g=0,_=i.x,m=i.y,p=0,y=0,M=0,v=0,R=0,w=0,b=0,C=0,E=0,x=0,P={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,P);var U=P.val;if(g+=P.size,U=="o1"||U=="o18")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o4")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,_,m),d=!0;else if(U=="o5")for(;c.length>0;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);else if(U=="o6"||U=="o7")for(var L=c.length,I=U=="o6",G=0;G<L;G++){var z=c.shift();I?_+=z:m+=z,I=!I,e.U.P.lineTo(l,_,m)}else if(U=="o8"||U=="o24"){L=c.length;for(var J=0;J+6<=L;)p=_+c.shift(),y=m+c.shift(),M=p+c.shift(),v=y+c.shift(),_=M+c.shift(),m=v+c.shift(),e.U.P.curveTo(l,p,y,M,v,_,m),J+=6;U=="o24"&&(_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(y=m,M=(p=_+c.shift())+c.shift(),x=v=y+c.shift(),w=v,C=m,_=(b=(R=(E=M+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,y,M,v,E,x),e.U.P.curveTo(l,R,w,b,C,_,m)),U=="o1235"&&(p=_+c.shift(),y=m+c.shift(),M=p+c.shift(),v=y+c.shift(),E=M+c.shift(),x=v+c.shift(),R=E+c.shift(),w=x+c.shift(),b=R+c.shift(),C=w+c.shift(),_=b+c.shift(),m=C+c.shift(),c.shift(),e.U.P.curveTo(l,p,y,M,v,E,x),e.U.P.curveTo(l,R,w,b,C,_,m)),U=="o1236"&&(p=_+c.shift(),y=m+c.shift(),M=p+c.shift(),x=v=y+c.shift(),w=v,b=(R=(E=M+c.shift())+c.shift())+c.shift(),C=w+c.shift(),_=b+c.shift(),e.U.P.curveTo(l,p,y,M,v,E,x),e.U.P.curveTo(l,R,w,b,C,_,m)),U=="o1237"&&(p=_+c.shift(),y=m+c.shift(),M=p+c.shift(),v=y+c.shift(),E=M+c.shift(),x=v+c.shift(),R=E+c.shift(),w=x+c.shift(),b=R+c.shift(),C=w+c.shift(),Math.abs(b-_)>Math.abs(C-m)?_=b+c.shift():m=C+c.shift(),e.U.P.curveTo(l,p,y,M,v,E,x),e.U.P.curveTo(l,R,w,b,C,_,m));else if(U=="o14"){if(c.length>0&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),c.length==4){var Y=c.shift(),j=c.shift(),q=c.shift(),D=c.shift(),H=e.CFF.glyphBySE(s,q),Q=e.CFF.glyphBySE(s,D);e.U._drawCFF(s.CharStrings[H],i,s,o,l),i.x=Y,i.y=j,e.U._drawCFF(s.CharStrings[Q],i,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(U=="o21")c.length>2&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),m+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),d=!0;else if(U=="o22")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),d=!0;else if(U=="o25"){for(;c.length>6;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);p=_+c.shift(),y=m+c.shift(),M=p+c.shift(),v=y+c.shift(),_=M+c.shift(),m=v+c.shift(),e.U.P.curveTo(l,p,y,M,v,_,m)}else if(U=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)p=_,y=m+c.shift(),_=M=p+c.shift(),m=(v=y+c.shift())+c.shift(),e.U.P.curveTo(l,p,y,M,v,_,m);else if(U=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)y=m,M=(p=_+c.shift())+c.shift(),v=y+c.shift(),_=M+c.shift(),m=v,e.U.P.curveTo(l,p,y,M,v,_,m);else if(U=="o10"||U=="o29"){var F=U=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var O=c.pop(),$=F.Subrs[O+F.Bias];i.x=_,i.y=m,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d,e.U._drawCFF($,i,s,o,l),_=i.x,m=i.y,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open}}else if(U=="o30"||U=="o31"){var V=c.length,ne=(J=0,U=="o31");for(J+=V-(L=-3&V);J<L;)ne?(y=m,M=(p=_+c.shift())+c.shift(),m=(v=y+c.shift())+c.shift(),L-J==5?(_=M+c.shift(),J++):_=M,ne=!1):(p=_,y=m+c.shift(),M=p+c.shift(),v=y+c.shift(),_=M+c.shift(),L-J==5?(m=v+c.shift(),J++):m=v,ne=!0),e.U.P.curveTo(l,p,y,M,v,_,m),J+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,n),U;c.push(U)}}}i.x=_,i.y=m,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function $m(){return function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(U,L){for(var I=new t(31),G=0;G<31;++G)I[G]=L+=1<<U[G-1];var z=new r(I[30]);for(G=1;G<30;++G)for(var J=I[G];J<I[G+1];++J)z[J]=J-I[G]<<5|G;return[I,z]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=o(i,0)[0],h=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(U,L,I){for(var G=U.length,z=0,J=new t(L);z<G;++z)++J[U[z]-1];var Y,j=new t(L);for(z=0;z<L;++z)j[z]=j[z-1]+J[z-1]<<1;{Y=new t(1<<L);var q=15-L;for(z=0;z<G;++z)if(U[z])for(var D=z<<4|U[z],H=L-U[z],Q=j[U[z]-1]++<<H,F=Q|(1<<H)-1;Q<=F;++Q)Y[h[Q]>>>q]=D}return Y},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var y=_(m,9),M=_(p,5),v=function(U){for(var L=U[0],I=1;I<U.length;++I)U[I]>L&&(L=U[I]);return L},R=function(U,L,I){var G=L/8|0;return(U[G]|U[G+1]<<8)>>(7&L)&I},w=function(U,L){var I=L/8|0;return(U[I]|U[I+1]<<8|U[I+2]<<16)>>(7&L)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(U,L,I){var G=new Error(L||b[U]);if(G.code=U,Error.captureStackTrace&&Error.captureStackTrace(G,C),!I)throw G;return G},E=function(U,L,I){var G=U.length;if(!G||I&&!I.l&&G<5)return L||new e(0);var z=!L||I,J=!I||I.i;I||(I={}),L||(L=new e(3*G));var Y,j=function(ce){var Pe=L.length;if(ce>Pe){var De=new e(Math.max(2*Pe,ce));De.set(L),L=De}},q=I.f||0,D=I.p||0,H=I.b||0,Q=I.l,F=I.d,O=I.m,$=I.n,V=8*G;do{if(!Q){I.f=q=R(U,D,1);var ne=R(U,D+1,3);if(D+=3,!ne){var _e=U[(me=((Y=D)/8|0)+(7&Y&&1)+4)-4]|U[me-3]<<8,Me=me+_e;if(Me>G){J&&C(0);break}z&&j(H+_e),L.set(U.subarray(me,Me),H),I.b=H+=_e,I.p=D=8*Me;continue}if(ne==1)Q=y,F=M,O=9,$=5;else if(ne==2){var xe=R(U,D,31)+257,oe=R(U,D+10,15)+4,Fe=xe+R(U,D+5,31)+1;D+=14;for(var B=new e(Fe),Ne=new e(19),Ae=0;Ae<oe;++Ae)Ne[s[Ae]]=R(U,D+3*Ae,7);D+=3*oe;var Ce=v(Ne),se=(1<<Ce)-1,we=_(Ne,Ce);for(Ae=0;Ae<Fe;){var me,T=we[R(U,D,se)];if(D+=15&T,(me=T>>>4)<16)B[Ae++]=me;else{var S=0,N=0;for(me==16?(N=3+R(U,D,3),D+=2,S=B[Ae-1]):me==17?(N=3+R(U,D,7),D+=3):me==18&&(N=11+R(U,D,127),D+=7);N--;)B[Ae++]=S}}var K=B.subarray(0,xe),Z=B.subarray(xe);O=v(K),$=v(Z),Q=_(K,O),F=_(Z,$)}else C(1);if(D>V){J&&C(0);break}}z&&j(H+131072);for(var ae=(1<<O)-1,de=(1<<$)-1,ue=D;;ue=D){var ge=(S=Q[w(U,D)&ae])>>>4;if((D+=15&S)>V){J&&C(0);break}if(S||C(2),ge<256)L[H++]=ge;else{if(ge==256){ue=D,Q=null;break}var Ue=ge-254;if(ge>264){var fe=n[Ae=ge-257];Ue=R(U,D,(1<<fe)-1)+c[Ae],D+=fe}var ye=F[w(U,D)&de],Ee=ye>>>4;if(ye||C(3),D+=15&ye,Z=f[Ee],Ee>3&&(fe=i[Ee],Z+=w(U,D)&(1<<fe)-1,D+=fe),D>V){J&&C(0);break}z&&j(H+131072);for(var Te=H+Ue;H<Te;H+=4)L[H]=L[H-Z],L[H+1]=L[H+1-Z],L[H+2]=L[H+2-Z],L[H+3]=L[H+3-Z];H=Te}}I.l=Q,I.p=ue,I.b=H,Q&&(q=1,I.m=O,I.d=F,I.n=$)}while(!q);return H==L.length?L:function(ce,Pe,De){(De==null||De>ce.length)&&(De=ce.length);var Ye=new(ce instanceof t?t:ce instanceof r?r:e)(De-Pe);return Ye.set(ce.subarray(Pe,De)),Ye}(L,0,H)},x=new e(0),P=typeof TextDecoder<"u"&&new TextDecoder;try{P.decode(x,{stream:!0})}catch{}return a.convert_streams=function(U){var L=new DataView(U),I=0;function G(){var xe=L.getUint16(I);return I+=2,xe}function z(){var xe=L.getUint32(I);return I+=4,xe}function J(xe){_e.setUint16(Me,xe),Me+=2}function Y(xe){_e.setUint32(Me,xe),Me+=4}for(var j={signature:z(),flavor:z(),length:z(),numTables:G(),reserved:G(),totalSfntSize:z(),majorVersion:G(),minorVersion:G(),metaOffset:z(),metaLength:z(),metaOrigLength:z(),privOffset:z(),privLength:z()},q=0;Math.pow(2,q)<=j.numTables;)q++;q--;for(var D=16*Math.pow(2,q),H=16*j.numTables-D,Q=12,F=[],O=0;O<j.numTables;O++)F.push({tag:z(),offset:z(),compLength:z(),origLength:z(),origChecksum:z()}),Q+=16;var $,V=new Uint8Array(12+16*F.length+F.reduce(function(xe,oe){return xe+oe.origLength+4},0)),ne=V.buffer,_e=new DataView(ne),Me=0;return Y(j.flavor),J(j.numTables),J(D),J(q),J(H),F.forEach(function(xe){Y(xe.tag),Y(xe.origChecksum),Y(Q),Y(xe.origLength),xe.outOffset=Q,(Q+=xe.origLength)%4!=0&&(Q+=4-Q%4)}),F.forEach(function(xe){var oe,Fe=U.slice(xe.offset,xe.offset+xe.compLength);if(xe.compLength!=xe.origLength){var B=new Uint8Array(xe.origLength);oe=new Uint8Array(Fe,2),E(oe,B)}else B=new Uint8Array(Fe);V.set(B,xe.outOffset);var Ne=0;(Q=xe.outOffset+xe.origLength)%4!=0&&(Ne=4-Q%4),V.set(new Uint8Array(Ne).buffer,xe.outOffset+xe.origLength),$=Q+Ne}),ne.slice(0,$)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function eg(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,s=4,o=8,l=16,c=32;let u;function f(b){if(!u){const C={R:i,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let E in r){let x=0;r[E].split(",").forEach(P=>{let[U,L]=P.split("+");U=parseInt(U,36),L=L?parseInt(L,36):0,u.set(x+=U,C[E]);for(let I=L;I--;)u.set(++x,C[E])})}}return u.get(b)||c}const h=1,d=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function p(b){const C=new Uint8Array(b.length);let E=c,x=h,P=-1;for(let U=0;U<b.length;U++){const L=b.codePointAt(U);let I=f(L)|0,G=h;I&o||(E&(n|s|l)?I&(i|s|l)?(G=g,(x===h||x===g)&&C[P]++):I&(n|c)&&(x===d||x===_)&&C[P]--:E&(i|c)&&(x===d||x===_)&&C[P]--,x=C[U]=G,E=I,P=U,L>65535&&U++)}return C}function y(b,C){const E=[];for(let P=0;P<C.length;P++){const U=C.codePointAt(P);U>65535&&P++,E.push(a.U.codeToGlyph(b,U))}const x=b.GSUB;if(x){const{lookupList:P,featureList:U}=x;let L;const I=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,G=[];U.forEach(z=>{if(I.test(z.tag))for(let J=0;J<z.tab.length;J++){if(G[z.tab[J]])continue;G[z.tab[J]]=!0;const Y=P[z.tab[J]],j=/^(isol|init|fina|medi)$/.test(z.tag);j&&!L&&(L=p(C));for(let q=0;q<E.length;q++)(!L||!j||m[L[q]]===z.tag)&&a.U._applySubs(E,q,Y,P)}})}return E}function M(b,C){const E=new Int16Array(C.length*3);let x=0;for(;x<C.length;x++){const I=C[x];if(I===-1)continue;E[x*3+2]=b.hmtx.aWidth[I];const G=b.GPOS;if(G){const z=G.lookupList;for(let J=0;J<z.length;J++){const Y=z[J];for(let j=0;j<Y.tabs.length;j++){const q=Y.tabs[j];if(Y.ltype===1){if(a._lctf.coverageIndex(q.coverage,I)!==-1&&q.pos){L(q.pos,x);break}}else if(Y.ltype===2){let D=null,H=P();if(H!==-1){const Q=a._lctf.coverageIndex(q.coverage,C[H]);if(Q!==-1){if(q.fmt===1){const F=q.pairsets[Q];for(let O=0;O<F.length;O++)F[O].gid2===I&&(D=F[O])}else if(q.fmt===2){const F=a.U._getGlyphClass(C[H],q.classDef1),O=a.U._getGlyphClass(I,q.classDef2);D=q.matrix[F][O]}if(D){D.val1&&L(D.val1,H),D.val2&&L(D.val2,x);break}}}}else if(Y.ltype===4){const D=a._lctf.coverageIndex(q.markCoverage,I);if(D!==-1){const H=P(U),Q=H===-1?-1:a._lctf.coverageIndex(q.baseCoverage,C[H]);if(Q!==-1){const F=q.markArray[D],O=q.baseArray[Q][F.markClass];E[x*3]=O.x-F.x+E[H*3]-E[H*3+2],E[x*3+1]=O.y-F.y+E[H*3+1];break}}}else if(Y.ltype===6){const D=a._lctf.coverageIndex(q.mark1Coverage,I);if(D!==-1){const H=P();if(H!==-1){const Q=C[H];if(v(b,Q)===3){const F=a._lctf.coverageIndex(q.mark2Coverage,Q);if(F!==-1){const O=q.mark1Array[D],$=q.mark2Array[F][O.markClass];E[x*3]=$.x-O.x+E[H*3]-E[H*3+2],E[x*3+1]=$.y-O.y+E[H*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const z=P();if(z!==-1){const J=b.kern.glyph1.indexOf(C[z]);if(J!==-1){const Y=b.kern.rval[J].glyph2.indexOf(I);Y!==-1&&(E[z*3+2]+=b.kern.rval[J].vals[Y])}}}}return E;function P(I){for(let G=x-1;G>=0;G--)if(C[G]!==-1&&(!I||I(C[G])))return G;return-1}function U(I){return v(b,I)===1}function L(I,G){for(let z=0;z<3;z++)E[G*3+z]+=I[z]||0}}function v(b,C){const E=b.GDEF&&b.GDEF.glyphClassDef;return E?a.U._getGlyphClass(C,E):0}function R(...b){for(let C=0;C<b.length;C++)if(typeof b[C]=="number")return b[C]}function w(b){const C=Object.create(null),E=b["OS/2"],x=b.hhea,P=b.head.unitsPerEm,U=R(E&&E.sTypoAscender,x&&x.ascender,P),L={unitsPerEm:P,ascender:U,descender:R(E&&E.sTypoDescender,x&&x.descender,0),capHeight:R(E&&E.sCapHeight,U),xHeight:R(E&&E.sxHeight,U),lineGap:R(E&&E.sTypoLineGap,x&&x.lineGap),supportsCodePoint(I){return a.U.codeToGlyph(b,I)>0},forEachGlyph(I,G,z,J){let Y=0;const j=1/L.unitsPerEm*G,q=y(b,I);let D=0;const H=M(b,q);return q.forEach((Q,F)=>{if(Q!==-1){let O=C[Q];if(!O){const{cmds:$,crds:V}=a.U.glyphToPath(b,Q);let ne="",_e=0;for(let B=0,Ne=$.length;B<Ne;B++){const Ae=t[$[B]];ne+=$[B];for(let Ce=1;Ce<=Ae;Ce++)ne+=(Ce>1?",":"")+V[_e++]}let Me,xe,oe,Fe;if(V.length){Me=xe=1/0,oe=Fe=-1/0;for(let B=0,Ne=V.length;B<Ne;B+=2){let Ae=V[B],Ce=V[B+1];Ae<Me&&(Me=Ae),Ce<xe&&(xe=Ce),Ae>oe&&(oe=Ae),Ce>Fe&&(Fe=Ce)}}else Me=oe=xe=Fe=0;O=C[Q]={index:Q,advanceWidth:b.hmtx.aWidth[Q],xMin:Me,yMin:xe,xMax:oe,yMax:Fe,path:ne}}J.call(null,O,Y+H[F*3]*j,H[F*3+1]*j,D),Y+=H[F*3+2]*j,z&&(Y+=z*G)}D+=I.codePointAt(D)>65535?2:1}),Y}};return L}return function(C){const E=new Uint8Array(C,0,4),x=a._bin.readASCII(E,0,4);if(x==="wOFF")C=e(C);else if(x==="wOF2")throw new Error("woff2 fonts not supported");return w(a.parse(C)[0])}}const tg=Ii({name:"Typr Font Parser",dependencies:[Qm,$m,eg],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function ng(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(M){var v=M>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&M))},e.prototype.has=function(M){var v=this.buckets.get(M>>5);return v!==void 0&&(v&1<<(31&M))!=0},e.prototype.serialize=function(){var M=[];return this.buckets.forEach(function(v,R){M.push((+R).toString(36)+":"+v.toString(36))}),M.join(",")},e.prototype.deserialize=function(M){var v=this;this.buckets.clear(),M.split(",").forEach(function(R){var w=R.split(":");v.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(M){var v=function(w){return w&n}(M).toString(16),R=function(w){return(w&n)+t-1}(M).toString(16);return"codepoint-index/plane"+(M>>16)+"/"+v+"-"+R+".json"}function s(M,v){var R=M&r,w=v.codePointAt(R/6|0);return((w=(w||48)-48)&1<<R%6)!=0}function o(M,v){var R;(R=M,R.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(b){return parseInt(b.trim(),16)})})).forEach(function(w){var b=w[0],C=w[1];C===void 0&&(C=b),v(b,C)})}function l(M,v){o(M,function(R,w){for(var b=R;b<=w;b++)v(b)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(M){var v=f.get(M);return v||(v=new e,l(M.ranges,function(R){return v.add(R)}),f.set(M,v)),v}var g,_=new Map;function m(M,v,R){return M[v]?v:M[R]?R:function(w){for(var b in w)return b}(M)}function p(M,v){var R=v;if(!M.includes(R)){R=1/0;for(var w=0;w<M.length;w++)Math.abs(M[w]-v)<Math.abs(R-v)&&(R=M[w])}return R}function y(M){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(v){g.add(v)})),g.has(M)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(M,v){v===void 0&&(v={});var R,w=v.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(R=M)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(R)?"ja":"en");var b=v.category;b===void 0&&(b="sans-serif");var C=v.style;C===void 0&&(C="normal");var E=v.weight;E===void 0&&(E=400);var x=(v.dataUrl||h).replace(/\/$/g,""),P=new Map,U=new Uint8Array(M.length),L={},I={},G=new Array(M.length),z=new Map,J=!1;function Y(D){var H=_.get(D);return H||(H=fetch(x+"/"+D).then(function(Q){if(!Q.ok)throw new Error(Q.statusText);return Q.json().then(function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]})}).catch(function(Q){if(x!==h)return J||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+x+'", trying default CDN. '+Q.message),J=!0),x=h,_.delete(D),Y(D);throw Q}),_.set(D,H)),H}for(var j=function(D){var H=M.codePointAt(D),Q=i(H);G[D]=Q,c[Q]||z.has(Q)||z.set(Q,Y(Q).then(function(F){c[Q]=F})),H>65535&&(D++,q=D)},q=0;q<M.length;q++)j(q);return Promise.all(z.values()).then(function(){z.clear();for(var D=function(Q){var F=M.codePointAt(Q),O=null,$=c[G[Q]],V=void 0;for(var ne in $){var _e=I[ne];if(_e===void 0&&(_e=I[ne]=new RegExp(ne).test(w||"en")),_e){for(var Me in V=ne,$[ne])if(s(F,$[ne][Me])){O=Me;break}break}}if(!O){e:for(var xe in $)if(xe!==V){for(var oe in $[xe])if(s(F,$[xe][oe])){O=oe;break e}}}O||(console.debug("No font coverage for U+"+F.toString(16)),O="latin"),G[Q]=O,u[O]||z.has(O)||z.set(O,Y("font-meta/"+O+".json").then(function(Fe){u[O]=Fe})),F>65535&&(Q++,H=Q)},H=0;H<M.length;H++)D(H);return Promise.all(z.values())}).then(function(){for(var D,H=null,Q=0;Q<M.length;Q++){var F=M.codePointAt(Q);if(H&&(y(F)||d(H).has(F)))U[Q]=U[Q-1];else{H=u[G[Q]];var O=L[H.id];if(!O){var $=H.typeforms,V=m($,b,"sans-serif"),ne=m($[V],C,"normal"),_e=p((D=$[V])===null||D===void 0?void 0:D[ne],E);O=L[H.id]=x+"/font-files/"+H.id+"/"+V+"."+ne+"."+_e+".woff"}var Me=P.get(O);Me==null&&(Me=P.size,P.set(O,Me)),U[Q]=Me}F>65535&&(Q++,U[Q]=U[Q-1])}return{fontUrls:Array.from(P.keys()),chars:U}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function ig(a,e){const t=Object.create(null),r=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(s,o){let l=t[s];l?o(l):r[s]?r[s].push(o):(r[s]=[o],n(s,c=>{c.src=s,t[s]=c,r[s].forEach(u=>u(c)),delete r[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(s.length),g=[];s.length||y();const _=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let b=0;(function C(E=0){for(let x=E,P=s.length;x<P;x++){const U=s.codePointAt(x);if(b===1&&g[d[x-1]].supportsCodePoint(U)||x>0&&/\s/.test(s[x]))d[x]=d[x-1],b===2&&(m[m.length-1][1]=x);else for(let L=d[x],I=c.length;L<=I;L++)if(L===I){const G=b===2?m[m.length-1]:m[m.length]=[x,x];G[1]=x,b=2}else{d[x]=L;const{src:G,unicodeRange:z}=c[L];if(!z||M(U,z)){const J=t[G];if(!J){i(G,()=>{C(x)});return}if(J.supportsCodePoint(U)){let Y=_.get(J);typeof Y!="number"&&(Y=g.length,g.push(J),_.set(J,Y)),d[x]=Y,b=1;break}}}U>65535&&x+1<P&&(d[x+1]=d[x],x++,b===2&&(m[m.length-1][1]=x))}p()})()}else m.push([0,s.length-1]),p();function p(){if(m.length){const v=m.map(R=>s.substring(R[0],R[1]+1)).join(`
`);e.getFontsForString(v,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:R,chars:w})=>{const b=g.length;let C=0;m.forEach(x=>{for(let P=0,U=x[1]-x[0];P<=U;P++)d[x[0]+P]=w[C++]+b;C++});let E=0;R.forEach((x,P)=>{i(x,U=>{g[P+b]=U,++E===R.length&&y()})})})}else y()}function y(){o({chars:d,fonts:g})}function M(v,R){for(let w=0;w<R.length;w++){const[b,C=b]=R[w];if(b<=v&&v<=C)return!0}return!1}}}const rg=Ii({name:"FontResolver",dependencies:[ig,tg,ng],init(a,e,t){return a(e,t())}});function ag(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:g,lang:_,fonts:m,style:p,weight:y,preResolvedFonts:M,unicodeFontsURL:v},R){const w=({chars:b,fonts:C})=>{let E,x;const P=[];for(let U=0;U<b.length;U++)b[U]!==x?(x=b[U],P.push(E={start:U,end:U,fontObj:C[b[U]]})):E.end=U;R(P)};M?w(M):a(g,w,{lang:_,fonts:m,style:p,weight:y,unicodeFontsURL:v})}function o({text:g="",font:_,lang:m,sdfGlyphSize:p=64,fontSize:y=400,fontWeight:M=1,fontStyle:v="normal",letterSpacing:R=0,lineHeight:w="normal",maxWidth:b=1/0,direction:C,textAlign:E="left",textIndent:x=0,whiteSpace:P="normal",overflowWrap:U="normal",anchorX:L=0,anchorY:I=0,metricsOnly:G=!1,unicodeFontsURL:z,preResolvedFonts:J=null,includeCaretPositions:Y=!1,chunkedBoundsSize:j=8192,colorRanges:q=null},D){const H=f(),Q={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,R=+R,b=+b,w=w||"normal",x=+x,s({text:g,lang:m,style:v,weight:M,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:z,preResolvedFonts:J},F=>{Q.fontLoad=f()-H;const O=isFinite(b);let $=null,V=null,ne=null,_e=null,Me=null,xe=null,oe=null,Fe=null,B=0,Ne=0,Ae=P!=="nowrap";const Ce=new Map,se=f();let we=x,me=0,T=new h;const S=[T];F.forEach(de=>{const{fontObj:ue}=de,{ascender:ge,descender:Ue,unitsPerEm:fe,lineGap:ye,capHeight:Ee,xHeight:Te}=ue;let ce=Ce.get(ue);if(!ce){const he=y/fe,ee=w==="normal"?(ge-Ue+ye)*he:w*y,pe=(ee-(ge-Ue)*he)/2,Se=Math.min(ee,(ge-Ue)*he),ve=(ge+Ue)/2*he+Se/2;ce={index:Ce.size,src:ue.src,fontObj:ue,fontSizeMult:he,unitsPerEm:fe,ascender:ge*he,descender:Ue*he,capHeight:Ee*he,xHeight:Te*he,lineHeight:ee,baseline:-pe-ge*he,caretTop:ve,caretBottom:ve-Se},Ce.set(ue,ce)}const{fontSizeMult:Pe}=ce,De=g.slice(de.start,de.end+1);let Ye,k;ue.forEachGlyph(De,y,R,(he,ee,pe,Se)=>{ee+=me,Se+=de.start,Ye=ee,k=he;const ve=g.charAt(Se),Ie=he.advanceWidth*Pe,He=T.count;let ze;if("isEmpty"in he||(he.isWhitespace=!!ve&&new RegExp(n).test(ve),he.canBreakAfter=!!ve&&i.test(ve),he.isEmpty=he.xMin===he.xMax||he.yMin===he.yMax||r.test(ve)),!he.isWhitespace&&!he.isEmpty&&Ne++,Ae&&O&&!he.isWhitespace&&ee+Ie+we>b&&He){if(T.glyphAt(He-1).glyphObj.canBreakAfter)ze=new h,we=-ee;else for(let rt=He;rt--;)if(rt===0&&U==="break-word"){ze=new h,we=-ee;break}else if(T.glyphAt(rt).glyphObj.canBreakAfter){ze=T.splitAt(rt+1);const at=ze.glyphAt(0).x;we-=at;for(let lt=ze.count;lt--;)ze.glyphAt(lt).x-=at;break}ze&&(T.isSoftWrapped=!0,T=ze,S.push(T),B=b)}let Ge=T.glyphAt(T.count);Ge.glyphObj=he,Ge.x=ee+we,Ge.y=pe,Ge.width=Ie,Ge.charIndex=Se,Ge.fontData=ce,ve===`
`&&(T=new h,S.push(T),we=-(ee+Ie+R*y)+x)}),me=Ye+k.advanceWidth*Pe+R*y});let N=0;S.forEach(de=>{let ue=!0;for(let ge=de.count;ge--;){const Ue=de.glyphAt(ge);ue&&!Ue.glyphObj.isWhitespace&&(de.width=Ue.x+Ue.width,de.width>B&&(B=de.width),ue=!1);let{lineHeight:fe,capHeight:ye,xHeight:Ee,baseline:Te}=Ue.fontData;fe>de.lineHeight&&(de.lineHeight=fe);const ce=Te-de.baseline;ce<0&&(de.baseline+=ce,de.cap+=ce,de.ex+=ce),de.cap=Math.max(de.cap,de.baseline+ye),de.ex=Math.max(de.ex,de.baseline+Ee)}de.baseline-=N,de.cap-=N,de.ex-=N,N+=de.lineHeight});let K=0,Z=0;if(L&&(typeof L=="number"?K=-L:typeof L=="string"&&(K=-B*(L==="left"?0:L==="center"?.5:L==="right"?1:c(L)))),I&&(typeof I=="number"?Z=-I:typeof I=="string"&&(Z=I==="top"?0:I==="top-baseline"?-S[0].baseline:I==="top-cap"?-S[0].cap:I==="top-ex"?-S[0].ex:I==="middle"?N/2:I==="bottom"?N:I==="bottom-baseline"?-S[S.length-1].baseline:c(I)*N)),!G){const de=e.getEmbeddingLevels(g,C);$=new Uint16Array(Ne),V=new Uint8Array(Ne),ne=new Float32Array(Ne*2),_e={},oe=[1/0,1/0,-1/0,-1/0],Fe=[],Y&&(xe=new Float32Array(g.length*4)),q&&(Me=new Uint8Array(Ne*3));let ue=0,ge=-1,Ue=-1,fe,ye;if(S.forEach((Ee,Te)=>{let{count:ce,width:Pe}=Ee;if(ce>0){let De=0;for(let Se=ce;Se--&&Ee.glyphAt(Se).glyphObj.isWhitespace;)De++;let Ye=0,k=0;if(E==="center")Ye=(B-Pe)/2;else if(E==="right")Ye=B-Pe;else if(E==="justify"&&Ee.isSoftWrapped){let Se=0;for(let ve=ce-De;ve--;)Ee.glyphAt(ve).glyphObj.isWhitespace&&Se++;k=(B-Pe)/Se}if(k||Ye){let Se=0;for(let ve=0;ve<ce;ve++){let Ie=Ee.glyphAt(ve);const He=Ie.glyphObj;Ie.x+=Ye+Se,k!==0&&He.isWhitespace&&ve<ce-De&&(Se+=k,Ie.width+=k)}}const he=e.getReorderSegments(g,de,Ee.glyphAt(0).charIndex,Ee.glyphAt(Ee.count-1).charIndex);for(let Se=0;Se<he.length;Se++){const[ve,Ie]=he[Se];let He=1/0,ze=-1/0;for(let Ge=0;Ge<ce;Ge++)if(Ee.glyphAt(Ge).charIndex>=ve){let rt=Ge,at=Ge;for(;at<ce;at++){let lt=Ee.glyphAt(at);if(lt.charIndex>Ie)break;at<ce-De&&(He=Math.min(He,lt.x),ze=Math.max(ze,lt.x+lt.width))}for(let lt=rt;lt<at;lt++){const bt=Ee.glyphAt(lt);bt.x=ze-(bt.x+bt.width-He)}break}}let ee;const pe=Se=>ee=Se;for(let Se=0;Se<ce;Se++){const ve=Ee.glyphAt(Se);ee=ve.glyphObj;const Ie=ee.index,He=de.levels[ve.charIndex]&1;if(He){const ze=e.getMirroredCharacter(g[ve.charIndex]);ze&&ve.fontData.fontObj.forEachGlyph(ze,0,0,pe)}if(Y){const{charIndex:ze,fontData:Ge}=ve,rt=ve.x+K,at=ve.x+ve.width+K;xe[ze*4]=He?at:rt,xe[ze*4+1]=He?rt:at,xe[ze*4+2]=Ee.baseline+Ge.caretBottom+Z,xe[ze*4+3]=Ee.baseline+Ge.caretTop+Z;const lt=ze-ge;lt>1&&u(xe,ge,lt),ge=ze}if(q){const{charIndex:ze}=ve;for(;ze>Ue;)Ue++,q.hasOwnProperty(Ue)&&(ye=q[Ue])}if(!ee.isWhitespace&&!ee.isEmpty){const ze=ue++,{fontSizeMult:Ge,src:rt,index:at}=ve.fontData,lt=_e[rt]||(_e[rt]={});lt[Ie]||(lt[Ie]={path:ee.path,pathBounds:[ee.xMin,ee.yMin,ee.xMax,ee.yMax]});const bt=ve.x+K,xt=ve.y+Ee.baseline+Z;ne[ze*2]=bt,ne[ze*2+1]=xt;const Nt=bt+ee.xMin*Ge,jt=xt+ee.yMin*Ge,an=bt+ee.xMax*Ge,At=xt+ee.yMax*Ge;Nt<oe[0]&&(oe[0]=Nt),jt<oe[1]&&(oe[1]=jt),an>oe[2]&&(oe[2]=an),At>oe[3]&&(oe[3]=At),ze%j===0&&(fe={start:ze,end:ze,rect:[1/0,1/0,-1/0,-1/0]},Fe.push(fe)),fe.end++;const pt=fe.rect;if(Nt<pt[0]&&(pt[0]=Nt),jt<pt[1]&&(pt[1]=jt),an>pt[2]&&(pt[2]=an),At>pt[3]&&(pt[3]=At),$[ze]=Ie,V[ze]=at,q){const Ht=ze*3;Me[Ht]=ye>>16&255,Me[Ht+1]=ye>>8&255,Me[Ht+2]=ye&255}}}}}),xe){const Ee=g.length-ge;Ee>1&&u(xe,ge,Ee)}}const ae=[];Ce.forEach(({index:de,src:ue,unitsPerEm:ge,ascender:Ue,descender:fe,lineHeight:ye,capHeight:Ee,xHeight:Te})=>{ae[de]={src:ue,unitsPerEm:ge,ascender:Ue,descender:fe,lineHeight:ye,capHeight:Ee,xHeight:Te}}),Q.typesetting=f()-se,D({glyphIds:$,glyphFontIndices:V,glyphPositions:ne,glyphData:_e,fontData:ae,caretPositions:xe,glyphColors:Me,chunkedBounds:Fe,fontSize:y,topBaseline:Z+S[0].baseline,blockBounds:[K,Z-N,K+B,Z],visibleBounds:oe,timings:Q})})}function l(g,_){o({...g,metricsOnly:!0},m=>{const[p,y,M,v]=m.blockBounds;_({width:M-p,height:v-y})})}function c(g){let _=g.match(/^([\d.]+)%$/),m=_?parseFloat(_[1]):NaN;return isNaN(m)?0:m/100}function u(g,_,m){const p=g[_*4],y=g[_*4+1],M=g[_*4+2],v=g[_*4+3],R=(y-p)/m;for(let w=0;w<m;w++){const b=(_+w)*4;g[b]=p+R*w,g[b+1]=p+R*(w+1),g[b+2]=M,g[b+3]=v}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=h.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new h;return _.data=this.data.splice(g*d.length),_}},h.flyweight=d.reduce((g,_,m,p)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+m]},set(y){this.data[this.index*d.length+m]=y}}),g),{data:null,index:0}),{typeset:o,measure:l}}const Kn=()=>(self.performance||Date).now(),$r=dc();let xl;function sg(a,e,t,r,n,i,s,o,l,c,u=!0){return u?lg(a,e,t,r,n,i,s,o,l,c).then(null,f=>(xl||(console.warn("WebGL SDF generation failed, falling back to JS",f),xl=!0),Ml(a,e,t,r,n,i,s,o,l,c))):Ml(a,e,t,r,n,i,s,o,l,c)}const Wr=[],og=5;let Fs=0;function mc(){const a=Kn();for(;Wr.length&&Kn()-a<og;)Wr.shift()();Fs=Wr.length?setTimeout(mc,0):0}const lg=(...a)=>new Promise((e,t)=>{Wr.push(()=>{const r=Kn();try{$r.webgl.generateIntoCanvas(...a),e({timing:Kn()-r})}catch(n){t(n)}}),Fs||(Fs=setTimeout(mc,0))}),cg=4,ug=2e3,Sl={};let fg=0;function Ml(a,e,t,r,n,i,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+fg++%cg;let f=Sl[u];return f||(f=Sl[u]={workerModule:Ii({name:u,workerId:u,dependencies:[dc,Kn],init(h,d){const g=h().javascript.generate;return function(..._){const m=d();return{textureData:g(..._),timing:d()-m}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,r,n,i).then(({textureData:h,timing:d})=>{const g=Kn(),_=new Uint8Array(h.length*4);for(let m=0;m<h.length;m++)_[m*4+c]=h[m];return $r.webglUtils.renderImageData(s,_,o,l,a,e,1<<3-c),d+=Kn()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{Vm(u)},ug)),{timing:d}})}function hg(a){a._warm||($r.webgl.isSupported(a),a._warm=!0)}const dg=$r.webglUtils.resizeWebGLCanvasWithoutClearing,xi={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048,useWorker:!0},pg=new je;function vi(){return(self.performance||Date).now()}const yl=Object.create(null);function mg(a,e){a=_g({},a);const t=vi(),{defaultFontURL:r}=xi,n=[];if(r&&n.push({label:"default",src:El(r)}),a.font&&n.push({label:"user",src:El(a.font)}),a.font=n,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||xi.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||xi.unicodeFontsURL,a.colorRanges!=null){let d={};for(let g in a.colorRanges)if(a.colorRanges.hasOwnProperty(g)){let _=a.colorRanges[g];typeof _!="number"&&(_=pg.set(_).getHex()),d[g]=_}a.colorRanges=d}Object.freeze(a);const{textureWidth:i,sdfExponent:s}=xi,{sdfGlyphSize:o}=a,l=i/o*4;let c=yl[o];if(!c){const d=document.createElement("canvas");d.width=i,d.height=o*256/l,c=yl[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:d,sdfTexture:new Tt(d,void 0,void 0,void 0,qt,qt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,gg(c)}const{sdfTexture:u,sdfCanvas:f}=c;vc(a).then(d=>{const{glyphIds:g,glyphFontIndices:_,fontData:m,glyphPositions:p,fontSize:y,timings:M}=d,v=[],R=new Float32Array(g.length*4);let w=0,b=0;const C=vi(),E=m.map(I=>{let G=c.glyphsByFont.get(I.src);return G||c.glyphsByFont.set(I.src,G=new Map),G});g.forEach((I,G)=>{const z=_[G],{src:J,unitsPerEm:Y}=m[z];let j=E[z].get(I);if(!j){const{path:F,pathBounds:O}=d.glyphData[J][I],$=Math.max(O[2]-O[0],O[3]-O[1])/o*(xi.sdfMargin*o+.5),V=c.glyphCount++,ne=[O[0]-$,O[1]-$,O[2]+$,O[3]+$];E[z].set(I,j={path:F,atlasIndex:V,sdfViewBox:ne}),v.push(j)}const{sdfViewBox:q}=j,D=p[b++],H=p[b++],Q=y/Y;R[w++]=D+q[0]*Q,R[w++]=H+q[1]*Q,R[w++]=D+q[2]*Q,R[w++]=H+q[3]*Q,g[G]=j.atlasIndex}),M.quads=(M.quads||0)+(vi()-C);const x=vi();M.sdf={};const P=f.height,U=Math.ceil(c.glyphCount/l),L=Math.pow(2,Math.ceil(Math.log2(U*o)));L>P&&(console.info(`Increasing SDF texture size ${P}->${L}`),dg(f,i,L),u.dispose()),Promise.all(v.map(I=>gc(I,c,a.gpuAccelerateSDF).then(({timing:G})=>{M.sdf[I.atlasIndex]=G}))).then(()=>{v.length&&!c.contextLost&&(_c(c),u.needsUpdate=!0),M.sdfTotal=vi()-x,M.total=vi()-t,e(Object.freeze({parameters:a,sdfTexture:u,sdfGlyphSize:o,sdfExponent:s,glyphBounds:R,glyphAtlasIndices:g,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{c.contextLost||hg(f)})}function gc({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},s){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=xi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(o/r)*r,h=Math.floor(u/(o/r))*r,d=e%4;return sg(r,r,a,t,c,l,n,f,h,d,s)}function gg(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(gc(i,a,!0))})}),Promise.all(r).then(()=>{_c(a),a.sdfTexture.needsUpdate=!0})})}function _g(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Fr;function El(a){return Fr||(Fr=typeof document>"u"?{}:document.createElement("a")),Fr.href=a,Fr.href}function _c(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==r*n*4)&&(s=new Uint8Array(r*n*4),t.image={width:r,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,s)}}const vg=Ii({name:"Typesetter",dependencies:[ag,rg,Wm],init(a,e,t){return a(e,t())}}),vc=Ii({name:"Typesetter",dependencies:[vg],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});vc.onMainThread;const Tl={};function xg(a){let e=Tl[a];return e||(e=Tl[a]=new $n(1,1,a,a).translate(.5,.5,0)),e}const Sg="aTroikaGlyphBounds",bl="aTroikaGlyphIndex",Mg="aTroikaGlyphColor";class yg extends Pm{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Zr,this.boundingBox=new Qn}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=xg(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){this.updateAttributeData(Sg,e,4),this.updateAttributeData(bl,t,1),this.updateAttributeData(Mg,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:s,max:o,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),d=e[0]/h,g=e[2]/h,_=i((d+u)/f)!==i((g+u)/f)?-h:s(l(d)*h,l(g)*h),m=i((d-u)/f)!==i((g-u)/f)?h:o(l(d)*h,l(g)*h),p=i((d+n)/f)!==i((g+n)/f)?h*2:o(h-c(d)*h,h-c(g)*h);r.min.set(_,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(bl).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Am(t,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const Eg=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Tg=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,bg=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Ag=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function wg(a){const e=Is(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ke},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new st(0,0,0,0)},uTroikaClipRect:{value:new st(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ke},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Xe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Eg,vertexTransform:Tg,fragmentDefs:bg,fragmentColorTransform:Ag,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(pc,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Ks=new Jr({color:16777215,side:ln,transparent:!0}),Al=8421504,wl=new ot,Nr=new te,Ha=new te,Ki=[],Cg=new te,Wa="+x+y";function Cl(a){return Array.isArray(a)?a[0]:a}let xc=()=>{const a=new It(new $n(1,1),Ks);return xc=()=>a,a},Sc=()=>{const a=new It(new $n(1,1,32,1),Ks);return Sc=()=>a,a};const Rg={type:"syncstart"},Ug={type:"synccomplete"},Mc=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Pg=Mc.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Zs extends It{constructor(){const e=new yg;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Al,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Wa,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Rg),mg({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(Ug),e&&e()})))}onBeforeRender(e,t,r,n,i,s){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return wg(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Ks.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Cl(this.material).getDepthMaterial()}get customDistanceMaterial(){return Cl(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,d,g,_=0,m=0;if(t){let{outlineWidth:y,outlineOffsetX:M,outlineOffsetY:v,outlineBlur:R,outlineOpacity:w}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(R)||0),h=w,_=this._parsePercent(M)||0,m=this._parsePercent(v)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??Al),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;r.uTroikaEdgeOffset.value=c,r.uTroikaPositionOffset.value.set(_,m),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=f,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const y=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new je;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let s=this.orientation||Wa;if(s!==e._orientation){let o=r.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==Wa&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;Nr.set(0,0,0)[u]=c==="-"?1:-1,Ha.set(0,0,0)[h]=f==="-"?-1:1,wl.lookAt(Cg,Nr.cross(Ha),Ha),o.setFromMatrix4(wl)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ke){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new Ke){return Nr.copy(e),this.localPositionToTextCoords(this.worldToLocal(Nr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,s=n?Sc():xc(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let f=i[0]+c.getX(u)*(i[2]-i[0]);const h=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Ki.length=0,s.raycast(e,Ki);for(let u=0;u<Ki.length;u++)Ki[u].object=this,t.push(Ki[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Pg.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}Mc.forEach(a=>{const e="_private_"+a;Object.defineProperty(Zs.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new Qn;new je;const qr=a=>a>Ti?qr(a-Ti):a<0?qr(a+Ti):a;class Dg{constructor(e){this.scene=e,this.bottom=1.5,this.top=2.25,this.atTop=.35,this.stillness=.1,this.smallScale=.5,this.textContainer=new ct,this.title=this.createTitle(),this.subTitle=this.createSubTitle(),this.textContainer.position.setY(this.bottom),this.scene.add(this.textContainer)}animate(e){if(e=qr(e),e>this.atTop)if(e<Ti-this.atTop)this.textContainer.position.y=this.top;else if(e>Ti-this.stillness)this.textContainer.position.y=this.bottom;else{let t=(Ti-this.stillness-e)/(this.atTop-this.stillness);this.updateScaleAndPosition(t)}else if(e<this.stillness)this.textContainer.position.y=this.bottom;else{let t=(e-this.stillness)/(this.atTop-this.stillness);this.updateScaleAndPosition(t)}}updateScaleAndPosition(e){let t=(1-e)*this.smallScale+this.smallScale;this.textContainer.scale.set(t,t,t),this.textContainer.position.y=e*(this.top-this.bottom)+this.bottom}createTitle(){const e=this.createText("Han Kortekaas",.2);return this.textContainer.add(e),e.sync(),e}createSubTitle(){const e=this.createText("Software Developer",.08);return e.position.setY(-.2),this.textContainer.add(e),e.sync(),e}createText(e,t){const r=new Zs;return r.text=e,r.fontSize=t,r.color=fc,r.anchorX="center",r}}class Lg{constructor(e,t,r){this.scene=e,this.rotationOffset=r,this.bottom=1.3,this.top=2.7,this.atTop=Math.PI/10,this.stillness=.2,this.pageLoad=.5,this.smallScale=.7,this.textContainer=new ct,this.scene.add(this.textContainer),this.title=this.createTitle(t),this.textContainer.add(this.title),this.textContainer.rotation.x=r}animate(e){if(e=qr(e),e+this.rotationOffset<0)this.textContainer.rotation.x=e+this.rotationOffset;else if(e+this.rotationOffset<this.stillness)this.textContainer.rotation.x=0;else if(e+this.rotationOffset-this.stillness<this.pageLoad){this.textContainer.rotation.x=0;let t=(e+this.rotationOffset-this.stillness)/this.pageLoad;this.updateScaleAndPosition(t)}else this.textContainer.rotation.x=e+this.rotationOffset-this.stillness-this.pageLoad}updateScaleAndPosition(e){let t=(1-e)*(1-this.smallScale)+this.smallScale;this.textContainer.scale.set(t,t,t),this.title.position.setY(e*(this.top-this.bottom)+this.bottom)}createTitle(e){const t=new Zs;return t.text=e,t.fontSize=.17,t.color=fc,t.anchorX="center",t.position.setY(1.3),t.sync(),t}}class Ig{constructor(e,t,r){this.scene=e,this.titleBottom=1.5,this.titleTop=2,this.titleTarget=0,this.titleAtTop=Math.PI/10,this.titleStillness=.1,this.textContainer=new ct,this.titleColor=1148979,this.title=new Lg(this.scene,t,r),this.textContainer.position.setY(this.titleBottom),this.scene.add(this.textContainer)}animate(e){this.title.animate(e)}}class Fg{constructor(e){this.canvas=e,this.renderer=new Tm({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.createCamera(),this.createScene(),this.createMainOrbit(),this.createLights(),this.createTexts(),this.target=0,this.direction=1,this.rotation=0}render(){this.renderer.setAnimationLoop(this.animate.bind(this))}onWindowResize(){const e=window.devicePixelRatio,t=Math.floor(this.canvas.clientWidth*e),r=Math.floor(this.canvas.clientHeight*e);(canvas.width!==t||canvas.height!==r)&&(this.renderer.setSize(t,r,!1),this.camera.aspect=this.canvas.clientWidth/this.canvas.clientHeight,this.camera.updateProjectionMatrix())}onMouseWheel(e){const t=Math.abs(e.deltaY)<100;let r=e.deltaY>0?1:-1;r=t?r*-.15:r,this.target+=r*Lm,this.direction=r}animate(){this.direction>0&&this.target>this.rotation?this.rotation+=(this.target-this.rotation)*.01:this.direction<0&&this.target<this.rotation&&(this.rotation-=(this.rotation-this.target)*.01),this.mainOrbit.animate(this.rotation),this.titleContainer.animate(this.rotation),this.aboutContainer.animate(this.rotation),this.renderer.render(this.scene,this.camera)}createCamera(){this.camera=new Yt(45,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.set(0,1.3,1.8),this.camera.lookAt(0,1.5,0)}createScene(){this.scene=new bm,this.scene.background=new je(Dm)}createMainOrbit(){this.mainOrbit=new Nm(this.scene)}createLights(){this.lights=new Om(this.scene)}createTexts(){this.titleContainer=new Dg(this.scene),this.aboutContainer=new Ig(this.scene,"About",-1)}}const Ng=document.querySelector("#canvas"),Js=new Fg(Ng);Og();Js.render();function Og(){window.addEventListener("resize",Rl),window.addEventListener("wheel",Bg),Rl()}function Rl(){Js.onWindowResize()}function Bg(a){Js.onMouseWheel(a)}
