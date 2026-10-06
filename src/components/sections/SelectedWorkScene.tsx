// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
// import SelectedWorkCard from "../cards/SelectedWorkCard";

// const works = [
//   {
//     id: 1,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 2,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 3,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
// ];

// export default function SelectedWorksScene() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lineRef = useRef<HTMLDivElement>(null);
//   const pointerRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const line = lineRef.current;
//     const pointer = pointerRef.current;

//     if (!section || !line || !pointer) return;

//     const ctx = gsap.context(() => {
//       gsap.set(line, {
//         scaleY: 1,
//         transformOrigin: "top center",
//       });

//       gsap.set(pointer, {
//         opacity: 1,
//         scale: 1,
//       });

//       gsap.to(pointer, {
//         top: "100%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//           markers: true,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);
//   return (
//     <section ref={sectionRef} className="y-folio__selected-works-scene-wrapper">
//       <div className="container y-folio__selected-works-scene mx-auto">
//         <div className="y-folio__selected-works-inner">
//           <div className="y-folio__selected-works-scene-left flex flex-col gap-y-[59em] justify-between pt-[50em]">
//             <SelectedWorkCard
//               title={works[0].title}
//               image={works[0].image}
//               description={works[0].description}
//             />
//           </div>
//           <div className="y-folio__selected-works-scene-middle flex flex-col justify-center">
//             <div className="relative h-[12rem] w-full">
//               {/* Central dashed line */}
//               <div
//                 ref={lineRef}
//                 className="
//       y-folio__selected-works-line
//       absolute
//       left-1/2
//       top-0
//       h-full
//       w-px
//       -translate-x-1/2
//     "
//               />

//               {/* Glow pointer */}
//               <div
//                 ref={pointerRef}
//                 className="
//       y-folio__selected-works-pointer
//       absolute
//       left-1/2
//       top-1/2
//       h-4
//       w-4
//       -translate-x-1/2
//       -translate-y-1/2
//       rounded-full
//     "
//               />
//             </div>
//           </div>
//           <div className="y-folio__selected-works-scene-right flex flex-col gap-y-[59em] justify-between pt-[7em]">
//             <SelectedWorkCard
//               title={works[1].title}
//               image={works[1].image}
//               description={works[1].description}
//             />

//             <SelectedWorkCard
//               title={works[2].title}
//               image={works[2].image}
//               description={works[2].description}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
// import SelectedWorkCard from "../cards/SelectedWorkCard";

// const works = [
//   {
//     id: 1,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 2,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 3,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
// ];

// export default function SelectedWorksScene() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const activeLineRef = useRef<HTMLDivElement>(null);
//   const pointerRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const activeLine = activeLineRef.current;
//     const pointer = pointerRef.current;

//     if (!section || !activeLine || !pointer) return;

//     const ctx = gsap.context(() => {
//       /*
//        * Initial state
//        */

//       gsap.set(activeLine, {
//         scaleY: 0.5,
//         transformOrigin: "top center",
//       });

//       gsap.set(pointer, {
//         opacity: 0,
//         scale: 0,
//         y: 0,
//       });

//       /*
//        * Entry animation
//        */

//       const entryTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top 70%",
//           toggleActions: "play none none none",
//           once: true,
//           markers: true,
//         },
//       });

//       entryTimeline
//         .to(pointer, {
//           opacity: 1,
//           scale: 1,
//           duration: 0.45,
//           ease: "back.out(1.7)",
//         })
//         .to(
//           activeLine,
//           {
//             scaleY: 1,
//             duration: 0.5,
//             ease: "power2.out",
//           },
//           "<",
//         );

//       /*
//        * Scroll interaction
//        */

//       ScrollTrigger.create({
//         trigger: section,

//         start: "top 60%",
//         end: "bottom 40%",

//         onUpdate: (self) => {
//           /*
//            * Scroll velocity:
//            *
//            * positive  -> scrolling down
//            * negative  -> scrolling up
//            */

//           const velocity = self.getVelocity();

//           const maxOffset = 60;

//           const offset = gsap.utils.clamp(
//             -maxOffset,
//             maxOffset,
//             velocity * 0.06,
//           );

//           /*
//            * Pointer gets pulled in the
//            * direction of the scroll.
//            */
//           gsap.to(pointer, {
//             y: offset,
//             duration: 0.35,
//             ease: "power3.out",
//             overwrite: true,
//           });

//           /*
//            * Active line follows the pointer.
//            */
//           gsap.to(activeLine, {
//             scaleY: 0.5 + Math.abs(offset) / 90,
//             duration: 0.35,
//             ease: "power3.out",
//             overwrite: true,
//           });
//         },

//         onLeave: () => {
//           /*
//            * Section finished.
//            * Return pointer to center.
//            */
//           gsap.to(pointer, {
//             y: 0,
//             duration: 0.6,
//             ease: "elastic.out(1, 0.4)",
//           });
//         },

//         onEnterBack: () => {
//           gsap.to(pointer, {
//             y: 0,
//             duration: 0.4,
//             ease: "power3.out",
//           });
//         },

