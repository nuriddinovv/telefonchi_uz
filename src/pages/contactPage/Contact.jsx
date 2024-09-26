import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InputMask } from "primereact/inputmask";
import AOS from "aos";

const locations = [
  {
    address: "Toshkent shahri, Shayxontohur tumani, Xadra dahasi 7",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1098997329956!2d69.2464008!3d41.3260223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef8b285d1eb87%3A0x2a1f37d2cc93d8d9!2sXadra%20dahasi!5e0!3m2!1sen!2sus!4v1685291850533!5m2!1sen!2sus",
    phone: "+998887025523",
    latitude: 41.3258703,
    longitude: 69.2463422,
  },
  {
    address: "Toshkent shahri, Yunusobod tumani, Bog'ishamol 260А",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.102780091291!2d69.3290875!3d41.3538852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5334fd3781b%3A0xe2712cd589e9f29c!2sSAMPI!5e0!3m2!1sen!2sus!4v1685291875063!5m2!1sen!2sus",
    phone: "+998887025536",
    latitude: 41.3538852,
    longitude: 69.3290875,
  },
  {
    address: "Toshkent shahri, Yakkasaroy tumani, Bobur bog'i ko'chasi",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1443901096594!2d69.2489411!3d41.2843509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aed13f82d0d%3A0x49770ef457ec5d7f!2sSaodat%20Mall!5e0!3m2!1sen!2sus!4v1685291900638!5m2!1sen!2sus",
    phone: "+998887025518",
    latitude: 41.284351,
    longitude: 69.253812,
  },
  {
    address: "Toshkent shahri, Uchtepa tumani, Zargarlik ko'chasi 10A",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.062697823519!2d69.1731928!3d41.2722482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae892e544419e5%3A0x46bc5a052ee04145!2sGlobus%20Mall!5e0!3m2!1sen!2sus!4v1685291930567!5m2!1sen!2sus",
    phone: "+998887025512",
    latitude: 41.2722482,
    longitude: 69.1757677,
  },
  {
    address: "Toshkent shahri, Chilonzor tumani, Qatartol ko'chasi",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1421110361687!2d69.2084229!3d41.2919784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a348f319a83%3A0x48e7d3b9787383eb!2sParus%20FEC!5e0!3m2!1sen!2sus!4v1685291952670!5m2!1sen!2sus",
    phone: "+998887025519",
    latitude: 41.2919784,
    longitude: 69.2109978,
  },
  {
    address: "Toshkent shahri, Shayxontohur tumani, Qoratosh 5A",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.184651970254!2d69.2286514!3d41.3162377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba28832acd7%3A0xf05928b7bdb7ab15!2sSamarqand%20Darvoza!5e0!3m2!1sen!2sus!4v1685291975268!5m2!1sen!2sus",
    phone: "+998887025517",
    latitude: 41.3159557,
    longitude: 69.2313123,
  },
  {
    address: "Toshkent shahri, Mirobod tumani, Massiv Qoyliq TKAD 17",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.153413444513!2d69.3260913!3d41.2390226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5fdb91706bf7%3A0x9a391b8dfe2aa814!2sCompass!5e0!3m2!1sen!2sus!4v1685292009341!5m2!1sen!2sus",
    phone: "+998887025511",
    latitude: 41.2390226,
    longitude: 69.3286662,
  },
  {
    address: "Farg'ona viloyati, Beshariq tumani, Oltin vodiy ko'chasi",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.557572278203!2d70.5903814!3d40.4326999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ba9b4de0afeb37%3A0x9605342bccf41f9!2sOltin%20Vodiy%20109!5e0!3m2!1sen!2sus!4v1685292034130!5m2!1sen!2sus",
    phone: "+998887025544",
    latitude: 40.4326999,
    longitude: 70.5929563,
  },
  {
    address: "Farg'ona viloyati, Furqat tumani, Navbahor ko'chasi",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.557572278203!2d70.5903814!3d40.4326999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ba9b4de0afeb37%3A0x9605342bccf41f9!2sOltin%20Vodiy%20109!5e0!3m2!1sen!2sus!4v1685292034130!5m2!1sen!2sus",
    phone: "+998887025511",
    latitude: 40.4326999,
    longitude: 70.5929563,
  },
  {
    address: "Namangan viloyati, Chortoq tumani, Anvar ko'chasi",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4577035170243!2d70.5120959!3d40.9231048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcd2a4e75baf97%3A0xc06cb25f2249e480!2sXudoyberdi%20Amir%20Xon%20Avlodi!5e0!3m2!1sen!2sus!4v1685292056898!5m2!1sen!2sus",
    phone: "+998887025543",
    latitude: 40.9231048,
    longitude: 70.5151955,
  },
];

