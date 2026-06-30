import StoreDetails from "./StoreDetails";
import "./MapPopup.css";

type SelectedStore = {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
} | null;

type Props = {
  selectedStore: SelectedStore;
};

function MapPopup({ selectedStore }: Props) {
  if (selectedStore === null) {
    return null;
  }

  return (
    <div
      className="map-popup"
      style={{
        left: selectedStore.x,
        top: selectedStore.y,
      }}
    >
      <StoreDetails storeId={selectedStore.id} />
    </div>
  );
}

export default MapPopup;