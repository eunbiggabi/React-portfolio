import React from 'react'
import { FrontEnd, BackEnd, Deployment, VersionControl } from '../Assets/images/skills/ImageVariables'
import { SkillsContainer, SkillsH1, SkillsWrapper, SkillContentContainer, SkillContentTitle, SkillImage } from './Skills.styled'

export default function Skills() {
    return (
        <div>
            <SkillsContainer>
                <SkillsH1>SKILLS</SkillsH1>

                <SkillsWrapper>
                    <SkillContentContainer>
                        <SkillContentTitle>Front End</SkillContentTitle> 
                        <SkillImage src={FrontEnd}/>
                    </SkillContentContainer>
                
                    <SkillContentContainer>
                        <SkillContentTitle>Back End</SkillContentTitle> 
                        <SkillImage src={BackEnd}/>
                    </SkillContentContainer>
        
                    <SkillContentContainer>
                        <SkillContentTitle>Deployment</SkillContentTitle>
                        <SkillImage src={Deployment}/>
                    </SkillContentContainer>
                
                    <SkillContentContainer>
                        <SkillContentTitle>Version Control</SkillContentTitle>
                        <SkillImage src={VersionControl}/>
                    </SkillContentContainer>
                </SkillsWrapper>
            </SkillsContainer>
        </div>
    )
}
