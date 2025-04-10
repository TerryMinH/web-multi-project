
const { program } = require('commander');
const create = require('../lib/create');

program
  .version(require('../package.json').version)
  .command('create <project-name>')
  .description('创建一个新项目')
  .action((name) => {
    create(name);
  });

program.parse(process.argv);