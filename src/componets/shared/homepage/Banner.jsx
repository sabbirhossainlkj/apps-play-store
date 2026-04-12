import React from "react";
import bennerimg from '../../../assets/images/hero.png'

const Banner = () => {
  return (
    <div className="text-center space-y-4 pt-10">
      <h1 className="text-5xl font-bold">We Build Productive Apps</h1>
      <p className="text-lg text-gray-400">
        At HERO.IO , we craft innovative apps designed to <br />make everyday life simpler, smarter,  and more exciting.Our goal is to turn your ideas <br /> into digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-3 ">
        <button className="btn btn-primary">play store</button>
        <button className="btn btn-secondary">app store</button>
      </div>
      <img className="mx-auto" src={bennerimg} alt="Hero Banner" />
    </div>
  );
};

export default Banner;
