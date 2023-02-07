import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-5xl font-bold text-white mb-10">Welcome to TrackHammer</h1>
      <p className="text-lg text-white mb-10 px-32">TrackHammer is an online application for wargamers that helps them keep track of their scores during tabletop battles. The app has three different modes to choose from: you can join the ongoing war in "Eternal War," or start your own custom crusade with friends in "Maëlstrom" and "The TaleMaker." The app is designed to make it easier for wargamers to track their progress and stay engaged in the games they love.</p>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Explore
      </button>
    </div>
  );
};

export default Home;
