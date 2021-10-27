import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.styled'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo>Kyu</NavbarLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills'>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='my-works'>My Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}
 
export default Navbar
