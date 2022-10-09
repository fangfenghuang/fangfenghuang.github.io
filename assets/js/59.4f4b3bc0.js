(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{384:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("prometheus通过抓取监控数据，将触发规则的告警，推送到Alertmanger，Alertmanger对告警进行分组、聚合等处理后，可以通过邮件、Slack、webhook等方式对用户进行发送告警信息。alertmanager告警的记录不支持持久化记录，发送的告警信息不会存储在数据库中，prometheus将所有数据存储为时间序列，却不会将alertmanager发送的告警信息做为一条记录存储下来。")]),a._v(" "),t("p",[a._v("解决的思路就是通过webhook发送告警信息到指定服务，并将记录输出到stdout，再通过fluentd采集容器日志推送到ES")]),a._v(" "),t("h2",{attrs:{id:"alertsnitch-mysql-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alertsnitch-mysql-grafana"}},[a._v("#")]),a._v(" alertsnitch + mysql + grafana")]),a._v(" "),t("p",[a._v("alertsnitch支持将alertmanager的告警数据写入mysql和pg， 并结合grafna面板，将数据进行展示。")]),a._v(" "),t("h3",{attrs:{id:"alertsnitch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alertsnitch"}},[a._v("#")]),a._v(" alertsnitch")]),a._v(" "),t("p",[a._v("https://gitlab.com/yakshaving.art/alertsnitch")]),a._v(" "),t("ul",[t("li",[t("p",[a._v('配置变量：\n环境变量数据库配置格式ALERTSNITCH_DSN="${MYSQL_USER}😒{MYSQL_PASSWORD}@/${MYSQL_DATABASE}"\n部署完成后配置ingress，映射域名对外提供服务，过程略，配置域名后调用方式为：\nhttps://alertsnitch.test.com/webhook')])]),a._v(" "),t("li",[t("p",[a._v("配置alertmanager：")])])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置接收者")]),a._v("\n- name: default\n  webhook_configs:\n  - send_resolved: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n    http_config:\n      follow_redirects: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n    url: https://alertsnitch.test.cn/webhook\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h3",{attrs:{id:"grafana-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana-dashboard"}},[a._v("#")]),a._v(" grafana dashboard")]),a._v(" "),t("p",[a._v("ID: 15833\nhttps://grafana.com/grafana/dashboards/15833-prometheus-alert-history/")]),a._v(" "),t("h2",{attrs:{id:"alertmanager2es-es-kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alertmanager2es-es-kibana"}},[a._v("#")]),a._v(" alertmanager2es + ES + kibana")]),a._v(" "),t("p",[a._v("https://github.com/cloudflare/alertmanager2es")]),a._v(" "),t("p",[a._v("https://github.com/webdevops/alertmanager2es")]),a._v(" "),t("p",[a._v("docker pull webdevops/alertmanager2es:20.11.0")]),a._v(" "),t("p",[a._v("docker pull webdevops/alertmanager2es:development")]),a._v(" "),t("h2",{attrs:{id:"alertmanager-webhook-logger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alertmanager-webhook-logger"}},[a._v("#")]),a._v(" alertmanager-webhook-logger")]),a._v(" "),t("p",[a._v("https://github.com/tomtom-international/alertmanager-webhook-logger\ndocker pull ghcr.io/tomtom-international/alertmanager-webhook-logger:1.0")]),a._v(" "),t("p",[a._v("https://github.com/grafana/alertmanager-webhook-logger\ndocker pull grafana/alertmanager-webhook-logger:0.3")]),a._v(" "),t("p",[a._v("通events持久化，通过fluentd+容器标准输出采集到ES")]),a._v(" "),t("h3",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[a._v("#")]),a._v(" 部署")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" apps/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Deployment\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" alertmanager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("webhook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("logger\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" monitoring\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("replicas")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" alertmanager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("webhook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("logger\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" alertmanager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("webhook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("logger\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ghcr.io/tomtom"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("international/alertmanager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("webhook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("logger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("imagePullPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" IfNotPresent\n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("matchLabels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" alertmanager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("webhook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("logger\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Service\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" alertmanager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("webhook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("logger\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" monitoring\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'6725'")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("protocol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" TCP\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6725")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("targetPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6725")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" alertmanager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("webhook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("logger\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterIP\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br")])]),t("h3",{attrs:{id:"alertmanager配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alertmanager配置"}},[a._v("#")]),a._v(" alertmanager配置")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("global")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("route")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("receiver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("receiver\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("receivers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("receiver\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("webhook_configs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//alertmanager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("webhook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("logger.monitoring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6725")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);