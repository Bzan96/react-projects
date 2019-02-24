> I had already done a To-Do-List app as part of a tutorial so I didn't wanna do another just like the last one, but I wanted to try my skills at something similar, so I figured I'd make an app with notes that you could add and remove, but also store between sessions. Initially I was going to use MongoDB for it, but then...

# What I learned doing this project
* About LocalStorage and some upsides and downsides to using it (mostly, don't store sensitive information in LocalStorage!)
* The value of adding a key to each element in a list, especially in React. I had actually learned this before during a tutorial, but as always you don't quite learn something until you've failed at it. Deleting all elements the list with one button-click certainly did the trick...
* How to send data through props *the other way*, i.e. from top to bottom and not just the other way around
* How to use LocalStorage and (some of) the pitfalls when using it
* About hydrating state relating to the use of LocalStorage
* The value of try/catch in certain situations
* Using the spread operator outside of localized algorithm scripting
* Trivial, but that functions in React don't actually have to start with "handle", as in "handleClick()", "handleChange()", "handleSubmit()" and such
* That *click* isn't really an event that needs to be tracked. I.e., when a click happens it happens instantaneously, but when a an input is changed every change is a new event

### Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
