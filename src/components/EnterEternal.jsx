import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const EnterEternal = () => {
  return (
    <div className="mt-8 max-w-md">
      <div className="grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-white">Which faction are you?</span>
          <select className="block w-full mt-1">
            <option>Necron (gray)</option>
            <option>Chaos (red)</option>
            <option>Ork (green)</option>
            <option>Tau (light blue)</option>
            <option>Imperium (dark blue)</option>
            <option>Tyranid (purple)</option>
            <option>Eldar (pink)</option>
          </select>
        </label>
        <NavLink
          to="/eternal"
          className="flex items-center justify-center bg-green-600 hover:bg-blue-500 text-white font-semibold rounded"
        >
          <button className="py-2 px-4" type="submit">
            Enter the Eternal War
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default EnterEternal;
