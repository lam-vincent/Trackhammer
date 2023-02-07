import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('./src/assets/home-page-background.png')" }}>
      <div className="bg-gray-200 min-h-screen">
        <Header />
        <main className="py-10 px-4">
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
