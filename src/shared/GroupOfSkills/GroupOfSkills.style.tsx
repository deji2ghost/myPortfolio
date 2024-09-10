import styled from 'styled-components';




export const GroupOfSkillsContainer =styled.div`
    

    display: grid;
    max-width: ${({theme})=>theme.maxWidth};
    margin: 0 auto;
    /* border: 1px solid red; */
    @media screen and (min-width: 500px) {
        grid-template-columns: repeat(2,2fr);
    }

 @media screen and (min-width: 700px) {
        grid-template-columns: repeat(3,2fr);
        padding-right: 2rem;
    }

`