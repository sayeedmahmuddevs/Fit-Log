"use client";

import CardDetails from "../Common/Card";
import { AllData } from "@/Data/AllData";
import { TypeData } from "@/Type";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import EmpityBar from "./EmpityBar";

type SortType = "default" | "duration" | "calories" | "rating";

function Cards() {
  const [data, setData] = useState<TypeData[]>([]);
  const [sorted, setSorted] = useState<SortType>("default");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const allData = await AllData();
      setData(allData);
    };

    getData();
  }, []);

  const datas = data.filter((card) => {
    if (search.trim() === "") return true;

    return card.name.toUpperCase().includes(search.toUpperCase().trim());
  });

  const SortData = [...datas].sort((a, b) => {
    if (sorted === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sorted === "duration") {
      return b.duration - a.duration;
    }

    if (sorted === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <div>
      <div className="px-10 mt-20 mb-8">
        <h1 className="text-4xl font-bold">The Library</h1>
        <p>Twelve lifts covering every major muscle group</p>
      </div>

      <div className="flex justify-between mt-5 px-10">
        {/* Search */}
        <div className="relative w-full max-w-sm">
          <div>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by fit..."
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-500"
            />
          </div>
        </div>

        {/* Sort */}
        <div className="flex gap-2 items-center">
          <p>Sort by:</p>

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
      {SortData.length === 0 ? (
        <EmpityBar />
      ) : (
        <div className="mt-5 grid grid-cols-3 gap-7 px-15 rounded-xl">
          {SortData.map((card: TypeData, index: number) => (
            <CardDetails key={index} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards;
