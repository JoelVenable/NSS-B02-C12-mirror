# NSS-B02-C12-mirror


## Practice: Mirror, Mirror in the Code

> The learning objective for this exercise is to listen for the `keyup` event, and update the DOM when it is broadcast.

1. Create an input field in your DOM. Give it an id of `message`.
1. Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
1. Give each article a different border color.
1. Write an event listener that listens for the `keyup` event on the input field.
1. The event handler function should update the `textContent` property of both sections.

![event listener for keyup](./images/oJCxpJ0EeU.gif)

## Practice: Scrolling and Scaling

> The learning objective for this exercise is to practice listening for the `scroll` event broadcast by the browser, and updating DOM elements in response.

Create the following three files, and copy pasta the code provided.

> index.html

Put the following code into the `<body>` element.

```html
<article id="container">
  <section id="audrey">Feed me, Seymour</section>
</article>
```

> box.css

```css
#container {
  display: flex;
  min-height: 1500px;
}

#audrey {
  background-color: purple;
  color: snow;
  min-height: 100px;
  width: 50px;
  position: fixed;
}
```

> audrey.js

```js
const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
.addEventListener("", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})
```

![example of how scroll event should look](./images/eBh72rsnv3.gif)
