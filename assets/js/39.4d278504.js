(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{365:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("系统管理程序 hypervisor将启动一个虚拟机，该虚拟机包括最小的 虚拟机内核和虚拟机镜像。")]),t._v(" "),a("h1",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hypervisor.qemu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\npath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/opt/kata/bin/qemu-system-x86_64"')]),t._v("\nkernel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/opt/kata/share/kata-containers/vmlinux.container"')]),t._v("\nimage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/opt/kata/share/kata-containers/kata-containers.img"')]),t._v("\nmachine_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"q35"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Kernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n Path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/opt/kata/share/kata-containers/vmlinux-5.15.23-89"')]),t._v("\n Parameters "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"systemd.unit=kata-containers.target systemd.mask=systemd-networkd.service systemd.mask=systemd-networkd.socket scsi_mod.scan=none agent.debug_console agent.debug_console_vport=1026"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n Path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/opt/kata/share/kata-containers/kata-clearlinux-latest.image"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Initrd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n Path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h1",{attrs:{id:"guest-kernel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guest-kernel"}},[t._v("#")]),t._v(" Guest kernel")]),t._v(" "),a("p",[t._v("用于启动VM。Kata-container高度优化了内核启动时间和极小的内存占用，只用于一个容器的运行。")]),t._v(" "),a("h1",{attrs:{id:"guest-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guest-image"}},[t._v("#")]),t._v(" Guest image")]),t._v(" "),a("p",[t._v("支持基于initrd和rootfs(image)的最小镜像，默认包中提供一个镜像和一个initrd，他们都是通过osbuilder生成的。")]),t._v(" "),a("h2",{attrs:{id:"image-type-rootfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-type-rootfs"}},[t._v("#")]),t._v(" image type(rootfs)")]),t._v(" "),a("p",[t._v("默认的 root filesystem image (有时称为mini O/S)是一个基于 Clear Linux 的高度优化的容器引导系统。它提供了一个极小的环境，并有一个高度优化的引导路径。")]),t._v(" "),a("h2",{attrs:{id:"initrd-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initrd-type"}},[t._v("#")]),t._v(" initrd type")]),t._v(" "),a("p",[t._v("压缩的 cpio(1) 文件，从 rootfs （被载入内存并作为 linux 启动过程的一部分被使用）创建。")]),t._v(" "),a("p",[t._v("Kata 运行时配置文件中的initrd和image选项之一"),a("strong",[t._v("必须")]),t._v("设置，但"),a("strong",[t._v("不能同时")]),t._v("设置。选项之间的主要区别在于initrd(10MB+) 的大小明显小于 rootfs image(100MB+)。")]),t._v(" "),a("p",[t._v("通过initrd=和image=配置决定使用哪一个类型")]),t._v(" "),a("h1",{attrs:{id:"最小镜像极度简化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最小镜像极度简化"}},[t._v("#")]),t._v(" 最小镜像极度简化")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kata-containers/kata-containers/issues/2010",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kata-containers/kata-containers/issues/2010"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"内核构建build-kernel-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内核构建build-kernel-sh"}},[t._v("#")]),t._v(" 内核构建build-kernel.sh")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kata-containers/kata-containers/tree/main/tools/packaging/kernel",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kata-containers/kata-containers/tree/main/tools/packaging/kernel"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./build-kernel.sh -v "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.10")]),t._v(".25 -g nvidia -f -d setup\n· -v "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.10")]),t._v(".25：指定来宾内核版本。\n· -g nvidia: 构建一个支持 Nvidia GPU 的来宾内核。\n· -f:.config即使内核目录已经存在也强制生成文件。\n· -d: 启用 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" 调试模式。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("添加补丁：${GOPATH}/src/github.com/kata-containers/kata-containers/tools/packaging/kernel/patches/")]),t._v(" "),a("p",[t._v("内核配置：${GOPATH}/src/github.com/kata-containers/kata-containers/tools/packaging/kernel/configs/")]),t._v(" "),a("h1",{attrs:{id:"osbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osbuilder"}},[t._v("#")]),t._v(" osbuilder")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kata-containers/kata-containers/tree/main/tools/osbuilder",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kata-containers/kata-containers/tree/main/tools/osbuilder"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"修改内核参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改内核参数"}},[t._v("#")]),t._v(" 修改内核参数")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Kernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n Path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/opt/kata/share/kata-containers/vmlinux-5.15.23-89"')]),t._v("\n Parameters "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"systemd.unit=kata-containers.target systemd.mask=systemd-networkd.service systemd.mask=systemd-networkd.socket scsi_mod.scan=none agent.debug_console agent.debug_console_vport=1026"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h1",{attrs:{id:"加载内核模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载内核模块"}},[t._v("#")]),t._v(" 加载内核模块")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/how-to-load-kernel-modules-with-kata.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/how-to-load-kernel-modules-with-kata.md"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"使用-kata-配置文件configuration-toml-全局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-kata-配置文件configuration-toml-全局"}},[t._v("#")]),t._v(" 使用 Kata 配置文件configuration.toml（全局）")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("kernel_modules =[ “ e1000e InterruptThrottleRate=3000,3000,3000 EEE=1 ” , “ i915 ” ]")]),t._v(" "),a("h2",{attrs:{id:"使用注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用注释"}},[t._v("#")]),t._v(" 使用注释")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("annotations:\n  io.katacontainers.config.agent.kernel_modules: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e1000e EEE=1; i915"')]),t._v("spec:\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h1",{attrs:{id:"使用-kata-设置sysctl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-kata-设置sysctl"}},[t._v("#")]),t._v(" 使用 Kata 设置sysctl")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/how-to-use-sysctls-with-kata.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/how-to-use-sysctls-with-kata.md"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("sysctl 使用 pod 的 securityContext 在 pod 上设置。securityContext 适用于同一 pod 中的所有容器。")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("v1kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Podmetadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sysctl-examplespec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("securityContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sysctls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kernel.shm_rmid_forced\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" net.ipv4.route.min_pmtu\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"552"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kernel.msgmax\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"65536"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("所有安全sysctls默认被开启")]),t._v(" "),a("p",[t._v("使用不安全的 sysctls，集群管理员需要允许这些：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ kubelet --allowed-unsafe-sysctls 'kernel.msg*,net.ipv4.route.min_pmtu' ...\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);