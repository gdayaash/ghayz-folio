// interface ProjectOverviewProps {
//   title: string;
//   description: string;
// }

// export default function ProjectOverview({
//   title,
//   description,
// }: ProjectOverviewProps) {
//   return (
//     <div className="y-folio__case-study-waitlist-project-overview flex flex-col gap-3">
//       <h2 className="y-folio__project-overview-title text-[48px] font-bold">
//         {title}
//       </h2>
//       <p className="y-folio__project-overview-description text-[24px] opacity-70">
//         {description}
//       </p>
//     </div>
//   );
// }

interface ProjectOverviewProps {
  title: string;
  description: string;
}

export default function ProjectOverview({
  title,
  description,
}: ProjectOverviewProps) {
  return (
    <div className="y-folio__case-study-waitlist-project-overview flex min-w-0 flex-col gap-3 sm:gap-4">
      <h2 className="y-folio__project-overview-title text-3xl font-bold sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <p className="y-folio__project-overview-description break-words text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl">
        {description}
      </p>
    </div>
  );
}
