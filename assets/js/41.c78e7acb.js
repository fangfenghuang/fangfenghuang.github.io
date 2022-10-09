(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{367:function(s,e,a){"use strict";a.r(e);var t=a(0),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"判断文件是否存在-创建空文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#判断文件是否存在-创建空文件"}},[s._v("#")]),s._v(" 判断文件是否存在/创建空文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('emptyFile, err := os.Create("empty.txt")\ndefer emptyFile.Close()\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('_, err := os.Stat("test")\n \nif os.IsNotExist(err) {\n    errDir := os.MkdirAll("test", 0755)\n    if errDir != nil {\n        log.Fatal(err)\n    }\n\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h1",{attrs:{id:"重命名文件-os-rename"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重命名文件-os-rename"}},[s._v("#")]),s._v(" 重命名文件: os.Rename")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('oldName := "test.txt"\nnewName := "testing.txt"\nerr := os.Rename(oldName, newName)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h1",{attrs:{id:"移动文件-os-rename"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动文件-os-rename"}},[s._v("#")]),s._v(" 移动文件: os.Rename")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('oldLocation := "/var/www/html/test.txt"\nnewLocation := "/var/www/html/src/test.txt"\nerr := os.Rename(oldLocation, newLocation)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h1",{attrs:{id:"复制文件-io-copy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制文件-io-copy"}},[s._v("#")]),s._v(" 复制文件: io.Copy")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('sourceFile, err := os.Open("/var/www/html/src/test.txt")\ndefer sourceFile.Close()\nnewFile, err := os.Create("/var/www/html/test.txt")\ndefer newFile.Close()\nbytesCopied, err := io.Copy(newFile, sourceFile)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h1",{attrs:{id:"获取文件的metadata信息-os-stat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取文件的metadata信息-os-stat"}},[s._v("#")]),s._v(" 获取文件的metadata信息: os.Stat()")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('fileStat, err := os.Stat("test.txt")\nfmt.Println("File Name:", fileStat.Name())        // Base name of the file\nfmt.Println("Size:", fileStat.Size())             // Length in bytes for regular files\nfmt.Println("Permissions:", fileStat.Mode())      // File mode bits\nfmt.Println("Last Modified:", fileStat.ModTime()) // Last modification time\nfmt.Println("Is Directory: ", fileStat.IsDir())   // Abbreviation for Mode().IsDir()\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h1",{attrs:{id:"删除文件-os-remove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除文件-os-remove"}},[s._v("#")]),s._v(" 删除文件: os.Remove()")]),s._v(" "),e("h1",{attrs:{id:"读取文件字符-bufio-newscanner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读取文件字符-bufio-newscanner"}},[s._v("#")]),s._v(" 读取文件字符: bufio.NewScanner()")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("filebuffer, err := ioutil.ReadFile(filename)\ninputdata := string(filebuffer)\ndata := bufio.NewScanner(strings.NewReader(inputdata))\ndata.Split(bufio.ScanRunes)\nfor data.Scan() {\n    fmt.Print(data.Text())\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h1",{attrs:{id:"清除文件-os-truncate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清除文件-os-truncate"}},[s._v("#")]),s._v(" 清除文件: os.Truncate()")]),s._v(" "),e("p",[s._v("裁剪一个文件到100个字节.\n如果文件本来就少于100个字节,则文件中原始内容得以保留,剩余的字节以null字节填充.\n如果文件本来超过100个字节,则超过的字节会被抛弃.\n这样我们总是得到精确的100个字节的文件.\n传入0则会清空文件.")]),s._v(" "),e("h1",{attrs:{id:"向文件添加内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#向文件添加内容"}},[s._v("#")]),s._v(" 向文件添加内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('f, err := os.OpenFile(filename, os.O_RDWR|os.O_APPEND|os.O_CREATE, 0660)\nfmt.Fprintf(f, "%s\\n", message)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h1",{attrs:{id:"修改文件权限-时间戳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改文件权限-时间戳"}},[s._v("#")]),s._v(" 修改文件权限,时间戳")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('err = os.Chmod("test.txt", 0777)\nerr = os.Chown("test.txt", os.Getuid(), os.Getgid())\nerr = os.Chtimes("test.txt", lastAccessTime, lastModifyTime)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h1",{attrs:{id:"zip操作-archive-zip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zip操作-archive-zip"}},[s._v("#")]),s._v(' zip操作 "archive/zip"')]),s._v(" "),e("ul",[e("li",[s._v("压缩文件到ZIP格式")]),s._v(" "),e("li",[s._v("读取ZIP文件里面的文件")]),s._v(" "),e("li",[s._v("解压ZIP文件")])])])}),[],!1,null,null,null);e.default=n.exports}}]);