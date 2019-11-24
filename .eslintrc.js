module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-inferrable-types': 1
  },
  overrides: [
    {
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018
      },
      env: {
        browser: false,
        node: true
      },
      files: ['test*.js', 'tests/**/*.js']
    }
  ]
};
