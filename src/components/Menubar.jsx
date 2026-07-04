import React, { useState } from "react";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";

const Menubar = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const foodImages = {
    1: food1,
    2: food2,
    3: food3,
  };

  return (
    <section className="relative w-full min-h-150 bg-black text-white flex items-center justify-center px-8 py-16 md:px-16 overflow-hidden select-none">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-50 items-center relative z-10">
        <div className="flex flex-col items-center w-full">
          <div className="`w-70 md:`w-80 aspect-4/3 rounded-2xl overflow-hidden shadow-2xl mx-auto">
            <img
              src={foodImages[currentSlide]}
              alt="Food and Drink"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
          </div>

          <div className="flex items-center gap-3 mt-6">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentSlide(num)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === num
                    ? 'w-4 h-4 bg-transparent border-2 border-[#a3e635] p-1 flex items-center justify-center after:content-[""] after:w-1.5 after:h-1.5 after:bg-[#a3e635] after:rounded-full'
                    : "w-2 h-2 bg-gray-500 hover:bg-white"
                }`}
                aria-label={`Go to slide ${num}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-black tracking-wide text-white uppercase">
            FOOD AND DRINK
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-normal">
            Whether you're getting ready to play, just finishing your practice
            session or feeling peckish on the range, we have a variety of food
            and drink options bought directly to your table or bay.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-normal">
            We make sure that we cater for everyone, offering a range of vegan
            and gluten free options.
          </p>

          <div className="pt-4">
            <button className="px-8 py-3 rounded-full border border-[#a3e635] bg-transparent text-sm font-semibold tracking-wider text-white uppercase hover:bg-[#a3e635] hover:text-black transition-all duration-300">
              COFFEE SHOP
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-8 opacity-40 hidden md:grid grid-cols-4 gap-2">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
        ))}
      </div>

      <div className="absolute top-0 right-0`w-100 `h-100 bg-lime-950/20 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Menubar;
