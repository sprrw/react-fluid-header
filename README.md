# react-fluid-header
Hero image header React component for fluid layouts

## What it does?
This component makes it easy to set up a hero image as header background by pushing the image source and anchoring positions through the props and setting up style attribute appropriately. This allows to create fluid layouts with cover hero image, which has a unique background position specific for this image, allowing to control the position of the central image feature on the screen.

## Required CSS support code
CSS properties set up on the component are the following:

* background-image
* background-position

There's no extra code injected into _style_ attribute, authors expected to supply the necessary styling code in a separate stylesheet. Suggested example:

```css
header {
  background-clip: content-box;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
```

## Use in JSX
This will set up _/img/hero.jpg_ as a header background and anchor the point at 85% right and 20% down of the image dimension from the top left corner to serve as image focal point, if screen dimensions does not allow to show the whole image.

```jsx
<Header anchorX="85%" anchorY="20%" src="/img/hero.jpg">
  <h1>Some clickbait phrase</h1>
</Header>
```

By default, the hero image is positioned in the center of the screen.
