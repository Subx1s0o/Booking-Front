import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                black: '#231F20',
                red: '#BB4430',
                vanilla: '#F3DFA2',
                grey: '#EFE6DD',
                'dark-grey': '#40434E',
                green: '#69B578',
            },
            fontSize: {
                xs: ['12px', { lineHeight: '1.5', letterSpacing: '0.5px' }],
                sm: ['14px', { lineHeight: '1.6', letterSpacing: '0.5px' }],
                base: ['16px', { lineHeight: '1.75', letterSpacing: '0.5px' }],
                md: ['20px', { lineHeight: '1.8', letterSpacing: '0.5px' }],
                lg: ['24px', { lineHeight: '1.8', letterSpacing: '0.5px' }],
                xl: ['32px', { lineHeight: '1.85', letterSpacing: '0.5px' }],
                '2xl': ['40px', { lineHeight: '1.85', letterSpacing: '0.5px' }],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
