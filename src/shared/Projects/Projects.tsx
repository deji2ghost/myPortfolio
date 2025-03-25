import { useMediaQuery } from 'react-responsive'
import PortfolioDisplay, { PortfolioDisplayProp } from '../PortfoilioDisplay/PortfolioDisplay'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'
import { ListOFProject, ProjectsContainer, ProjectsHeaderContainer } from './Projects.style'
import EmetricImg  from '../../assets/images/tifi.png'
import meticapp from '../../assets/images/telex.png'
import table from '../../assets/images/Table.png'
import fonu from '../../assets/images/Screenshot (7).png'
import asterisk from '../../assets/images/Screenshot (8).png'
const Projects = ():React.ReactElement=>{
  const isTab = useMediaQuery({
    query: '(min-width: 800px)'
  })

  const porfolio_data:PortfolioDisplayProp[] =[
    {
      accessVariant:isTab?'hover':'static',
      code_url:'#',
      website_url:'https://www.asteriskrd.co/',
      stacks:['Tailwind Css','REACTJS'],
      projectName:'Tifi Video and Audio converter',
      projectImage:asterisk
    },
    {
      accessVariant:isTab?'hover':'static',
      code_url:'#',
      website_url:'https://tifi.tv/',
      stacks:['Tailwind Css','NEXTJS', 'Radix Ui'],
      projectName:'Tifi Video and Audio converter',
      projectImage:EmetricImg
    },
    {
      accessVariant:isTab?'hover':'static',
      code_url:'#',
      website_url:'https://telex.im',
      stacks:['Tailwindcss','NEXTJS', 'Context Api', 'Radix Ui'],
      projectName:'Telex',
      projectImage:meticapp
    },
    {
      accessVariant:isTab?'hover':'static',
      code_url:'#',
      website_url:'https://intellisight-two.vercel.app/',
      stacks:['Next JS','Context Api', 'TailwindCss'],
      projectName:'CoinTable with darkmode.',
      projectImage: table
    },    
    {
      accessVariant:isTab?'hover':'static',
      code_url:'#',
      website_url:'https://fonutaskmanagement.vercel.app/',
      stacks:['Next JS','Redux', "Redux Toolkit", 'TailwindCss'],
      projectName:'CoinTable with darkmode.',
      projectImage: fonu
    },    
  ]
  return (
    <ProjectsContainer>

      <ProjectsHeaderContainer>
        <h2>Projects</h2>
        <UnderLineSpan giveSpace >
          <p>CONTACT ME</p>
        </UnderLineSpan>
        
      </ProjectsHeaderContainer>
      <br /><br />
      <ListOFProject>
        {
          porfolio_data.map((data,index)=>(
            <PortfolioDisplay 
              key={index}
              stacks={data.stacks}
              code_url={data.code_url}
              website_url={data.website_url}
              accessVariant={data.accessVariant}
              projectImage={data.projectImage}
              projectName={data.projectName}
            />
          ))
        }
       
        
        
      </ListOFProject>

     

    </ProjectsContainer>
  )
}

export default Projects