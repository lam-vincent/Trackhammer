import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Home } from "@mui/icons-material";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <main className="py-10 px-4">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;