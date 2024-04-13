# Projects Related to DOM

## Project -1 Background Changer Link
[Click Here](https://stackblitz.com/edit/stackblitz-starters-3ws1rh?file=index.html)

# Project 1 Code 

```html
-------------HTML---------------------
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <!--
      Need a visual blank slate?
      Remove all code in `styles.css`!
    -->
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Project - 1</a>
      <a href="/page2.html">Background colour Changer</a>
    </nav>
    <main class="container">
      <div class="button" id="blue">Blue</div>
      <div class="button" id="green">Green</div>
      <div class="button" id="yellow">Yellow</div>
      <div class="button" id="red">Red</div>
    </main>
  </body>
</html>

```

```css
----------------CSS------------------------------
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: black;
  background-color: white;
}

nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-bottom: solid 1px #aaa;
  background-color: #eee;
}

nav a {
  display: inline-block;
  min-width: 9rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: solid 1px #aaa;
  text-align: center;
  text-decoration: none;
  color: #555;
}

nav a[aria-current='page'] {
  color: #000;
  background-color: #d4d4d4;
}

main {
  padding: 1rem;
}

h1 {
  font-weight: bold;
  font-size: 1.5rem;
}

.container {
  display: flex;
  justify-content: space-around;
  gap: 10px;
}

.button {
  width: 50px;
  height: 50px;
  padding: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  font-weight: bold;
  border: 2px solid black;
  box-sizing: border-box;
}

```


```javascript
--------------Javascript---------------------------
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((bu) => {
  bu.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'green':
        body.style.backgroundColor = 'green';

        break;

      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;

      case 'red':
        body.style.backgroundColor = 'red';

      default:
        break;
    }
  });
});

```