"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { fitContext } from "@/DataContext/Context";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function NavBar() {
  const pathname = usePathname();
  const { plan, saved, setShow } = useContext(fitContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    pathname === path
      ? "bg-gray-800 text-amber-400 px-3 py-1 rounded-2xl outline outline-gray-700"
      : "hover:bg-gray-800 hover:text-amber-400 rounded-2xl py-1 px-3 hover:outline outline-gray-700";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-300 dark:bg-black border-b border-gray-600">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            <Image
              src={logo}
              alt="Fitness logo"
              width={300}
              height={100}
              className="w-[28px] h-auto rotate-90"
            />

            <h1 className="text-xl sm:text-2xl uppercase font-bold">
              Fitlog
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-3 lg:gap-5">
            <li>
              <Link href="/" className={linkClass("/")}>
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/My-Plane"
                className={linkClass("/My-Plane")}
              >
                My-plans
              </Link>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5 lg:gap-10">
            <div className="flex gap-3 lg:gap-5">
              
              {/* Saved */}
              <button
                onClick={() => setShow(true)}
                className="flex gap-2 items-center cursor-pointer"
              >
                <Link href="/My-Plane">
                  <div className="flex gap-2 items-center">
                    <span>Saved</span>

                    <span className="px-3 py-0.5 rounded-3xl bg-amber-300 text-black">
                      {saved.length}
                    </span>
                  </div>
                </Link>
              </button>

              {/* Plans */}
              <button
                onClick={() => setShow(false)}
                className="cursor-pointer"
              >
                <Link href="/My-Plane">
                  <div className="flex gap-2 items-center">
                    <span>Plans</span>

                    <span className="px-3 py-0.5 rounded-3xl border-2 border-white text-white">
                      {plan.length}
                    </span>
                  </div>
                </Link>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-2xl cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoClose /> : <TiThMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-300 dark:bg-black border-t border-gray-600 shadow-lg">
            <div className="flex flex-col p-5 gap-4">

              {/* Mobile Navigation */}
              <Link
                href="/"
                onClick={closeMenu}
                className={linkClass("/")}
              >
                Workouts
              </Link>

              <Link
                href="/My-Plane"
                onClick={closeMenu}
                className={linkClass("/My-Plane")}
              >
                My-plans
              </Link>

              <div className="border-t border-gray-500 pt-4 flex flex-col gap-4">
                
                {/* Saved */}
                <Link
                  href="/My-Plane"
                  onClick={() => {
                    setShow(true);
                    closeMenu();
                  }}
                  className="flex items-center justify-between"
                >
                  <span>Saved</span>

                  <span className="px-3 py-0.5 rounded-3xl bg-amber-300 text-black">
                    {saved.length}
                  </span>
                </Link>

                {/* Plans */}
                <Link
                  href="/My-Plane"
                  onClick={() => {
                    setShow(false);
                    closeMenu();
                  }}
                  className="flex items-center justify-between"
                >
                  <span>Plans</span>

                  <span className="px-3 py-0.5 rounded-3xl border-2 border-white text-white">
                    {plan.length}
                  </span>
                </Link>

              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
