(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{384:function(a,t,n){"use strict";n.r(t);var s=n(0),l=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"部署与配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署与配置"}},[a._v("#")]),a._v(" 部署与配置：")]),a._v(" "),t("p",[a._v("官方最佳示例：\nhttps://grafana.com/docs/loki/latest/best-practices/")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("已部署grafana")])]),a._v(" "),t("li",[t("p",[a._v("部署部署Loki和Promtail\nhelm chart部署")])]),a._v(" "),t("li",[t("p",[a._v("配置Loki和Promtai：")]),a._v(" "),t("blockquote",[t("p",[a._v("存储位置：pvc(本地或ceph)\n配置grafana添加Loki数据源：journal、event-exporter")])])]),a._v(" "),t("li",[t("p",[a._v("避免使用动态标签去匹配具有较大范围的可能值，比如ip值。这样会导致Loki建立一个巨大的索引，性能非常差。\npromtail 需要运行在所有运行应用容器的节点, 所以会是 DaemonSet, loki 作为核心服务, 带有持久化存储而且支持横向扩展, 所以应该是 StatefulSet, Grafana 是比较基本的独立应用, 可以复用已部署的.\nhttps://grafana.com/docs/loki/latest/installation/microservices-helm/?????????\nhttps://grafana.github.io/loki/charts/")])])]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ helm repo "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" loki https://grafana.github.io/loki/charts\n$ helm repo update\n$ helm fetch loki/loki-stack --untar --untardir "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" loki-stack\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改配置...")]),a._v("\n$ helm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -n loki --namespace loki -f values.yaml "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/loki-stack\n$ kubectl get svc -n loki \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("注：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("可以修改values.yaml文件，指定是否开启Grafana、Prometheus等服务，默认不开启的：")])]),a._v(" "),t("li",[t("p",[a._v("promtail服务在构建时会自动挂载：cat charts/promtail/values.yaml\n宿主机docker主目录下的containers目录，一般默认都为/var/lib/docker/containers（改为/app/docker/containers）\npod的日志目录，一般默认为/var/log/pods（未改）\n如果是修改过docker默认的存储路径的，需要将mount的路径进行修改，promtail找不到对应的容器日志\n具体docker 存储路径，可以使用docker info 命令查询")])]),a._v(" "),t("li",[t("p",[a._v("如果是安装Loki时开启了Grafana，那系统会自动配置好Data sources。但是，如果是手动搭建的Grafana，需要手动添加Data Sources时，一定注意：数据源名称中的Loki，L一定要是大写！！！")])]),a._v(" "),t("li",[t("p",[a._v("grafana升级\nwget https://dl.grafana.com/oss/release/grafana-9.1.2-1.x86_64.rpm\nyum localinstall grafana-9.1.2-1.x86_64.rpm\nservice grafana-server restart")])]),a._v(" "),t("li",[t("p",[a._v("loki svc 要暴露nodeport，否则grafana连接不到")])]),a._v(" "),t("li",[t("p",[a._v("添加宿主机journal日志：/run/log/journal\n参考：https://grafana.com/docs/loki/latest/installation/microservices-helm/\nRun Promtail with systemd-journal support")])])]),a._v(" "),t("h2",{attrs:{id:"fluetnd-loki"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluetnd-loki"}},[a._v("#")]),a._v(" fluetnd+loki")]),a._v(" "),t("ul",[t("li",[a._v("Loki为fluetnd提供了一个输出插件fluent-plugin-grafana-loki，它可以将采集到的日志传送到Loki实例当中。")])]),a._v(" "),t("p",[a._v("gem install fluent-plugin-grafana-loki")])])}),[],!1,null,null,null);t.default=l.exports}}]);