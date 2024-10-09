import { useState } from "react";

import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteFilter from "./components/NoteFilter";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("All");

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filterNotes = () => {
    if (filter === "All") {
      return notes;
    }
    return notes.filter((note) => note.priority === filter);
  };

  return (
    <div className="App">
      <h1>Aplicación de Notas</h1>
      <NoteForm addNote={addNote} />
      <NoteFilter setFilter={setFilter} />
      <NoteList notes={filterNotes()} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
