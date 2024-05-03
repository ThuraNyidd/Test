
'use client'
import React from 'react';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import FloatingBtn from '../FloatingBtn/FloatingBtn';

export default function Cookies() {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  return (
    <>
      <div className="pop-upoverlay"></div>
      <div
        className={`cookie-popup rounded-t-3xl h-54 md:h-60 show`}>
        <div className="content px-8">
          <h1 className='text-lg font-medium text-left ss:text-2xl md:text-5xl text-black'>Cookies!</h1>
          <p className='text-sm ss:mb-4 ss:mt-4 md:text-lg text-left md:mb-8 text-black'>
            Welcome to our website! We use cookies to enhance your user experience and improve the
            quality of our site. By clicking &apos;Acccept&apos;, you consent to our use of cookies. To learn more
            about how we use cookies, please read our <Link href='/cookie-policy'><span className='underline underline-offset-8 '>Cookie Policy</span>. </Link>You can also manage your perferences in
            your browser settings. Thank you for visiting!
          </p>
          <div className="actions mb-3">
            <FloatingBtn classes={"font-medium text-[14px] text-black border-black hover:text-black border-solid border-2 px-8 rounded-2xl md:px-20 md:py-1 md:rounded-3xl hover:text-white"} text={"Accept"} disabled={false} onClick={giveCookieConsent} />
            {/* <button className=' font-medium text-[14px] text-black border-black border-solid border-2 px-8 rounded-2xl md:px-20 md:py-1 md:rounded-3xl hover:bg-black hover:text-white' onClick={giveCookieConsent}>Accept</button> */}
            {/* <button className="absolute right-6 top-4" onClick={removeAccept}>
                <CloseIcon />
              </button> */}
          </div>
        </div>
      </div>
    </>
  );
};