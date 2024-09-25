import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import teamMember1 from '../../assets/team1.jpg'; // Jamoa a'zolarining tasvirlari
// import teamMember2 from '../../assets/team2.jpg'; // Jamoa a'zolarining tasvirlari
// import teamMember3 from '../../assets/team3.jpg'; // Jamoa a'zolarining tasvirlari
import phoneImage from "../../assets/1.jpg"; // Telefon rasmini qo'shing
import UzbekistanMap from "../../assets/UzbekistanMap.svg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container ">
      {/* Header qismi */}
      <div className="text-center my-8" data-aos="fade-down">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#193c8c]">
          Biz haqimizda
        </h1>
        <p className="text-xl lg:text-2xl text-[#faa500] mt-4">
          TELEFONCHI.UZ - Smartfonlar savdosiga ixtisoslashgan do‘konlar
          tarmog‘i
        </p>
      </div>

      {/* Ma'lumot qismi */}
      <div className="my-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-lg lg:text-xl" data-aos="fade-right">
          <p>
            <strong>TELEFONCHI.UZ</strong> 2021-yilda asos solingan bo‘lib,
            smartfonlar savdosiga ixtisoslashgan eng yirik do‘konlar tarmog‘idan
            biridir. O‘z faoliyati davomida, mijozlarimizga yuqori sifatli
            xizmat ko‘rsatish va sifatli mahsulotlar taqdim etishni maqsad
            qilganmiz.
          </p>
          <p className="mt-4">
            2022-yilda bizning savdo nuqtalarimiz soni 10 taga yetdi va{" "}
            <strong>TELEFONCHI.UZ</strong>
            O‘zbekistonning bir nechta viloyatlarida do‘konlarini ochishni davom
            ettirmoqda. Bizning asosiy maqsadimiz mijozlarimizning talablarini
            qondirish va ularga eng yaxshi texnologik mahsulotlarni taqdim
            etishdir.
          </p>
          <p className="mt-4">
            2023-yilda savdo nuqtalarimiz soni 20 taga yetdi va 9 ta viloyatda
            faoliyat yuritishni boshladik. Yana ko‘plab yutuqlarga erishib,
            bizning maqsadimiz O‘zbekistondagi eng yaxshi smartfonlar yetkazib
            beruvchisi bo‘lishdir.
          </p>
        </div>
        <div className="flex items-center justify-center" data-aos="fade-left">
          <img
            src={phoneImage}
            alt="Telefonchi"
            className="rounded-lg shadow-lg object-cover h-80 w-full lg:w-4/5"
          />
        </div>
      </div>

      {/* Jamoa bo'limi */}
      <div className="my-8" data-aos="zoom-in">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#193c8c] text-center mb-8">
          Bizning Jamoa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            {/* <img src={teamMember1} alt="Jamoa a'zosi" className="rounded-full h-40 w-40 mx-auto mb-4" /> */}
            <h3 className="text-xl font-semibold text-[#193c8c]">
              Ism Familiya
            </h3>
            <p className="text-[#faa500]">Bosh direktor</p>
          </div>
          <div>
            {/* <img src={teamMember2} alt="Jamoa a'zosi" className="rounded-full h-40 w-40 mx-auto mb-4" /> */}
            <h3 className="text-xl font-semibold text-[#193c8c]">
              Ism Familiya
            </h3>
            <p className="text-[#faa500]">Marketing menejeri</p>
          </div>
          <div>
            {/* <img src={teamMember3} alt="Jamoa a'zosi" className="rounded-full h-40 w-40 mx-auto mb-4" /> */}
            <h3 className="text-xl font-semibold text-[#193c8c]">
              Ism Familiya
            </h3>
            <p className="text-[#faa500]">Texnologiyalar bo‘yicha direktor</p>
          </div>
        </div>
      </div>
      <div
        className="bg-[#faa500] text-white p-8 rounded-lg shadow-lg my-8"
        data-aos="fade-up"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Bizning qadriyatlarimiz
        </h2>
        <ul className="list-disc pl-5 space-y-3 text-lg lg:text-xl">
          <li>Mijozlarga sodiqlik va ularga qulay xizmat ko‘rsatish</li>
          <li>Faqat yuqori sifatli mahsulotlar taqdim etish</li>
          <li>Doimiy ravishda texnologik yutuqlarni kuzatib borish</li>
          <li>Yuqori darajada xizmat ko‘rsatish</li>
        </ul>
      </div>
      <div className="">
        <img src={UzbekistanMap} alt="" />
      </div>
    </div>
  );
}
