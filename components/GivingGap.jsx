import React from 'react'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";
import GivingGap1 from '../public/assets/gg1.jpg';
import GivingGap2 from '../public/assets/gg2.jpg';

const GivingGap = () => {
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
              <h2 className="font-black text-neutral-900 text-3xl md:text-5xl">Giving Gap</h2>
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
                        * Introduces processes, tools, and methods to create an optimal software development lifecycle, oversee code releases and deployments.
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        * Design, build, test, and maintain the continuous integration and continuous delivery (CI/CD) process.
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        * Automate different phases of the DevOps pipeline, monitoring systems for malicious activity.
                    </h2>
                    <h2 className='font-normal text-lg text-neutral-900'>
                        * Manage the IT infrastructure and ensure system availability, integrate and connect application elements (APIs, libraries, SDKs, etc.).
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
                        <a href='https://givinggap.org/' target="_blank" rel="noreferrer">GivingGap</a>
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
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>Working as Contractor by Lcube Studios.</p>
                  <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>Giving Gap exists to advance racial equity in giving and mobilize positive action for Black lives by connecting people to causes they care about. We are building the movement for the equitable funding of Black-founded nonprofits.</p>
                  {/* <p className='text-neutral-400 text-xl lg:text-2xl mb-8'>If I am not mistaken, it took a month to finish the whole part. Even, I used help from Bootstrap 5 haha. Apart from that, I was so proud while doing this project. It forced me to learn more about DreadOut 2, gather lots of information from the dev, learn deeply about the gameplay itself and so forth.</p> */}
              </div>
          </div>
        </div>
        <div className='my-[120px] flex flex-col w-full gap-8 lg:gap-14'>
            {/* <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[91vh] relative'> */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[70vh] relative'>
                <Image
                    src={GivingGap1}
                    alt='cover'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            {/* <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[90vh] relative'> */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='w-full h-[200px] lg:h-[60vh] relative'>
                <Image
                    // src="https://raw.githubusercontent.com/fransachmadhw/DreadOut2_Website/main/Images/1.JPG"
                    src={GivingGap2}
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

export default GivingGap