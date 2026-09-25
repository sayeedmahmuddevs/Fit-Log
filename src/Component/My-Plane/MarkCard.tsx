import { TypeData } from "@/Type";
import { CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

interface MarkCard{
    card : TypeData
}



export default function MarkCard({card} : MarkCard) {
  return (
    <div className="flex justify-between items-center px-2 py-2 dark:bg-gray-800 bg-gray-200 rounded-2xl mb-5">
            <div className="flex gap-5 items-center">
                <div>
                    img
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-1"> {card.name} </h3>
                    <p className="mb-4 text-gray-400">Medicine Ball</p>

                    <div className="flex gap-3 items-center">
                              <span className="flex gap-2 items-center">
                                <span className="inline-block size-4 rounded-full">
                                  <CiTimer />
                                </span>
                                <span>{323} min</span>
                              </span>
                    
                              <span className="flex gap-2 items-center">
                                <span className="inline-block size-4 rounded-full">
                                  <FaFire />
                                </span>
                                <span>{10} kcal</span>
                              </span>
                    
                              <span className="flex gap-2 items-center">
                                <span className="inline-block size-4 rounded-full text-amber-300">
                                  {" "}
                                  <IoIosStar />
                                </span>
                                <span>4 </span>
                              </span>
                            </div>

                </div>
            </div>

            <div className="flex gap-5">
                <button className="px-3 py-1 outline outline-amber-400 rounded-xl font-semibold">View Details</button>
                <button className="px-3 py-1  bg-amber-400 rounded-xl text-black font-semibold">Mark as Done</button>
                

            </div>
        </div>
  )
}
