import { CharacterSheet } from "../types/characterSheet";

const DefensesPanel = ({ sheet }: { sheet: CharacterSheet }) => {
  return (
    <div className="card defenses-card">
      <h3 className="section-title">Defesas</h3>
      <div className="defenses-grid">
        <div className="defense-item">
          <span className="defense-label">PV</span>
          <span className="defense-value">
            {sheet.combat.hitPoints.current} / {sheet.combat.hitPoints.max}
          </span>
        </div>
        <div className="defense-item">
          <span className="defense-label">CA</span>
          <span className="defense-value">{sheet.combat.armorClass}</span>
        </div>
        <div className="defense-item">
          <span className="defense-label">Iniciativa</span>
          <span className="defense-value">
            {sheet.combat.initiative >= 0
              ? `+${sheet.combat.initiative}`
              : sheet.combat.initiative}
          </span>
        </div>
        <div className="defense-item">
          <span className="defense-label">Deslocamento</span>
          <span className="defense-value">{sheet.combat.speed}</span>
        </div>
      </div>
      <div className="defenses-list">
        {sheet.defenses.map((defense) => (
          <div key={defense.label} className="defense-row">
            <span>{defense.label}</span>
            <span>{defense.value}</span>
            <span className="defense-detail">{defense.detail}</span>
          </div>
        ))}
      </div>
      <div className="panel-section">
        <h4>Condições</h4>
        <div className="pill-group">
          {sheet.combat.conditions.map((condition) => (
            <span key={condition} className="pill">
              {condition}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DefensesPanel;
