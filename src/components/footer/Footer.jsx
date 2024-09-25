import { Link } from "react-router-dom";
import logo from "../../assets/logoBlack.svg";
import SocialButtons from "../other/SocialButtons";
export default function Footer() {
  return (
    <footer className=" bg-[#193c8c]">
      <div className="container py-5 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img className="w-[250px]" src={logo} alt="Telefonchi uz" />
        </Link>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4">
          2021 — yilda tashkil topgan
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialButtons />
        </span>
      </div>
    </footer>
  );
}
