<!--
 * @Author: TerryMin
 * @Date: 2023-04-03 07:36:22
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-08-13 10:56:23
 * @Description: file not
-->

# 代理配置

## whistle:

- whistle
  [whistle 官网](https://wproxy.org/whistle/quickstart.html)
  启动 whistle： w2 start (w2 start -p 8888)
  重启 whistle： - w2 restart
  关闭 whistle： - w2 stop

1. [whistle 搜索过滤抓包数据的方法](https://github.com/avwo/help/issues/13)
2. Proxy SwitchyOmega:插件作用：如果我们有多个代理，可以通过这个插件进行快速切换。我理解和 switch 的功能差不多

## Charles:

[Charles android 机代理配置](https://blog.csdn.net/qq_45564088/article/details/121864553)

1. Charles ssl 证书安装:
   1.1 手机连接代理后 在手机默认浏览器输入 chls.pro/ssl 安装证书
   1.2 以华为手机为例：设置—>安全—>更多安全设置—>加密和凭据—>从存储设备安装—>搜索 Charles 即可找到下载的安装包—>点击证书，为其命名为 Charles，选择“VPN 和应用”—>点击“确定”即可
   1.3 https://blog.csdn.net/qq_45564088/article/details/121864553

## [基于 Http-service 快速搭建本地静态服务](https://blog.csdn.net/weixin_45932733/article/details/115861292)

1. http-server ./dist -p 8082 -c -1
