const Banner = () => {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat drop-shadow-lg "
      style={{
        backgroundImage: "url(/src/assets/cover.png)",
        // backgroundSize: "100%",
      }}
    >
      <div className="bg-[#0808089c] text-center text-neutral-content">
        <div className="flex md:p-16 p-5 gap-5 items-center sm:flex-row flex-col justify-between">
          <div className="md:w-1/2 w-full flex items-center sm:order-1 order-2">
            <div>
              <h1 className="mb-5 text-5xl font-bold">Abedin Wahid</h1>
              <p className="text-xl mb-5">
                Frontend Developer | React.js Enthusiast | Open to Opportunities
              </p>
              <button className="btn border-none bg-BtnColor text-primaryColor hover:text-BtnColor font-bold text-lg ">
                Download Resume
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center sm:order-2 order-1">
            <div className="w-1/2">
              <img
                style={{ borderRadius: " 0% 0% 48% 52% / 25% 30% 25% 24%" }}
                src="/src/assets/dp-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
