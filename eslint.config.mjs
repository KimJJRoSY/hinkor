import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: ['.next/', 'out/', 'build/', 'next-env.d.ts'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-console': 'error',
    },
  },

  // 브라우저
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Node / 서버
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: globals.node,
    },
  },
  prettier,
]
