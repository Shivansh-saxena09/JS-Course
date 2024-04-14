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



## Project -3 Digital Clock
# Project -3 Code

``` HTML
---------------------HTML----------------------------------


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
      <a href="/" aria-current="page">Project - 3</a>
      <a href="/page2.html">Digital Clock</a>
    </nav>
   <div class="centre">
    <div id="banner"><span>Your Local Time</span></div>
   <div class="container">
    <div id="clock"></div>
   </div>
   </div>
  </body>
</html>


```

```CSS

-------------------------------CSS----------------------

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

  .centre {
    text-align: center;
}

#banner {
    background-color: #333;
    color: #fff;
    padding: 25px;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 3rem;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh; /* Adjust as needed */
  }
  
  #clock {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: yellow;
    color: black;
    font-size: 30px;
    line-height: 200px;
    text-align: center; /* Added to center text horizontally */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  

@media (max-width: 768px) {
    #clock {
        width: 150px;
        height: 150px;
        font-size: 20px;
        line-height: 150px;
    }
}

@media (max-width: 480px) {
    #clock {
        width: 100px;
        height: 100px;
        font-size: 16px;
        line-height: 100px;
    }
}
```

```javascript

-----------------------------Javascript-----------------------

const clock = document.getElementById('clock')


setInterval(()=>{
    let date = new Date();
    // console.log(date.toLocaleString())
    clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## Project -4 Number Guessing Game
# Project -4 Code

```HTML
-------------------------HTML------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="wrapper">
        <h1>Number Guessing game</h1>
        <p>Try and guess a random number between 1 to 100</p>
        <p>You have 10 attempts to guess the right number.</p>
        <br>

        <form class="form">
            <label for="guessField" id="guess">Guess a Number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="submit guess" class="guessSubmit">
        </form>

        <div class="resultparas">
            <p>Previous Guesses: <span class="guesses"></span></p>
            <p> Guess remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

```CSS

------------------------CSS-------------------------

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

#wrapper {
    max-width: 600px;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
}

p {
    text-align: center;
    color: #666;
}

.form {
    text-align: center;
}

.guessField {
    padding: 10px;
    width: 100px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.guessSubmit {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.guessSubmit:hover {
    background-color: #0056b3;
}

.resultparas {
    margin-top: 20px;
    text-align: center;
}

.resultparas p {
    margin: 5px;
}

.lowOrHi {
    color: #007bff;
    font-weight: bold;
}

@media screen and (max-width: 768px) {
    #wrapper {
        margin: 20px;
    }
}

```
```javascript
------------------------Javascript---------------------

let randomNumber= parseInt( Math.random()*100 + 1) 
const submit =document.querySelector('#subt')
const userInput =document.querySelector('#guessField')

const guesses = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult')
 const lowOrHi = document.querySelector('.lowOrHi')

 const startOver = document.querySelector('.resultparas')

 const para = document.createElement('p')

 let prevGuess = []
 let numGuesses = 1

 let playGame = true

 if (playGame) {
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
      const guess =  parseInt(userInput.value)
    //   console.log(guess)
    //   console.log(`this is my validate function for guess`,validateGuess(guess))
    validateGuess(guess)
    })
 }


 function validateGuess(guess){
  // validation for all the requirements
  if (isNaN(guess)) {
    alert(`Please enter a valid number`)
    
  }else if (guess < 1){
    alert(`Please enter a number grater then 0`)
  }

  else if (guess > 100){
    alert(`Please enter a number less then 100`)
  }
else{
    prevGuess.push(guess)
    if(numGuesses === 11){
        displayGuess(guess)
        displayMessage(`Game Over. Random Number was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
 }


 function checkGuess(guess){
  if (guess === randomNumber) {
    displayMessage(`You guessed it Right`)
    endGame()
  }
  else if (guess < randomNumber){
  displayMessage("Number is too low")
  }

  else if (guess > randomNumber){
    displayMessage("Number is too high")
    }
 }

 function displayGuess(guess){
    userInput.value = ``
    guesses.innerHTML += `${guess},`
   
    numGuesses++
    remaining.innerHTML =`${11-numGuesses}`

 }


 function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
 }

 function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    para.classList.add('button')
    para.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(para)
    playGame = false
    newGame()
 }


 function newGame(){
  const newGameButton= document.querySelector('#newGame')
  newGameButton.addEventListener('click',(e)=>{
    e.preventDefault()
    randomNumber =parseInt( Math.random()*100 + 1) 
    prevGuess = []
    numGuesses = 1
    guesses.innerHTML = ``
    remaining.innerHTML = `${11-numGuesses}`
    userInput.removeAttribute(`disabled`)
    startOver.removeChild(para)
 playGame =true
  })
 }




```