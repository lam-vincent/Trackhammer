import React, { useEffect, useState } from "react";
import Grid from "/src/components/Grid";
import { ref, onValue, set } from "firebase/database";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import CreateHistory from "/src/components/CreateHistory";
import DisplayHistoric from "/src/components/DisplayHistoric";

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
  // const [showDeleteButton, setShowDeleteButton] = useState(false); //new line

  useEffect(() => {
    onValue(ref(db, code), (snapshop) => {
      const data = snapshop.val();
      console.log(data);
      setPlayers(data.connected_users);
    });
  }, []);

  // index to delete the right one
  // put code in new component ?

  //new lines
  // const handleDeleteUsers = () => {
  //   set(ref(db, `${code}/connected_users`), []);
  // };

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between mx-32"
        // onMouseEnter={() => setShowDeleteButton(true)} //new line
        // onMouseLeave={() => setShowDeleteButton(false)} //new line
      >
        <div>
          <div className="flex justify-center items-center border-2 rounded-lg p-4 ">
            <span className="font-bold mr-1">Room Code:</span>
            {code}
          </div>
        </div>
        <ul className="flex flex-col justify-center items-center border-2 rounded-lg p-4">
          {players.map((player, index) => (
            <li key={index} className="inline-block px-2 py-1 m-1 rounded-md">
              {player.name} - {player.faction}
            </li>
          ))}
        </ul>
        {/* {showDeleteButton && ( //new lines
          <button onClick={handleDeleteUsers}>Delete Users</button>
        )} */}
      </div>
      <div>
        <Grid roomCode={code} colors={colors} />
      </div>

      <div className="h-auto w-auto flex flex-col items-center justify-center mt-8 rounded-3xl bg-black m-16 p-16">
        <h1 className="text-5xl font-bold text-white">Create Historic</h1>
        <CreateHistory />
      </div>

      <div className="h-auto w-auto flex flex-col items-center justify-center mt-8 rounded-3xl border-2 m-16 p-16">
        <h1 className="text-5xl font-bold">Display Historic</h1>
        <DisplayHistoric roomCode={code} />
      </div>
    </div>
  );
};

export default Maelstrom;
