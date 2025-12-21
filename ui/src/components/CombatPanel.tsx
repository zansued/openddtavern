import { CharacterSheet } from "../types/characterSheet";

const CombatPanel = ({ combat }: { combat: CharacterSheet["combat"] }) => {
  return (
    <div className="panel">
      <div className="panel-grid">
        <div className="panel-card">
          <div className="panel-label">PV</div>
          <div className="panel-value">
            {combat.hitPoints.current} / {combat.hitPoints.max}
          </div>
          <div className="panel-sub">Temporários: {combat.hitPoints.temp}</div>
        </div>
        <div className="panel-card">
          <div className="panel-label">Classe de Armadura</div>
          <div className="panel-value">{combat.armorClass}</div>
        </div>
        <div className="panel-card">
          <div className="panel-label">Iniciativa</div>
          <div className="panel-value">{combat.initiative >= 0 ? `+${combat.initiative}` : combat.initiative}</div>
        </div>
        <div className="panel-card">
          <div className="panel-label">Deslocamento</div>
          <div className="panel-value">{combat.speed}</div>
        </div>
      </div>
      <div className="panel-section">
        <h4>Condições</h4>
        <div className="pill-group">
          {combat.conditions.map((condition) => (
            <span key={condition} className="pill">
              {condition}
            </span>
          ))}
        </div>
      </div>
      <div className="panel-section">
        <h4>Ataques</h4>
        <div className="table">
          <div className="table-header">
            <span>Nome</span>
            <span>Bônus</span>
            <span>Dano</span>
            <span>Notas</span>
          </div>
          {combat.attacks.map((attack) => (
            <div key={attack.name} className="table-row">
              <span>{attack.name}</span>
              <span>{attack.bonus}</span>
              <span>{attack.damage}</span>
              <span>{attack.notes ?? "-"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CombatPanel;
