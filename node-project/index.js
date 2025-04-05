/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-05 11:00:14
 * @Description: file not
 */
const {exec}=require('child_process');
exec('ls -l | grep .js',(error,stdout,stderr)=>{
    if(error){
        console.error(`执行命令时出错 ${error.message}`);
        return;
    }
    if(stderr){
        console.error(`命令执行过程中出现错误:${stderr}`)
        return;
    }
    console.log(`命令输出结果:\n${stdout}`);
})