'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Error from '../../../public/Text.png'
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import styles from './style.module.scss'
import Menu from '../menu/Menu';
import FooterCurve from '../FooterCurve'
import Footer from '../footer/Footer';


const inter = Inter({ subsets: ['latin'] })

export default function ErrorComponent() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])
  return (
    <>
      <Menu />
      <div ref={container} className={styles.slidingImages}>
        <Image className='w-[282px] h-[141px] sm:w-[642px] sm:h-[354px] mx-auto mt-36' src={Error} alt="error" />
      </div>
      <FooterCurve />
      <Footer />
    </>
  )
}
