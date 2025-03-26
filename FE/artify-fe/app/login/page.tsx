import React from "react";
import LoginBackgroundImage from "./components/loginBackgroundImage";
import LoginForm from "./components/loginForm";

const Login = () => {
  return (
    <div className="relative w-full h-full">
      <LoginBackgroundImage />
      <LoginForm />
    </div>
  );
};

export default Login;
