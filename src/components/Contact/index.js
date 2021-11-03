import React from 'react'
import { ContactContainer, ContactWrapper, ContactH1, ContactLinkWrapper, ContactLink } from './Contact.styled'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export default function Contact() {
    return (
        <div>
            <ContactContainer id="contact">
                <ContactWrapper>
                    <ContactH1>Let's Talk</ContactH1>
                    <ContactLinkWrapper>
                        <ContactLink>
                            <a href={'//www.github.com/eunbiggabi'} target="_blank" > <AiFillGithub /> </a>
                        </ContactLink>
                        <ContactLink >
                            <a href={'//www.linkedin.com/in/eun-kyu-jeon-018370204/'} target="_blank" > <AiFillLinkedin /> </a>
                        </ContactLink>
                    </ContactLinkWrapper>
                </ContactWrapper>
            </ContactContainer>
        </div>
    )
}
