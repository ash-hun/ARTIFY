"use client";

import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/Input";
import React, { useState } from "react";
import { defaultMemberDataType } from "../../type";
import { defaultMemberData } from "../../const";

const MemberShipForm = () => {
  const [formItem, setFormItem] =
    useState<defaultMemberDataType>(defaultMemberData);

  const onChange = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormItem((prev: defaultMemberDataType) => ({
      ...prev,
      [type]: e.target.value,
    }));
  };

  // const onSubmit = () => {
  //   setRequestData(formItem);
  // };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start z-20">
      <div className="w-[500px] h-full bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
        <div className="text-[2.2rem] h-[30%] flex items-center font-bold">
          <p>WELCOME TO ARTIFY</p>
        </div>
        <div className="w-[90%] space-y-4">
          <div className="flex items-center">
            <Input
              title={"Email"}
              value={formItem.email}
              type="email"
              styles={"w-[95%] mb-4 p-2 border border-gray-300 rounded"}
              placeholder={"Your Email"}
              onChange={onChange}
            />
            <Button
              title="Verify"
              styles="bg-black text-white w-[5rem] h-[2.5rem] rounded-lg"
            />
          </div>
          <div>
            <div className="flex items-center">
              <Input
                value={formItem.password}
                title={"password"}
                type="password"
                styles={"w-[95%] mb-4 p-2 border border-gray-300 rounded"}
                placeholder={"Your Password"}
                onChange={onChange}
              />
              <Button
                title=""
                styles="bg-white text-white w-[5rem] h-[2.5rem] rounded-lg"
              />
            </div>
            <div className="flex items-center">
              <Input
                value={formItem.passwordCheck}
                title={"Password Reconfirm"}
                type="passwordCheck"
                styles={"w-[95%] mb-4 p-2 border border-gray-300 rounded"}
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
          </div>
        </div>
        <Button
          title={"Sign up"}
          styles={
            "w-[90%] bg-black py-2 rounded-lg text-white mt-4 cursor-pointer hover:bg-gray-900 transition"
          }
        />
      </div>
    </div>
  );
};

export default MemberShipForm;
