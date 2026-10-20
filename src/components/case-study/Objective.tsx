// import type { ReactNode } from "react";

// interface ObjectiveProps {
//   title: string;
//   description: string;
//   children?: ReactNode;
// }

// export default function Objective({
//   title,
//   description,
//   children,
// }: ObjectiveProps) {
//   return (
//     <div className="y-folio__case-study-objective-wrapper flex flex-col gap-3">
//       <h2 className="y-folio__case-study-objective-title text-[48px] font-bold">
//         {title}
//       </h2>
//       <p className="y-folio__case-study-objective-desc text-[24px] opacity-70">
//         {description}
//       </p>

//       {children}
//     </div>
//   );
// }

import type { ReactNode } from "react";

interface ObjectiveProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function Objective({
  title,
  description,
  children,
}: ObjectiveProps) {
  return (
    <div className="y-folio__case-study-objective-wrapper flex min-w-0 flex-col gap-3 sm:gap-4">
      <h2 className="y-folio__case-study-objective-title text-3xl font-bold sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <p className="y-folio__case-study-objective-desc break-words text-base opacity-70 sm:text-lg md:text-xl lg:text-2xl">
        {description}
      </p>

      {children}
    </div>
  );
}
