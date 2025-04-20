"use client";

import React from "react";
import LoginBackgroundImage from "../components/loginBackgroundImage";
import MemberShipForm from "./components/memberShipForm";

const MemberShip = () => {
  return (
    <div className="relative w-full h-full">
      <LoginBackgroundImage />
      <MemberShipForm />
    </div>
  );
};

export default MemberShip;
