import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from "./Sidebar.styled";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about-me' onClick={toggle}>
                        About Me
                    </SidebarLink>
                    <SidebarLink to='skills' onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='my-works' onClick={toggle}>
                        My Works
                    </SidebarLink>
                    <SidebarLink to='contact-me' onClick={toggle}>
                        Contact Me
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}
 
export default Sidebar;