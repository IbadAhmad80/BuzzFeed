import React from "react";

export default function Categories({ category, color }) {
  return (
    <div>
      <div
        style={{
          marginTop: "2vw",
          backgroundColor: "white",
          padding: "0.6vw",
          fontSize: "1.3vw",
          backgroundColor: color,
          borderRadius: "3%",
          border: "0.1px solid grey",
          textAlign: "center",
        }}
      >
        {category}
      </div>
    </div>
  );
}
