import style from "../style";
import {discount,robot} from '../assets';
const Hero = () => (
<section id="home" className={`flex md:flex-row flex-col ${style.paddingY}`}>
  <div className={`flex-1 ${style.flexStart}  flex-col xl:px-0 sm:px-16 px-6`}>

  {/* Discount Section */}
    <div className=" flex flex-row items-centre py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${style.paragraph}   ml-2`}>
                <span className="text-white">20%</span> Discount For {"  "}
        <span className="text-white">1 Month</span> Account
        
        </p>
  
    </div>


    <div className="flex flex-row justify-between items-centre w-full">
      <h1>
        The Next
        Payment Method
      </h1>
    </div>


  </div>
</section>
)

export default Hero;
