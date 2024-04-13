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


## Project -2 BMI Generator
[Click Here](https://stackblitz.com/edit/stackblitz-starters-lhb5uz?file=1_BMIGenerator%2Findex.html,1_BMIGenerator%2Fstyles.css,1_BMIGenerator%2Fscript.js)


# Project -2 Code

```HTML
 --------------------HTML-------------------------
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
    <!-- <script type="module" src="script.js"></script> -->
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Project - 2</a>
      <a href="/page2.html">BMI Generator</a>
    </nav>
    <div class="container">
      
      <form>
        <h1>BMI Calculator</h1>
        <p><label>Height in cm</label><input type="text" id="height" /></p>
        <p><label>Weight in kg</label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="guide"></div>

        <div class="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less then 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Over Weight = Greater then24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="script.js"></script>
</html>

```

```CSS
------------------CSS-----------------------------------

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: black;
  background-color: rgb(153, 150, 150);
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
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 3rem;
}

form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

p {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

#results {
  margin-top: 20px;
  font-weight: bold;
}

#guide {
  margin-top: 20px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
}

.weight-guide {
  margin-top: 20px;
}

.weight-guide h3 {
  margin-top: 0;
}

.weight-guide p {
  margin-bottom: 5px;
}
  
```

```javascript
------------------------Javascript--------------------------

const form = document.querySelector('form');
// ths use case  will give empty values
// const height =parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give Valid Height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give Valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    
    // show the result

    results.innerHTML = `<span> Your BMI is: ${bmi}</span>`;
    let guide = document.querySelector('#guide');
    if (bmi <= 18.6) {
      guide.innerHTML = `You are under weight ${weight}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      guide.innerHTML = `Your weight is normal ${weight}`;
    } else {
      guide.innerHTML = `You are over weight ${weight}`;
    }
  }
});


```