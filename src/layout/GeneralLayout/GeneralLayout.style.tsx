import styled from 'styled-components';
import RingImg from '../../assets/images/pattern-rings.svg'




export const GeneralLayoutContainer = styled.div`
    
    padding:  0 .6rem;
    @media screen  and (min-width: 1006px){ 
    background: url(${RingImg}); 
    background-repeat: no-repeat;
    background-position-x: -30px;
    background-size: 430px;
    background-position-y:100px;

        
    }


`