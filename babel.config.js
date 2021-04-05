module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.js', '.json'],
          alias: {
            assets: './assets',
            components: './src/components',
            locales: './locales',
            views: './src/views',
            utils: './utils',
            config: './src/config'
          }
        }
      ]
    ],
  };
};
