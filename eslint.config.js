import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactPlugin from "eslint-plugin-react";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: reactPlugin, // Добавлен плагин React
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules, // Для React 17+ с автоматическим JSX
      // Основные правила
      "no-undef": "error", // Ошибка для необъявленных переменных/компонентов
      "react/jsx-uses-vars": "error", // Ошибка, если JSX-переменная не используется
      "react/jsx-uses-react": "error", // Ошибка, если React не импортирован (для версий < 17)
      // Дополнительные настройки
      "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // "react/prop-types": "warn", // Раскомментируйте для проверки пропсов
    },
  },
];
