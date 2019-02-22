import React from "react";
import MakeNote from "./MakeNote";
import NotesList from "./NotesList";
import Header from "./Header";
import Footer from "./Footer";

class Notes extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            text: "",
            notes: []
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })

        localStorage.setItem([name], value);
    }

    saveNote = (event) => {
        event.preventDefault();
        const updateNotes = [...this.state.notes];

        let newNote = { id: 1 + Math.random(), "title": this.state.title, "text": this.state.text };

        updateNotes.push(newNote);

        this.setState({
            title: "",
            text: "",
            notes: updateNotes
        })

        localStorage.setItem("notes", JSON.stringify(updateNotes) );
        localStorage.setItem("title", "");
        localStorage.setItem("text", "");
    }

    // Not added yet
    removeNote = (id) => {
        console.log(id);
        const notes = [...this.state.notes];

        const remainingNotes = notes.filter(note => note.id !== id);

        this.setState({
            notes: remainingNotes
        })

        localStorage.setItem("notes", JSON.stringify(remainingNotes) );
    }

    // Make all notes persist through a browser refresh or closing down the app
    // Local Storage lives locally in a specific computer's browser
    hydrateStateWithLocalStorage() {
        for(let key in this.state) {
            if(localStorage.hasOwnProperty(key) ) {
                let value = localStorage.getItem(key);

                try {
                    value = JSON.parse(value);
                    this.setState({
                        [key]: value
                    });
                } catch(error) {
                    this.setState({
                        [key]: value
                    });
                }
            }
        }
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();
    }

    render() {
        return(
            <div>
                <Header />
                <div className="container">
                    <MakeNote
                        handleChange = {this.handleChange}
                        saveNote = {this.saveNote}
                        data={this.state}
                    />
                    <NotesList
                        removeNote = {this.removeNote}
                        data={this.state}
                    />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Notes;