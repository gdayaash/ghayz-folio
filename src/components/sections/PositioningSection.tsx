"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { positioningItems } from "@/data/positioningItems";

export default function PositioningSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;

    if (!section || !list) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        ".y-folio__positioning-item",
      );

      const notes = gsap.utils.toArray<HTMLElement>(
        ".y-folio__positioning-note",
      );

      if (!items.length) return;

      gsap.set(list, {
        y: 0,
      });

      gsap.set(items, {
        color: "#CED4DA",
        scale: 1,
      });

      gsap.set(items[0], {
        color: "#45AFA0",
        scale: 1.05,
      });

      gsap.set(notes, {
        opacity: 0,
        x: 20,
      });

      if (notes[0]) {
        gsap.set(notes[0], {
          opacity: 1,
          x: 0,
        });
      }

      const firstItem = items[0];

      const itemStep =
        items.length > 1
          ? items[1].offsetTop - firstItem.offsetTop
          : firstItem.offsetHeight;

      const lastIndex = items.length - 1;

      const pinTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${lastIndex * 700}`,
        pin: true,
        pinType: "fixed",
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: true,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${lastIndex * 700}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(list, {
        y: -(lastIndex * itemStep),
        duration: lastIndex,
        ease: "none",
      });

      items.forEach((item, index) => {
        if (index === 0) return;

        const previousItem = items[index - 1];
        const previousNote = notes[index - 1];
        const note = notes[index];

        const position = index - 0.5;

        timeline.to(
          previousItem,
          {
            color: "#CED4DA",
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          position,
        );

        timeline.to(
          item,
          {
            color: "#45AFA0",
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out",
          },
          position,
        );

        if (previousNote) {
          timeline.to(
            previousNote,
            {
              opacity: 0,
              x: 20,
              duration: 0.3,
              ease: "power2.out",
            },
            position,
          );
        }

        if (note) {
          timeline.to(
            note,
            {
              opacity: 1,
              x: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            position,
          );
        }
      });

      ScrollTrigger.refresh();

      return () => {
        pinTrigger.kill();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        y-folio__positioning-section
        relative
        h-screen
        overflow-hidden
      "
    >
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-0">
        <div className="flex h-full items-center justify-center">
          <div
            ref={listRef}
            className="
              relative
              flex
              flex-col
              items-center
              gap-10
              sm:gap-12
              md:gap-14
              lg:gap-16
            "
          >
            {positioningItems.map((item) => (
              <div
                key={item.title}
                className="
                  relative
                  flex
                  h-16
                  items-center
                  justify-center
                  sm:h-18
                  md:h-20
                  lg:h-22.5
                "
              >
                <h2
                  className="
                    y-folio__positioning-item
                    whitespace-nowrap
                    text-center
                    text-[clamp(2.25rem,10vw,7rem)]
                    font-semibold
                    leading-none
                    tracking-tight
                  "
                >
                  {item.title}
                </h2>

                <div
                  className="
                    y-folio__positioning-note
                    pointer-events-none
                    absolute
                    left-full
                    ml-3
                    w-32
                    rounded-full
                    bg-[#07DE9A]
                    px-3
                    py-1.5
                    text-[10px]
                    leading-tight
                    text-[#001110]
                    sm:ml-4
                    sm:w-36
                    sm:px-3
                    sm:py-2
                    sm:text-xs
                    md:ml-5
                    md:w-40
                    lg:ml-6
                    lg:w-45
                  "
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}