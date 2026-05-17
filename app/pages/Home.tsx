import React from "react";
import HomeLeft from "../Landing/Home/HomeLeft";
import HomeRight from "../Landing/Home/HomeRight";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-x-hidden">
      <Navbar />
      <div className="mt-32 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 w-full px-6 lg:px-16 pb-10">
        <HomeLeft />
        <div className="hidden min-[600px]:block">
          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default Home;
