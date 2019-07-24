import React from "react";
import Destination from "./Destination";
import DepartArrive from "./DepartArrive";
import Preferences from "./Preferences";
import months from "./months";

class Form extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            departDate: new Date(),
            arriveDate: new Date(),
            numAdults: 1,
            numChildren: 0,
            departure: "",
            arrival: "",
            wayOfTravel: "return",
        }
    }

    departChange = (departDate) => {
        this.setState({
            departDate: departDate.getDate().toString()
        })
        console.log(this.state.departDate)
    }

    arriveChange = (arriveDate) => {
        this.setState({
            arriveDate: arriveDate.getDate().toString()
        })
        console.log(this.state.arriveDate)
    }

    wayOfTravel = (event) => {
        this.setState({
            wayOfTravel: event.target.value
        })
    }

    updateAdults = (event) => {
        const adults = parseInt(event.target.value.split("")[0]);

        this.setState({
            numAdults: adults
        })
    }

    updateChildren = (event) => {
        const children = parseInt(event.target.value.split("")[0]);

        this.setState({
            numChildren: children
        })
    }

    departureChoice = (event) => {
        this.setState({
            departure: event.target.value
        })
    }

    arrivalChoice = (event) => {
        this.setState({
            arrival: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // Maybe use LocalStorage as a way to show the things in FullBooking?
    showBooking = () => {
        localStorage.setItem("fullState", JSON.stringify([this.state]) );

        window.open("/booking", "_self");
    }

    render() {
        console.log(this.state.arrival)
        console.log(this.state.departure)
        return(
            <div id="container">
                <Destination
                    handleSubmit={this.handleSubmit}
                    arrivalChoice={this.arrivalChoice}
                    departureChoice={this.departureChoice}
                    wayOfTravel={this.wayOfTravel}
                    data={this.state}
                />
                <DepartArrive
                    departChange={this.departChange}
                    arriveChange={this.arriveChange}
                    data={this.state}
                />
                <Preferences
                    updateChildren={this.updateChildren}
                    updateAdults={this.updateAdults}
                />
                {/* Date is an object and an object cannot be called as child in React, hence toString() */}
                <div id="journeyInformation">
                    {this.state.depareDate && this.state.arriveDate ? <h1>{months[this.state.departDate.getMonth().toString()]} {this.state.departDate.getDate().toString()} to {months[this.state.arriveDate.getMonth().toString()]} {this.state.arriveDate.getDate().toString()}</h1> : ""}
                    {this.state.numAdults > 0 ? <h4>{this.state.numAdults} adults travelling with {this.state.numChildren} children.</h4> : "" }
                    <h3>{this.state.departure} to {this.state.arrival}</h3>
                </div>
                <button id="send" onClick={this.showBooking}>Send</button>
            </div>
        )
    }
}

export default Form;