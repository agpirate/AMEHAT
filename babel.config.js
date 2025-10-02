// babel.config.js - FIXED VERSION
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // String syntax for simple plugins
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-private-property-in-object',
    
    // Array syntax for plugins with options
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/shared/components',
          '@services': './src/shared/services',
           '@hooks': './src/shared/hooks',
          '@utils': './src/shared/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};