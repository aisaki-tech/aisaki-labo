import eslintConfigPrettier from 'eslint-config-prettier' // Add

export default [
  {
    ignores: ['.yarn'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
  },
  eslintConfigPrettier,
]
