import React from "react";
import Destination from "./Destination";
import DepartArrive from "./DepartArrive";
import Preferences from "./Preferences";

const months = ["January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"];

class Form extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            departDate: new Date(),
            arriveDate: new Date(),
            numAdults: 0,
            numChildren: 0,
            departure: "",
            destination: "",
            wayOfTravel: "return",
        }
    }

    departChange = (departDate) => {
        this.setState({
            departDate
        })
    }

    arriveChange = (arriveDate) => {
        this.setState({
            arriveDate
        })
    }

    wayOfTravel = (event) => {
        this.setState({
            wayOfTravel: event.target.value
        })
    }

    updateAdults = (event) => {
        this.setState({
            numAdults: event.target.value
        })
    }

    updateChildren = (event) => {
        this.setState({
            numChildren: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div id="container">
                <Destination
                    handleSubmit={this.handleSubmit}
                    arrivalListComponent={this.arrivalListComponent}
                    departureListComponent={this.departureListComponent}
                    wayOfTravel={this.wayOfTravel}
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
                <h1>{months[this.state.departDate.getMonth().toString()]} {this.state.departDate.getDate().toString()} to {months[this.state.arriveDate.getMonth().toString()]} {this.state.arriveDate.getDate().toString()}</h1>
                <h4>{this.state.numAdults}+{this.state.numChildren}</h4>
                <h3>{this.departureListComponent} to {this.arrivalListComponent}</h3>
            </div>
        )
    }
}

export default Form;