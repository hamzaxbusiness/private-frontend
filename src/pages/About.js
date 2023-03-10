import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="absolute top-[80px] w-screen">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto" bis_skin_checked="1">
              <div
                class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center"
                bis_skin_checked="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="inline-block w-8 h-8 text-gray-200 mb-8"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed text-lg text-gray-200">
                  VIP Escort services in Lahore city. Want to have a good time?
                  Is your wife, Girlfriend not giving attention? so you come on
                  the right place. Here we deal with you respectively and will
                  find your partner of your choice. We have most expensive VIP
                  escorts and also have cheap ones. We have young, Milf,
                  cougars, college and university girls, housewife and many
                  more. Depending on your budget we can arrange whatever you
                  want. We also provide room and other stuff.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-red-600 mt-8 mb-6"></span>
                <h2 class="text-gray-300 font-medium title-font tracking-wider text-2xl">
                  Lahore Escort
                </h2>
                
              </div>
            </div>
          </section>
          <div className="bottom-0">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
