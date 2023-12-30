import profileImg from "../../../assets/dp.png";
import resumePdf from "../../../../public/abedinwahid's_cv.pdf";
import htmlImg from "../../../assets/skill/html.png";
import cssImg from "../../../assets/skill/css.png";
import jsImg from "../../../assets/skill/js.png";
import reactImg from "../../../assets/skill/react.png";
import tailwindImg from "../../../assets/skill/tailwind.png";
import boostrapImg from "../../../assets/skill/boostrap.png";
import express from "../../../assets/skill/express.png";
import nodeImg from "../../../assets/skill/node.png";
import { MdCloudDownload } from "react-icons/md";
import FloatingIcon from "../../../component/Share/FloatingIcon/FloatingIcon";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Banner = () => {
  return (
    <div className="bg-center bg-covers  bg-no-repeat border-none relative ">
      <div className="bg-[#0000008a] text-center text-neutral-content ">
        <div className="z-50 flex md:p-16 p-5 gap-5 items-center sm:flex-row flex-col justify-between">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="md:w-1/2 w-full flex items-center sm:order-1 order-2"
          >
            <div>
              <h1
                style={{ textShadow: "2px 4px 15px rgba(245,245,245,0.50)" }}
                className="mb-5 md:text-5xl text-3xl font-bold drop-shadow-lg "
              >
                Abedin Wahid
              </h1>
              <p
                style={{ textShadow: "2px 4px 15px rgba(245,245,245,0.50)" }}
                className="md:text-2xl text-lg font-bold mb-2"
              >
                Frontend Developer | React.js Enthusiast | Open to Opportunities
              </p>
              <p
                style={{ textShadow: "2px 4px 15px rgba(245,245,245,0.50)" }}
                className="md:text-xl text-base font-bold mb-5"
              >
                Email: abedinwahid9@gmail.com
              </p>
              <a href={resumePdf} download>
                <button className="btn border-none bg-BtnColor text-primaryColor hover:text-textColor hover:bg-primaryColor font-extrabold md:text-xl text-sm">
                  Resume <MdCloudDownload className="text-3xl font-black" />
                </button>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="md:w-1/2 w-full flex justify-center sm:order-2 order-1"
          >
            <div className="w-3/4">
              <img
                style={{
                  filter: "drop-shadow(rgb(255, 250, 250) -1px 0px 5px)",
                  borderRadius: "65% 0% 37% 94% / 82% 21% 27% 24%",
                }}
                // style={{ borderRadius: " 0% 0% 48% 52% / 25% 30% 25% 24%" }}
                src={profileImg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="absolute  flex flex-col justify-evenly w-full h-full top-0 -z-10">
          {/* 1st row */}
          <div className="flex justify-evenly gap-20">
            <div>
              <FloatingIcon
                style="md:w-20 md:h-20 w-10 h-10"
                img={reactImg}
              ></FloatingIcon>
            </div>
            <div></div> <div></div>
            <div>
              <FloatingIcon
                style="w-full h-20 w-10 h-10"
                img={jsImg}
              ></FloatingIcon>
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex justify-evenly gap-20">
            <div>
              <FloatingIcon
                style="w-full h-20 w-10 h-10"
                img={htmlImg}
              ></FloatingIcon>
            </div>{" "}
            <div className="md:block hidden"></div>
            <div className="md:block hidden"></div>
            <div className="md:block hidden"></div>
            <div className="md:block hidden"></div>{" "}
            <div className="md:block hidden"></div>
            <div>
              <FloatingIcon
                style="w-full h-20 w-10 h-10"
                img={cssImg}
              ></FloatingIcon>
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex justify-evenly gap-20">
            {" "}
            <div>
              <FloatingIcon
                style="w-full h-20 w-10 h-10"
                img={express}
              ></FloatingIcon>
            </div>
            <div className="md:block hidden"></div>
            <div className="md:block hidden"></div>
            <div className="md:block hidden"></div>
            <div>
              <FloatingIcon
                style="w-full h-20 w-10 h-10"
                img={nodeImg}
              ></FloatingIcon>
            </div>
          </div>
          {/* 4th row */}
          <div className="xl:flex hidden justify-evenly gap-20">
            {" "}
            <div></div>
            <div>
              <FloatingIcon
                style="w-full h-20 w-10 h-10"
                img={boostrapImg}
              ></FloatingIcon>
            </div>
            <div></div>
            <div>
              <FloatingIcon
                style="w-full h-20 w-10 h-10"
                img={tailwindImg}
              ></FloatingIcon>
            </div>{" "}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
