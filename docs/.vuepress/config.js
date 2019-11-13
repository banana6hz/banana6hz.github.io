module.exports = {
    title: 'Here I am',
    description: 'Banana_Blog',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav:[
            { text: 'Blog', link: '/blog/guild' }, // 内部链接 以docs为根目录
            { text: 'Photos',  link: '/photos/guild'}, // 内部链接 以docs为根目录
            { text: 'Libraly', 
              items: [
                  { text: 'Emoji', link:'https://www.webfx.com/tools/emoji-cheat-sheet/'},
                  { text: 'Markdown', link:'https://www.jianshu.com/p/191d1e21f7ed'}]// 外部链接
            }, 
            // 下拉列表
            {
            text: 'About Me',
            items: [
                { text: 'GitHub地址', link: 'https://github.com/banana6hz' },
            ]
            }        
        ],
        sidebar: {
            // 侧边栏在 /blog/上
            '/blog/': [
                {
                    title:'工具',
                    collapsable: true,
                    children: [
                        {
                            title:'Git',
                            collapsable: true,
                            children: [
                                ['/blog/tool/git/guild','Git指南'],
                                ['/blog/tool/git/bug','踩坑记录']
                            ]
                        },
                        {
                            title:'vuepress',
                            collapsable: true,
                            children: [
                                ['/blog/tool/vuepress/guild','vuepress指南']
                            ]
                        },
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
                                ['/blog/vue/guild','Vue指南']
                            ]
                        },
                    ]
                },
                {
                    title:'zaza',
                    collapsable: true,
                    children: [
                        {
                            title:'zaza',
                            collapsable: true,
                            children: [
                                ['/blog/zaza/moyutogether','moyutogether']
                            ]
                        },
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
            ]
          }
    }
}