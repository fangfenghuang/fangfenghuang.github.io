(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{339:function(s,e,t){"use strict";t.r(e);var n=t(0),a=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"cordns域名解析alpine镜像不兼容问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cordns域名解析alpine镜像不兼容问题"}},[s._v("#")]),s._v(" cordns域名解析alpine镜像不兼容问题")]),s._v(" "),e("blockquote",[e("p",[s._v("20220622")])]),s._v(" "),e("p",[s._v("alpine版本兼容性问题会导致backend pod里cordns解析失败\ndocker镜像是使用alpine作为底包，如果版本不匹配会导致域名解析问题\nhttps://stackoverflow.com/questions/65181012/does-alpine-have-known-dns-issue-within-kubernetes\nhttps://kubernetes.io/zh-cn/docs/tasks/administer-cluster/dns-debugging-resolution/\nhttps://github.com/kubernetes-sigs/kind/issues/2418")]),s._v(" "),e("h2",{attrs:{id:"kata-monitor宿主机服务对kata-deploy的影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kata-monitor宿主机服务对kata-deploy的影响"}},[s._v("#")]),s._v(" kata-monitor宿主机服务对kata-deploy的影响")]),s._v(" "),e("p",[s._v("重启服务器会导致kata-deploy起不来")]),s._v(" "),e("h2",{attrs:{id:"containerd重启不影响容器进程-docker也可以"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#containerd重启不影响容器进程-docker也可以"}},[s._v("#")]),s._v(" containerd重启不影响容器进程；docker也可以")]),s._v(" "),e("h2",{attrs:{id:"重启服务器containerd启动超时问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启服务器containerd启动超时问题"}},[s._v("#")]),s._v(" 重启服务器containerd启动超时问题")]),s._v(" "),e("p",[s._v("https://github.com/containerd/containerd/issues/5597")]),s._v(" "),e("h2",{attrs:{id:"golang-mkdir-777-权限问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#golang-mkdir-777-权限问题"}},[s._v("#")]),s._v(" golang mkdir 777 权限问题")]),s._v(" "),e("p",[s._v("https://github.com/golang/go/issues/15210\nhttps://zhuanlan.zhihu.com/p/33692995")]),s._v(" "),e("h2",{attrs:{id:"k8s-nodename指定节点时资源不足导致failed-pod不断创建-如cpu-mem-gpu资源不足"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#k8s-nodename指定节点时资源不足导致failed-pod不断创建-如cpu-mem-gpu资源不足"}},[s._v("#")]),s._v(" k8s nodename指定节点时资源不足导致failed pod不断创建，如cpu/mem/gpu资源不足")]),s._v(" "),e("p",[s._v("pod.spec.nodeName将Pod直接调度到指定的Node节点上，会【跳过Scheduler的调度策略】，该匹配规则是【强制】匹配。可以越过Taints污点进行调度。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Node didn"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t have enough resource: cpu, requested: 100000, used: 1440, capacity: 7800\n\nEvents:\n  Type     Reason    Age    From             Message\n  ----     ------    ----   ----             -------\n  Warning  OutOfcpu  4m19s  kubelet, tztest  Node didn'")]),s._v("t have enough resource: cpu, requested: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),s._v(", used: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1440")]),s._v(", capacity: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7800")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pod -n hff")]),s._v("\nNAME                        READY   STATUS     RESTARTS   AGE\nhff-sts-0                   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          53d\nweb-demo-799fccc7dd-295bk   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     OutOfcpu   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          7s\nweb-demo-799fccc7dd-7z6fm   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     OutOfcpu   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          11s\nweb-demo-799fccc7dd-n6jzz   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     OutOfcpu   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          5s\nweb-demo-799fccc7dd-ph4vt   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     OutOfcpu   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          18s\nweb-demo-799fccc7dd-rqhk5   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     OutOfcpu   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3s\nweb-demo-799fccc7dd-t74r7   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     OutOfcpu   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          13s\nweb-demo-799fccc7dd-tqhv5   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     OutOfcpu   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          9s\nweb-demo-799fccc7dd-xcldr   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     OutOfcpu   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          15s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);