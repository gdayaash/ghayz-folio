"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import SelectedWorkCard from "../cards/SelectedWorkCard";

const works = [
  {
    id: 1,
    title: "Waitlist",
    description:
      "This is abt he detailed explanation of project, which last 2 lines",
    image: "/images/case-study/waitlist-bg.png",
  },
  {
    id: 2,
    title: "Creator",
    description:
      "This is abt he detailed explanation of project, which last 2 lines",
    image: "/images/case-study/creator-bg.png",
  },
  {
    id: 3,
    title: "Agency",
    description:
      "This is abt he detailed explanation of project, which last 2 lines",
    image: "/images/case-study/agency-bg.png",
  },
];

export default function SelectedWorksScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const pointerTrackRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const pointerTrack = pointerTrackRef.current;
    const activeLine = activeLineRef.current;

    if (!section || !line || !pointerTrack || !activeLine) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".y-folio__selected-work-card-slot",
      );

      if (!cards.length) return;

      // Initial states
      gsap.set(pointerTrack, { opacity: 0, y: 0 });
      gsap.set(line, {
        opacity: 0,
        backgroundPositionY: "0px",
      });
      gsap.set(activeLine, { opacity: 0, y: 0 });
      gsap.set(cards, { opacity: 0, y: 50 });

      let entryFinished = false;

      // Initial entry sequence
      const entryTimeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          entryFinished = true;
        },
      });

      // Initial pause
      entryTimeline.to({}, { duration: 0.7 });

      // Pointer appears
      entryTimeline.to(pointerTrack, {
        opacity: 1,
        duration: 0.55,
        ease: "power2.out",
      });

      entryTimeline.to({}, { duration: 0.15 });

      // Dashed line appears
      entryTimeline.to(line, {
        opacity: 1,
        duration: 0.65,
        ease: "power2.out",
      });

      entryTimeline.to({}, { duration: 0.2 });

      // Glowing segment appears
      entryTimeline.to(activeLine, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      entryTimeline.to({}, { duration: 0.3 });

      // First card enters
      if (cards[0]) {
        entryTimeline.to(cards[0], {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      }

      // Start the entry sequence
      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        once: true,
        onEnter: () => entryTimeline.play(),
      });

      // Dashed line and pointer react to scroll
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",

        onUpdate: (self) => {
          if (!entryFinished) return;

          const dashOffset = (self.progress * 360) % 18;

          gsap.set(line, {
            backgroundPositionY: `${dashOffset}px`,
          });

          const velocity = self.getVelocity();
          const offset = gsap.utils.clamp(-100, 100, velocity * 0.09);

          gsap.to([pointerTrack, activeLine], {
            y: offset,
            duration: 0.35,
            ease: "power3.out",
            overwrite: true,
          });
        },

        onLeave: () => {
          if (!entryFinished) return;

          gsap.to([pointerTrack, activeLine], {
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.4)",
          });
        },

        onEnterBack: () => {
          if (!entryFinished) return;

          gsap.to([pointerTrack, activeLine], {
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });

      // Reveal the remaining cards as they approach the viewport center
      cards.slice(1).forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "center 75%",
            toggleActions: "play none none reverse",
          },
        });
      });

      ScrollTrigger.refresh();

      return () => {
        entryTimeline.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="y-folio__selected-works-scene-wrapper">
      <div className="container y-folio__selected-works-scene mx-auto">
        <div className="y-folio__selected-works-grid">
          {/* Timeline */}
          <div className="y-folio__selected-works-center">
            <div className="y-folio__selected-works-center-sticky">
              <div className="y-folio__selected-works-center-content">
                <div ref={lineRef} className="y-folio__selected-works-line" />

                <div
                  ref={activeLineRef}
                  className="y-folio__selected-works-active-line"
                />

                <div
                  ref={pointerTrackRef}
                  className="y-folio__selected-works-pointer-track"
                >
                  <div className="y-folio__selected-works-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* First card: right */}
          <div
            className="
              y-folio__selected-work-card-slot
              y-folio__selected-work-card-slot--right
              y-folio__selected-work-card-slot--row-1
            "
          >
            <SelectedWorkCard
              title={works[0].title}
              description={works[0].description}
              image={works[0].image}
            />
          </div>

          {/* Second card: left */}
          <div
            className="
              y-folio__selected-work-card-slot
              y-folio__selected-work-card-slot--left
              y-folio__selected-work-card-slot--row-2
            "
          >
            <SelectedWorkCard
              title={works[1].title}
              description={works[1].description}
              image={works[1].image}
            />
          </div>

          {/* Third card: right */}
          <div
            className="
              y-folio__selected-work-card-slot
              y-folio__selected-work-card-slot--right
              y-folio__selected-work-card-slot--row-3
            "
          >
            <SelectedWorkCard
              title={works[2].title}
              description={works[2].description}
              image={works[2].image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
