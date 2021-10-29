import styled from "styled-components"

export const SkillsContainer = styled.div`
    background: #13848C;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 30px;
`

export const SkillsH1 = styled.h1`
 color: #fff;
`
export const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: start;
    max-width: 1000px;
    padding-top:50px;
    
`

export const SkillContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: #fff;
    border-radius: 20px;
    margin-bottom: 30px;
    transition: all 0.2s ease-in-out;
    padding: 24px;
    

    &:hover {
        transition: all 0.3s ease-in-out;
        transform: translateY(20px);
    }
`

export const SkillContentTitle = styled.h4`
    font-size: 24px;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 2px solid #ccc;
    color: #f4623a;
`

export const SkillImage = styled.img`
    width: 320px;
    transition: all 0.2s ease-in-out;
`