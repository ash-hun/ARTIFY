"use client";
import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/Input";
import React, { useState } from "react";
import axios from "axios";
import { defaultDataType } from "../type";
import { useRouter } from "next/navigation";

const LoginForm = ({
  requestData,
  setRequestData,
}: {
  requestData: defaultDataType;
  setRequestData: React.Dispatch<React.SetStateAction<defaultDataType>>;
}) => {
  const [formItem, setFormItem] = useState(requestData);
  const [error, setError] = useState("");
  const router = useRouter();

  const onChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormItem((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post("~/api/auth/login", {
        email: formItem.email,
        password: formItem.password,
      });

      if (response.status === 200) {
        router.push("/main");
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        setError(error.response?.msg);
      } else if (error.response?.status === 500) {
        setError(error.response?.msg);
      } else {
        setError("에러 발생");
      }
    }
  };

  const onJoin = () => {
    router.push("/login/membership");
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start z-20">
      <div className="w-[500px] h-full bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
        <div className="text-[2.2rem] h-[30%] flex items-center font-bold">
          <p>WELCOME TO ARTIFY</p>
        </div>
        <div className="w-[90%] border border-gray-300 py-10 px-6 rounded-lg">
          <Input
            title={"Email"}
            type="email"
            value={formItem.email}
            styles={"w-full mb-4 p-2 border border-gray-300 rounded"}
            placeholder={"Your Email"}
            onChange={onChange}
          />

          <Input
            title={"Password"}
            type="password"
            value={formItem.password}
            styles={"w-full mb-4 p-2 border border-gray-300 rounded"}
            placeholder={"Your Password"}
            onChange={onChange}
          />
          <Button
            title={"Sign in"}
            styles={
              "w-full bg-gray-800 py-1 rounded-lg text-white mt-4 cursor-pointer hover:bg-gray-700"
            }
            onClick={onSubmit}
          />
          <Button
            title={"Sign up"}
            styles={
              "w-full py-1 rounded-lg text-gray-800 mt-4 cursor-pointer border border-gray-800 hover:bg-gray-50"
            }
            onClick={onJoin}
          />
          {error && (
            <div className="mt-4 flex justify-center">
              <p className="text-red-400">{error}</p>
            </div>
          )}
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
