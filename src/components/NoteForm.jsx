import PropTypes from "prop-types";
import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");
  const [priority, setPriority] = useState("Alto");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      text: noteText,
      priority: priority,
    };
    addNote(newNote);
    setNoteText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una nota"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Alto">Alto</option>
        <option value="Medio">Medio</option>
        <option value="Bajo">Bajo</option>
      </select>
      <button type="submit">Agregar Nota</button>
    </form>
  );
};

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteForm;
