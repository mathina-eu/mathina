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

### Adding a new language

Let's say we're adding Slovenian (ISO639-1 code `sl`)

1. In `src/shared/nuxt.config.js` under `i18n.locales` add a new entry
2. Copy `en.js` to `sl.js` in `src/[landing|hub|educators]/` directories and start translating
3. In `src/hub/static/stories/[story-name]/` add `actions-sl.yaml` files and populate them
4. In `src/edu/static/stories/[story-name]/` add `content-sl.md` files and populate them

## Notes on shared files

Files and configuration shared between the Hub and the Repository are located in `src/shared/`

## Notes on The Project Description App

Located in `src/landing/`

See `README.md` for building and development commands.

## Notes on The Mathina Hub

Located in `src/hub/`

See `README.md` for building and development commands.

### Adding a new story region / city

1. Open `src/hub/constants.js` and add another entry to the `CITIES` variable
2. Add translations of the city using its ID to `src/hub/i18n/[lang].js` files under the key `cities`.
3. In `src/hub/pages/world.vue` add <style> CSS entries under `.ribbon` to position the city on the world map. 
   See how this is done for the existing cities and follow their example.
   
### How to modify the world map to add a new story

1. In `src/hub/pages/world.vue` in <script> under `data()` and `mapStories` add a new entry using the new stories ID 
   and name a new CSS class that you will use to position a graphical element. See existing entries and follow suite.
2. In the same file add a <style> CSS entry to position the new graphical asset representing the new story.
   See existing classes like `.chest`, `.parrot`, etc as examples.

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
