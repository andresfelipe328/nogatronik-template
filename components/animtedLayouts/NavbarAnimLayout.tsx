"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const NavbarAnimLayout = ({ children }: { children: React.ReactNode }) => {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.current!.childNodes,
        {
          opacity: 0,
          y: 15,
        },
        {
          y: 0,
          opacity: 1,
          stagger: {
            each: 0.2,
            from: "edges",
          },
          delay: 0.5,
          duration: 2.5,
          ease: "elastic.out(1.25, .5)",
        }
      );

      return () => ctx.revert();
    }, root);
  }, []);
  return (
    <header
      className="flex items-center justify-between p-4 backdrop-blur-sm sticky top-0 shadow-small-shadow z-10"
      ref={root}
    >
      {children}
    </header>
  );
};

export default NavbarAnimLayout;
