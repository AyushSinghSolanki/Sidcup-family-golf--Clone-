import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import assets from "../assets";

export default function ParallaxCards() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const rotateXTo = useRef([]);
  const rotateYTo = useRef([]);

  useGSAP(
    () => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        rotateXTo.current[i] = gsap.quickTo(card, "rotateX", {
          duration: 0.5,
          ease: "power3.out",
        });

        rotateYTo.current[i] = gsap.quickTo(card, "rotateY", {
          duration: 0.5,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef },
  );

  const mouseEnter = (idx) => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      if (i === idx) {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(card.querySelector(".card-overlay"), {
          opacity: 1,
          duration: 0.3,
        });
      } else {
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.6,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  };

  const mouseLeave = () => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      gsap.to(card, {
        scale: 1,
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(card.querySelector(".card-overlay"), {
        opacity: 0,
        duration: 0.3,
      });
    });
  };

  const mouseMove = (e, idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

    const maxRotate = 15;

    rotateXTo.current[idx](-mouseY * maxRotate);
    rotateYTo.current[idx](mouseX * maxRotate);
  };

  return (
    <section
      ref={containerRef}
      className="card-main"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={(el) => (cardRefs.current[0] = el)}
        className="card"
        onMouseEnter={() => mouseEnter(0)}
        onMouseMove={(e) => mouseMove(e, 0)}
        onMouseLeave={mouseLeave}
      >
        <img src={assets.card1} className="card-img" alt="Toptracer Range" />

        <h2 className="card-text">TOPTRACER RANGE</h2>

        <div className="card-overlay" style={{ opacity: 0 }}>
          <h2 className="card-overlay-title">TOPTRACER RANGE</h2>

          <p className="card-overlay-sub">
            Practice with ball tracking technology, games and real-time
            statistics exactly like the official Sidcup Family Golf website.
          </p>
        </div>
      </div>

      <div
        ref={(el) => (cardRefs.current[1] = el)}
        className="card"
        onMouseEnter={() => mouseEnter(1)}
        onMouseMove={(e) => mouseMove(e, 1)}
        onMouseLeave={mouseLeave}
      >
        <img src={assets.card2} className="card-img" alt="Adventure Golf" />

        <h2 className="card-text">ADVENTURE GOLF</h2>

        <div className="card-overlay" style={{ opacity: 0 }}>
          <h2 className="card-overlay-title">ADVENTURE GOLF</h2>

          <p className="card-overlay-sub">
            Enjoy fun golf with friends and family on our exciting adventure
            course.
          </p>
        </div>
      </div>

      <div
        ref={(el) => (cardRefs.current[2] = el)}
        className="card"
        onMouseEnter={() => mouseEnter(2)}
        onMouseMove={(e) => mouseMove(e, 2)}
        onMouseLeave={mouseLeave}
      >
        <img src={assets.card3} className="card-img" alt="Golf Lessons" />

        <h2 className="card-text">GOLF LESSONS</h2>

        <div className="card-overlay" style={{ opacity: 0 }}>
          <h2 className="card-overlay-title">GOLF LESSONS</h2>

          <p className="card-overlay-sub">
            Learn from PGA professionals and improve every aspect of your game.
          </p>
        </div>
      </div>
    </section>
  );
}
