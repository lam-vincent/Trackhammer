import React, { useState } from "react";
import "../index.css";

function Hexagon(colorsProps) {
  const colors = colorsProps;
  console.log(
    "In the hexagon component",
    colorsProps.colorsProps,
    colors.colorsProps
  );

  const [colorIndex, setColorIndex] = useState(0);

  const handleChange = () => {
    setColorIndex((prev) =>
      prev + 1 === colors.colorsProps.length ? 0 : prev + 1
    );
    console.log("handleChange function has been called ", colorIndex);
  };

  const style = {
    backgroundColor: colors[colorIndex],
    clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
  };
  return (
    <div
      onClick={handleChange}
      className={`w-16 h-16 ${colors.colorsProps[colorIndex]}`}
      style={style}
    ></div>
  );
}

export default Hexagon;
