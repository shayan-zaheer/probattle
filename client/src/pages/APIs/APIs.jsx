import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FiDownload,
  FiCopy,
  FiHeart,
  FiThumbsUp,
  FiThumbsDown,
} from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ApiPage = () => {
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();
  const [api, setApi] = useState(null);
  const [upvotes, setUpvotes] = useState(12);
  const [downvotes, setDownvotes] = useState(3);
  const [favorited, setFavorited] = useState(false);
  console.log(user);

  useEffect(() => {
    const getAPI = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/api/${id}`);
        setApi(data?.api);
        console.log(data?.api);
      } catch (err) {
        setApi({
          failure: err?.response?.data?.message || "This is a private API",
        });
      }
    };

    getAPI();
  }, [id]);

  if (api?.failure) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full min-h-screen flex items-center justify-center text-center"
      >
        <h1 className="text-white text-4xl font-semibold">{api.failure}</h1>
      </motion.div>
    );
  }

  const handleCopy = () => {
    if (api?.code) {
      navigator.clipboard.writeText(api.code);
      alert("Code copied to clipboard!");
    }
  };

  const handleDownload = () => {
    if (api?.code) {
      const blob = new Blob([api.code], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${api.name}.js`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const handleUpVote = () => {
    if (user) {
      try {
        const response = axios.patch(`http://localhost:8000/api/vote/${id}`);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-[#1a1c1ff8] flex flex-col items-center justify-start overflow-hidden"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-9/12 relative mx-auto md:rounded-2xl mt-28"
      >
        <div className="absolute inset-0 w-full h-full bg-cover bg-center blur-md rounded-2xl">
          <img
            src={"/HeroBackground.png"}
            alt="API Background"
            className="object-cover rounded-2xl w-full h-full"
          />
        </div>

        <div className="relative w-full min-h-full bg-black bg-opacity-60 md:rounded-2xl p-10 shadow-lg flex flex-col items-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-4xl font-semibold"
          >
            {api?.name || "API Not Found"}
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm flex items-center"
          >
            ✅ Safe to use
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-9/12 bg-[#22252b] p-6 rounded-xl shadow-lg mt-10 relative"
      >
        <div className="absolute top-4 right-4 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleDownload}
            className="text-gray-400 hover:text-white transition"
            disabled={!user}
          >
            <FiDownload size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition"
          >
            <FiCopy size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setFavorited(!favorited)}
            className={`transition ${
              favorited ? "text-red-500" : "text-gray-400"
            }`}
          >
            <FiHeart size={20} />
          </motion.button>
        </div>

        {/* Code Block */}
        <pre className="bg-[#1a1c1f] text-white text-sm p-4 my-6 rounded-lg overflow-x-auto">
          <code>{api?.code || "// No code available for this API"}</code>
        </pre>

        {/* Upvote & Downvote Section */}
        <div className="flex items-center gap-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setUpvotes(upvotes + 1)}
            className="flex items-center text-gray-400 hover:text-white transition"
          >
            <FiThumbsUp size={20} className="mr-1" onClick={handleUpVote} />{" "}
            {upvotes}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDownvotes(downvotes + 1)}
            className="flex items-center text-gray-400 hover:text-white transition"
          >
            <FiThumbsDown size={20} className="mr-1" /> {downvotes}
          </motion.button>
        </div>
      </motion.div>

      {/* Documentation Section */}
      <div className="w-9/12 p-8 mt-10 bg-[#22252b] rounded-xl shadow-lg">
        <h2 className="text-white text-2xl font-semibold">Documentation</h2>
        <p className="text-gray-400 mt-2">
          {api?.documentation || "No documentation available."}
        </p>
      </div>
    </div>
  );
};

export default ApiPage;
