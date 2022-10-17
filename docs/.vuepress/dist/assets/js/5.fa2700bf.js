(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{379:function(t,s,a){t.exports=a.p+"assets/img/vueinit_08.67aaf0b6.png"},455:function(t,s,a){t.exports=a.p+"assets/img/vueinit_01.c6af7423.png"},456:function(t,s,a){t.exports=a.p+"assets/img/vueinit_02.be1d9bbf.png"},457:function(t,s,a){t.exports=a.p+"assets/img/vueinit_03.189712ee.png"},458:function(t,s,a){t.exports=a.p+"assets/img/vueinit_04.472c5c63.png"},459:function(t,s,a){t.exports=a.p+"assets/img/vueinit_05.b78ec3c8.png"},460:function(t,s,a){t.exports=a.p+"assets/img/vueinit_06.df941c7a.png"},461:function(t,s,a){t.exports=a.p+"assets/img/vueinit_07.3712977d.png"},462:function(t,s,a){t.exports=a.p+"assets/img/vueinit_10.7b34a4d9.png"},463:function(t,s,a){t.exports=a.p+"assets/img/vueinit_09.fcb34de0.png"},539:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"手动搭建vue项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手动搭建vue项目"}},[t._v("#")]),t._v(" 手动搭建Vue项目")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("💡 为了更好的学习和理解Vue的配置，所以试一下不用vue-cli手动搭建一下Vue项目。")])]),t._v(" "),n("p",[t._v("✨ 1️⃣  新建一个文件夹，运行 "),n("code",[t._v("npm init")]),t._v(" 初始化项目，运行之后会生成一个项目的配置文件 "),n("strong",[t._v("package.json")])]),t._v(" "),n("p",[t._v("✨ 2️⃣  安装项目的 "),n("strong",[t._v("webpack")]),t._v(" "),n("strong",[t._v("vue-loader")]),t._v(" 依赖包, 运行 "),n("code",[t._v("npm i webpack vue-loader")])]),t._v(" "),n("p",[t._v("✨ 3️⃣ 安装成功之后根据提示继续安装 "),n("strong",[t._v("css-loader")]),t._v(" "),n("img",{attrs:{src:a(455),alt:"vueinit_01"}})]),t._v(" "),n("p",[t._v("✨ 4️⃣  在根目录下新建 "),n("strong",[t._v("src")]),t._v(" 文件夹，在文件夹下新建 "),n("strong",[t._v("App.vue")]),t._v(" 文件和 "),n("strong",[t._v("index.js")]),t._v(" （入口）文件")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("App.vue")]),n("br"),t._v(" "),n("img",{attrs:{src:a(456),alt:"vueinit_02"}})]),t._v(" "),n("li",[n("strong",[t._v("index.js")]),n("br"),t._v(" "),n("img",{attrs:{src:a(457),alt:"vueinit_03"}})])]),t._v(" "),n("p",[t._v("✨ 5️⃣ 在根目录下创建 webpack 基本配置文件 "),n("strong",[t._v("webpack.config.js")])]),t._v(" "),n("ul",[n("li",[t._v("webpack.config.js"),n("br"),t._v(" "),n("img",{attrs:{src:a(458),alt:"vueinit_04"}})])]),t._v(" "),n("p",[t._v("✨ 6️⃣ 打开 "),n("strong",[t._v("packjson.js")]),t._v(" 添加打包命令 "),n("code",[t._v('"build": "webpack --config webpack.config.js"')])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("packjson.js")]),n("br"),t._v(" "),n("img",{attrs:{src:a(459),alt:"vueinit_05"}})])]),t._v(" "),n("p",[t._v("✨ 7️⃣ 运行 "),n("code",[t._v("npm run build")]),t._v(" 显示要安装 "),n("strong",[t._v("webpack-cli")]),t._v("，根据提示安装即可（说是cli包是因为webpack4之后强制要求安装？），安装之后还是报错了❗\n"),n("img",{attrs:{src:a(460),alt:"vueinit_06"}}),t._v("\n这个错误呢就是告诉我们，需要为app.vue这个文件声明一个loader，因为webpack只支持js类型的文件，在 "),n("strong",[t._v("webpack.config.js")]),t._v(" 添加module配置项")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置入口文件")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/index.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置输出文件夹")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过vue-loader来识别以vue结尾的文件")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(".vue$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n             "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("✨ 8️⃣ 再运行一遍 "),n("code",[t._v("npm run build")]),t._v(" ,哎呀怎么还是报错了。\n"),n("img",{attrs:{src:a(461),alt:"vueinit_07"}}),t._v("\n这时候的错误是告诉我使用vue-loader的方式不正确。因为在vue-loader@15.x 版本，有些东西必须要配置，我们在 "),n("strong",[t._v("package.config.js")]),t._v(" 文件中添加 "),n("strong",[t._v("VueLoaderPlugin")]),t._v("，代码如下：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//webpack.config.js 基本配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//nodejs里面的基本包，用来处理路径")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" VueLoaderPlugin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//或者const VueLoaderPlugin = require('vue-loader/lib/plugin');")]),t._v("\n或者\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" VueLoaderPlugin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// __dirname表示文件相对于工程的路径")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置入口文件")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/index.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置输出文件夹")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make sure to include the plugin for the magic")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueLoaderPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过vue-loader来识别以vue结尾的文件")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(".vue$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n             "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("✨ 9️⃣ 再运行一遍 "),n("code",[t._v("npm run build")]),t._v(" ,报错again,我们需要再安装一个处理template模板的依赖 "),n("code",[t._v("npm i vue-template-compiler -D")]),n("br"),t._v(" "),n("img",{attrs:{src:a(379),alt:"vueinit_08"}})]),t._v(" "),n("p",[t._v("✨ :ten: 我们再来Biu~一下看看，不负众望，又报错了哈哈哈...\n"),n("img",{attrs:{src:a(379),alt:"vueinit_08"}}),t._v("\n报错是因为我们写的样式是CSS,但是webpack并没有处理css的能力，所以我们还需要在moudle添加rules配置项，如下：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过vue-loader来识别以vue结尾的文件")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(".vue$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(".css$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//css的处理方式不同，有嵌入在页面style标签里的，有从外部文件引入的，我们这里用use来声明")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//接受潜在页面内部的style标签的文件。")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("并执行一下"),n("code",[t._v("npm i style-loader")])]),t._v(" "),n("p",[t._v("✨ :eleven: 再biu~一下,发现还是报错， Can't resolve 'vue'，发现是漏安装 "),n("strong",[t._v("vue")]),t._v("了，执行"),n("code",[t._v("npm i vue -D")]),t._v(",安装成功之后，再biu一下~\n"),n("img",{attrs:{src:a(462),alt:"vueinit_10"}}),t._v("\n看到这样就是打成功了\nhttps://blog.csdn.net/Tokki_/article/details/90766971\n"),n("img",{attrs:{src:a(463),alt:"vueinit_09"}})]),t._v(" "),n("p",[t._v("emmm这是爬坑记录不算🙅‍♀️")])])}),[],!1,null,null,null);s.default=e.exports}}]);