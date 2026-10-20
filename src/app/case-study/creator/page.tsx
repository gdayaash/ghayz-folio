// "use client";

// import CaseStudyHero from "@/components/case-study/CaseHero";
// import CaseStudyNav from "@/components/case-study/CaseStudyNav";
// import DesignIframe from "@/components/case-study/DesignIframe";
// import Objective from "@/components/case-study/Objective";
// import ProjectOverview from "@/components/case-study/ProjectOverview";
// import Header from "@/components/header/Header";
// import { caseStudies } from "@/data/caseStudies";

// import {
//   Target,
//   ChatCircle,
//   ShieldCheck,
//   DeviceMobile,
// } from "@phosphor-icons/react";

// import Image from "next/image";

// const requirementIcons = {
//   target: Target,
//   "message-circle": ChatCircle,
//   "shield-check": ShieldCheck,
//   smartphone: DeviceMobile,
// } as const;

// export default function Creator() {
//   return (
//     <>
//       <Header />
//       <CreatorBody />
//     </>
//   );
// }

// export function CreatorBody() {
//   const study = caseStudies.waitList;

//   return (
//     <section className="y-folio__case-study-waitlist-wrapper">
//       {/* Hero */}
//       <div className="container mx-auto">
//         <div className="y-folio__case-study-banner-area">
//           <CaseStudyHero
//             title={caseStudies.creator.title}
//             subTitle={caseStudies.creator.subTitle}
//           />
//         </div>
//       </div>

//       {/* Hero image */}
//       <div className="container mx-auto w-full">
//         <div className="y-folio__case-study-banner-image">
//           <Image
//             src={caseStudies.creator.heroImage.src}
//             alt={caseStudies.creator.heroImage.alt}
//             width={1200}
//             height={600}
//             priority
//             className="h-auto w-full"
//             sizes="(max-width: 1200px) 100vw, 1200px"
//           />
//         </div>
//       </div>

//       <div className="container mx-auto flex flex-col gap-24 pt-48">
//         {/* Project overview */}
//         <ProjectOverview
//           title={caseStudies.creator.projectOverview.title}
//           description={caseStudies.creator.projectOverview.description}
//         />

//         {/* Objective */}
//         <Objective
//           title={caseStudies.creator.objective.title}
//           description={caseStudies.creator.objective.description}
//         >
//           <p className="y-folio__objective-list-text text-[24px] opacity-70">
//             The experience had to:
//           </p>

//           <ul className="y-folio__objective-pointer-items flex flex-col gap-3 text-[24px] opacity-70">
//             {caseStudies.creator.objective.requirements.map((item) => {
//               const Icon = requirementIcons[item.icon];

//               return (
//                 <li key={item.icon} className="flex items-start gap-3">
//                   <Icon
//                     size={24}
//                     weight="fill"
//                     color="red"
//                     className="mt-1 shrink-0"
//                     aria-hidden="true"
//                   />

//                   <span>{item.description}</span>
//                 </li>
//               );
//             })}
//           </ul>
//         </Objective>

//         {/* Problems found */}
//         <div className="y-folio__case-study-problems-found flex flex-col gap-6">
//           <h2 className="y-folio__problems-found-title text-[48px] font-bold">
//             {caseStudies.creator.problemsFound.title}
//           </h2>

//           <p className="y-folio__problems-found-description text-[24px] opacity-70">
//             {caseStudies.creator.problemsFound.description}
//           </p>

//           <p className="text-[24px] opacity-70">
//             <strong>Our Main Challenge:</strong>{" "}
//             {caseStudies.creator.problemsFound.question}
//           </p>

//           <p className="text-[24px] opacity-70">
//             We approached this as an evolving acquisition funnel:
//           </p>

//           <ol className="y-folio__problems-found-approach-list list-decimal space-y-3 pl-7">
//             {caseStudies.creator.problemsFound.answer.map((item) => (
//               <li key={item} className="text-[24px] opacity-70">
//                 {item}
//               </li>
//             ))}
//           </ol>

//           {/* Comments */}
//           <div className="y-folio__problems-found-comment-box rounded-[10px] border-l-[5px] border-[#03B197] bg-white/5 p-4">
//             <p className="text-[24px]">
//               <strong>Comments:</strong>{" "}
//               <span className="opacity-70">
//                 {caseStudies.creator.comments.text}
//               </span>
//             </p>
//           </div>

