(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{390:function(n,s,e){"use strict";e.r(s);var t=e(0),a=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"centos安装nvidia-gpu驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos安装nvidia-gpu驱动"}},[n._v("#")]),n._v(" centos安装nvidia GPU驱动")]),n._v(" "),s("p",[n._v("下载好显卡驱动包：在官网上http://www.geforce.cn/drivers搜索到对应型号的显卡驱动并下载，下载到的驱动文件是一个后缀名为.run的文件"),s("br"),n._v("\n链接：https://www.nvidia.cn/Download/index.aspx?lang=cn")]),n._v(" "),s("p",[n._v("1、执行以下4个命令操作安装环境工具包"),s("br"),n._v("\nyum install kernel.x86* -y\nyum install kernel-devel-*  -y\nyum install kernel-headers* -y\nyum install kernel-tools-libs* -y\nyum install kernel-tools-3* -y")]),n._v(" "),s("p",[n._v("2、执行命令 yum list | grep kernel          //查看4个环境工具包版本要一致（如：3.10.0-1062.1.1.el7）")]),n._v(" "),s("p",[n._v("3、执行命令  yum install -y gcc* glibc*  glibc-*         / /最后再安装编译环境")]),n._v(" "),s("p",[n._v("4、禁用系统默认安装的 nouveau 驱动：")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("lsmod "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" nouveau      //"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 查看nouveau是否启动，如果结果为空即为禁用成功")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("注意： 禁用后需要重启才能生效，如果已经禁用，则不需要重启")]),n._v(" "),s("p",[n._v("5、 使用WinSCP工具或者其他工具将显卡驱动包上传至本地服务器（如上传至/11目录）")]),n._v(" "),s("p",[n._v("6、执行命令cd /11/切换到显卡驱动包路径")]),n._v(" "),s("p",[n._v("7、执行命令  chmod u+x NVIDIA-Linux-x86_64-415.13.run   // 修改.run文件有可执行权限：")]),n._v(" "),s("p",[n._v("8、执行命令  sh NVIDIA-Linux-x86_64-390.116-201902.run   //安装显卡驱动包，然后根据提示默认安装即可")]),n._v(" "),s("p",[n._v("9、执行命令 nvidia-smi  查看安装成功与否，至此完成安装。")])])}),[],!1,null,null,null);s.default=a.exports}}]);