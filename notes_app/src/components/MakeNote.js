import React from "react";

function MakeNote(props) {
    return(
        <div>
            {props.data.notes.length > 0 ? <h3>Add another note:</h3> : <h3>Add a note:</h3>}
            <form>
                <label>
                    <input
                        name="title"
                        value={props.data.title}
                        placeholder="Give your note a title..."
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <label>
                    <input
                        name="text"
                        value={props.data.text}
                        placeholder="Make your note here..."
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <button onClick={props.saveNote}>Save Note</button>
            </form>
        </div>
    )
}

export default MakeNote;