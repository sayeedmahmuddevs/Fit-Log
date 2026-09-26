"use client";

import { TypeData } from "@/Type";
import { createContext, ReactNode, useState } from "react";

interface CardContextProps{
    plan: TypeData[]
    setPlan : React.Dispatch<React.SetStateAction<TypeData[]>>;
    saved : TypeData[]
    setSaved : React.Dispatch<React.SetStateAction<TypeData[]>>;
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const fitContext = createContext<CardContextProps>({
    plan : [],
    setPlan : () => {},
    saved : [], 
    setSaved : ()  => {},
    show: false,
    setShow: () => {}
    
})

function Context({children}: {children: ReactNode}) {

    const [plan, setPlan] = useState<TypeData[]>([])
    const [saved, setSaved] = useState<TypeData[]>([])
    const [show, setShow] = useState(false)

    const providorData = {
        plan, setPlan, saved, setSaved, show, setShow
    }

    
  return (
    <fitContext.Provider value ={providorData}> {children}</fitContext.Provider>
  )
}

export default Context
