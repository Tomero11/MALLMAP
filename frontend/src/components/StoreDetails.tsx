type Props = {
  storeName: string | null;
};

function StoreDetails({ storeName }: Props) {
  if (!storeName) {
    return (
      <div style={{ padding: "20px" }}>
        בחר חנות כדי לראות פרטים.
      </div>
    );
  }

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderTop: "1px solid #ddd",
      }}
    >
      <h2>🏬 {storeName}</h2>

      <p>📍 קומה 1</p>
      <p>🏷️ Electronics</p>
      <p>🕒 פתוח עד 22:00</p>
    </div>
  );
}

export default StoreDetails;