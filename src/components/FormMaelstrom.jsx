import React from "react";
import { NavLink } from "react-router-dom";

const FormMaelstrom = () => {

  return (
    <div class="mt-8 max-w-md">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span class="text-white">Which faction are you?</span>
          <select class="block w-full mt-1">
            <option>Imperium</option>
            <option>Chaos</option>
            <option>Xenos</option>
          </select>
        </label>
        <label class="block">
          <span class="text-white">Room Code</span>
          <input type="number" class="mt-1 block w-full" placeholder="" />
        </label>
        <NavLink to="/maelstrom" className="flex items-center justify-center bg-green-600 hover:bg-blue-500 text-white font-semibold rounded">
          <button className="py-2 px-4" type="submit">
            Enter a private room
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default FormMaelstrom;
