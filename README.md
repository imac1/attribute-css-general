# AttributeCSS

## Story

I know you are already a PRO in CSS styling.
I am certain that you can do everything with classes and ids.

But what about if you don't have those tools?

Are you still certain that you can solve the challenge?

Your task is to pass all the acceptance criteria without modifying the starting HTML file.

**YOU ARE NOT ALLOWED TO ADD ATTRIBUTES TO THE HTML TAGS.**

You have to work with what you got.

Let's see how you stand against the challenge!

## What are you going to learn?

- CSS attribute selectors
- Pseudo class
- Pseudo element

## Tasks

1. Style the whole card that the wrapper has a maximum width of 500px. After that, the card needs to placed in the middle of its container.
    - The card containing the todo app have a maximum width of 500px
    - The card containing the todo app is placed in the middle of its wrapper

2. The header contains the actual date. Style the texts based on the instructions that the `style-guide.md` file contains under the `Header` title. The date needs to be placed in the middle of its container  and the text describing the amount of tasks needs to be at the middle-right side of its container.
    - The actual date is represented in the card header, at the middle of the first half of the header
    - The amount of tasks is represented in the middle-right of the card's header
    - The font family is of type `Roboto`
    - The font size is `24 px`
    - The letters are bold
    - The texts color is `#0d6efd`

3. You can add new todos to the list by clicking the button with the `+` sign. Change the button's shape to a circle and place it in the middle of its wrapper. Place the input in the middle of its wrapper.
    - The button with the `+` sign has a shape of a circle
    - The input field is placed in the middle of its wrapper
    - The style of the `Clear List` button doesn't changed based on its starting style

4. The input fields have a default read-only value. When you double click the text, you can modify the text. Change the style of the inputs, when the value is read-only the field has no border (even when focused). Every 2nd todos have a grayish background (even the input fields). Place the checkboxes in the middle of their wrappers.
    - There is no border around the titles of the todos by default
    - There is no border around the titles of the todos when we click once on a title
    - There is a border around the title of the todo that we double clicked
    - Every 2nd todos have a background color of gray (#E0E0E0)
    - All the checkboxes are placed in the middle of their wrapper

## General requirements

- There is no changes in the commit history containing the file `index.html`

## Hints

- Default input fields use outlines in pseudo classes, not borders.

## Background materials

- <i class="far fa-exclamation"></i> [Attribute selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
- <i class="far fa-exclamation"></i> [Examples](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- <i class="far fa-video"></i> [Those who love videos more](https://www.youtube.com/watch?v=GVocONem9lw&ab_channel=TheNetNinja)
- <i class="far fa-exclamation"></i> [Child selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)
- <i class="far fa-book-open"></i> [Playing with the children](https://css-tricks.com/useful-nth-child-recipies/)
