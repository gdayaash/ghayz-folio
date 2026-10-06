"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap";

import CtaBtn from "../buttons/ButtonCta";
import ArrowIcon from "../icons/ArrowIcon";
import TimelineCard from "./TimeLineCard";

const timelineCards = [
  {
    id: 1,
    title: "Topic will be placed here",
    description:
      "This is abt he detailed explanation of project, which last 2 lines",
  },
  {
    id: 2,
    title: "Topic will be placed here",
    description:
      "This is abt he detailed explanation of project, which last 2 lines",
  },
  {
    id: 3,
    title: "Topic will be placed here",
    description:
      "This is abt he detailed explanation of project, which last 2 lines",
  },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const initialRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const hover = hoverRef.current;
    const cta = ctaRef.current;
    const initial = initialRef.current;

    if (!section || !hover || !cta || !initial) return;

    const ctx = gsap.context(() => {
      const hoverTimeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power2.out",
        },
      });

      // Initial state
      gsap.set(hover, {
        opacity: 0,
      });

      gsap.set(cta, {
        opacity: 0,
        y: 20,
        scale: 0.95,
      });

      // Hover animation
      hoverTimeline
        .to(hover, {
          opacity: 1,
          duration: 0.45,
        })
        .to(
          cta,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.2",
        );

      const handleMouseEnter = () => {
        hoverTimeline.play();
      };

      const handleMouseLeave = () => {
        hoverTimeline.reverse();
      };

      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative mx-auto w-[70%] timeline-section-wrapper">
      <div className="container mx-auto">
        <div
          ref={sectionRef}
          className="timeline-section relative overflow-hidden rounded-[60px]"
        >
          {/* Initial timeline state */}
          <div
            ref={initialRef}
            className="timeline-section-initial timeline-section-gradient-effect px-14 py-12"
          >
            <div className="timeline-heading mb-12">
              <h2
                className="
                  timeline-title
                  block
                  text-center
                  text-[clamp(1.75rem,4vw,3rem)]
                  font-semibold
                  leading-none
                  tracking-wide
                  text-white

                "
              >
                Time Line
              </h2>
            </div>

            <div className="timeline-cards grid">
              {timelineCards.map((e, index) => (
                <div
                  key={e.id}
                  className={
                    index % 2 === 0 ? "justify-self-start" : "justify-self-end"
                  }
                >
                  <TimelineCard title={e.title} description={e.description} />
                </div>
              ))}
            </div>

            {/* Gradient Circle  */}
            <div className="y-folio__timeline-gradient-circle"></div>
          </div>

          {/* Hover state */}
          <div
            ref={hoverRef}
            className="
              timeline-section-hover
              absolute
              inset-0
              flex
              items-center
              justify-center
              rounded-[60px]
              bg-black/80
            "
          >
            <div ref={ctaRef}>
              <CtaBtn
                className="
                  y-folio__cta-btn
                  group
                  flex
                  items-center
                  gap-2
                  rounded-md
                  bg-[#07DE9A]
                  px-6
                  py-2
                  font-medium
                "
              >
                View all
                <ArrowIcon />
              </CtaBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
