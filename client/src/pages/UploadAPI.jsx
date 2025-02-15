import React, { useState } from "react";
import { motion } from "framer-motion";

const UploadAPI = () => {
  const [apiData, setApiData] = useState({
    name: "",
    language: "javascript",
    documentation: "",
    code: "",
    owner: "",
    visibility: "public",
    baseUrl: "",
    cost: 0,
  });

  const handleChange = (e) => {
    setApiData({ ...apiData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("API Submitted:", apiData);
  };

  return (
    <div className="w-full min-h-screen bg-[#1a1c1ff8] flex flex-col items-center justify-start overflow-x-hidden">
      <div className="w-9/12 relative mx-auto md:rounded-2xl mt-32 lg:h-[500px]">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center blur-md rounded-2xl">
          <img
            src={"/HeroBackground.png"}
            alt="Upload API Background"
            className="object-cover rounded-2xl w-full h-full"
          />
        </div>

        <div className="relative w-full min-h-full bg-black bg-opacity-60 md:rounded-2xl p-10 shadow-lg">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col w-full"
          >
            {/* Heading */}
            <h1 className="text-white text-5xl md:text-6xl font-semibold text-center">
              Upload Your{" "}
              <span className="bg-gradient-to-r from-[#00E8FC] via-[#D400A5] to-[#6A00F4] text-transparent bg-clip-text">
                API
              </span>
            </h1>
            <p className="text-slate-300 text-center md:text-lg font-semibold mt-4">
              Share your API with the world! Provide details and upload your API effortlessly.
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full mt-6 bg-[#22252b] p-8 rounded-lg shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={apiData.name}
                  onChange={handleChange}
                  placeholder="API Name"
                  className="w-full px-4 py-3 text-white bg-[#1a1c1f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A00F4] shadow-md"
                  required
                />

                <select
                  name="language"
                  value={apiData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-[#1a1c1f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A00F4] shadow-md"
                  required
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                </select>
              </div>

              <input
                type="text"
                name="baseUrl"
                value={apiData.baseUrl}
                onChange={handleChange}
                placeholder="Base URL"
                className="w-full px-4 py-3 mt-4 text-white bg-[#1a1c1f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A00F4] shadow-md"
                required
              />

              <textarea
                name="documentation"
                value={apiData.documentation}
                onChange={handleChange}
                placeholder="API Documentation (Describe how to use it)"
                className="w-full px-4 py-3 mt-4 text-white bg-[#1a1c1f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A00F4] shadow-md"
                rows="4"
                required
              />

              <textarea
                name="code"
                value={apiData.code}
                onChange={handleChange}
                placeholder="Controller Code (Paste your API controller code here)"
                className="w-full px-4 py-3 mt-4 text-white bg-[#1a1c1f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A00F4] shadow-md"
                rows="6"
                required
              />

<select
                  name="visibility"
                  value={apiData.visibility}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-[#1a1c1f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A00F4] shadow-md"
                  required
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>

              <input
                type="number"
                name="cost"
                value={apiData.cost}
                onChange={handleChange}
                placeholder="Cost ($0 for free)"
                className="w-full px-4 py-3 mt-4 text-white bg-[#1a1c1f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A00F4] shadow-md"
              />

              <div className="flex justify-start gap-x-10 max-sm:gap-x-5 mt-6">
                <button
                  type="submit"
                  className="relative px-6 py-3 font-semibold text-white bg-transparent border border-white hover:border-transparent overflow-hidden group rounded-sm transition-transform duration-300 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00E8FC] via-[#D400A5] to-[#6A00F4] transition-all duration-300 ease-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                  <span className="relative z-10 text-white">Submit API</span>
                </button>
                <button
                  type="reset"
                  className="relative px-6 py-3 font-semibold text-white bg-transparent border border-white hover:border-transparent overflow-hidden group rounded-sm transition-transform duration-300 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-800 transition-all duration-300 ease-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                  <span className="relative z-10 text-white">Reset</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UploadAPI;
