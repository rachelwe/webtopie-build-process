# webtopie-build-process
A simple and lightweight build process with Sass, svg-sprite-generator and browser-sync.

Greatly inspired by the article [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) and the repo associated [npm-build-boilerplate](https://github.com/damonbauer/npm-build-boilerplate) (including the list of available tasks in this README)

## Usage
To use this project you have to have node.js & npm both installed and be familiar with how npm scripts works.

If this build prosess is only used for one project, use the command line `npm install` in your directory, otherwise consider installing globally the scripts listed in `dev dependencies` inside the package.json (you don't need a heavy `node_modules` folder in every single project!).

## List of available tasks
### `autoprefixer`
  `postcss -u autoprefixer --r css/*`

  Add vendor prefixes to your CSS automatically

### `scss`
  `node-sass --output-style compressed -o css src/scss`

  Compile Scss to CSS

### `uglify`
  `uglifyjs src/js/*.js -m -o js/app.js`

  Uglify (minify) a production ready bundle of JavaScript
  
  WARNING : uglify does not compile ES6 syntax (arrow functions for example)

### `icons`
  `svgo -f src/icons && svg-sprite --config config.json src/icons/*.svg`

  Compress separate SVG files and combine them into one SVG "sprite" using the config inside the config.json file

### `build:css`
  `run-s scss autoprefixer`

  Alias to run the `scss` and `autoprefixer` tasks. Compiles Scss to CSS & add vendor prefixes

### `build:js`
  `npm run uglify`

  Alias to run the `uglify` tasks.

### `build`
  `run-p build:*`

  Alias to run all of the `build` commands

### `watch:css`
  `onchange \"src/scss/*.scss\" -- run-s scss`

  Watches for any .scss file in `src` to change, then runs the `scss` task.
  
  It does not run the `autoprefixer` command, which would be too long to execute at every file change.

### `watch:js`
  `onchange \"src/js/*.js\" -- run-s uglify`

  Watches for any .js file in `src` to change, then runs the `uglify` task
  
### `serve`
  `browser-sync start --server --files \"css/*.css, js/*.js, *.html, *.php\"`

  Start a new server and watch for CSS & JS file changes in the `css` and `js` folder and of any html or php file.

  if your project is already running on a server, you have to modify this line to look like this (just replace `YOUR-LOCAL-SERVER-URL`) :
  
  `browser-sync start --proxy http://YOUR-LOCAL-SERVER-URL --files \"css/*.css, js/*.js, *.html, *.php\"`

### `dev`
  `run-p serve watch:*`

  Run the following tasks simultaneously: `serve`, `watch:css`, `watch:js`. When a .scss or .js file changes in `src`, the task will compile the changes to the respective folders, and the server will be notified of the change. Any browser connected to the server will then inject the new file.
  
  A css change does not trigger a full-page reload, the changes are discrete.

### `build`
  `run-p build:*`

  Build the production files without launching a server and run `autoprefixer`.



## Author
This build process is developed and maintained by [Rachel Pellin](https://prachel.fr/) for personal projects and [Webtopie](https://webtopie.fr/) clients.

[![Twitter](https://img.shields.io/badge/Twitter-4A4A4A?style=flat-square&logo=twitter)](https://twitter.com/r_a_chl)  [![LinkedIn](https://img.shields.io/badge/LinkedIn-4A4A4A?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/rachel-pellin/)

## Contributions
Contributions are open, feel free to post an [issue](https://github.com/rachelwe/Simulateur-ecoindex/issues) if you have any problem.

## License
webtopie-build-process is licensed under the MIT License
