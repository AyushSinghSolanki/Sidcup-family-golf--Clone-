import React, { useRef, useEffect } from "react";
import assets from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const overlayRef = useRef();

  useEffect(() => {
    gsap.to(overlayRef.current, {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: overlayRef.current,
        scrub: 0.5,
        start: "top top",
        end: "+=500",
      },
    });
  }, []);

  return (
    <section>
      <div>
        {/* VIDEO BACKGROUND (UNCHANGED) */}
        <video
          muted
          autoPlay
          loop
          playsInline
          className="fixed inset-0 -z-10 w-full h-screen object-cover"
        >
          <source src={assets.video} type="video/mp4" />
        </video>

        {/* OVERLAY (UNCHANGED) */}
        <div
          ref={overlayRef}
          className="fixed bg-black/40 z-0 inset-0 hero-overlay"
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full flex flex-col gap-2 h-screen items-center justify-center text-white px-4 text-center">
          {/* HERO TEXT */}
          <h1 className="hero-text text-center leading-none mx-auto flex flex-col items-center justify-center">
            <span className="hero-text-span block">Eat. Drink. Play.</span>
            <span className="block">Eat. Drink. Play.</span>
          </h1>

          {/* SUBTITLE */}
          <h3 className="text-xl md:text-4xl font-bold text-center uppercase mb-4 mx-auto">
            Welcome to Sidcup Family Golf
          </h3>

          {/* PARAGRAPH */}
          <p className="text-sm font-medium md:text-lg uppercase text-center w-full md:w-[40%] mx-auto">
            Welcome to Sidcup Family Golf Sidcup Family Golf is a Toptracer golf
            venue in Sidcup, South East London. Passionate about technology,
            player development and making golf fun and accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
