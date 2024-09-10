import Contact from '../../shared/Contact/Contact'
import Nav from '../../shared/Nav/Nav'
import { GeneralLayoutContainer } from './GeneralLayout.style'


type Prop = React.PropsWithChildren<{



}>
const GeneralLayout = ({ children }:Prop):React.ReactElement=>{


  return (
    <div>

      <GeneralLayoutContainer>
        {/* nav goes here */}
        <Nav/>
        {
          children
        }

      </GeneralLayoutContainer>
      <Contact />

    </div>
  )
}


export default GeneralLayout