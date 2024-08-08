# Flexbox Guide

## Introduction

Flexbox (Flexible Box Layout) is a CSS layout model designed to provide an efficient way to align and distribute space among items in a container. It is particularly useful for creating responsive web layouts and complex alignment scenarios without the need for floats or positioning.

## Features

- **Flexible Containers:** Containers can adjust their size and layout dynamically.
- **Alignment:** Easy horizontal and vertical alignment of items.
- **Ordering:** Control the order of items without changing the HTML structure.
- **Direction:** Flexible direction control (row or column).

## Basic Concepts

### Flex Container

To create a flex container, apply `display: flex;` or `display: inline-flex;` to the parent element.

```css
.container {
  display: flex;
}
## Flex Items

Direct children of a flex container become flex items and are laid out according to the flexbox properties.

## Key Properties

### Container Properties

- **`flex-direction`**: Defines the direction flex items are placed in the flex container.
  - Values: `row`, `column`, `row-reverse`, `column-reverse`.

- **`flex-wrap`**: Specifies whether flex items should wrap onto multiple lines.
  - Values: `nowrap`, `wrap`, `wrap-reverse`.

- **`flex-flow`**: A shorthand for `flex-direction` and `flex-wrap`.

- **`justify-content`**: Aligns flex items along the main axis.
  - Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

- **`align-items`**: Aligns flex items along the cross axis.
  - Values: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

- **`align-content`**: Aligns flex lines within the flex container.
  - Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

- **`align-self`**: Allows the default alignment to be overridden for individual flex items.

### Item Properties

- **`flex-grow`**: Defines the ability for a flex item to grow if necessary. Default is `0`.

- **`flex-shrink`**: Defines the ability for a flex item to shrink if necessary. Default is `1`.

- **`flex-basis`**: Defines the default size of an element before the remaining space is distributed. Default is `auto`.

- **`flex`**: A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

- **`align-self`**: Allows the default alignment to be overridden for individual flex items.
## Resources

- [MDN Web Docs: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
