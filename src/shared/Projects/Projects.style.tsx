import styled from 'styled-components';


export const ProjectsContainer = styled.div`
    max-width: 1050px;
    margin: 10px auto;
    padding: 0 1rem;

`


export const ProjectsHeaderContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
        font-size: 2rem;
    }

    p{
        font-weight: normal !important;
        letter-spacing:3px;
        font-size: .9rem;
        color: ${({theme})=>theme.lightDark};
    }
   @media screen and (min-width: 500px) {
        h2{
            font-size: 4rem;
        }
   }
`

export const ListOFProject =styled.div`
display: grid;
gap: 30px 10px;

@media screen and (min-width: 500px){
    grid-template-columns: repeat(2,1fr);
}
@media screen and (min-width: 600px){
    gap:30px 30px;
}
`