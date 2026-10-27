// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "@/lib/animations/gsap";

// import SelectedTextSVG from "../icons/SelectedTextSVG";

// function SelectedWorkText() {
//   const titleRef = useRef<HTMLHeadingElement>(null);

//   useLayoutEffect(() => {
//     const title = titleRef.current;

//     if (!title) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         title,
//         {
//           y: 30,
//           scale: 0.96,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.2,
//           ease: "power3.out",
//         },
//       );
//     }, titleRef);

//     return () => ctx.revert();
//   }, []);
//   return (
//     <section className="y-folio__selected-works-wrapper pt-40 flex flex-col justify-center">
//       <div className="container mx-auto flex justify-center">
//         <div className="y-folio__selected-works-title-area">
//           <h1
//             ref={titleRef}
//             className="y-folio__selected-works-title text-center relative flex flex-col"
//           >
//             <span className="y-folio__selected-works-title-text-span-on mx-auto">
//               <SelectedTextSVG />
//             </span>
//             <span className="y-folio__selected-works-title-text-span-second text-[#E0FFFB] text-[120px] font-bold z-3">
//               Works
//             </span>
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SelectedWorkText;

"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap";

import SelectedTextSVG from "../icons/SelectedTextSVG";

function SelectedWorkText() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const title = titleRef.current;

    if (!title) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 30,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power3.out",
        },
      );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="y-folio__selected-works-wrapper flex flex-col justify-center pt-12 sm:pt-40 md:pt-20 lg:pt-40">
      <div className="container mx-auto flex justify-center px-4">
        <div className="y-folio__selected-works-title-area w-full max-w-[900px]">
          <h1
            ref={titleRef}
            className="y-folio__selected-works-title relative flex flex-col items-center text-center"
          >
            <span className="y-folio__selected-works-title-text-span-on mx-auto w-full max-w-[678px]">
              <SelectedTextSVG className="block h-auto w-full" />
            </span>

            <span className="y-folio__selected-works-title-text-span-second z-[3] text-[clamp(2.5rem,10vw,7.5rem)] font-bold leading-none text-[#E0FFFB]">
              Works
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default SelectedWorkText;