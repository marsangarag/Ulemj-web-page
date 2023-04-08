/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: { gray: "rgba(86, 99, 111, 1)" },
            fontSize: {
                sm: ["16px", "24px"],
                base: ["20px", "28px"],
            },
        },
    },
    plugins: [],
};
