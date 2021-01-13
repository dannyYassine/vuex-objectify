(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{337:function(t,s,a){},368:function(t,s,a){"use strict";a(337)},377:function(t,s,a){"use strict";a.r(s);var n=a(44),i={name:"HomePage",methods:{onCodeClicked:function(){navigator.clipboard.writeText("yarn add vuex-objectify").then((function(){n.a.open({message:"Copied to clipboard!"})}))}}},e=(a(368),a(48)),c=Object(e.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"home"}},[a("HeaderNav"),t._v(" "),a("section",[a("div",{staticClass:"section-content"},[a("img",{staticClass:"animate-delay-1",attrs:{src:"/vuex-objectify/logo.png"}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"my-editor animate-delay-3 animate-delay-3",on:{click:t.onCodeClicked}},[t._v("\n          $ yarn add vuex-objectify\n        ")]),t._v(" "),a("div",{staticClass:"animate-delay-3 mt-4"},[a("router-link",{attrs:{to:"/guide/install"}},[a("b-button",{staticClass:"get-started",attrs:{type:"is-dark"}},[t._v("Get Started ➞")])],1)],1)])]),t._v(" "),a("ClientOnly",[a("GoogleAnalytics")],1)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"badges animate-delay-1 mt-5"},[s("a",{attrs:{href:"https://www.npmjs.com/package/vuex-objectify",target:"_blank"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/vuex-objectify.svg",alt:"Library Version"}})]),this._v(" "),s("a",{attrs:{href:"https://travis-ci.com/dannyYassine/vuex-objectify",target:"_blank"}},[s("img",{attrs:{src:"https://travis-ci.com/dannyYassine/vuex-objectify.svg?branch=master",alt:"Build Status"}})]),this._v(" "),s("a",{attrs:{href:"https://coveralls.io/github/dannyYassine/vuex-objectify?branch=master",target:"_blank"}},[s("img",{attrs:{src:"https://coveralls.io/repos/github/dannyYassine/vuex-objectify/badge.svg?branch=master",alt:"Coverage Status"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"description animate-delay-1 mt-5 mb-5"},[s("b",[this._v("Dynamically")]),this._v(" creates an "),s("b",[this._v("interface of objects")]),this._v(" to easily communicate with vuex\n        ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"animate-delay-2 columns mt-2"},[a("div",{staticClass:"column is-6"},[a("h4",[t._v("Turning this:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{staticClass:"language-javascript"},[a("code",[a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$store"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("dispatch")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'module/action'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v(" data "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$store"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("commit")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("Types"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("mutations"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token constant"},[t._v("SET_FIRST_THING")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("10")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$store"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("getters"),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token constant"},[t._v("TYPES")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("getters"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("getSomething"),a("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n")])])])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("h4",[t._v("Into this:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{staticClass:"language-javascript"},[a("code",[t._v("dispatches"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("module"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("action")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v(" data "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\ncommits"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("module"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("setFirstThing")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token number"},[t._v("10")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\ngetters"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("module"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("getSomething")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"sub-description animate-delay-1"},[this._v("\n          No more "),s("b",[this._v("constants")]),this._v(", no more "),s("b",[this._v("strings")])])}],!1,null,"1feab48a",null);s.default=c.exports}}]);