const daisyuiColors = {
    'base-100': '#ffffff',
    'base-content': '#000000',
    'primary': '#ff4100',
    'primary-content': '#ffffff',
    'secondary': '#858585',
    'secondary-content': '#ececec',
};

const tailwindcssColors = {
    ...daisyuiColors,
    'primary-hover': '#cc3400',
};

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
    plugins: [require('daisyui')],
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                ...tailwindcssColors,
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    ...daisyuiColors,
                },
            },
        ],
    },
};
