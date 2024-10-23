#!/usr/bin/env node
/*
 * @Author: TerryMin
 * @Date: 2024-06-09 10:45:57
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-10-23 13:57:39
 * @Description: file not
 */
'use strict';

var name = process.argv[2] || 'default commit';
var mark = process.argv[3] || 'default add';
var shell = require("shelljs/global");

if (!which('git')) {
    echo('Sorry, this script requires Git');
    exit(1);
}

if (exec('git add .').code !== 0) {
    echo('Error: Git add failed');
    exit(1);
}

if (exec(`git commit -a -m "mark: ${mark} feature: ${name}"`).code !== 0) {
    echo('Error: Git commit failed');
    exit(1);
}
// if (exec(`git commit -am "${name}"`).code !== 0) {
//     echo('Error: Git commit failed');
//     exit(1);
// }

if (exec('git push').code !== 0) {
    echo('Error: Git push failed');
    exit(1);
}

exec(`echo Git success ${name}`);
