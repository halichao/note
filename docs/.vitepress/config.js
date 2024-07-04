module.exports = {
    title: 'woodlc开发笔记',
    logo:'logo.png',
    description: 'Just playing around.',
    themeConfig:{
        //导航栏
        nav:[
            {
                text:"php",
                items:[
                    {text:'入门',link:'/php/入门'},
                ]
            },
            {
              text:"前端",
              items:[
                  {text:'uniapp',link:'/vue/uniapp/'},
              ]
            },
            {
                text:"关于",
                items:[
                    {text:'Gitee',link:'https://gitee.com/woodlc'},
                ]
            }
        ],
        //搜索
        search: {
            provider: 'local'
        },
        //社交属性
        socialLinks: [
            { icon: 'github', link: 'https://gitee.com/woodlc' },
            // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            // { icon: 'twitter', link: '...' },
            // 也可以通过自定义的方式
            // {
            //   icon: {
            //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
            //   },
            //   link: '...'
            // }
          ],
          footer: {
            message: 'woodlc',
            copyright: ' © 2024-vitepress'
          },
          //侧边栏
          sidebar: {
            '/vue/uniapp/':[
              {
                text: '介绍',
                link: '/vue/uniapp/'
              },
              {
                text: '页面设置',
                link: '/vue/uniapp/设置'
              },
              {
                text: '组件',
                items: [
                  {text: '签名', link: '/vue/uniapp/实现签名'},
                ]
              }
            ]
          }
    }
  }