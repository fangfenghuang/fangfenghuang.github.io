一个基于vuepress-theme-vdoing + github page + markdown生成的个人网站

- 不需要购买服务器
- markdown文本格式，你可以随时随地随心所欲写博客
- 免费优秀的博客主题任你切换
- 简单的更新博文方式，构建简单
- 依托github，便于版本管理

当前代码为博客源码，博客网页为静态部署，静态网站发布分支（pages source）为gh-pages

（本来想找一个不需要编译的markdown文本静态网站框架，没找到，好在编译也不太复杂整体更新不算麻烦）

**[博客首页]** [https://fangfenghuang.github.io](https://fangfenghuang.github.io)


# 博客框架说明

* 博文内容（markdown格式）放置于docs目录分类目录下
* 当前博客分为两大类：01.技术杂谈 02.生活随写
* 添加文章头部信息：按序号添加分类文章，添加分类（目录相关）、标签（自定义）(建议添加，如果不添加编译时会自动添加模板)
* 修改导航：docs/.vuepress/config/themeConfig/nav.js
* 修改首页布局：docs/index.html
* 更新博客主题：docs\.vuepress\config.js：  theme: 'vdoing'
* 全局搜索fangfenghuang.github.io查看相关配置

# 部署

## 前提

* 创建自己的githubpage仓库，如：fangfenghuang.github.io，设置pages的source为gh-pages
* git clone https://github.com/fangfenghuang/fangfenghuang.github.io.git
* 本地安装npm yarn node

## 本地调试
```bash
$ npm install # or yarn install
$ npm run dev # or yarn dev
> VuePress dev server listening at http://localhost:8080/
```

## 发布
* 编译源码推送至master分支
* docs/.vuepress/dist目录下静态页面推送至gh-pages分支即可完成发布

- 手动编译
```bash
npm run build # or yarn build
```
编译完成后自行推送到github，注意源码推送至master分支，docs/.vuepress/dist目录下静态页面推送至gh-pages分支

- 脚本编译+推送
```bash
sh deploy.sh
```

- GitHub Actions自动构建GitHub Pages 
TODO

## 更新说明
- 随心所欲，爱更不更
- 私人记录，不为共享
- 源码随时更，gh-pages不一定发布

# 参考

+ https://www.vuepress.cn/guide/getting-started.html  快速上手
+ https://doc.xugaoyi.com/pages/a20ce8/    vuepress-theme-vdoing文档
+ https://github.com/xugaoyi/vuepress-theme-vdoing vuepress-theme-vdoing源码


# 注意事项

+ permalink不要写重复，否则错误信息可能不会太明显
+ md文件标题从二级标题开始
