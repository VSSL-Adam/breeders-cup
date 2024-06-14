"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";

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
    <div className="flex justify-center items-center mt-20 mb-28">
      <div className="relative rounded-3xl overflow-hidden">
        <div
          className="bg-cover bg-center transition-all duration-300 relative w-96 h-96 sm:w-[700px] sm:h-[500px]  opacity-40"
          style={{
            backgroundImage: `url(/images/fairgrounds.jpg)`,
          }}
        ></div>
        <div
          onClick={handleClick}
          className="flex justify-center items-center transition-all duration-300 absolute top-[130px] left-[100px] sm:top-40 sm:left-52 cursor-pointer text-5xl  text-gold w-10 h-10 rounded-full hover:scale-150"
        >
          <FaMapMarkerAlt />
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="border border-gold w-80 h-96 shadow-xl bg-light_gold"
        open={openDialog}
      >
        <div
          className="bg-cover bg-center h-20 w-full"
          style={{
            backgroundImage: `url(/images/restaurant.jpg)`,
          }}
        ></div>
        <div className="p-8">
          <h2 className="font-bold text-lg text-gold uppercase">
            Duis aute irure dolor in
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link
            href="https://seatgeek.com/breeders-cup-tickets"
            target="_blank"
            className="w-full font-bold bg-gold block text-center text-white py-3 mt-5 transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold"
          >
            Buy Now
          </Link>
        </div>
        <button
          className="border border-gold absolute -top-3 -right-3 bg-gold text-white w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-light_gold hover:text-gold"
          onClick={handleClick}
        >
          <RiCloseLargeFill />
        </button>
      </dialog>
    </div>
  );
}
