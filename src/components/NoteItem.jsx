import PropTypes from "prop-types";

const NoteItem = ({ note, deleteNote }) => {
  return (
    <div className="NoteItem">
      <p>
        {note.text} - <strong>{note.priority}</strong>
      </p>
      <button onClick={() => deleteNote(note.id)}>Eliminar</button>
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteItem;
