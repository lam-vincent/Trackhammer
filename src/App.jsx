import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Eternal from "./pages/Eternal.jsx";
import Maelstrom from "./pages/Maelstrom.jsx";
import Talemaker from "./pages/Talemaker.jsx";


function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/eternal" element={<Eternal />} />
            <Route path="/maelstrom" element={<Maelstrom />} />
            <Route path="/talemaker" element={<Talemaker />} />

            {/* <Route path="/signup" element={<About />} />
            <Route path="/login" element={<Products />} />
            <Route path="/forgot" element={<About />} />

            <Route path="/subscribe" element={<Products />} />
            <Route path="/profile/name:id" element={<About />} /> */}
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