//           {/* Approaches */}
//           <div className="y-folio__approach-wrapper pt-20">
//             <h2 className="y-folio__approach-title mb-3 text-[48px] font-bold">
//               Approach
//             </h2>

//             <div className="flex flex-col gap-10">
//               {caseStudies.creator.approach.map((approach) => (
//                 <article
//                   key={approach.title}
//                   className="y-folio__case-study-approach-box flex flex-col gap-4"
//                 >
//                   <h3 className="text-[26px] font-semibold">
//                     {approach.title}
//                   </h3>

//                   {approach.description.map((paragraph) => (
//                     <p key={paragraph} className="text-[24px] opacity-70">
//                       {paragraph}
//                     </p>
//                   ))}
//                 </article>
//               ))}
//             </div>
//           </div>

//           {/* Designs */}
//           <div className="y-folio__case-study-designs flex flex-col gap-4 pt-16">
//             <h2 className="text-[48px] font-bold">Designs</h2>

//             <p className="text-[24px] opacity-70">
//               {caseStudies.creator.designs.description}
//             </p>

//             <div className="y-folio__case-study-iframe-box">
//               <DesignIframe
//                 title={"Nice"}
//                 iframePath="https://embed.figma.com/design/xoo4fAryF3SQ7wnWgpVRQt/portfolio?node-id=330-95&embed-host=share"
//               />
//             </div>
//           </div>

//           {/* Business impact */}
//           <div className="y-folio__case-study-business-impact flex flex-col gap-6 pt-16">
//             <h2 className="text-[48px] font-bold">Business Impact</h2>

//             <p className="text-[24px] opacity-70">
//               {caseStudies.creator.businessImpact.description}
//             </p>

//             <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
//               {caseStudies.creator.businessImpact.counters.map((counter) => (
//                 <article
//                   key={counter.counterSubtitle}
//                   className="flex flex-col gap-3 glass-card-case-study text-center"
//                 >
//                   <p className="text-[80px] font-semibold text-white text-center">
//                     {counter.counterTitle}
//                   </p>

//                   <h3 className="text-[24px] font-semibold text-white">
//                     {counter.counterSubtitle}
//                   </h3>

//                   <p className="text-[20px] opacity-70">
//                     {counter.description}
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* {Next CaseStudy}  */}
//         <CaseStudyNav />
//       </div>
//     </section>
//   );
// }

"use client";

import CaseStudyHero from "@/components/case-study/CaseHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import DesignIframe from "@/components/case-study/DesignIframe";
import Objective from "@/components/case-study/Objective";
import ProjectOverview from "@/components/case-study/ProjectOverview";
import Header from "@/components/header/Header";
import { caseStudies } from "@/data/caseStudies";

import {
  Target,
  ChatCircle,
  ShieldCheck,
  DeviceMobile,
} from "@phosphor-icons/react";

import Image from "next/image";

const requirementIcons = {
  target: Target,
  "message-circle": ChatCircle,
  "shield-check": ShieldCheck,
  smartphone: DeviceMobile,
} as const;

export default function Creator() {
  return (
    <>
      <Header />
      <CreatorBody />
    </>
  );
}

