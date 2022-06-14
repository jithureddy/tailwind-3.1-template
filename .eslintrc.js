const config = require('@mondra/code-format-config/eslint-config')

module.exports = {
    ...config,
    rules: {
        ...config.rules,
    }
}
