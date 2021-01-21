(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{386:function(t,s,e){"use strict";e.r(s);var a=e(48),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"how-does-it-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work"}},[t._v("#")]),t._v(" How does it work?")]),t._v(" "),e("p",[t._v("The three objects "),e("code",[t._v("dispatches")]),t._v(", "),e("code",[t._v("commits")]),t._v(", "),e("code",[t._v("getters")]),t._v(" are "),e("code",[t._v("Proxy")]),t._v(" objects. So when you are trying to access\na module store:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("dispatches"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("it is impossible to check dynamically if the "),e("code",[t._v("count")]),t._v(" module exists on the Vuex store. We can, but we would need to access the private\nmethods on the root store, that wouldn't be a good idea. It is up to you to make sure you are accessing a module that exists\non the Vuex store (perfect to write tests!). And an "),e("code",[t._v("ide_helper")]),t._v(" is on my to do list, so the autocomplete would to avoid typos.")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("To add, in the example above, "),e("code",[t._v("dispatches")]),t._v(" captures the first argument "),e("code",[t._v("count")]),t._v(" as the module you are wishing to access its methods, then returns another "),e("code",[t._v("Proxy")]),t._v(" object.\nIts implementation will check the next accessed property and will translate it to "),e("code",[t._v("store.dispath()")]),t._v(".\nFor example, if we will access "),e("code",[t._v("dispatches.count.increment()")]),t._v(", this will become:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("$store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'count/increment'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("where "),e("code",[t._v("...args")]),t._v(" are any arguments passed to "),e("code",[t._v("dispatches.count.increment()")]),t._v(" if any.")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("It is the same as for the "),e("code",[t._v("commits")]),t._v(" and "),e("code",[t._v("getters")]),t._v(" objects.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("commits"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("method"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\ngetters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("property"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("will be translated to:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("$store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("commits")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module/method'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n$store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module/property'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=o.exports}}]);