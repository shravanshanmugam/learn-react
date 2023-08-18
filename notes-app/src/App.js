import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"
import * as noteStore from './noteStore.js'

export default function App() {
    const [notes, setNotes] = React.useState(noteStore.getNotes())
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            title: "# Type your markdown",
            body: "# Type your markdown note's title here",
            modifiedOn: new Date().getTime()
        }
        setNotes(noteStore.addNote(newNote))
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        setNotes(noteStore.editNote({id: currentNoteId, body: text, title: text.substring(0, 20), modifiedOn: new Date().getTime()}))
    }

    function removeNote(id) {
        setNotes(noteStore.deleteNote(id))
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    removeNote={removeNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
