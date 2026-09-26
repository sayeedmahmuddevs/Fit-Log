"use client";

import { fitContext } from "@/DataContext/Context";
import { TypeData } from "@/Type";
import { useContext } from "react";
import { CiBookmark } from "react-icons/ci";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa6";


interface CardDetailsBtnProps {
  fitLogCard: TypeData;
}

export default function CardDetailsBtn({ fitLogCard }: CardDetailsBtnProps) {
    // data Context
  const {plan, setPlan, saved, setSaved } = useContext(fitContext);
    
  // check already added
  const isPlanned = plan.some((cd) => cd.id === fitLogCard.id);
  const isSaved = saved.some((cd) => cd.id === fitLogCard.id);


//   plan Card update
  const handlePlane = (card: TypeData) => {
    if (isPlanned) return ;
    
    setPlan((pre) => {
      const planUpdate = [...pre, card]
      localStorage.setItem("Plan", JSON.stringify(planUpdate))
      return planUpdate
  });
  
    toast.success(`added to Plan ${card.name}`)

  };



  //   saved Card update
  const handleSaved = (card: TypeData) => {
    if (isSaved) return ;

    setSaved((pre) => {
      const savedUpdate = [...pre, card]
      localStorage.setItem("Saved", JSON.stringify(savedUpdate))
      return savedUpdate    
  });

    toast.success(`added to saved ${card.name}`)

  };

  
  return (
    <div className="flex gap-5">
      {/* Today's Plan */}
      <button
        onClick={() => handlePlane(fitLogCard)}
        disabled={isPlanned}
        className={`px-3 py-2 rounded-2xl flex justify-center items-center gap-2 transition-all duration-200 ${
          isPlanned
            ? "bg-green-100 text-green-700 border border-green-300 cursor-default"
            : "bg-amber-400 text-black hover:bg-amber-500 cursor-pointer"
        }`}
      >
        <span
          className={`size-4 rounded-full flex items-center justify-center ${
            isPlanned
              ? "bg-green-500 text-white"
              : "border border-black"
          }`}
        >
          {isPlanned && <span className="text-[10px]"><FaCheck/></span>}
        </span>

        {isPlanned ? "Already Added" : "Add to today's plan"}
      </button>

      {/* saved */}
      <button
        onClick={() => handleSaved(fitLogCard)}
        disabled={isSaved}
        className={`px-3 py-2 rounded-2xl flex justify-center items-center gap-2 transition-all duration-200 ${
          isSaved
            ? "bg-blue-100 text-blue-700 border border-blue-300 cursor-default"
            : "dark:text-white outline hover:bg-gray-100 hover:text-black"
        }`}
      >
        {isSaved ? ( <> <CiBookmark className="fill-blue-600" /> Saved </> ) : 
        (<> <CiBookmark /> Save for later </>)
        }
      </button>
    </div>
  );
}
