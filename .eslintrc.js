module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Disallow imports from src/server/ in src/pages/ except for src/pages/api
    // (see the "overrides" section for the exception)
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/pages',
            from: './src/server'
          }
        ]
      }
    ]
  },
  overrides: [
    {
      // Allow imports from src/server/ in src/pages/api
      files: ['src/pages/api/**/*'],
      rules: {
        'import/no-restricted-paths': [
          'error',
          {
            zones: [
              {
                target: './src/pages/api',
                from: './src/client/'
              }
            ]
          }
        ]
      }
    }
  ]
};
