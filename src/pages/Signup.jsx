import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center mt-16 h-screen space-y-4">
      <div className=" text-4xl font-bold">Sign Up</div>
      <div className="max-w-md shadow-2xl shadow-stone-500 rounded-3xl p-8 h-fit w-1/2 bg-white">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="">Username</span>
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="Guilliman"
            />
          </label>
          <label className="block">
            <span className="">Email address</span>
            <input
              type="email"
              className="mt-1 block w-full"
              placeholder="trackhammer@gmail.com"
            />
          </label>
          <label className="block">
            <span className="">Password</span>
            <input
              type="password"
              className="mt-1 block w-full"
              placeholder=""
            />
          </label>
          <NavLink
            to="/"
            className="flex items-center justify-center bg-green-600 hover:bg-blue-500 text-white font-semibold rounded"
          >
            <button className="py-2 px-4" type="submit">
              Create an Account
            </button>
          </NavLink>
        </div>
      </div>
      <div>Already have an account ?</div>
      <NavLink
        to="/login"
        className="flex items-center justify-center font-semibold rounded underline"
      >
        <button className="" type="">
          Sign In
        </button>
      </NavLink>
    </div>
  );
};

export default Signup;
