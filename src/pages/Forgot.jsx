import { NavLink } from "react-router-dom";

const Forgot = () => {

  return (
    <div className="flex flex-col items-center mt-16 h-screen space-y-4">
        <div className=" text-4xl font-bold">
            Recover Password
        </div>
        <div class="max-w-md shadow-2xl shadow-stone-500 rounded-3xl p-8 h-fit w-1/2">
            <div class="grid grid-cols-1 gap-6">
                <label class="block">
                    <span class="">Your email</span>
                <input type="email" class="mt-1 block w-full" placeholder="Guilliman" />
                </label>
                <NavLink to="/" className="flex items-center justify-center bg-green-600 hover:bg-blue-500 text-white font-semibold rounded">
                    <button className="py-2 px-4" type="submit">
                        email me a recovery link
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
  );
};

export default Forgot;
