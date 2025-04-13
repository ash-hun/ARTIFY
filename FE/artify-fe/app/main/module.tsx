import Image from "next/image";
import React from "react";
import { IoFileTrayStackedSharp } from "react-icons/io5";

const Module = () => {
  return (
    <div className="mt-8 h-[16rem] flex flex-col items-center ">
      <div className="w-[80%]">
        <div className="font-bold text-2xl mb-4 flex items-center">
          <span className="pr-2">
            <IoFileTrayStackedSharp />
          </span>
          <p>MODULE</p>
        </div>
        <div className="flex">
          <Image
            src="/module1.png"
            width={200}
            height={200}
            alt="임시 모듈 1"
            className="mr-8 hover:cursor-pointer"
          />
          <Image
            src="/module2.png"
            width={200}
            height={200}
            alt="임시 모듈 2"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Module;
