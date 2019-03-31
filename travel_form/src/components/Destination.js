import React from "react";
import { UndrawAirport } from "react-undraw-illustrations";
import travelDestinations from "./travelDestinations";
import Autocomplete from "./Autocomplete";

function Destination(props) {
    console.log(props.travelChoice)
    return(
        <div className="formPosition">
            <UndrawAirport
                primaryColor="#462c89"
                height="250px"
                zIndex="-1"
            />
            <form onSubmit={props.handleSubmit} className="inputForm">
                <label>Return</label>
                <input
                    type="radio"
                    onChange={props.wayOfTravel}
                    value="return"
                    name="travel"
                    className="travelButtons"
                    id="return"
                    defaultChecked
                />
                <label>One-way</label>
                <input
                    type="radio"
                    onChange={props.wayOfTravel}
                    value="one-way"
                    name="travel"
                    className="travelButtons"
                    id="one-way"
                />
                {/* May add later
                <label>Multi City</label>
                <input
                    type="radio"
                    onChange={props.wayOfTravel}
                    value="multi-city"
                    name="travel"
                    className="travelButtons"
                    id="multi-city"
                />
                 */}
                <br />
            </form>
            <label className="travelLabels">Where do you want to travel from?</label>
            <Autocomplete
                departChoice={props.travelChoice}
                suggestions={travelDestinations}
            />
            <br />
            <label className="travelLabels">Where do you want to travel to?</label>
            <Autocomplete
                arrivalChoice={props.travelChoice}
                suggestions={travelDestinations}
            />
        </div>
    )
}

export default Destination;