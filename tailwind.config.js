

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      body: {
        '@apply max-w-screen': {}
      },
      fontFamily: {
        title: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui",'@tailwindcss/typography'),
  ],
  daisyui: {
    darkTheme: "light",
    // darkTheme: "dark",
  },
};
