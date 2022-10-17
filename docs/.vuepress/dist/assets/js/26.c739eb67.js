(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{422:function(t,s,n){t.exports=n.p+"assets/img/eventloop.648146e9.jpg"},505:function(t,s,n){"use strict";n.r(s);var a=n(56),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("哎一古，这个问题是面试的常客啊！让我来好好学习一下吧！！")]),t._v(" "),a("h3",{attrs:{id:"为什么javascript是单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么javascript是单线程"}},[t._v("#")]),t._v(" 为什么JavaScript是单线程？")]),t._v(" "),a("p",[t._v("单线程的意思就是说：一次只能干一件事儿。")]),t._v(" "),a("p",[t._v("那为什么要有这么没有效率的机制呢？来举个栗子🌰：\n如果不是单线程，那就可以一下干好多事儿啦。一个线程当我们在给某个DOM节点增加内容的时候，另一个线程正在删除这个DOM节点的内容，那要听谁的呢？这就乱套了！所以还是老老实实单线程，一件一件的完成。(虽然javascript是单线程，但是javascript中有同步和异步的概念，解决了js阻塞的问题。)")]),t._v(" "),a("h3",{attrs:{id:"同步和异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步和异步"}},[t._v("#")]),t._v(" 同步和异步")]),t._v(" "),a("p",[a("strong",[t._v("同步")]),t._v("：同步就是说，如果在一个函数返回的时候，调用者就能够即时得到预期结果"),a("br"),t._v(" "),a("strong",[t._v("异步")]),t._v("：异步就是说，如果在函数返回的时候，调用者还不能够得到预期结果，而是需要在将来通过一定的手段得到，像"),a("code",[t._v("setTimeout()")]),t._v("就是一个异步函数")]),t._v(" "),a("p",[t._v("JavaScript里面有两种任务："),a("br"),t._v(" "),a("strong",[t._v("同步任务")]),t._v("：在"),a("u",[t._v("主线程")]),t._v("(执行栈)排队执行的任务，只有前一个执行完毕，才能执行下一个任务"),a("br"),t._v(" "),a("strong",[t._v("异步任务")]),t._v("：在"),a("u",[t._v("任务队列")]),t._v('(先入先出),只有任务队列通知主线程，可以执行某个异步任务的时候，该任务才会进入主线程。 "任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。任务队列又分为宏任务和微任务')]),t._v(" "),a("ul",[a("li",[t._v("宏任务：setTimeOut、setInterval、setImmediate、I/O、各种callback、UI渲染等")]),t._v(" "),a("li",[t._v("微任务：then、process.nextTick 、Promise 、MutationObserver 、async(实质上也是promise)")])]),t._v(" "),a("h3",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("p",[t._v('线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）')]),t._v(" "),a("p",[t._v("为了能更好地理解这个事件循环，自己做了个图💡\n"),a("img",{attrs:{src:n(422),alt:"eventloop"}})]),t._v(" "),a("p",[a("i",[t._v("PS:设计好难，找了半天配色还是好丑😭")])]),t._v(" "),a("p",[a("strong",[t._v("执行流程")]),a("br"),t._v("\n1️⃣ JavaScript内核加载代码到"),a("font",{attrs:{color:"#f34134"}},[t._v("执行栈")]),t._v("。"),a("br"),t._v("\n2️⃣ 执行栈依次执行"),a("font",{attrs:{color:"#f34134"}},[t._v("同步任务")]),t._v("，发现调用异步API则会添加回调事件到回调(任务)队列中。"),a("br"),t._v("\n3️⃣ "),a("font",{attrs:{color:"#f34134"}},[t._v("宏任务")]),t._v("进入宏任务队列，"),a("font",{attrs:{color:"#f34134"}},[t._v("微任务")]),t._v("进入微任务队列。"),a("br"),t._v("\n4️⃣ 栈内代码执行完毕，查看微任务队列是否为空，若不为空，微任务队列中的"),a("font",{attrs:{color:"#f34134"}},[t._v("所有微任务")]),t._v("进入执行栈执行（相当于清空队列）。"),a("br"),t._v("\n5️⃣ 执行栈执行完微任务，此时微任务队列为空，宏任务队列"),a("font",{attrs:{color:"#f34134"}},[t._v("第一条宏任务")]),t._v("(先进先出原则哦)进入执行栈。"),a("br"),t._v("\n6️⃣ 执行"),a("font",{attrs:{color:"#f34134"}},[t._v("宏任务")]),t._v("，若此过程总又再遇到微任务或者宏任务,则执行3️⃣。")],1),t._v(" "),a("p",[t._v("由此可见，这样的执行流程就构成了一个事件的循环检测机制，即我们所称的eventloop。"),a("br"),t._v(" "),a("i",[t._v("PS:宏任务总会在下一个EventLoop中执行。")])]),t._v(" "),a("p",[t._v("✨先来一道题看看是不是真的理解好了：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//来猜猜执行结果🤠")]),t._v("\n")])])]),a("details",[a("summary",[a("b",[t._v("Answer")])]),t._v(" "),a("p",[t._v("\n1. 执行 "),a("code",[t._v("console.log(1);")]),t._v(" "),a("u",[t._v("输出1")]),t._v("。"),a("br"),t._v("\n2. 遇到 "),a("code",[t._v("第一个setTimeout()")]),t._v(" push到宏任务队列。"),a("br"),t._v("\n3. 执行 "),a("code",[t._v("console.log(3)")]),t._v(" "),a("u",[t._v("输出3")]),t._v(";遇到 "),a("code",[t._v(".then()")]),t._v(" ,push到微任务队列。"),a("br"),t._v("\n4. 执行 "),a("code",[t._v("console.log(5)")]),t._v(" "),a("u",[t._v("输出5")]),a("br"),t._v("\n5. 遇到 "),a("code",[t._v("第二个setTimeout()")]),t._v(" push到宏任务队列。"),a("br"),t._v("\n6. 同步任务代码执行完毕，执行栈为空。读取微任务队列。执行 "),a("code",[t._v(".then()")]),t._v(" "),a("u",[t._v("输出4")]),a("br"),t._v("\n7. 执行栈为空，微任务队列为空，宏任务队列顶部宏任务进栈。执行 "),a("code",[t._v("第一个setTimeout()")]),t._v(" "),a("u",[t._v("输出2")]),a("br"),t._v("\n8. 执行栈为空，微任务队列为空，执行下一个宏任务 "),a("code",[t._v("第二个setTimeout()")]),t._v(" "),a("u",[t._v("输出6")]),t._v(", 遇到 "),a("code",[t._v(".then()")]),t._v(" push到微任务队列。"),a("br"),t._v("\n9. 执行栈为空，微任务队列不为空，执行微任务 "),a("code",[t._v(".then()")]),t._v(" "),a("u",[t._v("输出7")]),a("br"),t._v("\n💡 因此，最终的输出顺序为：1, 3, 5, 4, 2, 6, 7;\n")])]),t._v(" "),a("h3",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),a("p",[t._v("Q: 我的setTimeout函数到时间了，为啥一直不去执行。")]),t._v(" "),a("p",[t._v("A: setTimeOut的回调会被放到任务队列中，需要当前的执行栈执行完了，才会去执行执行任务队列中的内容。出现setTimeout回调不及时，说明在执行栈中出现了阻塞，或者说执行代码过多。")]),t._v(" "),a("p",[t._v("Q: 微任务有两种 nextTick 和 then 那么这两个谁快呢？")]),t._v(" "),a("p",[t._v("A: nextTick快。")])])}),[],!1,null,null,null);s.default=e.exports}}]);