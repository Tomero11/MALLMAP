import "./App.css";
import { useEffect, useState } from "react";
import MallMap from "./components/MallMap";
import MapPopup from "./components/MapPopup";
type Store = {
  id: number;
  name: string;
  category: string;
  floor: number;
  description: string;
  phone: string;
  closingHour: string;
  products: string[];
   x: number;
   y: number;
   width: number;
   height: number;
   color: string;
};
type SelectedStore = {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
} | null;

function App() {
const [stores, setStores] = useState<Store[]>([]);
const [selectedStore, setSelectedStore] =
  useState<SelectedStore>(null);
const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/stores")
      .then((response) => response.json())
      .then((data) => setStores(data));
  }, []);
const filteredStores = stores.filter((store) =>
  store.name.toLowerCase().includes(searchText.toLowerCase())
);

return (
    <div className="app">
      <div className="header">🛍️ MallMap</div>

      <div className="content">
        <div className="sidebar">
         <input
         
  className="search"
  placeholder="🔍 חפש חנות..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
/>
{stores
  .filter((store) =>
    store.name.toLowerCase().includes(searchText.toLowerCase())
  )
  .map((store) => (
  <div
    className="store"
    key={store.id}
   onClick={() =>
  setSelectedStore({
    id: store.id,
    x: store.x,
    y: store.y,
    width: store.width,
    height: store.height,
  })
}
    style={{ cursor: "pointer" }}
  >
    🏬 {store.name}
  </div>
))}

</div>
        <div className="map">
          <MallMap
           stores={filteredStores}
           selectedStore={selectedStore}
           setSelectedStore={setSelectedStore}
/>
<MapPopup selectedStore={selectedStore} />

        </div>
      </div>
    </div>

 );
  
}

export default App;