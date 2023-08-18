export function sort(notes) {
    return notes.sort((a, b) => b.modifiedOn - a.modifiedOn);
}

export function getNotes(defaultSort = true) {
    const notesStr = localStorage.getItem('notes') || '';
    return notesStr && notesStr.length > 0 ? defaultSort ? sort(JSON.parse(notesStr)) : JSON.parse(notesStr) : [];
}

export function addNote(newNote) {
    const notes = getNotes(false);
    notes.push(newNote)
    const sortedNotes = sort(notes);
    localStorage.setItem('notes', JSON.stringify(sortedNotes));
    return sortedNotes;
}

export function editNote(updatedNote) {
    const notes = getNotes(false);
    for (let index = 0; index < notes.length; index++) {
        const note = notes[index];
        if (note.id === updatedNote.id) {
            note.body = updatedNote.body;
            note.title = updatedNote.title;
            note.modifiedOn = updatedNote.modifiedOn;
        }
    }
    const sortedNotes = sort(notes);
    localStorage.setItem('notes', JSON.stringify(sortedNotes));
    return sortedNotes;
}

export function deleteNote(id) {
    const notes = getNotes(false);
    const newArrray = [];
    for (let index = 0; index < notes.length; index++) {
        const note = notes[index];
        if (note.id !== id) {
            newArrray.push(note);
        }
    }
    const sortedNotes = sort(newArrray);
    localStorage.setItem('notes', JSON.stringify(sortedNotes));
    return sortedNotes;
}