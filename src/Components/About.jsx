
import img from '../assets/profilePlaceholder.jpg';
import resume from '../assets/JamaulAaronResume.pdf';

const About = () => {
    return (

        <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            <img data-aos="fade-down" src={img} width={290} height={290} className='rounded border-2 p-1 border-blue-500 img_glow' alt="" />
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[40px] font-semibold mb-8 leading-normal text-blue-500 uppercase">Hi there!</h1>
                    <p data-aos="fade-left text-blue-100">
                        My name is Jamaul Aaron, and I am a self-taught full-stack web developer with a focus on front-end development. 
                        For over two years, I have been immersed in the world of coding, continually expanding my skills. 
                        While my expertise lies in front-end technologies, I have ventured into the broader realm of full-stack development. 
                        What drives me is the desire to excel in a professional environment, applying my self-learned knowledge while nurturing further growth.
                    </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button className="neno-button shadow-xl hover:shadow-blue-800/50  text-white border-2 hover:bg-blue-800 border-blue-500 rounded-lg py-4 px-8 uppercase relative text-blue-100 overflow-hidden"
                            onClick={() => window.open(resume, '_blank')}
                            >
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;