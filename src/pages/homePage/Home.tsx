import Carousel from "../../components/other/Carousel";
import photo1 from "../../assets/1.jpg";
import photo5 from "../../assets/5.jpg";
import photo11 from "../../assets/11.jpg";
import photo8 from "../../assets/8.jpg";
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
      <div className="my-1 bg-[#193c8c] p-8 lg:p-16 shadow-xl w-full rounded-lg">
        <div className="flex items-center justify-center">
          <p className="p-3 text-white text-xl lg:text-3xl rounded font-extrabold bg-[#faa500]">
            KICHIK TARIXIMIZ
          </p>
        </div>
      </div>
    </div>
  );
}
