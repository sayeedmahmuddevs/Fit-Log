import React from "react";

export default function EmpityBar() {
  return (
    <div className="flex flex-col justify-center items-center h-50 bg-gray-900 rounded-2xl">
      <h3 className="text-2xl font-semibold mb-2">Nothing here yet</h3>
      <p className="text-gray-500 mb-5">
        Browse the library and add a lift to get today moving
      </p>
      <button className="px-3 py-2 bg-amber-300 rounded-2xl ">
        Go to Workouts
      </button>
    </div>
  );
}
