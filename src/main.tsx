import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/homePage/Home";
import About from "./pages/aboutPage/About";
import Contact from "./pages/contactPage/Contact";
import Socials from "./pages/socialsPage/Socials";
import Market from "./pages/marketPage/Market";
import "aos/dist/aos.css";
const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "market",
        element: <Market />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "socials",
        element: <Socials />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
