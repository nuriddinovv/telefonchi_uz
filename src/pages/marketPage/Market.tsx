import { useEffect } from "react";
import marketimg from "../../assets/market.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Market() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 200,
      delay: 100,
    });
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-duration="3000">
      <div className="flex items-center justify-center">
        <p className="text-center text-5xl italic mt-4 bg-[#193c8c] text-white font-bold rounded p-2 w-fit">
          Tez kunda...
        </p>
      </div>

      <div className="h-[65vh] w-full flex items-center justify-center flex-col">
        <img
          src={marketimg}
          className="w-full sm:h-full sm:w-fit"
          alt="Market preview"
        />
      </div>
    </div>
  );
}
