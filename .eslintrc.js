module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/base", "plugin:vue/essential", "plugin:vue/strongly-recommended", "plugin:vue/recommended"], //, "@vue/standard"
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    indent: [
      "warn",
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: ["error", "double"],
    semi: ["warn", "always"],
  },
};
