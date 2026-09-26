"use client";

import { FaSearch } from "react-icons/fa";
import MarkCard from "./MarkCard";
import { useContext, useState } from "react";
import { fitContext } from "@/DataContext/Context";
import EmpityBar from "./EmpityBar";
import { toast } from "react-toastify";

type SortType = "default" | "duration" | "calories" | "rating";

function ProgressBar() {
  // data context
  const { plan, saved, setPlan, setSaved, show, setShow } =
    useContext(fitContext);

  const planData = {
    min: plan.reduce((acc, min) => acc + Number(min.duration), 0),
    calories: plan.reduce((acc, min) => acc + Number(min.caloriesBurned), 0),
  };

  const savedData = {
    min: saved.reduce((acc, min) => acc + Number(min.duration), 0),
    calories: saved.reduce((acc, min) => acc + Number(min.caloriesBurned), 0),
  };

  const [sorted, setSorted] = useState<SortType>("default");
  const [search, setSearch] = useState<string>("");

  const data = (show ? saved : plan).filter((card) => {
    if (search === "") return card;
    return card.name.toUpperCase().includes(search.toUpperCase().trim());
  });
  //   data sorted
  const SortData = data.sort((a, b) => {
    if (sorted === "default") {
      return 0;
    } else if (sorted === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    } else if (sorted === "duration") {
      return b.duration - a.duration;
    } else if (sorted === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  // remove Data
  const handleRemoveData = (id: string) => {
    const someOfCard = (show ? saved : plan).some(
      (card) => String(card.id) === String(id),
    );

    if (someOfCard) {
      return (show ? setSaved : setPlan)(
        (show ? saved : plan).filter((card) => String(card.id) !== String(id)),
      );
    }
  };

  const markAsRead = (id: number) => {
    setPlan((pre) =>
      pre.map((card) => (card.id === id ? { ...card, isMark: true } : card)),
    );

    toast.success("Mark as done");
  };

  return (
    <div className="p-5">
      <div className="mb-10">
        <h1 className="text-4xl font-bold uppercase mb-1">My Plane</h1>
        <p className="text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* progressBar */}
      <div className="dark:bg-gray-800 bg-gray-200 outline-gray-200 py-4 rounded-2xl grid grid-cols-3 px-10">
        <div>
          <p>Exercises</p>
          <span className="text-5xl font-bold text-amber-300">
            {!show && plan.length}
            {show && saved.length}
          </span>
        </div>

        <div className="outline dark:outline-gray-800 outline-gray-300 pl-5 py-1">
          <p>Munites</p>
          <span className="text-5xl font-bold">
            {!show && planData.min}
            {show && savedData.min}
          </span>
        </div>

        <div className="outline dark:outline-gray-800 outline-gray-300 py-1 pl-5">
          <p>Calories</p>
          <span className="text-5xl font-bold">
            {!show && planData.calories}
            {show && savedData.calories}
          </span>
        </div>
      </div>

      {/* Data button */}
      <div className="flex justify-between mt-5">
        <div className="py-1 px-1 rounded-2xl outline outline-gray-600">
          <button
            onClick={() => {
              setShow(false);
              setSearch("");
              setSorted("default");
            }}
            className={`py-1 px-2 rounded-xl cursor-pointer mr-3 ${!show ? "outline outline-gray-600" : "text-gray-500"}`}
          >
            {"Today's"} Plan
          </button>
          <button
            onClick={() => {
              setShow(true);
              setSearch("");
              setSorted("default");
            }}
            className={`py-1 px-2 rounded-xl cursor-pointer mr-3 ${show ? "outline outline-gray-600" : "text-gray-500"}`}
          >
            {" "}
            Saved
          </button>
        </div>

        {/* search input */}
        <div className="relative w-full max-w-sm hidden lg:block">
          <search>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by fit..."
              className="w-full rounded-lg border border-gray-300  py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-500"
            />
          </search>
        </div>

        {/* sorted */}
        <div className="flex gap-2 items-center">
          <p>Sort by :</p>
          <select
            value={sorted}
            onChange={(e) => setSorted(e.target.value as SortType)}
            className="outline outline-gray-600 rounded-lg px-2 py-1 dark:bg-gray-900 bg-gray-200"
          >
            <option value="default">Default</option>
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="relative w-full block lg:hidden mt-2">
        <search>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by fit..."
            className="w-full rounded-lg border border-gray-300  py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-500"
          />
        </search>
      </div>

      {/* render Card */}
      <div className="mt-5 h-100 overflow-scroll scrollbar-none">
        {/* empity Bar */}
        {SortData.length === 0 && <EmpityBar />}

        {/* card show */}
        {SortData.map((card, index) => (
          <MarkCard
            key={index}
            card={card}
            handleRemoveData={handleRemoveData}
            markAsRead={markAsRead}
            show={show}
          />
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
