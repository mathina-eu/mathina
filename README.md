* [Summary](#summary)
  * [Mathian Hub Summary](#mathina-hub-summary)
  * [Standalone Apps Summary](#standalone-apps-summary)
  * [The Educator's Repository Summary](#the-educators-repository-summary)
* [Mathina Hub](#mathina-hub)
  * [Quick Start](#quick-start)
  * [Working with stories](#working-with-stories)
  * [Supported Actions](#supported-story-actions)
  * [Story localization](#story-localization)
* [Educator's Repository](#educators-repository)
  * [Quick Start - Edu](#quick-start---edu)
  * [Working with Stories in Educator's Repository](#working-with-content-in-educators-repository)
  * [Educator content localization](#educator-content-localization)
* [Standalone Apps](#standalone-apps)
* [Extra: Example App](#extra-example-app)

# Summary

The three main components of this repository are:
* Mathina Hub
* Standalone Apps
* The Educator's Repository

## Mathina Hub Summary

The Hub is the main Mathina web page, meant to be used by students, which implements:
* The Mathina World webpage interface
* Stories
* Cities

The source code is located in `/src/hub/`.

For development guidelines [see here](#mathina-hub).

## Standalone Apps Summary

Stories in Mathina include standalone apps via iframe. 

These apps are located in `/src/hub/static/apps/`. For working with apps [see here](#standalone-apps)

## The Educator's Repository Summary

The educator's repository is an instructional tool for educator's to help students use the Hub.

The source code is located in `src/educators/`. For working with the edu repository [see here](#educators-repository)

# Mathina Hub

## Quick start

You'll need to set up [node](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

Then install dependencies (You generally only need to do this once):
``` bash
$ yarn install
```

To start a development server on port **3000** (localhost:3000) use:
``` bash
$ yarn dev
```

To generate or preview production builds you can use:
``` bash
$ yarn generate
# launch local server
$ npx http-server dist/hub
```

## Working with Stories

### File Location

**Story definitions** are located in `src/hub/static/stories/`
**Per story assets** such as backgrounds, sprites, ... are located in the story's directory such as `img/`

> Example structure for story with id `symm-1`

```
stories/
    symm-1/
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
    stories: ['symm-1'],
  },
  // ...
}

// after
CITIES: {
  'island': {
    name: 'Buccaneer Island',
    slug: 'island',
    stories: ['symm-1', 'demo-story'],
  },
  // ...
}
```

## Supported Story Actions

*NOTE*: **BOLD** properties are required.

### Set background

Sets a background image. Multiple background images can be set. Use the **style** property to set 
z-index, positioning and other attributes for each layer if needed.

**Example**

```yaml
- type: background
  src: c1-bg1.jpg
  style: "position: absolute; right: 0; bottom: 0; width: 40%; z-index: 3;"
```

**Example for using parallax**

```yaml
- type: background
  src: c1-bg1.jpg
  style: "position: absolute; right: 0; bottom: 0; width: 40%; z-index: 3;"
  parallax: back2
```

**Example using common shared resources**

```yaml
- type: background
  src: $COMMON/img/bg/c1-bg1.jpg
  style: "position: absolute; right: 0; bottom: 0; width: 40%; z-index: 3;"
```
This image should be located in `src/hub/stories/common/img/bg/c1-bg1.jpg`

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `background` | action type |
| **src** | `<string>` path | Filename. File should be located in `$STORY_DIR/img/bg/`. You can also use **common** shared backgrounds. In that case put the images in `src/hub/static/stories/common/` and start the path in the yaml src definition with `$COMMON`. Example src: `$COMMON/img/bg/bg1.jpg` |
| style | `<string>` css style | Use css styles to setup background layer. Multiple background layers can be set using z-index for instance.|
| id | <string> with no spaces | Set an optional unique per story id for background, useful for `clear`-ing the background later. |
| parallax | back1-3, mid1-3, front1-3 | Default: **back1**. Set parallax layer. A higher layer represents faster movement. |

### Clear background

Remove a background

**Example**

```yaml
- type: clearBackground
  id: bg1
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `clearBackground` | action type |
| **id** | Valid id `<string>` | id of the background to remove. Should be set as `id` param when adding the background. |

### Set image

Display an image.

**Example**

```yaml
- type: image
  src: c1-5.png
  id: c1-5
  align: center
  valign: bottom
  style: "width: 20%;"
  parallax: mid1
```

**Example using common shared resources**

```yaml
- type: image
  src: $COMMON/img/c1-5.png
  id: c1-5
```
This image should be located in `src/hub/stories/common/img/c1-5.png`


**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `image` | action type |
| **src** | `<string>` path | File should be located in `$STORY_DIR/img/`. You can also use **common** shared images. In that case put the images in `src/hub/static/stories/common/` and start the path in the yaml src definition with `$COMMON`. Example src: `$COMMON/img/img1.jpg`. Note that multiple images with the same path can only be displayed at the same time if they have unique IDs set. |
| id | <string> with no spaces | Set an optional unique per story id for image, useful for `clear`-ing the image later or displaying multiple instance of an image with the same file path. |
| align | center, left, right | Horizontal alignment of image |
| valign | bottom, center, left | Vertical alignment of image |
| style | <string> css style | CSS styles can be used for various effects, for instance to scale an image. Setting position via style can override align and valign parameters. |
| parallax | back1-3, mid1-3, front1-3 | Default: **back1**. Set parallax layer. A higher layer represents faster movement. |
| noOverflow | boolean | Default: `false`. Setting `noOverflow: true` for an image in a parallax layer will cause that layer to have overflow: hidden while this image is displayed. |

### Video

Display a video.

**Example**

```yaml
- type: video
  width: 400
  text: Lorem ipsum dolor
  image: bg/c1-bg1.jpg
  entries:
    - src: video.mp4
      type: 'video/mp4'
    - src: video.webm
      type: 'video/webm'
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `video` | action type |
| **entries** | `<array>` of src Entries | Video src entries |
| **width** | string | Width |
| image | `<string>` path | *Optional* Poster image for Video HTML element. File should be located in `$STORY_DIR/img/`. |
| text | `<string>` title| *Optional* A title text for the video |

**Entries**

| Name | Valid values | Description |
| --- | --- | --- |
| **src** | `<string>` path | Path to video. File should be located in `$STORY_DIR/video/`. |
| **type** | `<string>` | Video type, eg `video/mp4`, `video/webm`, ... |

### Animate Image

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

**Example with a defined back animation**

```yaml
- type: animation
  target: img1
  vars:
    duration: 0.5
    xPercent: 0
    yPercent: -40
    ease: power1.inOut
  varsBack:
    duration: 0.5
    xPercent: 0
    yPercent: 40
    ease: power1.inOut
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `animation` | action type |
| **target** | Valid id `<string>` | id of the image to animate. Should be set as `id` param when adding image via image action type. |
| **vars** | gsap to() params `<object>` | See GSAP documentation for possible values https://greensock.com/docs/v3/GSAP/gsap.to() |
| varsBack | gsap to() params `<object>` | You can set animation parameters that should be executed when "Back" navigation is used by the player. If this is not set, the image will display its previous state without animating the transition. |

### Clear image

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

### Set Scene Description Text

Display a passive text, that's meant to describe what's happening and set up a game or dialog.

**Example**

```yaml
- type: sceneText
  text: At the stall, Mathina is greeted by a smiling wizard.
```

**Example custom position**

```yaml
- type: sceneText
  style: "position: absolute; left: 10px; top: 10px;"
  text: At the stall, Mathina is greeted by a smiling wizard.
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `sceneText` | action type |
| **text** | Any `<string>` | Text which can also include html tags like <p></p>, etc |
| style | `<string>` | Optionally you can set the action's style. This can be used to position the element using something like `style: "position: absolute; left: 10px; top: 10px;"` |

### Display Dialog

Display Dialog between characters.

Dialog entries support various moods which use images defined in `src/hub/static/portraits/`.

**Example**

```yaml
- type: dialog
  entries:
    - text: "I love these toys!"
      char: mathina
      exposition: "A wild Anna appears!"
      mood: happy
    - text: "Some have defects!"
      char: generic-char
      charName: Anna
    - text: "Hey, you there!"
    - text: "Some have defects!"
      char: wizard
      mood: sad
```

**Example with avatar alignment**

```yaml
- type: dialog
  avatarAlign:
    mathina: left
    wizard: right
  entries:
    - text: "I love these toys!"
      char: mathina
    - text: "Some have defects!"
      char: wizard
```

**Example with custom style**

```yaml
- type: dialog
  style: "position: absolute; left: 10px; top: 10px;"
  entries:
    - text: "I love these toys!"
      char: mathina
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `dialog` | action type |
| **entries** | `<array>` of Entries | Dialog entries |
| avatarAlign | `<object>` { char: left or right } | Optionally set position of characters images in this dialog to `left` or `right`. Defaults to `left`. |
| style | `<string>` | Optionally you can set the action's style. This can be used to position the element using something like `style: "position: absolute; left: 10px; top: 10px;"` |

**Entries**

| Name | Valid values | Description |
| --- | --- | --- |
| **text** | Any `<string>` | action type |
| char | mathina, wizard, ... | id of a supported character, defaults to **generic**  |
| charName | `<string>` | An optional replacement character name. Especially useful when used with generic characters. |
| mood | **normal**, happy, sad, surprised, angry, excited | Direction the character's avatar is facing. Defaults to `normal` if not set. |
| exposition | `<string>` | An optional narrative description of the events of a scene, written in the present tense. Will be displayed in cursive |

### Game

**Example**

```yaml
- type: game
  text: "Is the following image good (i.e. symmetric)?"
  toolbarText: "Is the following image good (i.e. symmetric)?"
  cta: "Try it yourself!"
  url: https://www.atractor.pt/temp/apps-tests/dobrar_3.html
  img:
    src: c1-2.png
    height: 200
    width: 200
  toolbarImg:
    src: c1-2.png
    height: 200
    width: 200
```

**Params**

| Name | Valid values | Description |
| --- | --- | --- |
| **type** | `game` | action type |
| **text** | Any `<string>` | Game description |
| toolbarText | Any `<string>` | This optional text will be displayed in the fullscreen toolbar instead of **text** if set |
| **url** | URL of game | This URL will be used to load the game in an iframe. |
| cta | A short `<string>` | Text displayed on the "Call to Action" button used to start the game. Defaults to `Try it yourself!`. |
| img | `{src: img.png, width: 200, height: 200}` | An optional image can be added. The **src** param is required, while width and height are optional. Width and height should be numbers as this image is responsive and the values should be treated as a ratio. |
| toolbarImg | `{src: img.png, width: 200, height: 200}` | An optional image similar to **img** but will be used in the fullscreen toolbar. |

## Using tags to link directly to an action

You can add a `tag` property to any interactive action to support directly linking and fast forwarding to that action.

Example:

```yaml
- type: dialog
  entries:
    - text: "I love these toys!"
      char: mathina
- type: sceneText
  tag: someTagName
  text: At the stall, Mathina is greeted by a smiling wizard.
```

Then if the user visits the page by using a link which contains the query parameter actionLink=someTagName
the story will be fast-forwarded to the sceneText instead of the dialog action.

## Story localization

To prepare a localized version of a story add a `actions-<locale>.yaml` file.

For example to add a german file, add `actions-de.yaml` to `/src/hub/static/stories/demo-story/`

For localized images it's recommended to group them in a `<locale>` subdirectory. For instance put images specific to a
german story to `/src/hub/static/stories/demo-story/img/de/some-german-specific-image.png` 

### Supported locales

* `de` - German
* `en` - English (Do not create an actions-en.yaml file as the default actions.yaml file will be used for english)
* ...

# Educator's Repository

The Educator's repository is code dependant on the Hub to allow for a single point of entry when
defining cities, stories, urls etc.

## Quick start - Edu

You'll need to set up [node](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

Then install dependencies (You generally only need to do this once):
``` bash
$ yarn install
```

To start a development server on port **3002** (localhost:3002) use:
``` bash
$ yarn edu:dev
```

To generate or preview production builds you can use:
``` bash
$ yarn edu:generate
# launch local server
$ npx http-server dist/edu
```
```bash
# dev
yarn edu:dev
# prod
yarn edu:generate
npx http-server dist/edu
```

## Working with Content in Educator's Repository

Adding content to the Repository is done by adding
[Markdown](https://www.markdownguide.org/) files to the appropriate directory.

### Supported Syntax

For supported syntax see this [example](https://raw.githubusercontent.com/mathina-eu/mathina/master/src/educators/static/stories/demo-story/content.md).

### Using HTML instead of Markdown

You can also use HTML directly instead of markdown for more flexibility. 
In that case your content.md file should start with `!HTML!`.

Example:
```
!HTML!

<img src='/stories/demo-story/img/test.png' style="display: block; margin: 0 auto;">
```

### Example: Adding Story Educator guides

Story ID's should be based on the ID in [Story Index Document](https://docs.google.com/spreadsheets/d/1UEhZXMXJSGjwBbRu_AKIY0BM1-qVh2dfz4ZcU8Cr5zs/edit#gid=0)

1. Identify the **id** of the story you're working with. You can find it in `src/hub/story-meta.js`.
2. Create a directory in `src/educators/static/stories/<story-id>/`
3. Create a `content.md` file and write some Markdown.

You can see some example content for the `demo-story` at
https://mathina-edu.netlify.app/story/demo-story-url-path

### Images

As a convention you should add images to the story's `img` subdirectory.

### Videos

As a convention you should add videos to the story's `video` subdirectory.

## Educator content localization

To prepare a localized version of a story add a `content-<locale>.md` file.

For example to add a german file, add `content-de.md` to `/src/educators/static/stories/demo-story/`

For supported locales see [here](#supported-locales)

# Standalone Apps

Standalone Apps are prepackaged bundles meant to be executed within Hub stories via iframes.

Apps should be added to `/src/hub/static/apps/<app-id>`. 
The app id should be unique, containing only small letters, numbers, hyphens and underscores.

An App is used within a Hub's story via a [Game Action](#game) definition.

## Example

Let's say you're adding an App, and you choose the id `demo-app`.
1. Create a directory `/src/hub/static/apps/demo-app/`
2. Add your app bundle. It's recommended the app can be started via an index.html in the root of `demo-app/`
3. Use your app in a story's `actions.yaml` file.

```yaml
  - type: game
    text: "Is the following image good (i.e. symmetric)?"
    cta: "Try it yourself!"
    url: /apps/demo-app/
```

The **url** can be either a relative path (recommended) or an absolute path. If relative, start with /apps/...

# Extra: Example App

To use the example app, see:

```bash
# dev
yarn app:dev
# prod
yarn app:generate
npx http-server dist/example-app
```

If you want to use the example app, you should run `yarn app:generate`, then move `dist/example-app/` to 
`src/hub/static/apps/example-app/`. You can then use this app in stories' **yaml** files with url `/apps/example-app/`.


For detailed explanation on how Nuxt work, check out [Nuxt.js docs](https://nuxtjs.org).
