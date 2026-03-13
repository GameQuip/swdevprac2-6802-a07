"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Banner() {
  const router = useRouter();
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);

  return (
    <div
      className="relative w-full h-[50vh] overflow-hidden flex flex-col justify-center items-center text-center text-white cursor-pointer"
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      <Image
        src={covers[index]}
        alt="Event Venue Banner"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 brightness-[60%]"
      />
      <div className="z-10 px-4">
        <h1 className="text-3xl md:text-[2.5rem] font-bold m-0 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          where every event finds its venue
        </h1>
        <p className="text-base md:text-[1.2rem] mt-[10px] font-light drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)] max-w-2xl">
          Finding the perfect venue has never been easier. Whether it's a
          wedding, corporate event, or private party, we connecting people to
          the perfect place.
        </p>
      </div>

      <button
        className="absolute bottom-5 right-5 z-20 bg-white text-cyan-600 text-xl px-4 py-2 rounded-md font-semibold hover:bg-cyan-100 hover:scale-105 transition duration-300"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </div>
  );
}
