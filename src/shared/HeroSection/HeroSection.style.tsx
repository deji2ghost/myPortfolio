import styled from 'styled-components';
import RingImg from '../../assets/images/pattern-rings.svg'
import HalfCirlceImg from '../../assets/images/pattern-circle.svg'


export const HeroSectionContainer = styled.div`
    
    background: url(${RingImg}),url(${HalfCirlceImg});   
    background-repeat: no-repeat,no-repeat;
    background-size: 700px,150px;
    background-position-x: -540px,300px;
    background-position-y:30px,200px;
    max-width: 1000px;
    margin:0 auto;
    img{
        /* border: 1px solid red; */
        display:block;
        height: 100%;
        width: 100%;
        filter: grayscale(100%);
    }
    .marko_img{
        margin:0 auto;
        margin-bottom: 100px;
        /* transform:translateY(-500px); */
        width:200px;
        position: relative;
        /* transform: translateY(-200px); */
    }
    /* .marko_img .is_desk_main_img{
    } */
    @media screen and (min-width: 600px) {
        /* border: 1px solid red; */
        display: flex;
        /* align-items: center; */
        flex-direction: row-reverse;
        justify-content: space-between;
        background-size: 400px,150px;
        background-position-x: -240px,-1000px;
        background-position-y:55px,200px;

        &> .marko_img{
            width: 40%;
        }
        
        &>div{
            width: 60%; 
        }
        .marko_img   .latop_circle{
            display: inline;

            position: absolute;
            bottom: 1px;
            left: 180px;
            width: 100px;
            height: 100px;
            }
       
       
       

    }
    @media screen and (min-width: 900px) {
            .marko_img   .latop_circle{
            position: absolute;
            bottom: 50px;
            left: -40px;
            }
        }

        
    @media screen and (min-width: 1006px) {
        /* opx removed img that we had before */
        background-size: 0px,150px;
    
    }
`
export const HeroContentContainer= styled.div`
/* border: 1px solid yellow; */
text-align: center;
margin-top: -64px;
h2{
    font-size: 1.5rem;
    font-weight: normal;
}
p{
    font-weight: normal;
    font-size: .9rem;
    padding: 1.2rem .7rem;
    color: ${({theme})=>theme.ash};
}
.contact{
    font-size: 1.2rem;
    color: ${({theme})=>theme.light};
    letter-spacing: 3px;
    cursor: pointer;
    transition: .5s color ease-in-out;
    display: inline-block;
    &:hover{
        color:  ${({theme})=>theme.green};
    }
}

@media screen and (min-width: 600px){   
    transform: translateX(35px);
    margin-top: unset;
    text-align: left;
    padding: 1rem;
    h2{
        font-size: 3rem;
        padding-top: 5rem;
        width: 500px;
    }
    p{
        padding: unset;
        padding-top: 3rem;
    }
    .contact{
        padding: unset;
        font-size: .9rem;
        padding-top: 1rem;
     }
    .nice_to{
        display: block;
    }
}




@media screen and (min-width: 900px) {
    transform: translateX(0);
    padding: 0;
    h2{
        /* border: 1px solid red; */
        width: 700px;
        font-size: 4.7rem;
        .nice_to{
            display: inline;
        }
        .nice_to_meet{
            display: block;
        }
    }

    & >  p:first-of-type{
        padding-top: 1.3rem;
        padding-bottom: 2rem;
        /* border: 1px solid rebeccapurple; */
        width: 400px;
    }
}


`