const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const Contact = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestLocation, setNearestLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (userLocation) {
      const distances = locations.map((location) => {
        const distance = getDistance(
          userLocation.latitude,
          userLocation.longitude,
          location.latitude,
          location.longitude
        );
        return { ...location, distance };
      });

      distances.sort((a, b) => a.distance - b.distance);
      setNearestLocation(distances[0]);
    }
  }, [userLocation]);

  return (
    <div className="container">
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className="border py-10 rounded mt-6"
      >
        <div className="container mx-auto " data-aos="fade-in">
          <div className="flex flex-wrap">
            <div className="h-full overflow-hidden mx-auto lg:w-1/2">
              <div className="shadow-lg">
                <img
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                  className="h-full w-auto rounded "
                  alt="Contact"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="p-6">
                <h1 className="text-4xl font-light mt-2 text-center">
                  Tezkor aloqa
                </h1>
                <form className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <input
                        className="w-full p-3 border border-gray-300 rounded"
                        type="text"
                        placeholder="Ismingiz..."
                      />
                    </div>

                    <div>
                      <InputMask
                        className="w-full p-3 border border-gray-300 rounded"
                        mask="99-999-9999"
                        placeholder="99-XXX-XXXX"
                      />
                    </div>
                    <div>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded"
                        rows="3"
                        placeholder="Xabar qoldiring..."
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-[#193c8c] to-[#0f2d75] mt-3 text-white px-6 py-2 rounded border-0"
                      >
                        Jo'natish
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mt-10">
              <div className="flex flex-wrap mx-auto justify-center">
                <div
                  className="w-full md:w-1/3 px-4 mb-8"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <Link
                    to={
                      "https://www.google.com/maps/@41.3260223,69.2464008,20z?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D"
                    }
                    target="_blank"
                    className="flex items-center transition-all"
                  >
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                      alt="Address Icon"
                      className="mr-4 "
                    />
                    <div>
                      <h6 className="text-xl  font-bold text-[#193c8c]">
                        Bosh ofis
                      </h6>
                      <p className="hover:text-[#faa500] duration-300">
                        Shayhontohur tumani
                        <br /> Xadra dahasi 7
                      </p>
                    </div>
                  </Link>
                </div>
                <div
                  className="w-full md:w-1/3 px-4 mb-8"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="flex items-center cursor-pointer">
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                      alt="Phone Icon"
                      className="mr-4"
                    />
                    <div>
                      <h6 className="text-xl  font-bold text-[#193c8c]">
                        Telefon raqam
                      </h6>
                      <Link
                        to={"tel:+998887025523"}
                        className="hover:text-[#faa500] duration-300"
                      >
                        +998-88-702-5523
                      </Link>
                      <br />
                      <Link
                        to={"tel:+998887025536"}
                        className="hover:text-[#faa500] duration-300"
                      >
                        +998-88-702-5536
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full md:w-1/3 px-4 mb-8"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="flex items-center">
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                      alt="Email Icon"
                      className="mr-4"
                    />
                    <div>
                      <h6 className="text-xl  font-bold text-[#193c8c]">
                        Email
                      </h6>
                      <Link
                        to={"mailto:info@telefonchi.uz"}
                        className="hover:text-[#faa500] duration-300"
                      >
                        info@telefonchi.uz
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {nearestLocation && (
        <div className="py-10 mx-auto flex sm:flex-nowrap flex-col flex-wrap">
          <p
            className="text-lg md:text-3xl mb-10 font-bold text-center m-2 p-2 bg-[#193c8c] rounded text-white mx-auto w-fit"
            data-aos="zoom-in-right"
          >
            SIZGA ENG YAQIN MANZILIMIZ
          </p>

          <div
            className="w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative h-[50vh] lg:h-[70vh]"
            data-aos="zoom-in-up"
          >
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 grayscale contrast-125 opacity-40 hover:grayscale-0 hover:opacity-100 hover:contrast-100 transition-all duration-500"
              title="map"
              src={nearestLocation.locationUrl}
            ></iframe>
            <div
              className="bg-white relative flex flex-col px-6 flex-wrap py-6 rounded shadow-md w-full lg:w-1/2"
              data-aos="fade-right"
              data-duration="2000"
            >
              <div>
                <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                  Yaqin manzil:
                </h2>
                <p className="mt-1">{nearestLocation.address}</p>
              </div>
              <div>
                <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                  EMAIL:
                </h2>
                <Link
                  to={"mailto:info@telefonchi.uz"}
                  className="text-indigo-500 leading-relaxed"
                >
                  info@telefonchi.uz
                </Link>
              </div>
              <div>
                <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                  TELEFON RAQAM:
                </h2>
                <Link
                  to={`tel:${nearestLocation.phone}`}
                  className="leading-relaxed"
                >
                  {nearestLocation.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-5">
        <p className="text-lg md:text-3xl mb-10 font-bold text-center m-2 p-2 bg-[#193c8c] rounded text-white mx-auto w-fit">
          BARCHA MANZILLARIMIZ
        </p>
        {locations.map((location, i) => (
          <div
            key={i}
            className="py-3 mx-auto flex sm:flex-nowrap flex-wrap"
            data-aos="zoom-out-up"
          >
            <div className="w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative h-[50vh] lg:h-[70vh]">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0 grayscale contrast-125 opacity-40 hover:grayscale-0 hover:opacity-100 hover:contrast-100 transition-all duration-500"
                title="map"
                src={location.locationUrl}
              ></iframe>
              <div
                className="bg-white relative flex flex-col px-6 flex-wrap py-6 rounded shadow-md w-full lg:w-1/2"
                data-aos="fade-right"
                data-duration="2000"
              >
                <div>
                  <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                    MANZIL
                  </h2>
                  <p className="">{location.address}</p>
                </div>
                <div>
                  <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                    EMAIL:
                  </h2>
                  <Link
                    to={"mailto:info@telefonchi.uz"}
                    className="text-indigo-500 leading-relaxed"
                  >
                    info@telefonchi.uz
                  </Link>
                </div>
                <div>
                  <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                    TELEFON RAQAM:
                  </h2>
                  <Link
                    to={`tel:${location.phone}`}
                    className="leading-relaxed"
                  >
                    {location.phone}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
