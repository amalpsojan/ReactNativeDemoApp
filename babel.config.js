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
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@app/api/*': ['./src/api/*'],
            '@app/api': ['./src/api/index'],

            '@app/components/*': ['./src/components/*'],
            '@app/components': ['./src/components/index'],

            '@app/configs/*': ['./src/configs/*'],
            '@app/configs': ['./src/configs/index'],

            '@app/elements/*': ['./src/elements/*'],
            '@app/elements': ['./src/elements/index'],

            '@app/hooks/*': ['./src/hooks/*'],
            '@app/hooks': ['./src/hooks/index'],

            '@app/i18n/*': ['./src/services/*'],
            '@app/i18n': ['./src/services/index'],

            '@app/navigation/*': ['./src/navigation/*'],
            '@app/navigation': ['./src/navigation/index'],

            '@app/scenes/*': ['./src/scenes/*'],
            '@app/scenes': ['./src/scenes/index'],

            '@app/services/*': ['./src/services/*'],
            '@app/services': ['./src/services/index'],

            '@app/state/*': ['./src/state/*'],
            '@app/state': ['./src/state/index'],

            '@app/theme/*': ['./src/theme/*'],
            '@app/theme': ['./src/theme/index'],

            '@app/types/*': ['./src/types/*'],

            '@app/utils/*': ['./src/utils/*'],
            '@app/utils': ['./src/utils/index'],
          },
          cwd: 'babelrc',
        },
        'react-native-reanimated/plugin',
      ],
    ],
  };
};