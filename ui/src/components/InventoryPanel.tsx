import { CharacterSheet } from "../types/characterSheet";

const InventoryPanel = ({ inventory }: { inventory: CharacterSheet["inventory"] }) => {
  const totalWeight = inventory.items.reduce(
    (total, item) => total + item.weight * item.quantity,
    0
  );

  return (
    <div className="panel">
      <div className="panel-section">
        <h4>Moedas</h4>
        <div className="pill-group">
          {inventory.coins.map((coin) => (
            <span key={coin.label} className="pill">
              {coin.label}: {coin.amount}
            </span>
          ))}
        </div>
      </div>
      <div className="panel-section">
        <h4>Itens</h4>
        <div className="table">
          <div className="table-header">
            <span>Item</span>
            <span>Qtd</span>
            <span>Peso</span>
          </div>
          {inventory.items.map((item) => (
            <div key={item.name} className="table-row">
              <span>{item.name}</span>
              <span>{item.quantity}</span>
              <span>{item.weight}kg</span>
            </div>
          ))}
        </div>
      </div>
      <div className="panel-footer">Peso total: {totalWeight.toFixed(1)}kg</div>
    </div>
  );
};

export default InventoryPanel;
