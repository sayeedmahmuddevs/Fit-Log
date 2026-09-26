import { TypeData } from "@/Type";
import Image from "next/image";
import { CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";


interface MarkCard{
    card : TypeData;
    handleRemoveData : (id:string) => void
}



export default function MarkCard({card, handleRemoveData} : MarkCard) {
  return (
    <div className="flex justify-between items-center px-2 py-2 dark:bg-gray-800 bg-gray-200 rounded-2xl mb-5">
            <div className="flex gap-5 items-center">
                <div className="h-30 w-50">
                    <Image
                   src={card.image}
                   alt={card.name}
                   width={150}
                   height={10}
                   className="h-full w-full rounded-xl"

                   />
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-1"> {card.name} </h3>
                    <p className="mb-4 text-gray-400">{card.equipment}</p>

                    <div className="flex gap-3 items-center">
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

            <div className="flex gap-5">
                <button className="px-3 py-1 outline outline-amber-400 rounded-xl font-semibold">View Details</button>
                <button className="px-3 py-1  bg-amber-400 rounded-xl text-black font-semibold">Mark as Done</button>
                <button 
                onClick={() => {
                  handleRemoveData(String(card.id))
                  toast.success(`Removed ${card.name}`)
                  
                }}
                className="text-4xl"> <IoMdClose/></button>
                

            </div>
        </div>
  )
}
