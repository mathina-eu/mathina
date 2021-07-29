# Architecture

This document describes the high-level architecture of the project and the frameworks used.
This document is supported by the root `README.md` file.

## Bird's Eye View

The project consists of the Project Description App, the Mathina Hub App and the Educator's Repository.
Both are Nuxt Apps. You should learn how to use nuxt at https://nuxtjs.org/.

- **Project Description App** contains supporting information about the Mathina project
- **The Mathina Hub** is a collection of stories and apps the user can play
- **The Educator's Repository** supports the Hub by providing instructional content for educators 
  using the Hub as a teaching tool

## Technology Stack

The core technology used is Javascript in various forms. 

- Node / Yarn
- Vue
- Nuxt (Webpack, Babel)
- Modern ES6+ Javascript 
- CSS (using PostCSS)
- nuxt-i18n (internalization framework)
- HTML / MarkDown / YAML 
- Stylelint, ESLint for keeping a consistent coding style

## Translations (Internalization)

- Supported languages are defined in `nuxt.config.js` files.
- Translations are located in `src/*/i18n/` directories.

See https://i18n.nuxtjs.org/basic-usage/ for using the internalization framework.

## Notes on shared files

Files and configuration shared between the Hub and the Repository are located in `src/shared/`

## Notes on The Project Description App

Located in `src/landing/`

See `README.md` for building and development commands.

## Notes on The Mathina Hub

Located in `src/hub/`

See `README.md` for building and development commands.

## Notes on The Educator's Repository

Located in `src/educators/`.

**markdown-it** (https://github.com/markdown-it/markdown-it) is used to enable markdown editing.

There are also a couple of plugins used to support some additional functionality, some custom and some 3rd party.
You can see what's available in `MarkdownView.vue`

Also see `Working with Content in Educator's Repository` in `README.md`

See `README.md` for building and development commands.

## CSS

We use PostCSS tooling to automate and improve working with modern CSS. 
For configuration and supported plugins and modes see the `postcss` section in `nuxt.config.js` files.

Stylelint rules are defined in `.stylelintrc`

Scoped CSS via Vue SFC (Single File Component) is preferred. 
We do strive to use the BEM naming methodology, however with scoping and small components it's not as crucial to follow.
