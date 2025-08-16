import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cryptorepair1 from '../public/assets/cryptorepair1.jpg';
import Lcube1 from '../public/assets/lcube1.png';
import Kaplan1 from '../public/assets/kaplan1.png';
import Slingshot1 from '../public/assets/slingshot1.png';
import GG1 from '../public/assets/gg1.jpg';
import Sky1 from '../public/assets/sky1.png';
import Badge1 from '../public/assets/badge1.png';
import Badge2 from '../public/assets/badge2.png';
import Badge3 from '../public/assets/badge3.png';
import Badge4 from '../public/assets/badge4.png';
import Badge5 from '../public/assets/badge5.png';
import Badge6 from '../public/assets/badge6.png';
import Badge7 from '../public/assets/badge7.png';
import Badge8 from '../public/assets/badge8.png';


const Projects = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      id="projects"
      className="w-full px-[30px] lg:px-[10vw] mt-[20px] lg:mt-[80px]"
    >
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="flex flex-col gap-3 my-5"
      >
        <div className="uppercase">
          <h2 className="font-normal text-center lg:text-left text-lg tracking-[8px] text-neutral-400">
            Business
          </h2>
        </div>
        <div className="uppercase">
          <h3 className="text-center lg:text-left text-3xl lg:text-[40px] leading-none w-[100%] font-bold lg:whitespace-normal text-neutral-900 ml-[-5px]">
            My Works
          </h3>
        </div>
      </div>


      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="my-10 grid md:grid-cols-2 grid-cols-1 gap-4"
      >

        <Link href="/projects/cryptorepair">
          <div className="h-[220px] md:h-[22vw] relative duration-500 ease-in-out group hover:cursor-pointer">
            <div className="absolute text-sm md:text-lg top-[3%] left-[3%] z-[3] bg-neutral-100 px-2 py-1 group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white duration-300">
              2021
            </div>
            <div className="absolute w-full h-full bg-neutral-300 opacity-90 z-[1] duration-300 group-hover:opacity-0"></div>
            <Image
              src={Cryptorepair1}
              // src="https://repository-images.githubusercontent.com/431815358/fac7e016-1285-4399-afc9-d1f252b28dca"
              alt="cryptorepair"
              layout="fill"
              className="group-hover:grayscale-0 grayscale duration-300"
              objectFit="cover"
            />
            <div className="absolute w-full h-full z-[2] flex p-5 gap-3 flex-col justify-center items-center duration-300 group-hover:hidden">
              <h2 className="font-bold text-neutral-900 text-xl md:text-3xl uppercase text-center">
                Cryptorepair
              </h2>
              <h2 className="font-medium text-center text-neutral-600 leading-[20px] text-base">
                Technology Business.
              </h2>
              <div className="flex gap-2">
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  DevOps
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  Linux Admin
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  Networking
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  Developer
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/projects/lcube">
          <div className="h-[220px] md:h-[22vw] relative duration-500 ease-in-out group hover:cursor-pointer">
            <div className="absolute text-sm md:text-lg top-[3%] left-[3%] z-[3] bg-neutral-100 px-2 py-1 group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white duration-300">
              2024
            </div>
            <div className="absolute w-full h-full bg-neutral-300 opacity-90 z-[1] duration-300 group-hover:opacity-0"></div>
            <Image
              src={Lcube1}
              // src="https://lcubestudios.io/img/banners/default_white_opengraph.png"
              alt="Lcube"
              layout="fill"
              className="group-hover:grayscale-0 grayscale duration-300"
              objectFit="cover"
            />
            <div className="absolute w-full h-full z-[2] flex p-5 gap-3 flex-col justify-center items-center duration-300 group-hover:hidden">
              <h2 className="font-bold text-neutral-900 text-xl md:text-3xl uppercase text-center">
                Lcube Studios
              </h2>
              <h2 className="font-medium text-center text-neutral-600 leading-[20px] text-base">
                Technology Business.
              </h2>
              <div className="flex gap-2">
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  DevOps
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  Backend
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  APIs
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  Linux Admin
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/projects/kaplan">
          <div className="h-[220px] md:h-[22vw] relative duration-500 ease-in-out group hover:cursor-pointer">
            <div className="absolute text-sm md:text-lg top-[3%] left-[3%] z-[3] bg-neutral-100 px-2 py-1 group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white duration-300">
              2021
            </div>
            <div className="absolute w-full h-full bg-neutral-300 opacity-90 z-[1] duration-300 group-hover:opacity-0"></div>
            <Image
              src={Kaplan1}
              // src="https://repository-images.githubusercontent.com/431815358/fac7e016-1285-4399-afc9-d1f252b28dca"
              alt="kaplan"
              layout="fill"
              className="group-hover:grayscale-0 grayscale duration-300"
              objectFit="cover"
            />
            <div className="absolute w-full h-full z-[2] flex p-5 gap-3 flex-col justify-center items-center duration-300 group-hover:hidden">
              <h2 className="font-bold text-neutral-900 text-xl md:text-3xl uppercase text-center">
                Kaplan
              </h2>
              <h2 className="font-medium text-center text-neutral-600 leading-[20px] text-base">
                Healthcare Business.
              </h2>
              <div className="flex gap-2">
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  DevOps
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  Cyber Security
                </div>
                {/* {/* <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  NETWORKING
                </div> */}
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  Linux Admin
                </div> 
              </div>
            </div>
          </div>
        </Link>

        <Link href="/projects/slingshot">
          <div className="h-[220px] md:h-[22vw] relative duration-500 ease-in-out group hover:cursor-pointer">
            <div className="absolute text-sm md:text-lg top-[3%] left-[3%] z-[3] bg-neutral-100 px-2 py-1 group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white duration-300">
              2021
            </div>
            <div className="absolute w-full h-full bg-neutral-300 opacity-90 z-[1] duration-300 group-hover:opacity-0"></div>
            <Image
              src={Slingshot1}
              // src="https://repository-images.githubusercontent.com/431815358/fac7e016-1285-4399-afc9-d1f252b28dca"
              alt="slingshot"
              layout="fill"
              className="group-hover:grayscale-0 grayscale duration-300"
              objectFit="cover"
            />
            <div className="absolute w-full h-full z-[2] flex p-5 gap-3 flex-col justify-center items-center duration-300 group-hover:hidden">
              <h2 className="font-bold text-neutral-900 text-xl md:text-3xl uppercase text-center">
                Slingshot
              </h2>
              <h2 className="font-medium text-center text-neutral-600 leading-[20px] text-base">
                Telecommunication Business.
              </h2>
              <div className="flex gap-2">
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  Developer
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  DevOps
                </div>
              </div>
            </div>
          </div>
        </Link>


        <Link href="/projects/givinggap">
          <div className="h-[220px] md:h-[22vw] relative duration-500 ease-in-out group hover:cursor-pointer">
            <div className="absolute text-sm md:text-lg top-[3%] left-[3%] z-[3] bg-neutral-100 px-2 py-1 group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white duration-300">
              2021
            </div>
            <div className="absolute w-full h-full bg-neutral-300 opacity-90 z-[1] duration-300 group-hover:opacity-0"></div>
            <Image
              src={GG1}
              // src="https://repository-images.githubusercontent.com/431815358/fac7e016-1285-4399-afc9-d1f252b28dca"
              alt="givingap"
              layout="fill"
              className="group-hover:grayscale-0 grayscale duration-300"
              objectFit="cover"
            />
            <div className="absolute w-full h-full z-[2] flex p-5 gap-3 flex-col justify-center items-center duration-300 group-hover:hidden">
              <h2 className="font-bold text-neutral-900 text-xl md:text-3xl uppercase text-center">
                Giving Gap
              </h2>
              <h2 className="font-medium text-center text-neutral-600 leading-[20px] text-base">
                Philantrophy.
              </h2>
              <div className="flex gap-2">
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  DevOps
                </div>
                {/* <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  LINUX ADMIN
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  NETWORKING
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  DEVELOPING
                </div> */}
              </div>
            </div>
          </div>
        </Link>

        <Link href="/projects/skytechnosa">
          <div className="h-[220px] md:h-[22vw] relative duration-500 ease-in-out group hover:cursor-pointer">
            <div className="absolute text-sm md:text-lg top-[3%] left-[3%] z-[3] bg-neutral-100 px-2 py-1 group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white duration-300">
              2019
            </div>
            <div className="absolute w-full h-full bg-neutral-300 opacity-90 z-[1] duration-300 group-hover:opacity-0"></div>
            <Image
              src={Sky1}
              // src="https://repository-images.githubusercontent.com/431815358/fac7e016-1285-4399-afc9-d1f252b28dca"
              alt="skytechnosa"
              layout="fill"
              className="group-hover:grayscale-0 grayscale duration-300"
              objectFit="cover"
            />
            <div className="absolute w-full h-full z-[2] flex p-5 gap-3 flex-col justify-center items-center duration-300 group-hover:hidden">
              <h2 className="font-bold text-neutral-900 text-xl md:text-3xl uppercase text-center">
                Skytechnosa
              </h2>
              <h2 className="font-medium text-center text-neutral-600 leading-[20px] text-base">
                Networking & Cybersecurity Business.
              </h2>
              <div className="flex gap-2">
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  NOC Networking Operation Center
                </div>
                {/* <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  LINUX ADMIN
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  NETWORKING
                </div>
                <div className="bg-neutral-900 text-xs text-white px-2 py-1 ">
                  DEVELOPING
                </div> */}
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="mt-[80px] w-full text-center"
      >
        <h2 className="text-2xl font-bold text-neutral-900 my-3">
          Badges
        </h2>
        {/* <Link href="https://www.credly.com/users/dennys-cedeno/badges#credly" target="_blank" rel="noreferrer">
          <button className="p-3 border-2 border-neutral-400 hover:-translate-y-2 duration-300 text-neutral-500">
            View my Bages in Credly
          </button>
        </Link> */}

        <div>
          <div className="mt-4"></div>
        </div>
        {/* New badges row */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-5">
          <Image
            src={Badge1}
            alt="Badge1"
            width={130}
            height={130}
            className="rounded shadow"
          />
          <Image
            src={Badge2}
            alt="Badge2"
            width={130}
            height={130}
            className="rounded shadow"
          />
          <Image
            src={Badge3}
            alt="Badge3"
            width={130}
            height={130}
            className="rounded shadow"
          />
          <Image
            src={Badge4}
            alt="Badge4"
            width={130}
            height={130}
            className="rounded shadow"
          />
          <Image
            src={Badge5}
            alt="Badge5"
            width={130}
            height={130}
            className="rounded shadow"
          />
          <Image
            src={Badge6}
            alt="Badge6"
            width={130}
            height={130}
            className="rounded shadow"
          />
          <Image
            src={Badge7}
            alt="Badge7"
            width={130}
            height={130}
            className="rounded shadow"
          />
          <Image
            src={Badge8}
            alt="Badge8"
            width={130}
            height={130}
            className="rounded shadow"
          />
        </div>

        <div>
          <div className="mt-4"></div>
          <div className="mt-4"></div>
        </div>
        <Link href="https://www.credly.com/users/dennys-cedeno/badges#credly" target="_blank" rel="noreferrer">
          <button className="p-3 border-2 border-neutral-400 hover:-translate-y-2 duration-300 text-neutral-500">
            View my Bages in Credly
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Projects;
