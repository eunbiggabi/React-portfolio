import React, { useState } from 'react'
import {MyWorksContainer, MyWorksH1, MyWorksWrapper, MyWorkContentContainer, MyWorkContentWrapper, MyWorkContentTitle, MyWorkContentPeriod, MyWorkContentInfo, MyWorkCarousel, MyWorkImages, MyWorkImageWrapper, MyWorkImage, MyWorkDescription, MyWorkDescriptionLabel, MyWorkDescriptionValue, LeftArrow, RightArrow, MobileImageWraaper,MobileImage, LabelH4, ValueH4, MyWorkDescriptionWrapper} from './MyWorks.styled'
import SliderData from '../Assets/images/my-works/marketplace/SliderData';
import MobileSliderData from '../Assets/images/my-works/marketplace/mobileImages/MobileSliderData';




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
                            <MyWorkContentTitle>Market Place</MyWorkContentTitle>
                            <MyWorkContentPeriod>July 2021</MyWorkContentPeriod>
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
                                        {MobileSliderData.map((slide, index) => {
                                            return(
                                                <MobileImageWraaper key={index}>
                                                    {index === current && (<MobileImage src={slide.image} alt={slide.alt}/>)}
                                                </MobileImageWraaper>
                                            )
                                        })}
                                    </MyWorkImages>
                                </MyWorkCarousel>
                                <MyWorkDescriptionWrapper>
                                    <MyWorkDescription>
                                        <MyWorkDescriptionLabel>Feature</MyWorkDescriptionLabel>
                                        <MyWorkDescriptionValue>
                                            Admin Interface, Product Listings, Mobile Friendliness
                                        </MyWorkDescriptionValue>
                                    </MyWorkDescription>
                                    <MyWorkDescription>
                                        <MyWorkDescriptionLabel>Front-end</MyWorkDescriptionLabel>
                                        <MyWorkDescriptionValue>
                                            Ruby on Rails
                                        </MyWorkDescriptionValue>
                                    </MyWorkDescription>
                                    <MyWorkDescription>
                                        <MyWorkDescriptionLabel>Back-end</MyWorkDescriptionLabel>
                                        <MyWorkDescriptionValue>
                                            Postgres
                                        </MyWorkDescriptionValue>
                                    </MyWorkDescription>
                                </MyWorkDescriptionWrapper>
                            </MyWorkContentInfo>
                        </MyWorkContentWrapper>
                    </MyWorkContentContainer>

                    <MyWorkContentContainer>
                        <MyWorkContentWrapper>
                            <MyWorkContentTitle>My First Version Portfoilio</MyWorkContentTitle>
                            <MyWorkContentPeriod>April 2021</MyWorkContentPeriod>
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
                            <MyWorkContentTitle>Hackathon Food App</MyWorkContentTitle>
                            <MyWorkContentPeriod>October 2021</MyWorkContentPeriod>
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
