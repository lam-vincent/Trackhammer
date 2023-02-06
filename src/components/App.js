import Header from "./Header";
import logo from "../assets/Warhammerlogo.png";
import Footer from "./Footer";
import Board from "./Board";
import "../styles/Layout.css";

function App() {
  return (
    <div>
      <Header>
        <img src={logo} alt="Warhammer Game Tracker" className="logo" />
        <h1 className="title">Warhammer Game Tracker</h1>
      </Header>
      <div className="layout-inner">
        <Board />
      </div>
      <Footer />
    </div>
  );
}

export default App;
