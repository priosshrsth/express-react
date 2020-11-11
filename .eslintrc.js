module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-import': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/extensions': [
      'off',
      // "ignorePackages"
      // {
      //   "js": "never",
      //   "jsx": "never",
      //   "ts": "never",
      //   "tsx": "never"
      // },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
