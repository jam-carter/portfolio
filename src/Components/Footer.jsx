import {FaGithub, FaLinkedinIn} from "react-icons/fa";
const Footer = () => {
    return (
       <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
        <div className="flex justify-center">
           <div>
             <h2 className="text-[22px] font-semibold text-blue-500 py-2 uppercase">Copyright © 2023. All rights reserved </h2>
            <div className="flex space-x-4 justify-center">
                <a className="text-white hover:text-blue-500 text-blue-100 transition-all duration-150 ease-in-out" href="">
                    <FaGithub/>
                </a>
                <a className="text-white hover:text-blue-500 text-blue-100 transition-all duration-150 ease-in-out " href="">
                    <FaLinkedinIn/>
                </a>
            </div>
           </div>
        </div>
       </footer>

    );
};

export default Footer;