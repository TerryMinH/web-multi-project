<!--
 * @Author: TerryMin
 * @Date: 2022-06-29 09:14:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-01-28 09:28:11
 * @Description: file not
-->

# shell 编程

一 [shell 文档](https://www.runoob.com/linux/linux-shell.html)

## shell 基础知识

在一般情况下，人们并不区分 Bourne Shell 和 Bourne Again Shell，所以，像 #!/bin/sh，它同样也可以改为 #!/bin/bash。
#! 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。

1. shell 变量:定义变量时，变量名不加美元符号（$，PHP 语言中变量需要）,使用时需要添加$符号

```sh
address='shanghai';
echo $address
echo ${address}
```

2. 在 vscode 中使用:  sh base.sh

二 Vim 使用

- [Mac 终端个性化设置](https://blog.csdn.net/BreakingDawn0/article/details/104835403)
