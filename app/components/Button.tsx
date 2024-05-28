import React from "react";
// import { doSocialLogin } from "../actions";

const Button: React.FC = () => {
  return (
    <div>
      <form className="flex flex-wrap gap-6">
        <button
          type="submit"
          name="action"
          value="google"
          className="border-2 border-black py-2 px-4 rounded-lg font-semibold"
        >
          Sign up with Google
        </button>
        <button
          type="submit"
          name="action"
          value="github"
          className="bg-black text-white py-2 px-4 rounded-lg font-semibold"
        >
          Sign up with Github
        </button>
      </form>
    </div>
  );
};

export default Button;
