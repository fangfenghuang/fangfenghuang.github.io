(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{408:function(t,o,_){"use strict";_.r(o);var v=_(0),r=Object(v.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"开启硬件虚拟化"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#开启硬件虚拟化"}},[t._v("#")]),t._v(" 开启硬件虚拟化")]),t._v(" "),o("h3",{attrs:{id:"_1-bios-启用虚拟化"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-bios-启用虚拟化"}},[t._v("#")]),t._v(" 1.BIOS 启用虚拟化")]),t._v(" "),o("p",[t._v("设置bios中的硬件支持VT-x，即CPU支持的虚拟化；")]),t._v(" "),o("h3",{attrs:{id:"_2-加载内核模块"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-加载内核模块"}},[t._v("#")]),t._v(" 2.加载内核模块")]),t._v(" "),o("p",[t._v("modprobe kvm-intel\nmodprobe vhost-vsock")]),t._v(" "),o("h3",{attrs:{id:"_3-iommu开启"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-iommu开启"}},[t._v("#")]),t._v(" 3.IOMMU开启：")]),t._v(" "),o("p",[o("strong",[t._v("判断是否amd/intel:")]),t._v(" ls /sys/firmware/ | grep efi")]),t._v(" "),o("p",[t._v("1 修改/etc/default/grub, 调整GRUB_CMDLINE_LINUX内容")]),t._v(" "),o("ul",[o("li",[t._v("amd_iommu：")])]),t._v(" "),o("blockquote",[o("p",[t._v('GRUB_CMDLINE_LINUX="crashkernel=auto rhgb quiet amd_iommu=on iommu=pt"')])]),t._v(" "),o("ul",[o("li",[t._v("intel_iommu：")])]),t._v(" "),o("blockquote",[o("p",[t._v('GRUB_CMDLINE_LINUX="crashkernel=auto rhgb quiet intel_iommu=on iommu=pt"')])]),t._v(" "),o("p",[t._v("2 重新创建引导")]),t._v(" "),o("ul",[o("li",[t._v("如果服务器是UEFI启动")])]),t._v(" "),o("blockquote",[o("p",[t._v("grub2-mkconfig -o /boot/efi/EFI/centos/grub.cfg")])]),t._v(" "),o("ul",[o("li",[t._v("普通LEGACY模式启动")])]),t._v(" "),o("blockquote",[o("p",[t._v("grub2-mkconfig -o /boot/grub2/grub.cfg")])]),t._v(" "),o("p",[t._v("3 reboot")]),t._v(" "),o("p",[o("strong",[t._v("IOMMU关闭：")])]),t._v(" "),o("p",[t._v("1 修改/etc/default/grub，删除iommu配置")]),t._v(" "),o("p",[t._v("2 重新创建引导同上")]),t._v(" "),o("p",[t._v("3 reboot")]),t._v(" "),o("h3",{attrs:{id:"_4-egrep-color-i-svm-vmx-proc-cpuinfo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-egrep-color-i-svm-vmx-proc-cpuinfo"}},[t._v("#")]),t._v(' 4.egrep --color -i "svm|vmx" /proc/cpuinfo')]),t._v(" "),o("h2",{attrs:{id:"检查虚拟化"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#检查虚拟化"}},[t._v("#")]),t._v(" 检查虚拟化")]),t._v(" "),o("p",[t._v("检查是否虚拟机：")]),t._v(" "),o("blockquote",[o("p",[t._v('systemd-detect-virt\negrep --color -i "svm|vmx" /proc/cpuinfo')])]),t._v(" "),o("p",[t._v("判断当前环境所使用的虚拟技术：")]),t._v(" "),o("blockquote",[o("p",[t._v("virt-what")])]),t._v(" "),o("p",[t._v("检测 Linux 底层的虚拟化类型:")]),t._v(" "),o("blockquote",[o("p",[t._v("dmidecode -s system-manufacturer\nvirsh vcpuinfo --domain hfftest")])])])}),[],!1,null,null,null);o.default=r.exports}}]);