import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[100%] mx-auto">
      <div className="max-h-[800px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[800px] bg-black/70 flex flex-col justify-center">
          <div className="flex flex-col text-center">
            <div className="">
              <h1 className="px-4 text-3xl mt-10 sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                The <span className="text-red-700 ">LAHORE</span>
              </h1>
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
                {" "}
                <span className="text-red-700">ESCORT </span>
              </h1>
            </div>
            <div className="hidden sm:flex justify-center text-center w-full">
              <p className="w-[50%] sm:text-2xl mt-10 font-extralight flex justify-center align-middle">
                VIP Escort services in Lahore city. Want to have a good time? Is
                your wife, Girlfriend not giving attention? so you come on the
                right place. Here we deal with you respectively and will find
                your partner of your choice. We have most expensive VIP escorts
                and also have cheap ones.
              </p>
            </div>
          </div>
        </div>
        <img
          className="w-full max-h-[800px] object-cover"
          src="https://r4.wallpaperflare.com/wallpaper/178/750/415/sexy-girl-theme-background-images-wallpaper-294fc91c0df16db8596229963b2e7818.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
