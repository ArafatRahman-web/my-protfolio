import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projeact/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner/Banner";
import Education from "./Education/Education";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
