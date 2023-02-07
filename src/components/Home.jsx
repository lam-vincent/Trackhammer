import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to TrackHammer</h1>
      <p className="text-lg mt-4">Start tracking your Warhammer battles now!</p>
      <textarea
        className="w-64 h-64 mt-4 border border-gray-500"
        placeholder="Enter code to access private room"
      />
    </div>
  );
};

export default Home;
