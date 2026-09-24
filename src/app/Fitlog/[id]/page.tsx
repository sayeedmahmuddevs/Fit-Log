import { AllData } from "@/Data/AllData"
import { TypeData } from "@/Type"


interface FitLogCardDetailsProps{
    params: Promise<{
        id: string
    }>
}



async function FitLogCardDetails({params}:FitLogCardDetailsProps) {

    const {id} = await params
    const data: TypeData[] = await AllData()

    const fitLogCard = data.find((card:TypeData) => String(card.id) === String(id)) as TypeData

  return (
    <div className='grid grid-cols-2'>
      <div>
        {fitLogCard.id}
      </div>
      <div>

      </div>
    </div>
  )
}

export default FitLogCardDetails
