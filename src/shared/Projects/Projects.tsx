import { useMediaQuery } from 'react-responsive'
import PortfolioDisplay, { PortfolioDisplayProp } from '../PortfoilioDisplay/PortfolioDisplay'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'
import { ListOFProject, ProjectsContainer, ProjectsHeaderContainer } from './Projects.style'
import Projectdummy from '../../assets/images/projectdummy.webp'
import checkidImg from '../../assets/images/boilerplates.png'
import EmetricImg  from '../../assets/images/tifi.png'
import meticapp from '../../assets/images/telex.png'
import manna from '../../assets/images/lazyD.png'
const Projects = ():React.ReactElement=>{
  const isTab = useMediaQuery({
    query: '(min-width: 800px)'
  })

  const porfolio_data:PortfolioDisplayProp[] =[
    {
      accessVariant:isTab?'hover':'static',
      code_url:'#',
      website_url:'https://staging.nextjs.boilerplate.hng.tech/',
      stacks:['Tailwindcss','NEXTJS', 'Context Api', 'Radix Ui'],
      projectName:'Boilerplates',
      projectImage:checkidImg
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
      website_url:'https://e-commerce-lilac-two.vercel.app/',
      stacks:['REACT JS','Redux Toolkit', 'TailwindCss'],
      projectName:'LazyD E-commerce store.',
      projectImage:manna
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