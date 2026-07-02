import { useEffect, useState } from "react";
import "./StoreDetails.css";

type Store = {
  id: number;
  name: string;
  category: string;
  floor: number;
  phone: string;
  closingHour: string;
  description: string;
  products: string[];
};

type Props = {
  storeId: number | null;
  onClose: () => void;
};

function StoreDetails({ storeId, onClose }: Props) {
  const [store, setStore] = useState<Store | null>(null);

  useEffect(() => {
    if (storeId === null) {
      setStore(null);
      return;
    }

    fetch(`http://127.0.0.1:8000/stores/${storeId}`)
      .then((response) => response.json())
      .then((data) => setStore(data));
  }, [storeId]);

  if (!store) {
  return (
    <div style={{ padding: "20px" }}>
      בחר חנות כדי לראות פרטים.
    </div>
  );
}

return (
  <div className="store-card">
    <button
  className="close-button"
  onClick={onClose}
>
  ✕
</button>
    <h2>🏬 {store.name}</h2>

    <p>📍 <strong>קומה:</strong> {store.floor}</p>

    <p>🏷️ <strong>קטגוריה:</strong> {store.category}</p>

    <p>📞 <strong>טלפון:</strong> {store.phone}</p>

    <p>🕒 <strong>פתוח עד:</strong> {store.closingHour}</p>

    <hr />

    <p>{store.description}</p>

    <h3>🛍️ מוצרים</h3>

    <ul>
      {store.products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  </div>
);
}
export default StoreDetails;