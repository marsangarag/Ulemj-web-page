/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: { gray: "rgba(86, 99, 111, 1)" },
            fontSize: {
                smaller: ["10px", "12px"],
            },
        },
    },
    plugins: [],
};