export function CreatorBody() {
  const study = caseStudies.creator;

  return (
    <section className="y-folio__case-study-waitlist-wrapper w-full overflow-x-clip">
      {/* Hero */}
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="y-folio__case-study-banner-area">
          <CaseStudyHero miniTitle="HashFame | Post-Launch" title={study.title} subTitle={study.subTitle} />
        </div>
      </div>

      {/* Hero image */}
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="y-folio__case-study-banner-image w-full overflow-hidden rounded-xl sm:rounded-2xl">
          <Image
            src={study.heroImage.src}
            alt={study.heroImage.alt}
            width={1200}
            height={600}
            priority
            className="block h-auto w-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto flex w-full min-w-0 flex-col gap-16 px-4 pt-16 sm:gap-20 sm:px-6 sm:pt-24 md:gap-24 md:pt-32 lg:px-8 lg:pt-40">
        {/* Project overview */}
        <ProjectOverview
          title={study.projectOverview.title}
          description={study.projectOverview.description}
        />

        {/* Objective */}
        <Objective
          title={study.objective.title}
          description={study.objective.description}
        >
          <p className="y-folio__objective-list-text text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl">
            The experience had to:
          </p>

          <ul className="y-folio__objective-pointer-items flex min-w-0 flex-col gap-3 text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl">
            {study.objective.requirements.map((item, index) => {
              const Icon = requirementIcons[item.icon];

              return (
                <li
                  key={`${item.icon}-${index}`}
                  className="flex min-w-0 items-start gap-3"
                >
                  <Icon
                    size={24}
                    weight="fill"
                    color="#03B197"
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />

                  <span className="min-w-0 break-words">
                    {item.description}
                  </span>
                </li>
              );
            })}
          </ul>
        </Objective>

        {/* Problems found */}
        <div className="y-folio__case-study-problems-found flex min-w-0 flex-col gap-5 sm:gap-6">
          <h2 className="y-folio__problems-found-title text-3xl font-bold sm:text-4xl md:text-5xl">
            {study.problemsFound.title}
          </h2>

          <p className="y-folio__problems-found-description break-words text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl">
            {study.problemsFound.description}
          </p>

          <p className="break-words text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl">
            <strong>Our Main Challenge:</strong> {study.problemsFound.question}
          </p>

          <p className="text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl">
            We approached this as an evolving acquisition funnel:
          </p>

          <ol className="y-folio__problems-found-approach-list list-decimal space-y-3 pl-5 sm:pl-7">
            {study.problemsFound.answer.map((item, index) => (
              <li
                key={`${index}-${item.slice(0, 30)}`}
                className="break-words text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl"
              >
                {item}
              </li>
            ))}
          </ol>

          {/* Comments */}
          <div className="y-folio__problems-found-comment-box rounded-lg border-l-4 border-[#03B197] bg-white/5 p-4 sm:rounded-xl sm:p-6">
            <p className="break-words text-base sm:text-lg md:text-xl lg:text-2xl">
              <strong>Comments:</strong>{" "}
              <span className="opacity-70">{study.comments.text}</span>
            </p>
          </div>

          {/* Approaches */}
          <div className="y-folio__approach-wrapper pt-8 sm:pt-12 md:pt-16">
            <h2 className="y-folio__approach-title mb-4 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl">
              Approach
            </h2>

            <div className="flex flex-col gap-8 sm:gap-10">
              {study.approach.map((approach, index) => (
                <article
                  key={`${approach.title}-${index}`}
                  className="y-folio__case-study-approach-box flex min-w-0 flex-col gap-3 sm:gap-4"
                >
                  <h3 className="break-words text-xl font-semibold sm:text-2xl md:text-[26px]">
                    {approach.title}
                  </h3>

                  {approach.description.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${paragraphIndex}-${paragraph.slice(0, 30)}`}
                      className="break-words text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl"
                    >
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>

          {/* Designs */}
          <div className="y-folio__case-study-designs flex min-w-0 flex-col gap-4 pt-8 sm:pt-12 md:pt-16">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Designs
            </h2>

            <p className="break-words text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl">
              {study.designs.description}
            </p>

            <div className="y-folio__case-study-iframe-box mt-2">
              <DesignIframe
                title="Creator design"
                iframePath="https://embed.figma.com/design/xoo4fAryF3SQ7wnWgpVRQt/portfolio?node-id=330-95&embed-host=share"
              />
            </div>
          </div>

          {/* Business impact */}
          <div className="y-folio__case-study-business-impact flex min-w-0 flex-col gap-4 pt-8 sm:gap-6 sm:pt-12 md:pt-16">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Business Impact
            </h2>

            <p className="break-words text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl">
              {study.businessImpact.description}
            </p>

            <div className="mt-4 grid min-w-0 grid-cols-1 items-stretch gap-5 sm:mt-8 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {study.businessImpact.counters.map((counter, index) => (
                <article
                  key={`${counter.counterSubtitle}-${index}`}
                  className="glass-card-case-study flex min-w-0 flex-col items-center gap-3 text-center"
                >
                  <p className="break-words text-5xl font-semibold text-white sm:text-6xl md:text-7xl lg:text-[80px]">
                    {counter.counterTitle}
                  </p>

                  <h3 className="break-words text-lg font-semibold text-white sm:text-xl md:text-2xl">
                    {counter.counterSubtitle}
                  </h3>

                  <p className="break-words text-sm opacity-70 sm:text-base md:text-lg">
                    {counter.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Next case study navigation */}
        <div className="pb-12 sm:pb-16 md:pb-20">
          <CaseStudyNav />
        </div>
      </div>
    </section>
  );
}