//         markers: true,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="y-folio__selected-works-scene-wrapper">
//       <div className="container y-folio__selected-works-scene mx-auto">
//         <div className="y-folio__selected-works-inner">
//           {/* LEFT */}
//           <div className="y-folio__selected-works-scene-left flex flex-col justify-between gap-y-[59em] pt-[50em]">
//             <SelectedWorkCard
//               title={works[0].title}
//               image={works[0].image}
//               description={works[0].description}
//             />
//           </div>

//           {/* MIDDLE */}
//           <div className="y-folio__selected-works-scene-middle">
//             <div className="sticky top-0 flex h-dvh items-center justify-center">
//               {/* Timeline track */}
//               <div className="relative h-[28rem] w-full">
//                 {/* Base dashed line */}
//                 <div
//                   className="
//                     y-folio__selected-works-line
//                     absolute
//                     left-1/2
//                     top-0
//                     h-full
//                     w-[2px]
//                     -translate-x-1/2
//                   "
//                 />

//                 {/* Active / dragging line */}
//                 <div
//                   ref={activeLineRef}
//                   className="
//                     y-folio__selected-works-active-line
//                     absolute
//                     left-1/2
//                     top-0
//                     h-full
//                     w-px
//                     -translate-x-1/2
//                   "
//                 />

//                 {/* Pointer */}
//                 <div
//                   ref={pointerRef}
//                   className="
//                     y-folio__selected-works-pointer
//                     absolute
//                     left-1/2
//                     top-1/2
//                     z-10
//                     h-5
//                     w-5
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     rounded-full
//                   "
//                 />
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="y-folio__selected-works-scene-right flex flex-col justify-between gap-y-[59em] pt-[18.6em]">
//             <SelectedWorkCard
//               title={works[1].title}
//               image={works[1].image}
//               description={works[1].description}
//             />

//             <SelectedWorkCard
//               title={works[2].title}
//               image={works[2].image}
//               description={works[2].description}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// // }
// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
// import SelectedWorkCard from "../cards/SelectedWorkCard";

// const works = [
//   {
//     id: 1,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 2,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 3,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 4,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 5,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 6,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
// ];

// export default function SelectedWorksScene() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const lineRef = useRef<HTMLDivElement>(null);
//   const pointerRef = useRef<HTMLDivElement>(null);
//   const firstCardRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const line = lineRef.current;
//     const pointer = pointerRef.current;
//     const firstCard = firstCardRef.current;

//     if (!section || !line || !pointer || !firstCard) return;

//     const ctx = gsap.context(() => {
//       /*
//        * ==========================================
//        * INITIAL STATE
//        * ==========================================
//        */

//       gsap.set(pointer, {
//         opacity: 0,
//         scale: 1,
//         y: 0,
//       });

//       gsap.set(line, {
//         opacity: 0,
//         scaleY: 1,
//         transformOrigin: "center center",
//       });

//       gsap.set(firstCard, {
//         opacity: 0,
//       });

//       /*
//        * ==========================================
//        * ENTRY ANIMATION
//        * ==========================================
//        *
//        * 1. Pointer
//        * 2. Line
//        * 3. Card
//        *
//        * Everything fades in.
//        */

//       const entryTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top 70%",
//           toggleActions: "play none none none",
//           once: true,
//           markers: true,
//         },
//       });

//       entryTimeline
//         // 1. Pointer appears
//         .to(pointer, {
//           opacity: 1,
//           duration: 0.45,
//           ease: "power2.out",
//         })

//         // 2. Line appears
//         .to(line, {
//           opacity: 1,
//           duration: 0.55,
//           ease: "power2.out",
//         })

//         // 3. First card appears
//         .to(firstCard, {
//           opacity: 1,
//           duration: 0.65,
//           ease: "power2.out",
//         });

//       /*
//        * ==========================================
//        * ELASTIC SCROLL EFFECT
//        * ==========================================
//        *
//        * The pointer temporarily moves according
//        * to scroll velocity and returns toward
//        * the center.
//        */

//       ScrollTrigger.create({
//         trigger: section,

//         start: "top 60%",
//         end: "bottom 40%",

//         onUpdate: (self) => {
//           const velocity = self.getVelocity();

//           const maxOffset = 60;

//           const offset = gsap.utils.clamp(
//             -maxOffset,
//             maxOffset,
//             velocity * 0.06,
//           );

//           gsap.to(pointer, {
//             y: offset,
//             duration: 0.35,
//             ease: "power3.out",
//             overwrite: true,
//           });
//         },

//         /*
//          * When the section is left,
//          * return the pointer to its
//          * original position.
//          */
//         onLeave: () => {
//           gsap.to(pointer, {
//             y: 0,
//             duration: 0.7,
//             ease: "elastic.out(1, 0.4)",
//           });
//         },

//         onEnterBack: () => {
//           gsap.to(pointer, {
//             y: 0,
//             duration: 0.5,
//             ease: "power3.out",
//           });
//         },

//         markers: true,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="y-folio__selected-works-scene-wrapper">
//       <div className="container y-folio__selected-works-scene mx-auto">
//         <div className="y-folio__selected-works-inner">
//           {/* ========================================
//               LEFT
//           ======================================== */}

