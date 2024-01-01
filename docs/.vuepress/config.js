module.exports = {
  title: '我的 VuePress 博客',
  description: '欢迎访问我的个人博客',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about/' }
      // 更多导航链接...
    ],
    sidebar: 'auto'
  }
  // 其他配置...
};

