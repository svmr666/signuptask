"use client"; // Next.js дээр useState ашиглахын тулд заавал дээр нь бичнэ

import { useState } from "react";

// 1. Эхний компонент
function FirstComponent({ onNext }) {
  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h3>Энэ бол ЭХНИЙ компонент</h3>
      <p>Үргэлжлүүлэхийн тулд доорх товчлуур дээр дарна уу.</p>
      <button
        onClick={onNext}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Дараагийнх руу шилжих
      </button>
    </div>
  );
}
