"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const Cursor = () => {

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {
      gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <div className="cursor fixed top-0 left-0 w-10 h-10 border-2 border-orange-400/30 rounded-full pointer-events-none z-999  -translate-x-1/2 -translate-y-1/2">
    </div>
  );
};

export default Cursor;