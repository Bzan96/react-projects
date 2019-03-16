/* 
calendar with option to choose "depart date"
calendar with option to choose "return date"
checkbox that blurs the return-calendar if ticked
npm install react-calendar
import Calendar from "react-calendar"
use by adding <Calendar />
*/

import React from "react";
import Calendar from "react-calendar";

function DepartArrive(props) {
    return(
        <div id="calendars">
            <h4 id="dateToLeave">Which date would you like to leave?</h4>
            <Calendar 
                onChange={props.departChange}
            />
            {/* If the "one-way"-button hasn't been ticked
                keys are just arbitrary to remove the console error */}
            { props.data.wayOfTravel !== "one-way" ?
            [<h4 id="dateToReturn" key="heading">Choose a return date</h4>,
            <Calendar
                onChange={props.arriveChange}
                key="calendar"
            />
            ]
            : "" }
        </div>
    )
}

export default DepartArrive;