//           <div className="y-folio__selected-works-scene-left flex flex-col justify-between gap-y-[59em] pt-[70em]">
//             <SelectedWorkCard
//               title={works[0].title}
//               image={works[0].image}
//               description={works[0].description}
//             />
//           </div>

//           {/* ========================================
//               MIDDLE
//           ======================================== */}

//           <div className="y-folio__selected-works-scene-middle">
//             <div className="sticky top-0 flex h-dvh items-center justify-center">
//               <div className="relative h-[28rem] w-full">
//                 {/* Dashed timeline */}
//                 <div
//                   ref={lineRef}
//                   className="
//                     y-folio__selected-works-line
//                     absolute
//                     left-1/2
//                     top-0
//                     h-full
//                     w-[3px]
//                     -translate-x-1/2
//                   "
//                 />

//                 {/* Pointer */}
//                 <div
//                   ref={pointerRef}
//                   className="
//                     y-folio__selected-works-pointer
//                     absolute
//                     left-1/2
//                     top-1/2
//                     z-10
//                     h-5
//                     w-5
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     rounded-full
//                   "
//                 />
//               </div>
//             </div>
//           </div>

//           {/* ========================================
//               RIGHT
//           ======================================== */}

//           <div className="y-folio__selected-works-scene-right flex flex-col justify-between gap-y-[59em] pt-[18.6em]">
//             {/* First card */}
//             <div ref={firstCardRef}>
//               <SelectedWorkCard
//                 title={works[1].title}
//                 image={works[1].image}
//                 description={works[1].description}
//               />
//             </div>

//             {/* Second card */}
//             <SelectedWorkCard
//               title={works[2].title}
//               image={works[2].image}
//               description={works[2].description}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
// import SelectedWorkCard from "../cards/SelectedWorkCard";

// const works = [
//   {
//     id: 1,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 2,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 3,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
// ];

// export default function SelectedWorksScene() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const lineRef = useRef<HTMLDivElement>(null);
//   const pointerRef = useRef<HTMLDivElement>(null);
//   const firstCardRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const line = lineRef.current;
//     const pointer = pointerRef.current;
//     const firstCard = firstCardRef.current;

//     if (!section || !line || !pointer || !firstCard) return;

//     const ctx = gsap.context(() => {
//       /* -------------------------
//          Initial states
//       ------------------------- */

//       gsap.set(pointer, {
//         opacity: 0,
//         scale: 1,
//         y: 0,
//       });

//       gsap.set(line, {
//         opacity: 0,
//         scaleY: 1,
//         transformOrigin: "center center",
//       });

//       // First card starts below its final position
//       gsap.set(firstCard, {
//         opacity: 0,
//         y: 80,
//       });

//       /* -------------------------
//          Entry animation
//       ------------------------- */

//       const entryTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top 40%",
//           toggleActions: "play none none none",
//           once: true,
//           markers: true,
//         },
//       });

//       entryTimeline
//         // 1. Pointer appears
//         .to(pointer, {
//           opacity: 1,
//           duration: 0.45,
//           delay: 0.25,
//           ease: "power2.out",
//         })

//         // 2. Line appears
//         .to(line, {
//           opacity: 1,
//           duration: 0.55,
//           ease: "power2.out",
//         })

//         // 3. First card comes from below
//         .to(firstCard, {
//           opacity: 1,
//           y: 0,
//           duration: 0.7,
//           ease: "power3.out",
//         });

//       /* -------------------------
//          Pointer scroll response
//       ------------------------- */

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 60%",
//         end: "bottom 40%",

//         onUpdate: (self) => {
//           const velocity = self.getVelocity();

//           const maxOffset = 60;

//           const offset = gsap.utils.clamp(
//             -maxOffset,
//             maxOffset,
//             velocity * 0.06,
//           );

//           gsap.to(pointer, {
//             y: offset,
//             duration: 0.35,
//             ease: "power3.out",
//             overwrite: true,
//           });
//         },

//         onLeave: () => {
//           gsap.to(pointer, {
//             y: 0,
//             duration: 0.7,
//             ease: "elastic.out(1, 0.4)",
//           });
//         },

//         onEnterBack: () => {
//           gsap.to(pointer, {
//             y: 0,
//             duration: 0.5,
//             ease: "power3.out",
//           });
//         },

//         markers: true,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="y-folio__selected-works-scene-wrapper">
//       <div className="container y-folio__selected-works-scene mx-auto">
//         <div className="y-folio__selected-works-inner">
//           {/* LEFT */}
//           <div className="y-folio__selected-works-scene-left flex flex-col justify-between gap-y-[59em] pt-[50em]">
//             <SelectedWorkCard
//               title={works[0].title}
//               description={works[0].description}
//               image={works[0].image}
//             />
//           </div>

//           {/* MIDDLE */}
//           <div className="y-folio__selected-works-scene-middle">
//             <div className="sticky top-0 flex h-dvh items-center justify-center">
//               <div className="relative h-[28rem] w-full">
//                 {/* Center line */}
//                 <div
//                   ref={lineRef}
//                   className="y-folio__selected-works-line absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2"
//                 />

