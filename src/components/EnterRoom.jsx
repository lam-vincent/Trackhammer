import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ref, set, onValue } from "firebase/database";
import { db } from "../firebase";

const EnterRoom = () => {
  const [roomCode, setRoomCode] = useState("Qdly9"); //not clean enough
  const [name, setName] = useState("unnamed");
  const [faction, setFaction] = useState("Necron (gray)");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    onValue(ref(db, roomCode), (snapshot) => {
      const data = snapshot.val();
      setPlayers(data?.connected_users || []);
    });
  }, [roomCode]);

  async function enterRoom() {
    const index = players.length;
    set(ref(db, `${roomCode}/connected_users/${index}`), {
      name: name,
      faction: faction,
    });
  }

  return (
    <div className="mt-8 max-w-md">
      <div className="grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-white">Which faction are you?</span>
          <select
            className="block w-full mt-1"
            value={faction}
            onChange={(event) => setFaction(event.target.value)}
          >
            <option value="Necron (gray)">Necron (gray)</option>
            <option value="Chaos (red)">Chaos (red)</option>
            <option value="Ork (green)">Ork (green)</option>
            <option value="Tau (light blue)">Tau (light blue)</option>
            <option value="Imperium (dark blue)">Imperium (dark blue)</option>
            <option value="Tyranid (purple)">Tyranid (purple)</option>
            <option value="Eldar (pink)">Eldar (pink)</option>
          </select>
        </label>
        <label className="block">
          <span className="text-white">name</span>
          <input
            type="text"
            className="mt-1 block w-full"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-white">Room Code</span>
          <input
            type="text"
            className="mt-1 block w-full"
            value={roomCode}
            onChange={(event) => setRoomCode(event.target.value)}
          />
        </label>
        <NavLink
          to={`/maelstrom/${roomCode}`}
          className="flex items-center justify-center bg-green-600 hover:bg-blue-500 text-white font-semibold rounded"
        >
          <button onClick={enterRoom} className="py-2 px-4" type="submit">
            Enter the room
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default EnterRoom;
