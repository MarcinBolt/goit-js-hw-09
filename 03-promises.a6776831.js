function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in l)return l[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return l[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8");const r=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),s=document.querySelector('input[name="amount"]'),a=document.querySelector(".form"),d=document.querySelectorAll("label"),f=document.querySelectorAll("input"),y=document.querySelector("button");function c(e,t){const l=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{l?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}a.style.display="flex",a.style.gap="15px",y.style.display="flex",y.style.justifyContent="flex-end",y.style.fontSize="18px",y.style.lineHeight="1.5",y.style.height="33px",y.style.marginTop="27px",d.forEach((e=>{e.style.display="flex",e.style.flexDirection="column",e.style.fontSize="18px",e.style.lineHeight="1.5"})),f.forEach((e=>{e.style.display="flex",e.style.flexDirection="column",e.style.fontSize="18px",e.style.lineHeight="1.5"})),a.addEventListener("submit",(function(t){t.preventDefault();let l=Number(r.value),n=Number(u.value),o=Number(s.value),a=l;for(let t=1;t<=o;t++)c(t,a).then((({position:t,delay:l})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${l}ms`)})).catch((({position:t,delay:l})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${l}ms`)})),a+=n}));
//# sourceMappingURL=03-promises.a6776831.js.map
