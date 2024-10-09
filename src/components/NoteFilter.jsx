import PropTypes from "prop-types";

const NoteFilter = ({ setFilter }) => {
  return (
    <div className="NoteFilter">
      <label>Filtrar por prioridad:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">Todos</option>
        <option value="Alto">Alto</option>
        <option value="Medio">Medio</option>
        <option value="Bajo">Bajo</option>
      </select>
    </div>
  );
};

NoteFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default NoteFilter;
