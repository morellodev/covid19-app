module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
            // Specify the paths to all of the template files in your project
            content: ["./src/**/*.js"],

            // Include any special characters you're using in this regular expression
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }
        : false
    ]
  ]
};
