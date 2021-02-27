# Adding Content to Educator's Repository

Adding content to the Repository is done by adding 
[Markdown](https://www.markdownguide.org/) files in the appropriate directory.

## Supported Syntax

For supported syntax see [example](https://raw.githubusercontent.com/SevenIndirecto/mathina-hub/master/src/educators/static/stories/demo-story/content.md).

## Adding Story Educator guides

1. Identify the **id** of the story you're working with. You can find it in `src/hub/story-meta.js`.
2. Create a directory in `src/educators/static/stories/<story-id>/`
3. Create a `content.md` file and write some Markdown.

You can see some example content for the `demo-story` at 
https://edu.zabkar.net/story/demo-story-url-path/

### Images

As a convention you should add images to the story's `img` subdirectory.

### Videos

As a convention you should add videos to the story's `video` subdirectory.

