const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    borderWidth: ["responsive", "last", "hover", "focus"]
  },
  plugins: [require("@tailwindcss/ui")]
};
