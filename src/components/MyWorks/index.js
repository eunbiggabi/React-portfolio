import React, { useState } from 'react'
import {MyWorksContainer, MyWorksH1, MyWorksWrapper, MyWorkContentContainer, MyWorkContentWrapper, MyWorkContentTitle, MyWorkContentPeriod, MyWorkContentInfo, MyWorkCarousel, MyWorkImages, MyWorkImageWrapper, MyWorkImage, MyWorkDescription, MyWorkDescriptionLabel, MyWorkDescriptionValue, LeftArrow, RightArrow, MobileImageWraaper,MobileImage, MyWorkDescriptionWrapper} from './MyWorks.styled'
import SliderData from '../Assets/images/my-works/marketplace/SliderData';
import SliderData2 from '../Assets/images/my-works/portfolio-version-1/SliderData2'
import MobileSliderData from '../Assets/images/my-works/marketplace/mobileImages/MobileSliderData';
import MobileSliderData2 from '../Assets/images/my-works/portfolio-version-1/mobileImages/MobileSliderData2'



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
                            <MyWorkContentTitle>Initial Portfoilio Version</MyWorkContentTitle>
                            <MyWorkContentPeriod>April 2021</MyWorkContentPeriod>
                            <MyWorkContentInfo>
                                <MyWorkCarousel>
                                    <MyWorkImages>
                                    <LeftArrow onClick={prevSlide}/>
                                    <RightArrow onClick={nextSlide}/>
                                        {SliderData2.map((slide, index) => {
                                            return (
                                                <MyWorkImageWrapper key={index}>
                                                    {index === current && (<MyWorkImage src={slide.image} alt={slide.alt}/>)}
                                                </MyWorkImageWrapper>
                                            )
                                        })}
                                        {MobileSliderData2.map((slide, index) => {
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
                                            Design Wireframe, Contect Information, Information About Myself, Relevant Personal Projects
                                        </MyWorkDescriptionValue>
                                    </MyWorkDescription>
                                    <MyWorkDescription>
                                        <MyWorkDescriptionLabel>Front-end</MyWorkDescriptionLabel>
                                        <MyWorkDescriptionValue>
                                            HTML, CSS, JavaScript
                                        </MyWorkDescriptionValue>
                                    </MyWorkDescription>
                                </MyWorkDescriptionWrapper>
                            </MyWorkContentInfo>
                        </MyWorkContentWrapper>
                    </MyWorkContentContainer>

                </MyWorksWrapper>
            </MyWorksContainer>
        </div>
    )
}
