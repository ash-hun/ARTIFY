import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/Input";

import React from "react";

const LoginForm = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start z-20">
      <div className="w-[500px] h-full bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
        <div className="text-[2.2rem] h-[30%] flex items-center font-bold">
          <p>WELCOME TO ARTIFY</p>
        </div>
        <div className="w-[90%] border border-gray-300 py-10 px-6 rounded-lg">
          <Input
            title={"Email"}
            styles={"w-full mb-4 p-2 border border-gray-300 rounded"}
            placeholder={"Your Email"}
          />
          <Input
            title={"Password"}
            styles={"w-full mb-4 p-2 border border-gray-300 rounded"}
            placeholder={"Your Password"}
          />
          <Button
            title={"Sign in"}
            styles={
              "w-full bg-gray-800 py-1 rounded-lg text-white mt-4 cursor-pointer hover:bg-gray-700"
            }
          />

          <p className="mt-4 border-b border-black inline-block cursor-pointer hover:font-bold">
            Forgot password?
          </p>
        </div>
        <div className="mt-8 w-[85%]">
          <button className="w-full py-1 rounded-lg mt-4 border border-black h-[3rem] cursor-pointer hover:bg-gray-50">
            😁 Sign in (Git)
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