//                 {/* Pointer */}
//                 <div
//                   ref={pointerRef}
//                   className="y-folio__selected-works-pointer absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="y-folio__selected-works-scene-right flex flex-col justify-between gap-y-[59em] pt-[18.6em]">
//             {/* First animated card */}
//             <div ref={firstCardRef}>
//               <SelectedWorkCard
//                 title={works[1].title}
//                 description={works[1].description}
//                 image={works[1].image}
//               />
//             </div>

//             {/* Second card */}
//             <SelectedWorkCard
//               title={works[2].title}
//               description={works[2].description}
//               image={works[2].image}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
// import SelectedWorkCard from "../cards/SelectedWorkCard";

// const works = [
//   {
//     id: 1,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 2,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 3,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
// ];

// export default function SelectedWorksScene() {
//   const sectionRef = useRef<HTMLElement>(null);

//   const lineRef = useRef<HTMLDivElement>(null);

//   /*
//    * Pointer wrapper.
//    *
//    * GSAP moves this wrapper.
//    * This avoids fighting with Tailwind's
//    * translate transforms.
//    */
//   const pointerTrackRef = useRef<HTMLDivElement>(null);

//   /*
//    * Short bright section that travels
//    * with the pointer.
//    */
//   const activeLineRef = useRef<HTMLDivElement>(null);

//   const firstCardRef = useRef<HTMLDivElement>(null);
//   const secondCardRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const line = lineRef.current;
//     const pointerTrack = pointerTrackRef.current;
//     const activeLine = activeLineRef.current;
//     const firstCard = firstCardRef.current;
//     const secondCard = secondCardRef.current;

//     if (
//       !section ||
//       !line ||
//       !pointerTrack ||
//       !activeLine ||
//       !firstCard ||
//       !secondCard
//     ) {
//       return;
//     }

//     const ctx = gsap.context(() => {
//       /*
//        * ==========================================
//        * INITIAL STATES
//        * ==========================================
//        */

//       gsap.set(pointerTrack, {
//         opacity: 0,
//         y: 0,
//       });

//       gsap.set(line, {
//         opacity: 0,
//       });

//       gsap.set(activeLine, {
//         opacity: 0,
//         y: 0,
//       });

//       gsap.set(firstCard, {
//         opacity: 0,
//         y: 80,
//       });

//       gsap.set(secondCard, {
//         opacity: 0,
//         y: 80,
//       });

//       /*
//        * ==========================================
//        * ENTRY STATE
//        * ==========================================
//        */

//       let entryFinished = false;

//       /*
//        * ==========================================
//        * ENTRY ANIMATION
//        * ==========================================
//        */

//       const entryTimeline = gsap.timeline({
//         paused: true,

//         onComplete: () => {
//           entryFinished = true;
//         },
//       });

//       entryTimeline

//         /*
//          * 1. Pointer appears
//          */
//         .to(pointerTrack, {
//           opacity: 1,
//           duration: 0.45,
//           ease: "power2.out",
//         })

//         /*
//          * 2. Main dashed line appears
//          */
//         .to(
//           line,
//           {
//             opacity: 1,
//             duration: 0.55,
//             ease: "power2.out",
//           },
//           "<",
//         )

//         /*
//          * 3. Bright moving segment appears
//          */
//         .to(
//           activeLine,
//           {
//             opacity: 1,
//             duration: 0.55,
//             ease: "power2.out",
//           },
//           "<",
//         )

//         /*
//          * 4. First card enters
//          */
//         .to(firstCard, {
//           opacity: 1,
//           y: 0,
//           duration: 0.7,
//           ease: "power3.out",
//         });

//       /*
//        * ==========================================
//        * SECTION ENTRY
//        * ==========================================
//        *
//        * The animation starts only when the
//        * Selected Works section has entered
//        * sufficiently into the viewport.
//        */

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 70%",
//         once: true,

//         onEnter: () => {
//           entryTimeline.play();
//         },
//       });

//       /*
//        * ==========================================
//        * POINTER + ACTIVE LINE SCROLL RESPONSE
//        * ==========================================
//        */

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top bottom",
//         end: "bottom top",

//         onUpdate: (self) => {
//           if (!entryFinished) {
//             return;
//           }

//           const velocity = self.getVelocity();

//           /*
//            * Convert scroll velocity into
//            * vertical movement.
//            */
//           const maxOffset = 120;

//           const offset = gsap.utils.clamp(
//             -maxOffset,
//             maxOffset,
//             velocity * 0.06,
//           );

//           /*
//            * Move pointer.
//            */
//           gsap.to(pointerTrack, {
//             y: offset,
//             duration: 0.35,
//             ease: "power3.out",
//             overwrite: true,
//           });

//           /*
//            * Move bright line segment
//            * together with pointer.
//            */
//           gsap.to(activeLine, {
//             y: offset,
//             duration: 0.35,
//             ease: "power3.out",
//             overwrite: true,
//           });
//         },

//         /*
//          * Reset when leaving the section.
//          */
//         onLeave: () => {
//           if (!entryFinished) {
//             return;
//           }

//           gsap.to([pointerTrack, activeLine], {
//             y: 0,
//             duration: 0.7,
//             ease: "elastic.out(1, 0.4)",
//           });
//         },

//         /*
//          * Reset when coming back.
//          */
//         onEnterBack: () => {
//           if (!entryFinished) {
//             return;
//           }

