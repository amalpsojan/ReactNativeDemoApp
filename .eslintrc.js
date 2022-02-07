module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  globals: {
    JSX: true,
  },
};
