(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{464:function(t,s,a){t.exports=a.p+"assets/img/wxapplife.effe1a13.jpg"},465:function(t,s,a){t.exports=a.p+"assets/img/pagelife.eb314efb.jpg"},544:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("img",{attrs:{src:a(464),alt:"wxapplife"}})]),t._v(" "),n("h2",{attrs:{id:"✨小程序的一生啊"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#✨小程序的一生啊"}},[t._v("#")]),t._v(" ✨小程序的一生啊")]),t._v(" "),n("p",[n("strong",[t._v("打开小程序")]),t._v(":"),n("br"),t._v(" "),n("u",[t._v("OnLaunch()")]),t._v(" => "),n("u",[t._v("OnShow()")]),t._v(" => onLoad() => onShow() => onReady()")]),t._v(" "),n("p",[n("strong",[t._v("切换页面")]),t._v("："),n("br"),t._v("\nOnHide()"),n("font",{attrs:{color:"#425fe"}},[t._v("(cur)")]),t._v(" => onLoad()"),n("font",{attrs:{color:"#425fe"}},[t._v("(next)")]),t._v(" => onShow()"),n("font",{attrs:{color:"#425fe"}},[t._v("(next)")]),t._v(" => OnReady()"),n("font",{attrs:{color:"#425fe"}},[t._v("(next)")])],1),t._v(" "),n("p",[n("strong",[t._v("返回上一个页面")]),t._v("："),n("br"),t._v("\nonUnload()"),n("font",{attrs:{color:"#425fe"}},[t._v("(cur)")]),t._v(" => onShow()"),n("font",{attrs:{color:"#425fe"}},[t._v("(pre)")])],1),t._v(" "),n("p",[n("strong",[t._v("退出小程序")]),t._v("："),n("br"),t._v(" "),n("u",[t._v("onHide()")])]),t._v(" "),n("p",[n("strong",[t._v("再次进入")]),t._v("：")]),t._v(" "),n("ul",[n("li",[t._v("App未销毁：热启动")]),t._v(" "),n("li",[t._v("App已销毁：冷启动")])]),t._v(" "),n("p",[t._v("那什么是热启动和冷启动呢："),n("br"),t._v(" "),n("strong",[t._v("热启动")]),t._v("：指的是小程序启动成功后，你点了左上角的x或者按了home键离开小程序，小程序并没有直接被销毁，而是进入了后台运行机制中，当你在一定时间内再次打开该小程序时，小程序这时候从后台又重新进入前台，重新渲染页面，这个过程就是热启动。"),n("br"),t._v(" "),n("strong",[t._v("冷启动")]),t._v("：指的是小程序初次加载（从未打开），或者当你卸载小程序,或者被微信自动销毁的时候，当你再次进入重新加载小程序时，这个过程就是冷启动")]),t._v(" "),n("p",[t._v("注意点：小程序只有在冷启动的时候，才会触发onLaunch生命周期")]),t._v(" "),n("h2",{attrs:{id:"✨page的生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#✨page的生命周期"}},[t._v("#")]),t._v(" ✨Page的生命周期")]),t._v(" "),n("p",[n("img",{attrs:{src:a(465),alt:"wxapplife"}})]),t._v(" "),n("h2",{attrs:{id:"✨小程序路由方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#✨小程序路由方式"}},[t._v("#")]),t._v(" ✨小程序路由方式")]),t._v(" "),n("p",[n("strong",[t._v("打开新页面")]),t._v("："),n("code",[t._v("wx.navigateTo")]),t._v(" 或 "),n("code",[t._v('< navigator open-type="navigateTo"/>')])]),t._v(" "),n("p",[n("strong",[t._v("Tab切换")]),t._v("："),n("code",[t._v("wx.switchTab")]),t._v(" 或 "),n("code",[t._v('<navigator open-type="switchTab"/>')])]),t._v(" "),n("p",[n("strong",[t._v("页面返回")]),t._v(":  "),n("code",[t._v("navigateBack")]),t._v(" 或 "),n("code",[t._v('<navigator open-type="navigateBack">')]),t._v(" 或用户按左上角返回按钮")]),t._v(" "),n("p",[n("strong",[t._v("重启动")]),t._v(": "),n("code",[t._v("wx.reLaunch")]),t._v(" 或  "),n("code",[t._v('<navigator open-type="reLaunch"/>')])]),t._v(" "),n("h2",{attrs:{id:"小程序下拉更新怎么实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小程序下拉更新怎么实现"}},[t._v("#")]),t._v(" 小程序下拉更新怎么实现")]),t._v(" "),n("ul",[n("li",[t._v("在json文件添加以下代码")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"enablePullDownRefresh"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[t._v("在需要实现下拉更新的页面中写入函数")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onPullDownRefresh")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("showNavigationBarLoading")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在标题栏中显示加载")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//模拟加载")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// complete")]),t._v("\n        wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideNavigationBarLoading")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//完成停止加载")]),t._v("\n        wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPullDownRefresh")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//停止下拉刷新")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("h2",{attrs:{id:"微信小程序如何授权登录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序如何授权登录"}},[t._v("#")]),t._v(" 微信小程序如何授权登录？")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLoad")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" that "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看是否授权")]),t._v("\n    wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authSetting"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scope.userInfo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户授权了"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用户没有授权")]),t._v("\n          console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户没有授权"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("授权登陆之后会有一个 "),n("code",[t._v("code")]),t._v(",把这个"),n("code",[t._v("code")]),t._v(" 发给后台，就会返回一个用户的身份证 "),n("code",[t._v("openid")]),t._v(",用于唯一标示不同的用户。")]),t._v(" "),n("h2",{attrs:{id:"openid-appid-unionid分别是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#openid-appid-unionid分别是什么"}},[t._v("#")]),t._v(" openid,appid,unionid分别是什么？")]),t._v(" "),n("ul",[n("li",[t._v("appid: 小程序的唯一凭证，即 AppID，每个小程序都有自己的一个appid")]),t._v(" "),n("li",[t._v("openid: 用户在同一小程序的唯一标示，同一用户在不同小程序的openid是不一样的。由后台生成。")]),t._v(" "),n("li",[t._v("unionid: 用户在同一个微信开放平台下的移动应用的唯一标示。如果开发者拥有同一个微信开放平台帐号的多个移动应用、网站应用、和公众帐号（包括小程序），可通过 UnionID 来区分用户的唯一性。对于拥有多个账号的企业来说，unionid可以帮助识别不同公众账号下的用户是否是同一个人。还可以去除重复关注的用户数，便于统计真实的关注用户总数。")])]),t._v(" "),n("h2",{attrs:{id:"小程序登陆流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小程序登陆流程"}},[t._v("#")]),t._v(" 小程序登陆流程")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("wx.login")]),t._v(" 返回一个code")]),t._v(" "),n("li",[t._v("以 "),n("code",[t._v("code")]),t._v(" 为参数发送请求给后台，然后后台返回 "),n("code",[t._v("openid")]),t._v("(唯一识别用户)")]),t._v(" "),n("li",[t._v("有了这个"),n("code",[t._v("openid")]),t._v(",就能知道是哪个用户，以及用这个去获取用户的个人信息")])]),t._v(" "),n("h2",{attrs:{id:"如何获取微信用户手机号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何获取微信用户手机号"}},[t._v("#")]),t._v(" 如何获取微信用户手机号")]),t._v(" "),n("ul",[n("li",[t._v("授权获取用户手机号，并用bindgetphonenumber()回调获取到微信服务器返回的加密数据")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button open"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getPhoneNumber"')]),t._v(" bindgetphonenumber"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getPhoneNumber"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPhoneNumber")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errMsg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encryptedData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[t._v("前端将 wx.login传回来的code 和 bindgetphonenumber传回来的iv, encryptedData,传给后台解析")])])])}),[],!1,null,null,null);s.default=e.exports}}]);