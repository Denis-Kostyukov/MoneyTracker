module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          shared: './src/shared',
          features: './src/features',
          app: './src/app',
          screens: './src/screens',
          entities: './src/entities',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
      },
    ],
  ]
};
