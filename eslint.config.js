import eslintConfigPrettier from "eslint-config-prettier"; // Add

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  { languageOptions: { globals: globals.browser } },
  eslintConfigPrettier,
];
