import Image from "next/image"
import logo from "@/assets/logo.png"


function NavBar() {
  return (
    <nav className="mt-5 flex justify-between items-center container mx-auto">
        <div className="flex gap-2">
            <Image 
            src={logo}
            alt="Fitness logo"
            width={30}
            className="rotate-90 text-amber-600"
            
            />
            <h1 className="text-2xl uppercase font-bold">Fitlog</h1>
        </div>

        <ul className="flex gap-5">
            <li className="bg-gray-800 text-amber-400 px-2 rounded-2xl py-0.5 cursor-pointer outline outline-gray-700">Workouts</li>
            <li className="hover:bg-gray-800 hover:text-amber-400 rounded-2xl py-0.5 px-2 cursor-pointer hover:outline outline-gray-700">My-plans</li>
        </ul>

        <div className="flex gap-5">
            <button className="flex gap-2 items-center">
                <span>Saved</span>
                <span className=" px-3 rounded-3xl bg-amber-300 text-black">2</span>
            </button>

            <button className="flex gap-2 items-center">
                <span>Plans</span>
                <span className=" px-3 rounded-3xl border-2 border-white text-white">2</span>
            </button>

        </div>
    </nav>
  )
}

export default NavBar
