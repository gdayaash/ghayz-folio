// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
// import PassionCard from "../cards/PassionCard";

// export default function PassionSection() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;

//     if (!section) return;

//     const ctx = gsap.context(() => {
//       const cards = gsap.utils.toArray<HTMLElement>(".y-folio__passion-card");

//       cards.forEach((card) => {
//         const title = card.querySelector<HTMLElement>(
//           ".y-folio__passion-card-title",
//         );

//         const subtitle = card.querySelector<HTMLElement>(
//           ".y-folio__passion-card-subtitle",
//         );

//         const image = card.querySelector<HTMLElement>(
//           ".y-folio__passion-card-image",
//         );

//         if (!title || !subtitle || !image) {
//           return;
//         }

//         gsap.set([title, subtitle, image], {
//           opacity: 0.3,
//           y: 20,
//         });

//         const timeline = gsap.timeline({
//           scrollTrigger: {
//             trigger: card,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//             markers: false,
//           },
//         });

//         timeline
//           .to(title, {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//           })
//           .to(
//             subtitle,
//             {
//               opacity: 1,
//               y: 0,
//               duration: 1,
//             },
//             ">",
//           )
//           .to(
//             image,
//             {
//               opacity: 1,
//               y: 0,
//               duration: 1,
//             },
//             ">",
//           );
//       });

//       ScrollTrigger.refresh();
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="passion"
//       className="y-folio__passion-wrapper px-4 py-16 sm:px-6 sm:py-20 lg:px-0 lg:py-24"
//     >
//       <div className="container mx-auto">
//         {/* Heading */}
//         <div className="y-folio__passion-heading-area">
//           <h2 className="y-folio__passion-section-title text-center text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-tight">
//             Beyond the Interface
//           </h2>
//         </div>

//         {/* Cards */}
//         <div
//           className="
//             y-folio__passion-cards-wrapper
//             mt-10
//             grid
//             grid-cols-1
//             gap-6
//             sm:mt-12
//             sm:grid-cols-1
//             sm:gap-7
//             md:grid-cols-2
//             lg:mt-16
//             lg:grid-cols-3
//             lg:gap-8
//           "
//         >
//           <PassionCard
//             title="Photographer"
//             subtitle="Capturing perspectives, details, and stories through the lens."
//             picpath="/images/home/photographer.png"
//           />

//           <PassionCard
//             title="Artist"
//             subtitle="Bringing concepts to life through art, skill, and imagination."
//             picpath="/images/home/artist.png"
//           />

//           <PassionCard
//             title="Literature"
//             subtitle="Understanding people through stories and language"
//             picpath="/images/home/literature.png"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import PassionCard from "../cards/PassionCard";

export default function PassionSection() {
  return (
    <section
      id="passion"
      className="y-folio__passion-wrapper px-4 py-16 sm:px-6 sm:py-20 lg:px-0 lg:py-24"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="y-folio__passion-heading-area">
          <h2 className="y-folio__passion-section-title text-center text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-tight">
            Beyond the Interface
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            y-folio__passion-cards-wrapper
            mt-10
            grid
            grid-cols-1
            gap-6
            sm:mt-12
            sm:gap-7
            md:grid-cols-2
            lg:mt-16
            lg:grid-cols-3
            lg:gap-8
          "
        >
          <PassionCard
            title="Photographer"
            subtitle="Capturing perspectives, details, and stories through the lens."
            picpath="/images/home/photographer.png"
          />

          <PassionCard
            title="Artist"
            subtitle="Bringing concepts to life through art, skill, and imagination."
            picpath="/images/home/artist.png"
          />

          <PassionCard
            title="Literature"
            subtitle="Understanding people through stories and language"
            picpath="/images/home/literature.png"
          />
        </div>
      </div>
    </section>
  );
}