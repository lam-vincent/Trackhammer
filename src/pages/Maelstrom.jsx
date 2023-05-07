import Grid from "/src/components/Grid";

const colorsFactions = [
  "",
  "bg-gray-600",
  "bg-red-600",
  "bg-green-600",
  "bg-blue-400",
  "bg-blue-800",
  "bg-purple-600",
  "bg-pink-400",
];

const Maelstrom = () => {
  return (
    <div className="flex-col items-center justify-center px-8 text-white">
      <div
        className="flex flex-col justify-center h-screen bg-cover bg-center p-8 rounded-3xl space-y-8"
        style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}
      >
        <div
          name="title"
          className="flex items-center justify-center text-4xl font-bold"
        >
          currently in a private room
        </div>
        <div name="code" className="flex items-center justify-center text-xl">
          code: 9HFMN
        </div>
        <div
          name="container"
          className="flex items-center justify-center space-x-8"
        >
          <div
            name="board"
            className="flex items-center justify-center border-2 rounded-3xl w-96 h-96"
          >
            <Grid colors={colorsFactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maelstrom;
