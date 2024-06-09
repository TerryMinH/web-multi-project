/*
 * @Author: TerryMin
 * @Date: 2022-06-08 15:11:56
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-08 16:10:33
 * @Description: file not
 */
module.exports = {
  title: 'Hello VitePress', // 标题
  description: 'Just playing around.', // 副标题
  themeConfig: {
    // 顶部导航栏内容
    nav: [{ text: '指南', link: '/guide/' }],
    logo: '/logo.svg',
    siteTitle: 'Hello World',
    // 侧边栏导航内容
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            { text: '介绍', link: '/guide/' },
            { text: '快速上手', link: '/guide/getting-started' },
          ],
        },
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  },
};
