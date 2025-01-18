# Higher or Lower Game

## Simple Website Tutorial

Welcome to the Simple Website Tutorial! This guide will walk you through the steps to create a basic website using HTML, CSS, and JavaScript.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Step-by-Step Guide](#step-by-step-guide)
  - [1. Create the HTML File](#1-create-the-html-file)
  - [2. Create the CSS File](#2-create-the-css-file)
  - [3. Create the JavaScript File](#3-create-the-javascript-file)
  - [4. Link the CSS and JavaScript Files](#4-link-the-css-and-javascript-files)
  - [5. Adding the function to your JavaScript File](#5-adding-the-function-to-your-javascript-file)
  - [6. Open the HTML File in a Browser](#5-open-the-html-file-in-a-browser)
- [Things to Look Out For](#things-to-look-out-for)
- [Conclusion](#conclusion)

## Introduction

In this project, you will create a small game where a random number will be generated at the click of a button and you as the player will decide whether the next number will be higher or lower.

## Project Structure

Create a project directory and set up the following file structure:
```plaintext
simple-website/
├── index.html
├── styles.css
└── script.js
```

## Step-by-Step Guide

### 1. Create the HTML File

Open your code editor and create a file named `index.html`. Add the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Higher or Lower</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Higher or Lower</h1>
  <div class="center">
  <button type="button" onclick="generateRandom()">Get a random number! </button>
  </div>
  <p id="result"> </p>
  <p>Will the next number be higher or lower?</p>
  <div class = "center">
  <button type="button" onclick="lower()"><< Lower</button>
  <button type="button" onclick="higher()">Higher >></button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
### 2. Create the CSS File

Create a file named `styles.css` and add the following code to style your webpage:

```css
body {
    min-height: 100vh;
    min-width: 100vw;
    background-color: #12181f;
    color:white;
}

h1 {
    text-align: ;
    font-weight: 700;
    font-size: 50px;
}

p {
    text-align: ;
    font-size: 30px;
    font-weight: bold;
}

.center {
    display: ;
    justify-content: ;
    align-items: ;
    height: 50px;
}
```

> [!NOTE]
> Let's refresh those flexbox skills that you learned last week. Notice that some parts of the codes are missing. Fill in the blank.

### 3. Create the JavaScript File

Create a file named `script.js` 

### 4. Link the CSS and JavaScript Files

Ensure that the CSS and JavaScript files are linked correctly in your `index.html` file. The `<link>` tag for CSS should be inside the `<head>` section, and the `<script>` tag for JavaScript should be just before the closing `</body>` tag.

### 5. Adding the function to your JavaScript File

1. Creating the Global Variables

> [!TIP]
> A global variable is a variable that can be accessed from anywhere in a program. Global variables are defined outside of functions, classes, etc.

```js
var resultParagraph = document.getElementById("result");
var random;
var range;
var nextRandom = Math.floor(Math.random() * range + 1);
```

- The range will be the range from 1 to the number that you set the range to be.
  - Set the range to a number of your choice.
 
2. Creating the functions

- In the HTML file, you will notice 3 different functions (generateRandom(), lower(), and higher())
  - Create the generateRandom function 
    - In that function put in the following code:
    - ```js
      random = nextRandom;
      nextRandom = Math.floor(Math.random() * range + 1);
      console.log(random);
      resultParagraph.innerHTML = random;
       ```
  - Create the higher function
    - In that function you will create an if statement.
    - I want you to figure this one out.
    - ```js
       if (condition) {
        // something happens
       } else if (!sameNumber()) {
         // something happens
       }

      generateRandom();
      ```
> [!TIP]
> The condition will use the variables "random", "nextRandom", and a comparison operator. Use window.alert to print out what happens after the conditions are met.

- Create the lower function
  - This function will be similar to the higher function
  - I want you to figure this one out.
  - ```js
    if (condition) {
      // something happens
    } else if (!sameNumber()) {
      // something happens
    }

      generateRandom();
    ```
> [!TIP]
> Again the condition will use the variables "random", "nextRandom", and a comparison operator, the comparison operator this time however will be different than the one you used in the higher function. Use window.alert to print out what happens after the conditions are met.

- Create the sameNumber function
  - This function will slightly differ from the other function.
  - ```js
    if (condition) {
      // something happens
      return true;
    }

    return false;
    ```
> [!TIP]
> Again the condition will use the variables "random", "nextRandom", and a comparison operator, the comparison operator this time however will be different than the one you used in the higher function. Use window.alert to print out what happens after the conditions are met.

### 6. Open the HTML File in a Browser

Open your `index.html` file in a web browser to see your simple website in action. You should see a styled heading, a paragraph, and a button that displays an alert when clicked.

## Things to Look Out For

- Ensure the file paths in the `<link>` and `<script>` tags are correct.
- Use proper HTML structure and semantics.
- Keep your CSS organized and use meaningful class names.
- Avoid inline styles and JavaScript as much as possible for better maintainability.
- Test your website in different browsers to ensure compatibility.

## Stretch Goals
If you finish early, feel free to try out these additions to your website!
- Make the buttons look nicer.

## Conclusion

Congratulations! You've created a simple game using HTML, CSS, and JavaScript. This is just the beginning – there are many more features and technologies to explore. Keep learning and experimenting to build more complex and dynamic websites.

Feel free to reach out if you have any questions or feedback. Happy coding!
