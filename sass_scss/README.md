# Sass & Scss
# Sass and SCSS Overview

## Introduction
Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It adds features like variables, nested rules, and mixins, making CSS more maintainable and easier to write.

## SCSS vs. Sass
Sass has two syntaxes. The older syntax, often called just "Sass", uses indentation to separate code blocks and omitting semicolons and braces. SCSS (Sassy CSS) is an extension of the syntax of CSS, making it more readable and familiar.

## Features
- **Variables:** Define reusable values such as colors, font stacks, or any CSS value.
- **Nesting:** Nest CSS selectors in a way that follows the same visual hierarchy of your HTML.
- **Partials and Imports:** Split your CSS into smaller, maintainable portions.
- **Mixins:** Reuse whole chunks of CSS, properties or selectors.
- **Inheritance:** Share styles between selectors without copy-pasting.
- **Functions:** Write reusable pieces of CSS, like color functions.

## Installation
To start using Sass, you need to have it installed on your system. You can install it via npm:

```bash
npm install -g sass

## Usage

Sass files can be compiled into regular CSS using the `sass` command:

```bash
sass input.scss output.css
To watch for changes in your Sass file and automatically compile it into CSS whenever the Sass file changes, use:

```bash
sass --watch input.scss output.css

## Example

### SCSS Input

```scss
// variables
$primary-color: #333;

// mixins
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

// nesting
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    text-decoration: none;
  }
}

// inheritance
.error {
  border: 1px solid #f00;
  background-color: #fdd;
}

.error--urgent {
  border-width: 3px;
}

.message {
  @extend .error;
  border-width: 3px;
}
## Compiled CSS Output

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  text-decoration: none;
}
.error, .message {
  border: 1px solid #f00;
  background-color: #fdd;
}
.error--urgent, .message {
  border-width: 3px;
}

