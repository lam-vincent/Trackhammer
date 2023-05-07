import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Eternal from "./pages/Eternal.jsx";
import Maelstrom from "./pages/Maelstrom.jsx";
import Talemaker from "./pages/Talemaker.jsx";
import Subscribe from "./pages/Subscribe.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Forgot from "./pages/Forgot.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/eternal" element={<Eternal />} />
          <Route path="/maelstrom/:code" element={<Maelstrom />} />
          <Route path="/talemaker" element={<Talemaker />} />

          <Route path="/subscribe" element={<Subscribe />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
