import React from 'react'
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaGitAlt, FaGears } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Reveal from '@/utils/Reveal';


function ServicesSection({ skillsRefProps }) {
  return (
    <div ref={skillsRefProps} className='w-full bg-lightBlue py-12 px-5 sm:px-20 lg:px-28 font-Outfit'>
      <Reveal>
      <h1 className='text-4xl mb-10 text-blue font-semibold'>My skillset</h1>
      </Reveal>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-12 pb-20 gap-10 place-items-center'>
        <Reveal>
          <div className='flex flex-col items-center bg-stone-100 rounded-md w-[125px] sm:w-[200px] hover:shadow-lg transition-all duration-500 text-blue hover:text-darkBlue'>
            <IoLogoHtml5 size={100} className='h-[125px] sm:h-[200px]'/>
            <p className='sm:text-2xl sm:font-semibold text-xl text-medium h-[40px] sm:h-[62px] w-full flex items-center justify-center bg-white'>HTML 5</p>
          </div>
        </Reveal>
        <Reveal>
          <div className='flex flex-col items-center bg-stone-100 rounded-md w-[125px] sm:w-[200px] hover:shadow-lg transition-all duration-500 text-blue hover:text-darkBlue'>
            <IoLogoCss3 size={100} className='h-[125px] sm:h-[200px]'/>
            <p className='sm:text-2xl sm:font-semibold text-xl text-medium h-[40px] sm:h-[62px] w-full flex items-center justify-center bg-white'>CSS 3</p>
          </div>
        </Reveal>
        <Reveal>
          <div className='flex flex-col items-center bg-stone-100 rounded-md w-[125px] sm:w-[200px] hover:shadow-lg transition-all duration-500 text-blue hover:text-darkBlue'>
            <IoLogoJavascript size={100} className='h-[125px] sm:h-[200px]'/>
            <p className='sm:text-2xl sm:font-semibold text-xl text-medium h-[40px] sm:h-[62px] w-full flex items-center justify-center bg-white'>JavaScript</p>
          </div>
        </Reveal>
        <Reveal>
          <div className='flex flex-col items-center bg-stone-100 rounded-md w-[125px] sm:w-[200px] hover:shadow-lg transition-all duration-500 text-blue hover:text-darkBlue'>
            <IoLogoReact size={100} className='h-[125px] sm:h-[200px]'/>
            <p className='sm:text-2xl sm:font-semibold text-xl text-medium h-[40px] sm:h-[62px] w-full flex items-center justify-center bg-white'>React</p>
          </div>
        </Reveal>
        <Reveal>
          <div className='flex flex-col items-center bg-stone-100 rounded-md w-[125px] sm:w-[200px] hover:shadow-lg transition-all duration-500 text-blue hover:text-darkBlue'>
            <SiNextdotjs size={100} className='h-[125px] sm:h-[200px]'/>
            <p className='sm:text-2xl sm:font-semibold text-xl text-medium h-[40px] sm:h-[62px] w-full flex items-center justify-center bg-white'>Next</p>
          </div>
        </Reveal>
        <Reveal>
          <div className='flex flex-col items-center bg-stone-100 rounded-md w-[125px] sm:w-[200px] hover:shadow-lg transition-all duration-500 text-blue hover:text-darkBlue'>
            <SiTailwindcss size={100} className='h-[125px] sm:h-[200px]'/>
            <p className='sm:text-2xl sm:font-semibold text-xl text-medium h-[40px] sm:h-[62px] w-full flex items-center justify-center bg-white'>Tailwind</p>
          </div>
        </Reveal>
        <Reveal>
          <div className='flex flex-col items-center bg-stone-100 rounded-md w-[125px] sm:w-[200px] hover:shadow-lg transition-all duration-500 text-blue hover:text-darkBlue'>
            <FaGitAlt size={100} className='h-[125px] sm:h-[200px]'/>
            <p className='sm:text-2xl sm:font-semibold text-xl text-medium h-[40px] sm:h-[62px] w-full flex items-center justify-center bg-white'>Git</p>
          </div>
        </Reveal>
        <Reveal>
          <div className='flex flex-col items-center bg-stone-100 rounded-md w-[125px] sm:w-[200px] hover:shadow-lg transition-all duration-500 text-blue hover:text-darkBlue'>
            <FaGithub size={100} className='h-[125px] sm:h-[200px]'/>
            <p className='sm:text-2xl sm:font-semibold text-xl text-medium h-[40px] sm:h-[62px] w-full flex items-center justify-center bg-white'>Github</p>
          </div>
        </Reveal>
        <Reveal>
          <div className='flex flex-col items-center bg-stone-100 rounded-md w-[125px] sm:w-[200px] hover:shadow-lg transition-all duration-500 text-blue hover:text-darkBlue'>
            <IoLogoFirebase size={100} className='h-[125px] sm:h-[200px]'/>
            <p className='sm:text-2xl sm:font-semibold text-xl text-medium h-[40px] sm:h-[62px] w-full flex items-center justify-center bg-white'>Firebase</p>
          </div>
        </Reveal>
        <Reveal>
          <div className='flex flex-col items-center bg-stone-100 rounded-md w-[125px] sm:w-[200px] hover:shadow-lg transition-all duration-500 text-blue hover:text-darkBlue'>
            <FaGears size={100} className='h-[125px] sm:h-[200px]'/>
            <p className='sm:text-2xl sm:font-semibold text-xl text-medium h-[40px] sm:h-[62px] w-full flex items-center justify-center bg-white'>RESTful APIs</p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default ServicesSection