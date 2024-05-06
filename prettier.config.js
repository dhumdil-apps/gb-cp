/**
 * @type {import('prettier').Config}
 */
module.exports = {
    arrowParens: 'always',
    printWidth: 120,
    tabWidth: 4,
    singleQuote: true,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: 'all',
    tailwindConfig: './tailwind.config.js',
    plugins: ['prettier-plugin-tailwindcss'],
    quoteProps: 'consistent',
};
