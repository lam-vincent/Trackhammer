import React, { useEffect, useState } from "react";
import { ref, set, onValue } from "firebase/database";
import { db } from "../firebase";

const CreateHistory = () => {
  const [roomCode, setRoomCode] = useState("Qdly9");
  const [rowIndex1, setRowIndex1] = useState("1");
  const [rowIndex2, setRowIndex2] = useState("1");
  const [colIndex1, setColIndex1] = useState("1");
  const [colIndex2, setColIndex2] = useState("1");
  const [name1, setName1] = useState("unnamed");
  const [name2, setName2] = useState("unnamed");
  const [faction1, setFaction1] = useState("Necron (gray)");
  const [faction2, setFaction2] = useState("Necron (gray)");
  const [score1, setScore1] = useState("0");
  const [score2, setScore2] = useState("0");
  const [results, setResults] = useState([]);

  useEffect(() => {
    onValue(ref(db, roomCode), (snapshot) => {
      const data = snapshot.val();
      setResults(data?.historic || []);
    });
  }, [roomCode]);

  async function addResults() {
    const timestamp = new Date().toLocaleString();
    const index = results.length;
    set(ref(db, `${roomCode}/historic/${index}`), {
      timestamp: timestamp,
      rowIndex1: rowIndex1,
      rowIndex2: rowIndex2,
      colIndex1: colIndex1,
      colIndex2: colIndex2,
      name1: name1,
      name2: name2,
      faction1: faction1,
      faction2: faction2,
      score1: score1,
      score2: score2,
    });
  }

  return (
    <div className="mt-8 max-w-md">
      <div className="grid grid-cols-2 gap-6">
        <label className="block">
          <span className="text-white">row index</span>
          <select
            className="block w-full mt-1"
            value={rowIndex1}
            onChange={(event) => setRowIndex1(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <label className="block">
          <span className="text-white">row index</span>
          <select
            className="block w-full mt-1"
            value={rowIndex2}
            onChange={(event) => setRowIndex2(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <label className="block">
          <span className="text-white">col index</span>
          <select
            className="block w-full mt-1"
            value={colIndex1}
            onChange={(event) => setColIndex1(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <label className="block">
          <span className="text-white">col index</span>
          <select
            className="block w-full mt-1"
            value={colIndex2}
            onChange={(event) => setColIndex2(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <label className="block">
          <span className="text-white">faction</span>
          <select
            className="block w-full mt-1"
            value={faction1}
            onChange={(event) => setFaction1(event.target.value)}
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
          <span className="text-white">faction</span>
          <select
            className="block w-full mt-1"
            value={faction2}
            onChange={(event) => setFaction2(event.target.value)}
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
            value={name1}
            onChange={(event) => setName1(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-white">name</span>
          <input
            type="text"
            className="mt-1 block w-full"
            value={name2}
            onChange={(event) => setName2(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-white">score</span>
          <input
            type="number"
            className="mt-1 block w-full"
            value={score1}
            onChange={(event) => setScore1(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-white">score</span>
          <input
            type="number"
            className="mt-1 block w-full"
            value={score2}
            onChange={(event) => setScore2(event.target.value)}
          />
        </label>

        <label className="block col-span-2">
          <span className="text-white">code</span>
          <input
            type="text"
            className="mt-1 block w-full"
            value={roomCode}
            onChange={(event) => setRoomCode(event.target.value)}
          />
        </label>

        <button
          onClick={addResults}
          className="col-span-2 flex items-center justify-center bg-green-600 hover:bg-blue-500 text-white font-semibold rounded py-2 px-4"
          type="submit"
        >
          Add Game Results
        </button>
      </div>
    </div>
  );
};

export default CreateHistory;
