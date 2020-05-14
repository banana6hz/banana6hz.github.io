module.exports = {
    title: 'LIUHZ`sBLOG',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        // lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        // lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav:[
            { text: 'Blog', link: '/blog/basic/html/guild' }, // 内部链接 以docs为根目录
            // { text: 'Photos',  link: '/photos/guild'}, // 内部链接 以docs为根目录
            // { text: 'Debug',link: '/debug/css'}, 
            { text: 'Debug',link: '/debug/css'},
            { text: 'Interview',link: '/interview/guild'},
            { text: 'Libraly', 
              items: [
                  { text: 'Emoji', link:'https://www.webfx.com/tools/emoji-cheat-sheet/'},
                  { text: '在线工具', link:'https://tool.oschina.net/commons'},
                  { text: '设计导航', link:'http://hao.shejidaren.com/'},
                  { text: 'Typing', link:'https://www.keybr.com/'}
                ]// 外部链接
            },             
            { text: 'Books',link: '/books/guild'},
            // 下拉列表
            { text: 'About Me',
              items: [
                  { text: 'GitHub地址', link: 'https://github.com/banana6hz' },
              ]
            }        
        ],
        sidebar: {
            // 侧边栏在 /blog/上
            '/blog/': [
                {
                    title:'基础',
                    collapsable: true,
                    children: [
                        {
                            title:'HTML',
                            collapsable: true,
                            children: [
                                ['/blog/basic/html/guild','HTML基础']
                            ]
                        },
                        {
                            title:'CSS',
                            collapsable: true,
                            children: [
                                ['/blog/basic/css/guild','css基础'],
                                ['/blog/basic/css/flex','flex布局']
                            ]
                        },
                        {
                            title:'Javascript',
                            collapsable: true,
                            children: [
                                ['/blog/basic/javascript/guild','js基础'],
                                ['/blog/basic/javascript/browserRendering','浏览器渲染'],
                                // ['/blog/basic/javascript/event','js单线程'],
                                ['/blog/basic/javascript/eventloop','js循环机制']
                            ]
                        },
                        {
                            title:'net',
                            collapsable: true,
                            children: [
                                ['/blog/basic/net/http','HTTP协议'],
                                ['/blog/basic/net/tcp','TCP/IP协议'],
                                ['/blog/basic/net/session_cookie','cookie与session'],
                            ]
                        }
                    ]
                },
                {
                    title:'工具',
                    collapsable: true,
                    children: [
                        {
                            title:'Git',
                            collapsable: true,
                            children: [
                                ['/blog/tool/git/guild','Git指南']
                                // ['/blog/tool/git/bug','踩坑记录']
                            ]
                        },
                        {
                            title:'vuepress',
                            collapsable: true,
                            children: [
                                ['/blog/tool/vuepress/guild','vuepress指南']
                            ]
                        },
                        {
                            title:'markdown',
                            collapsable: true,
                            children: [
                                ['/blog/tool/markdown/guild','markdown指南']
                            ]
                        }
                    ]
                },
                {
                    title:'框架',
                    collapsable: true,
                    children: [
                        {
                            title:'Vue',
                            collapsable: true,
                            children: [
                                // ['/blog/vue/guild','Vue指南'],
                                ['/blog/vue/myvue','vue手动搭建'],
                                ['/blog/vue/vuelife','vue生命周期'],
                                ['/blog/vue/mock','mock假数据']
                            ]
                        },
                        {
                            title:'Koa',
                            collapsable: true,
                            children: [
                                ['/blog/koa/koaGuild','koa指南']
                            ]
                        }
                    ]
                },
                {
                    title:'实现',
                    collapsable: true,
                    children: [
                        ['/blog/zaza/center','水平垂直居中'],
                    ]
                }
            ],
            // 侧边栏在 /debug/ 上
            '/debug/': [
                {
                    title: 'css', 
                    collapsable: true,
                    children: [
                        [ '/debug/css','css']
                    ]
                },
                { 
                    title: 'js', 
                    collapsable: true,
                    children: [
                        [ '/debug/js','js']
                    ]
                },
                { 
                    title: 'net', 
                    collapsable: true,
                    children: [
                        [ '/debug/net','net']
                    ]
                }
            ],
            // 侧边栏在 /photos/ 上
            '/photos/': [
                {
                    title:'view',
                    collapsable: true,
                    children: [
                        ['/photos/view','view']
                    ]
                },
                {
                    title:'eat',
                    collapsable: true,
                    children: [
                        ['/photos/eat', 'eat']
                    ]
                },
            ],
            // '/debug/': [
            //     {
            //         title:'js',
            //         collapsable: true,
            //         children: [
            //             ['/debug/js/01','js']
            //         ]
            //     },
            //     {
            //         title:'css',
            //         collapsable: true,
            //         children: [
            //             ['/debug/css/css', 'css']
            //         ]
            //     },
            //     {
            //         title:'net',
            //         collapsable: true,
            //         children: [
            //             ['/debug/net/net', 'net'],
            //         ]
            //     },
            // ],
            '/interview/': [
                {
                    title: 'interview',
                    collapsable: true,
                    children: [
                        ['/interview/css/css01', 'CSS'],
                        ['/interview/js/js01','Js'],
                        ['/interview/vue/vue01','Vue'],
                        ['/interview/es6/es6_01','Es6'],
                        {
                            title:'计算机网络',
                            collapsable: true,
                            children: [
                                ['/interview/net/url','输入URL到页面渲染出来，浏览器经历了什么？']
                            ]
                        },
                    ]
                }
            ],
        }
    }
}
/*
                           \\\|||///
                            \\|||//
                            ———————
                           /(.)-(.)\
                     O     \   v   /
                    / \     ———————
                    | |   / |     | \
                    | |\_/  |     |  \
                    | |     |_____|   \
                    | |    / / | \ \   O
                    | |   / /  |  \ \ 
                    | |  / /   |   \ \

                 へ         ／| 
                     /＼7    ∠＿/ 
                    / │     ／ ／ 
                   │ Z ＿,＜ ／   /`ヽ 
                   │       ヽ    /   〉
                    Y       `   /   / 
                   ｲ● ､ ●   ⊂⊃〈   /
                   () へ       | ＼〈
                    >ｰ ､_   ィ │ ／／ 
                    / へ   / ﾉ＜| ＼＼ 
                    ヽ_ﾉ  (_／  │／／ 
                    7           |／ 
                    ＞―r￣￣`ｰ―＿
*/