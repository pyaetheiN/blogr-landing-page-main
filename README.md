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

![](./desktop design.png)

### Links

- Solution URL: 
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

I learned how to make dropdown menu using css tricks (css overriding orders) and menu toggle just by using a few lines of JavaScript.

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
