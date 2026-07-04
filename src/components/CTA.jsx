import React from "react";
import assets from "../assets";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#64c51e] py-12 md:py-16">
      {/* Left Decoration */}
      <img
        src={assets["dots-side"] || assets.dotsSide}
        alt="decor-left"
        className="
          absolute left-0 top-1/2
          w-20 sm:w-28 md:w-36
          -translate-y-1/2
          opacity-40
        "
      />

      {/* Right Decoration */}
      <img
        src={assets["dots-side"] || assets.dotsSide}
        alt="decor-right"
        className="
          absolute right-0 top-1/2
          w-20 sm:w-28 md:w-36
          -translate-y-1/2 rotate-180
          opacity-40
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-4 sm:px-6 text-center">
        <h2
          className="
          text-lg sm:text-xl md:text-3xl
          font-black uppercase leading-snug text-black
        "
        >
          Sign Up for Sidcup News Special
          <br />
          Offers
          <br />
          Straight to Your Inbox
        </h2>
      </div>
    </section>
  );
};

export default CTA;
