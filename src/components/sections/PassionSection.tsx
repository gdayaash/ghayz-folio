"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";

import PassionCard from "../cards/PassionCard";

export default function PassionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".y-folio__passion-card");

      console.log("Cards:", cards.length);
      console.log("ScrollTrigger:", ScrollTrigger);

      cards.forEach((card) => {
        const title = card.querySelector<HTMLElement>(
          ".y-folio__passion-card-title",
        );

        const subtitle = card.querySelector<HTMLElement>(
          ".y-folio__passion-card-subtitle",
        );

        const image = card.querySelector<HTMLElement>(
          ".y-folio__passion-card-image",
        );

        if (!title || !subtitle || !image) {
          console.log("Missing element", {
            title,
            subtitle,
            image,
          });

          return;
        }

        gsap.set([title, subtitle, image], {
          opacity: 0.3,
          y: 20,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            markers: false,
          },
        });

        timeline
          .to(title, {
            opacity: 1,
            y: 0,
            duration: 1,
          })
          .to(
            subtitle,
            {
              opacity: 1,
              y: 0,
              duration: 1,
            },
            ">",
          )
          .to(
            image,
            {
              opacity: 1,
              y: 0,
              duration: 1,
            },
            ">",
          );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="y-folio__passion-wrapper">
      <div className="container mx-auto">
        <div className="y-folio__passion-heading-area">
          <h2 className="y-folio__passion-section-title text-center font-semibold text-[clamp(1.75rem,4vw,3rem)]">
            Passion
          </h2>
        </div>

        <div className="y-folio__passion-cards-wrapper mt-16">
          <PassionCard
            title="Photography"
            subtitle="A Matured Casual Photographer"
            picpath="/images/photographer.png"
          />

          <PassionCard
            title="Artist"
            subtitle="Sometimes I go deep in the character"
            picpath="/images/artist.png"
          />

          <PassionCard
            title="Photography"
            subtitle="A Matured Casual Photographer"
            picpath="/images/photographer.png"
          />
        </div>
      </div>
    </section>
  );
}
