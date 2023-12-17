import ProjectCard from "../../component/ProjectCard/ProjectCard";
import Divider from "../../component/Share/Divider";
import SectionTitle from "../../component/Share/SectionTitle";
import homeImg from "../../assets/project/home/harbar.png";
import carImg from "../../assets/project/home/car.png";
import foodImg from "../../assets/project/home/food.png";
// import OpenModal from "../../component/OpenModal/OpenModal";

const Projects = () => {
  return (
    <div id="projects" className="md:px-20 px-5 mb-10">
      <div className="my-8">
        <SectionTitle title="PROJECTS"></SectionTitle>
        <Divider></Divider>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          // htmlFor="my_modal_6"
          img={homeImg}
          name="Harbar Home"
          liveLink="https://harborhomes.netlify.app"
          codeLink="https://github.com/abedinwahid9/real-state-clients"
        ></ProjectCard>
        <ProjectCard
          img={carImg}
          liveLink="https://auto-care-cars.netlify.app/"
          codeLink="https://github.com/abedinwahid9/auto-care-client"
          name="Auto Cars"
        ></ProjectCard>
        <ProjectCard
          img={foodImg}
          name="Food Share"
          liveLink="https://foodsharecommunity.netlify.app"
          codeLink="https://github.com/abedinwahid9/foodshare-client"
        ></ProjectCard>
      </div>
      {/* <OpenModal id="my_modal_6"></OpenModal>
      <OpenModal id="my_modal_7"></OpenModal> */}
    </div>
  );
};

export default Projects;
