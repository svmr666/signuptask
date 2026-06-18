"use client";
export default function Home() {
  // Идэвхтэй байгаа компонентыг хадгалах state (анхных нь 'first')
  const [activeComponent, setActiveComponent] = useState("first");

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Компонент солих жишээ</h2>
      <hr />
      <br />

      {/* Нөхцөлт дүрслэл (Conditional Rendering) */}
      {activeComponent === "first" && (
        <FirstComponent onNext={() => setActiveComponent("second")} />
      )}

      {activeComponent === "second" && (
        <SecondComponent onBack={() => setActiveComponent("first")} />
      )}
    </div>
  );
}
