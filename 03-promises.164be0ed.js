!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector('button[type="submit"]'),c=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]');document.querySelector('input[name="amount"]');document.querySelector("body").style.backgroundColor="grey",u.addEventListener("click",(function(){a.numberPosition()}));var a={position:1,numberPosition:function(){setTimeout((function(){d(a.position,l.value)}),c.value)}};function d(e,n){return new Promise((function(o,t){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}))}d().then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}();
//# sourceMappingURL=03-promises.164be0ed.js.map
