import React from "react";

function DisplayNotes(props: any) {
    const mappedNotes: String[] = props.data.noteList.map((note: any) => {
        return <label key={note}><input type="checkbox" className="checkbox" /><p>{note}</p><br /></label>
    });

    const shownNotes: String[] = [];
    for(let i=0; i<mappedNotes.length; i++) {
        if(shownNotes.length < 10) {
            shownNotes.push(mappedNotes[i]);
        }
    }

    return(
        <div className="container">
            {shownNotes}
        </div>
    )
}

export default DisplayNotes;