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

### File Location

**Story definitions** are located in `src/hub/static/stories/`
**Per story assets** such as backgrounds, sprites, ... are located in the story's subfolders such as `img/`

> Example structure for story with id `sym-4-6`

```
stories/
    sym-4-6/
        img/
        ch1.yaml
        ch2.yaml
```

### Adding a new story

Let's define a story with id `demo-story`

**NOTE:** For now all stories should have at least one chapter. Could change this default later, but seems to work for now.

#### Definitions
$STORY_DIR = `src/hub/static/stories/demo-story`

#### Procedure
1. Create `$STORY_DIR`
2. Create a *chapter actions* file in `$STORY_DIR/ch1.yaml`. You can use a template file from `src/hub/static/stories/_templates/ as a starting point.
3. Add some actions to your new chapter file:

```yaml
actions:
    - type: sceneText
      text: >
        <p>Lorem ipsum</p>
        <p>Lorem ipsum dolores est</p>
    - type: dialog
      avatarAlign:
        - wizard: right
        - mathina: left
      entries:
        - text: "I love these toys!"
          char: mathina
          mood: happy
        - text: "Some have defects!"
          char: wizard
          mood: sad
```

4. Register your story and chapters in `src/hub/story-meta.js`

Add an entry such as:

```js
// before
export default [
  // other stories ...
]

// after
export default [
  // other stories...
  {
    title: 'Demo Story',
    slug: 'demo-story-url-path',
    id: 'demo-story',
    chapters: [
      { title: 'Demo Chapter', slug: 'demo-chapter' },
    ]
  },
];
```

5. Register your story with a city (or multiple) in `src/hub/constants.js`

Add an entry such as:

```js
// before
CITIES: {
  'island': {
    name: 'Buccaneer Island',
    slug: 'island',
    stories: ['sym-4-6'],
  },
  // ...
}

// after
CITIES: {
  'island': {
    name: 'Buccaneer Island',
    slug: 'island',
    stories: ['sym-4-6', 'demo-story'],
  },
  // ...
}
```

### Supported Chapter (Story) Actions

#### Set background

Sets full screen background for chapter, replacing any previous backgrounds.

**Example**

```yaml
- type: background
  src: c1-bg1.jpg
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `background` | action type |
| **src** | <string> path | Filename. File should be located in `$STORY_DIR/img/bg/` |

#### Set image

Display an image.

**Example**

```yaml
- type: image
  src: c1-5.png
  id: c1-5
  position: center
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `image` | action type |
| **src** | <string> path | Filename. File should be located in `$STORY_DIR/img/` |
| id | <string> with no spaces | Set an optional unique per chapter id for image, useful for `clear`-ing the image later. |
| position | center, left, right | Horizontal alignment of image (*WIP*: Subject to change) |

#### Clear image

Remove an image.

**Example**

```yaml
- type: clearImage
  id: c1-5
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `clearImage` | action type |
| **id** | Valid id <string> | id of image to remove. Should be set as `id` param when adding image. |

#### Set Scene Description Text

Display a passive text, that's meant to describe what's happening and set up a game or dialog.

**Example**

```yaml
- type: sceneText
  text: At the stall, Mathina is greeted by a smiling wizard.
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `sceneText` | action type |
| **text** | Any <string> | Text which can also include html tags like <p></p>, etc |

#### Display Dialog

Display Dialog between characters.

Dialog entries support various moods which use images defined in `src/hub/static/portraits/`.

**Example**

```yaml
- type: dialog
  entries:
    - text: "I love these toys!"
      char: mathina
    - text: "Some have defects!"
      char: wizard
      mood: sad
  avatarAlign:
    - wizard: right
    - mathina: left
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `dialog` | action type |
| **entries** | <array of Entries> | Dialog entries |
| avatarAlign (Not implemented yet!) | <obj> {char: direction} | Direction the character's avatar is facing |

**Entries**

| Name | Valid values | Description |
| --- | --- | --- |
| **text** | Any <string> | action type |
| **char** | mathina, wizard, ... | id of a supported character |
| mood | **normal**, happy, sad, surprised, angry, excited | Direction the character's avatar is facing. Defaults to `normal` if not set. |

#### Game

**Example**

```yaml
- type: game
  text: "Is the following image good (i.e. symmetric)?"
  cta: "Try it yourself!"
  url: https://www.atractor.pt/temp/apps-tests/dobrar_3.html
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `game` | action type |
| **text** | Any <string> | Game description |
| **url** | URL of game | This URL will be used to load the game in an iframe. |
| cta | A short <string> | Text displayed on the "Call to Action" button used to start the game. Defaults to `Try it yourself!`. |
