import React from "react";
import heroimg from "../assets/heroimg.png";  

const Hero = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight text-left">
            Your Next <span className="text-[#7d0f18]">Career Step</span><br />Starts Here
          </h1>

          <p className="mt-5 text-gray-600 text-lg text-left">
            Find the right job opportunity with a seamless hiring process. Upload your details,
            showcase your skills, and let us connect you with the role you deserve.
          </p>

          {/* Search Form */}
          <div className="mt-8 bg-white p-3 rounded-xl shadow-sm flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-2 max-w-2xl">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none text-gray-700 placeholder-gray-400 w-full"
            />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none text-gray-700 placeholder-gray-400 w-full"
            />
            <button className="w-full md:w-auto px-6 py-3 bg-[#7d0f18] text-white rounded-lg font-medium hover:bg-[#5c0b12] transition">
              Search
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-600 text-left">
            Popular:{" "}
            <span className="text-gray-800">
              Software Developer, Marketing, Finance, Healthcare, Remote
            </span>
          </p>
        </div>

        {/* Right Side Single Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroimg}
            alt="hero"
            className="w-full max-w-[420px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
