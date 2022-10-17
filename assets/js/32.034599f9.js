(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{348:function(t,e,s){t.exports=s.p+"assets/img/life.b3251a15.jpg"},589:function(t,e,s){"use strict";s.r(e);var a=s(56),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"vue-的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-的生命周期"}},[t._v("#")]),t._v(" vue 的生命周期")]),t._v(" "),a("p",[t._v("理解 vue 的生命周期是学习 vue 的第一步，先来一张官方的"),a("strong",[t._v("生命周期图")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(348),alt:"vue生命周期"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("beforeCreate")]),t._v("：初始化生命周期、事件，数据代理还未开始，无法通过 vm 访问 data 中的数据，methods 中的方法。DOM 树未生成，不能获取 this.$el 。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("created")]),t._v(": 实例已经创建完成，实例已经完成以下的配置：数据观测，数据代理，属性和方法的运算，watch/event 事件回调，可以通过 vm 访问 data、methods。然而，挂载阶段还没开始，$el 属性目前不可见。开始创建 VDOM，但是还没挂载，页面中的元素还没真正替换过来，页面还未渲染。通常在这一阶段进行异步请求。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("el")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("object object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" hi\n")])])]),a("ul",[a("li",[a("strong",[t._v("beforeMount")]),t._v(": 虚拟 dom 已创建完成, 但是还没挂载到页面， 页面呈现的是未经 vue 编译的 DOM 结构，还不能显示模版里面的内容 ，不能访问 el，不能操作 dom")]),t._v(" "),a("li",[a("strong",[t._v("mounted")]),t._v(": 虚拟 Dom(也会在内存中存一份，为了进行 diff 算法 )已经挂载到了虚拟 dom, 可以访问 el，可以操作 el。此时页面中呈现的是经过 vue 编译的 dom。此时初始化过程结束，一般在此进行，开启定时器，发送网络请求，订阅消息，绑定自定义事件、等初始化操作。")]),t._v(" "),a("li",[t._v("beforeUpdate: 当数据发生改变时会触发，此时数据是新的，但是页面上是旧的，页面和数据尚未同步")]),t._v(" "),a("li",[a("strong",[t._v("updated")]),t._v("：此时页面上的数据是新的，beforeUpdate 和 updated 之间会执行 diff 算法")]),t._v(" "),a("li",[a("strong",[t._v("beforeDestroy")]),t._v(": vm 所在的 data、methods、指令等都可用，但是如果在这个阶段对数据操作页面不会再更新(无效)。然后马上要执行销毁过程，一般在此阶段：关闭定时器，取消订阅消息，解绑自定义事件等，")]),t._v(" "),a("li",[a("strong",[t._v("destroyed")]),t._v(": vm 所在的 data、methods(自定义)、指令等都被销毁，但是原生 DOM 事件依然有效，vue 开发工具看不到任何信息")])]),t._v(" "),a("blockquote",[a("p",[t._v("想看看每个生命周期的具体详情，可以在生命周期函数里面加 debugger\nvue 所有的生命周期钩子自动绑定在 this 上下文到实例中，因此你可以在函数里面访问数据，对属性和方法进行运算。这意味着你不能使用箭头函数来定义一个生命周期方法。这是因为箭头函数绑定了父上下文，因此 this 与你期待的 Vue 实例不同。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);