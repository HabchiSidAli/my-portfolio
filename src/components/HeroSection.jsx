import React from 'react'
import PushyElements from './PushyElements'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link';
import Reveal from '@/utils/Reveal';


function HeroSection({ contactScrollCallback }) {
  return (
    <div className="mx-5 sm:mx-20">
        <PushyElements/>
        <div className="py-20 justify-center items-center xl:gap-16 gap-10 inline-flex flex flex-col-reverse xl:flex-row">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
                <Reveal>
                    <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch text-blue text-[32px] font-normal leading-[30px] font-outfit">Web developer</div>
                        <div className="self-stretch text-blue text-[54px] font-semibold leading-[64px] font-Outfit">I make your ideas come to life</div>
                        <div className="self-stretch text-zinc-800 text-lg font-light font-Switzer leading-[27px]">I'm Sid Ali Habchi, a 27-year-old Front End Web Developer. As a proud Recoded alumni, I merge creativity with technical know-how to fashion seamless and visually striking user experiences. Fueled by a passion for innovation, I thrive on transforming concepts into tangible digital realities, positioning myself at the forefront of the evolving digital landscape.</div>
                    </div>
                </Reveal>
                
                <div className="self-stretch justify-between items-start inline-flex flex-row">
                    <Reveal>
                        <button onClick={() => contactScrollCallback()} className="px-16 py-[13px] bg-blue rounded-[5px] justify-center items-center gap-2.5 flex text-white text-xl font-semibold font-Switzer leading-[30px] transition-all duration-500 hover:bg-darkBlue">
                            Contact
                        </button>
                    </Reveal>
                    <Reveal>
                        <div className="justify-start items-start gap-4 flex">
                            <Link href="https://www.linkedin.com/in/sid-ali-habchi-10216125a/">
                                <button className="w-14 h-14 py-[13px] bg-blue rounded-[5px] justify-center items-center flex max-[500px]:invisible transition-all duration-500 hover:bg-darkBlue">
                                    <FaLinkedin size={35} className='text-white'/>
                                </button>
                            </Link>
                            <Link href="https://github.com/HabchiSidAli">
                                <button className="w-14 h-14 py-[13px] bg-blue rounded-[5px] justify-center items-center flex max-[500px]:invisible transition-all duration-500 hover:bg-darkBlue">
                                    <FaGithub size={35} className='text-white'/>
                                </button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        <div className="grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
            <Reveal>
                <Image className="w-[360px] h-[366.10px] rounded-[20px] object-cover" width={500} height={500} src="/PersonalPhoto.jpg" alt='Sid Ali'/>
            </Reveal>
        </div>
        </div>

    </div>
  )
}

export default HeroSection