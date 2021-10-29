import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Nav = styled.nav`
    background: #041019;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    border-bottom: 2px solid #f4623a;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition : 0.8s all ease;
    } 
`

export const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 80px;
    z-index: 5;
    padding: 0 24px;
    max-width: 1200px;
`

export const NavbarLogo = styled(Link)`
    font-size: 1.5rem;
    margin-left: 18px;
    color: #C2F9F9;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
`

export const MobileIcon = styled.div`
    display: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        curser: pointer;
        color: #C2F9F9;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    } 
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(Link)`
    color: #C2F9F9;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #F78812;
    }
`
