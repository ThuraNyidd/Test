import Image from "next/image";
import { useEffect, useState } from "react";
import { reviewContent } from "./reviewcontent";
import { reviewData } from "./reviewcontent";


export default function ReviewsComponent() {
  const [showContent, setShowContent] = useState([]);
  const [showFullText, setShowFullText] = useState();

  const toggleReadMore = (index) => {
    setShowFullText(index);
  };
  useEffect(() => {
    const delay = 800;
    let timeoutId
    const showNextCard = (index) => {
      if (index < reviewContent.length) {
        timeoutId = setTimeout(() => {
          setShowContent((prev) => [...prev, index]);
          showNextCard(index + 1);
        }, delay);
      }
    };

    showNextCard(0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="px-4 ss:px-4 lg:px-16 mb-10 text-black">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className="rany text-4xl font-semibold lg:text-7xl callcenter-h1 text-black italic ">
            Customer Experiences
          </h1>
          <p className="mt-[15px] md:mt-[31px] inter lg:text-[16px] font-normal review-para text-justify">
            At Smilax Global, we take pride in providing high-quality products and services that meet the needs of our customers. But don&lsquo;t just take our word for it.  Check out what our customers have to say about our products! These reviews are a great way to get a sense of the quality and effectiveness of our offerings, straight from the people who matter most our customers. Take a few minutes to browse our customer reviews and discover what sets us apart.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  mx-2 xl:mx-10  lg:mx-10  md:mx-10  sm:mx-10  ss:mx-5   xs:mx-5 inter ">
        {reviewData?.map((data, index) => (
          <div key={index} className={`mt-3 md:basis-1/2 lg:basis-1/2 reviewdelay${index + 1}`}>
            <div className="flex flex-row  justify-center ">
              <div className="basis-1/4 sm:basis-1/5 xs:basis-1/4 ss:basis-1/4">
                <Image className=" rounded-half bg-[#F2F2F2]  h-20 w-20 xs:h-[100px] xs:w-[100px] ss:h-[100px] ss:w-[100px] sm:h-[120px] sm:w-[120px] lg:h-[120px] lg:w-[120px] xl:h-[120px] xl:w-[120px]  object-cover	" src={data.img} />
              </div>
              <div className="basis-2/3 ms-5 sm:ms-1 md:ms-1 text-black text-[10px] lg:text-[14px] xl:text-base md:text-[14px] sm:text-base ss:text-base xs:text-[12px]">
                <h6 className='font-semibold'>{data.companyname}</h6>
                <p className="text-justify">
                  {showFullText === index ? data.Content : `${data.Content.slice(0, 110)} `}
                </p>

                {
                  showFullText === index ?
                    <button className="text-red-600" onClick={() => toggleReadMore("")}>
                      read less
                    </button>
                    :
                    <button className="text-red-600" onClick={() => toggleReadMore(index)}>
                      read more ...
                    </button>
                }
                {/* <button className="text-red-600" onClick={() => toggleReadMore(index)}>
                  {showFullText === index ? "read less" : "read more ..."}
                </button>
                <button className="text-red-600" onClick={() => toggleReadMore(index)}>
                  {showFullText === index ? "read less" : "read more ..."}
                </button> */}
                <p className="lg:text-xs xl:text-xs md:text-xs sm:text-xs ss:text-xs xs:text-xs text-[8px] font-semibold text-black flex justify-end xs:mb-10">{data.Reviewer}</p>
              </div>
            </div>
          </div>))}
      </div>
      <div>
        <h4 className="text-black text-left lg:text-center mt-10 text-3xl ms-5">Our Impact by the Numbers</h4>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-col-4 sm:grid-cols-4  gap-4 mx-5 lg:mx-48 my-10 justify-center">
        {reviewContent?.map((data, index) => (
          <div key={index}
            className={` text-black justify-self-center team-para mb-5 menber-list ${showContent.includes(index) ? 'show' : ''
              }`} >
            <p className="rany lg:text-6xl xl:text-6xl md:text-6xl sm:text-5xl ss:text-5xl xs:text-5xl text:5xl font-semibold">{data.amount}</p>
            <p className="rany lg:text-2xl xl:text-2xl md:text-2xl sm:text-xl ss:text-xl xs:text-xl text:xl italic font-normal">{data.text1}<br />{data.text2}</p>
          </div>
        ))}
      </div>
    </>
  )
}