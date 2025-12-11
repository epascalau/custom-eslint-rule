import preferLoggerOverConsole from "./rules/prefer-logger-over-console.js";

export const rules = {
  "prefer-logger-over-console": preferLoggerOverConsole,
};

export const configs = {
  recommended: {
    rules: {
      "custom-eslint-rule/prefer-logger-over-console": "warn",
    }
  }
};

export default { rules, configs };
