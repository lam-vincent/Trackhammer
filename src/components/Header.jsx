import React, { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-transparent">
      <div className="flex items-center justify-between px-4 py-3">
        <img src="src\assets\logo.png" alt="logo" className="h-8" />
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
