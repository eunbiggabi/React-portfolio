import './App.css';
import Home  from './Home';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import MyWorks from './MyWorks';
import SliderData from './Assets/images/my-works/marketplace/SliderData';
import Contact from './Contact';


function App() {
  return (
      <>
        <Header />
        <Home />
        <About Link id="about"/>
        <Skills />
        <MyWorks slides={SliderData}/>
        <Contact />
      </>
  );
}

export default App;
