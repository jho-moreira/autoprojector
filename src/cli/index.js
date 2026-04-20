const { Command } = require('commander');
const { createProject } = require('../generators/projectGenerator.js');

const program = new Command()
  .name('autoprojector')
  .description('CLI para automacao')
  .version('1.0.0');

program
  .command('create <name>')
  .description('Cria projeto')
  .option('--template <type>', 'react', 'react')
  .action((name, options) => {
    console.log('Criando ' + name + ' ...');
    createProject(name, options);
  });

program.parse();
