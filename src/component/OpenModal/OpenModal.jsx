import Slider from "./Slider";

const OpenModal = ({ id }) => {
  return (
    <div>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box max-w-[65%] h-full ">
          <div>
            <Slider></Slider>
          </div>
          <h3 className="font-bold text-lg">Project Name: Harbor Homes</h3>
          <p className="py-2 text-lg font-bold">This is Real State project</p>
          <p className="pt-2 text-lg font-bold">Technology:</p>
          <p className="py-1 text-lg font-bold">Frontend: react,mui</p>
          <p className="py-1 text-lg font-bold">Backend: node,express</p>
          <p className="py-1 text-lg font-bold">Database: mongodb</p>

          <div>
            <p className="pt-5 text-lg font-bold">Links</p>
            <p className="text-lg font-bold">LiveLink: </p>
            <p className="text-lg font-bold">Github: </p>
          </div>

          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenModal;
