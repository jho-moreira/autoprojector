const fs = require('fs-extra');
const path = require('path');

async function createProject(name, options) {
  const projectPath = path.join(process.cwd(), name);
  
  console.log('Criando pasta...');
  await fs.ensureDir(projectPath);
  
  console.log('Criando package.json...');
  await fs.writeJson(path.join(projectPath, 'package.json'), {
    name: name,
    version: '0.0.0',
    scripts: {
      dev: 'echo "App rodando!"'
    }
  });
  
  console.log('Pronto! cd ' + name);
}

module.exports = { createProject };
