"use client";

import RenderLibrary from "./RenderLibrary";
import { useSelector } from "react-redux";

function Library() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  return (
    <div className={"pb-48 py-6 px-28 w-full  " + (darkTheme ? "bg-[#333]" : "")} id="library">
      <div className="p-4 ">
        <div className="flex gap-4 items-center justify-center pb-6">
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12  p-2 rounded text-center ">
            T
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            H
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            Ư
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            {" "}
            V
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            I
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            Ệ
          </span>

          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            N
          </span>
        </div>

        <div className="">
          <RenderLibrary />
        </div>
      </div>
    </div>
  );
}

export default Library;
