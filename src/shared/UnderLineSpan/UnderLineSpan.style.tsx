import styled from 'styled-components';


type Prop ={
  style?:React.CSSProperties;
  small_border?:boolean;
}
export const  UnderLineSpanContainer =styled.span<Prop>`
display: inline-block;
  border-bottom: ${(props)=>props.small_border?'2':'3'}px solid ${({theme})=>theme.green};
`