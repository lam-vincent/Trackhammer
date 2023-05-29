import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between px-4 py-4">
        <div className="w-1/4 flex items-center">
          <NavLink to="/">
            <div className="bg-neutral-700 p-2">
              <img src="../assets/logo.png" alt="logo" className="h-8" />
            </div>
          </NavLink>
          <NavLink to="/" className="flex items-center">
            <h1 className="text-2xl pl-4">TrackHammer</h1>
          </NavLink>
        </div>

        <div className="flex items-center justify-center text-sm space-x-4">
          <HashLink to="/#eternal">Eternal War</HashLink>
          <HashLink to="/#maelstrom">Maelstrom</HashLink>
          <HashLink to="/#talemaker">The Talemaker</HashLink>
        </div>

        <div className="flex items-center justify-end w-1/4 space-x-4">
          <NavLink
            to="/subscribe"
            className="bg-blue-600 px-4 py-1 rounded-full text-white"
          >
            <span className="">Subscribe</span>
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/profile">
                <button className="">Profile</button>
              </NavLink>
              <NavLink to="/">
                <button className="" onClick={() => setIsLoggedIn(false)}>
                  Sign Out
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signup">
                <button className="">New Account</button>
              </NavLink>
              <NavLink to="/login">
                <button className="" onClick={() => setIsLoggedIn(true)}>
                  Sign In
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
