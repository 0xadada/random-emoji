module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017
      },
      env: {
        browser: false,
        node: true
      },
      files: ['test*.js', 'tests/**/*.js']
    }
  ]
};
