!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var i=l("6JpON"),r=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]'),a=document.querySelector(".form"),s=document.querySelectorAll("label"),f=document.querySelectorAll("input"),d=document.querySelector("button");function y(e,t){var n=Math.random()>.3;return new Promise((function(o,l){setTimeout((function(){n?o({position:e,delay:t}):l({position:e,delay:t})}),t)}))}a.style.display="flex",a.style.gap="15px",d.style.display="flex",d.style.justifyContent="flex-end",d.style.fontSize="18px",d.style.lineHeight="1.5",d.style.height="33px",d.style.marginTop="27px",s.forEach((function(e){e.style.display="flex",e.style.flexDirection="column",e.style.fontSize="18px",e.style.lineHeight="1.5"})),f.forEach((function(e){e.style.display="flex",e.style.flexDirection="column",e.style.fontSize="18px",e.style.lineHeight="1.5"})),a.addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(r.value),o=Number(u.value),l=Number(c.value),a=n,s=1;s<=l;s++)y(s,a).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),a+=o}))}();
//# sourceMappingURL=03-promises.7a89f19d.js.map
