module.exports = function (api) {
  if (api) {
    api.cache(false);
  }
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.ts',
            '.tsx',
            '.jsx',
            '.json',
          ],
          alias: {
            '@appApi': ['./src/api'],

            '@appComponents': ['./src/components'],

            '@appConfigs': ['./src/configs'],

            '@appElements': ['./src/elements'],

            '@appHooks': ['./src/hooks'],

            '@appI18n': ['./src/i18n'],

            '@appNavigation': ['./src/navigation'],

            '@appScenes': ['./src/scenes'],

            '@appServices': ['./src/services'],

            '@appState': ['./src/state'],
            '@appState/actions': ['./src/state/actions/index'],

            '@appTheme': ['./src/theme'],

            '@appTypes/*': ['./src/types'],

            '@appUtils': ['./src/utils'],
          },
          cwd: 'babelrc',
        },
      ],
    ],
  };
};
