import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Point = {
  lat: number;
  lng: number;
};

type Store = {
  name: string;
  polygon: Point[];
};

function MallGeoMap() {
  const [stores, setStores] = useState<Store[]>([]);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [hoveredStore, setHoveredStore] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/malls/hof/stores")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStores(data);
      });
  }, []);

  return (
    <>
      <MapContainer
        center={[32.441, 34.894]}
        zoom={18}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stores.map((store) => (
          <Polygon
            key={store.name}
            positions={store.polygon.map((p) => [p.lat, p.lng])}
           pathOptions={{
              color: hoveredStore === store.name ? "#ff9800" : "#1976d2",
              fillColor: hoveredStore === store.name ? "#ffb74d" : "#90caf9",
              fillOpacity: hoveredStore === store.name ? 0.7 : 0.4,
              weight: hoveredStore === store.name ? 4 : 2,
             }}
           eventHandlers={{
             click: () => {
               setSelectedStore(store);
             },
             mouseover: () => {
               setHoveredStore(store.name);
             },
             mouseout: () => {
               setHoveredStore(null);
             },
            }}
          />
        ))}
      </MapContainer>

      {selectedStore && (
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "white",
            padding: "12px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
            zIndex: 1000,
          }}
        >
          <h3>{selectedStore.name}</h3>

          <button onClick={() => setSelectedStore(null)}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default MallGeoMap;