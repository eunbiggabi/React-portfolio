import styled from "styled-components";
import { Link } from 'react-scroll'


export const HomeContainer = styled.div`
    background: #F78812;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileImage = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
        width: 200px;
        height: 200px;
    }

    @media screen and (max-width: 480px) {
        width: 180px;
        height: 180px;
    }
`

export const HomeH1 = styled.h1`
    margin-top: 30px;
    color: #fff;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        font-size: 26px;
    }
`

export const HomeH3 = styled.h3`
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;

`

export const Button = styled(Link)` 
    border-radius: 50px;
    white-space: nowrap;
    padding: 14px 48px;
    background: #20C0BB;
    font-size: 20px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #C2F9F9;
        color: #20C0BB;
    }
`