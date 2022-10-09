(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{379:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"apk源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apk源"}},[s._v("#")]),s._v(" apk源")]),s._v(" "),t("div",{staticClass:"language-Dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine:3.14")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" sed -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g'")]),s._v(" /etc/apk/repositories")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apk update")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-Dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" golang:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GO_VER}")]),s._v("-alpine"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ALPINE_VER}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" golang")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" sed -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g'")]),s._v(" /etc/apk/repositories    #新加的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apk add --no-cache "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n\tbash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n\tgcc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n\tgit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n\tmake "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n\tmusl-dev")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"apt源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apt源"}},[s._v("#")]),s._v(" apt源")]),s._v(" "),t("div",{staticClass:"language-Dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" debian")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mv /etc/apt/sources.list /etc/apt/sources.list.bak && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.cloud.aliyuncs.com/debian stable main contrib non-free"')]),s._v(" >/etc/apt/sources.list && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.cloud.aliyuncs.com/debian stable-proposed-updates main contrib non-free"')]),s._v(" >>/etc/apt/sources.list && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.cloud.aliyuncs.com/debian stable-updates main contrib non-free"')]),s._v(" >>/etc/apt/sources.list && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb-src http://mirrors.cloud.aliyuncs.com/debian stable main contrib non-free"')]),s._v(" >>/etc/apt/sources.list  && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb-src http://mirrors.cloud.aliyuncs.com/debian stable-proposed-updates main contrib non-free"')]),s._v(" >>/etc/apt/sources.list  && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb-src http://mirrors.cloud.aliyuncs.com/debian stable-updates main contrib non-free"')]),s._v(" >>/etc/apt/sources.list  && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.aliyun.com/debian stable main contrib non-free"')]),s._v(" >>/etc/apt/sources.list  && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.aliyun.com/debian stable-proposed-updates main contrib non-free"')]),s._v(" >>/etc/apt/sources.list  && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.aliyun.com/debian stable-updates main contrib non-free"')]),s._v(" >>/etc/apt/sources.list  && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb-src http://mirrors.aliyun.com/debian stable main contrib non-free"')]),s._v(" >>/etc/apt/sources.list && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb-src http://mirrors.aliyun.com/debian stable-proposed-updates main contrib non-free"')]),s._v(" >>/etc/apt/sources.list && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb-src http://mirrors.aliyun.com/debian stable-updates main contrib non-free"')]),s._v(" >>/etc/apt/sources.list && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    apt-get update && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    apt-get install procps -y --allow-unauthenticated && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    apt-get install telnetd -y --allow-unauthenticated && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    apt-get install telnet -y --allow-unauthenticated && "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    apt-get install wget -y --allow-unauthenticated")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v('sed -i "s@http://deb.debian.org@http://mirrors.163.com@g" /etc/apt/sources.list')]),s._v(" "),t("p",[s._v('sed -i "s@http://security.debian.org@http://mirrors.163.com@g" /etc/apt/sources.list')])])}),[],!1,null,null,null);t.default=n.exports}}]);