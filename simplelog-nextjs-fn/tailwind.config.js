module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        icon: "3.125rem",
      },
      colors: {
        body: "#FFF8F0",
        dark: "#4E2A06",
        medium: "#474543",
        light: "#85817D",
        highlight: "#FF8811",
      },
      dropShadow: {
        "profile-img": "16px 10px 0px rgba(244, 208, 111, 0.5)",
        "profile-img-hover": "32px 20px 0px rgba(244, 208, 111, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
