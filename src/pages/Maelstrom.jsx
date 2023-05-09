import React, { useEffect, useState } from "react";
import Grid from "/src/components/Grid";
import { ref, onValue, set } from "firebase/database";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

const colors = [
  "",
  "bg-gray-600",
  "bg-red-600",
  "bg-green-600",
  "bg-blue-400",
  "bg-blue-800",
  "bg-purple-600",
  "bg-pink-400",
];

const Maelstrom = () => {
  const { code } = useParams();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    onValue(ref(db, code), (snapshop) => {
      const data = snapshop.val();
      setPlayers(data.connected_users);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div>{code}</div>
        <ul>
          {players.map((player, index) => (
            <li key={index} className="inline-block px-2 py-1 m-1 rounded-md">
              {player.name} - {player.faction}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Grid roomCode={code} colors={colors} />
      </div>
    </div>
  );
};

export default Maelstrom;
