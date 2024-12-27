/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      backgroundImage: {
        "welcome-bg": "url('https://static.vecteezy.com/system/resources/previews/021/885/323/large_2x/miniature-house-with-keys-on-wooden-background-real-estate-concept-ai-generated-artwork-photo.jpg')",
      },
    },
    colors: {
      bgColor: "var(--bg)",
      "bgColor-soft": "var(--bg-soft)",
      borderColor: "var(--border)",
      textColor: "var(--text)",
      "textColor-soft": "var(--text-soft)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      transparent: "transparent",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
};
