"use client";

import React, { useState } from "react";
import LoginBackgroundImage from "./components/loginBackgroundImage";
import LoginForm from "./components/loginForm";
import { defaultData } from "./const";
import { defaultDataType } from "./type";

const Login = () => {
  const [requestData, setRequestData] = useState<defaultDataType>(defaultData);

  return (
    <div className="relative w-full h-full">
      <LoginBackgroundImage />
      <LoginForm requestData={requestData} setRequestData={setRequestData} />
    </div>
  );
};

export default Login;
