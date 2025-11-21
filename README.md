

---

# Gulp Build System – Portfolio Project

This project uses **Gulp** to automate and optimize front-end assets for a simple portfolio website.
The build system handles JavaScript, CSS, images, and webfonts, and generates a clean `dist` folder ready for deployment.

---

## 1. Project Setup

You initialized the project with:

```
npm init -y
```

This created the default `package.json` file used to manage dependencies.

---

## 2. Installed Dependencies

### Global Installation

```
npm install -g gulp-cli
```

### Local Development Dependencies

```
npm install gulp --save-dev
npm install gulp-concat gulp-terser gulp-clean-css --save-dev
```

These packages enable:

* concatenating files
* minifying JavaScript
* minifying CSS
* copying assets
* running watch tasks

---

## 3. Project Structure

```
portfolio-main/
│
├── css/
│   └── project.css
│
├── images/
│   └── ...image files
│
├── webfonts/
│   └── ...font files
│
├── index.js
├── index.html
├── gulpfile.js
└── dist/  (generated automatically)
```

---

## 4. Gulp Tasks Overview

### JavaScript Task

* Reads `index.js`
* Concatenates into `main.min.js`
* Minifies the final output
* Saves it to `dist/js/`

### CSS Task

* Reads `css/project.css`
* Concatenates into `style.min.css`
* Minifies the file
* Saves it to `dist/css/`

### Images Task

* Copies everything from `images/` to `dist/images/`

### Webfonts Task

* Copies all fonts into `dist/webfonts/`

### Watch Task

* Watches JS, CSS, images, and fonts
* Rebuilds automatically on file change

---

## 5. Running the Build

Open the terminal in the project directory and run:

```
gulp
```

This command executes all tasks and starts the watch mode.

---

## 6. Build Output Screenshot

Below is the actual terminal output from running the Gulp build:

![Gulp Build Output](/mnt/data/0a3b753a-2ac9-4a1f-9c9d-4abdc721b535.png)

---

## 7. Purpose of the Build System

* Automates repetitive tasks
* Keeps production files optimized
* Ensures consistent output
* Prepares the project for hosting or deployment

---


