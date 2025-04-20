import Image from "next/image";
import React from "react";

const LoginBackgroundImage = () => {
  return (
    <div className="relative w-full h-full z-10">
      <Image
        src="/loginImage.png"
        alt="Logo Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default LoginBackgroundImage;
