import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div name="container" className="flex flex-col items-center justify-center shadow-2xl shadow-stone-500 rounded-3xl p-4 m-2 w-1/2 bg-white">
        <div name="game" className="flex items-center justify-center space-x-8">
            <div name="name">
                name
            </div>
            <div name="code">
                code: FVD2C
            </div>
            <div name="enter">
                <NavLink to="/maelstrom" className="bg-green-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                    <button className="" type="">
                        Enter the room
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
  );
};

export default Footer;
