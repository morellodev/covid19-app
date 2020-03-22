module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
            content: ["./src/**/*.js"],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: ["nprogress", "bar", "peg"]
          }
        : false
    ]
  ]
};
