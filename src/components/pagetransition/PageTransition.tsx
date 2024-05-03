import Image from "next/image"
import callImg1 from '../../../public/bg-2.png'

export default function Pagetransition() {

  return (
    <div>
      <div className="reveal-text">
        <Image className=" my-10 w-full bg-white h-[125vh] xl:w-full xl:h-[120vh] lg:w-full lg:h-[120vh] md:w-full md:h-[120vh] sm:w-full sm:h-[120vh] ss:w-full ss:h-[125vh] xs:w-full xs:h-[125vh] object-cover sm:object-contain" src={callImg1} alt="callImg" />
      </div>
    </div>
  );
}
 