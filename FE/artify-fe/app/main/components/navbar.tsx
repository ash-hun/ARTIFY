"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayOfWeek = dayNames[today.getDay()];

    setCurrentDate(`${year}.${month}.${day}`);
    setDayOfWeek(dayOfWeek);
  }, []);

  return (
    <div className="bg-[#261FB3] h-[3rem] flex justify-end items-center px-4 font-bold text-white">
      <p>
        {currentDate}{" "}
        <span className={dayOfWeek === "SUN" ? "text-red-500" : ""}>
          {dayOfWeek}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
