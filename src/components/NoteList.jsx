import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="NoteList">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
        ))
      ) : (
        <p>No hay notas disponibles.</p>
      )}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteList;
