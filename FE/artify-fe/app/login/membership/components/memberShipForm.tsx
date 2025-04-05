"use client";

import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/Input";
import React, { useState } from "react";
import { defaultMemberDataType } from "../../type";
import { defaultMemberData } from "../../const";
import axios from "axios";
import { useRouter } from "next/navigation";

const MemberShipForm = () => {
  const [formItem, setFormItem] =
    useState<defaultMemberDataType>(defaultMemberData);
  const [error, setError] = useState("");

  const router = useRouter();

  const onChange = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormItem((prev: defaultMemberDataType) => ({
      ...prev,
      [type]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post("~/api/auth/signup", {
        email: formItem.email,
        password: formItem.password,
        name: formItem.name,
      });

      if (response.status === 200) {
        router.push("/login");
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

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start z-20">
      <div className="w-[500px] h-full bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
        <div className="text-[2.2rem] h-[20%] flex items-center font-bold">
          <p>WELCOME TO ARTIFY</p>
        </div>
        <div className="w-[90%] space-y-4">
          <div className="flex items-center mb-0">
            <Input
              title={"Name"}
              value={formItem.name}
              type="name"
              styles={"w-[21rem] mb-4 p-2 border border-gray-300 rounded"}
              placeholder={"Your Name"}
              onChange={onChange}
            />
          </div>
          <div className="flex items-center mb-0">
            <Input
              title={"Email"}
              value={formItem.email}
              type="email"
              styles={"w-[21rem] mb-4 p-2 border border-gray-300 rounded"}
              placeholder={"Your Email"}
              onChange={onChange}
            />
            <Button
              title="Verify"
              styles="bg-black text-white w-[5rem] h-[2.5rem] rounded-lg"
            />
          </div>
          <p className="text-green-600">※ Enable Use Account Email :)</p>
          <div>
            <div className="flex items-center">
              <Input
                value={formItem.password}
                title={"password"}
                type="password"
                styles={"w-[21rem] mb-4 p-2 border border-gray-300 rounded"}
                placeholder={"Your Password"}
                onChange={onChange}
              />
            </div>
            <div className="flex items-center">
              <Input
                value={formItem.passwordCheck}
                title={"Password Reconfirm"}
                type="passwordCheck"
                styles={"w-[21rem] mb-4 p-2 border border-gray-300 rounded"}
                placeholder={"Re-enter password"}
                onChange={onChange}
              />
              <Button
                title="Verify"
                styles="bg-black text-white w-[5rem] h-[2.5rem] rounded-lg"
                onClick={() => {
                  console.log("Click");
                }}
              />
            </div>
            <p className="text-green-600">※ Enable Use Account Password :)</p>
          </div>
        </div>
        <Button
          title={"Sign up"}
          styles={
            "w-[90%] bg-black py-2 rounded-lg text-white mt-4 cursor-pointer hover:bg-gray-900 transition"
          }
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default MemberShipForm;
