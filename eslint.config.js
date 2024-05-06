/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
    },
};
