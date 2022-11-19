module.exports = {
  extends: ["@nvon/eslint-config/eslint-configs/base.cjs"],
  parser: "@typescript-eslint/parser",
  root: true,
  parserOptions: {
    extraFileExtensions: [],
    project: "./tsconfig.json",
    module: "nodenext",
  },
  rules: {
    "no-console": "off",
  },
};
