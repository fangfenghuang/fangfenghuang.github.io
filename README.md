一个基于vuepress-theme-vdoing + github page + markdown生成的个人网站
当前代码为博客源码，博客网页为静态部署，发布分支（pages source）为gh-pages

**[博客首页]** [https://fangfenghuang.github.io](https://fangfenghuang.github.io)


# 添加博文说明

* 博文内容（markdown格式）放置于docs目录分类目录下
* 当前博客分为两大类：01.技术杂谈 02.生活随写
* 按序号添加分类文章，添加标签、分类(建议，如果不添加编译时会自动添加模板)
* 增加导航链接：docs\.vuepress\config\themeConfig\nav.js
* 修改首页布局：docs\index.html

# 部署

## 前提

* 创建自己的githubpage仓库，如：fangfenghuang.GitHub.io，设置pages的source为gh-pages
* git clone https://github.com/fangfenghuang/fangfenghuang.GitHub.io.git
* 本地安装npm yarn node

## 本地调试
```bash
$ npm install # or yarn install
$ npm run dev # or yarn dev
> VuePress dev server listening at http://localhost:8080/
```


## 发布

* 编译源码推送至master分支
* docs/.vuepress/dist目录下静态页面推送至gh-pages分支


```bash
#（deploy.sh）
npm run build # or yarn build
```


# 参考

+ https://www.vuepress.cn/guide/getting-started.html  快速上手
+ https://doc.xugaoyi.com/pages/a20ce8/    vuepress-theme-vdoing文档
+ https://github.com/xugaoyi/vuepress-theme-vdoing vuepress-theme-vdoing源码


# 注意事项

+ permalink不要写重复，否则错误信息可能不会太明显
