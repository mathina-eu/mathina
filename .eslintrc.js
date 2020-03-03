module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    "parser": "babel-eslint",
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:import/errors',
    'eslint:recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'import',
  ],
  // add your custom rules here
  rules: {
    'semi': [2, 'always'],
    'comma-dangle': [0, 'always-multiline'],
    'object-shorthand': ['error', 'methods'],
    'space-before-function-paren': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': ['error'],
    'quotes': ['warn', 'single', {'allowTemplateLiterals': true}],
    'camelcase': 'error',
    'curly': ['error', 'all'],
    'prefer-template': 'error',
    'linebreak-style': ['error', 'unix'],
    'indent': ['error', 2, {SwitchCase: 1}],
    'import/extensions': [2, {
      'js': 'never',
      'vue': 'never',
      'svg': 'always',
      'png': 'always'
    }],
    'import/no-unresolved': 0,
    'no-restricted-imports':  [ 'error',
      {
        patterns: [ '../*' ],
      }
    ],
    'vue/script-indent': ['error', 2, {
      'baseIndent': 0,
      'switchCase': 1,
      'ignores': [],
    }],
    'vue/eqeqeq': ['error', 'always'],
    /* These rules are commonly broken in existing codebase and should perhaps be re-enabled at some point. */
    'no-unused-vars': ['error', { 'args': 'none' }]
  },
};
