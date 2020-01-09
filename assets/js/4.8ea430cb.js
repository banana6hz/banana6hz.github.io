(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{203:function(s,n,a){s.exports=a.p+"assets/img/vuepress_1.ceaf4501.png"},204:function(s,n,a){s.exports=a.p+"assets/img/vuepress_3.2105d9cf.png"},205:function(s,n,a){s.exports=a.p+"assets/img/vuepress_2.5a1c71e4.png"},206:function(s,n,a){s.exports=a.p+"assets/img/vuepress_4.256b9c2b.png"},235:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"vuepress搭建个人博客网站"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress搭建个人博客网站"}},[s._v("#")]),s._v(" Vuepress搭建个人博客网站")]),s._v(" "),e("p",[s._v("拥有个人网站性价比最高的方法就是把网站放到github上，不用自己花钱买服务器开发，也不用考虑续费的问题。此篇文章主要讲述如何用vuepress在github上部署一个个人博客网站。咸鱼漫步，多多指教啊🤡\n📑 此处附上"),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress官方文档"),e("OutboundLink")],1)]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#vuepress搭建个人博客网站"}},[s._v("Vuepress搭建个人博客网站")]),e("ul",[e("li",[e("a",{attrs:{href:"#一、准备工作"}},[s._v("一、准备工作")])]),e("li",[e("a",{attrs:{href:"#二、搭建vuepress项目"}},[s._v("二、搭建vuepress项目")])]),e("li",[e("a",{attrs:{href:"#三、部署到github"}},[s._v("三、部署到GIthub")])])])])])]),e("p"),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"一、准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、准备工作"}},[s._v("#")]),s._v(" 一、准备工作")]),s._v(" "),e("p",[s._v("1️⃣ "),e("strong",[s._v("在github上新建一个仓库")]),e("br"),s._v(" "),e("img",{attrs:{src:a(203),alt:"vuepress_1"}}),e("br"),s._v("\n ① "),e("u",[s._v("仓库名称")]),s._v("：此处的仓库名称是固定的 "),e("code",[s._v("github用户名 + .github.io")]),s._v(" 这正是你博客的地址"),e("br"),s._v("\n  🌰：如果用户名为banana,则此处应该填："),e("code",[s._v("banana.github.io")]),e("br"),s._v("\n ② "),e("u",[s._v("仓库描述")]),s._v("： 用户可自定义仓库的描述，方便读者了解此仓库的主要用途，此处放的是博客链接"),e("br"),s._v("\n ③ "),e("u",[s._v("建立仓库")]),e("br"),s._v("\n2️⃣ "),e("strong",[s._v("环境搭建")]),e("br"),s._v("\n ① Node>8"),e("br"),s._v("\n ② Git"),e("br"),s._v("\n ③ npm")]),s._v(" "),e("h3",{attrs:{id:"二、搭建vuepress项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、搭建vuepress项目"}},[s._v("#")]),s._v(" 二、搭建vuepress项目")]),s._v(" "),e("p",[s._v("1️⃣ "),e("strong",[s._v("全局安装vuepress")]),s._v(" "),e("code",[s._v("npm install -g vuepress")]),e("br"),s._v("\n2️⃣ "),e("strong",[s._v("初始化项目")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir vurpressBlog  \ncd vurpressBlog\nnpm init  \nmkdir docs\ncd docs\ntouch README.md  \nmkdir .vuepress\ncd .vuepress\nmkdir .public\ntouch config.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("🎄项目结构")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".\n├─ docs\n│  ├─ README.md      homepage信息\n│  └─ .vuepress\n│     ├─ public      存放静态文件如favicon.ico\n│     └─ config.js   项目配置文件\n└─ package.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("3️⃣ "),e("strong",[s._v("配置文件")]),e("br"),s._v("\n  ✧ package.json：添加两条启动命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('"scripts": {\n        "dev": "vuepress dev docs", //启动项目\n        "build": "vuepress build docs" //打包项目\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("此时运行 "),e("code",[s._v("npm run dev")]),s._v(" 就可以打开页面了"),e("br"),s._v("\n  ✧ config.js：添加以下代码，并根据路径创建相关文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("module.exports = {\n    title: 'blog_title', //网页标题\n    decription: 'sss', //网页描述\n    // 注入到当前页面的 HTML <head> 中的标签\n    head: [\n        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)放在pulic文件夹下\n    ],\n    base: '/', //这是部署到github相关的配置\n    markdown: {\n        lineNumbers: true //代码块显示行号\n    },\n    themeConfig: {\n        sidebarDepth: 2, \n        lastUpdated: 'Last Updated', //文档更新时间：每个文件git最后提交的时间\n        // 头部导航栏\n        nav:[\n            {text: 'nav1', link: 'blog/guild'}, //内部链接以docs为根目录\n            { text: 'Typing', link:'https://www.keybr.com/'}, //外部链接\n            {text: 'list',\n                items:[\n                    { text: '设计导航', link:'http://hao.shejidaren.com/'},\n                    { text: 'Typing', link:'https://www.keybr.com/'}\n                ]\n            } //下拉列表\n        ],\n        sidebar: {\n             // 侧边栏在 /blog/上\n             '/blog/': [\n                {\n                    title:'blog',\n                    collapsable: true,\n                    children: [\n                        {\n                            title:'blog1',\n                            collapsable: true,\n                            children: [\n                                ['/blog/guild','blog11'],\n                                ['/blog/guild','blog12']\n                            ]\n                        },\n                        {\n                            title:'blog2',\n                            collapsable: true,\n                            children: [\n                                ['/blog/guild','blog12']\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n}  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br")])]),e("p",[e("img",{attrs:{src:a(204),alt:"vuepress_3.png"}}),s._v("\n  ✧ README.md：添加以下代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("---\nhome: true\nheroImage: /header-bg.jpg\nheroText: 👩‍💻\ntagline: Cogito Ergo Sum\nactionText: Banana\nactionLink: /guild/install\nfeatures:\n- title: '今天也要加油鸭🦆'\n  details: '咸鱼🐟漫步，每天进步一点点🤪！'\n- title: 'HAPPY NEW YEAR🎇'\n  details: Only if you ask to see me,our meeting would be meaningful to me.\nfooter: © 2020-present Six_Banana\n---\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[e("img",{attrs:{src:a(205),alt:"vuepress_2"}})]),s._v(" "),e("h3",{attrs:{id:"三、部署到github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、部署到github"}},[s._v("#")]),s._v(" 三、部署到GIthub")]),s._v(" "),e("p",[s._v("1️⃣ "),e("strong",[s._v("配置base")]),e("br"),s._v("\n ① 如果你打算发布到 "),e("code",[s._v("https://<USERNAME>.github.io/")]),s._v(",base 设为 "),e("code",[s._v('base: "/"')]),s._v('。（ base 默认即是 "/"。）'),e("br"),s._v("\n ② 如果你打算发布到 "),e("code",[s._v("https://<USERNAME>.github.io/<REPO>/")]),s._v("（也就是说你的仓库在 "),e("code",[s._v("https://github.com/<USERNAME>/<REPO>")]),s._v("）,则将 base 设置为 "),e("code",[s._v('base: "/<REPO>/"')]),s._v("。"),e("br"),s._v("\n2️⃣ "),e("strong",[s._v("命令行推送")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd docs/.vuepress/dist //npm run build 将项目打包到dist文件夹，需要注意的是推到线上的是dist文件夹里面的内容（已经将md文件渲染成html文件）\ngit init \ngit add .\ngit commit -m 'update'\ngit push https://github.com/<USERNAME>/<REPO>.git master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("💁‍♀️然后访问"),e("code",[s._v("https://<USERNAME>.github.io")]),s._v("见证奇迹（第一次可能延时个一分钟左右）")]),s._v(" "),e("p",[s._v("3️⃣ "),e("strong",[s._v("脚本推送")]),e("br"),s._v("\n ① 在project的根目录下，创建一个deploy.sh文件：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run docs:build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\n# echo 'www.example.com' > CNAME\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 \n# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master\ngit pudh -f https://github.com/banana6hz/Work.git master\n# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目\n# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\n\ncd -\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("p",[s._v(" ② 设置package.json：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  "scripts": {\n    "d": "bash deploy.sh"\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v(" ③ 执行命令："),e("code",[s._v("npm run d")]),e("br"),s._v("\n🎄项目结构")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".\n├─ docs\n│  ├─ .vuepress\n│  |  ├─ dist\n│  |  ├─ public\n|  |  └─ config.js\n|  ├─ blog\n|  |  └─ guild.md\n│  └─ README.md\n├─ node_modules\n└─ package.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("💢💢💢 偶尔会出现这样的页面❌那就再build一次再push就好了"),e("br"),s._v(" "),e("img",{attrs:{src:a(206),alt:"vuepress_4.png"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);