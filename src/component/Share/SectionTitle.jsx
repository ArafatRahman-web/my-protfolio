import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const SectionTitle = ({ title, styles }) => {
  return (
    <h2
      data-aos="zoom-in"
      data-aos-duration="2000"
      className={`${
        styles ? styles : ""
      } md:text-5xl text-xl   font-extrabold text-center relative`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
