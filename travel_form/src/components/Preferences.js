/*
select/option with "1 adult" to "9 or more adults"
select/option "0 children" to "9 children"
select/option with ticket type: "economy", "premium economy", "business", "first class"
checkboxes for:
    "search only direct flights"
    "search with included baggage"
    "also search nearby dates"
*/

import React from "react";

const adults = [];
const children = [];
for(let i=2; i<10; i++) {
    adults.push(<option key={i}>{i} adults</option>);
    children.push(<option key={i}>{i} children</option>)
}

function Preferences(props) {
    return(
        <div id="travellingPeople">
            <h3>How many people will be travelling?</h3>
            <select onChange={props.updateAdults}>
                <option key="1">1 adult</option>
                {adults}
            </select>
            <select onChange={props.updateChildren}>
                <option key="0">0 children</option>
                <option key="1">1 child</option>
                {children}
            </select>
        </div>
    )
}

export default Preferences;