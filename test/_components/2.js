function SecondComponent({ onBack }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h3>Энэ бол ДАРААГИЙН компонент 🎉</h3>
      <p>Амжилттай солигдлоо!</p>
      <button
        onClick={onBack}
        style={{
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Буцах
      </button>
    </div>
  );
}
