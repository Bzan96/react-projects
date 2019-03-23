import React from "react";

function CreateNote(props: any) {
    return(
        <div className="makeNote">
            <form onSubmit={props.newNote}>
                <label>Scribble down a note: </label>
                <input
                    name="note"
                    autoFocus
                    value={props.data.note}
                    onChange={props.handleChange}
                />
                <button>Add Note</button>
            </form>
        </div>
    )
}

export default CreateNote;