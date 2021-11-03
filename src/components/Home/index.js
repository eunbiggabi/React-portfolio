import { HomeContainer, HomeBg, VideoBg, HomeContent, ProfileImage, HomeH1, HomeH3, HomeBtnWrapper, Button } from './Home.styled'
import Image from '../Assets/images/home/profile.jpeg'
import Video from '../Assets/video/video.mp4'
import { FaArrowDown } from 'react-icons/fa'


export default function Home() {
    

    return (
        <HomeContainer id="home">
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HomeBg>
            <HomeContent>
                <ProfileImage src={Image}/>
                <HomeH1>Hello, <br/> I am Kyu</HomeH1>
                <HomeH3>A Software Engineer currently residing in Brisbane, Australia</HomeH3>
                <HomeBtnWrapper>
                    <Button activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                        More Info <FaArrowDown style={{"margin-left": "20px"}}/>
                    </Button>    
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}
