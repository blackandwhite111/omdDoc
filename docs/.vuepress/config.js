module.exports = {
    title: 'OMD项目前端文档',
    description: 'OMD项目前端文档',
    base: '/',
    head: [
        [
            'link',
            {rel: 'icon', href: '/images/favicon.ico'}
        ]
    ],
    themeConfig: {
        logo: '/images/favicon.ico',
        nav: [
            { text: '首页', link: '/' },
            { text: 'Gitlab', link: 'http://106.15.88.88/vms/vms-react' },
        ],
        sidebarDepth: 3,
        sidebar: {
            '/zh/introduce/':[
                {
                    title: '开始',   // 必要的
                    path: '/zh/introduce/begin',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    // sidebarDepth: 0,    // 可选的, 默认值是 1
                    // children: [
                    //     ''
                    // ]
                },
                {
                    title: '项目简介',
                    path: '/zh/introduce/project',
                },
                {
                    title: '公共组件',
                    path: '/zh/introduce/components',
                },
                {
                    title: '公共组件-奥迪',
                    path: '/zh/introduce/componentsAudi',
                },
                {
                    title: 'Hooks',
                    path: '/zh/introduce/hooks',
                },
                {
                    title: '打包和部署',
                    path: '/zh/introduce/build',
                }
            ],
        },
    },
    plugins: [
        ['vuepress-plugin-code-copy', true]
    ]
}