import styled from 'styled-components';


//  no much thing to do in button for now no need to over configure


const Button =styled.button`
    padding: .5rem 0;
    background-color: transparent;
    outline: none;
    border: transparent;
    border-bottom: 2px solid ${({theme})=>theme.green};
    font-size: 1.1rem;
    letter-spacing: 1px;
    cursor: pointer;
    color: white;
    
    &:focus{
        color:${({theme})=>theme.green};
    }
    &:hover{
        color:${({theme})=>theme.green};
    }
`


export default  Button