/*! For license information please see 219c5c8cd9cf39e289ad.js.LICENSE.txt */
"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2194],{90589:(t,n,e)=>{function r(t){return"l"===t?"m":"s"}async function o(t){await(function(t){return"function"==typeof t.componentOnReady}(t)?t.componentOnReady():new Promise((t=>requestAnimationFrame((()=>t())))))}e.d(n,{c:()=>o,g:()=>r})},72006:(t,n,e)=>{e.d(n,{F:()=>I,a:()=>T,b:()=>q,c:()=>O,d:()=>G,e:()=>F,f:()=>j,g:()=>B,h:()=>R,j:()=>E,k:()=>b,l:()=>N,m:()=>m,n:()=>C,o:()=>U,q:()=>D,r:()=>z,t:()=>X,u:()=>Y,w:()=>_,y:()=>V});var r=e(60005),o=(e(96367),["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"]),i=o.join(","),a="undefined"==typeof Element,u=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!a&&Element.prototype.getRootNode?function(t){var n;return null==t||null===(n=t.getRootNode)||void 0===n?void 0:n.call(t)}:function(t){return null==t?void 0:t.ownerDocument},c=function t(n,e){var r;void 0===e&&(e=!0);var o=null==n||null===(r=n.getAttribute)||void 0===r?void 0:r.call(n,"inert");return""===o||"true"===o||e&&n&&t(n.parentNode)},s=function(t,n,e){if(c(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(i));return n&&u.call(t,i)&&r.unshift(t),r.filter(e)},d=function t(n,e,r){for(var o=[],a=Array.from(n);a.length;){var l=a.shift();if(!c(l,!1))if("SLOT"===l.tagName){var s=l.assignedElements(),d=t(s.length?s:l.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:l,candidates:d})}else{u.call(l,i)&&r.filter(l)&&(e||!n.includes(l))&&o.push(l);var f=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),m=!c(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(f&&m){var p=t(!0===f?l.children:f.children,!0,r);r.flatten?o.push.apply(o,p):o.push({scopeParent:l,candidates:p})}else a.unshift.apply(a,l.children)}}return o},f=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},m=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var n,e=null==t||null===(n=t.getAttribute)||void 0===n?void 0:n.call(t,"contenteditable");return""===e||"true"===e}(t))&&!f(t)?0:t.tabIndex},p=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},h=function(t){return"INPUT"===t.tagName},v=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return 0===e&&0===r},y=function(t,n){return!(n.disabled||c(n)||function(t){return h(t)&&"hidden"===t.type}(n)||function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=u.call(t,"details>summary:first-of-type")?t.parentElement:t;if(u.call(o,"details:not([open]) *"))return!0;if(e&&"full"!==e&&"legacy-full"!==e){if("non-zero-area"===e)return v(t)}else{if("function"==typeof r){for(var i=t;t;){var a=t.parentElement,c=l(t);if(a&&!a.shadowRoot&&!0===r(a))return v(t);t=t.assignedSlot?t.assignedSlot:a||c===t.ownerDocument?a:c.host}t=i}if(function(t){var n,e,r,o,i=t&&l(t),a=null===(n=i)||void 0===n?void 0:n.host,u=!1;if(i&&i!==t)for(u=!!(null!==(e=a)&&void 0!==e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(a)||null!=t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!u&&a;){var c,s,d;u=!(null===(s=a=null===(c=i=l(a))||void 0===c?void 0:c.host)||void 0===s||null===(d=s.ownerDocument)||void 0===d||!d.contains(a))}return u}(t))return!t.getClientRects().length;if("legacy-full"!==e)return!0}return!1}(n,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(n)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if("FIELDSET"===n.tagName&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if("LEGEND"===r.tagName)return!!u.call(n,"fieldset[disabled] *")||!r.contains(t)}return!0}n=n.parentElement}return!1}(n))},g=function(t,n){return!(function(t){return function(t){return h(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var n,e=t.form||l(t),r=function(t){return e.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)n=r(window.CSS.escape(t.name));else try{n=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var o=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]}(n,t.form);return!o||o===t}(t)}(n)||m(n)<0||!y(t,n))},w=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},S=function t(n){var e=[],r=[];return n.forEach((function(n,o){var i=!!n.scopeParent,a=i?n.scopeParent:n,u=function(t,n){var e=m(t);return e<0&&n&&!f(t)?0:e}(a,i),l=i?t(n.candidates):a;0===u?i?e.push.apply(e,l):e.push(a):r.push({documentOrder:o,tabIndex:u,item:n,isScope:i,content:l})})),r.sort(p).reduce((function(t,n){return n.isScope?t.push.apply(t,n.content):t.push(n.content),t}),[]).concat(e)},E=function(t,n){var e;return e=(n=n||{}).getShadowRoot?d([t],n.includeContainer,{filter:g.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:w}):s(t,n.includeContainer,g.bind(null,n)),S(e)},b=function(t,n){return(n=n||{}).getShadowRoot?d([t],n.includeContainer,{filter:y.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):s(t,n.includeContainer,y.bind(null,n))},N=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==u.call(t,i)&&g(n,t)},A=o.concat("iframe").join(","),R=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==u.call(t,A)&&y(n,t)};const C={getShadowRoot:!0};function I(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,r.g)()}`:""}function T(t){const n=O(t,"[dir]");return n?n.getAttribute("dir"):"ltr"}function L(t){return t.getRootNode()}function x(t){return t.host||null}function D(t,{selector:n,id:e}){return function t(r){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);const o=L(r),i=e?"getElementById"in o?o.getElementById(e):null:n?o.querySelector(n):null,a=x(o);return i||(a?t(a):null)}(t)}function O(t,n){return function t(e){return e?e.closest(n)||t(x(L(e))):null}(t)}function k(t,n){return P(t,n)}function P(t,n){if(!t)return;const e=n(t);if(void 0!==e)return e;const{parentNode:r}=t;return P(r instanceof ShadowRoot?r.host:r,n)}function q(t,n){return!!k(n,(n=>n===t||void 0))}async function F(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function j(t){(function(t){if(t)return E(t,C)[0]??t})(t)?.focus()}const $=":not([slot])";function B(t,n,e){n&&!Array.isArray(n)&&"string"!=typeof n&&(e=n,n=null);const r=n?Array.isArray(n)?n.map((t=>`[slot="${t}"]`)).join(","):`[slot="${n}"]`:$;return e?.all?function(t,n,e){let r=n===$?M(t,$):Array.from(t.querySelectorAll(n));r=e&&!1===e.direct?r:r.filter((n=>n.parentElement===t)),r=e?.matches?r.filter((t=>t?.matches(e.matches))):r;const o=e?.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,n)=>[...t,...n]),[]).filter((t=>!!t)):r}(t,r,e):function(t,n,e){let r=n===$?M(t,$)[0]||null:t.querySelector(n);r=e&&!1===e.direct||r?.parentElement===t?r:null,r=e?.matches?r?.matches(e.matches)?r:null:r;const o=e?.selector;return o?r?.querySelector(o):r}(t,r,e)}function M(t,n){return t?Array.from(t.children||[]).filter((t=>t?.matches(n))):[]}function U(t,n,e){return"string"==typeof n&&""!==n?n:""===n?t[e]:void 0}function X(t){return Boolean(t).toString()}function z(t){return G(t)||function(t){return!!function(t){return function(t){return t.currentTarget.assignedNodes({flatten:!0})}(t).filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join("").trim()}(t)}(t)}function G(t){return!!function(t){return t.currentTarget.assignedElements({flatten:!0})}(t).length}function V(t){return!(!t.isPrimary||0!==t.button)}function Y(t,n){if(t.parentNode!==n.parentNode)return!1;const e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}async function _(t,n,e,r){return async function(t,n,e,r,o){const i=window.getComputedStyle(t),a="transition"===e?i.transitionDuration:i.animationDuration,u="transition"===e?i.transitionProperty:i.animationName,l=a.split(","),c=l[u.split(",").indexOf(n)]??l[0];function s(){r?.(),o?.()}if("0s"===c)return void s();const d="transition"===e?"transitionstart":"animationstart",f="transition"===e?"transitionend":"animationend",m="transition"===e?"transitioncancel":"animationcancel";return new Promise((e=>{const i=window.setTimeout((()=>{t.removeEventListener(d,a),t.removeEventListener(f,u),t.removeEventListener(m,u),s(),e()}),1e3*parseFloat(c));function a(e){e.target===t&&H(e)===n&&(window.clearTimeout(i),t.removeEventListener(d,a),r?.())}function u(r){r.target===t&&H(r)===n&&(t.removeEventListener(f,u),t.removeEventListener(m,u),o?.(),e())}t.addEventListener(d,a),t.addEventListener(f,u),t.addEventListener(m,u)}))}(t,n,"transition",e,r)}function H(t){return function(t){return"propertyName"in t}(t)?t.propertyName:t.animationName}},60005:(t,n,e)=>{e.d(n,{g:()=>r});const r=()=>[2,1,1,1,3].map((t=>{let n="";for(let e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}}]);