import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Generate from "./Generate";
import axios from "axios";

let mappedJokes = [];

/* Issues to fix:
If you save a joke, the list doesn't get updated until you save a second joke. - hydrateState on save?
For some reason the array starts at [2], not [1] or [0]
*/

// Try out async/await for the api call - how to circumvent the for loop?

 class DadJokeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            joke: {},
            allJokes: [],
            savedJokes: [],
            choice: 0,
            currentJokeNumber: 0,
            loading: false
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        if(value >= 0 && value <= this.state.allJokes.length-1 && value.length < 4) {
            if(value.length > 1 && value[0] === 0) {
                this.setState({
                    [name]: value.slice(1, value.length)
                })
            } else {
                this.setState({
                    [name]: value,
                })
            }
        }

        localStorage.setItem([name], value);
        this.hydrateStateWithLocalStorage();
    }

    hydrateStateWithLocalStorage() {
        for(let item in this.state) {
            if(localStorage.hasOwnProperty(item) ) {
                let value = localStorage.getItem(item);

                try {
                    value = JSON.parse(value);
                    this.setState({
                        [item]: value
                    })
                } catch(error) {
                    console.log(error);
                    this.setState({
                        [item]: value
                    })
                }
            }
        }
    }

    async apiCall() {
        for(let i=1; i<28; i++) {
            await axios.get("https://icanhazdadjoke.com/search?term=&page="+i, {
                headers: {
                    Accept: "application/json"
                }
            }).then(data => {
                mappedJokes = data.data.results.map(joke => {
                    return <h4 key={joke.id}>{joke.joke}</h4>;
                })

                this.setState({
                    allJokes: [...this.state.allJokes].concat(mappedJokes),
                    loading: false
                })
            })
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })

        this.hydrateStateWithLocalStorage();

        // Why is there nothing on allJokes[0] and [1]?
        this.apiCall();

        this.generateJoke();
    }

    generateJoke = () => {
        axios.get("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        }).then(data => {
            // What happens when there are more than 2 lines in the joke? Ie. statement - question - punchline
            // Semi-solved by writing out everything but the first part in the punchline.
            // The regex doesn't react to "..." - should it though?
            let question = data.data.joke.split(/(?<=[.?])\s/)[0];
            let punchline = data.data.joke.split(/(?<=[.?])\s/).slice(1, data.data.joke.length);
            let num = 0;
            
            for(let joke in this.state.allJokes) {
                if(this.state.allJokes[joke].key === data.data.id) {
                    num = joke;
                }
            }

            this.setState({
                joke: {
                    id: data.data.id,
                    joke: question,
                    punchline: punchline,
                    currentJokeNumber: num,
                },
                choice: num
            })
        })
    }

    saveJoke = () => {
        let saveArr = this.state.savedJokes;
        saveArr.push(this.state.allJokes[this.state.choice]);

        let mappedArr = saveArr.map(joke => joke)

        if(this.state.savedJokes.length < 10) {
            this.setState({
                savedJokes: mappedArr,
            })
        } else {
            alert("Storage is full, your top ten list is complete.");
        }

        localStorage.setItem("savedJokes", JSON.stringify(mappedArr) );
    }

    clearList = () => {
        localStorage.removeItem("savedJokes");
    }

    render() {
        let jokes = this.state.savedJokes.map((item) => {
            return <li key={1+Math.random()}>{item.props.children}</li>
        })
        
        return(
            <div>
                <Header />
                {this.state.loading ? "Loading data..." :
                <div className="container">
                    <Generate
                        generateJoke={this.generateJoke}
                        handleChange={this.handleChange}
                        saveJoke={this.saveJoke}
                        data={this.state}
                        mappedJokes={mappedJokes}
                    />
                    <hr />
                    <div id="randomJoke">
                        <h2>{this.state.joke.joke}</h2>
                        <h2 id="reply"><em>{this.state.joke.punchline}</em></h2>
                    </div>
                    <hr />
                    <div id="soughtJoke">
                        {this.state.choice > 1 ? this.state.allJokes[this.state.choice] : ""}
                    </div>
                    <button id="clearList" onClick={this.clearList}>Reset Jokes List</button>
                </div>
                }
                <div id="saved">
                    {jokes.length > 1 ? <ul>{jokes}</ul> : ""}
                </div>
                <Footer />
            </div>
        )
    }
}

export default DadJokeGenerator;