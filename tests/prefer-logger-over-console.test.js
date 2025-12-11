import {RuleTester} from "eslint";
import rule from "../src/rules/prefer-logger-over-console.js";

const tester = new RuleTester({languageOptions: {ecmaVersion: 2022, sourceType: "module"}});

tester.run("prefer-logger-over-console", rule, {
    valid:[
        "logger.log('hello')",
    ],
    invalid: [
        {
            code: "console.error('x')",
            errors: [{messageId: "avoidConsole"}]
        }
    ]
});
