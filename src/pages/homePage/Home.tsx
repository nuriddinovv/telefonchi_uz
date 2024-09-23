import Carousel from "../../components/other/Carousel";
import photo1 from "../../assets/1.jpg";
import photo5 from "../../assets/5.jpg";
import photo11 from "../../assets/11.jpg";
import photo8 from "../../assets/8.jpg";
import photo9 from "../../assets/9.jpg";
import photo6 from "../../assets/6.jpg";
import Statistic from "../../components/other/Statistic";
import alifnasiya from "../../assets/alifnasiya.svg";
import uzumnasiya from "../../assets/uzumnasiya.svg";
import imaninvest from "../../assets/imaninvest.svg";
import infinix from "../../assets/infinix.svg";
import mi from "../../assets/mi.png";
import oppo from "../../assets/oppo.svg";
import samsung from "../../assets/samsung.svg";
import vivo from "../../assets/vivo.png";
import "./home.css";
import GallerySection from "../../components/other/Gallery";
export default function Home() {
  return (
    <div className="container ">
      <div className="carousel my-6 bg-white h-80">
        <Carousel />
      </div>
      <div className="bg-[#faa500] shadow-xl w-full rounded-lg flex gap-10 flex-wrap p-8 lg:p-16 my-6">
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
            <div className="flex-1  ">
              <img
                loading="lazy"
                style={{ borderStartStartRadius: "100px" }}
                src={photo1}
                alt="market"
                className="flex-1 lg:min-w-[451px] border-white border-[10px] object-cover h-[300px]"
              />
            </div>
            <div className="flex-1  ">
              <img
                loading="lazy"
                style={{ borderEndEndRadius: "100px" }}
                src={photo5}
                alt="market"
                className="flex-1 lg:min-w-[451px] border-white border-[10px] object-cover  h-[300px]"
              />
            </div>
          </div>
        </div>
        <div className=" flex-1 flex flex-col-reverse lg:flex-col gap-7 lg:gap-14">
          <div className="flex justify-between flex-col items-center gap-7 overflow-hidden">
            <div className="flex-1  ">
              <img
                loading="lazy"
                style={{ borderStartStartRadius: "100px" }}
                src={photo8}
                alt="market"
                className="flex-1 lg:min-w-[451px] border-white border-[10px] object-cover h-[300px]"
              />
            </div>
            <div className="flex-1  ">
              <img
                loading="lazy"
                style={{ borderEndEndRadius: "100px" }}
                src={photo11}
                alt="market"
                className="flex-1 lg:min-w-[451px] border-white border-[10px] object-cover  h-[300px]"
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
      <div className="my-6 text-[#193c8c] p-8 lg:p-16 shadow-xl w-full rounded-lg">
        <div className="flex items-center justify-center">
          <p className="p-3 text-white text-xl lg:text-3xl rounded font-extrabold bg-[#193c8c] mb-4">
            KICHIK TARIXIMIZ
          </p>
        </div>
        <div className="flex">
          <div className="border-[5px] rounded w-2 lg:h-[60vh] h-[65vh] border-[#193c8c] relative">
            <span className="absolute border-[10px] border-[#faa500] rounded-full top-2 left-[-10px]"></span>
            <span className="absolute border-[10px] border-[#faa500] rounded-full top-28 left-[-10px]"></span>
            <span className="absolute border-[10px] border-[#faa500] rounded-full bottom-32 left-[-10px]"></span>
            <span className="absolute border-[10px] border-[#faa500] rounded-full bottom-2 left-[-10px]"></span>
          </div>
          <div className=" lg:text-2xl text-xl pl-3 flex flex-col justify-between gap-1 w-full lg:w-[50%] text-[#193c8c]">
            <p>
              <span className="p-1 bg-[#193c8c] text-[#fff] font-bold rounded">
                2021
              </span>
              <br />
              <span className="font-semibold text-[#faa500]">
                Telefonchi.uz
              </span>
              `ga asos solindi.
            </p>
            <p>
              <span className="p-1 bg-[#193c8c] text-[#fff] font-bold rounded">
                2022
              </span>
              <br />
              Savdo nuqtalari soni 10 ga yetdi.
            </p>
            <p>
              <span className="p-1 bg-[#193c8c] text-[#fff] font-bold rounded">
                2023
              </span>
              <br />9 ta viloyatda
              <span className="font-semibold text-[#faa500]">
                Telefonchi.uz
              </span>{" "}
              do'konlari faoliyat yurita boshadi va savdo nuqtalari soni 20 taga
              yetdi.
            </p>
            <p>
              <span className="p-1 bg-[#193c8c] text-[#fff] font-bold rounded">
                2024
              </span>
              <br />
              Toshkent shahrida ilk katta
              <span className="font-semibold text-[#faa500]">
                Showroom
              </span>{" "}
              ochildi.
            </p>
          </div>
          <div className="w-[50%] hidden lg:flex items-center justify-center p-2">
            <img
              src={photo9}
              alt="img"
              className="border-[10px] border-[#193c8c]"
            />
          </div>
        </div>
      </div>
      <div className="my-6 block lg:grid grid-cols-2 items-center rounded-lg gap-10 shadow-xl p-8 lg:p-16">
        <div className="flex gap-3 justify-center">
          <div className="flex flex-col gap-3 w-full">
            <Statistic title="Mijozlar soni" value={50000} />
            <Statistic title="Oylik smartfonlar sotuvi" value={1000} />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <Statistic title="Xodimlar soni" value={50} />
            <Statistic title="Ochilgan tarmoqlar soni" value={20} />
          </div>
        </div>
        <div className="flex-1 h-full">
          <img
            style={{ borderEndEndRadius: "100px" }}
            src={photo6}
            alt="market"
            className="flex-1 border-[#193c8c] hidden lg:block border-[10px] object-cover  h-full"
          />
        </div>
      </div>
      <div className="my-6 rounded-lg shadow-xl p-8 lg:p-16">
        <div className="flex items-center justify-center ">
          <p className="p-3 text-white text-xl lg:text-3xl rounded font-extrabold bg-[#193c8c] mb-4">
            HAMKORLARIMIZ
          </p>
        </div>
        <div className="flex flex-wrap justify-between lg:gap-4 ">
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img
              className="w-full"
              src="https://static.zoodmall.uz/_nuxt/img/paymentmethod.46479f4.svg"
              alt=""
            />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img
              className="w-full"
              src="https://anorbank.uz/images/logo.svg"
              alt=""
            />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img
              className="w-full"
              src="https://minio.shared.uz.spaceneobank.com/web-tbcbank-uz-strapi-admin-cms/uploads/asset-1.svg"
              alt=""
            />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img
              className="w-full"
              src="https://www.honor.com/content/dam/honor/common/logo/honor-logo-black.svg"
              alt=""
            />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img
              className="w-full"
              src="https://d3fyizz0b46qgr.cloudfront.net/global/x_new/logo.svg"
              alt=""
            />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img
              className="w-full"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA4MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik04LjgzMTU2IDcuMzk2NjFIMi40MDI3NEgwVjkuODAwNzJWMjAuNTg5MUgyLjQwMjc0VjkuODAwNzJIOC44MzE1NlY3LjM5NjYxWiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik00My4yMTcyIDNINDAuODE0NVYyMC41ODlINDMuMjE3MlYzWiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik0zNi4wMDg2IDcuMzk2NThWOS4wMDM0NEMzNi4wMDg2IDkuMDAzNDQgMzUuMjQ3IDcuOTg1MjYgMzMuNzM2MiA3LjQzNTAxQzMzLjAyNjggNy4xOTA3NSAzMi4yNjc5IDcuMDU2MjcgMzEuNDc2MiA3LjA1NjI3QzI3LjY0NjMgNy4wNTYyNyAyNC41NDEgMTAuMTYxNiAyNC41NDEgMTMuOTkxNEMyNC41NDEgMTcuODIxMyAyNy42NDYzIDIwLjkyNjYgMzEuNDc2MiAyMC45MjY2QzMyLjI2NzkgMjAuOTI2NiAzMy4wMjgyIDIwLjc5MjEgMzMuNzM2MiAyMC41NDc5QzM1LjI0NyAxOS45OTkgMzYuMDA3MiAxOC45ODA4IDM2LjAwODYgMTguOTc5NFYyMC41ODYzSDM4LjQxMTNWNy4zOTY1OEgzNi4wMDg2Wk0zMS40NzYyIDE4LjU4NTZDMjguOTM5IDE4LjU4NTYgMjYuODgyIDE2LjUyODcgMjYuODgyIDEzLjk5MTRDMjYuODgyIDExLjQ1NDIgMjguOTM5IDkuMzk3MjcgMzEuNDc2MiA5LjM5NzI3QzM0LjAxMzQgOS4zOTcyNyAzNi4wNzAzIDExLjQ1NDIgMzYuMDcwMyAxMy45OTE0QzM2LjA3MDMgMTYuNTI4NyAzNC4wMTM0IDE4LjU4NTYgMzEuNDc2MiAxOC41ODU2WiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik02NC4xOTU0IDEwLjE0MzdDNjMuNDI1NiA4LjMyMDA1IDYxLjcyOTUgNy4wNTc2MiA1OS41ODM0IDcuMDU3NjJDNTcuNzYxMSA3LjA1NzYyIDU2LjIwNSA3Ljk3MDE0IDU1LjI3NzQgOS4zNjAxOUM1NC40OTUyIDcuOTY4NzcgNTMuMTI4NSA3LjA1NzYyIDUxLjMwNDggNy4wNTc2MkM0OS45MDc5IDcuMDU3NjIgNDguODA0NiA3LjY0MjE4IDQ4LjAyMzggOC41NjU2OFY3LjM5NzkzSDQ1LjYyMTFWMjAuNTg5SDQ4LjAyMzhWMTIuNjQ1M0M0OC4wMjM4IDEyLjAzNDYgNDguMTA2MiAxMS41NTcxIDQ4LjI1NTcgMTEuMjAzMUM0OC43MDQ1IDEwLjE0MjQgNDkuNzU0MiA5LjM5ODYxIDUwLjk3NjggOS4zOTg2MUM1Mi4xOTk1IDkuMzk4NjEgNTMuMjUwNiAxMC4xNDI0IDUzLjY5NzkgMTEuMjAzMUM1My44NDc1IDExLjU1NzEgNTMuOTI5OCAxMi4wMzQ2IDUzLjkyOTggMTIuNjQ1M1YyMC41ODlINTYuMzMyNlYxMi42NDUzQzU2LjMzMjYgMTIuMDM0NiA1Ni40MTQ5IDExLjU1NzEgNTYuNTY0NSAxMS4yMDMxQzU3LjAxMzIgMTAuMTQyNCA1OC4wNjI5IDkuMzk4NjEgNTkuMjg1NiA5LjM5ODYxQzYwLjUwODIgOS4zOTg2MSA2MS41NTkzIDEwLjE0MjQgNjIuMDA2NyAxMS4yMDMxQzYyLjE1NjMgMTEuNTU3MSA2Mi4yMzg2IDEyLjAzNDYgNjIuMjM4NiAxMi42NDUzVjIwLjU4OUg2NC42NDEzVjEzLjAyMjZDNjQuNjQxMyAxMS44NTQ5IDY0LjQ4MzUgMTAuODMzOSA2NC4xOTI2IDEwLjE0MzdINjQuMTk1NFoiIGZpbGw9ImJsYWNrIi8+DQo8cGF0aCBkPSJNMjEuMjY4NiA5LjA0MTg5QzE4LjU5OTYgNi4zOTQ4OSAxNC4wMzU2IDYuMzk0ODkgMTEuMzY4MSA5LjA0MTg5QzguNzIxMDYgMTEuNzEwOCA4LjcyMTA2IDE2LjI3NDggMTEuMzY4MSAxOC45NDI0QzEyLjcwMTkgMjAuMjY1MiAxNC41MTA0IDIwLjkyOCAxNi4zMTkgMjAuOTI4QzE4LjI3MTcgMjAuOTI4IDIwLjIyNDMgMjAuMjY2NiAyMS42NjUxIDE4Ljk0MjRDMjIuMDc1NCAxOC41NTk2IDIyLjQyNCAxOC4xMzU1IDIyLjcxNDkgMTcuNjg0MUwyMC41NTUgMTYuNDM2N0MyMC4zNjI5IDE2LjczNTkgMjAuMTMyNCAxNy4wMTU4IDE5Ljg2MDcgMTcuMjcxQzE4LjkwNTYgMTguMTQ3OSAxNy42MTMgMTguNTg1NiAxNi4zMjA0IDE4LjU4NTZDMTUuMTIyNCAxOC41ODU2IDEzLjkyNDUgMTguMTQ3OSAxMy4wNDA4IDE3LjI3MUMxMi40Mjg4IDE2LjY1NDkgMTIuMDM2MyAxNS44ODM3IDExLjg1MTEgMTUuMDY4NkgyMy4xNjkxQzIzLjQ4NDcgMTIuOTIyNSAyMi44NTc2IDEwLjY0MTkgMjEuMjY5OSA5LjA0MTg5SDIxLjI2ODZaTTExLjg0OTcgMTIuOTE3QzEyLjAzNSAxMi4xMDE5IDEyLjQyNzQgMTEuMzMwNyAxMy4wMzk0IDEwLjcxNDZDMTQuODA2OCA4Ljk2MDkzIDE3LjgyOTggOC45NjIzIDE5LjU5NzIgMTAuNzE0NkMyMC4yMDkyIDExLjMzMjEgMjAuNjA0NCAxMi4xMDE5IDIwLjc4NjkgMTIuOTE3SDExLjg0OTdaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZD0iTTc4LjAyMDUgOS4wNDE4OUM3NS4zNTE2IDYuMzk0ODkgNzAuNzg3NiA2LjM5NDg5IDY4LjEyIDkuMDQxODlDNjUuNDczIDExLjcxMDggNjUuNDczIDE2LjI3NDggNjguMTIgMTguOTQyNEM2OS40NTM4IDIwLjI2NTIgNzEuMjYyNCAyMC45MjggNzMuMDcxIDIwLjkyOEM3NS4wMjM2IDIwLjkyOCA3Ni45NzYzIDIwLjI2NjYgNzguNDE3MSAxOC45NDI0Qzc4LjgyNzQgMTguNTU5NiA3OS4xNzU5IDE4LjEzNTUgNzkuNDY2OCAxNy42ODQxTDc3LjMwNyAxNi40MzY3Qzc3LjExNDkgMTYuNzM1OSA3Ni44ODQzIDE3LjAxNTggNzYuNjEyNiAxNy4yNzFDNzUuNjU3NiAxOC4xNDc5IDc0LjM2NSAxOC41ODU2IDczLjA3MjMgMTguNTg1NkM3MS44NzQ0IDE4LjU4NTYgNzAuNjc2NCAxOC4xNDc5IDY5Ljc5MjcgMTcuMjcxQzY5LjE4MDcgMTYuNjU0OSA2OC43ODgzIDE1Ljg4MzcgNjguNjAzIDE1LjA2ODZINzkuOTIxQzgwLjIzNjcgMTIuOTIyNSA3OS42MDk2IDEwLjY0MTkgNzguMDIxOSA5LjA0MTg5SDc4LjAyMDVaTTY4LjYwMTcgMTIuOTE3QzY4Ljc4NjkgMTIuMTAxOSA2OS4xNzk0IDExLjMzMDcgNjkuNzkxNCAxMC43MTQ2QzcxLjU1ODggOC45NjA5MyA3NC41ODE4IDguOTYyMyA3Ni4zNDkyIDEwLjcxNDZDNzYuOTYxMiAxMS4zMzIxIDc3LjM1NjQgMTIuMTAxOSA3Ny41Mzg5IDEyLjkxN0g2OC42MDE3WiIgZmlsbD0iYmxhY2siLz4NCjwvc3ZnPg0K"
              alt=""
            />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img
              className="w-full"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjM1IiBoZWlnaHQ9IjUxIiB2aWV3Qm94PSIwIDAgMjM1IDUxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNTAzXzI2MjMpIj4KPHBhdGggZD0iTTE5Mi40NjcgMTRWMzYuNzE3NCIgc3Ryb2tlPSIjNzAwMEZGIiBzdHJva2Utd2lkdGg9IjQuNTQzNDgiLz4KPHBhdGggZD0iTTE3NC4yOTMgMTRWMzYuNzE3NCIgc3Ryb2tlPSIjNzAwMEZGIiBzdHJva2Utd2lkdGg9IjQuNTQzNDgiLz4KPHBhdGggZD0iTTE3Ny43MDEgMTIuODY0MUwxODkuMDYgMzcuODUzMyIgc3Ryb2tlPSIjNzAwMEZGIiBzdHJva2Utd2lkdGg9IjQuNTQzNDgiLz4KPC9nPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfNTAzXzI2MjMpIj4KPHBhdGggZD0iTTE2NS4yMDcgMTRWMzYuNzE3NCIgc3Ryb2tlPSIjNzAwMEZGIiBzdHJva2Utd2lkdGg9IjQuNTQzNDgiLz4KPHBhdGggZD0iTTEzOS4wODIgMzcuODUzM0wxNjIuOTM1IDE0IiBzdHJva2U9IiM3MDAwRkYiIHN0cm9rZS13aWR0aD0iNC41NDM0OCIvPgo8L2c+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMl81MDNfMjYyMykiPgo8cGF0aCBkPSJNOTcuMDU0MyAxNFYzNi43MTc0IiBzdHJva2U9IiM3MDAwRkYiIHN0cm9rZS13aWR0aD0iNC41NDM0OCIvPgo8cGF0aCBkPSJNNzAuOTI5MyAzNy44NTMzTDk0Ljc4MjYgMTQiIHN0cm9rZT0iIzcwMDBGRiIgc3Ryb2tlLXdpZHRoPSI0LjU0MzQ4Ii8+CjwvZz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAzXzUwM18yNjIzKSI+CjxwYXRoIGQ9Ik01Ni4xNjMxIDM2LjcxNzRWMTQiIHN0cm9rZT0iIzcwMDBGRiIgc3Ryb2tlLXdpZHRoPSI0LjU0MzQ4Ii8+CjxwYXRoIGQ9Ik04Mi4yODgxIDEyLjg2NDFMNTguNDM0OCAzNi43MTc0IiBzdHJva2U9IiM3MDAwRkYiIHN0cm9rZS13aWR0aD0iNC41NDM0OCIvPgo8L2c+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwNF81MDNfMjYyMykiPgo8cGF0aCBkPSJNMTMzLjQwMiAxNFYzNi43MTc0IiBzdHJva2U9IiM3MDAwRkYiIHN0cm9rZS13aWR0aD0iNC41NDM0OCIvPgo8L2c+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwNV81MDNfMjYyMykiPgo8cGF0aCBkPSJNMTA4LjQxMyAxNi4yNzE4SDExNy41QzEyMS4yNjQgMTYuMjcxOCAxMjQuMzE1IDE5LjMyMzEgMTI0LjMxNSAyMy4wODdWMjMuMDg3QzEyNC4zMTUgMjYuODUwOSAxMjEuMjY0IDI5LjkwMjIgMTE3LjUgMjkuOTAyMkgxMDguNDEzIiBzdHJva2U9IiM3MDAwRkYiIHN0cm9rZS13aWR0aD0iNC41NDM0OCIvPgo8cGF0aCBkPSJNMTA2LjE0MSAxNFYzNi43MTc0IiBzdHJva2U9IiM3MDAwRkYiIHN0cm9rZS13aWR0aD0iNC41NDM0OCIvPgo8cGF0aCBkPSJNMTE5Ljc3MiAyOS45MDIyTDEyNy43MjMgMzcuODUzMyIgc3Ryb2tlPSIjNzAwMEZGIiBzdHJva2Utd2lkdGg9IjQuNTQzNDgiLz4KPC9nPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDZfNTAzXzI2MjMpIj4KPHBhdGggZD0iTTIxMC42NDEgMTRWMzYuNzE3NCIgc3Ryb2tlPSIjNzAwMEZGIiBzdHJva2Utd2lkdGg9IjQuNTQzNDgiLz4KPHBhdGggZD0iTTE5OS4yODMgMTYuMjcxN0wyMjIgMTYuMjcxNyIgc3Ryb2tlPSIjNzAwMEZGIiBzdHJva2Utd2lkdGg9IjQuNTQzNDgiLz4KPC9nPgo8cGF0aCBkPSJNMTUuMjcxNyAxNFYzNi43MTc0IiBzdHJva2U9IiM3MDAwRkYiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iNC41NDM0OCIvPgo8cGF0aCBkPSJNMjQuMzU4NiAxNFYzNi43MTc0IiBzdHJva2U9IiM3MDAwRkYiIHN0cm9rZS1vcGFjaXR5PSIwLjU4IiBzdHJva2Utd2lkdGg9IjQuNTQzNDgiLz4KPHBhdGggZD0iTTMzLjQ0NTcgMTRWMzYuNzE3NCIgc3Ryb2tlPSIjNzAwMEZGIiBzdHJva2Utb3BhY2l0eT0iMC43NiIgc3Ryb2tlLXdpZHRoPSI0LjU0MzQ4Ii8+CjxwYXRoIGQ9Ik00Mi41MzI2IDE0VjM2LjcxNzQiIHN0cm9rZT0iIzcwMDBGRiIgc3Ryb2tlLXdpZHRoPSI0LjU0MzQ4Ii8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzUwM18yNjIzIj4KPHJlY3Qgd2lkdGg9IjIyLjcxNzQiIGhlaWdodD0iMjIuNzE3NCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3Mi4wMjIgMTQpIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfNTAzXzI2MjMiPgo8cmVjdCB3aWR0aD0iMjcuMjYwOSIgaGVpZ2h0PSIyMi43MTc0IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQwLjIxNyAxNCkiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMl81MDNfMjYyMyI+CjxyZWN0IHdpZHRoPSIyNy4yNjA5IiBoZWlnaHQ9IjIyLjcxNzQiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Mi4wNjUyIDE0KSIvPgo8L2NsaXBQYXRoPgo8Y2xpcFBhdGggaWQ9ImNsaXAzXzUwM18yNjIzIj4KPHJlY3Qgd2lkdGg9IjI3LjI2MDkiIGhlaWdodD0iMjIuNzE3NCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgxLjE1MjIgMzYuNzE3NCkgcm90YXRlKC0xODApIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDRfNTAzXzI2MjMiPgo8cmVjdCB3aWR0aD0iNC41NDM0OCIgaGVpZ2h0PSIyMi43MTc0IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMxLjEzIDE0KSIvPgo8L2NsaXBQYXRoPgo8Y2xpcFBhdGggaWQ9ImNsaXA1XzUwM18yNjIzIj4KPHJlY3Qgd2lkdGg9IjIyLjcxNzQiIGhlaWdodD0iMjIuNzE3NCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMy44NyAxNCkiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwNl81MDNfMjYyMyI+CjxyZWN0IHdpZHRoPSIyMi43MTc0IiBoZWlnaHQ9IjIyLjcxNzQiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTkuMjgzIDE0KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
              alt=""
            />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img className="w-full" src={uzumnasiya} alt="" />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img className="w-full" src={imaninvest} alt="" />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img className="w-full" src={infinix} alt="" />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110  shadow h-[100px] flex p-8 items-center justify-center">
            <img className="h-[70px]" src={mi} alt="" />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img className="w-full" src={oppo} alt="" />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img className="w-full" src={samsung} alt="" />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img className="w-full" src={vivo} alt="" />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <img src={alifnasiya} alt="" />
          </div>
          <div className="w-[48%] md:w-[24%] hover:shadow-md transition-all  hover:scale-110 shadow h-[100px] flex p-8 items-center justify-center">
            <p className="font-bold text-center text-2xl sm:text-3xl md:text-5xl">
              POCO
            </p>
          </div>
        </div>
      </div>
      <div className="my-6 rounded-lg shadow-xl p-8 lg:p-16">
        <div className="flex items-center justify-center ">
          <p className="p-3 text-white text-xl lg:text-3xl rounded font-extrabold bg-[#193c8c] mb-4">
            Galereya
          </p>
        </div>
        <div className="">
          <GallerySection />
        </div>
      </div>
    </div>
  );
}
