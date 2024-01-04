import { Link } from "react-router-dom";
import github from "../../assets/social/github.png";
import linkedin from "../../assets/social/linkedin.png";
import whatsapp from "../../assets/social/whatsapp.png";

const SocialLink = () => {
  return (
    <div className=" fixed flex px-2 py-3 rounded-full flex-col gap-3 z-50  top-1/2 left-0 bg-BtnColor">
      <Link target="_blank" to="https://github.com/abedinwahid9">
        <img width={30} height={30} src={github} alt="github" />
      </Link>
      <Link target="_blank" to="https://www.linkedin.com/in/abedinwahid">
        <img width={30} height={30} src={linkedin} alt="linkedin" />
      </Link>
      <Link target="_blank" to="https://wa.me/01716893200">
        <img width={30} height={30} src={whatsapp} alt="whatsapp" />
      </Link>
    </div>
  );
};

export default SocialLink;
