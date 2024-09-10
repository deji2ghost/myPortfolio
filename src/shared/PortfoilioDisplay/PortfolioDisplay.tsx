import { MainPortfolioImageContainer,PortfolioImageCover, PortfolioContent, PortfolioDisplayContainer } from './PortfolioDisplay.style'
import Projectdummy from '../../assets/images/projectdummy.webp'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'
import { toast } from 'react-hot-toast';


export type PortfolioDisplayProp ={
  accessVariant?:'hover'|'static',
  code_url?:string;
  website_url?:string;
  stacks?:string[];
  projectName:string;
  projectImage:string
}
const PortfolioDisplay = ({projectName,projectImage,accessVariant='static',code_url,website_url,stacks=[]}:PortfolioDisplayProp):React.ReactElement=>{

  const openNewRoute=(e:React.MouseEvent,url:string,link_type:'code'|'website'='website')=>{
    e.preventDefault()
    if(url=='#'){
      if(link_type==='website'){
        toast.error('Coming soon...')
      }else{
        toast.error('Sorry the code is private')
      }
      return
    }
    window.open(url,'_blank')
  }
  return (
    <PortfolioDisplayContainer>
      <MainPortfolioImageContainer>
        <img src={projectImage} alt="" />
        {
          accessVariant=='hover'?
            <PortfolioImageCover className='PortfolioImageCover'>
              {
                website_url?
                  <UnderLineSpan giveSpace small_border={true} >
                    <p
                      onClick={e=>{
                        openNewRoute(e,website_url)
                      }}
                    >VIEW PROJECT </p>
                  </UnderLineSpan>:''
              }

              {
                code_url?
                  <UnderLineSpan giveSpace small_border={true} >
                    <p
                      onClick={e=>{
                        openNewRoute(e,code_url,'code')
                      }}
                    >VIEW CODE</p>
                  </UnderLineSpan>:''
              }
            </PortfolioImageCover>:''
        }
      </MainPortfolioImageContainer>
        

      <PortfolioContent>
        <h2>{projectName}</h2>
        <div className='porfolio_techs'>
          {
            stacks.map((d:string,index:number)=> <p key={index}>{d.toUpperCase()}</p>)
          }
        </div>
        {
          accessVariant=='static'?
            <div className='porfolio_view_container'>
              {
                website_url?
                  <UnderLineSpan
                    
                    giveSpace small_border={true} >
                    <p
                      onClick={e=>{
                        openNewRoute(e,website_url)
                      }}
                    >VIEW PROJECT </p>
                  </UnderLineSpan>:''
              }
              {
                code_url?
                  <UnderLineSpan giveSpace small_border={true} >
                    <p
                      onClick={e=>{

                        openNewRoute(e,code_url,'code')
                      }}
                    >VIEW CODE</p>
                  </UnderLineSpan>:''
              }
            </div>:''
        }
      </PortfolioContent>

    </PortfolioDisplayContainer>
  )
}

export default PortfolioDisplay