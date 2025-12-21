type Feature = {
  name: string;
  description: string;
};

type FeaturesPanelProps = {
  features: Feature[];
};

export default function FeaturesPanel({ features }: FeaturesPanelProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
      <h3 className="text-sm font-semibold text-white">Características</h3>
      <ul className="mt-3 space-y-3 text-sm text-tavern-muted">
        {features.map((feature) => (
          <li key={feature.name}>
            <p className="text-white">{feature.name}</p>
            <p className="text-xs text-tavern-muted">{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
