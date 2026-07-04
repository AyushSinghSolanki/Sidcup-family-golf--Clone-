import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrImg from "../assets/arr.png";

gsap.registerPlugin(ScrollTrigger);

const Announcement = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const topIconRef = useRef(null);
  const bottomIconRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    {
      id: 1,
      text: "EXCELLENT COUPLE OF HOURS, RELAX AND ENJOY IN THE FUN. STAFF WERE ACCOMMODATING, FRIENDLY AND VERY HELPFUL. CAFÉ ON SITE FOR REFRESHMENTS ETC.",
    },
    {
      id: 2,
      text: "PLEASANTLY SURPRISED TO DISCOVER THE MINI GOLF IS OPEN UNTIL 10PM DURING WEEKDAYS 😊 ALWAYS ENJOY VISIT HERE.",
    },
  ];

  // -------------------------
  // 1. SCROLL ANIMATION (ICON ZOOM IN)
  // -------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [topIconRef.current, bottomIconRef.current],
        {
          scale: 0,
          opacity: 0,
          y: 80,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // -------------------------
  // 2. AUTO TEXT CHANGE EVERY 5s (SMOOTH FADE)
  // -------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % announcements.length;

      const tl = gsap.timeline({
        onComplete: () => setCurrentIndex(nextIndex),
      });

      // fade out
      tl.to(textRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 0.4,
        ease: "power2.inOut",
      });

      // fade in new text
      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: -30,
          scale: 1.02,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        },
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // -------------------------
  // 3. CLICK WIGGLE
  // -------------------------
  const handleWiggle = () => {
    gsap.killTweensOf(textRef.current);

    gsap.fromTo(
      textRef.current,
      { rotation: -2, x: -8 },
      {
        rotation: 2,
        x: 8,
        repeat: 5,
        yoyo: true,
        duration: 0.06,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(textRef.current, {
            rotation: 0,
            x: 0,
            duration: 0.3,
            ease: "elastic.out(1,0.4)",
          });
        },
      },
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-125 bg-black text-white flex items-center justify-center px-6 py-16 overflow-hidden"
    >
      <div className="max-w-4xl w-full relative text-center">
        {/* TOP ICON */}
        <div ref={topIconRef} className="absolute -top-20 -left-20 w-20 h-20">
          <img
            src={arrImg}
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter: "invert(70%) sepia(90%) saturate(500%) hue-rotate(80deg)",
            }}
          />
        </div>

        {/* TEXT */}
        <h2
          ref={textRef}
          onClick={handleWiggle}
          className="cursor-pointer text-xl md:text-4xl font-extrabold uppercase leading-relaxed tracking-wide px-6 select-none"
        >
          {announcements[currentIndex].text}
        </h2>

        {/* BOTTOM ICON */}
        <div
          ref={bottomIconRef}
          className="absolute -bottom-20 -right-20 w-20 h-20 rotate-180"
        >
          <img
            src={arrImg}
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter: "invert(70%) sepia(90%) saturate(500%) hue-rotate(80deg)",
            }}
          />
        </div>
      </div>

      {/* glow */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-lime-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-lime-500/10 blur-[100px] rounded-full" />
    </section>
  );
};

export default Announcement;
