import ScrollToTop from "../../component/Share/ScrolltoTop/ScrollToTop";
import Tsparticales from "../../component/tsParticales/Tsparticales";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projeact/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner/Banner";
import Education from "./Education/Education";

const Home = () => {
  return (
    <div>
      <Tsparticales />
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <ContactMe></ContactMe>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default Home;
