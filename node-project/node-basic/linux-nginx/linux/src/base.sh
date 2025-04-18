#!/bin/bash
###
 # @Author: TerryMin
 # @Date: 2022-06-26 08:45:26
 # @LastEditors: TerryMin
 # @LastEditTime: 2024-01-28 09:35:24
 # @Description: file not
### 

# 变量
address='shanghai'
# echo $address
# echo $PATH // PATH 变量包含了操作系统搜索可执行文件的路径
# echo $0
# echo $1
# echo $#
# echo $*

# 数组
array_name=(1 2 3)
echo "${array_name[1]}"

demoFun(){
    echo "这是我的第一个 shell 函数!"
}
# echo "-----函数开始执行-----"
# demoFun
# echo "-----函数执行完毕-----"