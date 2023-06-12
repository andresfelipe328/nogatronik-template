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
          y: 5,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "elastic.out(1, 0.75)",
        }
      );

      return () => ctx.revert();
    }, root);
  }, []);
  return (
    <header className="flex items-center justify-between p-4" ref={root}>
      {children}
    </header>
  );
};

export default NavbarAnimLayout;
