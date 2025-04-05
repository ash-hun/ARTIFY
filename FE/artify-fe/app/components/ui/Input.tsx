import React from "react";
import { InputProps } from "@/app/type";

const Input = ({
  title,
  value,
  type,
  styles,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <div className="w-full flex flex-col">
      <label className="text-gray-600 mb-2">{title}</label>
      <input
        type={type}
        className={styles}
        placeholder={placeholder}
        onChange={(e) => onChange(type, e)}
        value={value}
      />
    </div>
  );
};

export default Input;
