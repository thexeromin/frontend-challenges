# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm).

## Overview

### Screenshot

![](./preview.jpg)

### What I learned

I learned about how to add spacing between `::marker` & list item.

```css
/* Key Learnings in CSS  */
ul li::before {
    content: "•";
    display: inline-block;
    width: 1em;
    margin-right: 0.8rem;
}

ol {
    counter-reset: item;
}

ol li {
    counter-increment: item;
    position: relative;
    padding-left: 2rem;
}

ol li::before {
    content: counter(item) ".";
    position: absolute;
    left: 0;
    width: 1.5rem;
}
```