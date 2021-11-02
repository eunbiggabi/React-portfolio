import React from 'react'
import { ContactContainer, ContactWrapper, ContactH1, ContactLinkWrapper, ContactLink } from './Contact.styled'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Contact() {
    return (
        <div>
            <ContactContainer>
                <ContactWrapper>
                    <ContactH1>Let's Talk</ContactH1>
                    <ContactLinkWrapper>
                        <ContactLink to='githup'>
                            <AiFillGithub />
                        </ContactLink>
                        <ContactLink to='linkedin'>
                            <AiFillLinkedin />
                        </ContactLink>
                    </ContactLinkWrapper>
                </ContactWrapper>
            </ContactContainer>
        </div>
    )
}
