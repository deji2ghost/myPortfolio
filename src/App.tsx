import React from 'react';
import { useMediaQuery } from 'react-responsive';
import GeneralLayout from './layout/GeneralLayout/GeneralLayout';
// import logo from './logo.svg';
import Projects from './shared/Projects/Projects';
import GroupOfSkills from './shared/GroupOfSkills/GroupOfSkills';
import HeroSection from './shared/HeroSection/HeroSection';
import Line from './shared/Line/Line';
import { Toaster } from 'react-hot-toast';
function App() {

  const skills = [
    {
      title:'Html',
      yearsOfExp:2,
    },
    {
      title:'Css',
      yearsOfExp:2,
    },
    {
      title:'Javascript',
      yearsOfExp:2,
    },
    {
      title:'Typescript',
      yearsOfExp:2,
    },
    {
      title:'React',
      yearsOfExp:2,
    },
    {
      title:'Tailwind Css',
      yearsOfExp:2,
    },
    {
      title:'NextJS',
      yearsOfExp:2,
    },
  ]
  const isTab = useMediaQuery({
    query: '(min-width: 600px)'
  })

  return (
    <GeneralLayout>
      <Toaster />
      <HeroSection/>
      {
        !isTab?
          <>
            <br />
            <br /> 
          </>
          :''
      }
      <Line/>
      <br />
      <GroupOfSkills  skills={skills}/>
      {
        isTab?'':
          <>
            <br />
            <Line/>
            <br />
            <br />
            
          </>
      
      }
      <br />
      <Projects/>
    </GeneralLayout>
  );
}

export default App;
