const fs = require('fs');
const path = require('path');

const structure = {
  'src': {
    'components': {
      'common': ['Button', 'Input', 'Text', 'Card'],
      'ui': ['Header', 'Footer', 'Sidebar'],
      'forms': ['LoginForm', 'SignupForm']
    },
    'screens': {
      'auth': ['Login', 'Signup', 'ForgotPassword'],
      'main': ['Home', 'Profile', 'Settings'],
      'features': ['Dashboard', 'Details']
    },
    'navigation': {
      'stacks': ['AuthStack', 'MainStack'],
      'tabs': ['HomeTabs'],
      'types': ['index.ts']
    },
    'services': {
      'api': ['client.ts', 'endpoints'],
      'storage': ['asyncStorage.ts', 'secureStorage.ts'],
      'auth': ['authService.ts']
    },
    'store': {
      'slices': ['authSlice.ts', 'userSlice.ts'],
      'selectors': ['authSelectors.ts', 'userSelectors.ts']
    },
    'utils': {
      'helpers': ['formatters.ts', 'validators.ts'],
      'constants': ['appConstants.ts', 'apiConstants.ts']
    },
    'hooks': ['useAuth.ts', 'useTheme.ts', 'useApi.ts'],
    'types': ['api.ts', 'navigation.ts', 'app.ts'],
    'assets': {
      'images': [],
      'icons': [],
      'fonts': []
    }
  },
  'android': {},  // Native files
  'ios': {},      // Native files
  '__tests__': {
    'components': [],
    'screens': [],
    'utils': []
  },
  'scripts': {
    'build': [],
    'deploy': []
  },
  'docs': {
    'api': [],
    'setup': []
  },
  '.github': {
    'workflows': []
  }
};

function createStructure(basePath, structure) {
  for (const [key, value] of Object.entries(structure)) {
    const fullPath = path.join(basePath, key);
    
    // Create directory
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`✅ Created: ${fullPath}`);
    }
    
    // Create index files for TypeScript
    if (typeof value === 'object' && !Array.isArray(value)) {
      const indexPath = path.join(fullPath, 'index.ts');
      if (!fs.existsSync(indexPath)) {
        fs.writeFileSync(indexPath, '// Barrel exports\n');
        console.log(`✅ Created: ${indexPath}`);
      }
      
      // Recursively create subdirectories
      createStructure(fullPath, value);
    } else if (Array.isArray(value)) {
      // Create component directories with index files
      value.forEach(item => {
        const itemPath = path.join(fullPath, item);
        if (!fs.existsSync(itemPath)) {
          fs.mkdirSync(itemPath, { recursive: true });
          
          // Create index file for components
          const itemIndexPath = path.join(itemPath, 'index.ts');
          fs.writeFileSync(itemIndexPath, `export { default } from './${item}';\n`);
          
          // Create component file
          const componentPath = path.join(itemPath, `${item}.tsx`);
          const componentTemplate = `import React from 'react';\nimport { View, Text } from 'react-native';\n\nconst ${item} = () => {\n  return (\n    <View>\n      <Text>${item} Component</Text>\n    </View>\n  );\n};\n\nexport default ${item};\n`;
          fs.writeFileSync(componentPath, componentTemplate);
          
          console.log(`✅ Created component: ${itemPath}`);
        }
      });
    }
  }
}

// Create the structure
createStructure(process.cwd(), structure);
console.log('🎉 Project structure setup complete!');