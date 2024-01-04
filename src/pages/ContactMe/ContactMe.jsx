import Divider from "../../component/Share/Divider";
import SectionTitle from "../../component/Share/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

AOS.init();
const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const mess = form.mess.value;

    const emailMess = {
      user_name: name,
      user_email: email,
      message: mess,
    };

    emailjs
      .send(
        "service_vqkubzn",
        "template_jr5twkd",
        emailMess,
        "Vf6SwbM32LIPJI-sS"
      )
      .then(
        function (response) {
          // console.log("SUCCESS!", response.status, response.text);
          toast.success("Successfully Send!");
          form.reset();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div id="contactme">
      <SectionTitle title="CONTACT ME"></SectionTitle>
      <Divider></Divider>

      <div className="pt-5 pb-10 px-5">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className="  mx-auto  md:w-3/4 w-full rounded-xl shadow-2xl bg-[#5055575e]"
        >
          <h2></h2>
          <form ref={form} onSubmit={sendEmail} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-textColor">Name</span>
              </label>
              <input
                name="name"
                type="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-textColor">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-textColor">Message</span>
              </label>
              <textarea
                name="mess"
                placeholder="your message"
                className="textarea textarea-bordered textarea-lg w-full "
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn border-none bg-BtnColor text-primaryColor hover:text-textColor hover:bg-primaryColor font-bold text-lg ">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
    // </div>
  );
};

export default ContactMe;
