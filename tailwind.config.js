/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        './src/style.css',
    ],
    theme: {
        fontFamily: {
            'sans': ['FiraSans', 'Roboto', 'sans-serif'],
            'roboto': ['Roboto', 'sans-serif'],
        },
        extend: {
            fontFamily: {
                'fira-sans': ['FiraSans', 'sans-serif']
            },
            width: {
                '50': '200px'
            },
            colors: {
                'ma-red': '#E61437',
                'ma-hover': '#FF163D',
                'ma-clicked': '#CC1231',
                'ma-disabled': '#BDCACE',
                'ma-dark': '#08364D',
                'ma-medium': '#525F66',
                'ma-light': '#7A8F99',
                'ma-bg-01': '#F0F3F5',
                'ma-un1': '#1C3543',
                'ma-un2': '#0F2733',
            }
        }
    },
    plugins: [],
}