//           gsap.to([pointerTrack, activeLine], {
//             y: 0,
//             duration: 0.5,
//             ease: "power3.out",
//           });
//         },
//       });

//       /*
//        * ==========================================
//        * SECOND CARD
//        * ==========================================
//        */

//       gsap.to(secondCard, {
//         opacity: 1,
//         y: 0,

//         duration: 0.7,
//         ease: "power3.out",

//         scrollTrigger: {
//           trigger: secondCard,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     }, sectionRef);

//     return () => {
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="y-folio__selected-works-scene-wrapper">
//       <div className="container y-folio__selected-works-scene mx-auto">
//         <div className="y-folio__selected-works-inner">
//           {/* ========================================
//               LEFT
//           ======================================== */}

//           <div className="y-folio__selected-works-scene-left flex flex-col justify-between gap-y-[59em] pt-[80em]">
//             <SelectedWorkCard
//               title={works[0].title}
//               description={works[0].description}
//               image={works[0].image}
//             />
//           </div>

//           {/* ========================================
//               MIDDLE
//           ======================================== */}

//           <div className="y-folio__selected-works-scene-middle">
//             <div className="sticky top-0 flex h-dvh items-center justify-center">
//               <div className="relative h-[38rem] w-full">
//                 {/* ==================================
//                     BASE DASHED LINE
//                     ================================== */}

//                 <div
//                   ref={lineRef}
//                   className="
//                     y-folio__selected-works-line
//                     absolute
//                     left-1/2
//                     top-0
//                     h-full
//                     w-[3px]
//                     -translate-x-1/2
//                   "
//                 />

//                 {/* ==================================
//                     ACTIVE MOVING LINE
//                     ================================== */}

//                 <div
//                   ref={activeLineRef}
//                   className="
//                     y-folio__selected-works-active-line
//                     absolute
//                     left-1/2
//                     top-1/2
//                     z-[5]
//                     h-[7rem]
//                     w-[3px]
//                     -translate-x-1/2
//                     -translate-y-1/2
//                   "
//                 />

//                 {/* ==================================
//                     POINTER TRACK
//                     ================================== */}

//                 <div
//                   ref={pointerTrackRef}
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     z-10
//                     -translate-x-1/2
//                   "
//                 >
//                   <div
//                     className="
//                       y-folio__selected-works-pointer
//                       h-5
//                       w-5
//                       -translate-y-1/2
//                       rounded-full
//                     "
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ========================================
//               RIGHT
//           ======================================== */}

//           <div className="y-folio__selected-works-scene-right flex flex-col justify-between gap-y-[89em] pt-[18.6em]">
//             {/* ----------------------------------------
//                 FIRST CARD
//             ---------------------------------------- */}

//             <div ref={firstCardRef}>
//               <SelectedWorkCard
//                 title={works[1].title}
//                 description={works[1].description}
//                 image={works[1].image}
//               />
//             </div>

//             {/* ----------------------------------------
//                 SECOND CARD
//             ---------------------------------------- */}

//             <div ref={secondCardRef}>
//               <SelectedWorkCard
//                 title={works[2].title}
//                 description={works[2].description}
//                 image={works[2].image}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
// import SelectedWorkCard from "../cards/SelectedWorkCard";

// const works = [
//   {
//     id: 1,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 2,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
//   {
//     id: 3,
//     title: "Topic will be placed here",
//     description:
//       "This is abt he detailed explanation of project, which last 2 lines",
//     image: "/images/photographer.png",
//   },
// ];

// export default function SelectedWorksScene() {
//   const sectionRef = useRef<HTMLElement>(null);

//   const lineRef = useRef<HTMLDivElement>(null);
//   const pointerTrackRef = useRef<HTMLDivElement>(null);
//   const activeLineRef = useRef<HTMLDivElement>(null);

//   const firstCardRef = useRef<HTMLDivElement>(null);
//   const secondCardRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const line = lineRef.current;
//     const pointerTrack = pointerTrackRef.current;
//     const activeLine = activeLineRef.current;
//     const firstCard = firstCardRef.current;
//     const secondCard = secondCardRef.current;

//     if (
//       !section ||
//       !line ||
//       !pointerTrack ||
//       !activeLine ||
//       !firstCard ||
//       !secondCard
//     ) {
//       return;
//     }

//     const ctx = gsap.context(() => {
//       /*
//        * ==========================================
//        * INITIAL STATES
//        * ==========================================
//        */

//       gsap.set(pointerTrack, {
//         opacity: 0,
//         y: 0,
//       });

//       gsap.set(line, {
//         opacity: 0,
//       });

//       gsap.set(activeLine, {
//         opacity: 0,
//         y: 0,
//       });

//       gsap.set(firstCard, {
//         opacity: 0,
//         y: 80,
//       });

//       gsap.set(secondCard, {
//         opacity: 0,
//         y: 80,
//       });

//       /*
//        * ==========================================
//        * ENTRY STATE
//        * ==========================================
//        */

//       let entryFinished = false;

