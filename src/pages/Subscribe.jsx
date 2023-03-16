import { NavLink } from "react-router-dom";

const Subscribe = () => {

  return (
    <subscribe className="">
        <div className="h-screen">
            <div className="flex flex-col justify-center items-center h-1/5 space-y-4">
                <h1 className="font-bold text-4xl">
                    Subscription Plans
                </h1>
                <h3 className="flex flex-col justify-center items-center text-xl">
                    <span>
                        Pick Your Perfect Plan
                    </span>
                    <span>
                        &
                    </span>
                    <span>
                        Become Part of The TrackHammer Community
                    </span>
                </h3>
            </div>
            <div name="container" className="flex items-center justify-center h-3/5">
                <div className="flex-col items-center justify-center w-64 p-4 m-4 border-2 border-emerald-500 rounded-3xl h-5/6">
                    <div name="title" className="flex items-center justify-center font-bold text-3xl h-1/6">
                        Free
                    </div>
                    <div name="price" className="flex items-center justify-center h-1/6">
                        <div className="font-bold text-emerald-500 text-4xl">
                            $0
                        </div>
                        <div className="text-lg">
                            /month
                        </div>
                    </div>
                    <div name="services" className="flex flex-col items-center justify-center text-sm h-3/6">
                        <ul className="list-disc">
                            <li>access to Eternal War</li>
                            <li>access to Maelstrom</li>
                        </ul>
                    </div>
                    <div name="button" className="flex items-center justify-center text-xl h-1/6 text-white">
                        <NavLink to="/login">
                            <div className="bg-emerald-500 rounded-full px-6 py-2">
                                Sign Up
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="flex-col items-center justify-center w-64 p-4 m-4 border-2 border-emerald-500 rounded-3xl h-5/6">
                    <div name="title" className="flex items-center justify-center font-bold text-3xl h-1/6">
                        Warrior
                    </div>
                    <div name="price" className="flex items-center justify-center h-1/6">
                        <div className="font-bold text-emerald-500 text-4xl">
                            $4.99
                        </div>
                        <div className="text-lg">
                            /month
                        </div>
                    </div>
                    <div name="services" className="flex flex-col items-center justify-center text-sm h-3/6">
                        <li className="list-none font-bold">Own up to</li>
                        <li className="list-none font-black text-2xl">10</li>
                        <li className="list-none font-bold">games simultaneously</li>
                        <ul className="list-disc">
                            <li>access to Eternal War</li>
                            <li>access to Maelstrom</li>
                            <li>access to Talemaker</li>
                            <li>access to your profile</li>
                            <li>access to admin role</li>
                        </ul>
                    </div>
                    <div name="button" className="flex items-center justify-center text-xl h-1/6 text-white">
                        <NavLink to="/login">
                            <div className="bg-emerald-500 rounded-full px-6 py-2">
                                Become a Warrior
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="flex-col items-center justify-center w-64 p-4 m-4 border-2 border-emerald-500 rounded-3xl h-5/6">
                    <div name="title" className="flex items-center justify-center font-bold text-3xl h-1/6">
                        Legend
                    </div>
                    <div name="price" className="flex items-center justify-center h-1/6">
                        <div className="font-bold text-emerald-500 text-4xl">
                            $49.99
                        </div>
                        <div className="text-lg">
                            /year
                        </div>
                    </div>
                    <div name="services" className="flex flex-col items-center justify-center text-sm h-3/6">
                        <li className="list-none font-bold">Own up to</li>
                        <li className="list-none font-black text-2xl">20</li>
                        <li className="list-none font-bold">games simultaneously</li>
                        <ul className="list-disc">
                            <li>access to Eternal War</li>
                            <li>access to Maelstrom</li>
                            <li>access to Talemaker</li>
                            <li>access to your profile</li>
                            <li>access to admin role</li>
                        </ul>
                    </div>
                    <div name="button" className="flex items-center justify-center text-xl h-1/6 text-white">
                        <NavLink to="/login">
                            <div className="bg-emerald-500 rounded-full px-6 py-2">
                                Become a Legend
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </subscribe>
  );
};

export default Subscribe;