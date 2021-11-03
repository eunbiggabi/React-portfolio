import React from 'react'
import { AboutContainer, AboutH1, AboutWapper, AboutCategory, CategroyImage, CategoryContentContainer, CategoryContentTitle, CategoryContentValue } from './About.styled'
import { Name, Email, Address, Education } from '../Assets/images/about/ImageVariables'


export default function About() {
    return (
        <div>
            <AboutContainer id="about">
                <AboutH1>ABOUT ME</AboutH1>
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
