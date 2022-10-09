(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{367:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("https://github.com/kata-containers/kata-containers/blob/main/docs/design/kata-2-0-metrics.md")]),a._v(" "),s("p",[a._v("kata-monitor 进程运行在宿主机上，负责从各 Kata Containers 容器/VM中获取 metrics，并返回给 Prometheus。")]),a._v(" "),s("p",[a._v("默认情况下 kata-monitor 不需要指定参数，它会监听在本地的 8090 端口，这也是在 Prometheus 配置文件中 target 指定的端口号。如果要修改这个端口号，则需要注意两处要保持一致。")]),a._v(" "),s("h2",{attrs:{id:"kata-monitor启动方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kata-monitor启动方式"}},[a._v("#")]),a._v(" kata-monitor启动方式")]),a._v(" "),s("ol",[s("li",[a._v("kata节点运行kata-monitor守护进程")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat /etc/systemd/system/kata-monitor.service")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("kata monitor\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/kata/bin/kata-monitor -listen-address "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:8090\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("StartLimitInterval")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RestartSec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("multi-user.target\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("daemonset(？？没有镜像，手动编译不过)（TODO）")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ kubectl apply -f https://raw.githubusercontent.com/kata-containers/kata-containers/main/docs/how-to/data/kata-monitor-daemonset.yml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Once the daemonset is running, Prometheus should discover kata-monitor as a target. You can open http://"),s("hostIP",[a._v(":30909/service-discovery and find kubernetes-pods under the Service Discovery list")])],1),a._v(" "),s("ul",[s("li",[a._v("关于没有kata-monitor 镜像问题\nhttps://github.com/kata-containers/kata-containers/issues/2421")])]),a._v(" "),s("h2",{attrs:{id:"promethues增加scrape-configs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promethues增加scrape-configs"}},[a._v("#")]),a._v(" promethues增加scrape_configs")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("- job_name: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'kata'")]),a._v("\n    static_configs:\n    - targets: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<kata节点IP>:8090'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"导入-grafana-dashborad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入-grafana-dashborad"}},[a._v("#")]),a._v(" 导入 Grafana dashborad")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# curl -XPOST -i <grafana节点IP>:3000/api/dashboards/import \\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     -u admin:admin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v("dashboard"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[a._v('\\"')]),a._v(":"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sL https://raw.githubusercontent.com/kata-containers/kata-containers/main/docs/how-to/data/dashboard.json "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('}"')]),a._v("\n\nHTTP/1.1 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" Continue\n\nHTTP/1.1 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" OK\nContent-Type: application/json\nDate: Mon, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" May "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v(" 05:16:33 GMT\nContent-Length: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("253")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pluginId"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"title"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Kata containers"')]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"imported"')]),a._v(":true,"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"importedUri"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"db/kata-containers"')]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"importedUrl"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/d/75pdqURGk/kata-containers"')]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"slug"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dashboardId"')]),a._v(":0,"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"folderId"')]),a._v(":0,"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"importedRevision"')]),a._v(":1,"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"revision"')]),a._v(":1,"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"description"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"path"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"removed"')]),a._v(":false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h1",{attrs:{id:"监控指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控指标"}},[a._v("#")]),a._v(" 监控指标")]),a._v(" "),s("h2",{attrs:{id:"kata-containers-目前采集了下面几种类型的-metrics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kata-containers-目前采集了下面几种类型的-metrics"}},[a._v("#")]),a._v(" Kata Containers 目前采集了下面几种类型的 metrics：")]),a._v(" "),s("p",[a._v("Kata agent metrics：agent 进程的 metrics\nKata guest OS metrics：VM 中的 guest metrics\nHypervisor metrics：hypervisor 进程的 metrics（如果 hypervisor 本身提供了 metrics 接口，比如 firecracker，也会采集到 Kata Containers 的 metrics）\nKata monitor metrics：kata-monitor 进程的 metrics\nKata containerd shim v2 metrics：shimv2 进程的 metrics")]),a._v(" "),s("p",[a._v("在kata vm中/proc/"),s("pid",[a._v("/io  stat status等的数据\nkata_agent_io_stat代理进程 IO 统计\nkata_agent_process_cpu_seconds_total 以秒为单位花费的总用户和系统 CPU 时间。\nkata_agent_total_vm")])],1),a._v(" "),s("p",[a._v("在kata vm中/proc/stat  diskstats meminfo等的数据\nkata_guest_cpu_time\nkata_guest_diskstat\nkata_guest_load\nkata_guest_meminfo\nkata_guest_vm_stat")]),a._v(" "),s("p",[a._v("kata_hypervisor_io_stat 处理IO统计\nkata_hypervisor_proc_stat  进程统计")]),a._v(" "),s("p",[a._v("kata_shim_pod_overhead_cpu CPU 资源的 Kata Pod 开销（百分比）\nkata_shim_pod_overhead_memory_in_bytes Kata Pod 的内存资源开销（字节）")]),a._v(" "),s("h2",{attrs:{id:"promethues监控负载指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promethues监控负载指标"}},[a._v("#")]),a._v(" promethues监控负载指标")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("container_fs_writes_bytes_total")])]),a._v(" "),s("li",[s("p",[a._v("container_cpu_usage_seconds_total没有container字段")])]),a._v(" "),s("li")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('sum(irate(container_cpu_usage_seconds_total{namespace=~"${allNamespace}",pod=~"^${loadNames}",container!=""}[3m]))by(pod)\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"指标的性能与开销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指标的性能与开销"}},[a._v("#")]),a._v(" 指标的性能与开销")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("端到端（从 Prometheus 服务器到kata-monitor并kata-monitor写回响应）：20 毫秒（平均）")])]),a._v(" "),s("li",[s("p",[a._v("代理（从 shim 到agent的所有 RPC）：3 毫秒（平均）")])]),a._v(" "),s("li",[s("p",[a._v("Prometheus 默认scrape_interval为 1 分钟，但通常设置为 15 秒。较小scrape_interval会导致更多开销，因此用户应根据自己的监控需求进行设置。")]),a._v(" "),s("p",[a._v("Prometheus 发出的一个指标获取请求的大小。当没有 gzip 压缩时，计算预期大小的公式是："),s("br"),a._v("\n9 + (144 - 9) *"),s("code",[a._v("number of kata sandboxes")]),a._v("\nPrometheus支持gzip压缩. 启用后，每个请求的响应大小会更小："),s("br"),a._v("\n2 + (10 - 2) *"),s("code",[a._v("number of kata sandboxes")])])])]),a._v(" "),s("h1",{attrs:{id:"endpoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[a._v("#")]),a._v(" endpoint")]),a._v(" "),s("p",[s("code",[a._v("kata-monitor")]),a._v("公开了以下endpoint·：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/metrics")]),a._v("              : 获取 Kata 沙箱指标。")]),a._v(" "),s("li",[s("code",[a._v("/sandboxes")]),a._v("            : 列出主机上运行的所有 Kata 沙箱。")]),a._v(" "),s("li",[s("code",[a._v("/agent-url")]),a._v("            : 获取 Kata 沙箱的代理 URL。")]),a._v(" "),s("li",[s("code",[a._v("/debug/vars")]),a._v("           : Kata 运行时 shim 的内部数据。")]),a._v(" "),s("li",[s("code",[a._v("/debug/pprof/")]),a._v("         : Kata 运行时 shim 的 Golang 分析数据：索引页。")]),a._v(" "),s("li",[s("code",[a._v("/debug/pprof/cmdline")]),a._v(" : Kata 运行时 shim 的 Golang 分析数据："),s("code",[a._v("cmdline")]),a._v("endpoint。")]),a._v(" "),s("li",[s("code",[a._v("/debug/pprof/profile")]),a._v(" : Kata 运行时 shim 的 Golang 分析数据："),s("code",[a._v("profile")]),a._v("endpoint（CPU 分析）。")]),a._v(" "),s("li",[s("code",[a._v("/debug/pprof/symbol")]),a._v("   : Kata 运行时 shim 的 Golang 分析数据："),s("code",[a._v("symbol")]),a._v("endpoint。")]),a._v(" "),s("li",[s("code",[a._v("/debug/pprof/trace")]),a._v("    : Kata 运行时 shim 的 Golang 分析数据："),s("code",[a._v("trace")]),a._v("endpoint。")])]),a._v(" "),s("p",[s("code",[a._v("/agent-url")]),a._v("和所有"),s("code",[a._v("/debug/")]),a._v(" * 都需要在查询字符串中指定"),s("code",[a._v("sandbox_id")])]),a._v(" "),s("p",[a._v("curl 127.0.0.1:8090/sandboxes\ncurl 127.0.0.1:8090/agent-url?sandboxes=df96b24bd49ec437c872c1a758edc084121d607ce1242ff5d2263a0e1b693343")])])}),[],!1,null,null,null);s.default=e.exports}}]);