import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const cursorRef = useRef(null);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      // Small Cursor
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: "power2.out",
      });

      // Big Bubble
      gsap.to(bubbleRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Floating (Bobble) Animation
    gsap.to(bubbleRef.current, {
      y: "+=35",
      x: "+=15",
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Breathing Effect
    gsap.to(bubbleRef.current, {
      scale: 1.15,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Slight Rotation
    gsap.to(bubbleRef.current, {
      rotation: 8,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Big Green Light Bubble */}
      <div
        ref={bubbleRef}
        className="fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-9998"
        style={{
          width: "800px",
          height: "300px",
          borderRadius: "50%",
          animationDelay: "5s",
          background:
            "radial-gradient(circle at center, rgba(132,255,80,0.35) 0%, rgba(72,255,0,0.18) 35%, rgba(72,255,0,0.08) 60%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />

      {/* Small Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-green-400 border border-green-200 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-9999"
      />
    </>
  );
};

export default MouseFollower;
