const Banner = () => {
  return (
    <div
      className="bg-center bg-covers bg-no-repeat border-none "
      style={{
        backgroundImage: "url(/src/assets/cover.png)",
        // backgroundSize: "100%",
      }}
    >
      <div className="bg-[#080808b2] text-center text-neutral-content -z-10">
        <div className="flex md:p-16 p-5 gap-5 items-center sm:flex-row flex-col justify-between">
          <div className="md:w-1/2 w-full flex items-center sm:order-1 order-2">
            <div>
              <h1
                style={{ textShadow: "2px 4px 15px rgba(245,245,245,0.50)" }}
                className="mb-5 text-5xl font-bold drop-shadow-lg "
              >
                Abedin Wahid
              </h1>
              <p
                style={{ textShadow: "2px 4px 15px rgba(245,245,245,0.50)" }}
                className="text-2xl font-bold mb-2"
              >
                Frontend Developer | React.js Enthusiast | Open to Opportunities
              </p>
              <p
                style={{ textShadow: "2px 4px 15px rgba(245,245,245,0.50)" }}
                className="text-xl font-bold mb-5"
              >
                Email: abedinwahid9@gmail.com
              </p>

              <button className="btn border-none bg-BtnColor text-primaryColor hover:text-textColor hover:bg-primaryColor font-bold text-lg ">
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
