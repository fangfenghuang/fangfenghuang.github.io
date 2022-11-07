(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{359:function(a,s,e){"use strict";e.r(s);var t=e(0),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"kubelet-使用的目录所在磁盘爆满"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubelet-使用的目录所在磁盘爆满"}},[a._v("#")]),a._v(" Kubelet 使用的目录所在磁盘爆满")]),a._v(" "),s("p",[a._v("kubelet 默认使用的目录\n/var/lib/kubelet ：通过 kubelet 的 --root-dir 参数指定，用于存储插件信息、Pod 相关的状态以及挂载的\nvolume（例如， emptyDir 、 ConfigMap 及 Secret ）。")]),a._v(" "),s("p",[a._v("现象： 新建 Pod 时无法成功进行 mkdir，导致 Sandbox 也无法创建成功")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Warning UnexpectedAdmissionError 44m kubelet, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.22")]),a._v(".0.44 Update plugin resources failed d\nue to failed to "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("write")]),a._v(" checkpoint "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"kubelet_internal_checkpoint"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("write")]),a._v(" /var/lib/kubelet/deviceplugins/.728425055: no space left on device, "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" is unexpected.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("处理方式：")]),a._v(" "),s("ol",[s("li",[a._v("手动删除 docker 的部分 log 文件或可写层文件。通常删除 log 文件，示例如下：")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /var/lib/docker/containers\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" -sh * "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 找到比较大的目录")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" dda02c9a7491fa797ab730c1568ba06cba74cecd4e4a82e9d90d00fa11de743c\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" dda02c9a7491fa797ab730c1568ba06cba74cecd4e4a82e9d90d00fa11de74\n3c-json.log.9 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除log文件")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("执行以下命令，将该 Node 标记为不可调度，并将其已有的 Pod 驱逐到其它节点。\nkubectl drain "),s("node-name")],1),a._v(" "),s("li",[a._v("systemctl restart dockerd")]),a._v(" "),s("li",[a._v("kubectl uncordon "),s("node-name")],1)]),a._v(" "),s("h2",{attrs:{id:"查看文件io是否高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件io是否高"}},[a._v("#")]),a._v(" 查看文件io是否高")]),a._v(" "),s("p",[a._v("有时节点在低 cpu ‘us’ (user) 、高 cpu ‘id’ (idle) 的条件下，仍会出现负载很高的情况。通常是由于文件\nIO 性能达到瓶颈，导致 IO Wait 过多，使节点整体负载升高，影响其它进程的性能。\n本文以 top、atop 及 iotop 工具为例，来判断磁盘 I/O 是否正在降低应用性能。")]),a._v(" "),s("p",[a._v("top:可查看核的 wa 值，wa（wait）表示 IO WAIT 的 CPU 占用。默认显示所有核的平均值，按\n1查看每个核的 wa 值。如\nwa 通常为0%，如果经常浮动在1%之上，说明存储设备的速度已经太慢，无法跟上 CPU 的处理速\n度。\natop:查看 busy， 继续在该界面按 d，可查看哪些进程正在使用磁盘 IO。\niotop -oPa：查看哪些进程占用磁盘 IO")]),a._v(" "),s("h2",{attrs:{id:"容器抓包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器抓包"}},[a._v("#")]),a._v(" 容器抓包")])])}),[],!1,null,null,null);s.default=n.exports}}]);