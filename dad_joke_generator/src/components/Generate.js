import React from "react";

function Generate(props) {
    return(
        <div>
            <button onClick={props.generateJoke}>Fetch Me A Random Joke</button>
            <h6 id="jokeNumber">#{props.data.joke.currentJokeNumber}</h6>
            <input
                name="choice"
                type="number"
                value={props.data.choice}
                onChange={props.handleChange}
            />
            <button id="findJoke" onClick={props.saveJoke}>Save Joke #</button>
        </div>
    )
}

export default Generate;

//https://icanhazdadjoke.com/api