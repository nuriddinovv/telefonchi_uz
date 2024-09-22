import { Link, NavLink } from "react-router-dom";
import logoblue from "../../assets/logoBlue.svg";
import logoyellow from "../../assets/logoBlack.svg";
import "./navbar.css";
import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import SocialButtons from "../other/SocialButtons";
import { IoMenu } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

interface NavItem {
  href: string;
  label: string;
}

export default function Navbar() {
  const navData: NavItem[] = [
    { href: "/", label: "Bosh sahifa" },
    { href: "about", label: "Biz haqimizda" },
    { href: "blog", label: "Blog" },
    { href: "socials", label: "Ijtimoiy tarmoqlarimiz" },
    { href: "contact", label: "Bog'lanish" },
  ];
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div className="w-full fixed top-0 shadow-xl z-10 ">
        <div className="container flex items-center justify-between min-h-20">
          <div className="lg:hidden h-[30px]">
            <button
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <span className="text-3xl text-[#193c8c]">
                <IoMenu />
              </span>
            </button>
          </div>
          <div className="">
            <Link to={"/"}>
              <img
                className="w-[200px] lg:w-[250px] "
                src={logoblue}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="lg:hidden h-[30px]">
            <button>
              <Link to={"tel:998999999999"} className="text-3xl text-[#193c8c]">
                <FaPhone />
              </Link>
            </button>
          </div>
          <div className="lg:block hidden">
            <ul className="flex items-center gap-5 list">
              {navData.map(({ href, label }, index) => (
                <li
                  key={index}
                  className="hover:text-[#faa500] transition duration-300 cursor-pointer font-[600] list_link"
                >
                  <NavLink to={href}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-20  inset-0 z-0 bg-white fixed w-full"></div>
      <div className="h-20"></div>
      <div className="card flex justify-content-center">
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          className="bg-[#193c8c]"
        >
          <div className="container flex flex-col justify-between  bg-[#193c8c] overflow-hidden">
            <div>
              <Link to={"/"}>
                <img
                  className="w-[200px] mx-auto"
                  src={logoyellow}
                  alt="Logo"
                />
              </Link>
            </div>
            <div>
              <ul className=" flex flex-col py-4 gap-5 text-white  px-[19px]">
                {navData.map(({ href, label }, index) => (
                  <li
                    key={index}
                    className="hover:text-[#faa500] transition duration-300 cursor-pointer font-[600] list_link_vertical"
                  >
                    <NavLink to={href}>{label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex justify-center mt-[80%]">
              <SocialButtons />
            </div>
            <div className=" text-center py-4 text-white italic">
              <p>EST. 2021 </p>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
}
