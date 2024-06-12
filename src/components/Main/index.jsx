"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./Main.module.scss";
import music from "../../../public/images/music.png";
import muz from "../../assets/muzik.mp3";
import girl from "../../../public/images/girl.png";
import line from "../../../public/images/line.png";

export default function Main() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(muz);
  }, []);

  function play() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <>
      <div className="flex bg-cover bg-center h-screen w-full flex-col items-center relative ">
        <div className="color flex flex-col items-center justify-center text-center text-black absolute top-[40px]">
          <div>
            <div className="mt-[120px] ">
              <h1 className="text-8xl font">Мейірім</h1>
              <h2 className="text-5xl ml-20 mt-3 mb-4 font">Қыз ұзату</h2>
            </div>
            <Image
              className="mr-20"
              src={girl}
              alt="toi"
              width={300}
              height={300}
            />
            <Image className="mt-[-110px] mb-[30px]" src={line} alt="toi" />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="absolute bottom-[280px] right-4 h-[180px] w-[180px]"
            onClick={play}
          >
            <Image
              className={`${isPlaying ? styles["animate-spin"] : ""}`}
              src={music}
              alt="musik"
              width={160}
              height={160}
            />
          </button>
        </div>
      </div>
    </>
  );
}

// CSS in Main.module.scss
