<!--
 * @Author: TerryMin
 * @Date: 2023-06-05 17:44:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-18 16:07:29
 * @Description: file not
-->

# Linux 常用命令

- [Linux 命令大全](https://www.runoob.com/linux/linux-command-manual.html)

  - cp（copy file）命令主要用于复制文件或目录

  ```js
  // 使用指令 cp 将当前目录 test/ 下的所有文件复制到新目录 newtest 下. -r/-R (递归：recursion)
  cp –r test/ newtest
  ```

  - mkdir（make directory）命令用于创建目录

  ```js
  // -p 确保目录名称存在，不存在的就建一个.确保不会报错
  mkdir [-p] dirName
  ```

  - cat 拼接文本文件或标准输入，并输出到标准输出 [cat 用法](https://blog.csdn.net/weixin_41830716/article/details/106725464)

  - [Linux 基础 grep、sed、awak 命令](https://zhuanlan.zhihu.com/p/110983126)文本处理命令:
    grep(Global Regular Expression Print)表示全局正则表达式版本，它的使用权限是所有用户:查找整个文本文件
    sed(stream editor 流编辑器):作用是利用脚本来处理文本文件
    awk:是一个强大的文本分析工具，相对于 grep 的查找，sed 的编辑，awk 在其对数据分析并生成报告时，显得尤为强大。简单来说 awk 就是把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理

- IP 相关命令

  1.  ping：主要用于测试网络连接的可达性。它通过向目标主机发送 ICMP（Internet Control Message Protocol）回声请求数据包，并接收目标主机返回的回声响应数据包，以此来判断网络连接是否正常，以及测量网络的延迟情况。
  2.  nslookup：用于查询 DNS（Domain Name System）记录，获取域名对应的 IP 地址以及其他相关的 DNS 信息，如前面提到的查询域名的规范名称、邮件交换记录等。

      ```js
      // 在CMD面板中
      ping www.baidu.com
      nslookup www.baidu.com
      ```
