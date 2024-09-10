import styled from 'styled-components';



export const ContactContainer = styled.div`
    margin: 10px auto;
    text-align: center;
    background-color: #242424;
    padding: 2rem 1rem;   
    
    p{
        color: ${({theme})=>theme.ash};
        padding: 1rem 0;
    }
    .contact_content_pane{
        @media screen  and (min-width: 500px) {
           h1{
            font-size: 3.5rem;
           } 
        }
    }

    @media screen and (min-width: 500px){
        .contact-form-main{
            max-width: 500px;
            margin: 0 auto;
        }
    }
    @media screen and (min-width: 1000px){
        .contact-form-main{
            max-width: 1050px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            /* align-items: center; */

            & >div{
                width:40%;
                text-align: left;
                /* font-size: 1.2rem; */
                transform: translateY(30px);
            }
            & >form{
                width:40%
            }

        }
    }
`