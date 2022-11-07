(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{403:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("在 Go 中,Slice（切片）是抽象在 Array（数组）之上的特殊类型")]),s._v(" "),n("h2",{attrs:{id:"array数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#array数组"}},[s._v("#")]),s._v(" Array数组")]),s._v(" "),n("p",[s._v("[3]int{} 表示 3 个整数的数组")]),s._v(" "),n("h2",{attrs:{id:"slice切片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slice切片"}},[s._v("#")]),s._v(" Slice切片")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("type slice struct {\n\tarray unsafe.Pointer\n\tlen   int\n\tcap   int\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("Slice 的底层数据结构共分为三部分,如下：")]),s._v(" "),n("ul",[n("li",[s._v("array：指向所引用的数组指针（unsafe.Pointer 可以表示任何可寻址的值的指针）")]),s._v(" "),n("li",[s._v("len：长度,当前引用切片的元素个数")]),s._v(" "),n("li",[s._v("cap：容量,当前引用切片的容量（底层数组的元素总数）\n在实际使用中,cap 一定是大于或等于 len 的.否则会导致 panic")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("nums := [3]int{}\nnums[0] = 1\ndnums := nums[0:2]\n# nums: [1 0 0] \n# dnums: [1 0], len: 2, cap: 3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("Slice 是对 Array 的抽象,类型为 []T\ndnums 变量通过 nums[:] 进行赋值\ndnums 变量通过 nums[:] 进行赋值")]),s._v(" "),n("h3",{attrs:{id:"slice-的创建方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slice-的创建方式"}},[s._v("#")]),s._v(" Slice 的创建方式：")]),s._v(" "),n("ul",[n("li",[s._v("test := []int{2,3}")]),s._v(" "),n("li",[s._v("test := make([]int, 5, 5)  // 创建一个类型为 int，长度为 5，容量为 5 的切片")]),s._v(" "),n("li",[s._v("test1 := make([]int, 3)                        //如果不指定容量，默认容量等于初始时的长度")]),s._v(" "),n("li",[s._v("test := make([]int,0)                              // 创建一个长度为0，容量为0 的数组\ntest = append(test, 1)\n//当数组的容量不够时，会重新申请一个两倍于当前长度的 slice，所以在使用过程中，尤其是频繁去往一个 slice 中 append 数据，需要尽可能给一个相对准确的容量， 减少分配过程的损耗。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);