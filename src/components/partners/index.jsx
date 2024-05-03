import Image from "next/image";
import { useState, useEffect } from "react";
import partnerBanner from '../../../public/images/trusted partner.jpg'
import { partnerLogos } from "./partner_logos";
import Modal from "../partnerApplicationForm";
import ButtonAnimation from "../AnimatedButton/ButtonAnimation";
export default function PartnersComponent() {
    const firstLine = partnerLogos.slice(0, 4);
    const secLine = partnerLogos.slice(4, 8);
    const thirdLine = partnerLogos.slice(8, 10);
    const [showModal, setShowModal] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        setShowBanner(true);
    }, []);

    return (
        <>
            <div className="px-4 ss:px-4 lg:px-16 inter mt-[60px] sm:mt-[100px]">
                <h1 className="rany text-4xl font-semibold lg:text-7xl callcenter-h1 text-black italic ">
                    Our Trusted  Partners
                </h1>
                <div className="mt-[35px] partner-banner-container">
                    <Image className={`w-full lg:h-[450px] xs:h-[250px] md:h-[400px] sm:h-[400px] ss:h-[350px] h-[250px] rounded-half-banner object-fill	 partner-banner ${showBanner ? 'show' : ''}`} src={partnerBanner} alt="partner1" />
                </div>
                <p className="font-normal inter lg:text-[16px] leading-8 partner-para text-justify mt-5 text-black">
                    At Smilax Global, we are proud to work alongside some of the best and most innovative companies in the industry.
                    Our partners share our values and commitment to excellence, and together we strive to deliver the highest quality
                    products and services to our customers. On this page, we would like to acknowledge and thank our valued partners
                    for their ongoing support and collaboration. We believe that by working together, we can achieve great things
                    and make a positive impact on the world.
                    We invite you to learn more about our partners and the important work that we do together.

                </p>
                <div className="flex flex-col  mt-[47px] ss:px-[50px] xl:px-[0px] partner-logos">
                    <div className="flex justify-center">
                        {firstLine.map((i) => (
                            <div>
                                <Image className='  mt-2' src={i.image} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-[19px]">
                        {secLine.map((i) => (
                            <div>
                                <Image className=' mt-2' src={i.image} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center  mt-[19px]">
                        {thirdLine.map((i) => (
                            <div>
                                <Image className='mt-2' src={i.image} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-[50px] sm:mt-[58px]">
                    <div onClick={() => setShowModal(true)}>
                        <ButtonAnimation text={"Be a partner with us"} classes={"font-medium text-[14px] py-2 normal-case text-black flex justify-center mt-[50px] sm:mt-[58px] border-2 border-[rgba(28, 29, 32, 0.175)] border-solid px-4 rounded-[2.125em] md:py-1 md:rounded-[2.125em] hover:text-white mt-[13px] h-[4.25em] flex justify-center items-center"} />
                    </div>
                    {/* <button onClick={() => setShowModal(true)} className="font-medium text-[14px] py-2 normal-case text-black flex justify-center mt-[50px] sm:mt-[58px] border-black border-2 border-solid px-4 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-[13px]  ">
                        Be a partner with us
                    </button> */}
                </div>
                {showModal &&
                    <Modal onClose={() => setShowModal(false)}>
                        Partner Application
                    </Modal>
                }
            </div>
        </>
    )
}