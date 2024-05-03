import Link from 'next/link';
import React, { useState } from 'react'
import TextMagnetic from '../Magnetic/TextMagnetic'
import Magnetic from '../Magnetic/Magnetic'

const RoundButton = ({ text, link, about, footer }) => {
    const [enter, setEnter] = useState(false);
    return (
        <Magnetic>
            <div onMouseEnter={() => setEnter("true")}
                onMouseLeave={() => setEnter("false")}
                className="mx-0"
            >
                <span
                    className={`circledButton ${enter === "true" ? "hovered" : enter === "false" && "out"} h-20 w-20 right-14 -bottom-10 sm:h-32 sm:w-32 sm:right-20 sm:-bottom-16 ss:w-32 ss:h-32 ss:-bottom-16 ss:right-12 md:right-20
                   lg:h-40 lg:w-40 ${footer ? "lg:right-38" : "lg:right-44"} lg:-bottom-20
                       rounded-full absolute block duration-500`}
                ></span>
                <div className="relative">
                    <TextMagnetic>
                        <span className={` text-white absolute -top-2 ${about ? "right-[4.6rem]" : "right-16"} sm:right-[6.5rem] sm:-top-3 ss:-top-4 md:right-[6.5rem] ${about ? "lg:right-[13.4rem]" : "lg:right-[6.8rem] "} lg:-top-4`}>
                            <Link href={link} className="circledButton">
                                <h1 className="text-xs sm:text-base ss:text-lg font-inter lg:text-xl ">
                                    {text}
                                </h1>
                            </Link>
                        </span>
                    </TextMagnetic>
                </div>
            </div>
        </Magnetic>
    )
}

export default RoundButton
