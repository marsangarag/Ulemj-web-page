/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                gray: "rgba(86, 99, 111, 1)",
                grease: "#C2B59B",
                pharm: "#769193",
            },
            fontSize: {
                smaller: ["10px", "12px"],
            },
        },
    },
    plugins: [],
};
