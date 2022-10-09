(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{376:function(r,a,t){"use strict";t.r(a);var e=t(0),i=Object(e.a)({},(function(){var r=this,a=r._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("p",[r._v("Docker的多架构支持是基于不同cpu的架构而不是不同操作系统的架构")]),r._v(" "),a("h2",{attrs:{id:"跨-cpu-架构编译程序的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨-cpu-架构编译程序的方法"}},[r._v("#")]),r._v(" 跨 CPU 架构编译程序的方法")]),r._v(" "),a("ol",[a("li",[r._v("直接在目标硬件上编译（常用）")]),r._v(" "),a("li",[r._v("模拟目标硬件")]),r._v(" "),a("li",[r._v("通过 binfmt_misc 模拟目标硬件的用户空间")]),r._v(" "),a("li",[r._v("使用交叉编译器")])]),r._v(" "),a("h2",{attrs:{id:"buildx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buildx"}},[r._v("#")]),r._v(" buildx")]),r._v(" "),a("p",[r._v("Docker 19.03 引入的插件 buildx\nbuildx 会通过 QEMU 和 binfmt_misc 分别为不同的 CPU 架构（arm，arm64 和 amd64等）构建不同的镜像。构建完成后，就会创建一个 manifest list，其中包含了指向这些镜像的指针。")]),r._v(" "),a("h3",{attrs:{id:"环境要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[r._v("#")]),r._v(" 环境要求")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("要确保 Docker 版本不低于 19.03，同时还要通过设置环境变量 DOCKER_CLI_EXPERIMENTAL 来启用")])]),r._v(" "),a("li",[a("p",[r._v("如果你使用的是 Linux，需要手动启用 binfmt_misc\n大多数 Linux 发行版都很容易启用，不过还有一个更容易的办法，直接运行一个特权容器，容器里面写好了设置脚本：\n🐳 → docker run --rm --privileged docker/binfmt:66f9012c56a8316f9244ffd7622d7c21c1f6f28d\n建议将 Linux 内核版本升级到 4.x 以上，特别是 CentOS 用户，你可能会遇到错误。\ncat /proc/sys/fs/binfmt_misc/qemu-aarch64")])]),r._v(" "),a("li",[a("p",[r._v("Docker 默认会使用不支持多 CPU 架构的构建器，我们需要手动切换。\n先创建一个新的构建器：docker buildx create --use --name mybuilder\n启动构建器： docker buildx inspect mybuilder --bootstrap\n查看当前使用的构建器及构建器支持的 CPU 架构：docker buildx ls")])])]),r._v(" "),a("h3",{attrs:{id:"构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[r._v("#")]),r._v(" 构建镜像")]),r._v(" "),a("p",[r._v("docker buildx build -t yangchuansheng/hello-arch --platform=linux/arm,linux/arm64,linux/amd64 . --push")]),r._v(" "),a("p",[r._v("如果想将构建好的镜像保存在本地，可以将 type 指定为 docker，但必须分别为不同的 CPU 架构构建不同的镜像，不能合并成一个镜像\n🐳 → docker buildx build -t yangchuansheng/hello-arch --platform=linux/arm -o type=docker .\n🐳 → docker buildx build -t yangchuansheng/hello-arch --platform=linux/arm64 -o type=docker .\n🐳 → docker buildx build -t yangchuansheng/hello-arch --platform=linux/amd64 -o type=docker .")])])}),[],!1,null,null,null);a.default=i.exports}}]);