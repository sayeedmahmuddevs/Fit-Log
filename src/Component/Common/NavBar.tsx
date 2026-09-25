"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { fitContext } from "@/DataContext/Context";

function NavBar() {
  const pathname = usePathname();
  const { plan, saved, setShow } = useContext(fitContext);

  const linkClass = (path: string) =>
    pathname === path
      ? "bg-gray-800 text-amber-400 px-2 rounded-2xl py-0.5 outline outline-gray-700"
      : "hover:bg-gray-800 hover:text-amber-400 rounded-2xl py-0.5 px-2 hover:outline outline-gray-700";

  return (
    <nav className="fixed top-0 left-0 z-50 w-full dark:bg-black bg-gray-300 border-b border-gray-600">
      <div className="flex justify-between items-center container mx-auto  py-5 px-10 ">
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
          <Link href="/My-Plane" className={linkClass("/My-Plane")}>
            My-plans
          </Link>
        </ul>

        <div className="flex gap-5">
          <button
            onClick={() => setShow(true)}
            className="flex gap-2 items-center cursor-pointer"
          >
            <Link href="/My-Plane">
              <div className="flex gap-2 items-center">
                <span>Saved</span>
                <span className=" px-3 rounded-3xl bg-amber-300 text-black">
                  {saved.length}
                </span>
              </div>
            </Link>
          </button>

          <button onClick={() => setShow(false)} className="cursor-pointer">
            <Link href="/My-Plane">
              <div className="flex gap-2 items-center">
                <span>Plans</span>
                <span className=" px-3 rounded-3xl border-2 border-white text-white">
                  {plan.length}
                </span>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
