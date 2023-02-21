import React from "react";
import { NavLink } from "react-router-dom";

const FormTalemaker = () => {

  return (
    <div class="mt-8 max-w-md">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span class="text-white">owner</span>
          <select class="block w-full mt-1">
            <option>Imperium</option>
            <option>Chaos</option>
            <option>Xenos</option>
          </select>
        </label>
        <label class="block">
          <span class="text-white">choose the climate in which you are fighting</span>
          <select class="block w-full mt-1">
            <option>Storm</option>
            <option>Sand Storm</option>
            <option>Rain</option>
          </select>
        </label>
        <label class="block">
          <span class="text-white">battle size</span>
          <select class="block w-full mt-1">
            <option>Incursion : Up to 2 hours | 1000 POINTS LIMIT</option>
            <option>Strike Force : Up to 3 hours | 2000 POINTS LIMIT</option>
          </select>
        </label>
        <label class="block">
          <span class="text-white">choose deployment zone</span>
          <select class="block w-full mt-1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <label class="block">
          <span class="text-white">primary mission</span>
          <select class="block w-full mt-1">
            <option>Cleanse the Land</option>
            <option>Deliverance</option>
            <option>Desperate Raid</option>
          </select>
        </label>
        <label class="block">
          <span class="text-white">tertiary objective</span>
          <select class="block w-full mt-1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <label class="block">
          <span class="text-white">building placement</span>
          <select class="block w-full mt-1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
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

export default FormTalemaker;
