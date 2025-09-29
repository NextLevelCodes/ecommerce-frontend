
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends:["next/core-web-vitals", "next/typescript","prettier"],
    rules:{
      "@typescript-eslint/no-unused-vars":"error",
        "@next/next/no-img-element":"error"
    }
  }),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      '.lintstagedrc.js'
    ],
  },
];

export default eslintConfig;
