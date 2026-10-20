// interface CaseStudyHeroProps {
//   title: string;
//   subTitle: string;
// }

// export default function CaseStudyHero({ title, subTitle }: CaseStudyHeroProps) {
//   return (
//     <div className="y-folio__case-study-hero py-48 w-max mx-auto text-center flex flex-col gap-6">
//       <div className="y-folio__case-study-title-area">
//         <h1 className="y-folio__case-study-title text-[56px] font-bold">
//           {title}
//         </h1>

//         <p className="y-folio__case-study-subtitle text-[24px] opacity-80">
//           {subTitle}
//         </p>
//       </div>
//     </div>
//   );
// }

interface CaseStudyHeroProps {
  title: string;
  subTitle: string;
  miniTitle?: string;
}

export default function CaseStudyHero({
  title,
  subTitle,
  miniTitle,
}: CaseStudyHeroProps) {
  return (
    <div className="y-folio__case-study-hero mx-auto flex w-full max-w-5xl flex-col gap-4 py-20 text-center sm:gap-6 sm:py-28 md:py-36 lg:py-48">
      <div className="y-folio__case-study-title-area min-w-0">
        <h5 className="y-folio__case-study-mini-title text-[24px] text-white font-bold">
          {miniTitle}
        </h5>
        <h1 className="y-folio__case-study-title break-words text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[56px]">
          {title}
        </h1>

        <p className="y-folio__case-study-subtitle mx-auto mt-3 max-w-3xl break-words text-base opacity-80 sm:mt-4 sm:text-lg md:mt-5 md:text-xl lg:text-2xl">
          {subTitle}
        </p>
      </div>
    </div>
  );
}
