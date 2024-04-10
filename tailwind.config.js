/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "600px",
      md: "640px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1740px",
    },
    extend: {
      colors: {
        "primary": "#E6BC82",
        "primaryLight":"#E0F2F2FF",
        "primaryLight1": '#a5d8d9',
        "primaryLight2": '#3F9396',
        "primaryLight3": '#2E6C6E',
        "primaryLight4": '#FCFBF8',
        "primary-1": "#EFB034",
        "primary-2": "#f3f6fb",
        "secondary": "#FCA310",
        "third": "#E3964A",
        "forth": "#ED7D2D",
        "fifth": "#E05858",
        "errors": "#DD3B3B",
        "warning": "#EFB034",
        "success": "#5eb439",
        "grayData": "#6C757D",
        "danger":"#e53434",
        "light-yellow": "#fff9ee",
        "light-gray":"#ced4da",
        "geomapBackground": "#F8F9FA",
        "datalessRegion": "#DEE1E6",
        "nude":"#FFF9EE",
        "brightOrange":"#FCA310"
      },
      width: {
        sidebarWidth: "50px",
        chartWidth: "32.5%",
      },
      maxWidth: {
        sidebarWidth: "50px",
      },
      padding: {
        18: "4.6rem",
        88: "22.2rem",
        81: "20.3rem",
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        'fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
      }
    },
  },
  plugins: [],
};
