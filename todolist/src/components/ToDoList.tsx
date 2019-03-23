import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import DisplayNotes from "./DisplayNotes";

/* I need...
    An input box where the user can enter the note
    A display window where I can show the notes
    I want to split the list so that it shows 10 items
    at most, but if there are more than 5 items there
    will be two columns.
*/

// Super is linted because IF we want to use 'this.props' inside of the
// constructor, we have to pass props to super
// Ended up just passing ComponentProps anyway

// Initializing interface for TypeScript
interface ComponentProps {
    newNote: String,
    form: String
}

// Initializing [key: string] allows use of "{ name, value } = event.target"
interface ComponentState {
    note: String,
    noteList: String[],
    [key: string]: any
}

// Passing ComponentProps and ComponentState that initialize states 
// and props in the class.
class ToDoList extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props)
        this.state = {
            note: "",
            noteList: [],
        }
    }

    handleChange = (event: any) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    newNote = (event: any) => {
        event.preventDefault();
        
        const updateNotes: String[] = [...this.state.noteList];
        updateNotes.push(this.state.note);
        this.setState({
            noteList: updateNotes,
            note: ""
        })
    }

    render() {
        return(
            <div className="pageContainer">
                <Header />
                <CreateNote
                    newNote={this.newNote}
                    data={this.state}
                    handleChange={this.handleChange}
                />
                <DisplayNotes
                    data={this.state}
                />
                <Footer />
            </div>
        )
    }
}

export default ToDoList;