# webtopie-build-process
A simple and lightweight build process with Sass, svg-sprite-generator and browser-sync.

Greatly inspired by the article [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) and the repo associated [npm-build-boilerplate](https://github.com/damonbauer/npm-build-boilerplate) (including the list of available tasks in this README)

This repo contains example files in the `src` and the production folders for a better understanding, feel free to delete or replace them.

## Usage
To use this project you have to have node.js & npm both installed and be familiar with how npm scripts works.

If this build prosess is only used for one project, use the command line `npm install` in your directory, otherwise consider installing globally the scripts listed in `dev dependencies` inside the package.json (you don't need a heavy `node_modules` folder in every single project!). Unfortunately, babel doesn't work with global installations, so you will still have to install those 3 pachages locally 😞

In order to use the PurgeCSS command, you must have installed it globally using `npm i -g purgecss`. If you want to install it locally, you can run `npm i -D purgecss` and launch the purgeCSS command using npx.

## Folder structure
The task are written to work with this file structure :

```
|-- css               # Production css
|-- icons             # Production svg sprite
    |-- svg               # Cleaned individual svgs
|-- js                # Production js
|-- src                   #Source files
    |-- icons
    |-- js
    |-- scss
|-- babel.config.json # Config for babel
|-- config.json       # Config for svg-sprite
|-- index.html        # Your index file
```

If you change it, don't forget to modify the associated scripts in `package.json`

## List of available tasks
### `autoprefixer`
  `postcss -u autoprefixer --r css/*`

  Add vendor prefixes to your CSS automatically

### `purgecss`
  `purgecss --css css/styles.css --content **/*.html **/*.js **/*.php --output css/styles.purged.css`

  Remove unused CSS rules, the content option specify the files to crawl in order to determine which rules are used. (Here, any html, js or php file in any subfolder).
  Output the result to the `styles.purged.css` file.

### `scss`
  `node-sass --output-style compressed -o css src/scss`

  Compile Scss to CSS

### `babel`
  `babel src/js --out-file js/app.js`

  Transform all ES2015-ES2020 code to be ES5 compatible & contatenate the files into a single one : `app.js`

### `uglify`
  `uglifyjs js/*.js -m -o js/app.min.js`

  Uglify (minify) a production ready bundle of JavaScript
  
  WARNING : uglify does not compile ES6 syntax (arrow functions for example)

### `icons`
  `svgo -f src/icons -o icons/svg && svg-sprite --config config.json icons/svg/*.svg`

  Compress separate SVG files to the `icons/svg` directory and combine them into one SVG "sprite" using the config inside the config.json file
  
  The use of this sprite and how to create an SVG icon system is wonderfully explained in this page : [SVG Icon System](https://mcraiganthony.github.io/svg-icons/)

### `build:css`
  `run-s scss autoprefixer`

  Alias to run the `scss`, `purgecss` and `autoprefixer` tasks. Compiles Scss to CSS, add vendor prefixes and remove unused rules.

### `build:js`
  `run-s babel uglify`

  Alias to run the `babel` and `uglify` tasks.

### `build:icons`
  `npm run icons`

  Alias to run the `icons` task.

### `build`
  `run-p build:*`

  Alias to run all of the `build` commands

### `watch:css`
  `onchange \"src/scss/*.scss\" -- run-s scss`

  Watches for any .scss file in `src` to change, then runs the `scss` task.
  
  It does not run the `autoprefixer` command, which would be too long to execute at every file change.

### `watch:js`
  `onchange \"src/js/*.js\" -- run-s babel`

  Watches for any .js file in `src` to change, then runs the `babel` task

### `watch:icons`
  `onchange \"src/icons/*.svg\" -- run-s icons`

  Watches for any .svg file in `src` to change, then runs the `icons` task
  
### `serve`
  `browser-sync start --server --files \"css/*.css, js/*.js, **/*.html, **/*.php\"`

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
Contributions are open, feel free to post an [issue](https://github.com/rachelwe/webtopie-build-process/issues) if you have any problem.

## License
webtopie-build-process is licensed under the MIT License
