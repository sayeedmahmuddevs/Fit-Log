"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";


function NavBar() {

     const pathname = usePathname();

const linkClass = (path: string) =>
  pathname === path
    ? "bg-gray-800 text-amber-400 px-2 rounded-2xl py-0.5 outline outline-gray-700"
    : "hover:bg-gray-800 hover:text-amber-400 rounded-2xl py-0.5 px-2 hover:outline outline-gray-700";

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-5">
      <div className="flex justify-between items-center container mx-auto dark:bg-black bg-gray-300 py-5">
        <Link href="/" className="flex gap-2">
          <Image
            src={logo}
            alt="Fitness logo"
            width={300}
            height={100}
            className="w-[30px] h-auto rotate-90"
          />

          <h1 className="text-2xl uppercase font-bold">Fitlog</h1>
        </Link>

        <ul className="flex gap-5">
          <Link href="/" className={linkClass("/")}>
            Workouts
          </Link>
          <Link href="/My-Plane" className={linkClass('/My-Plane')}>
            My-plans
          </Link>
        </ul>

        <div className="flex gap-5">
          <button className="flex gap-2 items-center">
            <span>Saved</span>
            <span className=" px-3 rounded-3xl bg-amber-300 text-black">2</span>
          </button>

          <button className="flex gap-2 items-center">
            <span>Plans</span>
            <span className=" px-3 rounded-3xl border-2 border-white text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
