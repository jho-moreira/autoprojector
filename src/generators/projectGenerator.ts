import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

export async function createProject(name: string, options: any) {
  const projectPath = path.join(process.cwd(), name);
  
  console.log('📁 Criando pasta...');
  await fs.ensureDir(projectPath);
  
  console.log('📋 Copiando template...');
  const templatePath = path.join(process.cwd(), 'src/templates', options.template);
  
  if (!await fs.pathExists(templatePath)) {
    console.log('❌ Template não encontrado. Criando básico...');
    await fs.writeJson(path.join(projectPath, 'package.json'), {
      name,
      version: '0.0.0',
      scripts: { dev: 'echo Projeto básico criado!' }
    });
  } else {
    await fs.copy(templatePath, projectPath);
  }
  
  console.log('✅ Projeto \"' + name + '\" criado!');
  console.log('cd ' + name);
}
