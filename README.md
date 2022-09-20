Project init
Create project directory and navigate into the folder
mkdir name_of_project && cd name_of_project
Initiate npm in project
npm init
Initiate git
git init
Create .gitignore file and add this line inside
node_modules
This will exclude node_modules folder from git tracking
Create src folder in project root directory (name_of_project/src)
mkdir src
Create index.html and index.js files inside 'src' folder
Install react and react-dom
npm install react react-dom
Setup webpack
Install webpack, webpack cli and webpack dev-server as dev dependencies
npm install webpack webpack-cli webpack-dev-server --save-dev
Configure webpack by adding webpack.config.js file in project root
touch webpack-config.js
Inside webpack.config.js file define entry and output points for webpack
Add the bundled js file to the HTML file
Once the bundled javascript file is created we need to tell webpack to inject it as a script tag to the HTML file.
To do that we first need to install a webpack plugin that will help us do it.
As a dev dependency, install a webpack plugin that will help us do it
npm install html-webpack-plugin
Add the plugin into webpack.config.js file
This will take the /public/index.html and inject script tag to it. And move that HTML file to the dist folder.
Setup Babel
Babel is a transpiler. Transpiler is a program that converts 1 type of source code to another type of source code.
In this project it will take React and modern ECMAScript features and transform it to old school, browser understandable javascript.
Install Babel
npm install @babel/core babel-loader --save-dev
Configure webpack to use babel
We now need to tell webpack to transpile javascript files using babel before bundling them.
Defining rules for babel
we do this using presets: predefined configuration that are used to transpile different type of javascript to browsers understandable one.
Install needed presets
npm install @babel/preset-env @babel/preset-react --save-dev
@babel/preset-env is used to transpile ES2015+ syntax
@babel/preset-react is used to transpile react syntax
Use presets in webpack.config.js
Build and run
Add "dev" and "build" scripts in package.json file
dev will use the webpack dev server and run the application locally
build will create a bundle of assets that can be deployed to servers.
Important note: use nodejs version 12.6 or higher in order to run webpack dev server without issues. NodeJS version can be installed and used using nvm
Check the current nodejs version node -v
If needed, install a newer nodejs version with nvm: nvm install 14.18.1
this should install and switch to new nodejs version
Run locally npm run dev
Loading CSS/SCSS/SASS files
It's recommended to combine style-loader with the css-loader
Install style-loader and css-loader
npm install style-loader css-loader --save-dev
In case you want to use Sass, install sass and sass-loader
There are currently two similar implementations of Sass:
Dart Sass (written in Dart language: https://dart.dev/)
Node Sass (written in Node) DEPRECATED! (https://github.com/sass/node-sass#node-sass, https://sass-lang.com/blog/libsass-is-deprecated)
Webpack strongly recommends Dart implementation of Sass
npm install sass sass-loader --save-dev
Add the following rule into webpack.config.js
For CSS only files
{
test: /\.css$/i,
use: ['style-loader', 'css-loader'],
}

For CSS/SCSS/SASS files
{
test: /\.s[ac]ss$/i,
use: [
// Creates `style` nodes from JS strings
"style-loader",
// Translates CSS into CommonJS
"css-loader",
// Compiles Sass to CSS
"sass-loader",
],
}

Loading Images
As of version 5, webpack supports images using the built-in Asset Modules (https://webpack.js.org/guides/asset-modules/)
Add the following rule into webpack.config.js
IMPORTANT: in case SVG will be handled in a different way (different loader) then other images, exclude 'svg' from test regex
{
test: /\.(png|jp(e\*)g|gif)$/,
type: 'asset/resource',
},

Loading Fonts
As of version 5, webpack also has built-in support for loading fonts
Add the following rule into webpack.config.js
{
test: /\.(woff|woff2|eot|ttf|otf)$/i,
type: 'asset/resource',
}

Loading SVG
SVG is an XML-based markup language for describing two-dimensional-based vector graphics. SVG is essentially to graphics what HTML is to text.
Install SVGR webpack loader npm install @svgr/webpack --save-dev
svgr/webpack loader transforms SVG into ready-to-use React component.
Update webpack.config.js with the following rule:
{
test: /\.svg$/,
use: ['@svgr/webpack'],
}

Once you start your application, Webpack will do its thing and you don't need to worry about your SVGs anymore.
You can put your SVG files anywhere in your src/ folder and import them wherever you need them as React components.
OPTIONAL: resolve aliases in webpack
Update webpack.config.js with code similar to this:
resolve: {
alias: {
Assets: path.resolve(**dirname, 'src/assets/'),
Fonts: path.resolve(**dirname, 'src/assets/fonts/'),
}
}

© 2021 GitHub, Inc.
Help
Support
API
Training
Blog
About
GitHub Enterprise Server 3.1.5
