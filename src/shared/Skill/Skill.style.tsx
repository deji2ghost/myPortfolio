import styled from 'styled-components';




export const SkillContainer = styled.div`
padding: .5rem 0;
font-weight: normal !important;
text-align: center;
  h2{
  }
  p{
    color: ${({theme})=>theme.ash};
    font-size:.8rem;
  }
  
 @media screen and (min-width: 700px) {
  text-align: left;

  h2{
    font-size: 2rem;
    padding: 1rem 0;
  }
}
`