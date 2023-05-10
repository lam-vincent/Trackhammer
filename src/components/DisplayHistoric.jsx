import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

function DisplayHistory({ roomCode }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    onValue(ref(db, roomCode), (snapshot) => {
      const data = snapshot.val();
      setResults(data?.historic || []);
    });
  }, [roomCode]);

  return (
    <div className="mt-16">
      <table className="border-separate border-spacing-4">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Hexagon 1 (row - col)</th>
            <th>Hexagon 2 (row - col)</th>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Score 1</th>
            <th>Score 2</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.timestamp}</td>
              <td>
                {result.rowIndex1} - {result.colIndex1}
              </td>
              <td>
                {result.rowIndex2} - {result.colIndex2}
              </td>
              <td>
                {result.name1} - {result.faction1}
              </td>
              <td>
                {result.name2} - {result.faction2}
              </td>
              <td>{result.score1}</td>
              <td>{result.score2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayHistory;
