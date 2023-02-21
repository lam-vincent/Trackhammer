const Eternal = () => {

  return (
    <div className="flex-col items-center justify-center px-8 text-white">
      <div className="flex flex-col justify-center h-screen bg-cover bg-center p-8 rounded-3xl space-y-8" style={{ backgroundImage: `url(src/assets/home-page-background.png)` }}>
        <div name="title" className="flex items-center justify-center text-4xl font-bold">
          Welcome to the Eternal War
        </div>
        <div name="container" className="flex items-center justify-center space-x-8">
          <div name="board" className="flex items-center justify-center border-2 rounded-3xl w-2/3 h-96">
            board
          </div>
          <div name="tabs" className="flex items-center justify-center border-2 rounded-3xl w-1/3 h-96">
            tabs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eternal;