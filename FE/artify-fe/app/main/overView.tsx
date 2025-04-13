import Image from "next/image";
import React from "react";
import { FaClock } from "react-icons/fa6";

const OverView = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[24rem]">
      <div>
        <div className="font-bold text-2xl mb-4 flex items-center">
          <span className="pr-2">
            <FaClock />
          </span>
          <p>OVERVIEW</p>
        </div>
        <div>
          <Image
            src="/graph.png"
            width={1000}
            height={300}
            alt="임시 그래프 이미지"
          />
        </div>
      </div>
    </div>
  );
};

export default OverView;
