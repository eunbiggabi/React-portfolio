import styled from 'styled-components'

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fe918d;
    padding: 100px 30px;
`

export const ContactWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const ContactH1 = styled.h1`
    text-align: center;
    color: #fff;
`

export const ContactLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`

export const ContactLink = styled.button`
    color: #fff;
    font-size: 60px;
    margin: 20px;
    cursor: pointer;
    

    &:hover {
        color: #ff6863;
        transition: all 300ms ease-in;
    }
`