import React from "react";
import assets from "../assets";
const Hero = () => {
  return (
    <>
      <section>
        <div>
          <video
            muted
            autoPlay
            loop
            playsInline
            className="fixed inset-0 -z-10 w-full h-screen object-cover"
          >
            <source src={assets.video} type="video/mp4" />
          </video>

          <div className="fixed bg-black/40 z-0 inset-0 hero-overlay" />

          {/* Content Container */}
          <div className="relative z-10 w-full flex gap-2  flex-col h-screen items-center justify-center text-white">
            <h1 className="hero-text">
              <span className="hero-text-span">Eat. Drink. Play.</span>
              Eat. Drink. Play.
            </h1>

            <h3 className=" text-4xl font-bold text-center uppercase mb-4">
              Welcome to Sidcup Family Golf
            </h3>

            <p className="text-lg uppercase text-center w-[40%]">
              Welcome to Sidcup Family Golf Sidcup Family Golf is a Toptracer
              golf venue in Sidcup, South East London. Passionate about
              technology, player development and making golf fun and accessible
              to everyone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
