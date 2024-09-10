import { HeroContentContainer, HeroSectionContainer } from './HeroSection.style'
import DevPic from '../../assets/images/image-profile-mobile.webp'
// import DevPicDesktop from '../../assets/images/image-profile-desktop.webp'
import markopics from '../../assets/images/276.jpg'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'
import { useMediaQuery } from 'react-responsive'
import HalfCirlceImg from '../../assets/images/pattern-circle.svg'


const HeroSection =():React.ReactElement=>{
  const isDesktop = useMediaQuery({
    query: '(min-width: 900px)'
  })
  const isTab = useMediaQuery({
    query: '(min-width: 600px)'
  })

  return (
    <HeroSectionContainer>
      <div className='marko_img'>
        {
          isDesktop?
            <img src={markopics}  className='is_desk_main_img' alt="markothedev pics" />
            :
            <img src={markopics}  alt="markothedev pics" />
        }
        {
          isTab?
            <img src={HalfCirlceImg} className='latop_circle' alt="" />
            :''
        }
      </div>
      {/*  */}

      <HeroContentContainer>
        <h2>
          <span className='nice_to_meet'>
            <span className='nice_to'>Nice to </span>
                meet you!{' '}
          </span>
            i{'\''}m   <UnderLineSpan giveSpace={false}>Ayodeji Aribigbola.</UnderLineSpan>
        </h2>
            
        <p>
            Based in the Nigeria, I’m a front-end developer passionate about building accessible web apps that users love.
        </p>

        <a className='contact' href='mailto:markothedevmail@gmail.com'>
          <UnderLineSpan small_border={true} giveSpace={true}>
          CONTACT ME
          </UnderLineSpan>
        </a>
      </HeroContentContainer>

    </HeroSectionContainer>
  )
}

export default HeroSection