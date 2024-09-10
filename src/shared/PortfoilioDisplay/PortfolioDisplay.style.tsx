import styled from 'styled-components';


export const PortfolioDisplayContainer =styled.div`
`

export const MainPortfolioImageContainer =styled.div`

padding: 0;
/* border: 1px solid red; */
position: relative;
cursor: pointer;

&:hover > div{
        visibility: visible ;
    }
img{
    width: 100%;
    height: 100%;
}
`
export const PortfolioImageCover = styled.div`
    position: absolute;
    background-color: #000000c7;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    visibility: hidden;
    
    p{
        letter-spacing: 2px;
    }
    span{
        margin: 20px 0;
    }
    
`

export const PortfolioContent =styled.div`
h2{
    font-size: 1rem;
font-weight: normal !important;
letter-spacing: 1px;
}
.porfolio_techs p{
    color: ${({theme})=>theme.ash};
    padding-right: .7rem;
    padding-top: .5rem;
}

.porfolio_techs{
    display: flex;
    flex-wrap: wrap;
}

.porfolio_view_container span{
    margin: .2rem 0;
}
.porfolio_view_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 80%;
    padding: .8rem 0;
    p{
letter-spacing: 1px;
        font-size: .9rem;
        cursor: pointer;
        
    }

    @media screen and (min-width: 400px){
        max-width: 250px;
    }
}

@media screen and (min-width: 700px) {
    h2{
        font-size: 1.5rem;
    }
}
`