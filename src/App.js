import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import MyResume from './Components/myResume/MyResume';
import MyServices from './Components/myServices/MyServices';
import Testimonial from './Components/Testimonial/Testimonial';
import MyPortFolio from './Components/myPortfolio/MyPortFolio';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import TechnicalSkill from './Components/Technical Skill/TechnicalSkill';

function App() {
  return (
      <div>
        <Header></Header>
        <AboutMe></AboutMe>
        <MyResume></MyResume>
        <TechnicalSkill></TechnicalSkill>
        {/* <MyServices></MyServices> */}
        <Testimonial></Testimonial>
        <MyPortFolio></MyPortFolio>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </div>
  );
}

export default App;
