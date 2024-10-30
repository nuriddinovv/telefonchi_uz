import { Link, NavLink, useLocation } from "react-router-dom";
import logoblue from "../../assets/logoBlue.svg";
import logoyellow from "../../assets/logoBlack.svg";
import "./navbar.css";
import { useEffect, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import SocialButtons from "../other/SocialButtons";
import { IoMenu } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

export default function Navbar() {
  const navData = [
    { href: "/", label: "Bosh sahifa" },
    { href: "about", label: "Biz haqimizda" },
    {
      href: "market",
      label: "Market",
      navIcon: <MdOutlineShoppingCartCheckout />,
    },
    { href: "contact", label: "Bog'lanish" },
  ];
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(false);
  }, [location.pathname]);
  return (
    <>
      <div className="w-full fixed top-0 shadow-lg z-10 bg-white ">
        <div className="container flex items-center justify-between min-h-20 px-6">
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
              <Link to={"tel:+998787776777"} className="text-3xl text-[#193c8c]">
                <FaPhone />
              </Link>
            </button>
          </div>
          <div className="lg:block hidden">
            <ul className="flex items-center gap-5 list">
              {navData.map(({ href, label, navIcon }, index) => (
                <li
                  key={index}
                  className="hover:text-[#faa500] transition duration-300 cursor-pointer font-[600] list_link"
                >
                  <NavLink to={href} className="flex items-center gap-2">
                    {label}{" "}
                    {navIcon ? (
                      <span className="text-[16px]">{navIcon}</span>
                    ) : (
                      ""
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-20  inset-0 z-0 bg-white fixed w-full"></div>
      <div className="h-20"></div>
      <div className="-center">
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
