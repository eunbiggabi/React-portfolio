import styled from "styled-components"


export const AboutContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 30px;
    background: #fff;
    
`

export const AboutH1 = styled.h1`
`
export const AboutWapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    padding-top:50px;
    
`


export const AboutCategory = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 340px;
    padding-left: 50px;
    opacity: 0.9;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        color: #f4623a;
    }
`

export const CategroyImage = styled.img`
    width: 40px;
    height: 40px;
`

export const CategoryContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding: 30px;
    

    @media screen and (max-width: 768px) {
        padding: 20px;
    } 
`

export const CategoryContentTitle = styled.h3`
    color: #f4623a;
`

export const CategoryContentValue = styled.p`
`