import { ButtonProps } from "@/app/type";
import React from "react";

const Button = ({ title, styles, onClick }: ButtonProps) => {
  return (
    <button className={styles} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
