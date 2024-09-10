import { NavContainer } from './Nav.style'
import GithubImg from '../../assets/images/path.png'
import fmentor from '../../assets/images/fmentor.png'
import LinkedIn  from '../../assets/images/LinkedIn.png'
import tweet from '../../assets/images/tweet.png'

const Nav= ():React.ReactElement=>{

  const socials = [
    {img:GithubImg,link:'https://github.com/deji2ghost'},
    {img:fmentor,link:'dejiwilliams9@gmail.com'},
    {img:LinkedIn,link:'linkedin.com/in/ayodeji-aribigbola-112b4728b'},
    {img:tweet,link:'https://twitter.com/wilkushintweets'},
  ]
  return(
    <NavContainer>
      <h2>Ayodeji</h2>

      <ul>
        {
          socials.map((d,index)=>(
            <li
              key={index}
            ><img src={d.img} onClick={e=>{
                window.open(d.link,'_blank')
              }} alt="" /></li>
          ))
        }
      </ul>
    </NavContainer>
  )
}

export default Nav