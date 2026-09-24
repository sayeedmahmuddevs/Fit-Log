import { TypeData } from "@/Type";
import Image from "next/image";
import Link from "next/link";
import { CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

interface CardProps {
  card: TypeData;
}

function Card({ card }: CardProps) {
  return (
    <Link href={`/Fitlog/${card.id}`}>
        <div className="rounded-xl overflow-hidden bg-gray-300 dark:bg-gray-800 group hover:-translate-y-2 transition-transform duration-200 border border-black hover:border-amber-200">
      <div className="h-60 bg-red-200">
        <Image
          src={card.image}
          alt={card.name}
          width={300}
          height={200}
          className="h-full w-full group-hover:scale-110 transition-transform duration-200"
        />
      </div>

      <div className="px-2">
        <div className="flex gap-5 my-3">
          {card.muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="bg-amber-300 px-2 py-1 rounded-2xl text-black font-bold uppercase text-[12px] flex justify-center items-center"
            >
              {muscle}
            </span>
          ))}
        </div>
        <h2 className="mb-1 text-xl font-bold">{card.name}</h2>
        <p className="text-gray-400 mb-3">{card.equipment}</p>

        <div className="flex justify-between items-center px-2 pb-4">
          <span className="flex gap-2 items-center">
            <span className="inline-block size-4 rounded-full">
              <CiTimer />
            </span>
            <span>{card.duration} min</span>
          </span>

          <span className="flex gap-2 items-center">
            <span className="inline-block size-4 rounded-full">
              <FaFire />
            </span>
            <span>{card.caloriesBurned} kcal</span>
          </span>

          <span className="flex gap-2 items-center">
            <span className="inline-block size-4 rounded-full text-amber-300">
              {" "}
              <IoIosStar />
            </span>
            <span>{card.rating} </span>
          </span>
        </div>
      </div>
    </div>
    </Link>
    
  );
}

export default Card;
