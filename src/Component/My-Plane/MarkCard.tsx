import { TypeData } from "@/Type";
import Image from "next/image";
import Link from "next/link";
import { CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

interface MarkCard {
  card: TypeData & {isMark? : boolean};
  handleRemoveData: (id: string) => void;
  markAsRead : (id : number) => void;
  show:boolean
}

export default function MarkCard({ card, handleRemoveData, markAsRead,show}: MarkCard) {

  
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-3 py-3 dark:bg-gray-800 bg-gray-200 rounded-2xl mb-5 w-full">

  {/* Left Section */}
  <div className="flex gap-3 sm:gap-5 items-center min-w-0 w-full sm:w-auto">

    {/* Image */}
    <div className="h-20 w-24 sm:h-24 sm:w-36 lg:h-30 lg:w-50 shrink-0">
      <Image
        src={card.image}
        alt={card.name}
        width={150}
        height={150}
        className="h-full w-full rounded-xl object-cover"
      />
    </div>

    {/* Card Info */}
    <div className="min-w-0 flex-1">

      <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-1 break-words">
        {card.name}
      </h3>

      <p className="mb-3 text-xs sm:text-sm text-gray-400 break-words">
        {card.equipment}
      </p>

      {/* Workout Details */}
      <div className="flex flex-wrap gap-x-3 gap-y-2 items-center text-xs sm:text-sm">

        <span className="flex gap-1.5 items-center whitespace-nowrap">
          <CiTimer className="text-base sm:text-lg shrink-0" />
          <span>{card.duration} min</span>
        </span>

        <span className="flex gap-1.5 items-center whitespace-nowrap">
          <FaFire className="text-base sm:text-lg shrink-0" />
          <span>{card.caloriesBurned} kcal</span>
        </span>

        <span className="flex gap-1.5 items-center whitespace-nowrap">
          <IoIosStar className="text-base sm:text-lg text-amber-300 shrink-0" />
          <span>{card.rating}</span>
        </span>

      </div>
    </div>
  </div>

  {/* Right Section - Buttons */}
  <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto">

    <button
      className="px-3 py-2 text-xs sm:text-sm outline outline-amber-400 rounded-xl font-semibold whitespace-nowrap"
    >
      <Link
      href={`/Fitlog/${card.id}`}
      >
      View Details
      
      </Link>
    </button>

    {
      show ? "" : card.isMark ? "" : (
        <button
          onClick={() => markAsRead(card.id)}
          className="px-3 py-2 text-xs sm:text-sm bg-amber-400 rounded-xl text-black font-semibold whitespace-nowrap"
        >
          Mark as Done
        </button>
      )
    }

    <button
      onClick={() => {
        handleRemoveData(String(card.id));
        toast.success(`Removed ${card.name}`);
      }}
      className="text-2xl sm:text-3xl p-1 cursor-pointer"
    >
      <IoMdClose />
    </button>

  </div>

</div>
  );
}
