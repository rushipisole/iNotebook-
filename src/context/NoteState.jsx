// import { useState } from 'react'
import { useState } from 'react'
import NoteContext from './noteContext'

export const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "61322f19553781a8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8c4a8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a83ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        },
        {
            "_id": "61322f195537861a8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        },
        {
            "_id": "61322f195537891a8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        },
        {
            "_id": "61322f1769553781a8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        },
        {
            "_id": "61322f1sd9553781a8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        },
        {
            "_id": "61322f19gf553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)

    const addNote = (title, description, tag) => {

        console.log("Adding a new node")
        const note = {
            "_id": "61322f19gf553781a8ca8d0e0809",
            "user": "6131dc5e3e4037cd4734a066",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }
    const deleteNote = (id) => {
        console.log("Deleting the node with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }
    const editNode = (id, title, description, tag) => {
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNode }}>
            {props.children}
        </NoteContext.Provider>
    )
}