//       /*
//        * ==========================================
//        * ENTRY TIMELINE
//        * ==========================================
//        *
//        * Sequence:
//        *
//        * Section enters
//        *       ↓
//        * Small delay
//        *       ↓
//        * Pointer
//        *       ↓
//        * Small delay
//        *       ↓
//        * Line
//        *       ↓
//        * Small delay
//        *       ↓
//        * First card
//        */

//       const entryTimeline = gsap.timeline({
//         paused: true,

//         onComplete: () => {
//           entryFinished = true;
//         },
//       });

//       /*
//        * ------------------------------------------
//        * 1. Initial delay
//        * ------------------------------------------
//        *
//        * Gives the black section some breathing
//        * room before anything appears.
//        */

//       entryTimeline.to(
//         {},
//         {
//           duration: 0.7,
//         },
//       );

//       /*
//        * ------------------------------------------
//        * 2. Pointer appears
//        * ------------------------------------------
//        */

//       entryTimeline.to(pointerTrack, {
//         opacity: 1,
//         duration: 0.55,
//         ease: "power2.out",
//       });

//       /*
//        * ------------------------------------------
//        * 3. Delay after pointer
//        * ------------------------------------------
//        */

//       entryTimeline.to(
//         {},
//         {
//           duration: 0.35,
//         },
//       );

//       /*
//        * ------------------------------------------
//        * 4. Main line appears
//        * ------------------------------------------
//        */

//       entryTimeline.to(line, {
//         opacity: 1,
//         duration: 0.65,
//         ease: "power2.out",
//       });

//       /*
//        * ------------------------------------------
//        * 5. Delay after line
//        * ------------------------------------------
//        */

//       entryTimeline.to(
//         {},
//         {
//           duration: 0.4,
//         },
//       );

//       /*
//        * ------------------------------------------
//        * 6. Active line appears
//        * ------------------------------------------
//        */

//       entryTimeline.to(activeLine, {
//         opacity: 1,
//         duration: 0.5,
//         ease: "power2.out",
//       });

//       /*
//        * ------------------------------------------
//        * 7. Delay before first card
//        * ------------------------------------------
//        */

//       entryTimeline.to(
//         {},
//         {
//           duration: 0.45,
//         },
//       );

//       /*
//        * ------------------------------------------
//        * 8. First card comes from bottom
//        * ------------------------------------------
//        */

//       entryTimeline.to(firstCard, {
//         opacity: 1,
//         y: 0,
//         duration: 0.9,
//         ease: "power3.out",
//       });

//       /*
//        * ==========================================
//        * SECTION ENTRY TRIGGER
//        * ==========================================
//        *
//        * Nothing happens until the section reaches
//        * this point in the viewport.
//        */

//       ScrollTrigger.create({
//         trigger: section,

//         /*
//          * The top of the section reaches 70%
//          * of the viewport.
//          */
//         start: "top 70%",

//         once: true,

//         onEnter: () => {
//           entryTimeline.play();
//         },
//       });

//       /*
//        * ==========================================
//        * POINTER + ACTIVE LINE SCROLL RESPONSE
//        * ==========================================
//        *
//        * This trigger can exist throughout the
//        * section, but NOTHING happens here until
//        * entryFinished === true.
//        */

//       ScrollTrigger.create({
//         trigger: section,

//         start: "top bottom",
//         end: "bottom top",

//         onUpdate: (self) => {
//           if (!entryFinished) {
//             return;
//           }

//           const velocity = self.getVelocity();

//           const maxOffset = 120;

//           const offset = gsap.utils.clamp(
//             -maxOffset,
//             maxOffset,
//             velocity * 0.06,
//           );

//           /*
//            * Move pointer.
//            */

//           gsap.to(pointerTrack, {
//             y: offset,
//             duration: 0.35,
//             ease: "power3.out",
//             overwrite: true,
//           });

//           /*
//            * Move glowing line segment.
//            */

//           gsap.to(activeLine, {
//             y: offset,
//             duration: 0.35,
//             ease: "power3.out",
//             overwrite: true,
//           });
//         },

//         /*
//          * ========================================
//          * LEAVE
//          * ========================================
//          */

//         onLeave: () => {
//           if (!entryFinished) {
//             return;
//           }

//           gsap.to([pointerTrack, activeLine], {
//             y: 0,
//             duration: 0.7,
//             ease: "elastic.out(1, 0.4)",
//           });
//         },

//         /*
//          * ========================================
//          * ENTER BACK
//          * ========================================
//          */

//         onEnterBack: () => {
//           if (!entryFinished) {
//             return;
//           }

//           gsap.to([pointerTrack, activeLine], {
//             y: 0,
//             duration: 0.5,
//             ease: "power3.out",
//           });
//         },
//       });

//       /*
//        * ==========================================
//        * SECOND CARD
//        * ==========================================
//        */

//       gsap.to(secondCard, {
//         opacity: 1,
//         y: 0,

//         duration: 0.7,
//         ease: "power3.out",

//         scrollTrigger: {
//           trigger: secondCard,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     }, sectionRef);

//     return () => {
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="y-folio__selected-works-scene-wrapper">
//       <div className="container y-folio__selected-works-scene mx-auto">
//         <div className="y-folio__selected-works-inner">
//           {/* ========================================
//               LEFT
//           ======================================== */}

