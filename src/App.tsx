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
      yearsOfExp:4,
    },
    {
      title:'Css',
      yearsOfExp:4,
    },
    {
      title:'Javascript',
      yearsOfExp:4,
    },
    {
      title:'Typescript',
      yearsOfExp:4,
    },
    {
      title:'React',
      yearsOfExp:4,
    },
    {
      title:'Tailwind Css',
      yearsOfExp:4,
    },
    {
      title:'NextJS',
      yearsOfExp:3,
    },
    {
      title:'NodeJS',
      yearsOfExp:3,
    },
    {
      title:'ExpressJS',
      yearsOfExp:3,
    },
    {
      title:'NestJS',
      yearsOfExp:3,
    },
    {
      title:'Python',
      yearsOfExp:3,
    },
    {
      title:'Django',
      yearsOfExp:3,
    },
    {
      title:'Docker',
      yearsOfExp:3,
    },
    {
      title:'MySQL',
      yearsOfExp:3,
    },
    {
      title:'PostgreSQL',
      yearsOfExp:3,
    },
    {
      title:'MongoDB',
      yearsOfExp:3,
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
