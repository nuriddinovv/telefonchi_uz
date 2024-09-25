import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const locations = [
  {
    address: "Toshkent shahri, Shayxontohur tumani, Xadra dahasi 7",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1098997329956!2d69.2464008!3d41.3260223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef8b285d1eb87%3A0x2a1f37d2cc93d8d9!2sXadra%20dahasi!5e0!3m2!1sen!2sus!4v1685291850533!5m2!1sen!2sus",
    phone: "+998887025523",
  },
  {
    address: "Toshkent shahri, Yunusobod tumani, Bog'ishamol 260А",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.102780091291!2d69.3290875!3d41.3538852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5334fd3781b%3A0xe2712cd589e9f29c!2sSAMPI!5e0!3m2!1sen!2sus!4v1685291875063!5m2!1sen!2sus",
    phone: "+998887025536",
  },
  {
    address: "Toshkent shahri, Yakkasaroy tumani, Bobur bog'i ko'chasi",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1443901096594!2d69.2489411!3d41.2843509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aed13f82d0d%3A0x49770ef457ec5d7f!2sSaodat%20Mall!5e0!3m2!1sen!2sus!4v1685291900638!5m2!1sen!2sus",
    phone: "+998887025518",
  },
  {
    address: "Toshkent shahri, Uchtepa tumani, Zargarlik ko'chasi 10A",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.062697823519!2d69.1731928!3d41.2722482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae892e544419e5%3A0x46bc5a052ee04145!2sGlobus%20Mall!5e0!3m2!1sen!2sus!4v1685291930567!5m2!1sen!2sus",
    phone: "+998887025512",
  },
  {
    address: "Toshkent shahri, Chilonzor tumani, Qatartol ko'chasi",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1421110361687!2d69.2084229!3d41.2919784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a348f319a83%3A0x48e7d3b9787383eb!2sParus%20FEC!5e0!3m2!1sen!2sus!4v1685291952670!5m2!1sen!2sus",
    phone: "+998887025519",
  },
  {
    address: "Toshkent shahri, Shayxontohur tumani, Qoratosh 5A",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.184651970254!2d69.2286514!3d41.3162377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba28832acd7%3A0xf05928b7bdb7ab15!2sSamarqand%20Darvoza!5e0!3m2!1sen!2sus!4v1685291975268!5m2!1sen!2sus",
    phone: "+998887025517",
  },
  {
    address: "Toshkent shahri, Mirobod tumani, Massiv Qoyliq TKAD 17",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.153413444513!2d69.3260913!3d41.2390226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5fdb91706bf7%3A0x9a391b8dfe2aa814!2sCompass!5e0!3m2!1sen!2sus!4v1685292009341!5m2!1sen!2sus",
    phone: "+998887025511",
  },
  {
    address: "Farg'ona viloyati, Beshariq tumani, Oltin vodiy ko'chasi",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.557572278203!2d70.5903814!3d40.4326999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ba9b4de0afeb37%3A0x9605342bccf41f9!2sOltin%20Vodiy%20109!5e0!3m2!1sen!2sus!4v1685292034130!5m2!1sen!2sus",
    phone: "+998887025544",
  },
  {
    address: "Farg'ona viloyati, Farg'ona shahri, Sohibqiron Temur 65A",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.7633307898073!2d71.7744967!3d40.3782201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85b5474c167b%3A0xb1a47bf5b95fe630!2sFlagman%20Osiyo%20Market!5e0!3m2!1sen!2sus!4v1685292058650!5m2!1sen!2sus",
    phone: "+998887025547",
  },
  {
    address:
      'Andijon viloyati, Andijon shahri, "O\'zbegim Trade centre" binosi',
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.4159529820436!2d72.3463071!3d40.7863098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb7b8b67862d4f%3A0xe8e28fe28872209e!2sO%27zbegim%20Trade%20Centre!5e0!3m2!1sen!2sus!4v1685292085530!5m2!1sen!2sus",
    phone: "+998887025553",
  },
];

const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const LocationsList = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestLocation, setNearestLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          findNearestLocation(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert(
            "Geolocation is not enabled. Please enable it to find the nearest location."
          );
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const findNearestLocation = (latitude, longitude) => {
    let nearest = null;
    let minDistance = Infinity;

    locations.forEach((location) => {
      const [lat, lng] = location.locationUrl
        .match(/!3d([-0-9.]+)!4d([-0-9.]+)/)
        .slice(1)
        .map(Number); // Convert to number

      const distance = haversineDistance(latitude, longitude, lat, lng);

      if (distance < minDistance) {
        minDistance = distance;
        nearest = location;
      }
    });

    setNearestLocation(nearest);
  };

  return (
    <div className="container">
      {nearestLocation && (
        <div className="py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <p>Sizga eng yaqin manzilimiz:</p>
          <div className="w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative h-[50vh] lg:h-[70vh]">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 grayscale contrast-125 opacity-40 hover:grayscale-0 hover:opacity-100 hover:contrast-100 transition-all duration-500"
              title="map"
              src={nearestLocation.locationUrl}
            ></iframe>
            <div className="bg-white relative flex flex-col px-6 flex-wrap py-6 rounded shadow-md w-full lg:w-1/2">
              <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                ENG YAQIN MANZIL:
              </h2>
              <p className="mt-1">{nearestLocation.address}</p>
              <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                EMAIL:
              </h2>
              <Link
                to={"mailto:info@telefonchi.uz"}
                className="text-indigo-500 leading-relaxed"
              >
                info@telefonchi.uz
              </Link>
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
      )}
      {locations.map((item, i) => (
        <div key={i} className="py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative h-[50vh] lg:h-[70vh]">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 grayscale contrast-125 opacity-40 hover:grayscale-0 hover:opacity-100 hover:contrast-100 transition-all duration-500"
              title="map"
              src={item.locationUrl}
            ></iframe>
            <div className="bg-white relative flex flex-col px-6 flex-wrap py-6 rounded shadow-md w-full lg:w-1/2">
              <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                MANZIL:
              </h2>
              <p className="mt-1">{item.address}</p>
              <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                EMAIL:
              </h2>
              <Link
                to={"mailto:info@telefonchi.uz"}
                className="text-indigo-500 leading-relaxed"
              >
                info@telefonchi.uz
              </Link>
              <h2 className="title-font text-[18px] font-semibold text-gray-900 tracking-widest">
                TELEFON RAQAM:
              </h2>
              <Link to={`tel:${item.phone}`} className="leading-relaxed">
                {item.phone}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationsList;