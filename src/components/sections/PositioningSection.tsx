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

      /*
       * --------------------------------
       * Initial states
       * --------------------------------
       */

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

      /*
       * --------------------------------
       * Calculate actual item positions
       * --------------------------------
       */

      const firstItem = items[0];

      const itemStep =
        items.length > 1
          ? items[1].offsetTop - firstItem.offsetTop
          : firstItem.offsetHeight;

      const lastIndex = items.length - 1;

      /*
       * --------------------------------
       * Pin the section
       * --------------------------------
       */

      const pinTrigger = ScrollTrigger.create({
        trigger: section,

        start: "top top",

        end: `+=${lastIndex * 700}`,

        pin: true,

        // Important for the current project setup.
        pinType: "fixed",

        pinSpacing: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        markers: true,
      });

      /*
       * --------------------------------
       * Text animation
       * --------------------------------
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: `+=${lastIndex * 700}`,

          scrub: 1,

          invalidateOnRefresh: true,

          markers: false,
        },
      });

      /*
       * Move the complete list.
       *
       * Only the list moves.
       * The section remains pinned.
       */

      timeline.to(list, {
        y: -(lastIndex * itemStep),

        duration: lastIndex,

        ease: "none",
      });

      /*
       * --------------------------------
       * Active item + notes
       * --------------------------------
       */

      items.forEach((item, index) => {
        if (index === 0) return;

        const previousItem = items[index - 1];

        const previousNote = notes[index - 1];

        const note = notes[index];

        /*
         * Position where this item
         * becomes the active item.
         */
        const position = index - 0.5;

        /*
         * Previous item → inactive
         */

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

        /*
         * Current item → active
         */

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

        /*
         * Previous note → hide
         */

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

        /*
         * Current note → show
         */

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

      /*
       * Make sure ScrollTrigger recalculates
       * after all measurements are available.
       */

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
      className="y-folio__positioning-section relative h-screen overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex h-full items-center justify-center">
          <div
            ref={listRef}
            className="relative flex flex-col items-center gap-16"
          >
            {positioningItems.map((item) => (
              <div
                key={item.title}
                className="relative flex h-22.5 items-center justify-center"
              >
                <h2
                  className="
                    y-folio__positioning-item
                    whitespace-nowrap
                    text-center
                    text-[clamp(3rem,8vw,7rem)]
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
                    ml-6
                    w-45
                    rounded-full
                    bg-[#07DE9A]
                    px-4
                    py-2
                    text-xs
                    leading-tight
                    text-[#001110]
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

// Sparkling Version

// ("use client");

// import { useLayoutEffect, useRef } from "react";
// import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
// import { positioningItems } from "@/data/positioningItems";

// export default function PositioningSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const listRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const list = listRef.current;

//     if (!section || !list) return;

//     const ctx = gsap.context(() => {
//       const items = gsap.utils.toArray<HTMLElement>(
//         ".y-folio__positioning-item",
//       );

//       const notes = gsap.utils.toArray<HTMLElement>(
//         ".y-folio__positioning-note",
//       );

//       const sparkleGroups = gsap.utils.toArray<HTMLElement>(
//         ".y-folio__positioning-sparkles",
//       );

//       if (!items.length) return;

//       const firstItem = items[0];

//       /*
//        * Calculate the real distance between items.
//        * This accounts for the item's height + flex gap.
//        */
//       const itemStep =
//         items.length > 1
//           ? items[1].offsetTop - firstItem.offsetTop
//           : firstItem.offsetHeight;

//       const lastIndex = items.length - 1;

//       /*
//        * ---------------------------------------
//        * INITIAL STATES
//        * ---------------------------------------
//        */

//       // List starts in its natural position.
//       gsap.set(list, {
//         y: 0,
//       });

//       // All text starts inactive.
//       gsap.set(items, {
//         color: "#CED4DA",
//         scale: 1,
//       });

//       // First text is active.
//       gsap.set(items[0], {
//         color: "#45AFA0",
//         scale: 1.05,
//       });

//       // Hide all notes.
//       gsap.set(notes, {
//         opacity: 0,
//         x: 20,
//         scale: 0.9,
//         transformOrigin: "left center",
//       });

//       // First note is visible.
//       if (notes[0]) {
//         gsap.set(notes[0], {
//           opacity: 1,
//           x: 0,
//           scale: 1,
//         });
//       }

//       /*
//        * Hide all sparkle groups.
//        */
//       gsap.set(sparkleGroups, {
//         opacity: 0,
//       });

//       /*
//        * Hide individual sparkles.
//        */
//       gsap.set(".y-folio__sparkle", {
//         opacity: 0,
//         scale: 0,
//         rotation: -30,
//         transformOrigin: "center",
//       });

//       /*
//        * ---------------------------------------
//        * PIN SECTION
//        * ---------------------------------------
//        */

//       const pinTrigger = ScrollTrigger.create({
//         trigger: section,

//         start: "top top",

//         end: `+=${lastIndex * 700}`,

//         pin: true,

//         /*
//          * Important:
//          * Prevents the slight movement we
//          * encountered with automatic pin type.
//          */
//         pinType: "fixed",

//         pinSpacing: true,

//         anticipatePin: 1,

//         invalidateOnRefresh: true,

//         markers: false,
//       });

//       /*
//        * ---------------------------------------
//        * MAIN SCROLL TIMELINE
//        * ---------------------------------------
//        */

//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,

//           start: "top top",

//           end: `+=${lastIndex * 700}`,

//           scrub: 1,

//           invalidateOnRefresh: true,

//           markers: false,
//         },
//       });

//       /*
//        * ---------------------------------------
//        * MOVE ONLY THE LIST
//        * ---------------------------------------
//        */

//       timeline.to(list, {
//         y: -(lastIndex * itemStep),

//         duration: lastIndex,

//         ease: "none",
//       });

//       /*
//        * ---------------------------------------
//        * ACTIVE ITEM ANIMATION
//        * ---------------------------------------
//        */

//       items.forEach((item, index) => {
//         if (index === 0) return;

//         const previousItem = items[index - 1];

//         const previousNote = notes[index - 1];

//         const note = notes[index];

//         const sparkleGroup = sparkleGroups[index];

//         /*
//          * Each item transition happens
//          * halfway between the two items.
//          */
//         const position = index - 0.5;

//         /*
//          * -----------------------------------
//          * PREVIOUS ITEM → INACTIVE
//          * -----------------------------------
//          */

//         timeline.to(
//           previousItem,
//           {
//             color: "#CED4DA",
//             scale: 1,
//             duration: 0.5,
//             ease: "power2.out",
//           },
//           position,
//         );

//         /*
//          * -----------------------------------
//          * CURRENT ITEM → ACTIVE
//          * -----------------------------------
//          */

//         timeline.to(
//           item,
//           {
//             color: "#45AFA0",
//             scale: 1.05,
//             duration: 0.5,
//             ease: "power2.out",
//           },
//           position,
//         );

//         /*
//          * -----------------------------------
//          * PREVIOUS NOTE → HIDE
//          * -----------------------------------
//          */

//         if (previousNote) {
//           timeline.to(
//             previousNote,
//             {
//               opacity: 0,
//               x: 20,
//               scale: 0.9,
//               duration: 0.25,
//               ease: "power2.in",
//             },
//             position,
//           );
//         }

//         /*
//          * -----------------------------------
//          * SPARKLE BURST
//          * -----------------------------------
//          */

//         if (sparkleGroup) {
//           const sparkleElements =
//             sparkleGroup.querySelectorAll<HTMLElement>(".y-folio__sparkle");

//           /*
//            * Show sparkle container.
//            */
//           timeline.set(
//             sparkleGroup,
//             {
//               opacity: 1,
//             },
//             position + 0.05,
//           );

//           /*
//            * Sparkles pop out.
//            */
//           timeline.to(
//             sparkleElements,
//             {
//               opacity: 1,
//               scale: 1,
//               rotation: 0,
//               duration: 0.25,
//               stagger: 0.06,
//               ease: "back.out(2)",
//             },
//             position + 0.05,
//           );

//           /*
//            * Sparkles disappear.
//            */
//           timeline.to(
//             sparkleElements,
//             {
//               opacity: 0,
//               scale: 0.4,
//               duration: 0.2,
//               stagger: 0.04,
//               ease: "power2.in",
//             },
//             position + 0.3,
//           );

//           /*
//            * Hide sparkle container.
//            */
//           timeline.set(
//             sparkleGroup,
//             {
//               opacity: 0,
//             },
//             position + 0.55,
//           );
//         }

//         /*
//          * -----------------------------------
//          * CURRENT NOTE → SHOW
//          * -----------------------------------
//          */

//         if (note) {
//           timeline.fromTo(
//             note,
//             {
//               opacity: 0,
//               x: 20,
//               scale: 0.9,
//             },
//             {
//               opacity: 1,
//               x: 0,
//               scale: 1,
//               duration: 0.35,
//               ease: "back.out(1.4)",
//             },
//             position + 0.4,
//           );
//         }
//       });

//       /*
//        * Recalculate positions after layout.
//        */
//       ScrollTrigger.refresh();

//       /*
//        * Cleanup the explicit pin trigger.
//        */
//       return () => {
//         pinTrigger.kill();
//       };
//     }, sectionRef);

//     return () => {
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="y-folio__positioning-section relative h-screen overflow-hidden"
//     >
//       <div className="container mx-auto h-full">
//         <div className="flex h-full items-center justify-center">
//           <div
//             ref={listRef}
//             className="relative flex flex-col items-center gap-12"
//           >
//             {positioningItems.map((item) => (
//               <div
//                 key={item.title}
//                 className="relative flex h-22.5 items-center justify-center"
//               >
//                 {/* -------------------------------- */}
//                 {/* TITLE */}
//                 {/* -------------------------------- */}

//                 <h2
//                   className="
//                     y-folio__positioning-item
//                     whitespace-nowrap
//                     text-center
//                     text-[clamp(3rem,8vw,7rem)]
//                     font-semibold
//                     leading-none
//                     tracking-tight
//                   "
//                 >
//                   {item.title}
//                 </h2>

//                 {/* -------------------------------- */}
//                 {/* SPARKLES */}
//                 {/* -------------------------------- */}

//                 <div
//                   className="
//                     y-folio__positioning-sparkles
//                     pointer-events-none
//                     absolute
//                     left-full
//                     ml-3
//                     h-8
//                     w-8
//                   "
//                 >
//                   <span
//                     className="
//                       y-folio__sparkle
//                       absolute
//                       left-2
//                       top-0.5
//                       text-[10px]
//                       leading-none
//                     "
//                   >
//                     ✦
//                   </span>

//                   <span
//                     className="
//                       y-folio__sparkle
//                       absolute
//                       left-5
//                       top-3.5
//                       text-[7px]
//                       leading-none
//                     "
//                   >
//                     ✧
//                   </span>

//                   <span
//                     className="
//                       y-folio__sparkle
//                       absolute
//                       left-1
//                       top-5.5
//                       text-[6px]
//                       leading-none
//                     "
//                   >
//                     ✦
//                   </span>
//                 </div>

//                 {/* -------------------------------- */}
//                 {/* DESCRIPTION */}
//                 {/* -------------------------------- */}

//                 <div
//                   className="
//                     y-folio__positioning-note
//                     pointer-events-none
//                     absolute
//                     left-full
//                     ml-10
//                     w-[180px]
//                     rounded-full
//                     bg-[#07DE9A]
//                     px-4
//                     py-2
//                     text-xs
//                     leading-tight
//                     text-[#001110]
//                   "
//                 >
//                   {item.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
