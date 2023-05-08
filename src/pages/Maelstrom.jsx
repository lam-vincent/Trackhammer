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
  console.log(code);

  onValue(ref(db, code), (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });

  // 3hrJN
  set;

  return (
    <div>
      <div name="wrapper">
        <div name="code">{code}</div>
        <div name="connected-users"></div>
      </div>
      <div name="board">
        <Grid roomCode={code} colors={colors} />
      </div>
    </div>
  );
};

export default Maelstrom;
