import React from 'react'
import { AboutContainer, AboutH1, AboutWapper, AboutCategory, CategroyImage, CategoryContentContainer, CategoryContentTitle, CategoryContentValue } from './About.styled'
// import Name from '../Assets/images/about/person-fill.svg'
import { Name, Email, Address, Education } from '../Assets/images/about/ImageVariable'


export default function About() {
    return (
        <div>
            <AboutContainer>
                <AboutH1>About Me</AboutH1>
                <AboutWapper>
                    <AboutCategory>
                        <CategroyImage src={Name}/>
                        <CategoryContentContainer>
                            <CategoryContentTitle>Name</CategoryContentTitle>
                            <CategoryContentValue>Kyu JEON</CategoryContentValue>
                        </CategoryContentContainer>
                    </AboutCategory>

                    <AboutCategory>
                        <CategroyImage src={Email}/>
                        <CategoryContentContainer>
                            <CategoryContentTitle>Email</CategoryContentTitle>
                            <CategoryContentValue>eunkyuchloe@gmail.com</CategoryContentValue>
                        </CategoryContentContainer>
                    </AboutCategory>

                    <AboutCategory>
                        <CategroyImage src={Address}/>
                        <CategoryContentContainer>
                            <CategoryContentTitle>Address</CategoryContentTitle>
                            <CategoryContentValue>Rochedale, Brisbane</CategoryContentValue>
                        </CategoryContentContainer>
                    </AboutCategory>

                    <AboutCategory>
                        <CategroyImage src={Education}/>
                        <CategoryContentContainer>
                            <CategoryContentTitle>Education</CategoryContentTitle>
                            <CategoryContentValue>Griffith University <br/> (Bachelor of Hotel Management)</CategoryContentValue>
                        </CategoryContentContainer>
                    </AboutCategory>
                </AboutWapper>
            </AboutContainer>
        </div>
    )
}
