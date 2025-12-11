import js from "@eslint/js";
import plugin from "./src/index.js";
import globals from "globals";
import {globalIgnores} from "eslint/config";

export default [
    globalIgnores(["src", "tests", "demo/logger.js"]),
    js.configs.recommended,
    {
        files: ["**/*.js", "**/*.mjs"],
        languageOptions: {ecmaVersion: "latest", sourceType: "module", globals: {...globals.browser, ...globals.node}},
        plugins: {"custom-eslint-rule": plugin},
        rules: {
            "custom-eslint-rule/prefer-logger-over-console": ["error"],
        }
    },
];
