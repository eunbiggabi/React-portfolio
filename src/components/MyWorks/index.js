import React, { useState } from 'react'
import {MyWorksContainer, MyWorksH1, MyWorksWrapper, MyWorkContentContainer, MyWorkContentWrapper, MyWorkContentTitle, MyWorkContentPeriod, MyWorkContentInfo, MyWorkCarousel, MyWorkImages, MyWorkImageWrapper, MyWorkImage, MyWorkDescription, MyWorkDescriptionLabel, MyWorkDescriptionValue, LeftArrow, RightArrow} from './MyWorks.styled'
import SliderData from '../Assets/images/my-works/marketplace/SliderData';




export default function MyWorks({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1 )
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div>
            <MyWorksContainer>
                <MyWorksH1>My Works</MyWorksH1>
                <MyWorksWrapper>

                    <MyWorkContentContainer>
                        <MyWorkContentWrapper>
                            <MyWorkContentTitle></MyWorkContentTitle>
                            <MyWorkContentPeriod></MyWorkContentPeriod>
                            <MyWorkContentInfo>
                                <MyWorkCarousel>
                                    
                                    <MyWorkImages>
                                    <LeftArrow onClick={prevSlide}/>
                                    <RightArrow onClick={nextSlide}/>
                                        {SliderData.map((slide, index) => {
                                            return (
                                                <MyWorkImageWrapper key={index}>
                                                    {index === current && (<MyWorkImage src={slide.image} alt={slide.alt}/>)}
                                                </MyWorkImageWrapper>
                                            )
                                        })}
                                        
                                    </MyWorkImages>
                                </MyWorkCarousel>
                                <MyWorkDescription>
                                    <MyWorkDescriptionLabel></MyWorkDescriptionLabel>
                                    <MyWorkDescriptionValue></MyWorkDescriptionValue>
                                </MyWorkDescription>
                            </MyWorkContentInfo>
                        </MyWorkContentWrapper>
                    </MyWorkContentContainer>

                    <MyWorkContentContainer>
                        <MyWorkContentWrapper>
                            <MyWorkContentTitle></MyWorkContentTitle>
                            <MyWorkContentPeriod></MyWorkContentPeriod>
                            <MyWorkContentInfo>
                                <MyWorkCarousel>
                                    <MyWorkImages>
                                        <MyWorkImageWrapper>
                                            <MyWorkImage />
                                        </MyWorkImageWrapper>
                                    </MyWorkImages>
                                </MyWorkCarousel>
                                <MyWorkDescription>
                                    <MyWorkDescriptionLabel></MyWorkDescriptionLabel>
                                    <MyWorkDescriptionValue></MyWorkDescriptionValue>
                                </MyWorkDescription>
                            </MyWorkContentInfo>
                        </MyWorkContentWrapper>
                    </MyWorkContentContainer>

                    <MyWorkContentContainer>
                        <MyWorkContentWrapper>
                            <MyWorkContentTitle></MyWorkContentTitle>
                            <MyWorkContentPeriod></MyWorkContentPeriod>
                            <MyWorkContentInfo>
                                <MyWorkCarousel>
                                    <MyWorkImages>
                                        <MyWorkImageWrapper>
                                            <MyWorkImage />
                                        </MyWorkImageWrapper>
                                    </MyWorkImages>
                                </MyWorkCarousel>
                                <MyWorkDescription>
                                    <MyWorkDescriptionLabel></MyWorkDescriptionLabel>
                                    <MyWorkDescriptionValue></MyWorkDescriptionValue>
                                </MyWorkDescription>
                            </MyWorkContentInfo>
                        </MyWorkContentWrapper>
                    </MyWorkContentContainer>

                </MyWorksWrapper>
            </MyWorksContainer>
        </div>
    )
}
