<!--
 * @Author: TerryMin
 * @Date: 2022-07-21 17:13:48
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-19 08:12:46
 * @Description: Nginx 直接本地访问localhost:8082地址即可测试Nginx功能
-->

# [Nginx](https://nginx.org/)

## Nginx 基础知识:

- Nginx 作用：

  1. 代理:
     1.1 正向代理: 代理客户端
     1.2 反向代理: 代理服务器

  2. 负载均衡:
     2.1 轮询
     2.2 加权轮询

  3. 动静分离: 处理资源加载

## Nginx 配置:

- 全局配置
- events 配置
- http 配置(http 端口 80, https 端口 443)

  ```js

  user  nobody; // 设置进程用户,这里的用户指的是Linux中的用户，会涉及nginx操作目录或文件的权限
  worker_processes  1; // 设置工作进程数,一般来说CPU有几个就将工作进程数设置为几个

  // 设置日志级别：debugger,info,notice,warn,error
  error_log  logs/error.log;
  error_log  logs/error.log  notice;
  error_log  logs/error.log  info;

  pid     /usr/local/etc/nginx/logs/nginx.pid; // pid文件的作用是防止Nginx服务被启动多次

  // events工作模式配置
  events {
      worker_connections  1024;
  }

  // http网络传输配置
  http {
      include       mime.types; // 引入外部配置
      default_type  application/octet-stream;
      access_log  logs/access.log  main;

  // 开启高效文件传输模式,sendfile启用后才能使用tcp_nopush，tcp_nopush是指当数据包累积一定大小后才发送，这样有助于解决网络堵塞，提高了效率。
      sendfile        on;
      tcp_nopush     on;

      keepalive_timeout  65; // 设置连接客户端的超时时间

      // server虚拟主机配置
      server {
      listen   8001; // 配置监听端口号
      server_name localhost; // 配置服务名

      // location配置路由
      // 1. nginx 默认启动页面配置
      location / {
          root html;
          index index.html index.htm;
      }

      // 2. nginx通过指定前缀访问指定网站
      location /gateway/ {
          proxy_pass https://cn.bing.com/;
      }
      }

  }
  ```

- nginx 配置代理及设置代理服务器:

  - http 结构下可以有多个 server,请求进来 确定 使用哪一个 server 由 server_name 确定.一个 server 下面可以有多个 location.

  - Nginx 一个 server 下可以有多个 location ，用来匹配 同一个域名下不同 uri 的访问，location 用于匹配请求 URI，匹配上之后按照其定义的方式对该请求进行处理：

  1. 匹配语法规则（按优先级）
     1.1 = 表示精确匹配，优先级最高
     1.2 ^~ 表示 uri 以某个常规字符串开头，用于匹配 url 路径（而且不对 url 做编码处理，例如请求/static/20%/aa，可以被规则^~ /static/ /aa 匹配到（注意是空格））
     1.3 ~ 表示区分大小写的正则匹配
     1.4 ~\* 表示不区分大小写的正则匹配
     1.5 !~ 表示区分大小写不匹配的正则
     1.6 !~\* 表示不区分大小写不匹配的正则
     1.7 / 表示通用匹配，任何请求都会匹配到

  2. [root 与 alias](https://www.cnblogs.com/sunjiguang/p/6227518.html)

  ```js
  /**
       * 访问 http://localhost/appImg/abc.jpg
      * **/

  // root:http://localhost/home/nginx/appImg/abc.jpg
  location ^~ /appImg/{
      root /home/nginx;
  }

  // alias: http://localhost/home/nginx/abc.jpg
  location ^~ /appImg/{
      alias /home/nginx/;
  }
  ```

  3. [location 中 proxy_pass](https://juejin.cn/post/7007053840419651592#heading-9)

  - 属于 nginx_http_proxy_module 中的指令，用于设置代理

    ```js
    /**
     * 1.带URI:形如 https://test.com/、https://test.com/aa，即只要是 域名 后面有/的这种形式。
    * 访问 /proxy/api/aa/bb 会变成实际访问 https://proxy.com/test/v1/aa/bb。
    * (也就是 location 匹配到 path 会被 URL 里面的地址给替换掉)
    * ***/

    location /proxy/api {
        proxy_pass https://proxy.com/test/v1;
    }

    /**
     * 2. 不带URI:访问 /proxy/api/aa/bb 会变成实际访问 https://proxy.com/proxy/api/aa/bb。
    * (也就是 location 匹配到的 path 会被直接透传给 proxy)。
    * ***/
    location /proxy/api {
        proxy_pass https://proxy.com;
    }

    // 3. [location中有斜杠与无斜杠详解](https://blog.csdn.net/q1298252589/article/details/120729989)
    ```

  4. [location 中 index](https://blog.csdn.net/qq_32331073/article/details/81945134):
     4.1 在前后端分离的基础上，通过 Nginx 配置，指定网站初始页。
     4.2 该指令后面可以跟多个文件，用空格隔开;
     4.3 如果包括多个文件，Nginx 会根据文件的枚举顺序来检查，直到查找的文件存在;
     4.4 文件可以是相对路径也可以是绝对路径，绝对路径需要放在最后;
     4.5 文件可以使用变量$来命名

  5. [location 中 try_files](https://juejin.cn/post/7198782832177381431):
     - try_files 主要用于按顺序查找文件或目录，并且依据查找结果决定如何处理请求。
     - $uri 表示当前 location 后面的字符串

## Nginx 资源

- [Nginx 常用命令](https://blog.csdn.net/yaorongke/article/details/81153716)
- [Nginx 安装目录结构](https://blog.csdn.net/qq_24950043/article/details/135074078)
- [Nginx 常考面试题](https://blog.csdn.net/qq_21891743/article/details/131743996)
