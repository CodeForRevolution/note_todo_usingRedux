import { useState } from "react";
import "./NoteForm.css";
import { useDispatch } from "react-redux";
import NoteList from "../NoteList/NoteList";
import { addNote,deleteNote } from "../../redux/actions/noteActions";

function NoteForm({ onCreateNote }) {
  const [NoteText, setNoteText] = useState("");
  const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(NoteText));
    // onCreateNote(NoteText);
    setNoteText("");
  };

  return (
  <>
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={NoteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">Create Note</button>
      </form>
      </div>
      <NoteList/>
  </>
  );
}

export default NoteForm;
