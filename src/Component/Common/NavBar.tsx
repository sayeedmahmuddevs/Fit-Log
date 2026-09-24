import Image from "next/image"
import logo from "@/assets/logo.png"


function NavBar() {
  return (
    <nav className="mt-5 flex justify-between items-center">
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
            <li>Workouts</li>
            <li>My-plans</li>
        </ul>

        <div className="flex gap-5">
            <button className="flex gap-2 items-center">
                <span>Saved</span>
                <span className=" px-3 rounded-3xl bg-amber-300 text-black">2</span>
            </button>

            <button className="flex gap-2 items-center">
                <span>Plans</span>
                <span className=" px-3 rounded-3xl bg-amber-300 text-black">2</span>
            </button>

        </div>
    </nav>
  )
}

export default NavBar
