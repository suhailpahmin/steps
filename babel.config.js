module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.ios.js',
          '.ios.tsx',
          '.android.js',
          '.android.tsx',
        ],
        alias: {
          '@ui': './src/components/ui',
          '@assets': './src/app/assets',
          '@hooks': './src/app/hooks',
        },
      },
    ],
    'jest-hoist',
  ],
};
