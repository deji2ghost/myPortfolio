import styled from 'styled-components';





export const InputWithLabelContainer =styled.input`
    background-color: transparent;
    border: 1px solid transparent;
    outline: none;
    color: ${({theme})=>theme.light};
    border-bottom: 1px solid ${({theme})=>theme.light};
    width: 100%;
    padding: 1rem .9rem;
    ::placeholder{
        padding-top: 20px;
        /* transform: translateY(-10px); */
    }
    &:focus{
    border-bottom: 2px solid ${({theme})=>theme.green};
    }
    &.is_error{
    border-bottom: 2px solid ${({theme})=>theme.red};
    }
`


export const TextAreaWithLabelContainer =styled.textarea`
    background-color: transparent;
    border: 1px solid transparent;
    outline: none;
    color: ${({theme})=>theme.light};
    border-bottom: 1px solid ${({theme})=>theme.light};
    width: 100%;
    padding: 1rem .9rem;
    ::placeholder{
        padding-top: 20px;
        /* transform: translateY(-10px); */
    }
    &:focus{
    border-bottom: 2px solid ${({theme})=>theme.green};
    }
    &.is_error{
    border-bottom: 2px solid ${({theme})=>theme.red};
    }
`