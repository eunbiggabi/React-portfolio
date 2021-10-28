import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll' 

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 60%;
    background: #041019;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color: #C2F9F9;
`

export const SidebarWrapper = styled.div`
    color: #C2F9F9;
    padding-top: 80px;
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    text-decoration: none;
    list-style: none;
    transition: all 0.2s ease-in-out;
    color: #C2F9F9;
    padding: 14px 24px;
    cursor: pointer;

    &:hover {
        color:#13848C;
        transition: 0.2s ease-in-out;
    }
`