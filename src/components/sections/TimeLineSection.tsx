// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "@/lib/animations/gsap";

// import CtaBtn from "../buttons/ButtonCta";
// import ArrowIcon from "../icons/ArrowIcon";
// import TimelineCard from "./TimeLineCard";

// const timelineCards = [
//   {
//     id: 1,
//     title: "Waitlist to Creator Network",
//     description:
//       "Turning an existing creator database into an verified network.",
//   },
//   {
//     id: 2,
//     title: "Creator Data Into Identity",
//     description:
//       "Turning existing creator profiles into an onboarding channel.",
//   },
//   {
//     id: 3,
//     title: "Agency Pitch Into a Story",
//     description:
//       "Designing Qoruz's client deck to communicate expertise, execution and credibility within seconds.",
//   },
// ];

// export default function TimelineSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const hoverRef = useRef<HTMLDivElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);
//   const initialRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const hover = hoverRef.current;
//     const cta = ctaRef.current;
//     const initial = initialRef.current;

//     if (!section || !hover || !cta || !initial) {
//       return;
//     }

//     const ctx = gsap.context(() => {
//       const hoverTimeline = gsap.timeline({
//         paused: true,
//         defaults: {
//           ease: "power2.out",
//         },
//       });

//       /*
//        * ==========================================
//        * INITIAL STATE
//        * ==========================================
//        */

//       gsap.set(hover, {
//         opacity: 0,
//       });

//       gsap.set(cta, {
//         opacity: 0,
//         y: 20,
//         scale: 0.95,
//       });

//       /*
//        * ==========================================
//        * HOVER ANIMATION
//        * ==========================================
//        */

//       hoverTimeline
//         .to(hover, {
//           opacity: 1,
//           duration: 0.45,
//         })
//         .to(
//           cta,
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 0.4,
//             ease: "power3.out",
//           },
//           "-=0.2",
//         );

//       const handleMouseEnter = () => {
//         hoverTimeline.play();
//       };

//       const handleMouseLeave = () => {
//         hoverTimeline.reverse();
//       };

//       section.addEventListener("mouseenter", handleMouseEnter);
//       section.addEventListener("mouseleave", handleMouseLeave);

//       return () => {
//         section.removeEventListener("mouseenter", handleMouseEnter);
//         section.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     }, sectionRef);

//     return () => {
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <section
//     className="relative mx-auto w-[calc(100%-2rem)] sm:w-[90%] lg:w-[80%] xl:w-[70%] timeline-section-wrapper h-[45rem]"
//     >
//       <div className="container mx-auto">
//         <div
//           ref={sectionRef}
//           className="
//             timeline-section
//             relative
//             overflow-hidden
//             rounded-[28px]
//             sm:rounded-[40px]
//             lg:rounded-[80px]
//           "
//         >
//           {/* ========================================
//               INITIAL TIMELINE STATE
//           ======================================== */}

//           <div
//             ref={initialRef}
//             className="
//               timeline-section-initial
//               timeline-section-gradient-effect
//               px-5
//               py-8
//               sm:px-8
//               sm:py-10
//               md:px-10
//               md:py-12
//               lg:px-14
//               lg:py-12
//             "
//           >
//             {/* ======================================
//                 HEADING
//             ====================================== */}

//             <div
//               className="
//                 timeline-heading
//                 mb-8
//                 sm:mb-10
//                 lg:mb-12
//               "
//             >
//               <h2
//                 className="
//                   timeline-title
//                   block
//                   text-center
//                   text-[clamp(1.75rem,5vw,3rem)]
//                   font-semibold
//                   leading-none
//                   tracking-wide
//                   text-white
//                 "
//               >
//                 Selected Works
//               </h2>
//             </div>

//             {/* ======================================
//                 TIMELINE CARDS
//             ====================================== */}

//             <div
//               className="
//                 timeline-cards
//                 grid
//                 gap-y-6
//                 sm:gap-y-8
//                 lg:gap-y-2
//               "
//             >
//               {timelineCards.map((e, index) => (
//                 <div
//                   key={e.id}
//                   className={
//                     index % 2 === 0
//                       ? "w-full justify-self-end sm:w-[80%] lg:w-auto"
//                       : "w-full justify-self-start sm:w-[80%] lg:w-auto"
//                   }
//                 >
//                   <TimelineCard title={e.title} description={e.description} />
//                 </div>
//               ))}
//             </div>

//             {/* ======================================
//                 GRADIENT CIRCLE
//             ====================================== */}

//             <div className="y-folio__timeline-gradient-circle" />
//           </div>

//           {/* ========================================
//               HOVER STATE
//           ======================================== */}
// {/* 
//           <div
//             ref={hoverRef}
//             className="
//               timeline-section-hover
//               absolute
//               inset-0
//               flex
//               items-center
//               justify-center
//               rounded-[28px]
//               bg-black/80
//               sm:rounded-[40px]
//               lg:rounded-[60px]
//             "
//           >
//             <div ref={ctaRef}>
//               <CtaBtn
//                 className="
//                   y-folio__cta-btn
//                   group
//                   flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-md
//                   bg-[#07DE9A]
//                   px-5
//                   py-2
//                   text-sm
//                   font-medium
//                   sm:px-6
//                   sm:py-2
//                   sm:text-base
//                 "
//               >
//                 <span>View all</span>
//                 <ArrowIcon />
//               </CtaBtn>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }


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
      "Turning an existing creator database into a verified network.",
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
      "Designing Qoruz's client deck to communicate expertise, execution and credibility within seconds.",
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

      hoverDelay = gsap.delayedCall(0.6, () => {
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
        w-[calc(100%-2rem)]
        sm:w-[90%]
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
                lg:gap-y-2
              "
            >
              {timelineCards.map((card, index) => (
                <div
                  key={card.id}
                  className={
                    index % 2 === 0
                      ? "w-full justify-self-end sm:w-[80%] lg:w-auto"
                      : "w-full justify-self-start sm:w-[80%] lg:w-auto"
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
    </section>
  );
}

