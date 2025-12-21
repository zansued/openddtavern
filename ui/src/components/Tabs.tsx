type TabItem = {
  id: string;
  label: string;
};

type TabsProps = {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
};

const Tabs = ({ items, activeId, onChange }: TabsProps) => {
  return (
    <div className="tabs">
      {items.map((item) => (
        <button
          key={item.id}
          className={`tab-trigger ${activeId === item.id ? "active" : ""}`}
          onClick={() => onChange(item.id)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
