import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <main className="p-8">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
