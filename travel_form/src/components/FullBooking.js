import React from "react";
import months from "./months";

class FullBooking extends React.Component {
    constructor() {
        super()
        this.state = {
            departDate: "",
            arriveDate: "",
            numAdults: 1,
            numChildren: 0,
            departure: "",
            arrival: "",
            wayOfTravel: "return",
        }
    }

    hydrateStateWithLocalStorage() {
        for(let key in this.state) {
            if(localStorage.hasOwnProperty(key) ) {
                let value = localStorage.getItem(key);

                try {
                    value = JSON.parse(value);
                    this.setState({
                        [key]: value
                    });
                } catch(error) {
                    this.setState({
                        [key]: value
                    });
                }
            }
        }
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();
    }

    render() {
        console.log(this.state)
        return(
            <section>
                {this.state.depareDate ? <h1>{months[this.state.departDate.getMonth().toString()]} {this.state.departDate.getDate().toString()} to {months[this.state.arriveDate.getMonth().toString()]} {this.state.arriveDate.getDate().toString()}</h1> : ""}
                {this.state.numAdults > 0 ? <h4>{this.state.numAdults} adults travelling with {this.state.numChildren} children.</h4> : "" }
                <h3>{this.state.departure} to {this.state.arrival}</h3>
            </section>
        )
    }
}

export default FullBooking;