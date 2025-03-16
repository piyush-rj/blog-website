import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Animate outer circle (lag effect)
      gsap.to(trailPosition, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, // Smooth lag
        onUpdate: () => setTrailPosition({ ...trailPosition }),
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [trailPosition]);

  return (
    <>
      {/* Inner Circle (small & solid) */}
      <div
        className="inner-circle"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />
      
      {/* Outer Circle (big & just a border) */}
      <div
        className="outer-circle"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default Cursor;
