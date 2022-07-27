(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{348:function(n,s,r){"use strict";r.r(s);var t=r(0),a=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("[TOC]")]),n._v(" "),s("h1",{attrs:{id:"一、chrony简述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、chrony简述"}},[n._v("#")]),n._v(" 一、Chrony简述")]),n._v(" "),s("p",[n._v("chrony是网络时间协议(NTP)的另一种实现,与网络时间协议后台程序(ntpd)不同,它可以更快地且更准确地同步系统时钟，请注意，ntpd仍然包含其中以供需要运行NTP服务的客户使用。\n两个主要程序：chronyd和chronyc")]),n._v(" "),s("ul",[s("li",[n._v("chronyd：后台运行的守护进程，用于调整内核中运行的系统时钟和时钟服务器同步。它确定计算机增减时间的比率，并对此进行补偿")]),n._v(" "),s("li",[n._v("chronyc：命令行用户工具，用于监控性能并进行多样化的配置。它可以在chronyd实例控制的计算机上工作，也可在一台不同的远程计算机上工作")])]),n._v(" "),s("blockquote",[s("p",[n._v("服务unit文件： /usr/lib/systemd/system/chronyd.service\n监听端口： 323/udp，123/udp\n配置文件： /etc/chrony.conf")])]),n._v(" "),s("h1",{attrs:{id:"二、部署版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、部署版本"}},[n._v("#")]),n._v(" 二、部署版本：")]),n._v(" "),s("p",[n._v("官方版本：3.4")]),n._v(" "),s("h1",{attrs:{id:"三、环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、环境配置"}},[n._v("#")]),n._v(" 三、环境配置：")]),n._v(" "),s("p",[n._v("1、关闭firewalld防火墙\n2、关闭SELinux\n3、chrony与ntp都是时间同步软件，两个软件不能够同时开启，会出现时间冲突")]),n._v(" "),s("h1",{attrs:{id:"四、ntp-chrony对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、ntp-chrony对比"}},[n._v("#")]),n._v(" 四、NTP/Chrony对比：")]),n._v(" "),s("p",[n._v("使用chronyd服务平滑同步时间的方式要优于crontab + ntpdate，因为ntpdate同步时间会造成时间的跳跃，对一些依赖时间的程序和服务会造成影响，例如：sleep、timer等，且chronyd服务可以在修正时间的过程中同时修正CPU tick。")]),n._v(" "),s("h2",{attrs:{id:"chrony的优势包括以下几点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrony的优势包括以下几点"}},[n._v("#")]),n._v(" chrony的优势包括以下几点:")]),n._v(" "),s("p",[n._v("1.更快的同步只需要数分钟而非数小时时间，从而最大程度减少时间和频率误差，这对于并非全天24小时的运行的台式计算机或系统而言非常有用；\n2.能够更好地响应时钟频率的快速变化，这对于具备不稳定时钟的虚拟机或导致赛事中频率发生比变化的节能技术;\n3.在初始同步后，它不会停止时钟，以防对需要系统时间保持单调的应用程序造成影响;\n4.在应对临时非对称延迟时(例如大规模下载造成链接饱和等情况)提供了更好的稳定性;\n5.无需对时间服务器进行定期轮询，因此具备间歇性网络连接(如网络不稳定的场景)的系统仍然可以快速同步时钟。")]),n._v(" "),s("h2",{attrs:{id:"ntp能做-chrony做不到的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ntp能做-chrony做不到的"}},[n._v("#")]),n._v(" ntp能做，chrony做不到的：")]),n._v(" "),s("p",[n._v("ntp支持RFC 5905的所有操作模式，包括广播、多播和manycast服务器/客户端。然而，广播和多播模式本质上不如普通的服务器/客户机模式准确和安全（即使有身份验证），通常应该避免。\nntp支持自动密钥协议（RFC 5906）来使用公钥加密对服务器进行身份验证。请注意，该协议已被证明是不安全的，并且已被NTS（RFC 8915）淘汰。\nntp已经被移植到更多的操作系统中。\nntp包含大量用于各种硬件参考时钟的驱动程序。chrony需要其他程序（如gpsd或ntp refclock）通过SHM或SOCK接口提供参考时间。")]),n._v(" "),s("h2",{attrs:{id:"chrony可以比ntp做得更好"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrony可以比ntp做得更好"}},[n._v("#")]),n._v(" chrony可以比ntp做得更好：")]),n._v(" "),s("p",[n._v("chrony可以在访问时间参考是断断续续的环境中有效地执行。ntp需要定期对引用进行轮询才能正常工作。\nchrony通常可以更快地同步时钟，并具有更好的时间精度。\nchrony快速适应时钟速率的突然变化（例如，由于晶体振荡器的温度变化）。ntp可能需要很长时间才能重新安定下来。\nchrony即使在网络拥塞时间较长的情况下也能表现良好。\n默认配置中的chrony从不占用时间来不打乱其他正在运行的程序。ntp也可以配置为从不步进时间，但是在这种情况下，它必须使用不同的方法来调整时钟（daemon循环而不是内核规程），这可能会对时钟的准确性产生负面影响。\nchrony可以在更大的范围内调整时钟的速率，这使得它甚至可以在时钟中断或不稳定的机器上运行（例如在某些虚拟机中）。\nchrony更小，占用的内存更少，只有在需要时才会唤醒CPU，这样更省电。\nchrony可以做ntp做不到的事情：\nchrony支持网络时间安全（NTS）认证机制。\nchrony在Linux上支持硬件时间戳，这允许在本地网络中进行非常稳定和准确的同步。\nchrony为独立网络提供支持，无论时间校正的唯一方法是手动输入（例如，由管理员查看时钟）。chrony可以查看在不同更新时更正的错误，计算出计算机获得或丢失时间的速率，并使用此估计值来随后调整计算机时钟。\nchrony支持计算实时时钟的增益或丢失率，即在计算机关闭时保持时间的时钟。当系统引导时，它可以使用这些数据从实时时钟的修正版本设置系统时间。到目前为止，这些实时时钟工具仅在Linux上可用。")]),n._v(" "),s("h1",{attrs:{id:"五、chrony服务安装的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、chrony服务安装的文件"}},[n._v("#")]),n._v(" 五、chrony服务安装的文件：")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("root@master200.yinzhengjie.org.cn ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# rpm -ql chrony")]),n._v("\n/etc/NetworkManager/dispatcher.d/20-chrony\n/etc/chrony.conf　　　　　　　　"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#chrony的主配置文件")]),n._v("\n/etc/chrony.keys\n/etc/dhcp/dhclient.d/chrony.sh\n/etc/logrotate.d/chrony\n/etc/sysconfig/chronyd\n/usr/bin/chronyc　　　　　　　　"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#chronyc是一个命令行交互式接口程序，可用于监视chronyd的性能，并在运行时更改各种操作参数。")]),n._v("\n/usr/lib/systemd/ntp-units.d/50-chronyd.list\n/usr/lib/systemd/system/chrony-dnssrv@.service\n/usr/lib/systemd/system/chrony-dnssrv@.timer\n/usr/lib/systemd/system/chrony-wait.service\n/usr/lib/systemd/system/chronyd.service　　　　　　"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#CentOS 7.x版本对应的unit file")]),n._v("\n/usr/libexec/chrony-helper\n/usr/sbin/chronyd              "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#chronyd是一个可以在启动时启动的守护程序，它既可以充当服务端进程也可以充当服务端进程")]),n._v("\n/usr/share/doc/chrony-3.4\n/usr/share/doc/chrony-3.4/COPYING\n/usr/share/doc/chrony-3.4/FAQ\n/usr/share/doc/chrony-3.4/NEWS\n/usr/share/doc/chrony-3.4/README\n/usr/share/man/man1/chronyc.1.gz\n/usr/share/man/man5/chrony.conf.5.gz\n/usr/share/man/man8/chronyd.8.gz\n/var/lib/chrony\n/var/lib/chrony/drift\n/var/lib/chrony/rtc\n/var/log/chrony\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br")])]),s("h1",{attrs:{id:"六、chrony配置chrony-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、chrony配置chrony-conf"}},[n._v("#")]),n._v(" 六、Chrony配置chrony.conf")]),n._v(" "),s("h2",{attrs:{id:"常用配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用配置项"}},[n._v("#")]),n._v(" 常用配置项：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("Pool 10.210.116.60                       #此指令的语法与server指令的语法类似，只是它用于指定NTP服务器池，而不是单个NTP服务器。池名称需要解析为多个地址，这些地址可能会随着时间的推移而改变。\nserver 0.centos.pool.ntp.org iburst          #server可用于时钟服务器；iburst，当服务器可达时，发送一个八个数据包而不是通常的一个数据包，包间隔通常为2秒，可加快初始同步速度; iburst 是参数, 一般用此参数即可。该参数的含义是在头四次 NTP 请求以 2s 或者更短的间隔，而不是以 minpoll x 指定的最小间隔，这样的设置可以让 chronyd 启动时快速进行一次同步。\n其他的参数有 minpoll x 默认值是 6，代表 64s。maxpoll x 默认值是 9，代表 512s。\nserver 1.centos.pool.ntp.org iburst          #N.centos.pool.ntp.org：这个是地址池，是ntp服务的虚拟集群，这里可以写成集群地址，也可以写指定的某服务器\npeer 10.210.116.160     #同ntp, 对等体模式\ndriftfile /var/lib/chrony/drift              #根据实际时间计算出计算机增减时间的比率，讲它记录到一个文件中，会在重启后为系统时钟做出补偿\nmakestep 1.0 3                         #当头三次校时，如果时间相差 1.0s, 则跳跃式校时\nrtcsync                                #启用内核模式，系统时钟每11分钟会拷贝到实时时钟（RTC）\n#allow 192.168.0.0/16                   #allow/deny：仅允许/拒绝192.168.2.0/24网络的主机可以访问此时间服务器 deny all拒绝所有客户端\n#local stratum 10                       #即使server指令中时间服务器不可用，也允许讲本地时间做为标准时间授时给其它客户端\nstratumweight 0.05                      # 让chronyd在选择源时忽略源的层级\n#hwtimestamp *                        #通过使用 hwtimestamp 指令启用硬件时间戳\n#minsources 2                          #增加调整所需的可选择源的最小数量\n#keyfile /etc/chrony.keys                 # 指定包含NTP验证密钥的文件。\nlogdir /var/log/chrony                   # 指定日志文件的目录。\nlogchange 0.5                          # 如果时钟调整大于0.5秒，则向系统日志发送消息\n#log measurements statistics tracking      #选择日志文件要记录的信息\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br")])]),s("h2",{attrs:{id:"建议配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建议配置项"}},[n._v("#")]),n._v(" 建议配置项：")]),n._v(" "),s("ol",[s("li",[n._v("当前节点设置成server:127.127.0.1")]),n._v(" "),s("li",[n._v("三个master节点作为其他普通节点的时间服务器（配置成pool）")]),n._v(" "),s("li",[n._v("三个master节点互为peer(同原ntp)")]),n._v(" "),s("li",[n._v("如果有外部时钟源配置，则设置成pool")]),n._v(" "),s("li",[n._v("如果时间超过10min，则允许第一次跳跃 （与之前沟通需求保持一致，可修改策略）")]),n._v(" "),s("li",[n._v("最多3个外部时钟源，可以不设置外部时钟源")])]),n._v(" "),s("h2",{attrs:{id:"ntp-server-master节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ntp-server-master节点"}},[n._v("#")]),n._v(" NTP Server(master节点)")]),n._v(" "),s("p",[n._v("server 127.127.0.1\npool 外部时钟源1\npool外部时钟源2\npeer master2节点IP\npeer master3节点IP\ndriftfile /var/lib/chrony/drift\nmakestep 600 1\nrtcsync\nlogdir /var/log/chrony")]),n._v(" "),s("h2",{attrs:{id:"ntp-client-普通node节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ntp-client-普通node节点"}},[n._v("#")]),n._v(" NTP Client(普通node节点)")]),n._v(" "),s("p",[n._v("server 127.127.0.1\npool外部时钟源1\npool外部时钟源2\npool master1节点IP\npool master2节点IP\npool master3节点IP\ndriftfile /var/lib/chrony/drift\nmakestep 600 1\nrtcsync\nlogdir /var/log/chrony")]),n._v(" "),s("h1",{attrs:{id:"七、部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、部署"}},[n._v("#")]),n._v(" 七、部署:")]),n._v(" "),s("p",[n._v("enable chrony， disable ntpd")]),n._v(" "),s("ol",[s("li",[n._v("Stop/disable ntpd")]),n._v(" "),s("li",[n._v("configure chrony.conf(master/node)")]),n._v(" "),s("li",[n._v("systemctl start/enable chronyd.service")]),n._v(" "),s("li",[n._v("systemctl restart chronyd.service (notify)")])]),n._v(" "),s("h1",{attrs:{id:"八、常用chrony命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、常用chrony命令"}},[n._v("#")]),n._v(" 八、常用chrony命令：")]),n._v(" "),s("p",[n._v("1、\tchronyd -q 'server ntp.ntsc.ac.cn iburst'  临时同步时间\n2、\tchronyc -n sources -v  查看时间同步服务器列表\n3、\taccheck - 检查NTP访问是否对特定主机可用\n4、\tactivity - 该命令会显示有多少NTP源在线/离线\n5、\tadd server - 手动添加一台新的NTP服务器。\n6、\tclients - 在客户端报告已访问到服务器\n7、\tdelete - 手动移除NTP服务器或对等服务器\n8、\tsettime - 手动设置守护进程时间\n9、\ttracking - 显示系统时间信息")]),n._v(" "),s("h1",{attrs:{id:"九、问题定位思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九、问题定位思路"}},[n._v("#")]),n._v(" 九、问题定位思路")]),n._v(" "),s("p",[n._v("1.检查chrony服务是否正常：chrony activity\n2.检查ntpd服务是否启动：systemctl is-active ntpd\n3.检查时间同步服务器列表：chronyc -n sources -v")]),n._v(" "),s("h1",{attrs:{id:"十、参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十、参考资料"}},[n._v("#")]),n._v(" 十、参考资料：")]),n._v(" "),s("p",[n._v("https://chrony.tuxfamily.org/documentation.html")])])}),[],!1,null,null,null);s.default=a.exports}}]);