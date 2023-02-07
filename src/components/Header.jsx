import React, { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-transparent">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
        <a href="http://localhost:5173/" className="bg-neutral-700 p-2">
          <img src="src\assets\logo.png" alt="logo" className="h-8" />
        </a>
        <h1 className="text-2xl pl-4">TrackHammer</h1>
        </div>
        <div className="flex items-center">
          {isLoggedIn ? (
            <>
              <button className="btn btn-blue-500">New Account</button>
              <button className="btn btn-blue-500 ml-4" onClick={() => setIsLoggedIn(false)}>
                Sign In
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-blue-500">Profil</button>
              <button className="btn btn-blue-500 ml-4" onClick={() => setIsLoggedIn(true)}>
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
