import React from "react";
import video from "../assets/video.mp4";
const Hero = () => {
  return (
    <header className="h-screen  text-white bg-black -z-20">
      <video
        className="h-full  w-full absolute   -z-1 "
        src={video}
        autoPlay
        loop
        muted
        disablePictureInPicture
      ></video>
      <div className="h-full w-full flex flex-col ">
        <div className="z-10 w-full mt-20 flex h-[80%] max-w-[1240px] mx-auto flex-col items-center  justify-center px-8 gap-4 text-center ">
          <h1>Decentralized</h1>
          <h1>
            <span className=" blue ">Trading </span>Protocol
          </h1>
          <p className="text-xl ">
            Guaranteed liquidity trading for millions of users and Ethereum
            applications.
          </p>
          <div className=" flex gap-4 p-4">
            <button>Use Deli</button>
            <button className="border border-white  bg-clip-text text-transparent hover:bg-clip-border hover:text-white ease-in-out duration-700">
              FAQ
            </button>
          </div>
        </div>
        <div className="text-center z-10 max-w-[1240px] mx-auto ">
          <p className="text-xl font-bold ">
            Total volume secured: $123,123,123,098.98
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
