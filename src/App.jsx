
import React from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/heroMain'
import SubHeroSection from './components/heroSection/subHeroSection'
import AboutMeMain from './components/AboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import ContactMemain from './components/contactMeSection/ContactMemain'
import FooterMain from './components/footer/FooterMain'
function App() {


  return (
    <main className='bg-black text-primary  '>
      <NavbarMain/>
      <HeroMain/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ExperienceMain/>
      <ProjectsMain/>
      <ContactMemain/>
      <FooterMain/>
      <HelperSection/>
    </main>
  )
}

export default App
