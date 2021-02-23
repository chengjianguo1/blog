(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{356:function(s,t,n){s.exports=n.p+"assets/img/2.4b278cb1.png"},419:function(s,t,n){"use strict";n.r(t);var a=n(41),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_10-node项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-node项目"}},[s._v("#")]),s._v(" 10. node项目")]),s._v(" "),a("ul",[a("li",[s._v("nodeapp 是一个用 Docker 搭建的本地 Node.js 应用开发与运行环境。")])]),s._v(" "),a("h2",{attrs:{id:"_10-1-服务分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-服务分类"}},[s._v("#")]),s._v(" 10.1 服务分类")]),s._v(" "),a("ul",[a("li",[s._v("db：使用 "),a("code",[s._v("mariadb")]),s._v(" 作为应用的数据库")]),s._v(" "),a("li",[s._v("node：启动"),a("code",[s._v("node")]),s._v("服务")]),s._v(" "),a("li",[s._v("web：使用 "),a("code",[s._v("nginx")]),s._v(" 作为应用的 web 服务器")])]),s._v(" "),a("h2",{attrs:{id:"_10-2-app目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-app目录结构"}},[s._v("#")]),s._v(" 10.2 app目录结构")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("文件")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("docker-compose.yml")]),s._v(" "),a("td",[s._v("定义本地开发环境需要的服务")])]),s._v(" "),a("tr",[a("td",[s._v("images/nginx/config/default.conf")]),s._v(" "),a("td",[s._v("nginx 配置文件")])]),s._v(" "),a("tr",[a("td",[s._v("images/node/Dockerfile")]),s._v(" "),a("td",[s._v("node的Dockfile配置文件")])]),s._v(" "),a("tr",[a("td",[s._v("images/node/web/package.json")]),s._v(" "),a("td",[s._v("项目文件")])]),s._v(" "),a("tr",[a("td",[s._v("images/node/web/public/index.html")]),s._v(" "),a("td",[s._v("静态首页")])]),s._v(" "),a("tr",[a("td",[s._v("images/node/web/server.js")]),s._v(" "),a("td",[s._v("node服务")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:n(356),alt:"项目结构",title:"项目结构"}})]),s._v(" "),a("h2",{attrs:{id:"_10-2-1-docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-1-docker-compose-yml"}},[s._v("#")]),s._v(" 10.2.1 docker-compose.yml")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("version: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\nservices:\n node:\n  build:\n    context: ./images/node\n    dockerfile: Dockerfile\n  depends_on:\n   - db\n web:\n  image: nginx\n  ports:\n   - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080:80"')]),s._v("\n  volumes:\n   - ./images/nginx/config:/etc/nginx/conf.d\n   - ./images/node/web/public:/public  \n  depends_on:\n   - node\n db:\n  image: mariadb\n  environment:\n   MYSQL_ROOT_PASSWORD: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\n   MYSQL_DATABASE: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),s._v("\n   MYSQL_USER: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zfpx"')]),s._v("\n   MYSQL_PASSWORD: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v("\n  volumes:\n    - db:/var/lib/mysql\nvolumes:\n db:\n  driver: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n")])])]),a("h2",{attrs:{id:"_10-2-2-sever-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-2-sever-js"}},[s._v("#")]),s._v(" 10.2.2 sever.js")]),s._v(" "),a("p",[s._v("images/node/web/server.js")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nvar mysql  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nvar connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mysql.createConnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'db'")]),s._v(",\n  user     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zfpx'")]),s._v(",\n  password "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(",\n  database "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconnection.connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http.createServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("function "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req,res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    connection.query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SELECT 2 + 2 AS solution'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error, results, fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" throw error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        res.end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("+results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".solution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nserver.listen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"_10-2-3-package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-3-package-json"}},[s._v("#")]),s._v(" 10.2.3 package.json")]),s._v(" "),a("p",[s._v("images/node/web/package.json")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node server.js"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^2.16.0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"_10-2-4-images-node-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-4-images-node-dockerfile"}},[s._v("#")]),s._v(" 10.2.4 images/node/Dockerfile")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("FROM node\nMAINTAINER zhangrenyang "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("zhang_renyang@126.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nCOPY ./web /web\nWORKDIR /web\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nCMD "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n")])])]),a("h2",{attrs:{id:"_10-2-5-images-nginx-config-default-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-5-images-nginx-config-default-conf"}},[s._v("#")]),s._v(" 10.2.5 images/nginx/config/default.conf")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("upstream backend "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    server node:3000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root /public"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    index index.html index.htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location /api "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http://backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);