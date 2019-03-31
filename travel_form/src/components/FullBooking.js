import React from "react";
import months from "./months";

function FullBooking(props) {
    return(
        <section>
            {props.data.depareDate ? <h1>{months[props.data.departDate.getMonth().toString()]} {props.data.departDate.getDate().toString()} to {months[props.data.arriveDate.getMonth().toString()]} {props.data.arriveDate.getDate().toString()}</h1> : ""}
            {props.data.numAdults > 0 ? <h4>{props.data.numAdults} adults travelling with {props.data.numChildren} children.</h4> : "" }
            <h3>{props.data.departure} to {props.data.arrival}</h3>
        </section>
    )
}

export default FullBooking;