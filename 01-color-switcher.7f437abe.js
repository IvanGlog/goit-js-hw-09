!function(){var t={bodyColor:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.stopBtn.setAttribute("disabled",!0);var e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled"),t.bodyColor.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.stopBtn.setAttribute("disabled",!0),t.startBtn.removeAttribute("disabled"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.7f437abe.js.map
