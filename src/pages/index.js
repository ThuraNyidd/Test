

import { Inter } from "next/font/google";
import Cookie from "../pages/cookie";
import HomePage from "../pages/Home";
import { useCookies } from 'react-cookie';
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";
import Pagetransition from "../components/pagetransition/PageTransition";
import PageLoader from "./change-client";
import { useEffect, useState } from "react";

export default function Home() {
  const [cookies] = useCookies(["cookieConsent"]);
  const [start,setStart] = useState(false);

  useEffect(()=>{setStart(true)},[])
 

  return (
    <main className="">
      {/* <Header/> */}
      <PageLoader/>
      <HomePage />
      {/* <Curve/> */}
      {start && !cookies.cookieConsent && <Cookie />}
      {/* <ButtonAnimation /> */}
      {/* <Footer/> */}

      {/* <NavSub/> */}
    </main>
  );
}
