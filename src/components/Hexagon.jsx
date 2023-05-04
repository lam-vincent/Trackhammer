import React, { useState } from "react";
import "../index.css";

function Hexagon(index) {
  const colors = ["bg-blue-600", "bg-gray-600"];

  const [colorIndex, setColorIndex] = useState(
    parseInt(localStorage.getItem(index.index)) || 0
  );

  const handleChange = () => {
    console.log("handleChange function has been called ", colorIndex);
    setColorIndex((prev) => (prev + 1 === colors.length ? 0 : prev + 1));
    localStorage.setItem(
      index.index,
      JSON.stringify(colorIndex + 1 === colors.length ? 0 : colorIndex + 1)
    );
  };

  const style = {
    backgroundColor: colors[colorIndex],
  };
  return (
    <div
      onClick={handleChange}
      className={`w-16 h-16 ${colors[colorIndex]}`}
      style={{
        clipPath:
          "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
      }}
    ></div>
  );
}

export default Hexagon;
