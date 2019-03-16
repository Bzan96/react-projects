import React from "react";

function Source(props) {
    return(
        <div>
            <h6 id="source">This information was gathered from: <a href={props.text}>{props.text}</a></h6>
        </div>
    )
}

export default Source;