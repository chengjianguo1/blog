(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{422:function(t,a,_){"use strict";_.r(a);var v=_(41),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_4-容器命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-容器命令"}},[t._v("#")]),t._v(" 4.容器命令")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("docker run")]),t._v(" 命令会从 "),_("code",[t._v("image")]),t._v(" 文件，生成一个正在运行的容器实例。")]),t._v(" "),_("li",[_("code",[t._v("docker container run")]),t._v(" 命令具有自动抓取 image 文件的功能。如果发现本地没有指定的 image 文件，就会从仓库自动抓取")]),t._v(" "),_("li",[t._v("输出提示以后，hello world就会停止运行，容器自动终止。\n有些容器不会自动终止")]),t._v(" "),_("li",[t._v("image 文件生成的容器实例，本身也是一个文件，称为容器文件")]),t._v(" "),_("li",[t._v("容器生成，就会同时存在两个文件： image 文件和容器文件")]),t._v(" "),_("li",[t._v("关闭容器并不会删除容器文件，只是容器停止运行")])]),t._v(" "),_("h2",{attrs:{id:"_4-1-命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-命令"}},[t._v("#")]),t._v(" 4.1 命令")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("含义")]),t._v(" "),_("th",[t._v("案例")]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("run")]),t._v(" "),_("td",[t._v("从镜像运行一个容器")]),t._v(" "),_("td",[t._v("docker run ubuntu /bin/echo 'hello-world'")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("ls")]),t._v(" "),_("td",[t._v("列出容器")]),t._v(" "),_("td",[t._v("docker container ls")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("inspect")]),t._v(" "),_("td",[t._v("显示一个或多个容器详细信息")]),t._v(" "),_("td",[t._v("docker inspect")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("attach")]),t._v(" "),_("td",[t._v("要attach上去的容器必须正在运行，可以同时连接上同一个container来共享屏幕")]),t._v(" "),_("td",[t._v("docker attach [OPTIONS] CONTAINER")]),t._v(" "),_("td",[t._v("docker attach 6d1a25f95132")])]),t._v(" "),_("tr",[_("td",[t._v("stats")]),t._v(" "),_("td",[t._v("显示容器资源使用统计")]),t._v(" "),_("td",[t._v("docker container stats")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("top")]),t._v(" "),_("td",[t._v("显示一个容器运行的进程")]),t._v(" "),_("td",[t._v("docker container top")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("update")]),t._v(" "),_("td",[t._v("更新一个或多个容器配置")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("docker update -m 500m --memory-swap -1 6d1a25f95132")])]),t._v(" "),_("tr",[_("td",[t._v("port")]),t._v(" "),_("td",[t._v("列出指定的容器的端口映射")]),t._v(" "),_("td",[t._v("docker run -d -p 8080:80 nginx docker container port containerID")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("ps")]),t._v(" "),_("td",[t._v("查看当前运行的容器")]),t._v(" "),_("td",[t._v("docker ps -a -l")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("kill [containerId]")]),t._v(" "),_("td",[t._v("终止容器(发送SIGKILL )")]),t._v(" "),_("td",[t._v("docker kill [containerId]")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("rm [containerId]")]),t._v(" "),_("td",[t._v("删除容器")]),t._v(" "),_("td",[t._v("docker rm [containerId]")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("start [containerId]")]),t._v(" "),_("td",[t._v("启动已经生成、已经停止运行的容器文件")]),t._v(" "),_("td",[t._v("docker start [containerId]")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("stop [containerId]")]),t._v(" "),_("td",[t._v("终止容器运行 (发送 SIGTERM )")]),t._v(" "),_("td",[t._v("docker stop [containerId] docker container stop $(docker container ps -aq)")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("logs [containerId]")]),t._v(" "),_("td",[t._v("查看 docker 容器的输出")]),t._v(" "),_("td",[t._v("docker logs [containerId]")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("exec [containerId]")]),t._v(" "),_("td",[t._v("进入一个正在运行的 docker 容器执行命令")]),t._v(" "),_("td",[t._v("docker container exec -it f6a53629488b /bin/bash")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("cp [containerId]")]),t._v(" "),_("td",[t._v("从正在运行的 Docker 容器里面，将文件拷贝到本机")]),t._v(" "),_("td",[t._v("docker container cp f6a53629488b:/root/root.txt .")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("commit [containerId]")]),t._v(" "),_("td",[t._v("根据一个现有容器创建一个新的镜像")]),t._v(" "),_("td",[t._v('docker commit -a "zhufeng" -m "mynginx" a404c6c174a2 mynginx:v1')]),t._v(" "),_("td")])])]),t._v(" "),_("ul",[_("li",[t._v("docker容器的主线程（dockfile中CMD执行的命令）结束，容器会退出")]),t._v(" "),_("li",[t._v("以使用交互式启动 "),_("code",[t._v("docker run -i [CONTAINER_NAME or CONTAINER_ID]")])]),t._v(" "),_("li",[t._v("tty选项 "),_("code",[t._v("docker run -dit [CONTAINER_NAME or CONTAINER_ID]")])]),t._v(" "),_("li",[t._v("守护态（Daemonized）形式运行 "),_("code",[t._v('docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1;done"')])])]),t._v(" "),_("h2",{attrs:{id:"_4-2-启动容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-启动容器"}},[t._v("#")]),t._v(" 4.2 启动容器")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker run ubuntu /bin/echo "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world"')]),t._v("\n")])])]),_("ul",[_("li",[t._v("docker: Docker 的二进制执行文件。")]),t._v(" "),_("li",[t._v("run:与前面的 docker 组合来运行一个容器。")]),t._v(" "),_("li",[t._v("ubuntu指定要运行的镜像，Docker首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。")]),t._v(" "),_("li",[t._v('/bin/echo "Hello world": 在启动的容器里执行的命令')])]),t._v(" "),_("blockquote",[_("p",[t._v('Docker以ubuntu镜像创建一个新容器，然后在容器里执行 bin/echo "Hello world"，然后输出结果')]),t._v(" "),_("ul",[_("li",[t._v("Docker attach必须是登陆到一个已经运行的容器里。需要注意的是如果从这个容器中exit退出的话，就会导致容器停止")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("含义")]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("-i --interactive")]),t._v(" "),_("td",[t._v("交互式")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("-t --tty")]),t._v(" "),_("td",[t._v("运行容器到后台")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("-a --attach list")]),t._v(" "),_("td",[t._v("附加到运行的容器")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("-e --env list")]),t._v(" "),_("td",[t._v("设置环境变量")]),t._v(" "),_("td",[t._v('docker run -d -p 1010:80 -e username="zhufeng" nginx \\ docker container exec -it 3695dc5b9c2d /bin/bash')])]),t._v(" "),_("tr",[_("td",[t._v("-p --publish list")]),t._v(" "),_("td",[t._v("发布容器端口到主机")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("-P")]),t._v(" "),_("td",[t._v("--publish-all")]),t._v(" "),_("td")])])]),t._v(" "),_("h2",{attrs:{id:"_4-3-查看容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-查看容器"}},[t._v("#")]),t._v(" 4.3 查看容器")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v(" docker "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n docker -a\n docker -l\n")])])]),_("ul",[_("li",[t._v("-a 显示所有的容器，包括已停止的")]),t._v(" "),_("li",[t._v("-l 显示最新的那个容器")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("CONTAINER ID")]),t._v(" "),_("td",[t._v("容器ID")])]),t._v(" "),_("tr",[_("td",[t._v("IMAGE")]),t._v(" "),_("td",[t._v("使用的镜像")])]),t._v(" "),_("tr",[_("td",[t._v("COMMAND")]),t._v(" "),_("td",[t._v("使用的命令")])]),t._v(" "),_("tr",[_("td",[t._v("CREATED")]),t._v(" "),_("td",[t._v("创建时间")])]),t._v(" "),_("tr",[_("td",[t._v("STATUS")]),t._v(" "),_("td",[t._v("状态")])]),t._v(" "),_("tr",[_("td",[t._v("PORTS")]),t._v(" "),_("td",[t._v("端口号")])]),t._v(" "),_("tr",[_("td",[t._v("NAMES")]),t._v(" "),_("td",[t._v("自动分配的名称")])])])]),t._v(" "),_("h2",{attrs:{id:"_4-4-运行交互式的容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-运行交互式的容器"}},[t._v("#")]),t._v(" 4.4 运行交互式的容器")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker run -i -t ubuntu /bin/bash\n")])])]),_("ul",[_("li",[t._v("-t=--interactive 在新容器内指定一个伪终端或终端。")]),t._v(" "),_("li",[t._v("-i=--tty 允许你对容器内的标准输入 (STDIN) 进行交互。")])]),t._v(" "),_("blockquote",[_("p",[t._v("我们可以通过运行exit命令或者使用CTRL+D来退出容器。")])]),t._v(" "),_("h2",{attrs:{id:"_4-5-后台运行容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-后台运行容器"}},[t._v("#")]),t._v(" 4.5 后台运行容器")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker run --detach centos "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" www.baidu.com\ndocker "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" \ndocker logs --follow ad04d9acde94\ndocker stop ad04d9acde94\n")])])]),_("h2",{attrs:{id:"_4-6-kill"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-kill"}},[t._v("#")]),t._v(" 4.6 kill")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" 5a5c3a760f61\n")])])]),_("blockquote",[_("p",[t._v("kill是不管容器同不同意，直接执行kill -9，强行终止；stop的话，首先给容器发送一个TERM信号，让容器做一些退出前必须的保护性、安全性操作，然后让容器自动停止运行，如果在一段时间内，容器还是没有停止，再进行kill -9，强行终止")])]),t._v(" "),_("h2",{attrs:{id:"_4-7-删除容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-删除容器"}},[t._v("#")]),t._v(" 4.7 删除容器")]),t._v(" "),_("ul",[_("li",[t._v("docker rm 删除容器")]),t._v(" "),_("li",[t._v("docker rmi  删除镜像")]),t._v(" "),_("li",[t._v("docker rm $(docker ps -a -q)")])]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 5a5c3a760f61\n")])])]),_("h2",{attrs:{id:"_4-8-启动容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-启动容器"}},[t._v("#")]),t._v(" 4.8 启动容器")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker start "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("containerId"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),_("h2",{attrs:{id:"_4-9-停止容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-停止容器"}},[t._v("#")]),t._v(" 4.9 停止容器")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker stop "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("containerId"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),_("h2",{attrs:{id:"_4-10-进入一个容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-10-进入一个容器"}},[t._v("#")]),t._v(" 4.10 进入一个容器")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker attach "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("containerID"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),_("h2",{attrs:{id:"_4-11-进入一个正在运行中的容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-11-进入一个正在运行中的容器"}},[t._v("#")]),t._v(" 4.11 进入一个正在运行中的容器")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker container -exec -it "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("containerID"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" /bin/bash\n")])])]),_("h2",{attrs:{id:"_4-12-拷贝文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-12-拷贝文件"}},[t._v("#")]),t._v(" 4.12 拷贝文件")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker container "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("containerID"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" /readme.md "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),_("h2",{attrs:{id:"_4-13-自动删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-13-自动删除"}},[t._v("#")]),t._v(" 4.13 自动删除")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("docker run --rm ubuntu /bin/bash\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);