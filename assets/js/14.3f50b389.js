(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{342:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"docker-镜像存储原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像存储原理"}},[s._v("#")]),s._v(" Docker 镜像存储原理")]),s._v(" "),a("p",[s._v("docker支持多种graphDriver，包括vfs、devicemapper、overlay、overlay2、aufs等等")]),s._v(" "),a("h3",{attrs:{id:"overlay2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overlay2"}},[s._v("#")]),s._v(" overlay2")]),s._v(" "),a("p",[s._v("Linux 内核在 4.0 版本对overlay做了很多必要的改进，此时的 OverlayFS 被称之为overlay2")]),s._v(" "),a("ul",[a("li",[s._v("要想使用overlay2，Docker 版本必须高于 17.06.02。")]),s._v(" "),a("li",[s._v("如果你的操作系统是 RHEL 或 CentOS，Linux 内核版本必须使用 3.10.0-514 或者更高版本，其他 Linux 发行版的内核版本必须高于 4.0（例如 Ubuntu 或 Debian）")]),s._v(" "),a("li",[s._v("overlay2最好搭配 xfs 文件系统使用，并且使用 xfs 作为底层文件系统时，d_type必须开启，可以使用以下命令验证 d_type 是否开启：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ xfs_info /var/lib/docker "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ftype\nnaming   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bsize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   ascii-ci"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ftype")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("verlay2 是这样储存文件的：")]),s._v(" overlay2将镜像层和容器层都放在单独的目录，并且有唯一 ID，每一层仅存储发生变化的文件，最终使用联合挂载技术将容器层和镜像层的所有文件统一挂载到容器中，使得容器中看到完整的系统文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker info | grep Storage")]),s._v("\n Storage Driver: overlay2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Overlay驱动的镜像只有两层：一个upper文件系统和一个lower文件系统，分别代表Docker的镜像层和容器层")]),s._v(" "),a("p",[s._v("merged层是lower层和upper层的统一视图")]),s._v(" "),a("p",[s._v("当需要修改一个文件时，使用CoW将文件从只读的lower复制到可写的upper进行修改，结果也保存在upper层。")]),s._v(" "),a("p",[s._v("在Docker中，底下的只读层就是image，可写层就是Container。voerlay2驱动存储位置为/var/lib/docker/（/app/docker）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls /app/docker/")]),s._v("\nbuilder  buildkit  containerd  containers  image  kubelet  network  overlay2  plugins  runtimes  swarm  tmp  trust  volumes\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls /app/docker/overlay2/7e32a486c4dc7a52d0685b7fb3e4f6fb4eb7b9ae963f0820285c3659e3f361ca")]),s._v("\ncommitted  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("  lower  work\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls /app/docker/image/overlay2")]),s._v("\ndistribution  imagedb  layerdb  repositories.json\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("overlay2目录，存储镜像和容器的层信息")])]),s._v(" "),a("li",[a("p",[s._v("image目录，存储镜像元相关信息")])]),s._v(" "),a("li",[a("p",[s._v("repositories.json就是存储镜像信息，主要是name和image id的对应，digest和image id的对应")])])]),s._v(" "),a("h4",{attrs:{id:"新增一个镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增一个镜像"}},[s._v("#")]),s._v(" 新增一个镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker images | grep web-demo")]),s._v("\nweb-demo_c7cac94                    dev-1648826415118                          df2b573855e0        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" days ago         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(".7MB\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls /app/docker/overlay2/d1142002c8d33580ab1213fff5746027a174d763e37885039df98b7108d41eb0")]),s._v("\ncommitted  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("  lower  work\n\n（可能新增多个镜像层目录文件）\n\n\n//允许一个容器\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run --name hfftest -it  df2b573855e0 sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  docker ps | grep hfftest")]),s._v("\n1e73601f56d9        df2b573855e0                                          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sh"')]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v(" seconds ago      Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" seconds       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp         hfftest\n\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls /app/docker/overlay2/ -tl")]),s._v("\n总用量 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3900")]),s._v("\ndrwx------ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":42 4695d98d682387009f6ab5c84d86599fe35460dae36aea7d00e1561042d630e0\ndrwx------ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":42 4695d98d682387009f6ab5c84d86599fe35460dae36aea7d00e1561042d630e0-init\ndrwx------ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("69632")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":42 l\ndrwx------ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":22 d1142002c8d33580ab1213fff5746027a174d763e37885039df98b7108d41eb0\n//多了两个目录（4695d98"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".108d41eb0）和一个l目录\n\nl目录是一堆软连接，把一些较短的随机串软连到镜像层的 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" 文件夹下，这样做是为了避免达到mount命令参数的长度限制。\n\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker inspect df2b573855e0 | grep Dir")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LowerDir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app/docker/overlay2/d90eefdee868034a568195793cd1c269664a8e459f773cef20cefe5fc81f9e1b/diff:/app/docker/overlay2/b1789038611adaa88789bc8600ff21ebf28d0f4437ae720bfea03b34d50cc689/diff:/app/docker/overlay2/9c3ce321c132b4e638a2187c58d6af6dff58f74c3f49780df8ee4eb80b0dc5f2/diff:/app/docker/overlay2/198313ba0d321e9efa1205820408780b4edb07027456cfcd89cc660bbfa92953/diff"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MergedDir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app/docker/overlay2/d1142002c8d33580ab1213fff5746027a174d763e37885039df98b7108d41eb0/merged"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UpperDir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app/docker/overlay2/d1142002c8d33580ab1213fff5746027a174d763e37885039df98b7108d41eb0/diff"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WorkDir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app/docker/overlay2/d1142002c8d33580ab1213fff5746027a174d763e37885039df98b7108d41eb0/work"')]),s._v("\n\nLowerDir：对应的是容器的只读镜像层，在新生成目录2c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".74-init下；\nUpperDir：为容器的可读写层，在新生成目录2c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".74下；\nMergedDir：为底层只读镜像层和上层可读写容器层的统一视图\n\n//写入一个文件：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run --name hfftest -it  df2b573855e0 sh")]),s._v("\n/app "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch hfftest0414")]),s._v("\n/app "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 111 > hfftest0414")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# find / -name  hfftest0414")]),s._v("\n/app/docker/overlay2/4695d98d682387009f6ab5c84d86599fe35460dae36aea7d00e1561042d630e0/diff/app/hfftest0414\n/app/docker/overlay2/4695d98d682387009f6ab5c84d86599fe35460dae36aea7d00e1561042d630e0/merged/app/hfftest0414\n//写入文件在UpperDir和MergedDir中\n\n//停止容器后，创建的文件仍然存在（diff,merge不在了）。当容器被删除后，两个新增目录及其相关文件被删除\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("h4",{attrs:{id:"写时复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写时复制"}},[s._v("#")]),s._v(" 写时复制")]),s._v(" "),a("p",[s._v("overlay2 对文件的修改采用的是写时复制的工作机制：")]),s._v(" "),a("ul",[a("li",[s._v("第一次修改文件：当我们第一次在容器中修改某个文件时，overlay2 会触发写时复制操作，overlay2 首先从镜像层复制文件到容器层，然后在容器层执行对应的文件修改操作。")]),s._v(" "),a("li",[s._v("删除文件或目录：当文件或目录被删除时，overlay2 并不会真正从镜像中删除它，因为镜像层是只读的，overlay2 会创建一个特殊的文件或目录，这种特殊的文件或目录会阻止容器的访问。")])]),s._v(" "),a("h3",{attrs:{id:"查看docker镜像、容器、数据卷所占用的空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看docker镜像、容器、数据卷所占用的空间"}},[s._v("#")]),s._v(" 查看docker镜像、容器、数据卷所占用的空间")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tztest kbuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker system df")]),s._v("\nTYPE                TOTAL               ACTIVE              SIZE                RECLAIMABLE\nImages              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("117")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(".52GB             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(".19GB "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nContainers          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("203")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".842GB             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".446GB "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nLocal Volumes       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(".42MB             0B "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nBuild Cache         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                   0B                  0B\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("p",[s._v("https://www.modb.pro/db/127388")])])}),[],!1,null,null,null);a.default=n.exports}}]);