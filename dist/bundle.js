!function(t){function e(e){for(var o,a,c=e[0],l=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(u&&u(e);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={0:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;i.push([165,1]),n()}({165:function(t,e,n){n(255),t.exports=n(256)},170:function(t,e,n){(e=t.exports=n(38)(!1)).i(n(171),""),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Noto+Sans+TC&subset=chinese-traditional);",""]),e.push([t.i,"*{font-family:'Roboto', sans-serif, 'Noto Sans TC'}.header{background-color:#345;padding:20px;color:#fff}.button2{position:relative;outline:none;width:100px;height:36px;background-color:#111;color:#fff;border-radius:6px;cursor:pointer}.button2:active{top:1px}.button3{position:relative;outline:none;width:100px;height:36px;background-color:#111;color:#fff;border-radius:6px;cursor:pointer;color:#000;background-color:#aa2}.button3:active{top:1px}#canvas{display:block;margin:auto;text-align:center;background-color:#ddd}.svg-line{stroke:#000;stroke-width:2px}.svg-text{fill:#000;font-size:24px;box-shadow:2px 2px 0px #ddd}#svg-circle1{fill:#345;stroke:#900;stroke-width:2px}.withShadow{filter:drop-shadow(2px 2px 6px #111)}.withShadow.hover{filter:drop-shadow(2px 2px 6px #900)}.title{fill:#33d;font-size:36px}.grid{fill:none;stroke:#ddd;stroke-width:.5px}#paper{width:842px;height:595px}.stop-passed{fill:#fff;stroke:#aaa;stroke-width:1px}.stop-normal{fill:#fff;stroke:#000;stroke-width:3px}.stop-now{fill:#000;stroke:#000;stroke-width:2.5px}.stopName-passed{font-weight:600;writing-mode:tb;opacity:.35}.stopName-normal{font-weight:600;writing-mode:tb}.stopName-now{font-weight:900;writing-mode:tb;fill:#f00}.routeNumber{font-size:62px;font-style:italic;font-weight:200;text-align:center;vertical-align:top}.routeNumber,.stop,.stop-eng{fill:#fff}.bigArrow{fill:#000}\n",""])},171:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,'/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n    outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n\n[hidden] {\n    display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\n\nfigure {\n    margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\n\nform {\n    margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\n\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\n\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}',""])},255:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(14),a=n.n(i);n(37);function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=function(t){for(var e=t.w,n=void 0===e?"400":e,o=t.h,i=void 0===o?"400":o,a=n/20,l=i/20,f=[],p=0;p<a*l;p++)f=[p].concat(c(f));return r.a.createElement("g",null,r.a.createElement(u,{x:10,y:i,text:"".concat(n," X ").concat(i,"  1 grid = 20px"),className:"grid-text"}),f.map(function(t){return r.a.createElement(s,{width:20,height:20,className:"grid",x:t%a*20-.5,y:20*~~(t/a)})}))},s=function(t){var e=t.x,n=void 0===e?"200":e,o=t.y,i=void 0===o?"200":o,a=t.width,c=void 0===a?"100":a,l=t.height,s=void 0===l?"100":l,u=t.className,f=void 0===u?"svg-rect":u;return r.a.createElement("rect",{x:n,y:i,width:c,height:s,className:f})},u=function(t){var e=t.x,n=void 0===e?"200":e,o=t.y,i=void 0===o?"300":o,a=t.text,c=void 0===a?"A text":a,l=t.className,s=void 0===l?"svg-text":l;return r.a.createElement("text",{x:n,y:i,className:s},c)},f=n(61),p=n.n(f);function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var m=function(t){var e=t.x,n=void 0===e?"200":e,o=t.y,i=void 0===o?"300":o,a=t.text,c=void 0===a?"A text":a,l=t.className,s=void 0===l?"svg-text":l;return r.a.createElement("text",d({x:n,y:i,className:s},t),c)},b=function(t){var e=t.x,n=t.y,o=t.rotate,i=void 0===o?0:o;return r.a.createElement("g",{transform:"translate(".concat(e,", ").concat(n,") rotate(").concat(i,")")},r.a.createElement("path",{d:"M0 0 l16 6 l-16 6 z"}))},y=function(t){var e=t.x,n=void 0===e?100:e,o=t.y,i=void 0===o?100:o,a=t.width,c=void 0===a?40:a,l=t.height,s=void 0===l?20:l,u=t.rotate,f=void 0===u?0:u;return r.a.createElement("g",{transform:"translate(".concat(n,", ").concat(i,") rotate(").concat(f,")")},r.a.createElement("image",{width:c,height:s,xlinkHref:p.a,class:"bigArrow"}))},h=function(t){var e=t.x,n=t.y,o=t.h,i=t.v,a=t.r;(a>Math.abs(o/2)||a>Math.abs(i/2))&&(o>i&&(a=Math.abs(o/2)),a=Math.abs(i/2));var c=o>=0?a:-a,l=i>=0?a:-a;return r.a.createElement("path",d({d:"\n        M".concat(e," ").concat(n," \n        h").concat(o>=0?o-a:o+a," \n        q").concat(c," 0, ").concat(c," ").concat(l," \n        v").concat(i>=0?i-2*a:i+2*a," \n        q0 ").concat(l,", ").concat(-c," ").concat(l," \n        h").concat(o>=0?-(o-a):-(o+a)," \n      "),fill:"none",stroke:"#000",strokeWidth:2.5},t))};function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t){return(v="function"==typeof Symbol&&"symbol"===g(Symbol.iterator)?function(t){return g(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":g(t)})(t)}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=w(this,S(e).call(this,t))).state={},n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(){var t=this.props,e=t.x,n=void 0===e?0:e,o=t.y,i=void 0===o?0:o,a=t.stopType,c=void 0===a?"normal":a,l=t.stopName,s=void 0===l?"車站":l,u=t.circleR,f=void 0===u?6:u;return r.a.createElement("g",{transform:"translate(".concat(n,", ").concat(i,")")},r.a.createElement("circle",{cx:f,cy:f,r:f,className:"normal"===c?"stop-normal":"passed"===c?"stop-passed":"stop-now"}),r.a.createElement("text",{x:f-1,y:2*f+8,className:"normal"===c?"stopName-normal":"passed"===c?"stopName-passed":"stopName-now"},s))}}])&&x(n.prototype,o),i&&x(n,i),e}();function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t){return(j="function"==typeof Symbol&&"symbol"===k(Symbol.iterator)?function(t){return k(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":k(t)})(t)}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function P(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=P(this,C(e).call(this,t))).state={},n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(){var t=this.props.routeData,e=void 0===t?[]:t;return r.a.createElement("g",{id:"route1"},r.a.createElement(A,{routeData:e}))}}])&&_(n.prototype,o),i&&_(n,i),e}();function z(t){var e=t.direction,n=void 0===e?"right":e,o=t.route,i=void 0===o?[]:o,a=t.x,c=void 0===a?100:a,l=t.y,s=void 0===l?200:l,u=t.stops,f=void 0===u?16:u,p=t.lastStops,d=void 0===p?0:p,m=614/(f-1),y="right"===n;return d=0===d?f:d,r.a.createElement("g",null,r.a.createElement(b,{x:y?c+18:c-18,y:s,rotate:y?"0":"180, 6, 6"}),r.a.createElement("path",{d:"\n          M ".concat(c," ").concat(s+6," \n          l ").concat(y?(i.length-1)*m:-(i.length-1)*m," 0"),stroke:"#000",strokeWidth:3}),i.map(function(t){return console.log(1*t.stopType),r.a.createElement(O,{x:y?c+t.id%d*m:c-t.id%d*m,y:s,stopName:t.stopName,stopType:1*t.stopType==1?"normal":1*t.stopType==-1?"passed":"now"})}))}function A(t){var e=t.routeData,n=e.length,o=Math.round(n<10?1:Math.ceil(e.length/40)+1),i=Math.ceil(n/o),a=168,c=108,l=614,s=468,u={"1Line":22,"2Line":18,"3Line":15,"4Line":14};switch(o){case 1:return r.a.createElement("g",{style:{fontSize:u["1Line"]}},r.a.createElement(z,{direction:"right",route:e,x:a,y:c+s/(o+1)-100,stops:i}));case 2:return r.a.createElement("g",{style:{fontSize:u["2Line"]},transform:"translate(0, 40)"},r.a.createElement(z,{direction:"right",route:e.filter(function(t){return t.id<i}),x:a,y:c,stops:i}),r.a.createElement(h,{x:a+l+12,y:c+6,h:20,v:s/(1*o),r:10,strokeWidth:3}),r.a.createElement(z,{direction:"left",route:e.filter(function(t){return t.id>=i}),x:a+l,y:c+s/(1*o),stops:n-i,lastStops:i}));case 3:return r.a.createElement("g",{style:{fontSize:u["3Line"]}},r.a.createElement(z,{direction:"right",route:e.filter(function(t){return t.id<i}),x:a,y:c,stops:i}),r.a.createElement(h,{x:a+l+12,y:c+s/o*0+6,h:20,v:s/(1*o),r:10}),r.a.createElement(z,{direction:"left",route:e.filter(function(t){return t.id>=i&&t.id<2*i}),x:a+l,y:c+s/(1*o),stops:i}),r.a.createElement(h,{x:a,y:c+s/o*1+6,h:-20,v:s/(1*o),r:10}),r.a.createElement(z,{direction:"right",route:e.filter(function(t){return t.id>=2*i}),x:a,y:c+s/o*2,stops:n-2*i,lastStops:i}));case 4:return r.a.createElement("g",{style:{fontSize:u["4Line"]}},r.a.createElement(z,{direction:"right",route:e.filter(function(t){return t.id<i}),x:a,y:c,stops:i}),r.a.createElement(h,{x:a+l+12,y:c+s/o*0+6,h:20,v:s/(1*o),r:10}),r.a.createElement(z,{direction:"left",route:e.filter(function(t){return t.id>=i&&t.id<2*i}),x:a+l,y:c+s/(1*o),stops:i}),r.a.createElement(h,{x:a,y:c+s/o*1+6,h:-20,v:s/(1*o),r:10}),r.a.createElement(z,{direction:"right",route:e.filter(function(t){return t.id>=2*i&&t.id<3*i}),x:a,y:c+s/o*2,stops:i}),r.a.createElement(h,{x:a+l+12,y:c+s/o*2+6,h:20,v:s/(1*o),r:10}),r.a.createElement(z,{direction:"left",route:e.filter(function(t){return t.id>=3*i}),x:a+l,y:c+s/o*3,stops:n-3*i,lastStops:i}));default:return r.a.createElement("g",null)}}var I=n(62),R=n.n(I),M={stop:24,stopEng:14,routeNumber:60},q=16,F={width:40,spacting:20},D={x:340},L=function(t,e){return t-(1.175-1)*e+e},K=function(t){var e=t.number,n=t.fromTo,o=t.fromToEng;return r.a.createElement("g",null,r.a.createElement("image",{xlinkHref:R.a,width:"840"}),r.a.createElement(m,{x:20,y:L(q,M.routeNumber),text:e,className:"routeNumber",style:{fontSize:M.routeNumber}}),r.a.createElement("g",{className:"fromTo",transform:0===o[0].length?"translate(0, 8)":"translate(0, 0)"},r.a.createElement("g",null,r.a.createElement(m,{x:D.x,y:L(q,M.stop),text:n[0],className:"stop",style:{fontSize:M.stop}}),r.a.createElement(m,{x:D.x,y:L(q,M.stopEng)+30,text:o[0],className:"stop-eng",style:{fontSize:M.stopEng}})),r.a.createElement("g",null,r.a.createElement(y,{x:D.x+n[0].length*M.stop+F.spacting,y:q+2,width:40,rotate:0,fill:"#000"})),r.a.createElement("g",null,r.a.createElement(m,{x:D.x+n[0].length*M.stop+F.width+2*F.spacting,y:L(q,M.stop),text:n[1],className:"stop",style:{fontSize:M.stop}}),r.a.createElement(m,{x:D.x+n[0].length*M.stop+F.width+2*F.spacting,y:L(q,M.stopEng)+30,text:o[1],className:"stop-eng",style:{fontSize:M.stopEng}}))))};function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t){return(B="function"==typeof Symbol&&"symbol"===W(Symbol.iterator)?function(t){return W(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":W(t)})(t)}function H(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function X(t,e){return!e||"object"!==B(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var U=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=X(this,G(e).call(this,t))).state={},n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(){var t=this.props.routes;return r.a.createElement("div",null,r.a.createElement("svg",{id:"paper",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement(l,{w:840,h:600}),r.a.createElement(K,{number:t.number,fromTo:t.fromTo,fromToEng:t.fromToEng}),r.a.createElement(N,{routeData:t.data})))}}])&&H(n.prototype,o),i&&H(n,i),e}();function Y(t){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Q(t){return(Q="function"==typeof Symbol&&"symbol"===Y(Symbol.iterator)?function(t){return Y(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":Y(t)})(t)}function V(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Z(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function $(t){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function tt(t,e){return(tt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function et(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ot=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,r=$(e).call(this,t),n=!r||"object"!==Q(r)&&"function"!=typeof r?et(o):r,nt(et(et(n)),"convertExcelToOBj",function(){var t=n.state.text,e=[];for(var o in t.split("\n"))e[o]=t.split("\n")[o].split("\t");var r={number:e[0][0],fromTo:[e[1][0],e[1][1]],fromToEng:[e[2][0],e[2][1]]};e=e.slice(6);for(var i=[],a=0;a<e[0].length;a++)i=[].concat(V(i),[{id:a,stopName:e[0][a],stopType:e[1][a]}]);n.setState({routeData:i,routeInfo:r})}),nt(et(et(n)),"componentWillMount",function(){fetch("routeDataAll.txt").then(function(t){return t.text()}).then(function(t){var e=t.split("\n");e=e.map(function(t){return t.split(",").filter(function(t){return t.trim().length>0})});for(var o=0;o<e.length;o++)o%8==2&&0===e[o].length&&(e[o]=["",""]);e=e.filter(function(t){return t.length>0}),console.log(e);for(var r=[],i=0;i<e.length/5;i++)r[i]=e.slice(5*i,5*i+1+4);for(var a=[],c=0;c<r.length;c++){a[c]=[];for(var l=0;l<r[c][3].length;l++)a[c]=[].concat(V(a[c]),[{id:l,stopName:r[c][3][l],stopType:r[c][4][l]}])}for(var s=[],u=0;u<r.length;u++){var f=0===r[u][2].length?["",""]:r[u][2];s[u]={number:r[u][0][0],fromTo:[r[u][1][0],r[u][1][1]],fromToEng:[f[0],f[1]],data:a[u]}}console.log(s),n.setState({routes:s})})}),n.state={text:"",routes:[]},n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&tt(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(){var t=this.state.routes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.map(function(t){return r.a.createElement(U,{routes:t})})),r.a.createElement("div",null,"路線資料載入中..."))}}])&&Z(n.prototype,o),i&&Z(n,i),e}();a.a.render(r.a.createElement(ot,null),document.getElementById("root"))},256:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(14),a=n.n(i),c=(n(37),n(20)),l=n(8);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){return(u="function"==typeof Symbol&&"symbol"===s(Symbol.iterator)?function(t){return s(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":s(t)})(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=p(this,d(e).call(this,t))).state={},n.timer,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(){var t=this.props,e=t.classes,n=t.isStart,o=t.count,i=void 0===o?"00 : 00":o,a=t.handleClickTimer;return r.a.createElement(c.b,{className:e.timerCard},r.a.createElement(c.c,{variant:"display2"},i),r.a.createElement(c.a,{color:n?"default":"primary",variant:"contained",onClick:a},n?"Stop":"Start"),r.a.createElement(c.a,{onClick:this.props.handleReset},"Reset"))}}])&&f(n.prototype,o),i&&f(n,i),e}(),y=Object(l.withStyles)({timerCard:{width:"100%",textAlign:"center",verticalAlign:"middle"}})(b);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t){return(g="function"==typeof Symbol&&"symbol"===h(Symbol.iterator)?function(t){return h(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":h(t)})(t)}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,r=x(e).call(this,t),n=!r||"object"!==g(r)&&"function"!=typeof r?S(o):r,E(S(S(n)),"componentDidMount",function(){n._updateCanvas()}),E(S(S(n)),"componentDidUpdate",function(){n._updateCanvas()}),n.state={},n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"_updateCanvas",value:function(){var t=this.refs.canvas.getContext("2d"),e=this.props,n=e.posPrev,o=e.posNext,r=e.count,i=e.food;0===r&&t.clearRect(0,0,720,480),k({ctx:t,pos:o,color:"red"}),k({ctx:t,pos:n,color:"#ddd222"}),i!==o&&k({ctx:t,pos:i,color:"blue"})}},{key:"render",value:function(){return r.a.createElement("canvas",{width:720,height:480,ref:"canvas",id:"canvas",onClick:this.props.getCtxPos})}}])&&v(n.prototype,o),i&&v(n,i),e}();function k(t){var e=t.ctx,n=t.pos,o=t.color;e.fillStyle=o,e.fillRect(n%36*20+1,20*~~(n/36)+1,18,18)}function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t){return(_="function"==typeof Symbol&&"symbol"===j(Symbol.iterator)?function(t){return j(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":j(t)})(t)}function P(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,r=T(e).call(this,t),n=!r||"object"!==_(r)&&"function"!=typeof r?z(o):r,A(z(z(n)),"checkCollide",function(){var t=n.state,e=t.posNext,o=t.snakePos,r=e+t.direction;if(r%36==0|r<0|r>864|o.indexOf(r)>=0)return n._onhandleClickTimer(),!0}),A(z(z(n)),"updateFrame",function(){var t=n.state,e=t.posNext,o=t.food,r=t.snakePos;if(!n.checkCollide()){var i=[e].concat(P(r)),a=o;if(e===o)for(;i.indexOf(a=~~(36*Math.random()*24))>=0;);else i=i.slice(0,-1);n.setState(function(t){var n=t.count,o=t.snakePos,r=t.direction;return{count:n+.1,snakePos:i,posNext:e+r,posPrev:o[o.length-1],food:a}})}}),A(z(z(n)),"_onhandleKeydown",function(t){console.log(t.keyCode);var e,o=n.state,r=o.snakePos,i=o.direction,a=r[0]-r[1]===(e=[-1,-36,1,36][t.keyCode-37]||i)?i:e;n.setState({direction:a})}),A(z(z(n)),"_onhandleClickTimer",function(){var t=n.state.isStart;n.state.isStart?clearInterval(n.timer):n.timer=setInterval(n.updateFrame,100),n.setState({isStart:!t})}),A(z(z(n)),"_onhandleReset",function(){n.state.isStart||n.setState({count:0,snakePos:[41,40],posNext:42,posPrev:40,direction:1})}),A(z(z(n)),"_onGetCtxPos",function(t){var e,o=t.pageX,r=t.pageY,i=a.a.findDOMNode(n.refs.canvas).getBoundingClientRect(),c=i.x+i.width/2,l=i.y+i.height/2;e=o>c&&Math.abs(r-l)<i.height/3?1:o<c&&Math.abs(r-l)<i.height/3?-1:r>l&&Math.abs(r-l)>=i.height/3?36:-36,n.state.direction!==e&&n.setState({direction:e})}),A(z(z(n)),"componentDidMount",function(){document.addEventListener("keydown",n._onhandleKeydown)}),n.state={color:"",count:0,isStart:!1,snakePos:[41,40],posNext:42,posPrev:40,direction:1,food:50},n._onChangeColor=n._onChangeColor.bind(z(z(n))),n}var n,i,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(e,r.a.Component),n=e,(i=[{key:"_onChangeColor",value:function(t){console.log(t.target.name),this.setState({color:t.target.name}),this.timer}},{key:"render",value:function(){var t=this.state,e=t.count,n=t.isStart,i=t.posPrev,a=t.posNext,c=t.food,l=~~(e/60),s=~~(e%60);return r.a.createElement(o.Fragment,null,r.a.createElement(y,{count:(l<10?"0"+l:l)+":"+(s<10?"0"+s:s),isStart:n,handleClickTimer:this._onhandleClickTimer,handleReset:this._onhandleReset}),r.a.createElement(O,{ref:"canvas",posPrev:i,posNext:a,count:e,food:c,getCtxPos:this._onGetCtxPos}))}}])&&C(n.prototype,i),c&&C(n,c),e}();e.default=I;console.log("app12221.jsx")},37:function(t,e,n){var o=n(170);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(172)(o,r);o.locals&&(t.exports=o.locals)},61:function(t,e,n){t.exports=n.p+"610f68cf1f420652574e08d93149ee25.svg"},62:function(t,e,n){t.exports=n.p+"5aaa4d262927b8efe010db08d5bab4d3.png"}});