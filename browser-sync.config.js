const path = require('path');

module.exports = {
  // If we use a php server like Laragon
  // proxy: "http://" + path.basename(__dirname) + ".local",

  // If we use static HTML
  server: true,

  // Watched files
  files: [
      "**/*.css",
      "**/*.min.js",
      "**/*.html",
      "**/*.php",
      "**/*.txt"
  ]
};