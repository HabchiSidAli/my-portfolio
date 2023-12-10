import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from 'next/link';
import Reveal from '@/utils/Reveal';


function ProjectsSection({ projectsRefProps }) {
  return (
    <div ref={projectsRefProps} className='w-full py-12 px-5 sm:px-20 lg:px-28 font-Outfit'>
        <Reveal>
        <h1 className='text-4xl mb-10 text-blue font-semibold'>What I've worked on so far</h1>
        </Reveal>
        <div className='flex flex-col gap-16 mx-2'>
            <Reveal>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                    <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-md">
                        <Image
                            src='/InnerSpace.png'
                            width={1000}
                            height={1000}
                            alt='InnerSpace'
                            className='hover:scale-105 transition-all duration-500 object-cover w-full h-full'
                        />
                    </div>
                    <div className="flex flex-col justify-around gap-3">
                        <div>
                            <h1 className='font-semibold text-[32px] mb-2 2xl:mb-5'>Inner Space</h1>
                            <p className='text-lg font-Switzer'>Inner Space serves as the culminating project for my graduation from Re:Coded's front-end web development bootcamp, during which I had the opportunity to lead a team of five developers for a brief period. This therapy website allows users to register accounts, schedule appointments with therapists, and engage in chat sessions. My primary focus was on developing the chat feature, in addition to contributing to the creation of various pages on the platform.
                            </p>
                        </div>
                        <div className='flex justify-around'>
                            <Link href="https://innerspace.vercel.app/">
                                <button className="w-32 sm:w-48 py-[13px] bg-blue rounded-[5px] justify-center items-center flex text-white text-xl font-semibold font-Switzer leading-[30px] flex gap-2 transition-all duration-500 hover:bg-darkBlue">
                                    Website <CgWebsite/>
                                </button>
                            </Link>
                            <Link href="https://github.com/202306-NEA-DZ-FEW/online-Therapist">
                                <button className="w-32 sm:w-48 py-[13px] bg-blue rounded-[5px] justify-center items-center flex text-white text-xl font-semibold font-Switzer leading-[30px] flex gap-2 transition-all duration-500 hover:bg-darkBlue">
                                    GitHub <FaGithub />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                    <div className="flex flex-col justify-around gap-3 order-2 xl:order-1">
                        <div>
                            <h1 className='font-semibold text-[32px] mb-2 2xl:mb-5'>MoviPlaza</h1>
                            <p className='text-lg font-Switzer'>MoviPlaza stands out as one of the projects I collaborated on with a small team at Re:Coded, where I gained experience working with APIs. This website provides users with the latest movie releases and offers the ability to filter movies by genre. My primary responsibility for this project centered around the development of the individual movie page.
                            </p>
                        </div>
                        <div className='flex justify-around'>
                            <Link href="https://movie-project-team-404.vercel.app/">
                                <button className="w-32 sm:w-48 py-[13px] bg-blue rounded-[5px] justify-center items-center flex text-white text-xl font-semibold font-Switzer leading-[30px] flex gap-2 transition-all duration-500 hover:bg-darkBlue">
                                    Website <CgWebsite/>
                                </button>
                            </Link>
                            <Link href="https://github.com/202306-NEA-DZ-FEW/movie-project-team_404">
                                <button className="w-32 sm:w-48 py-[13px] bg-blue rounded-[5px] justify-center items-center flex text-white text-xl font-semibold font-Switzer leading-[30px] flex gap-2 transition-all duration-500 hover:bg-darkBlue">
                                    GitHub <FaGithub />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-md order-1 xl:order-2">
                        <Image
                            src='/MoviPlaza.png'
                            width={1000}
                            height={500}
                            alt='MoviPlaza'
                            className='hover:scale-105 transition-all duration-500 object-cover w-full h-full ml-auto'
                        />
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                    <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-md">
                        <Image
                            src='/E-Buy.png'
                            width={1000}
                            height={500}
                            alt='E-Buy'
                            className='hover:scale-105 transition-all duration-500 object-cover w-full h-full'
                        />
                    </div>
                    <div className="flex flex-col justify-around gap-3">
                        <div>
                            <h1 className='font-semibold text-[32px] mb-2 2xl:mb-5'>E-Buy</h1>
                            <p className='text-lg font-Switzer'>E-Buy represents my inaugural project experience at Re:Coded, and it was a gratifying endeavor. E-Buy is an e-commerce platform that enables users to make purchases across a variety of items. Users have the added functionality of filtering items based on criteria such as price, rating, and categories. My primary focus and contribution to this website centered around the development of the filter function.
                            </p>
                        </div>
                        <div className='flex justify-around flex-row'>
                            <Link href="https://e-commerce-project-e-buy.vercel.app">
                                <button className="w-32 sm:w-48 py-[13px] bg-blue rounded-[5px] justify-center items-center flex text-white text-xl font-semibold font-Switzer leading-[30px] flex gap-2 transition-all duration-500 hover:bg-darkBlue">
                                    Website <CgWebsite/>
                                </button>
                            </Link>
                            <Link href="https://github.com/202306-NEA-DZ-FEW/e-commerce-project-e-buy">
                                <button className="w-32 sm:w-48 py-[13px] bg-blue rounded-[5px] justify-center items-center flex text-white text-xl font-semibold font-Switzer leading-[30px] flex gap-2 transition-all duration-500 hover:bg-darkBlue">
                                    GitHub <FaGithub />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    </div>
  )
}

export default ProjectsSection