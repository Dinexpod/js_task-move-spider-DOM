parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=document.querySelector(".wall"),e=t.parentElement,i=t.querySelector(".spider");document.addEventListener("click",function(l){var f=(e.offsetHeight-t.offsetHeight)/2,c=(e.offsetWidth-t.offsetWidth)/2,n=i.offsetWidth/2;if(l.clientX>=c&&l.clientX<c+t.offsetWidth&&l.clientY>=f&&l.clientY<f+t.offsetHeight){var s=l.clientX-t.clientLeft-c-n,o=l.clientY-t.clientTop-f-n;s<0?i.style.left="0":t.clientWidth<i.offsetWidth+s?i.style.left=t.clientWidth-i.clientWidth+"px":i.style.left=s+"px",o<0?i.style.top="0":t.clientHeight<i.offsetHeight+o?i.style.top=t.clientHeight-i.clientHeight+"px":i.style.top=o+"px"}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c50442b7.js.map