//           <div className="y-folio__selected-works-scene-left flex flex-col justify-between gap-y-[59em] pt-[80em]">
//             <SelectedWorkCard
//               title={works[0].title}
//               description={works[0].description}
//               image={works[0].image}
//             />
//           </div>

//           {/* ========================================
//               MIDDLE
//           ======================================== */}

//           <div className="y-folio__selected-works-scene-middle">
//             <div className="sticky top-0 flex h-dvh items-center justify-center">
//               <div className="relative h-[38rem] w-full">
//                 {/* ==================================
//                     BASE DASHED LINE
//                     ================================== */}

//                 <div
//                   ref={lineRef}
//                   className="
//                     y-folio__selected-works-line
//                     absolute
//                     left-1/2
//                     top-0
//                     h-full
//                     w-[3px]
//                     -translate-x-1/2
//                   "
//                 />

//                 {/* ==================================
//                     ACTIVE MOVING LINE
//                     ================================== */}

//                 <div
//                   ref={activeLineRef}
//                   className="
//                     y-folio__selected-works-active-line
//                     absolute
//                     left-1/2
//                     top-1/2
//                     z-[5]
//                     h-[7rem]
//                     w-[3px]
//                     -translate-x-1/2
//                     -translate-y-1/2
//                   "
//                 />

//                 {/* ==================================
//                     POINTER
//                     ================================== */}

//                 <div
//                   ref={pointerTrackRef}
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     z-10
//                     -translate-x-1/2
//                   "
//                 >
//                   <div
//                     className="
//                       y-folio__selected-works-pointer
//                       h-5
//                       w-5
//                       -translate-y-1/2
//                       rounded-full
//                     "
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ========================================
//               RIGHT
//           ======================================== */}

//           <div className="y-folio__selected-works-scene-right flex flex-col justify-between gap-y-[89em] pt-[18.6em]">
//             {/* ----------------------------------------
//                 FIRST CARD
//             ---------------------------------------- */}

//             <div ref={firstCardRef}>
//               <SelectedWorkCard
//                 title={works[1].title}
//                 description={works[1].description}
//                 image={works[1].image}
//               />
//             </div>

//             {/* ----------------------------------------
//                 SECOND CARD
//             ---------------------------------------- */}

//             <div ref={secondCardRef}>
//               <SelectedWorkCard
//                 title={works[2].title}
//                 description={works[2].description}
//                 image={works[2].image}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import SelectedWorkCard from "../cards/SelectedWorkCard";

const works = [
  {
    id: 1,
    title: "Topic will be placed here",
    description:
      "This is abt he detailed explanation of project, which last 2 lines",
    image: "/images/photographer.png",
  },
  {
    id: 2,
    title: "Topic will be placed here",
    description:
      "This is abt he detailed explanation of project, which last 2 lines",
    image: "/images/photographer.png",
  },
  {
    id: 3,
    title: "Topic will be placed here",
    description:
      "This is abt he detailed explanation of project, which last 2 lines",
    image: "/images/photographer.png",
  },
];

