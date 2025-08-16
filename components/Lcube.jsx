import React from 'react'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";
import Lcube1 from '../public/assets/lcube1.png';
import Lcube2 from '../public/assets/lcube2.png';

const Lcube = () => {
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
  return (
    <div className="w-full">
      <div className="w-full px-[30px] lg:px-[5vw] my-[140px] lg:my-[120px]">
        <div className="w-full mb-2">
          <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
            Company
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">
          <div className="flex flex-col gap-5 lg:gap-10">
            <div className="w-full lg:w-[70%]">
              <h2 className="font-black text-neutral-900 text-3xl md:text-5xl">Lcube Studios</h2>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Ocupations
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        * DevOps
                    </h2>
                    {/* <h2 className='font-normal text-lg text-neutral-900'>
                        * Junior Network Administrator
                    </h2> */}
                    {/* <h2 className='font-normal text-lg text-neutral-900'>
                        SCSS
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Bootstrap 5
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        JavaScript
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Swiper
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        FreezeFrame
                    </h2> */}
                </div>
            </div>

            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Duties
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        * Provide integration support and consulting for on-premise file and object storage platform and cloud data controller                    
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        * Provide day-to-day system administration support to assigned systems, new deployments of systems, test, and maintain system documentation.
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        * Analyze systems and perform usability testing to ensure performance and reliability, enhance scalability, and meet security requirements within Azure Cloud.
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        * Maintain operating efficiency and stability, ensure the security and integrity of all systems and data, and respond to other issues.
                    </h2>
                    {/* <h2 className='font-normal text-lg text-neutral-900'>
                        SCSS
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Bootstrap 5
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        JavaScript
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        Swiper
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        FreezeFrame
                    </h2> */}
                </div>
            </div>

            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Since
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        2024
                    </h2>
                </div>
            </div>

            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Webpage
                </h2>
                <div>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        <a href='https://lcubestudios.io/' target="_blank" rel="noreferrer">Lcube Studios</a>
                    </h2>
                </div>
            </div>
            
            {/* <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Demo
                </h2>
                <div>
                    <a href='https://dreadout2unofficial.netlify.app/' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    View live site here
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-[70%] flex flex-col gap-1">
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                    Code
                </h2>
                <div>
                    <a href='https://github.com/fransachmadhw/DreadOut2_Website' className='hover:underline underline lg:no-underline font-normal text-lg text-neutral-900'>
                    Available on GitHub
                    </a>
                </div>
            </div> */}
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="">
              <div>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>Providing DevOps Services to more companies as a Contractors.</p>
                  {/* <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>If I am not mistaken, it took a month to finish the whole part. Even, I used help from Bootstrap 5 haha. Apart from that, I was so proud while doing this project. It forced me to learn more about DreadOut 2, gather lots of information from the dev, learn deeply about the gameplay itself and so forth.</p> */}
              </div>
          </div>
        </div>
        <div className='my-[120px] flex flex-col w-full gap-8 lg:gap-14'>
            {/* <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[91vh] relative'> */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[70vh] relative'>
                <Image
                    src={Lcube1}
                    alt='cover'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            {/* <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'> */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[60vh] relative'>
                <Image
                    // src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/1.JPG"
                    src={Lcube2}
                    alt='d1'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            {/* <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/2.JPG"
                    alt='d2'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/3.JPG"
                    alt='d3'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/4.JPG"
                    alt='d4'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/5.JPG"
                    alt='d5'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/6.JPG"
                    alt='d6'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'>
                <Image
                    src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/7.JPG"
                    alt='d7'
                    layout='fill'
                    objectFit='cover'
                />
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Lcube