import { CharacterNotes } from "../types/characterSheet";

const NotesPanel = ({ notes }: { notes: CharacterNotes }) => {
  return (
    <div className="panel">
      <div className="panel-section">
        <h4>Traços</h4>
        <ul className="list">
          {notes.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </div>
      <div className="panel-section">
        <h4>Laços</h4>
        <ul className="list">
          {notes.bonds.map((bond) => (
            <li key={bond}>{bond}</li>
          ))}
        </ul>
      </div>
      <div className="panel-section">
        <h4>Defeitos</h4>
        <ul className="list">
          {notes.flaws.map((flaw) => (
            <li key={flaw}>{flaw}</li>
          ))}
        </ul>
      </div>
      <div className="panel-section">
        <h4>Notas Livres</h4>
        <p className="freeform">{notes.freeform}</p>
      </div>
    </div>
  );
};

export default NotesPanel;
