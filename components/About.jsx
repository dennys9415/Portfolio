import React from 'react';
import Image from 'next/dist/client/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Photo2 from '../public/assets/profile2.jpg';
import Photo3 from '../public/assets/profile3.jpg';
import Photo4 from '../public/assets/profile4.jpg';

const About = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="w-full">
      <div className="my-[140px] px-[30px] lg:px-[10vw]">
        <div className="flex mx-auto flex-col gap-6 w-full lg:w-[80%]">
          <div className="uppercase">
            <h2 className="font-normal text-center text-lg tracking-[8px] text-neutral-400">
              Who am I
            </h2>
          </div>
          <div>
            <h3 className="text-center text-3xl font-bold lg:text-[3.1vw] leading-none w-[100%] text-neutral-900">
              Hello! My name is Dennys Cedeno and I`m a DevOps Engineer.
              My company {' '}
              <a
                className="font-bold text-neutral-500 hover:text-neutral-900 underline"
                href="https://thesingularitybox.com"
                target="_blank"
              >
                Singularity Box
              </a>{' '} Specialized in building
              the best Projects for you!
            </h3>
          </div>
          <div className="">
            <h2 className="font-normal text-center text-xl text-neutral-400">
              Telecommunications and DevOps engineer with extensive 
              experience in networking, programming, cybersecurity, 
              server administration, and cloud solutions (AWS, Azure). 
              Certified in multiple platforms, with the ability to design, 
              implement, and maintain robust technological infrastructures. 
              Expert in Docker, WebSockets, web application development, 
              and Linux environment maintenance.
              
            </h2>
          </div>
        </div>
        <div className="my-[100px] mx-auto w-[300px] h-[350px] sm:w-[500px] sm:h-[450px] lg:w-[800px] lg:h-[680px] relative overflow-hidden">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="absolute z-[1] top-0 left-0 w-[200px] h-[150px] sm:w-[300px] sm:h-[220px] lg:w-[500px] lg:h-[400px]"
          >
            <Image
              src={Photo2}
              placeholder="blur"
              objectFit="cover"
              layout="fill"
              className="grayscale"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="absolute z-[2] bottom-[100px] lg:bottom-[20%] right-0 w-[180px] h-[150px] sm:w-[280px] sm:h-[200px] lg:w-[450px] lg:h-[400px]"
          >
            <Image
              src={Photo3}
              placeholder="blur"
              objectFit="cover"
              layout="fill"
              className="grayscale"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="absolute z-[3] bottom-[20px] sm:bottom-0 lg:bottom-0 left-[15%] w-[170px] h-[120px] sm:w-[250px] sm:h-[180px] lg:w-[350px] lg:h-[235px]"
          >
            <Image
              src={Photo4}
              placeholder="blur"
              objectFit="cover"
              layout="fill"
              className="grayscale"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="mb-[260px] flex flex-col md:flex-row gap-20 mx-auto w-[80%]"
        >

          <div className="w-full text-center">
            <div className="uppercase">
              <h2 className="font-normal text-center text-lg tracking-[8px] text-neutral-400">
                Scripting & Development
              </h2>
            </div>
            <div className="">
              <h2 className="font-bold text-center text-lg tracking-[2px] text-neutral-900">
                Python{' '}
                <span className="text-neutral-400">-</span> PHP{' '}
                <span className="text-neutral-400">-</span> Bash{' '}
                <span className="text-neutral-400">-</span> REST API Development{' '}
                <span className="text-neutral-400">-</span> SQL{' '}
                <span className="text-neutral-400">-</span> React{' '}
                <span className="text-neutral-400">-</span> Next.js
              </h2>
            </div>

            <div>
              <div className="mt-4"></div>
            </div>

            <div className="uppercase">
              <h2 className="font-normal text-center text-lg tracking-[8px] text-neutral-400">
                Monitoring & Security
              </h2>
            </div>
            <div className="">
              <h2 className="font-bold text-center text-lg tracking-[2px] text-neutral-900">
                Grafana{' '} 
                <span className="text-neutral-400">-</span> Prometheus{' '}
                <span className="text-neutral-400">-</span> Orca Security{' '}
                <span className="text-neutral-400">-</span> Qualys{' '}
                <span className="text-neutral-400">-</span> Fortinet{' '}
                <span className="text-neutral-400">-</span> Cisco{' '}
                <span className="text-neutral-400">-</span> Kibana
              </h2>
            </div>
          </div>

          <div className="w-full text-center">
            <div className="uppercase">
              <h2 className="font-normal text-center text-lg tracking-[8px] text-neutral-400">
                DevOps Tools
              </h2>
            </div>
            <div className="">
              <h2 className="font-bold text-center text-lg tracking-[2px] text-neutral-900">
                Visual Studio Code{' '}
                <span className="text-neutral-400">-</span> Jenkins{' '}
                <span className="text-neutral-400">-</span> Docker{' '}
                <span className="text-neutral-400">-</span> Docker Compose{' '}
                <span className="text-neutral-400">-</span> Kubernetes{' '}
                <span className="text-neutral-400">-</span> Git{' '}
                <span className="text-neutral-400">-</span> Ansible{' '}
                <span className="text-neutral-400">-</span> Terraform{' '}
                <span className="text-neutral-400">-</span> Mysql{' '}
                <span className="text-neutral-400">-</span> Postgres{' '}
                <span className="text-neutral-400">-</span> Postman
              </h2>
            </div>
          {/* </div> */}

            <div>
              <div className="mt-4"></div>
            </div>
            
            <div className="uppercase">
              <h2 className="font-normal text-center text-lg tracking-[8px] text-neutral-400">
                Cloud Technologies
              </h2>
            </div>
            <div className="">
              <h2 className="font-bold text-center text-lg tracking-[2px] text-neutral-900">
                AWS{' '} 
                <span className="text-neutral-400">-</span> Microsoft Azure{' '}
                <span className="text-neutral-400">-</span> Linode{' '}
                <span className="text-neutral-400">-</span> Cloudflare
              </h2>
            </div>
          {/* </div> */}
            <div>
              <div className="mt-4"></div>
            </div>
            
            <div className="uppercase">
              <h2 className="font-normal text-center text-lg tracking-[8px] text-neutral-400">
                Networking
              </h2>
            </div>
            <div className="">
              <h2 className="font-bold text-center text-lg tracking-[2px] text-neutral-900">
                SD-WAN{' '} 
                <span className="text-neutral-400">-</span> SD-WAN{' '}
                <span className="text-neutral-400">-</span> OSPF{' '}
                <span className="text-neutral-400">-</span> BGP{' '}
                <span className="text-neutral-400">-</span> EIGRP{' '}
                <span className="text-neutral-400">-</span> RIP
              </h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
