import React from "react";
import OverView from "./overView";
import Module from "./module";

const Main = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <OverView />
      <Module />
    </div>
  );
};

export default Main;
