export default {
    meta: {
        type: "problem",
        docs: {
            description: "Prefer company logger instead of console.*",
            url: "https://raw.githubusercontent.com/epascalau/custom-eslint-rule/refs/heads/main/README.md"
        },
        fixable: "code",
        schema: [],
        messages: {
            avoidConsole: "Use '{{logger}}.{{method}}' instead of console.{{method}}.",
        }
    },
    create(context) {
        return {
            "CallExpression[callee.object.name='console']"(node) {
                const property = node.callee.property;
                const method = property && property.name;
                context.report({
                    node,
                    messageId: "avoidConsole",
                    data: {logger: 'logger', method},
                });
            }
        };
    }
};
