# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](solution design/)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/responsive-blogr-landing-page-using-flexbox-grid-and-javascript-SJrdbwJE5
- Live Site URL: https://pyaethein.github.io/blogr-landing-page-main/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SCSS
- Vanilla JavaScript

### What I learned

- Having a `background-image` (svg) and `background-color` (linear-gradient) using two containers.
- Making dropdown menu using css `:hover` and menu toggle just by using icon library class names in JavaScript.

```html
<!-- ===== background gradient ===== -->
<div class="overlay">
  <!-- ===== hero ===== -->
  <section class="hero" id="hero">
  </section>
</div>
```
```css
.overlay{
  background: linear-gradient(to right, #ff8f70, #ff3d54);
}
.hero{
  background-image: url("../images/bg-pattern-intro-desktop.svg");
  background-repeat: no-repeat;
  background-position: -25vw -82vw; /* x, y */
  background-size: 200%;
}
```
```js
const navMenu = document.getElementById('nav-menu');
const navList = document.getElementById('nav-list');

navMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
  navMenu.classList.toggle('fa-xmark');
})
```

### Continued development

I'll be focusing more on JavaScript basics and useful events for upcoming challenges.

### Useful resources

- (https://youtu.be/_cUM13VUw8U) - This helped me for dropdown menu & menu toggle. I really liked this way of coding and will use it going forward.

## Author

- Frontend Mentor - [@pyaetheiN](https://www.frontendmentor.io/profile/pyaetheiN)
- Twitter - [@pt_boyyy](https://www.twitter.com/pt_boyyy)

## Acknowledgments

- Bedimcode (https://www.youtube.com/channel/UCgkDs77BoEhMIgRUB4MKrtQ)
