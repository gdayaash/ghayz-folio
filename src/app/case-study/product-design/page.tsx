"use client";

import CaseStudyHero from "@/components/case-study/CaseHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import Objective from "@/components/case-study/Objective";
import ProjectOverview from "@/components/case-study/ProjectOverview";
import Header from "@/components/header/Header";
import { caseStudies } from "@/data/caseStudies";

export default function ProductDesign() {
  return (
    <>
      <Header btnBgColor="bg-white" btnTxtColor="text-black" />
      <ProductDesignBody />
    </>
  );
}

export function ProductDesignBody() {
  const study = caseStudies.productDesign;

  return (
    <section className="y-folio__case-study-waitlist-wrapper w-full overflow-x-clip">

      {/* Hero */}
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="y-folio__case-study-banner-area">
          <CaseStudyHero
            miniTitle="HashFame | Product Design"
            title={study.title}
            subTitle={study.subTitle}
          />
        </div>
      </div>

      {/* Project Overview */}
      <div className="container case-study-content-container mx-auto flex w-full min-w-0 flex-col gap-16 px-4 pt-16 sm:gap-20 sm:px-6 sm:pt-24 md:gap-30 md:pt-32 lg:px-8 lg:pt-40">

        <ProjectOverview
          title={study.projectOverview.title}
          description={study.projectOverview.description}
        />

        {/* Objective */}
        <Objective
          title={study.objective.title}
          description={study.objective.description}
        />

        {/* My Role */}
        <div className="y-folio__case-study-my-role flex min-w-0 flex-col gap-4 sm:gap-5">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            {study.myRole.title}
          </h2>

          <p className="break-words text-base font-[300] opacity-70 sm:text-lg md:text-xl lg:text-2xl">
            {study.myRole.description}
          </p>
        </div>

        {/* Key Areas of Work */}
        <div className="y-folio__case-study-key-areas flex min-w-0 flex-col gap-5 sm:gap-6">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Key Areas of Work
          </h2>

          <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
            {study.keyAreasofWork.map((area, index) => (
              <article
                key={`${area.title}-${index}`}
                className="flex min-w-0 flex-col gap-2"
              >
                <h3 className="break-words text-lg font-semibold sm:text-xl md:text-2xl">
                  {String(index + 1).padStart(2, "0")}. {area.title}
                </h3>

                <p className="break-words text-base font-[300] opacity-70 sm:text-lg md:text-xl lg:text-2xl">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Design Focus */}
        <div className="y-folio__case-study-design-focus flex min-w-0 flex-col gap-5 sm:gap-6">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Design Focus
          </h2>

          <div className="flex min-w-0 flex-col gap-4 sm:gap-5">
            {study.designFocus.map((focus, index) => (
              <p
                key={`${index}-${focus}`}
                className="break-words text-base font-[300] opacity-70 sm:text-lg md:text-xl lg:text-2xl"
              >
                {focus}
              </p>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="y-folio__case-study-outcome flex min-w-0 flex-col gap-4 sm:gap-5">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Outcome
          </h2>

          <p className="break-words text-base font-[300] opacity-70 sm:text-lg md:text-xl lg:text-2xl">
            {study.outcome}
          </p>
        </div>

        {/* Next Project */}
        <div className="pb-12 sm:pb-16 md:pb-20">
          <CaseStudyNav currentSlug="productDesign" />
        </div>

      </div>
    </section>
  );
}