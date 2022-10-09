(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{352:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"龙芯mips64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#龙芯mips64"}},[s._v("#")]),s._v(" 龙芯mips64")]),s._v(" "),t("h2",{attrs:{id:"社区适配情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#社区适配情况"}},[s._v("#")]),s._v(" 社区适配情况：")]),s._v(" "),t("p",[s._v("龙芯平台已适配了MIPS下的loongnix-Server以及Debian10对应的版本：nodejs-v12.16.3，LoongArch下的Loongnix-20.loongarch64桌面系统以及Loongnix-server-20.loongarch64服务器系统对应的版本: nodejs-v14.16.1，并将持续维护，力争为用户提供好用的开发环境。")]),s._v(" "),t("ul",[t("li",[s._v("mips:\nloongnix-Server\nDebian10")]),s._v(" "),t("li",[s._v("LoongArch:\nLoongnix-20.loongarch64桌面系统\nLoongnix-server-20.loongarch64服务器系统")])]),s._v(" "),t("h2",{attrs:{id:"源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源"}},[s._v("#")]),s._v(" 源：")]),s._v(" "),t("h3",{attrs:{id:"yum源修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum源修改"}},[s._v("#")]),s._v(" yum源修改：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release -y\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/yum.repos.d/Loongnix-Base.repo\norg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("cn\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/org/cn/g'")]),s._v(" /etc/yum.repos.d/Loongnix-Base.repo \nyum clean all \nyum makecache\n\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release -y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/yum.repos.d/epel.repo /etc/yum.repos.d/epel-test.repo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i s/ftp.loongnix.org/10.2.5.28/g /etc/yum.repos.d/epel-test.repo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum makecache "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" gcc g++ libatomic gpg "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" openssl11 -y\n\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release -y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum makecache\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"apt源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apt源"}},[s._v("#")]),s._v(" apt源：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://os.loongnix.org/mirrors/debian/debian/ buster main"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.163.com/debian/ buster main contrib non-free"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.163.com/debian/ buster-updates main contrib non-free"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.163.com/debian/ buster-backports main contrib non-free"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.163.com/debian-security buster/updates main contrib non-free"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"loongnix-20-mips64el系统源地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loongnix-20-mips64el系统源地址"}},[s._v("#")]),s._v(" Loongnix-20.mips64el系统源地址")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("deb [trusted=yes] http://ftp.loongnix.org/os/loongnix/20/mips64el/ DaoXiangHu-testing main contrib non-free \ndeb-src [trusted=yes] http://ftp.loongnix.org/os/loongnix/20/mips64el/ DaoXiangHu-testing main contrib non-free\nLoongnix-server-1.7.2007 服务器系统源地址\nhttp://ftp.loongnix.org/os/loongnix-server/1.7/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"龙芯npm源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#龙芯npm源"}},[s._v("#")]),s._v(" 龙芯NPM源")]),s._v(" "),t("p",[s._v("源地址1：http://npm.loongnix.cn:4873\n源地址2：http://registry.loongnix.cn:4873")]),s._v(" "),t("h2",{attrs:{id:"harbor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#harbor"}},[s._v("#")]),s._v(" harbor")]),s._v(" "),t("p",[s._v("执行以下命令编辑/etc/docker/daemon.json，增加insecure-registries的配置，重新加载并重启docker使配置生效")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/docker/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),s._v("‘EOF’\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n“insecure-registries”:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("“harbor.loongnix.cn”"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nEOF\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("p",[s._v("http://doc.loongnix.cn/web/#/50?page_id=146 龙芯Docker安装手册\nhttp://ftp.loongnix.cn/ 龙芯开源社区ftp下载站点\nhttp://www.loongnix.cn/index.php/Container-Registry Loongarch架构的软件仓库站点\nhttp://ask.loongnix.cn/?/search/q-bm9kZWpz#all")])])}),[],!1,null,null,null);t.default=e.exports}}]);