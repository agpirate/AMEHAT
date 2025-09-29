module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',  // Babel plugin that transforms imports
      {
        root: ['./src'],  // Base directory
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          // Must match tsconfig.json paths
          '@': './src',
          '@components': './src/components',
          '@utils': './src/shared/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};