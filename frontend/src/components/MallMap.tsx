type Store = {
  id: number;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
};

type MallMapProps = {
  stores: Store[];
  selectedStore: number | null;
  setSelectedStore: (id: number | null) => void;
  setPopupPosition: (position: { x: number; y: number }) => void;
};

function MallMap({
  stores,
  selectedStore,
  setSelectedStore,
  setPopupPosition,
}: MallMapProps) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 600">
      <rect
        x="20"
        y="20"
        width="760"
        height="560"
        rx="20"
        fill="#f8f8f8"
        stroke="#cccccc"
      />

      {stores.map((store) => (
        <g
          key={store.id}
          onClick={() => {
  if (selectedStore === store.id) {
    setSelectedStore(null);
    return;
  }

  setSelectedStore(store.id);

  setPopupPosition({
    x: store.x + store.width + 20,
    y: store.y,
  });
}}
          style={{ cursor: "pointer" }}
        >
          <rect
            x={store.x}
            y={store.y}
            width={store.width}
            height={store.height}
            rx="10"
            fill={selectedStore === store.id ? "#1976d2" : store.color}
          />

          <text
            x={store.x + store.width / 2}
            y={store.y + store.height / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
          >
            {store.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default MallMap;