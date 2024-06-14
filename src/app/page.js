"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const dialogRef = useRef(null);

  const handleClick = () => {
    setOpenDialog(!openDialog);
  };

  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      setOpenDialog(false);
    }
  };

  useEffect(() => {
    if (openDialog) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDialog]);

  return (
    <div className="flex justify-center items-center my-10">
      <div className="relative">
        <div
          className="bg-cover bg-center transition-all duration-300 relative w-96 h-96 sm:w-[700px] sm:h-[700px] grayscale opacity-80"
          style={{
            backgroundImage: `url(/images/fairgrounds.jpg)`,
          }}
        ></div>
        <div
          onClick={handleClick}
          className="transition-all duration-300 absolute top-[100px] left-[100px] sm:top-52 sm:left-52 cursor-pointer bg-purple text-white p-5 w-10 h-10 rounded-full hover:scale-150"
        ></div>
      </div>
      <dialog ref={dialogRef} className="w-96 h-80 shadow-xl" open={openDialog}>
        <div
          className="bg-cover bg-center h-20 w-full"
          style={{
            backgroundImage: `url(/images/restaurant.jpg)`,
          }}
        ></div>
        <div className="p-5">
          <h2 className="font-bold text-lg">Duis aute irure dolor in</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link
            href="https://seatgeek.com/breeders-cup-tickets"
            target="_blank"
            className="w-full bg-purple block text-center text-white py-3 mt-2 transition-all duration-300 border border-purple hover:bg-transparent hover:text-purple"
          >
            Buy Now
          </Link>
        </div>
        <button
          className="absolute -top-3 -right-3 bg-white w-8 h-8 flex items-center justify-center rounded-full"
          onClick={handleClick}
        >
          <RiCloseLargeFill />
        </button>
      </dialog>
    </div>
  );
}
