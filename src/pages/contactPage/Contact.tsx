import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <section className="text-gray-600 body-font relative  w-full  ">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative h-[50vh] lg:h-[70vh] ">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 grayscale contrast-125 opacity-40 hover:grayscale-0 hover:opacity-100 hover:contrast-100 transition-all duration-500"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.3728449855683!2d69.25067657385232!3d41.282823578722045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af2afb96e27%3A0xade5299004850234!2sShota%20Rustaveli%20ko&#39;chasi%2053%2C%20100100%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1727261062559!5m2!1suz!2s"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full lg:w-1/2">
              <div className=" px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  MANZIL:
                </h2>
                <p className="mt-1">
                  TOSHKENT SHAHAR, SHOTA RUSTAVELI KO'CHASI, 53
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <Link
                  to={"mailto:info@telefonchi.uz"}
                  className="text-indigo-500 leading-relaxed"
                >
                  info@telefonchi.uz
                </Link>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  TELEFON RAQAM
                </h2>
                <Link to={"tel:+998787776777"} className="leading-relaxed">
                  +998 78 777 67 77
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative h-[50vh] lg:h-[70vh] ">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 grayscale contrast-125 opacity-40 hover:grayscale-0 hover:opacity-100 hover:contrast-100 transition-all duration-500"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.3728449855683!2d69.25067657385232!3d41.282823578722045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af2afb96e27%3A0xade5299004850234!2sShota%20Rustaveli%20ko&#39;chasi%2053%2C%20100100%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1727261062559!5m2!1suz!2s"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full lg:w-1/2">
              <div className=" px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  MANZIL:
                </h2>
                <p className="mt-1">
                  TOSHKENT SHAHAR, SHOTA RUSTAVELI KO'CHASI, 53
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <Link
                  to={"mailto:info@telefonchi.uz"}
                  className="text-indigo-500 leading-relaxed"
                >
                  info@telefonchi.uz
                </Link>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  TELEFON RAQAM
                </h2>
                <Link to={"tel:+998787776777"} className="leading-relaxed">
                  +998 78 777 67 77
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
