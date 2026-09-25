import React from 'react'
import CardDetails from '../Common/Card'
import {AllData} from "@/Data/AllData"
import { TypeData } from '@/TypeData'



async function Cards (){
  const allData : TypeData[] = await AllData()
  
  return (
    <div>
      <div className='px-10 mt-20 mb-8'>
        <h1 className='text-4xl font-bold'>The Library</h1>
        <p>Twelve lifts covering every major muscale group </p>
      </div>


      <div className='mt-5 grid grid-cols-3 gap-7 px-15 rounded-xl'>
       {
        allData.map((card:TypeData, index:number) => (

         <CardDetails key={index} card = {card} />

        ))

        }

      </div>
    </div>
  )
}

export default Cards
