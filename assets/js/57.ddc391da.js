(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{387:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"采集k8s容器标准输出日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#采集k8s容器标准输出日志"}},[s._v("#")]),s._v(" 采集k8s容器标准输出日志")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" <source>\n      @type tail\n      path /var/log/containers/kube-*.log,/var/log/containers/myapp-*.log  # 逗号分隔\n      exclude_path [\"/var/log/containers/kubectl-*.log\"]    # 排除的日志\n      pos_file /var/log/pos/containers.log.pos              # 保存已读日志文件的位置\n      tag raw.*\n      read_from_head true\n      <parse>\n        @type multi_format\n        # 匹配docker容器日志格式json\n        <pattern>\n          format json\n          time_key time\n          time_format %Y-%m-%dT%H:%M:%S.%NZ\n        </pattern>\n        #这部分用来正则匹配CRI容器日志格式text\n        <pattern>\n          format /^(?<time>.+) (?<stream>stdout|stderr) [^ ]* (?<log>.*)$/\n          time_format %Y-%m-%dT%H:%M:%S.%N%:z\n        </pattern>\n      </parse>\n    </source>\n\n\n    <filter raw.**>\n        @type kubernetes_metadata\n        @id kubernetes_metadata_container_out\n        skip_container_metadata true\n        skip_master_url true\n        cache_size 3000\n        cache_ttl 1800   \n    </filter>\n\n    <match raw.**>\n      @type record_modifier\n      @id label.container.out\n      tag k8s-containers-${record.dig(\"k8s_container_name\")}\n      # tag ${record.dig('log-collect') ? k8s-containers-${record.dig(\"k8s_container_name\")} : 'dropped.raw'}\n      <record>\n        k8s_container_id ${record.dig(\"docker\", \"container_id\")}\n        k8s_cloud_cluster \"#{ENV['CLOUD_CLUSTER'] || 'default'}\"\n        k8s_node ${record.dig('kubernetes', 'host')}\n        k8s_container_name ${record.dig('kubernetes', 'container_name')}\n        k8s_pod_name ${record.dig('kubernetes', 'pod_name')}\n        k8s_namespace_name ${record.dig('kubernetes', 'namespace_name')}\n        # log-collect ${record.dig(\"kubernetes\", \"labels\", \"log-collect\") or false}\n        formated_time \"${Time.at(time).to_datetime.iso8601(9)}\"\n        fluentd_worker \"#{worker_id}\"\n      </record>\n      remove_keys docker,kubernetes                            # 删除原生metadata字段\n    </match>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br")])]),n("h2",{attrs:{id:"本地日志文件-主机审计日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地日志文件-主机审计日志"}},[s._v("#")]),s._v(" 本地日志文件-主机审计日志")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    <source>\n        @type tail\n        read_from_head false\n        path /var/log/operation/*.log                       # 宿主机操作日志\n        follow_inodes true                                  # 如果没有这个参数，文件轮转会导致日志重复\n        path_key file_name                                  # 指定事件中path的key名称\n        pos_file /var/log/pos/operation.log.pos             # 保存已读日志文件的位置\n        tag host-operation\n        limit_recently_modified 7d                          # 只监控指定修改时间范围内的文件\n        multiline_flush_interval 1s                         # 多行处理模式下的缓存输出间隔\n        <parse>\n          @type json\n          time_key time                                     # 从事件的什么字段中获取时间，如果该字段不存在，则取当前时间\n          time_type string                                  # 可选值:float:UNIX时间.纳秒、unixtime: UNIX时间(秒)、string:根据后面几个参数决定具体格式\n          time_format %Y-%m-%d %H:%M:%S                     # 时间格式\n          timezone +08:00\n        </parse>\n    </source>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"journal日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#journal日志"}},[s._v("#")]),s._v(" journal日志")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    <source>                  \n      @type systemd\n      path /run/log/journal\n      matches [{ "_SYSTEMD_UNIT": ["kubelet.service", "etcd.service"] }]      # 指定journald日志,屏蔽此行则采集所有journal日志\n      <storage>\n        @type local\n        persistent true\n        path /var/log/pos/journal.pos\n      </storage>\n      read_from_head true\n      tag journald\n    </source>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"输出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[s._v("#")]),s._v(" 输出")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    # <match dropped.**>\n    #   @type null                                             # 需要忽略的日志\n    # </match>\n    <filter k8s-*>\n      @type record_transformer\n      <record>\n        nodename \"#{ENV['K8S_NODE_NAME']}\"                     # 为每条记录附加节点字段\n        dc \"#{ENV['CLUSTER_NAME']}\"                            # 为每条记录附加集群名\n      </record>\n    </filter>\n\n    <match k8s-*>                                             # 存储到es地址\n    @type forward\n    <server>\n        host \"#{ENV['FLUENT_ELASTICSEARCH_HOST']}\"     \n        port \"#{ENV['FLUENT_ELASTICSEARCH_PORT']}\"\n    </server>\n    <buffer tag,time>\n        @type file\n        path /var/log/td-agent/buffer/docker-k8s\n        timekey 3600\n        timekey_wait 0s\n        timekey_use_utc false\n        flush_mode interval\n        flush_interval 10s\n        chunk_limit_size 20M\n    </buffer>\n    </match>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);