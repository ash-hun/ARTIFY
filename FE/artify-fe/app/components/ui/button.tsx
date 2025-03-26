import { ButtonProps } from "@/app/type";
import React from "react";

const Button = ({ title, styles }: ButtonProps) => {
  return <button className={styles}>{title}</button>;
};

export default Button;
