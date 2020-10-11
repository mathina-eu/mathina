# mathina

## Mathina Hub

The Hub is the main mathina web interface which implements:
* Interface
* Stories
* Cities
* ...

## Mathina Apps

*NOTE*: Just a proof of concept for project setup for now.
An example standalone app's structure is in `/src/app/`

## Basic Usage

You'll need [node](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

``` bash
# install dependencies
$ yarn install

# Development: serve with hot reload at localhost:3000
$ yarn dev

# Production: build for production and launch local server (to test locally)
$ yarn generate
$ npx http-server dist/hub
```

## Other Options

POC: Working with Apps

```bash
# dev
yarn app:dev
# prod
yarn app:generate
npx http-server dist/app
```

For detailed explanation on how Nuxt work, check out [Nuxt.js docs](https://nuxtjs.org).

## Working with Stories

### Add a new story


