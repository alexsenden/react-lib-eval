import antfu from "@antfu/eslint-config";

export default antfu({
  react: true,
  typescript: true,
  typescriptreact: true,

  rules: {
    "style/jsx-sort-props": ["error"],
    "sort-keys": ["error"],
    "func-style": ["error", "declaration"],
    "prefer-arrow-callback": ["error"],
  },
});
