"use client"

import { FaSearch } from "react-icons/fa";
import MarkCard from "./MarkCard";
import { useContext } from "react";
import { fitContext } from "@/DataContext/Context";





function ProgressBar() {

    const markData = useContext(fitContext)
    console.log(markData)

  return (
    <div className="mt-10 p-5">
      <div className="mb-10">
        <h1 className="text-4xl font-bold uppercase mb-1">My Plane</h1>
        <p className="text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="bg-gray-900 py-4 rounded-2xl grid grid-cols-3 px-10">
        <div>
          <p>Exercises</p>
          <span className="text-5xl font-bold text-amber-300">2</span>
        </div>

        <div className="outline outline-gray-800 pl-5 py-1">
          <p>Munites</p>
          <span className="text-5xl font-bold">2</span>
        </div>

        <div className="outline outline-gray-800 py-1 pl-5">
          <p>Calories</p>
          <span className="text-5xl font-bold">2</span>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="py-1 px-1 rounded-2xl outline outline-gray-600">
          <button className="py-1 px-2 rounded-xl outline outline-gray-600 mr-3">
            {"Today's"} Plan
          </button>
          <button className="py-1 px-2 rounded-xl outline outline-gray-600 ">
            {" "}
            Saved
          </button>
        </div>

        <div className="relative w-full max-w-sm">
          <search>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch/>
            </span>

            <input
              type="text"
              placeholder="Search by fit..."
              className="w-full rounded-lg border border-gray-300  py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-500"
            />
          </search>
        </div>

        <div className="flex gap-2 items-center">
          <p>Sort by :</p>
          <select className="outline outline-gray-600 rounded-lg px-2 py-1 bg-gray-900">
            <option>Duration</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
        </div>
      </div>

      <div>
        <MarkCard/>


      </div>
    </div>
  );
}

export default ProgressBar;
