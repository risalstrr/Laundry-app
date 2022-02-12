module.exports = {
    purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            mobile: "420px", // 360px
            tablet: "810px", //640px
            // default 768px
            laptop: "1024px",
            desktop: "1200px",
            // default 1200

        },
        fontFamily: {
            poppins: ['poppins', 'sans-serif'],
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
};