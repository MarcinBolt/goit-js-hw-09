!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e=document.querySelector("body"),n=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");o.disabled=!0;var a=null;n.addEventListener("click",(function(){e.style.backgroundColor="".concat(t()),n.disabled=!0,o.disabled=!1,a=setInterval((function(){e.style.backgroundColor="".concat(t())}),1e3)})),o.addEventListener("click",(function(){clearInterval(a),e.style.backgroundColor="",n.disabled=!1,o.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.7ceda137.js.map