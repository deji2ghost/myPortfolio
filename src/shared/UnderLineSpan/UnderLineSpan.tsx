import { UnderLineSpanContainer } from './UnderLineSpan.style'


type Prop = React.PropsWithChildren<{

    giveSpace?:boolean;
  small_border?:boolean;
}>
const UnderLineSpan =({children,giveSpace=false,small_border=false}:Prop):React.ReactElement=>{

  return (
    <UnderLineSpanContainer small_border={small_border} style={{'paddingBottom':giveSpace?'.5rem':'unset'}}>
      {
        children
      }
    </UnderLineSpanContainer>
  )
}
export default UnderLineSpan