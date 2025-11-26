import { defineConfig } from 'eslint/config'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig({
  plugins: {
    '@typescript-eslint': tseslint,
    import: importPlugin,
    prettier: prettierPlugin,
  },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  rules: {
    // TypeScript ESLint rules
    ...tseslint.configs.recommended.rules,

    // import plugin rules
    ...importPlugin.configs.recommended.rules,

    // prettier rules
    ...prettierPlugin.configs.recommended.rules,

    // 커스텀 rules
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
})
