import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.styled'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Kyu</NavbarLogo>
                    <MobileIcon onClick = { toggle }>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks activeClass="active"
                                to="my-works"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>My Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}
 
export default Navbar
