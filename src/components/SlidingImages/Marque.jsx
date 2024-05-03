import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueComp = ({ secondTwenty }) => {
    return (
        <div>
            <Marquee
                // key={2}
                speed={30}
                autoFill="true"
                direction="right"
            >
                {secondTwenty.map((data, index) => (
                    <div className="mx-7" key={index}>
                        <Image className="w-full max-h-[60px] h-20 sm:h-24 sm:max-h-24 sliderImage cursor-pointer " width={100} src={data.img} alt="img1" />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default MarqueComp
