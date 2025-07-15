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
      yearsOfExp:3,
    },
    {
      title:'Css',
      yearsOfExp:3,
    },
    {
      title:'Javascript',
      yearsOfExp:3,
    },
    {
      title:'Typescript',
      yearsOfExp:3,
    },
    {
      title:'React',
      yearsOfExp:3,
    },
    {
      title:'Tailwind Css',
      yearsOfExp:3,
    },
    {
      title:'NextJS',
      yearsOfExp:3,
    },
    {
      title:'NodeJS',
      yearsOfExp:2,
    },
    {
      title:'ExpressJS',
      yearsOfExp:2,
    },
    {
      title:'NestJS',
      yearsOfExp:1,
    },
    {
      title:'MySQL',
      yearsOfExp:2,
    },
    {
      title:'PostgreSQL',
      yearsOfExp:1,
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
