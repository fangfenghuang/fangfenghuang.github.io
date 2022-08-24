// nav
//快捷链接
module.exports = [
  { text: '首页', link: '/' },
  { text: '学习',link: '/tech/',
  },
  { text: '生活',link: '/life/',
    items: [
      { text: '养桃日记', link: '/pages/ythx/'},
    ]
  },
  { text: '关于', link: '/about/',
  },
  { text: '索引', link: '/categories/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
      {
        items: [
          { text: 'github', link: 'https://github.com/fangfenghuang' },
          { text: 'scdn', link: 'https://blog.csdn.net/qq_26572567' },
          { text: '知乎', link: 'https://www.zhihu.com/people/huangfangfeng-20' },
          { text: 'linkin', link: 'https://www.linkedin.com/' },
        ]
      }
    ],
  },
  {
    text: '阅读', link: '/books/',
    items: [
      {
        items: [
          { text: '书单', link: '/books/' },
          { text: '电子书', link: '/pages/dianzishu/' },
          { text: '优质博客', link: '/pages/yzbook/' },
        ]
      }
    ],
  },
]