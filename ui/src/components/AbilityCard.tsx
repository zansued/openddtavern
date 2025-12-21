import { AbilityScore } from "../types/characterSheet";

const formatModifier = (value: number) =>
  value >= 0 ? `+${value}` : `${value}`;

const AbilityCard = ({ ability }: { ability: AbilityScore }) => {
  return (
    <div className="card ability-card">
      <div className="ability-name">{ability.name}</div>
      <div className="ability-score">{ability.score}</div>
      <div className="ability-mod">{formatModifier(ability.modifier)}</div>
    </div>
  );
};

export default AbilityCard;
