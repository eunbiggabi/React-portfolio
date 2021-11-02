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
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <MyWorks slides={SliderData}/>
      <Contact />
    </div>
  );
}

export default App;
