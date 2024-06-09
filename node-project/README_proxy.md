<!--
 * @Author: TerryMin
 * @Date: 2023-04-03 07:36:22
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-02-04 20:12:03
 * @Description: file not
-->

# 代理配置

一 whistle:

1. whistle
   [whistle 官网](https://wproxy.org/whistle/quickstart.html)
   启动 whistle： w2 start (w2 start -p 8888)
   重启 whistle： - w2 restart
   关闭 whistle： - w2 stop
2. [whistle 使用教程](https://juejin.cn/post/6930415221185970189)
3. [whistle 搜索过滤抓包数据的方法](https://github.com/avwo/help/issues/13)

二 Charles:
[Charles android 机代理配置](https://blog.csdn.net/qq_45564088/article/details/121864553)

1. Charles ssl证书安装:
   1.1 手机连接代理后 在手机默认浏览器输入 chls.pro/ssl 安装证书
   1.2 以华为手机为例：设置—>安全—>更多安全设置—>加密和凭据—>从存储设备安装—>搜索Charles即可找到下载的安装包—>点击证书，为其命名为Charles，选择“VPN和应用”—>点击“确定”即可
   1.3 https://blog.csdn.net/qq_45564088/article/details/121864553



三 [基于 Http-service 快速搭建本地静态服务](https://blog.csdn.net/weixin_45932733/article/details/115861292)

1. http-server ./dist -p 8082 -c -1
