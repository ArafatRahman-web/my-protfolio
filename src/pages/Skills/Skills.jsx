import Divider from "../../component/Share/Divider";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../component/Share/SectionTitle";
import html from "../../assets/skill/html.png";
import css from "../../assets/skill/css.png";
import js from "../../assets/skill/js.png";
import boostrap from "../../assets/skill/boostrap.png";
import tailwind from "../../assets/skill/tailwind.png";
import reactimg from "../../assets/skill/react.png";
import node from "../../assets/skill/node.png";
import mongodb from "../../assets/skill/mongodb.png";
import express from "../../assets/skill/express.png";

const Skills = () => {
  return (
    <div id="skills" className=" relative -top-1 ">
      <div className="boxStyles  bg-[#000]  h-[100px]"></div>
      <SectionTitle title="SKILLS" styles="-top-12"></SectionTitle>
      <Divider styles="relative -top-10"></Divider>
      <Marquee>
        <div className="flex gap-14 items-center">
          <div>
            <img className="w-full h-16" src={html} alt="" />
          </div>
          <div>
            <img className="w-full h-20" src={css} alt="" />
          </div>
          <div>
            <img className="w-full h-20" src={js} alt="" />
          </div>
          <div>
            <img className="w-full h-16" src={boostrap} alt="" />
          </div>
          <div>
            <img className="w-full h-14" src={tailwind} alt="" />
          </div>
          <div>
            <img className="w-full h-16" src={reactimg} alt="" />
          </div>
          <div>
            <img className="w-full h-20" src={node} alt="" />
          </div>
          <div>
            <img className="w-full h-16" src={express} alt="" />
          </div>
          <div>
            <img className="w-full h-32" src={mongodb} alt="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
