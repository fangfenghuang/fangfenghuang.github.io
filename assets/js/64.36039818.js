(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{392:function(t,e,i){"use strict";i.r(e);var n=i(0),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("gitHub地址：https://github.com/AliyunContainerService/gpushare-device-plugin")]),t._v(" "),e("h1",{attrs:{id:"缺陷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺陷"}},[t._v("#")]),t._v(" 缺陷：")]),t._v(" "),e("ul",[e("li",[t._v("没有暴露每个容器GPU资源利用率的指标；")]),t._v(" "),e("li",[t._v("只是在调度上实现了GPU显存粒度的虚拟化，没有实现资源隔离。")]),t._v(" "),e("li",[t._v("按显存(GPU Memory)和按卡(GPU count)调度的方式可以在集群内并存，但是同一个节点内是互斥的。")]),t._v(" "),e("li",[t._v("不支持共享GPU显存资源的隔离，需要应用在代码中配置该任务可使用的GPU显存大小。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);