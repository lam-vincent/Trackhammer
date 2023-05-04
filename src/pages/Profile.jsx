import ProfileCard from "/src/components/ProfileCard.jsx";

const Profile = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        name="wrapper"
        className="flex flex-col items-center justify-center shadow-2xl shadow-stone-500 rounded-3xl p-8 w-1/2 bg-white"
      >
        <div name="title" className="text-4xl font-bold">
          Welcome to your profile
        </div>
        {/* <ProfileCard /> */}
      </div>
    </div>
  );
};

export default Profile;
