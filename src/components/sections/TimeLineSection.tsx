"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap";

import CtaBtn from "../buttons/ButtonCta";
import ArrowIcon from "../icons/ArrowIcon";
import TimelineCard from "./TimeLineCard";
import { ArrowUpRight } from "@phosphor-icons/react";

const timelineCards = [
    {
    id: 1,
    title: "Waitlist to Creator Network",
    description:
      "Turning an existing creator database into an verified network.",
  },
  {
    id: 2,
    title: "Creator Data Into Identity",
    description:
      "Turning existing creator profiles into an onboarding channel.",
  },
  {
    id: 3,
    title: "Agency Pitch Into a Story",
    description:
      "This is abt he detailed explanation of project, which last 2 lines",
  },

];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const hover = hoverRef.current;
    const cta = ctaRef.current;

    if (!section || !hover || !cta) return;

    let hoverDelay: gsap.core.Tween | null = null;

    const ctx = gsap.context(() => {
      gsap.set(hover, {
        autoAlpha: 0,
        pointerEvents: "none",
      });

      gsap.set(cta, {
        autoAlpha: 0,
        y: 20,
        scale: 0.95,
      });
    }, section);

    const showTimeline = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.out" },
    });

    showTimeline
      .to(hover, {
        autoAlpha: 1,
        duration: 0.4,
        pointerEvents: "auto",
      })
      .to(
        cta,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.15",
      );

    const handleMouseEnter = () => {
      hoverDelay?.kill();

      hoverDelay = gsap.delayedCall(1.5, () => {
        showTimeline.play();
      });
    };

    const handleMouseLeave = () => {
      hoverDelay?.kill();
      hoverDelay = null;
      showTimeline.reverse();
    };

    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
      hoverDelay?.kill();
      showTimeline.kill();
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="
        timeline-section-wrapper
        relative
        mx-auto
        h-auto
        md:w-[calc(100%-2rem)]
        sm:w-full
        md:w-[90%]
        lg:h-[45rem]
        lg:w-[80%]
        xl:w-[70%]
      "
    >
      <div className="container mx-auto h-full">
        <div
          ref={sectionRef}
          className="
            timeline-section
            relative
            h-auto
            overflow-hidden
            rounded-[28px]
            sm:rounded-[40px]
            lg:h-full
            lg:rounded-[80px]
          "
        >
          {/* Initial timeline state */}

          <div
            className="
              timeline-section-initial
              timeline-section-gradient-effect
              relative
              h-auto
              px-5
              py-8
              sm:px-8
              sm:py-10
              md:px-10
              md:py-12
              lg:h-full
              lg:px-14
              lg:py-12
            "
          >
            <div className="timeline-heading mb-8 sm:mb-10 lg:mb-12">
              <h2
                className="
                  timeline-title
                  block
                  text-center
                  text-[clamp(1.75rem,5vw,3rem)]
                  font-semibold
                  leading-none
                  tracking-wide
                  text-white
                "
              >
                Selected Works
              </h2>
            </div>

            <div
              className="
                timeline-cards
                grid
                gap-y-6
                sm:gap-y-8
                lg:gap-y-6
              "
            >
              {timelineCards.map((card, index) => (
                <div
                  key={card.id}
                  className={
                    index % 2 === 0
                      ? "w-full justify-self-end sm:w-[80%] md:w-[60%] lg:w-auto min-[1024px]:max-[1279px]:mx-auto"
                      : "w-full justify-self-start sm:w-[80%] md:w-[60%] lg:w-auto min-[1024px]:max-[1279px]:mx-auto"
                  }
                >
                  <TimelineCard
                    title={card.title}
                    description={card.description}
                  />
                </div>
              ))}
            </div>

            <div className="y-folio__timeline-gradient-circle" />
          </div>

          {/* Hover overlay */}

          <div
            ref={hoverRef}
            aria-hidden="true"
            className="
              timeline-section-hover
              absolute
              inset-0
              z-10
              flex
              items-center
              justify-center
              rounded-[28px]
              bg-black/80
              sm:rounded-[40px]
              lg:rounded-[80px]
            "
          >
            <div ref={ctaRef}>
              <a
                href="/works"
                className="y-folio__cta-btn group flex items-center justify-center gap-2 rounded-md bg-[#07DE9A] px-5 py-2 text-sm font-medium transition-colors hover:bg-[#03B197] sm:px-6 sm:py-2 sm:text-base"
              >
                <span>View all</span>
                <ArrowUpRight
                  weight="regular"
                  aria-hidden="true"
                  className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="y-folio__timeline-section-card-gradient-strip py-20 absolute w-full"></div>
    </section>
  );
}

