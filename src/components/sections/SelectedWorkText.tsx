"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap";

import SelectedTextSVG from "../icons/SelectedTextSVG";

function SelectedWorkText() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const title = titleRef.current;

    if (!title) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 30,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        },
      );
    }, titleRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="y-folio__selected-works-wrapper pt-40 flex flex-col justify-center">
      <div className="container mx-auto flex justify-center">
        <div className="y-folio__selected-works-title-area">
          <h1
            ref={titleRef}
            className="y-folio__selected-works-title text-center relative flex flex-col"
          >
            <span className="y-folio__selected-works-title-text-span-on">
              <SelectedTextSVG />
            </span>
            <span className="y-folio__selected-works-title-text-span-second text-[#E0FFFB] text-[120px] font-bold z-3">
              Works
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default SelectedWorkText;
