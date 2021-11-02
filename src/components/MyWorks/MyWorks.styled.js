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
    background: #f9c51d;;
`

export const MyWorksH1 = styled.h1`

`

export const MyWorksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    padding-top:50px;
    
`

export const MyWorkContentContainer = styled.div`

`

export const MyWorkContentWrapper = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin: 30px 0;
`

export const MyWorkContentTitle = styled.h3`
    font-size: 22px;
`

export const MyWorkContentPeriod = styled.h4`
    color: #6c757d;
    
`

export const MyWorkContentInfo = styled.div`
`

export const MyWorkCarousel = styled.div`
`

export const MyWorkImages = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LeftArrow = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #f4623a;
    z-index: 10px;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
        top: 47%;

    }
`

export const RightArrow = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50;
    right: 32px;
    font-size: 3rem;
    color: #f4623a;
    z-index: 10px;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
        top: 47%;

    }
`

export const MyWorkImageWrapper = styled.div`
`

export const MyWorkImage = styled.img`
    width: 900px;
    height: 600px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const MobileImageWraaper = styled.div`
`

export const MobileImage = styled.img`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        border-radius: 20px;
        width: 100%;
    }
`

export const MyWorkDescriptionWrapper = styled.div`
`

export const MyWorkDescription = styled.div`
    display: flex;
    padding-left: 30px;

    @media screen and (max-width: 768px) {
        padding-left: 0px;
        width: 360px;
    }
    
`

export const MyWorkDescriptionLabel = styled.h4`
    flex: 1;
    color: #f4623a;
    padding-left: 20px;
`

export const MyWorkDescriptionValue = styled.h4`
    flex: 3;
    padding-left: 10px;
`
