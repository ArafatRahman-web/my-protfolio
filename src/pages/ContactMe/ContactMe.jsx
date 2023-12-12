import Divider from "../../component/Share/Divider";
import SectionTitle from "../../component/Share/SectionTitle";

const ContactMe = () => {
  return (
    <div id="#contactme">
      <SectionTitle title="CONTACT ME"></SectionTitle>
      <Divider></Divider>
      <div className="contactMe  bg-[#000]  ">
        <div className="pt-40 pb-10 ">
          <div className="  mx-auto w-1/2 rounded-xl shadow-2xl bg-[#5055575e]">
            <h2></h2>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-textColor">Name</span>
                </label>
                <input
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
                  placeholder="your message"
                  className="textarea textarea-bordered textarea-lg w-full "
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn border-none bg-BtnColor text-primaryColor hover:text-textColor hover:bg-primaryColor font-bold text-lg ">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
