import React from "react";
import PropTypes from "prop-types";

class Autocomplete extends React.Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };

    static defaultProps = {
        suggestions: []
    };

    constructor(props) {
        super(props)

        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: "",
            travelChoice: ""
        }
    }

    onChange = (event) => {
        const { suggestions } = this.props;
        const userInput = event.currentTarget.value;
        const filteredSuggestions = suggestions.filter(suggestion => {
            return suggestion.toLowerCase().indexOf(userInput.toLowerCase() ) > -1
        });

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: event.currentTarget.value
        })
    }

    onClick = (event) => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: event.currentTarget.innerText,
            travelChoice: this.state.filteredSuggestions[this.state.activeSuggestion]
        })
    }

    onKeyDown = (event) => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        if(event.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion],
                travelChoice: filteredSuggestions[activeSuggestion]
            })
            console.log(this.state.userInput);
        } else if(event.keyCode === 38) {
            if(activeSuggestion === 0) {
                return;
            }

            this.setState({
                activeSuggestion: activeSuggestion - 1
            })
        } else if(event.keyCode === 40) {
            if(activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({
                activeSuggestion: activeSuggestion + 1
            })
        }
    }

    render() {
        let suggestionsListComponent;
        
        if(this.state.showSuggestions && this.state.userInput) {
            if(this.state.filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul>
                        {this.state.filteredSuggestions.map((suggestion, index) => {
                            let className;

                            if(index === this.state.activeSuggestion) {
                                className="activeSuggestion";
                            }
        
                            return(
                                <li
                                    className={className}
                                    key={suggestion}
                                    onClick={this.onClick}
                                >
                                    {suggestion}
                                </li>
                            )
                        })}
                    </ul>
                )
            } else {
                suggestionsListComponent = (
                    <div>
                        <em>No suggestions, you probably don't want to go there!</em>
                    </div>
                )
            }
        }
        
        return(
            <div className="autoComplete">
                <input
                    type="text"
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    value={this.state.userInput}
                />
                {suggestionsListComponent}
            </div>
        )
    }
}

export default Autocomplete;