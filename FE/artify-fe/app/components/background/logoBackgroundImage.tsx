import Image from "next/image";
import React from "react";

const LogoBackgroundImage = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/logoImage.png"
        alt="Logo Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default LogoBackgroundImage;
