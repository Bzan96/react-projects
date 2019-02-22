import React from "react";

function NotesList(props) {
    let mappedList = props.data.notes.map((item) => {
        return <li key={item.id}><b>{item.title}</b><br /> &raquo; {item.text}<br /><button onClick={() => props.removeNote(item.id)}>Remove?</button></li>
    })

    return(
        <div>
            <h3>Your notes:</h3>
            {props.data.notes.length !== 0 ?
            <ol>
                {mappedList}
            </ol>:
            <h2>You have no notes.</h2>}
        </div>
    )
}

export default NotesList;