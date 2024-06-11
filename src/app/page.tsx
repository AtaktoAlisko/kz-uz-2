"use client";
import Image from "next/image";
import Main from "../components/Main";
import flower from "../../public/images/flower.png";
import flowerSecond from "../../public/images/flowerSecond.png";
import Attendance from "../components/Attendance";
import Date from "../components/Date";
import toi from "../../public/images/toi.png";
import toi2 from "../../public/images/toi2.png";
import Social from "../components/social";
import insta from "../../public/images/insta.png";
import gis from "../../public/images/gis.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import form from "../../public/images/form.png";
import heart from "../../public/images/heart.png";
import Calendar from "@/components/Calendar";
import ToiBagdarlamasi from "../components/ToiBagdarlamasi";
import line from "../../public/images/line.png";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="flex flex-col text-center ">
      <Main />

      <div data-aos="zoom-in" className="mt-[50px]">
        <h2 className=" text-4xl color">Құрметті қонақтар</h2>
        <p className="text-2xl mt-8">Сіздерді қызымыз</p>
        <h2 className="text-5xl mt-8 color mb-3">Мейірімнің</h2>

        <p className="text-2xl ">ұзату тойына арналған</p>
        <p className="text-2xl ">салтанатты ақ</p>
        <p className="text-2xl ">дастарханымыздың қадірлі</p>
        <p className="text-2xl ">қонағы болуға шақырамыз!</p>
      </div>
      <Image className="mt-[-120px]" src={line} alt="line" />

      <div data-aos="fade-right" className="mt-[-150px] mb-[50px] ">
        <h2 className="text-4xl color mb-5">Той салтанаты:</h2>
        <p className="text-3xl mb-3">9 тамыз 2024 жыл</p>
        <p className="text-3xl">Сағат 17:00 басталады</p>
      </div>
      <Calendar />
      <Image className="mt-[-140px]" src={line} alt="line" />

      <div
        className="mt-[-150px] text-3xl leading-relaxed font"
        data-aos="fade-up"
      >
        <h2 data-aos="fade-up" className=" mb-5 text-5xl">
          Той иелері:
        </h2>
        <h2 data-aos="fade-up" className="color text-4xl">
          Зәуірбек - Айгүл
        </h2>
      </div>

      <p className="mt-[50px] text-3xl color">Тойға дейін:</p>
      <Date />

      <div className="  mt-10 text-5xl leading-relaxed font" data-aos="fade-up">
        <p>Мекен-жайымыз:</p>
        <p className="color">Қызылорда облысы</p>
        <p>Жалағаш ауданы</p>
        <p className="color">Ал-нұр</p>
        <p>Мейрамханасы</p>
      </div>

      <div className="flex justify-center gap-10">
        <a href="https://2gis.kz/kyzylorda/firm/70000001082742211">
          <Image
            className="mt-5 mb-10"
            height={50}
            width={50}
            src={insta}
            alt="Instagram"
          />
        </a>
        <a href="https://2gis.kz/kyzylorda/firm/70000001082742211">
          <Image
            className="mt-5 mb-10 gis"
            height={50}
            width={50}
            src={gis}
            alt="GIS"
          />
        </a>
      </div>

      <ToiBagdarlamasi />

      <h2 className="mt-10 mb-5 text-5xl color ">Той хештегі:</h2>
      <div className="text-center text-3xl leading-normal" data-aos="fade-up">
        <p>Егер инстаграм немесе басқа</p>
        <p>әлеуметтік желілерде</p>

        <p>бөлісеңіз,сіздерді осы хештегті</p>
        <p>қолдануды сұраймыз</p>
        <h3 className="text-5xl mt-5 font color">#Дастан_Мейірім</h3>
      </div>

      <h2 className="mt-20 mb-5 text-5xl color ">Дресс код:</h2>
      <div className="flex justify-center gap-20">
        <div>
          <Image
            className="mt-10 mb-10 "
            height={100}
            width={100}
            src={toi}
            alt="calendar"
          />
          <div className="mt-[-25px] text-[25px] font" data-aos="fade-up">
            <p>Ерлер қауымы</p>
            <p>Классикалық</p>
            <p>Костюм</p>
          </div>
        </div>

        <div>
          <Image
            className="mt-10 mb-10 ml-3"
            height={100}
            width={100}
            src={toi2}
            alt="calendar"
          />
          <div className="mt-[-25px] text-[25px] font" data-aos="fade-up">
            <p>Әйелдер қауымы</p>
            <p>Кешкі көйлек</p>
          </div>
        </div>
      </div>
      <Attendance />

      <h2 className="mt-5  text-3xl color font">Табановтар әулеті </h2>
      <p className="text-2xl leading-relaxed mb-10 color font">
        сіздерді күтеді!
      </p>
    </div>
  );
}
