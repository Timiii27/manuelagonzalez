/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'futura': ['Futura', 'Helvetica', 'Arial', 'sans-serif'],
                'sans': ['Inter', 'sans-serif'],
            },
            colors: {
                'cream': '#FEFEFE',
                'warm-gray': '#A8A8A8',
                'charcoal': '#4A4A4A',
                'soft-blue': '#E8F4FD',
                'light-sage': '#F0F4F0',
                'warm-beige': '#F5F3F0',
                'soft-lavender': '#F8F6FF',
                'art-orange': '#FF8C42',
                'art-orange-light': '#FFB366',
                'art-orange-dark': '#E67E22',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
