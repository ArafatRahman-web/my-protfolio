import Divider from "../../component/Share/Divider";

import Marquee from "react-fast-marquee";
import SectionTitle from "../../component/Share/SectionTitle";

const Skills = () => {
  return (
    <div className=" relative -top-1 ">
      <div className="boxStyles  bg-[#000]  h-[100px]"></div>
      <SectionTitle title="SKILLS" styles="-top-14"></SectionTitle>
      <Divider styles="relative -top-10"></Divider>
      <Marquee>
        <div className="flex gap-10 items-center">
          <div>
            <img
              className="w-full h-28"
              src="/src/assets/skill/html.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-32"
              src="/src/assets/skill/css.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-32"
              src="/src/assets/skill/js.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-32"
              src="/src/assets/skill/boostrap.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-20"
              src="/src/assets/skill/tailwind.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-32"
              src="/src/assets/skill/react.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-32"
              src="/src/assets/skill/node.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-32"
              src="/src/assets/skill/express.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-48"
              src="/src/assets/skill/mongodb.png"
              alt=""
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
