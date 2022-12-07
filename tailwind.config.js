/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF5A3C",

          "secondary": "#0B2C3D",

          "accent": "#171B2A",

          "neutral": "#FFEFEC",

          "base-200": "#F2F6F7",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },

  plugins: [
    require(
      "daisyui"

    ),
  ],
}