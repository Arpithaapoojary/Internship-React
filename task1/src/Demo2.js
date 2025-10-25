import React from "react";
import wowimage from "./assets/Gallary2.webp";
import { CgProfile } from "react-icons/cg";

function Demo2() {
  return (
    <div className="bg-white w-full h-[300px] grid grid-cols-1 md:grid-cols-4 gap-10">
      <div className="bg-red-700 justify-center flex items-center  ">hii</div>
      <div className="bg-lime-700 justify-center flex items-center">
        hello
        <CgProfile className="text-gray-200 text-3xl" />
      </div>
      <div className="bg-indigo-900 justify-center flex items-center">hii</div>
      <div className="bg-cyan-600 justify-center flex items-center">
        hhh
        <img src={wowimage} alt="wowimage/"></img>
      </div>
    </div>
  );
}

export default Demo2;
