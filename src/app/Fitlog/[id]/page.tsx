import { AllData } from "@/Data/AllData";
import { TypeData } from "@/Type";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";


interface FitLogCardDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

async function FitLogCardDetails({ params }: FitLogCardDetailsProps) {
  const { id } = await params;
  const data: TypeData[] = await AllData();

  const fitLogCard = data.find(
    (card: TypeData) => String(card.id) === String(id)
  ) as TypeData;

  const singleCard = Object.keys(fitLogCard);
  console.log(singleCard);

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="rounded-2xl overflow-hidden">
        <Image
          src={fitLogCard.image}
          alt={fitLogCard.name}
          width={300}
          height={400}
          className="h-full w-full"
        />
      </div>

      <div>
        <h1 className="text-6xl font-semibold mb-2">{fitLogCard.name}</h1>
        <p className="mb-5">{fitLogCard.description}</p>

        <div className="flex gap-5 mb-5">
          {fitLogCard.muscleGroups.map((muscle: string, index: number) => (
            <span
              key={index}
              className="bg-amber-300 px-2 py-1 rounded-2xl text-black font-bold uppercase text-[12px] flex justify-center items-center"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="rounded-2xl bg-gray-300 dark:bg-gray-800 overflow-hidden">
          {singleCard.slice(4, 11).map((card: string, index: number) => (
            <div
              key={index}
              className={`flex justify-between px-6 py-3 ${index === 6 ? "" : "border-b" }  border-gray-700`}
            >
              <span className="uppercase">{card}</span>{" "}
              <span>{fitLogCard[card as keyof TypeData]}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h1 className="text-4xl">Instruction</h1>

          <div>
            {fitLogCard.instructions.map(
              (instruction: string, index: number) => (
                <div key={index}>
                  <div className="flex gap-2 items-center mt-3 text-gray-600 dark:text-gray-300">
                    <span>{index + 1}</span>
                    <p>{instruction}</p>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="flex items-center gap-10 mt-10 ">
          <button className="px-3 py-2 bg-amber-400 text-black rounded-2xl flex justify-center items-center gap-2"> <span className="size-4  rounded-full border border-black "></span> Add to todays is play</button>
          <button className="px-3 py-2  dark:text-white rounded-2xl flex justify-center items-center gap-2 outline"> <CiBookmark/> Save for latter</button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default FitLogCardDetails;
