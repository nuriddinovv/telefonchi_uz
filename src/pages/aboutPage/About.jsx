import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import teamMember1 from "../../assets/teamMember1.png";
import teamMember2 from "../../assets/teamMember2.png";
import teamMember3 from "../../assets/teamMember3.png";
import teamMember4 from "../../assets/teamMember4.png";
import phoneImage from "../../assets/1.jpg";
import map from "../../assets/mapUz.png";
import CountUp from "react-countup";
import { GrUserManager } from "react-icons/gr";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaArrowTurnDown } from "react-icons/fa6";
export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container ">
      {/* Header qismi */}
      <div className="text-center my-8" data-aos="fade-down">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#193c8c]">
          Biz haqimizda
        </h1>
        <p className="text-xl lg:text-2xl text-[#faa500] mt-4">
          TELEFONCHI.UZ - Smartfonlar savdosiga ixtisoslashgan do‘konlar
          tarmog‘i
        </p>
      </div>

      {/* Ma'lumot qismi */}
      {/* <div className="my-8 grid lg:grid-cols-2 gap-10 items-center">
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
      </div> */}

      {/* Jamoa bo'limi */}
      <div className="my-8" data-aos="zoom-in">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#193c8c] text-center mb-8">
          Bizning Jamoa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <div>
            <img
              src={teamMember3}
              alt="Jamoa a'zosi"
              className="rounded-full h-40 w-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#193c8c]">
              Inomxon Axmadxonov
            </h3>
            <p className="text-[#faa500]">Asoschi</p>
          </div>
          <div>
            <img
              src={teamMember4}
              alt="Jamoa a'zosi"
              className="rounded-full h-40 w-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#193c8c]">
              Ism Familiya
            </h3>
            <p className="text-[#faa500]">HR menejeri</p>
          </div>
          <div>
            <img
              src={teamMember2}
              alt="Jamoa a'zosi"
              className="rounded-full h-40 w-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#193c8c]">
              Sardor Soliyev
            </h3>
            <p className="text-[#faa500]">Sotuv bo'limi rahbari</p>
          </div>
          <div>
            <img
              src={teamMember1}
              alt="Jamoa a'zosi"
              className="rounded-full h-40 w-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#193c8c]">
              Mirjalol Sodiqov
            </h3>
            <p className="text-[#faa500]">Toshkent filiallar menejeri</p>
          </div>
        </div>
      </div>
      <div className="px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-bold  mb-4 text-[#193c8c]">
            Hozirgacha erishgan barcha yutuqlarimiz raqamlarda
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-[#193c8c] w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-[#faa500]">
                <CountUp enableScrollSpy={true} start={0} end={50000} /> +
              </h2>
              <p className="leading-relaxed font-bold text-[#193c8c]">
                Mijozlar soni
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <span className="text-[48px] text-[#193c8c] flex justify-center mb-3">
                <GrUserManager />
              </span>
              <h2 className="title-font font-medium text-3xl text-[#faa500]">
                <CountUp enableScrollSpy={true} start={0} end={50} /> +
              </h2>
              <p className="leading-relaxed font-bold text-[#193c8c]">
                Xodimlar soni
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <span className="text-[48px] text-[#193c8c] flex justify-center mb-3">
                <IoPhonePortraitOutline />
              </span>
              <h2 className="title-font font-medium text-3xl text-[#faa500]">
                <CountUp enableScrollSpy={true} start={0} end={1000} /> +
              </h2>
              <p className="leading-relaxed font-bold text-[#193c8c]">
                Oylik smartfonlar sotuvi{" "}
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <span className="text-[48px] text-[#193c8c] flex justify-center mb-3">
                <PiBuildingOfficeLight />
              </span>
              <h2 className="title-font font-medium text-3xl text-[#faa500]">
                <CountUp enableScrollSpy={true} start={0} end={20} />
              </h2>
              <p className="leading-relaxed font-bold text-[#193c8c]">
                Filiallar
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-bold  mb-4 text-[#193c8c]">
            <span className="bg-[#193c8c] text-[#faa500] p-2 rounded">
              TELEFONCHI.UZ
            </span>{" "}
            xaritada
          </h1>
        </div>
        <div className=" flex flex-col-reverse gap-3 lg:flex-row items-center">
          <div className=" flex-1 text-xl">
            <p className="text-2xl text-[#193c8c] font-bold ">
              O'zbekiston bo'ylab 9 ta shaharda savdo nuqtalarimiz mavjud
            </p>
            <p className="flex items-center bg-[#faa500] w-fit p-1 rounded text-white my-5">
              Bulardan <FaArrowTurnDown />
            </p>
            <div className="text-xl">
              <p className="mb-2 text-[#193c8c]">
                Toshkent shahrida –{" "}
                <span className="text-[#faa500] font-bold">7</span> ta filial,
              </p>
              <p className="mb-2 text-[#193c8c]">
                Farg'ona viloyatida –{" "}
                <span className="text-[#faa500] font-bold">3</span> ta filial,
              </p>
              <p className="mb-2 text-[#193c8c]">
                Andijon viloyatida –{" "}
                <span className="text-[#faa500] font-bold">2</span> ta filial,
              </p>
              <p className="mb-2 text-[#193c8c]">
                Jizzax viloyatida –{" "}
                <span className="text-[#faa500] font-bold">1</span> ta filial,
              </p>
              <p className="mb-2 text-[#193c8c]">
                Samarqand viloyatida –{" "}
                <span className="text-[#faa500] font-bold">1</span> ta filial,
              </p>
              <p className="mb-2 text-[#193c8c]">
                Surxandaryo viloyatida –{" "}
                <span className="text-[#faa500] font-bold">1</span> ta filial
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
