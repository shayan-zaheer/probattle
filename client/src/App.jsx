import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import APIs from "./pages/APIs/APIs";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import UploadAPI from "./pages/UploadAPI";
import ApiPage from "./pages/APIs/APIs";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<APIs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<UploadAPI />} />
        <Route path="/apis/:language" element={<ApiPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      {/* <Footer /> */}
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
