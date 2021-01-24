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
        actions.yaml
```

### Adding a new story

Let's define a story with id `demo-story`

#### Definitions
$STORY_DIR = `src/hub/static/stories/demo-story`

#### Procedure
1. Create `$STORY_DIR`
2. Create an *actions* file in `$STORY_DIR/actions.yaml`. You can use a template file from `src/hub/static/stories/_templates/ as a starting point.
3. Add some actions to your new actions file:

```yaml
actions:
    - type: sceneText
      text: >
        <p>Lorem ipsum</p>
        <p>Lorem ipsum dolores est</p>
    - type: dialog
      entries:
        - text: "I love these toys!"
          char: mathina
          mood: happy
        - text: "Some have defects!"
          char: wizard
          mood: sad
```

4. Register your story in `src/hub/story-meta.js`

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
    ageMeta: AGE_GROUP[0],
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

### Supported Story Actions

*NOTE*: **BOLD** properties are required.

#### Set background

Sets a background image. Multiple background images can be set. Use the **style** property to set 
z-index, positioning and other attributes for each layer if needed.

**Example**

```yaml
- type: background
  src: c1-bg1.jpg
  style: "position: absolute; right: 0; bottom: 0; width: 40%; z-index: 3;"
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `background` | action type |
| **src** | `<string>` path | Filename. File should be located in `$STORY_DIR/img/bg/` |
| style | `<string>` css style | Use css styles to setup background layer. Multiple background layers can be set using z-index for instance.|

#### Set image

Display an image.

**Example**

```yaml
- type: image
  src: c1-5.png
  id: c1-5
  align: center
  valign: bottom
  style: "width: 20%;"
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `image` | action type |
| **src** | `<string>` path | Filename. File should be located in `$STORY_DIR/img/` |
| id | <string> with no spaces | Set an optional unique per story id for image, useful for `clear`-ing the image later. |
| align | center, left, right | Horizontal alignment of image |
| valign | bottom, center, left | Vertical alignment of image |
| style | <string> css style | CSS styles can be used for various effects, for instance to scale an image. Setting position via style can override align and valign parameters. |

#### Animate Image

Animate an image using [gsap to()](https://greensock.com/docs/v3/GSAP/gsap.to()). 
Specify gsap animation properties as the vars property.

**Example**

```yaml
- type: animation
  target: c1-5
  vars:
    duration: 3
    xPercent: 85
    yPercent: -10
    ease: power3.out
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `animation` | action type |
| **target** | Valid id `<string>` | id of the image to animate. Should be set as `id` param when adding image via image action type. |
| **vars** | gsap to() params `<object>` | See GSAP documentation for possible values https://greensock.com/docs/v3/GSAP/gsap.to() |

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
| **id** | Valid id `<string>` | id of image to remove. Should be set as `id` param when adding image. |

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
| **text** | Any `<string>` | Text which can also include html tags like <p></p>, etc |

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
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `dialog` | action type |
| **entries** | `<array>` of Entries | Dialog entries |

**Entries**

| Name | Valid values | Description |
| --- | --- | --- |
| **text** | Any `<string>` | action type |
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
| **text** | Any `<string>` | Game description |
| **url** | URL of game | This URL will be used to load the game in an iframe. |
| cta | A short `<string>` | Text displayed on the "Call to Action" button used to start the game. Defaults to `Try it yourself!`. |
