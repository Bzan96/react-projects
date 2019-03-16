/* 
^regex to match a searchword to a number of options in an array
*/

import React from "react";
import { UndrawAirport } from "react-undraw-illustrations";
import travelDestinations from "./travelDestinations";
import Autocomplete from "./Autocomplete";

function Destination(props) {
    return(
        <div>
            <UndrawAirport
                primaryColor="#462c89"
                height="250px"
            />
            <form onSubmit={props.handleSubmit} className="inputForm">
                <label>Return</label>
                <input type="radio" onChange={props.wayOfTravel} value="return" name="travel" id="return" defaultChecked />
                <label>One-way</label>
                <input type="radio" onChange={props.wayOfTravel} value="one-way" name="travel" id="one-way" />
                <label>Multi City</label>
                <input type="radio" onChange={props.wayOfTravel} value="multi-city" name="travel" id="multi-city" />
                <br />
            </form>
            <label>Where do you want to travel from?</label>
            <Autocomplete suggestions={travelDestinations} />
            <br />
            <label>Where do you want to travel to?</label>
            <Autocomplete suggestions={travelDestinations} />
            {/* <button id="send" onClick={props.showContent}>Send</button> */}
        </div>
    )
}

export default Destination;