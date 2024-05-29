import React from "react";

import { doLogin } from "../actions";

const Button: React.FC = () => {
  return (
    <div>
      <form action={doLogin} className="grid items-center gap-2 ">
        <div className="flex itmes-center gap-4 border-2 border-black py-2 px-4 rounded-lg">
          <img src="./google.svg" alt="logo" className="w-6" />
          <button
            type="submit"
            name="action"
            value="google"
            className=" font-semibold"
          >
            Sign up with Google
          </button>
        </div>
        <div className="flex itmes-center gap-4 border-2 border-black py-2 px-4 rounded-lg">
          <img src="./github.svg" alt="logo" className="w-6" />
          <button
            type="submit"
            name="action"
            value="github"
            className="font-semibold"
          >
            Sign up with Github
          </button>
        </div>
      </form>
    </div>
  );
};

export default Button;
