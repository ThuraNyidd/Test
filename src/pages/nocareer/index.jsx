'use client'
import Nocareer from './Nocareer.json'
import Lottie from "lottie-react";
import Menu from '../../components/menu/Menu'
import FooterCurve from '../../components/FooterCurve';
import Footer from '../../components/footer/Footer';

export default function NoCareerAni() {
    return (
        <>
            <Menu />
            <div className='grid justify-items-center mb-[219px] mt-[91px]'>
                <div>
                    <Lottie className='w-[325px] h-[325px] md:w-[526px] md:h-[526px]' animationData={Nocareer} loop={false} />
                </div>
                <h1 className='text-[20px] md:text-[35px] font-semibold inter italic text-black'>
                    No job vacancies currently.
                </h1>
            </div>
            <FooterCurve />
            <Footer />
        </>
    )
}