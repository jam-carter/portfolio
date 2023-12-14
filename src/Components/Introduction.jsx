import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Introduction = () => {
   useEffect(() => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
   },[])
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-center lg:gap-28 items-center">
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[160px] text-blue-100 font-semibold mb-8 leading-normal uppercase">FRONTEND <span className="text-blue-500">DEVELOPER</span></h1>
                <p data-aos="fade-left"></p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div data-aos="fade-up" className="flex space-x-2">
                            <a href="" className="text-blue-100 hover:text-blue-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="" className="text-blue-100 hover:text-blue-500 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            <a href="" className="text-blue-100 hover:text-blue-500 rounded-full glow p-2">
                                <FiTwitter className="text-[28px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;