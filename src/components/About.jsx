import React from 'react'
import assets from '../assets';

const About = () => {
  return (
    <>
      <section className="relative z-30 py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Image */}
          <div className="relative">
            <img
              className="w-125 object-cover rounded-2xl shadow-xl"
              src={assets.img1}
              alt="About Left"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          </div>

          {/* Text */}
          <div className="max-w-3xl text-center">
            <h3 className="text-5xl font-bold uppercase mb-6">About Us</h3>

            <p className="text-lg leading-8 text-gray-300">
              Home to a 46-bay, multi-tier, floodlit driving range, powered by
              Toptracer Range technology. Complimented by a practice green and
              bunker, coffee shop and American Golf Store. There truly is
              something for everyone as we also boast two outdoor 18-hole
              dinosaur themed crazy golf courses.
              <br />
              <br />
              Please note: we are a cashless venue. The range closes at 10pm
              with last balls at 9pm.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              className="w-125 object-cover rounded-2xl shadow-xl"
              src={assets.img2}
              alt="About Right"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About
