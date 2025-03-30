import { InputProps } from "@/app/type";
import React from "react";

const Input = ({
  title,
  value,
  type,
  styles,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <div className="w-full">
      <label className="text-gray-600">{title}</label>
      <input
        type={
          type !== "password" && type !== "passwordCheck" ? "text" : "password"
        }
        className={styles}
        placeholder={placeholder}
        onChange={(e) => onChange(type, e)}
        value={value}
      />
    </div>
  );
};

export default Input;
