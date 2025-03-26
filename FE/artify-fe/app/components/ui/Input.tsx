import { InputProps } from "@/app/type";
import React from "react";

const Input = ({ title, styles, placeholder }: InputProps) => {
  return (
    <div>
      <label className="text-gray-600">{title}</label>
      <input className={styles} placeholder={placeholder} />
    </div>
  );
};

export default Input;
