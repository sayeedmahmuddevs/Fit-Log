"use client";

import { TypeData } from "@/Type";
import { createContext, ReactNode, useState } from "react";

// interface CardContextProps{
//     plan: TypeData[]
//     setPlan : React.Dispatch<React.SetStateAction<TypeData[]>>;
//     saved : TypeData[]
//     setSaved : React.Dispatch<React.SetStateAction<TypeData[]>>;
// }

export const fitContext = createContext({})



function Context({children}: {children: ReactNode}) {
    const [plan, setPlan] = useState<TypeData[]>([])
    const [saved, setSaved] = useState<TypeData[]>([])

    const providorData = {
        plan, setPlan, saved, setSaved 
    }

  return (
    <fitContext.Provider value ={providorData}> {children}</fitContext.Provider>
  )
}

export default Context
