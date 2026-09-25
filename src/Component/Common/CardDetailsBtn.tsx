"use client";

import { fitContext } from "@/DataContext/Context";
import { TypeData } from "@/Type";
import { useContext } from "react";
import { CiBookmark } from "react-icons/ci";

interface CardDetailsBtnProps {
  fitLogCard: TypeData;
}

export default function CardDetailsBtn({ fitLogCard }: CardDetailsBtnProps) {
  const { setPlan, setSaved } = useContext(fitContext);


//   plan Card update
  const handlePlane = (card: TypeData) => {
    setPlan((pre) => {
      if (pre.some((cd) => cd.id === card.id)) return pre;

      return [...pre, card];
    });
  };


  //   saved Card update
  const handleSaved = (card: TypeData) => {
    setSaved((pre) => {
      if (pre.some((cd) => cd.id === card.id)) return pre;

      return [...pre, card];
    });
  };

  

  return (
    <div>
      <button
        onClick={() => handlePlane(fitLogCard)}
        className="px-3 py-2 bg-amber-400 text-black rounded-2xl flex justify-center items-center gap-2"
      >
        {" "}
        <span className="size-4  rounded-full border border-black "></span> Add
        to todays is play
      </button>
      <button 
        onClick={() => handleSaved(fitLogCard)}
      className="px-3 py-2  dark:text-white rounded-2xl flex justify-center items-center gap-2 outline">
        {" "}
        <CiBookmark /> Save for latter
      </button>
    </div>
  );
}
