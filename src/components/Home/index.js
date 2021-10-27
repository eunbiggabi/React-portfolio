import { useState } from 'react';
import { HomeContainer, HomeBg, VideoBg, HomeContent, ImageProfile, HomeH1, HomeH3, HomeBtnWrapper, Button } from './Home.styled'
import Image from '../Assets/images/profile.jpeg'
import Video from '../Assets/video/video.mp4'
// import { Button }  from '../Button.styled'

export default function Home() {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HomeContainer>
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HomeBg>
            <HomeContent>
                <ImageProfile src={Image}/>
                <HomeH1>Hello, <br/> I am Kyu</HomeH1>
                <HomeH3>A Software Engineer currently residing in Brisbane, Australia</HomeH3>
                <HomeBtnWrapper>
                    <Button>
                        About me 
                    </Button>    
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}
