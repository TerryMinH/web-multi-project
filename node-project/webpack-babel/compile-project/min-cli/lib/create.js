/*
 * @Author: TerryMin
 * @Date: 2025-04-10 21:08:37
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-10 21:31:27
 * @Description: file not
 */

const fs = require('node:fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { promisify } = require('util');
const download = require('download-git-repo');

module.exports = async function(projectName) {
  // 1. 检查目录是否已存在
  const targetDir = path.join(process.cwd(), projectName);
  if (fs.existsSync(targetDir)) {
    const { action } = await inquirer.prompt([
      {
        name: 'action',
        type: 'list',
        message: '目录已存在，请选择操作:',
        choices: [
          { name: '覆盖', value: 'overwrite' },
          { name: '取消', value: false }
        ]
      }
    ]);
    
    if (!action) return;
    if (action === 'overwrite') {
      console.log(`\n删除 ${chalk.cyan(targetDir)}...`);
      await promisify(fs.rmdir)(targetDir, { recursive: true });
    }
  }

  // 2. 选择模板
  const { template } = await inquirer.prompt([
    {
      name: 'template',
      type: 'list',
      message: '请选择项目模板:',
      choices: [
        { name: '默认模板', value: 'default' },
        { name: '高级模板', value: 'advanced' }
      ]
    }
  ]);

  // 3. 下载模板
  console.log(`\n正在创建项目 ${chalk.cyan(projectName)}...`);
  await download(`github:yourname/template-${template}`, targetDir, { clone: true }, (err) => {
    if (err) {
      console.log(chalk.red('下载失败: ' + err.message.trim()));
      return;
    }
    
    // 4. 安装依赖
    console.log(`\n项目创建成功 ${chalk.green('✓')}`);
    console.log(`\n进入项目目录并安装依赖:\n`);
    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan('  npm install'));
    console.log(chalk.cyan('  npm run dev\n'));
  });
};