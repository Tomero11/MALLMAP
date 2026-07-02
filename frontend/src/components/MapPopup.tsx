import StoreDetails from "./StoreDetails";
import "./MapPopup.css";
import { motion } from "framer-motion";

type SelectedStore = {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
} | null;

type Props = {
  selectedStore: SelectedStore;
  setSelectedStore: (store: SelectedStore) => void;
};

function MapPopup({
  selectedStore,
  setSelectedStore,
}: Props) {

  if (selectedStore === null) {
    return null;
  }
return (
  <motion.div
    key={selectedStore.id}
    className="map-popup"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.2 }}
    style={{
      left: selectedStore.x,
      top: selectedStore.y,
    }}
  >

    <StoreDetails
  storeId={selectedStore.id}
  onClose={() => setSelectedStore(null)}
/>
    </motion.div>
  );
}

export default MapPopup;