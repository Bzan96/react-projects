> I found the dad jokes api while I was searching for a project to do with React and this became the first project that I did with React that I came up with completely on my own. Not that I hadn't done React apps before, but those were all suggestions from other people, this one I figured out by myself what I wanted it to be.

# What I learned by doing this project
* The value of a good API. That has to be the most major thing, for several reasons:
+ This API isn't *fetchable*, i.e. I cannot use fetch() to get it
+ The site API isn't static, meaning that every time you reload the API (on browser reload), you have to re-map the API
+ The full API isn't available in one place, the only way to actually get it all is by using the search-link and going through all 27 pages, 20 jokes at a time
* localStorage.clear() is bad, *really bad*, and should not be used, like *ever*
+ Yeah... I cleared out everything I had in my LocalStorage using that, not just the things I had in this app
* How to use localStorage.remove() to get rid of a full array, not just individual elements within it
* About the axios library that is available to use with React, that helps with API calls
* About headers and Accepting relating to API calls
* I went to a meetup while progressing on this and learned about *async* and *await*, which didn't solve my problem, but still
* How to make a regex that looks at what is behind the information we're looking for
* That you can kinda cheat while producing keys in a mapped list by using Math.random(), because it produces so many decimals that it is highly unlikely that two elements get the same key - **Not advisable for more serious apps**
* That a loading text isn't really necessary when the API call takes a fraction of a second
* How to match the id of a random API call with the key (or id) of an item in a mapped list

### Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
