(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{351:function(t,s,a){t.exports=a.p+"assets/img/life.b3251a15.jpg"},539:function(t,s,a){"use strict";a.r(s);var r=a(56),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"vue生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue生命周期"}},[t._v("#")]),t._v(" Vue生命周期")]),t._v(" "),r("p",[t._v("Vue生命周期是面试中常遇到的题，并且之前在项目中，也因为不够理解Vue的生命周期，无法正确地显示数据，希望能通过这次学习，真正理解到Vue的生命周期。")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("先来一张官方的"),r("strong",[t._v("生命周期图")]),r("br"),t._v(" "),r("img",{attrs:{src:a(351),alt:"vue生命周期"}})]),t._v(" "),r("p",[t._v("Vue所有的生命周期钩子自动绑定在this上下文到实例中，因此你可以访问数据，对属性和方法进行运算。这意味着你不能使用箭头函数来定义一个生命周期方法。这是因为箭头函数绑定了父上下文，因此this与你期待的Vue实例不同。"),r("br"),t._v("\n首先顶部的 "),r("strong",[t._v("new Vue()")]),t._v(" 是Vue实例的初始化")]),t._v(" "),r("p",[t._v("🥤"),r("strong",[t._v("beforeCreate")]),r("br"),t._v("\n创建实例之前，数据观察和时间都没准备好，DOM树未生成，不能获取this.$data和this.$el")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("el")]),t._v("     "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),t._v("   "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n")])])]),r("p",[t._v("🥤"),r("strong",[t._v("created")]),r("br"),t._v("\n　　实例已经创建完成之后被调用。在这一步，实例已经完成以下的配置：数据观测，属性和方法的运算，watch/event事件回调。可以获取this.$data,然而，挂载阶段还没开始，$el属性目前不可见。开始创建VDOM，但是还没挂载，页面中的元素还没真正替换过来，页面还未渲染。通常在这一阶段进行异步请求。")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("el")]),t._v("     "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),t._v("   "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("object object"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" hi\n")])])]),r("p",[t._v("🥤"),r("strong",[t._v("beforeMount")]),r("br"),t._v("\n可以读取this.$el，DOM树已生成，但是数据还未挂载")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("el")]),t._v("     "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("message"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),t._v("   "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("object object"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" hi\n")])])]),r("p",[t._v("🥤"),r("strong",[t._v("mounted")]),r("br"),t._v("\n　　el被新创建的vm.$el替换，并挂在到实例上去，页面已经渲染成功,执行到这一钩子函数，就表示vue实例被完整创建。一般会在这个钩子函数进行ajax请求。")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("el")]),t._v("     "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hi"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),t._v("   "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("object object"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" hi\n")])])]),r("p",[t._v("🥤"),r("strong",[t._v("beforeUpdate")]),r("br"),t._v("\n　　数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前。"),r("br"),t._v("\n　　你可以在这个钩子中进一步第更改状态，这不会触发附加的重渲染过程。"),r("br"),t._v("\n🥤"),r("strong",[t._v("updated")]),r("br"),t._v("\n　　由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。"),r("br"),t._v("\n　　当这个钩子被调用时，组件DOM已经更新，所以你现在可以执行依赖于DOM的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。"),r("br"),t._v("\n🥤"),r("strong",[t._v("beforeDestroy")]),r("br"),t._v("\n　　实例销毁之间调用。在这一步，实例仍然完全可用。"),r("br"),t._v("\n🥤"),r("strong",[t._v("destroyed")]),r("br"),t._v("\n　　Vue实例销毁后调用。调用后，Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。"),r("br"),t._v("\n🥤"),r("strong",[t._v("activated")]),r("br"),t._v("\n　　keep-alive组件激活时调用。"),r("br"),t._v("\n🥤"),r("strong",[t._v("deactivated")]),r("br"),t._v("\n　　keep-alive组件停用时调用。")])])}),[],!1,null,null,null);s.default=e.exports}}]);