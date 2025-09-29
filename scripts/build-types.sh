const { execSync } = require('child_process');
const fs = require('fs-extra');

console.log('🏗️ Building TypeScript...');

try {
  // Clean build directory
  fs.removeSync('./build');
  
  // Generate TypeScript declarations
  execSync('npx tsc --emitDeclarationOnly --outDir build/types', { stdio: 'inherit' });
  
  // Copy necessary files
  fs.copySync('./src/assets', './build/assets');
  fs.copySync('./package.json', './build/package.json');
  
  console.log('✅ TypeScript build complete!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}