import styled from "styled-components"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


export const MyWorksContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 30px;
    background: #fff;
`

export const MyWorksH1 = styled.h1`

`

export const MyWorksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    padding-top:50px;
`

export const MyWorkContentContainer = styled.div`

`

export const MyWorkContentWrapper = styled.div`

`

export const MyWorkContentTitle = styled.h3`

`

export const MyWorkContentPeriod = styled.h4`

`

export const MyWorkContentInfo = styled.div`

`

export const MyWorkCarousel = styled.div`
    position: relative;
`

export const MyWorkImages = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LeftArrow = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #13848C;
    z-index: 10px;
    cursor: pointer;
    user-select: none;
`

export const RightArrow = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #13848C;
    z-index: 10px;
    cursor: pointer;
    user-select: none;
`

export const MyWorkImageWrapper = styled.div`
    
`

export const MyWorkImage = styled.img`
    width: 900px;
    height: 600px;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        width: 100%;

    }
`

export const MyWorkDescription = styled.div`

`

export const MyWorkDescriptionLabel = styled.h4`

`

export const MyWorkDescriptionValue = styled.h4`

`