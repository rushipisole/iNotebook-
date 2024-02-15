import { useContext, useState } from 'react';
import noteContext from '../context/noteContext';


const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "default" })

    const handleClicked = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: [e.target.value] })
    }
    return (
        <div>
            <h2>Add your Notes</h2>
            <div className="container my-3">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">description</label>
                        <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" onClick={handleClicked} className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddNote
