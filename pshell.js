#!/usr/bin/env node
/*
 * @Author: TerryMin
 * @Date: 2024-05-14 10:43:08
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-06-09 09:22:36
 * @Description: file not
 */
'use strict';

var name = process.argv[2] || 'Auto-commit';
var mark = process.argv[3] || 'Vue';
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
