import styled from "styled-components"


export const AboutContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 30px;
`

export const AboutH1 = styled.h1`
`
export const AboutWapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    padding-top:50px;
`


export const AboutCategory = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 340px;
    padding-left: 50px;

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

`

export const CategoryContentValue = styled.p`

`