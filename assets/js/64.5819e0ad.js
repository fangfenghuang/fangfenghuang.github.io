(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{390:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_4paradigm-k8s-device-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4paradigm-k8s-device-plugin"}},[s._v("#")]),s._v(" 4paradigm/k8s-device-plugin")]),s._v(" "),a("p",[s._v("github地址：https://github.com/4paradigm/k8s-device-plugin/blob/master/README_cn.md")]),s._v(" "),a("p",[s._v("vGPU device plugin 基于NVIDIA官方插件(NVIDIA/k8s-device-plugin)，在保留官方功能的基础上，实现了对物理GPU进行切分，并对显存和计算单元进行限制，从而模拟出多张小的vGPU卡。")]),s._v(" "),a("p",[s._v("第四范式的GPU共享方案还叫vGPU，也是CUDA劫持方案。由于没有开源资源隔离部分的代码，从文档中推测，其实现和GaiaGPU的vcuda较为类似：显存隔离使用的是经典CUDA劫持方法，通过预估获得context大小；使用监控隔离的方案隔离算力。同样地，方案的优缺点也和vCUDA类似。较为特别的一点是，和阿里Antman相同地，第四范式vGPU通过Nvidia UVM实现了虚拟显存。不过UVM实质上是使用内存来虚拟显存，因此会消耗较大的内存，且性能会有较大下降。若要使用虚拟显存功能，还需思考程序本身占用的内存和虚拟显存的trade off。")]),s._v(" "),a("p",[s._v("同时，采用这种方案不需重新设计调度器。")]),s._v(" "),a("h3",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("p",[s._v("docker pull 4pdosc/k8s-device-plugin:latest  (注意v1.8镜像使用有问题，拉最新的镜像验证没问题)\nkubectl apply -f nvidia-device-plugin.yml")]),s._v(" "),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("--device-split-count=3\n整数类型，预设值是2。NVIDIA装置的分割数。对于一个总共包含N张NVIDIA GPU的Kubernetes集群，如果我们将device-split-count参数配置为K，这个Kubernetes集群将有K * N个可分配的vGPU资源\n--device-memory-scaling=3\n浮点数类型，预设值是1。NVIDIA装置显存使用比例，可以大于1（启用虚拟显存，实验功能）。对于有M​显存大小的NVIDIA GPU，如果我们配置device-memory-scaling参数为S，在部署了我们装置插件的Kubenetes集群中，这张GPU分出的vGPU将总共包含 S * M显存。张vGPU的显存大小也受device-split-count参数影响。在先前的例子中，如果device-split-count参数配置为K，那每一张vGPU最后会取得 S * M / K 大小的显存。")]),s._v(" "),a("h3",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gpu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("4paradigm\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restartPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" OnFailure\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cuda\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nvidia/cuda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("10.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("base\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("imagePullPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" IfNotPresent\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("limits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nvidia.com/gpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodeName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node01\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master02 4paradigm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl describe node node01 | grep gpu")]),s._v("\n  nvidia.com/gpu:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n  nvidia.com/gpu:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n  nvidia.com/gpu     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"产品限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产品限制"}},[s._v("#")]),s._v(" 产品限制")]),s._v(" "),a("p",[s._v("分配到节点上任务所需要的vGPU数量，不能大于节点实际GPU数量，你可以使用"),a("a",{attrs:{href:"https://github.com/4paradigm/k8s-vgpu-scheduler/blob/master/README_cn.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("vGPU调度器"),a("OutboundLink")],1),s._v("来避免这个限制")]),s._v(" "),a("h2",{attrs:{id:"_4paradigm-k8s-vgpu-scheduler-调度及监控增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4paradigm-k8s-vgpu-scheduler-调度及监控增强"}},[s._v("#")]),s._v(" 4paradigm/k8s-vgpu-scheduler(调度及监控增强)")]),s._v(" "),a("p",[s._v("https://github.com/4paradigm/k8s-vgpu-scheduler")]),s._v(" "),a("p",[s._v("k8s vGPU scheduler 在保留4pd-k8s-device-plugin(4paradigm/k8s-device-plugin)插件功能的基础上，添加了调度模块，以实现多个GPU节点间的负载均衡。k8s vGPU scheduler在原有显卡分配方式的基础上，可以进一步根据显存和算力来切分显卡。在k8s集群中，基于这些切分后的vGPU进行调度，使不同的容器可以安全的共享同一张物理GPU，提高GPU的利用率。此外，插件还可以对显存做虚拟化处理（使用到的显存可以超过物理上的显存），运行一些超大显存需求的任务，或提高共享的任务数，可参考性能测试报告。")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("你需要将所有要使用到的GPU节点打上gpu=on标签，否则该节点不会被调度到\nkubectl label nodes {nodeid} gpu=on")])]),s._v(" "),a("li",[a("p",[s._v("使用helm添加我们的vgpu repo\nhelm repo add vgpu-charts https://4paradigm.github.io/k8s-vgpu-scheduler\nhelm repo update")])]),s._v(" "),a("li",[a("p",[s._v("helm install\n根据集群服务端版本（上一条指令的结果）指定调度器镜像版本，例如集群服务端版本为v1.17.17，则可以使用如下指令进行安装\nkubectl version\nhelm install -n vgpu vgpu-charts/vgpu --set scheduler.kubeScheduler.imageTag=v1.17.17 --namespace kube-system")])])]),s._v(" "),a("p",[s._v("或：你可以在安装过程中，通过-set来修改以下的客制化参数，例如：\nhelm install -n vgpu vgpu-charts/vgpu --set devicePlugin.deviceMemoryScaling=5 ...")]),s._v(" "),a("p",[s._v("如：\nhelm install -n vgpu vgpu-charts/vgpu --set scheduler.kubeScheduler.imageTag=v1.17.17 --set devicePlugin.deviceMemoryScaling=1 --set devicePlugin.deviceSplitCount=3 --namespace kube-system")]),s._v(" "),a("h3",{attrs:{id:"卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载：")]),s._v(" "),a("p",[s._v("helm uninstall vgpu --namespace kube-system")]),s._v(" "),a("p",[s._v("helm del --purge vgpu")])])}),[],!1,null,null,null);a.default=n.exports}}]);