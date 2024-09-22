import Carousel from "../../components/other/Carousel";
import photo1 from "../../assets/1.jpg";
import photo5 from "../../assets/5.jpg";
import photo11 from "../../assets/11.jpg";
import photo8 from "../../assets/8.jpg";
import Statistic from "../../components/other/Statistic";
export default function Home() {
  return (
    <div className="container ">
      <div className="carousel my-1 bg-white h-80">
        <Carousel />
      </div>
      <div className="bg-[#faa500] shadow-xl w-full rounded-lg flex gap-10 flex-wrap p-8 lg:p-16 my-1">
        <div className=" flex-1 flex flex-col gap-7 lg:gap-14">
          <div className="">
            <p className="text-xl lg:text-3xl text-[#193c8c] md:leading-[28px] leading-[36px] lg:leading-[48px]">
              <span className="bg-[#193c8c] p-2 rounded text-white font-extrabold">
                TELEFONCHI.UZ
              </span>{" "}
              — bu smartfonlar savdosiga ixtisoslashgan do'konlar tarmog'i.
            </p>
          </div>
          <div className="flex justify-between flex-col items-center gap-7 overflow-hidden">
            <div className="flex-1">
              <img
                style={{ borderStartStartRadius: "100px" }}
                src={photo1}
                alt="market"
                className="flex-1 border-white border-[10px] object-cover h-[300px]"
              />
            </div>
            <div className="flex-1">
              <img
                style={{ borderEndEndRadius: "100px" }}
                src={photo5}
                alt="market"
                className="flex-1 border-white border-[10px] object-cover  h-[300px]"
              />
            </div>
          </div>
        </div>
        <div className=" flex-1 flex flex-col-reverse lg:flex-col gap-7 lg:gap-14">
          <div className="flex justify-between flex-col items-center gap-7 overflow-hidden">
            <div className="flex-1">
              <img
                style={{ borderStartStartRadius: "100px" }}
                src={photo8}
                alt="market"
                className="flex-1 border-white border-[10px] object-cover h-[300px]"
              />
            </div>
            <div className="flex-1">
              <img
                style={{ borderEndEndRadius: "100px" }}
                src={photo11}
                alt="market"
                className="flex-1 border-white border-[10px] object-cover  h-[300px]"
              />
            </div>
          </div>
          <div className="">
            <p className="text-xl lg:text-3xl text-[#193c8c] md:leading-[28px] leading-[36px] lg:leading-[48px]">
              <span className="bg-[#193c8c] p-2 rounded text-white font-extrabold">
                TELEFONCHI.UZ
              </span>{" "}
              — da xohlagan turdagi smartfonlarni topa olasiz.
            </p>
          </div>
        </div>
      </div>
      <div className="my-1 ">
        <div className="flex gap-3 ">
          <div className="flex flex-col gap-3">
            <Statistic title="Mijozlar soni" value={50000} />
            <Statistic title="Oylik smartfonlar sotuvi" value={1000} />
          </div>
          <div className="flex flex-col gap-3">
            <Statistic title="Xodimlar soni" value={50} />
            <Statistic title="Ochilgan tarmoqlar soni" value={20} />
          </div>
        </div>
      </div>
      <div className="my-1 bg-[#193c8c] p-8 lg:p-16 shadow-xl w-full rounded-lg">
        <div className="flex items-center justify-center">
          <p className="p-3 text-white text-xl lg:text-3xl rounded font-extrabold bg-[#faa500]">
            KICHIK TARIXIMIZ
          </p>
        </div>
        <div className="flex">
          <div className="border-[5px] rounded w-2 lg:h-[60vh] h-[65vh] border-[#Faa500] relative">
            <span className="absolute border-[10px] rounded-full top-2 left-[-10px]"></span>
            <span className="absolute border-[10px] rounded-full top-28 left-[-10px]"></span>
            <span className="absolute border-[10px] rounded-full bottom-32 left-[-10px]"></span>
            <span className="absolute border-[10px] rounded-full bottom-2 left-[-10px]"></span>
          </div>
          <div className="text-[#faa500] lg:text-2xl text-xl pl-3 flex flex-col justify-between gap-1 w-full lg:w-[50%]">
            <p>
              <span className="p-1 bg-[#faa500] text-[#fff] font-bold rounded">
                2021
              </span>
              <br />
              <span className="font-semibold text-white">Telefonchi.uz</span>`ga
              asos solindi.
            </p>
            <p>
              <span className="p-1 bg-[#faa500] text-[#fff] font-bold rounded">
                2022
              </span>
              <br />
              Savdo nuqtalari soni 10 ga yetdi.
            </p>
            <p>
              <span className="p-1 bg-[#faa500] text-[#fff] font-bold rounded">
                2023
              </span>
              <br />9 ta viloyatda
              <span className="font-semibold text-white">
                Telefonchi.uz
              </span>{" "}
              do'konlari faoliyat yurita boshadi va savdo nuqtalari soni 20 taga
              yetdi.
            </p>
            <p>
              <span className="p-1 bg-[#faa500] text-[#fff] font-bold rounded">
                2024
              </span>
              <br />
              Toshkent shahrida ilk katta
              <span className="font-semibold text-white">Showroom</span>{" "}
              ochildi.
            </p>
          </div>
          <div className="w-[50%] hidden lg:flex items-center justify-center p-2">
            <img src={photo1} alt="img" className="border-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
