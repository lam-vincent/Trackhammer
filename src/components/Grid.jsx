import React from "react";
import Hexagon from "./Hexagon";

function Grid(colors) {
  console.log("In the grid component", colors.colors);
  return (
    <div className="grid grid-cols-6 gap-1 bg-red-400">
      {/* row 1 */}
      <div className="w-16 h-12 bg-green-400 col-start-2 col-end-4 ...">
        <Hexagon colorsProps={colors.colors} />
      </div>
      <div className="w-16 h-12 bg-green-400 col-start-4 col-span-2 ...">
        <Hexagon colorsProps={colors.colors} />
      </div>
      {/* row 2 */}
      <div className="w-16 h-12 bg-green-400 col-start-1 col-end-3 ...">
        <Hexagon colorsProps={colors.colors} />
      </div>
      <div className="w-16 h-12 bg-green-400 col-start-3 col-end-5 ...">
        <Hexagon colorsProps={colors.colors} />
      </div>
      <div className="w-16 h-12 bg-green-400 col-start-5 col-span-2 ...">
        <Hexagon colorsProps={colors.colors} />
      </div>
      {/* row 3 */}
      <div className="w-16 h-12 bg-green-400 col-start-2 col-end-4 ...">
        <Hexagon colorsProps={colors.colors} />
      </div>
      <div className="w-16 h-12 bg-green-400 col-start-4 col-span-2 ...">
        <Hexagon colorsProps={colors.colors} />
      </div>
    </div>
  );
}

export default Grid;
