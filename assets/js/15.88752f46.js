(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{341:function(e,r,o){"use strict";o.r(r);var t=o(0),c=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"docker网络"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker网络"}},[e._v("#")]),e._v(" docker网络")]),e._v(" "),r("p",[e._v("容器网络发端于 Docker 的网络。Docker 使用了一个比较简单的网络模型，即内部的网桥加内部的保留 IP。")]),e._v(" "),r("p",[e._v("docker0：Docker服务会在它所在的机器上创建一个名为docker0的网桥。\ndocker0的IP地址为172.17.0.1，子网掩码为255.255.0.0。")]),e._v(" "),r("p",[e._v("[root@rqy-k8s-2 kbuser]# docker network ls\nNETWORK ID          NAME                DRIVER              SCOPE\ne29e51f3f12a        bridge              bridge              local\nb70c41f7568e        host                host                local\n3a890954cce6        none                null                local")]),e._v(" "),r("p",[e._v("Docker容器在启动时，如果没有显式指定加入任何网络，就会默认加入到名为bridge的网络。而这个bridge网络就是基于docker0实现的。\n加入host网络的容器，可以实现和Docker daemon守护进程（也就是Docker服务）所在的宿主机网络环境进行直接通信\nnone网络，则表示容器在启动时不带任何网络设备。")]),e._v(" "),r("h1",{attrs:{id:"k8s网络"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#k8s网络"}},[e._v("#")]),e._v(" k8s网络")]),e._v(" "),r("h2",{attrs:{id:"docker0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker0"}},[e._v("#")]),e._v(" docker0:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("同一Pod内的容器间通信:\n因为pause容器提供pod内网络共享，所以容器直接可以使用localhost(lo)访问其他容器")])]),e._v(" "),r("li",[r("p",[e._v("各Pod彼此之间的通信(两个pod在一台主机上面, 两个pod分布在不同主机之上)\n1)两个pod在一台主机上面: 通过docker默认的docker网桥互连容器(docker0), ifconfig 查了docker0\n2)两个pod分布在不同主机之上: 通过CNI插件实现，eg: flannel,calico")])]),e._v(" "),r("li",[r("p",[e._v("Pod与Service间的通信\nService分配的ip叫cluster ip是一个虚拟ip（相对固定，除非删除service），这个ip只能在k8s集群内部使用，\n如果service需要对外提供，只能使用Nodeport方式映射到主机上，使用主机的ip和端口对外提供服务。\n节点上面有个kube-proxy进程，这个进程从master apiserver获取信息，感知service和endpoint的创建，然后做两个事：\n1.为每个service 在集群中每个节点上面创建一个随机端口，任何该端口上面的连接会代理到相应的pod\n2.集群中每个节点安装iptables/ipvs规则，用于clusterip + port路由到上一步定义的随机端口上面，\n所以集群中每个node上面都有service的转发规则:iptables -L -n -t filter")])])]),e._v(" "),r("h2",{attrs:{id:"calico网络"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calico网络"}},[e._v("#")]),e._v(" calico网络")]),e._v(" "),r("h3",{attrs:{id:"calico主要由felix、orchestrator-plugin、etcd、bird和bgp-router-reflector等组件组成。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calico主要由felix、orchestrator-plugin、etcd、bird和bgp-router-reflector等组件组成。"}},[e._v("#")]),e._v(" Calico主要由Felix、Orchestrator Plugin、etcd、BIRD和BGP Router Reflector等组件组成。")]),e._v(" "),r("ul",[r("li",[e._v("Felix：Calico Agent，运行于每个节点。")]),e._v(" "),r("li",[e._v("Orchestrator Plugi：编排系统（如 Kubernetes 、 OpenStack 等）以将 Calico整合进系统中的插件，例如Kubernetes的CNI。")]),e._v(" "),r("li",[e._v("etcd：持久存储Calico数据的存储管理系统。")]),e._v(" "),r("li",[e._v("BIRD：用于分发路由信息的BGP客户端。")]),e._v(" "),r("li",[e._v("BGP Route Reflector：BGP路由反射器，可选组件，用于较大规模的网络场景。")])]),e._v(" "),r("h3",{attrs:{id:"bgp-pod-1跨节点访问pod-2大致流程如下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bgp-pod-1跨节点访问pod-2大致流程如下"}},[e._v("#")]),e._v(" BGP: Pod 1跨节点访问Pod 2大致流程如下：")]),e._v(" "),r("ol",[r("li",[e._v("数据包从容器1出到达Veth Pair另一端（宿主机上，以cali前缀开头）；")]),e._v(" "),r("li",[e._v("宿主机根据路由规则，将数据包转发给下一跳（网关）；")]),e._v(" "),r("li",[e._v("到达Node2，根据路由规则将数据包转发给cali设备，从而到达容器2。\n这里最核心的“下一跳”路由规则，就是由Calico的Felix进程负责维护的。这些路由规则信息，则是通过BGP Client也就是BIRD组件，使用BGP协议传输而来的。")])]),e._v(" "),r("h3",{attrs:{id:"calico-route-reflector模式-rr-路由器反射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calico-route-reflector模式-rr-路由器反射"}},[e._v("#")]),e._v(" Calico Route Reflector模式（RR）（路由器反射）")]),e._v(" "),r("p",[e._v("Calico维护的网络在默认是（Node-to-Node Mesh）全互联模式（mesh）")]),e._v(" "),r("h3",{attrs:{id:"ipip-pod-1访问pod-2大致流程如下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ipip-pod-1访问pod-2大致流程如下"}},[e._v("#")]),e._v(" IPIP: Pod 1访问Pod 2大致流程如下：")]),e._v(" "),r("ol",[r("li",[e._v("数据包从容器1出到达Veth Pair另一端（宿主机上，以cali前缀开头）；")]),e._v(" "),r("li",[e._v("进入IP隧道设备（tunl0），由Linux内核IPIP驱动封装在宿主机网络的IP包中（新的IP包目的地之是原IP包的下一跳地址，即192.168.31.63），这样，就成了Node1到Node2的数据包；")]),e._v(" "),r("li",[e._v("数据包经过路由器三层转发到Node2；")]),e._v(" "),r("li",[e._v("Node2收到数据包后，网络协议栈会使用IPIP驱动进行解包，从中拿到原始IP包；")]),e._v(" "),r("li",[e._v("然后根据路由规则，根据路由规则将数据包转发给cali设备，从而到达容器2。")])])])}),[],!1,null,null,null);r.default=c.exports}}]);