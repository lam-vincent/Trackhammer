import React, { useState } from "react";

const BuildingLayout = ({ layout }) => {
  return (
    <div className="flex border-2 p-4 m-2 rounded-xl">
      <div className="font-bold mr-2">Building Layout:</div>
      {layout}
    </div>
  );
};

const DeploymentZone = ({ zone }) => {
  return (
    <div className="flex border-2 p-4 m-2 rounded-xl">
      <div className="font-bold mr-2">Deployment Zone:</div> {zone}
    </div>
  );
};

const BattleSize = ({ size }) => {
  return (
    <div className="flex border-2 p-4 m-2 rounded-xl">
      <div className="font-bold mr-2">Battle Size:</div> {size}
    </div>
  );
};

const MissionRule = ({ rule }) => {
  return (
    <div className="flex border-2 p-4 m-2 rounded-xl">
      <div className="font-bold mr-2">Mission Rule:</div> {rule}
    </div>
  );
};

const PrimaryMission = ({ mission }) => {
  return (
    <div className="flex border-2 p-4 m-2 rounded-xl">
      <div className="font-bold mr-2">Primary Mission:</div> {mission}
    </div>
  );
};

const SettingGenerator = () => {
  const [settings, setSettings] = useState({
    buildingLayout: Math.floor(Math.random() * 8) + 1,
    deploymentZone: [
      "Crucible of battle",
      "Search And Destroy",
      "Dawn of War",
      "Spearhead Assault",
      "Hammer and Nail",
      "Sweeping Engagement",
    ][Math.floor(Math.random() * 6)],
    battleSize: [1000, 2000][Math.floor(Math.random() * 2)],
    missionRule: [
      "Secret Intel",
      "Delayed Reserve",
      "Supply Lines",
      "Hidden Supplies",
      "Sweep and Clear",
      "Scramnler Fields",
      "Warp lightning storm",
      "Vox Static",
    ][Math.floor(Math.random() * 8)],
    primaryMission: [
      "Burn and Raze",
      "Priority Target",
      "Take and Hold",
      "Claim the battlefield",
      "Vital Ground",
      "Direct Assault",
    ][Math.floor(Math.random() * 6)],
  });

  const generateSettings = () => {
    setSettings({
      buildingLayout: Math.floor(Math.random() * 8) + 1,
      deploymentZone: [
        "Crucible of battle",
        "Search And Destroy",
        "Dawn of War",
        "Spearhead Assault",
        "Hammer and Nail",
        "Sweeping Engagement",
      ][Math.floor(Math.random() * 6)],
      battleSize: [1000, 2000][Math.floor(Math.random() * 2)],
      missionRule: [
        "Secret Intel",
        "Delayed Reserve",
        "Supply Lines",
        "Hidden Supplies",
        "Sweep and Clear",
        "Scramnler Fields",
        "Warp lightning storm",
        "Vox Static",
      ][Math.floor(Math.random() * 8)],
      primaryMission: [
        "Burn and Raze",
        "Priority Target",
        "Take and Hold",
        "Claim the battlefield",
        "Vital Ground",
        "Direct Assault",
      ][Math.floor(Math.random() * 6)],
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          onClick={generateSettings}
          className="w-full bg-green-600 hover:bg-blue-500 text-white font-semibold rounded p-2 m-2"
        >
          Generate Settings
        </button>
      </div>
      <div>
        <BuildingLayout layout={settings.buildingLayout} />
        <DeploymentZone zone={settings.deploymentZone} />
        <BattleSize size={settings.battleSize} />
        <MissionRule rule={settings.missionRule} />
        <PrimaryMission mission={settings.primaryMission} />
      </div>
    </div>
  );
};

export default SettingGenerator;
