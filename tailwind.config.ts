import type { Config } from 'tailwindcss';

export default {
    content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
    theme: {
        extend: {
            screens: {
                sm: '375px',
                ms: '480px',
                smd: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
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
                md: ['20px', { lineHeight: '1.1', letterSpacing: '0.5px' }],
                lg: ['24px', { lineHeight: '1.1', letterSpacing: '0.5px' }],
                xl: ['28px', { lineHeight: '1.1', letterSpacing: '0.5px' }],
                '2xl': ['32px', { lineHeight: '1.2', letterSpacing: '0.5px' }],
                '3xl': ['40px', { lineHeight: '1.2', letterSpacing: '0.5px' }],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
