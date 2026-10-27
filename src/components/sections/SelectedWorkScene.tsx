"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import SelectedWorkCard from "../cards/SelectedWorkCard";

const works = [
   {
    id: 1,
    title: "HashFame | Pre-Launch",
    description:
      "Building a Network Before the App",
      image: "/images/works/waitlist-bg.png",
    link: "/case-study/waitlist"  
  },
  {
    id: 2,
    title: "HashFame | Post-Launch",
    description:
      "Turning Existing Profiles into Active Creators",
      image: "/images/works/creator-bg.png",
      link: "/case-study/creator"  
  },
  {
    id: 3,
    title: "Qoruz | Decks Redesign",
    description:
      "Making the Product Its Own Salesperson",
       image: "/images/works/agency-bg.png",
      link: "/case-study/agency"  
  },
    {
    id: 4,
    title: "HashFame | Website Redesign",
    description:
      "Designed to Make an Impression",
       image: "/images/works/designed-bg.png",
       link: "/case-study/website"  

  },
    {
    id: 5,
    title: "Qoruz | Nexus AI",
    description:
      "Making Complex AI Feel Simple.",
       image: "/images/works/complex-ai.png",
       link: "/case-study/nexusAi"  

  },
  {
    id: 6,
    title: "HashFame | Marketing & Visuals",
    description:
      "Making Every Feature a Story",
       image: "/images/works/marketing-visuals.png",
       link: "/case-study/marketing-visuals"  

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
      entryTimeline.to({}, { duration: 0.01 });

      // Pointer appears
      entryTimeline.to(pointerTrack, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });

      entryTimeline.to({}, { duration: 0.5 });

      // Dashed line appears
      entryTimeline.to(line, {
        opacity: 1,
        duration: 0.1,
        ease: "power2.out",
      });

      entryTimeline.to({}, { duration: 0.1 });

      // Glowing segment appears
      entryTimeline.to(activeLine, {
        opacity: 1,
        duration: 0.1,
        ease: "power2.out",
      });

      entryTimeline.to({}, { duration: 0.1 });

      // First card enters
      if (cards[0]) {
        entryTimeline.to(cards[0], {
          opacity: 1,
          y: 0,
          duration: 0.1,
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

          {/* First card: left */}
          <div
            className="
              y-folio__selected-work-card-slot
              y-folio__selected-work-card-slot--left
              y-folio__selected-work-card-slot--row-1
            "
          >
            <SelectedWorkCard
              title={works[0].title}
              description={works[0].description}
              image={works[0].image}
              link={works[0].link}
            />
          </div>

          {/* Second card: right */}
          <div
            className="
              y-folio__selected-work-card-slot
              y-folio__selected-work-card-slot--right
              y-folio__selected-work-card-slot--row-2
            "
          >
            <SelectedWorkCard
              title={works[1].title}
              description={works[1].description}
              image={works[1].image}
              link={works[1].link}

            />
          </div>

          {/* Third card: left */}
          <div
            className="
              y-folio__selected-work-card-slot
              y-folio__selected-work-card-slot--left
              y-folio__selected-work-card-slot--row-3
            "
          >
            <SelectedWorkCard
              title={works[2].title}
              description={works[2].description}
              image={works[2].image}
              link={works[2].link}

            />
          </div>

          {/* Fourth card: right */}
          <div
            className="
              y-folio__selected-work-card-slot
              y-folio__selected-work-card-slot--right
              y-folio__selected-work-card-slot--row-4
            "
          >
            <SelectedWorkCard
              title={works[3].title}
              description={works[3].description}
              image={works[3].image}
              link={works[3].link}

            />
          </div>

          {/* Fifth card: left */}
          <div
            className="
              y-folio__selected-work-card-slot
              y-folio__selected-work-card-slot--left
              y-folio__selected-work-card-slot--row-5
            "
          >
            <SelectedWorkCard
              title={works[4].title}
              description={works[4].description}
              image={works[4].image}
              link={works[4].link}

            />
          </div>

          {/* Sixth card: right */}
          <div
            className="
              y-folio__selected-work-card-slot
              y-folio__selected-work-card-slot--right
              y-folio__selected-work-card-slot--row-6
            "
          >
            <SelectedWorkCard
              title={works[5].title}
              description={works[5].description}
              image={works[5].image}
              link={works[5].link}

            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
