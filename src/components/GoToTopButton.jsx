import React, { useState, useEffect } from 'react';

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`fixed bottom-0 right-0 m-4 ${showButton ? "" : "hidden"}`}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        onClick={handleClick}
      >
        Go to top
      </button>
    </div>
  );
};

export default GoToTopButton;
