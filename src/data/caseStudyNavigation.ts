
import { caseStudies, type CaseStudySlug } from "./caseStudies";

export const caseStudyOrder: CaseStudySlug[] = [
  "waitList",
  "creator",
  "agency",
  "website",
  "nexusAi",
  "marketingVisuals",
];

export function getAdjacentCaseStudy(currentSlug: CaseStudySlug) {
  const currentIndex = caseStudyOrder.indexOf(currentSlug);

  if (currentIndex === -1) return null;

  // The final case study links back to the previous one.
  const targetIndex =
    currentIndex === caseStudyOrder.length - 1
      ? currentIndex - 1
      : currentIndex + 1;

  const slug = caseStudyOrder[targetIndex];

  const routes: Record<CaseStudySlug, string> = {
    waitList: "/case-study/waitlist",
    creator: "/case-study/creator",
    agency: "/case-study/agency",
    website: "/case-study/website",
    complexAi: "/case-study/complexAi",
    nexusAi: "/case-study/nexusAi",
    marketingVisuals: "/case-study/marketing-visuals",
  };

  return {
    slug,
    title: caseStudies[slug].title,
    href: routes[slug],
    direction:
      currentIndex === caseStudyOrder.length - 1
        ? "previous"
        : "next",
  } as const;
}
