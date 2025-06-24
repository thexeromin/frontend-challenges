# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj).

## Overview

### Screenshot

![](./design/desktop-preview.jpg)

### What I learned
- Used inherited box model technique. Although It's not helpfull for this case. [Read More](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

```html
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}
```