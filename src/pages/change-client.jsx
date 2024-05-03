'use client'
import { useRouter } from 'next/router'
import { useState,useEffect } from "react";
import Pagetransition from '../components/pagetransition/PageTransition';


const PageLoader = ()=>{
    const [loading, setLoading] = useState(true);
    const [start,setStart] = useState(false);
    const router = useRouter();
  
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, [1500]);
    }, []);
  
    useEffect(() => {
      setStart(true);
      const handleRouteChangeStart = (url) => {
        if (url !== router.asPath) {
          setLoading(true);
        }
  
      };
  
      const handleRouteChangeComplete = (url) => {
        if (url !== router.asPath) {
          setTimeout(() => {
            setLoading(false);
          }, [1500]);
        }
      };
  
      router.events.on("routeChangeStart", handleRouteChangeStart);
      router.events.on("routeChangeComplete", handleRouteChangeComplete);
  
      // Clean up the event listeners when the component unmounts
      return () => {
        router.events.off("routeChangeStart", handleRouteChangeStart);
        router.events.off("routeChangeComplete", handleRouteChangeComplete);
      };
    }, []);

    return (
        <div>
            {
             
                loading &&    <>
                      <div className="h-full z-[999] absolute top-0 bottom-0  left-0 right-0 w-full bg-red-300 flex-1 -mt-36 ">
                        <Pagetransition />
                      </div>
                    </>
                  
            }
        </div>
    )
}

export default PageLoader