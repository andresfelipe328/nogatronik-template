"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const BasicAnimLayout = ({ children }: { children: React.ReactNode }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current!.childNodes,
        { y: -10, opacity: 0 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.5,
          ease: "elastic.out(1, 0.75)",
        }
      );

      return () => ctx.revert();
    }, rootRef);
  }, []);

  return (
    <div className="flex flex-col gap-4 p-2 max-w-7xl mx-auto" ref={rootRef}>
      {children}
    </div>
  );
};

export default BasicAnimLayout;