export default function SelectedWorksScene() {
  const sectionRef = useRef<HTMLElement>(null);

  const lineRef = useRef<HTMLDivElement>(null);
  const pointerTrackRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);

  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const pointerTrack = pointerTrackRef.current;
    const activeLine = activeLineRef.current;
    const firstCard = firstCardRef.current;
    const secondCard = secondCardRef.current;

    if (
      !section ||
      !line ||
      !pointerTrack ||
      !activeLine ||
      !firstCard ||
      !secondCard
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * ==========================================
       * INITIAL STATES
       * ==========================================
       */

      gsap.set(pointerTrack, {
        opacity: 0,
        y: 0,
      });

      gsap.set(line, {
        opacity: 0,
      });

      gsap.set(activeLine, {
        opacity: 0,
        y: 0,
      });

      gsap.set(firstCard, {
        opacity: 0,
        y: 80,
      });

      gsap.set(secondCard, {
        opacity: 0,
        y: 80,
      });

      /*
       * ==========================================
       * ENTRY STATE
       * ==========================================
       */

      let entryFinished = false;

      /*
       * ==========================================
       * ENTRY TIMELINE
       * ==========================================
       *
       * Section enters
       *       ↓
       * Delay
       *       ↓
       * Pointer
       *       ↓
       * Delay
       *       ↓
       * Line
       *       ↓
       * Delay
       *       ↓
       * Active line
       *       ↓
       * Delay
       *       ↓
       * First card
       */

      const entryTimeline = gsap.timeline({
        paused: true,

        onComplete: () => {
          entryFinished = true;
        },
      });

      /*
       * ------------------------------------------
       * Initial black-screen delay
       * ------------------------------------------
       */

      entryTimeline.to(
        {},
        {
          duration: 0.7,
        },
      );

      /*
       * ------------------------------------------
       * Pointer appears
       * ------------------------------------------
       */

      entryTimeline.to(pointerTrack, {
        opacity: 1,
        duration: 0.55,
        ease: "power2.out",
      });

      /*
       * ------------------------------------------
       * Delay after pointer
       * ------------------------------------------
       */

      entryTimeline.to(
        {},
        {
          duration: 0.15,
        },
      );

      /*
       * ------------------------------------------
       * Main line appears
       * ------------------------------------------
       */

      entryTimeline.to(line, {
        opacity: 1,
        duration: 0.65,
        ease: "power2.out",
      });

      /*
       * ------------------------------------------
       * Delay after line
       * ------------------------------------------
       */

      entryTimeline.to(
        {},
        {
          duration: 0.2,
        },
      );

      /*
       * ------------------------------------------
       * Active moving line appears
       * ------------------------------------------
       */

      entryTimeline.to(activeLine, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      /*
       * ------------------------------------------
       * Delay before first card
       * ------------------------------------------
       */

      entryTimeline.to(
        {},
        {
          duration: 0.3,
        },
      );

      /*
       * ------------------------------------------
       * First card enters from bottom
       * ------------------------------------------
       */

      entryTimeline.to(firstCard, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      });

      /*
       * ==========================================
       * SECTION ENTRY
       * ==========================================
       *
       * The sequence does not begin until the
       * Selected Works section has entered.
       */

      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        once: true,

        onEnter: () => {
          entryTimeline.play();
        },
      });

      /*
       * ==========================================
       * POINTER + ACTIVE LINE
       * ==========================================
       *
       * This only starts affecting the elements
       * after the entry animation is finished.
       */

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",

        onUpdate: (self) => {
          if (!entryFinished) {
            return;
          }

          const velocity = self.getVelocity();

          const maxOffset = 120;

          const offset = gsap.utils.clamp(
            -maxOffset,
            maxOffset,
            velocity * 0.06,
          );

          /*
           * Move pointer.
           */

          gsap.to(pointerTrack, {
            y: offset,
            duration: 0.35,
            ease: "power3.out",
            overwrite: true,
          });

          /*
           * Move glowing segment.
           */

          gsap.to(activeLine, {
            y: offset,
            duration: 0.35,
            ease: "power3.out",
            overwrite: true,
          });
        },

        /*
         * ----------------------------------------
         * Leave
         * ----------------------------------------
         */

        onLeave: () => {
          if (!entryFinished) {
            return;
          }

          gsap.to([pointerTrack, activeLine], {
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.4)",
          });
        },

        /*
         * ----------------------------------------
         * Enter back
         * ----------------------------------------
         */

        onEnterBack: () => {
          if (!entryFinished) {
            return;
          }

          gsap.to([pointerTrack, activeLine], {
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });

      /*
       * ==========================================
       * SECOND CARD
       * ==========================================
       */

      gsap.to(secondCard, {
        opacity: 1,
        y: 0,

        duration: 0.7,
        ease: "power3.out",

        scrollTrigger: {
          trigger: secondCard,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="y-folio__selected-works-scene-wrapper">
      <div className="container y-folio__selected-works-scene mx-auto">
        <div className="y-folio__selected-works-inner">
          {/* ========================================
              LEFT
          ======================================== */}

          <div className="y-folio__selected-works-scene-left flex flex-col justify-between gap-y-[59em] pt-[80em]">
            <SelectedWorkCard
              title={works[0].title}
              description={works[0].description}
              image={works[0].image}
            />
          </div>

          {/* ========================================
              MIDDLE
          ======================================== */}

          <div className="y-folio__selected-works-scene-middle">
            {/*
             * IMPORTANT:
             *
             * The middle track is NOT sticky.
             *
             * The sticky element is inside it.
             * Therefore the center object initially
             * participates in normal document flow.
             */}

            <div className="y-folio__selected-works-middle-track">
              <div className="y-folio__selected-works-middle-sticky">
                <div className="relative h-[38rem] w-full">
                  {/* ==================================
                      BASE DASHED LINE
                      ================================== */}

                  <div
                    ref={lineRef}
                    className="
                      y-folio__selected-works-line
                      absolute
                      left-1/2
                      top-0
                      h-full
                      w-[3px]
                      -translate-x-1/2
                    "
                  />

                  {/* ==================================
                      ACTIVE MOVING LINE
                      ================================== */}

                  <div
                    ref={activeLineRef}
                    className="
                      y-folio__selected-works-active-line
                      absolute
                      left-1/2
                      top-1/2
                      z-[5]
                      h-[7rem]
                      w-[3px]
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                  />

                  {/* ==================================
                      POINTER
                      ================================== */}

                  <div
                    ref={pointerTrackRef}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-10
                      -translate-x-1/2
                    "
                  >
                    <div
                      className="
                        y-folio__selected-works-pointer
                        h-5
                        w-5
                        -translate-y-1/2
                        rounded-full
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================
              RIGHT
          ======================================== */}

          <div className="y-folio__selected-works-scene-right flex flex-col justify-between gap-y-[99em] pt-[18.6em]">
            {/* ----------------------------------------
                FIRST CARD
            ---------------------------------------- */}

            <div ref={firstCardRef}>
              <SelectedWorkCard
                title={works[1].title}
                description={works[1].description}
                image={works[1].image}
              />
            </div>

            {/* ----------------------------------------
                SECOND CARD
            ---------------------------------------- */}

            <div ref={secondCardRef}>
              <SelectedWorkCard
                title={works[2].title}
                description={works[2].description}
                image={works[2].image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
