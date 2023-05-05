import Grid from "/src/components/Grid";

const colorsGrayBlue = ["bg-gray-600", "bg-blue-600"];

const Eternal = () => {
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
          Welcome to the Eternal War
        </div>
        <div
          name="container"
          className="flex items-center justify-center space-x-8"
        >
          <div
            name="board"
            className="flex items-center justify-center border-2 rounded-3xl w-96 h-96"
          >
            <Grid colors={colorsGrayBlue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eternal;
