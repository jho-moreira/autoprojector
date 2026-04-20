#!/usr/bin/env node
import { Command } from 'commander';
import { createProject } from '../generators/projectGenerator.js';

const program = new Command()
  .name('autoprojector')
  .description('🚀 CLI para automação de projetos')
  .version('1.0.0');

program
  .command('create <name>')
  .description('Cria um novo projeto')
  .option('--template <type>', 'Template: react', 'react')
  .action(async (name, options) => {
    console.log(🎉 Criando \ com template \...);
    await createProject(name, options);
  });

program.parse();
