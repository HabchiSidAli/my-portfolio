import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";



export default function Home() {
  const contactRef = useRef()
  const contactScrollCallback = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const projectsRef = useRef()
  const projectScrollCallback = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const skillsRef = useRef()
  const skillsScrollCallback = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar skillsScrollCallback={skillsScrollCallback} contactScrollCallback={contactScrollCallback} projectScrollCallback={projectScrollCallback}/>
      <HeroSection contactScrollCallback={contactScrollCallback}/>
      <ServicesSection skillsRefProps={skillsRef}/>
      <ProjectsSection projectsRefProps={projectsRef}/>
      <ContactSection contactRefProps={contactRef}/>
    </>
  )
}
